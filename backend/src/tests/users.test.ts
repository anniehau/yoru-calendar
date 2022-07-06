import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import { app } from '../app';

chai.use(chaiHttp);

describe('[Users]: Testando as rotas', () => {
	describe('Ao fazer um POST na rota /users/login', () => {
		let chaiHttpResponse: Response;

		describe('com dados inexistentes', () => {
			before(async () => {
				chaiHttpResponse = await chai.request(app)
					.post('/users/login')
					.send({ email: 'test@email.com', password: '123456' });
			});

			it('retorna o status 404', async () => {
				expect(chaiHttpResponse).to.have.status(404);
			});

			it('o corpo da resposta contém a propriedade "error"', async () => {
				expect(chaiHttpResponse.body).to.have.key('error');
			});

			it('o corpo da resposta contém a mensagem de erro correta', async () => {
				expect(chaiHttpResponse.body.error).to.equal('User not found!');
			});
		});

		describe('com dados existentes', () => {
			before(async () => {
				chaiHttpResponse = await chai.request(app)
					.post('/users/login')
					.send({ email: 'admin@email.com', password: 'y0.4d@m19' });
			});

			it('retorna o status 200', async () => {
				expect(chaiHttpResponse).to.have.status(200);
			});

			it('o corpo da resposta contém as propriedades "id", "name", "email" e "token"', async () => {
				expect(chaiHttpResponse.body).to.include.all.keys('id', 'name', 'email', 'token');
			});

			it('o corpo da resposta NÃO contém a propriedade "password"', async () => {
				expect(chaiHttpResponse.body).to.not.have.key('password');
			});
		});
	});
});
