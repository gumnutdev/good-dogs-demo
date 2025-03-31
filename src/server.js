import fastify from 'fastify';
import fastifyView from '@fastify/view';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import fastifyStatic from '@fastify/static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({
  logger: true
});

// Register view engine
app.register(fastifyView, {
  engine: {
    ejs: ejs
  },
  root: path.join(__dirname, 'views')
});

// Register static file serving
app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', 
  })

// Route for the main page
app.get('/', async (request, reply) => {
  return reply.viewAsync('index.ejs');
});

// Start the server
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start(); 