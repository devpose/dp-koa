const server = require('../src/index')
const request = require('supertest')

afterEach(() => {
  server.close()
})

describe('api test', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/')
    expect(response.status).toEqual(200)
    expect(response.type).toEqual('text/plain')
    expect(response.text).toEqual('Hello World')
  })
})
