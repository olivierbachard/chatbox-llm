
import { ChatController } from '@/controllers/chat.controller';
import { Router } from 'express';

const router = Router();
const chatController = new ChatController();

// Bind the instance methods to the controller instance
const chatHandler = chatController.chat.bind(chatController);

router.post('/', chatHandler);

export default router; 