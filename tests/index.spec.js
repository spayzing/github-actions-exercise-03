const request = require('supertest')
const app = require('../index')

describe('GET /users', () => {
    it('responds with "Hello world!"', (done) => {
        request(app).get('/').expect('Hello world!', done)
    })
})