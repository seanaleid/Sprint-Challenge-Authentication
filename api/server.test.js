const request = require('supertest');

const db = require('../database/dbConfig.js');

const server = require('./server.js');

describe('endpoint tests', function() {
    describe('POST /register and POST /login', function () {
        beforeAll(async () => {
            await db('users').truncate();
        })
        
        it('1) POST /auth/register - should return status 201', function () {
            return request(server)
            .post('/api/auth/register')
            .send({ username: "newUser20", password: "newTest20"})
            .then(res => {
                expect(res.status).toBe(201);
            })
        })

        it('2) POST /auth/register - res.type should match json', function () {
            return request(server)
            .post('/api/auth/register')
            .send({ username: "newUser20", password: "newTest20"})
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })

        it('1) POST /auth/login - should return status 200', function () {
            return request(server)
            .post('/api/auth/login')
            .send({ username: "newUser20", password: "newTest20"})
            .then(res => {
                expect(res.status).toBe(200);
            })
        })

        it('2) POST /auth/login - should return message: "Welcome <username>!"', function () {
            return request(server)
            .post('/api/auth/login')
            .send({ username: "newUser20", password: "newTest20"})
            .then(res => {
                expect(res.body.message).toMatch(/Welcome newUser20!/i);
            })
        })

        it('1) GET /jokes/ - res.type should match json', function () {
            return request(server)
            .get('/api/jokes/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })

        it('2) GET /jokes/ - should be defined', function () {
            return request(server)
            .get('/api/jokes/')
            .then(res => {
                expect(res.body).toBeDefined();
            })
        })
    })
})