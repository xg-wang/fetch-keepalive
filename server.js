const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-static'), {
  root: __dirname,
})

// Declare a route
fastify.post('/api', async (_request, _reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
