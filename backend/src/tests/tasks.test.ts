import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import { app } from '../app';

chai.use(chaiHttp);

describe('[Tasks]: Testando as rotas', () => {
	let chaiHttpResponse: Response;

	describe('Ao fazer um GET na rota /tasks', () => {
		describe('sem prover um token', () => {
			before(async () => {
				chaiHttpResponse = await chai.request(app)
					.get('/tasks');
			});
	
			it('retorna o status 401', () => {
				expect(chaiHttpResponse).to.have.status(401);
			});
	
			it('o corpo da resposta contém a propriedade "error"', () => {
				expect(chaiHttpResponse.body).to.have.property('error');
			});

			it('o corpo da resposta contém a mensagem de erro correta', async () => {
				expect(chaiHttpResponse.body.error).to.equal('Token not provided.');
			});
		});

		describe('provendo um token', () => {
			before(async () => {
				const response = await chai.request(app)
					.post('/users/login')
					.send({ email: 'admin@email.com', password: 'y0.4d@m19' });
				chaiHttpResponse = await chai.request(app)
					.get('/tasks')
					.set({ 'Authorization': response.body.token });
			});
	
			it('retorna o status 200', () => {
				expect(chaiHttpResponse).to.have.status(200);
			});
	
			it('o corpo da resposta é um array', () => {
				expect(chaiHttpResponse.body).to.be.an('array');
			});

			it('os itens do array são objetos', async () => {
				expect(chaiHttpResponse.body[0]).to.be.an('object');
			});

			it('os objetos contém as propriedades "id", "userId", "title", "description", "datetime" e "duration"', async () => {
				expect(chaiHttpResponse.body[0]).to.include.all.keys('id', 'userId', 'title', 'description', 'datetime', 'duration');
			});
		});
	});
});