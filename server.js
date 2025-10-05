import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

const app = express();
const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 3000);

app.disable('x-powered-by');

// Enable JSON body parsing for API requests and webhooks
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the built Vite output when it exists
if (fs.existsSync(DIST_DIR)) {
  app.use(
    express.static(DIST_DIR, {
      extensions: ['html'],
      setHeaders: (res, filePath) => {
        if (/\.(js|css|html|json)$/.test(filePath)) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else if (/\.(png|jpe?g|gif|svg|ico|webp|avif|woff2?|ttf|otf)$/.test(filePath)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    })
  );
} else {
  console.warn(
    `⚠️  Build output not found at ${DIST_DIR}. Run "npm run build" before starting the server.`
  );
}

// Lightweight health check endpoint for uptime monitors
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// SPA fallback - always serve index.html so React Router can handle routing
app.get('*', (req, res, next) => {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    const error = new Error(
      'Build output missing. Ensure the client has been built before serving the app.'
    );
    error.status = 500;
    return next(error);
  }

  res.sendFile(INDEX_HTML_PATH);
});

// Centralized error handler to avoid leaking stack traces in production
app.use((err, req, res, _next) => {
  const status = err.status || 500;

  if (status >= 500) {
    console.error('Unhandled server error:', err);
  }

  res.status(status).json({
    status: 'error',
    message:
      status >= 500
        ? 'An unexpected error occurred. Please try again later.'
        : err.message || 'Request could not be completed.'
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 ALXNE E-Commerce Server running on port ${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('✅ Ready to accept connections');
});

server.on('error', (error) => {
  console.error('Server error encountered:', error);
  process.exit(1);
});

const gracefulShutdown = (signal) => {
  console.log(`${signal} received, shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed. Goodbye!');
    process.exit(0);
  });

  setTimeout(() => {
    console.warn('Forcing shutdown after 10s timeout.');
    process.exit(1);
  }, 10_000).unref();
};

['SIGTERM', 'SIGINT'].forEach((signal) => {
  process.on(signal, () => gracefulShutdown(signal));
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});
