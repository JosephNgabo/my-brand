const mocha =require( 'mocha');
const chai=require( 'chai');
const { expect } =require( 'chai');
const chaiHttp =require( 'chai-http');
const Sinon = require('sinon');
const path = require('path')
const app =require( '../index');
const Blog =require( '../src/models/blogModel');
const cloudinary = require('../src/config/cloudinary');

const { it, describe, before, after } = mocha;

const testingData={
    title:'testing article title',
    body:'testing article content',
}
const testingComment={
    
    comment:'testing article content update',
}

const admin={
    email:'admin@gmail.com',
    password:'123456'
}
const testingDataUpdate={
    title:"hero",
    body:"lorem"
}

chai.expect();
chai.use(chaiHttp);

describe('Testing Blog routes', () => {
    const sandbox = Sinon.createSandbox();
    before(async () => {
        sandbox.stub(cloudinary, 'upload').resolves({
            url: 'wazaa',
          });
		await Blog.deleteMany();
	});

    after(async () => {
		await Blog.deleteMany();
	});
    it('should create new blog article.',async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res=await chai.request(app).post('/api/blog/add').field('title', testingData.title).field('body', testingData.body).attach('photo', path.resolve(__dirname, './mock/Photo.jpeg')).set('Authorization', token)
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a('object')
    })
    it('should get all blog articles.', async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await chai.request(app).post('/api/blog/add').send(testingData).set('Authorization', token)
        const res=await chai.request(app).get('/api/blog/')
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a('array')
    }),
    it('should get one blog article by id',async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await chai.request(app).post('/api/blog/add').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/api/blog/')
        const id=article.body[0]._id
        const res=await chai.request(app).get(`/api/blog/${id}`)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    }),
    it('should update blog article',async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await chai.request(app).post('/api/blog/add').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/api/blog/')
        const id=article.body[0]._id
        const res=await chai.request(app).patch(`/api/blog/update/${id}`).send(testingDataUpdate).set('Authorization', token)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    }),
    it('should delete blog article',async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await chai.request(app).post('/api/blog/add').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/api/blog/')
        const id=article.body[0]._id
        const res=await chai.request(app).delete(`/api/blog/${id}`).set('Authorization', token)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    }),
    it('should comment on blog article',async()=>{
        const adminSignin=await chai.request(app).post('/api/users/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await chai.request(app).post('/api/blog/add').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/api/blog/')
        const id=article.body[0]._id

        const res=await (await chai.request(app).post(`/api/blog/comment/${id}`).send(testingComment).set('Authorization', token))
        expect(res.body).to.be.a('object')
    })
})