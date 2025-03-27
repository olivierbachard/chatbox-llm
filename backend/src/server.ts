require("module-alias/register");
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import path from 'path';
import chatRoutes from './routes/chat.routes';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function startServer() {
	//const config = await configService.getConfig();
	const app: Express = express();

	// Middleware
	app.use(helmet());
	app.use(cors({
      origin: ['http://localhost:3000']
   }));
	app.use(express.json());

	// Routes
	app.use('/chat', chatRoutes);
	//app.use('/api/documents', documentRoutes);

	// Basic route
	app.get('/', (req: Request, res: Response) => {
		res.json({
			message: 'Welcome to the API',
			status: 'running',
			version: process.env.APP_VERSION,
			environment: process.env.ENVIRONMENT
		});
	});

	// Health check endpoint
	app.get('/health', (req: Request, res: Response) => {
		res.json({
			status: 'healthy',
			timestamp: new Date().toISOString(),
			environment: process.env.NODE_ENV
		});
	});

	// Start server
	app.listen(process.env.PORT, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
		console.log(`Environment: ${process.env.NODE_ENV}`);
	});
}

startServer().catch((error) => {
	console.error('Failed to start server:', error);
	process.exit(1);
}); 