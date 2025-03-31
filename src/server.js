import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import path from 'path';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
  logger: true
});

// Register Vite
await fastify.register(FastifyVite, {
	root: resolve(import.meta.dirname, '../'),
    dev: process.argv.includes('--dev'),
    spa: true
});

// Route for the main page
fastify.get('/', async (request, reply) => {
return reply.html();
});

// Start the server
const start = async () => {
  try {
    await fastify.vite.ready()
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 