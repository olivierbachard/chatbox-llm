import { Request, Response } from 'express';

export class ChatController {

   async chat(req: Request, res: Response): Promise<void> {
      try {
         const { message } = req.body;

         if (!message || typeof message !== 'string') {
            res.status(400).json({ error: 'Message string is required' });
            return;
         }

         res.json({ response: "Hello " + message });
      } catch (error) {
         console.error('Error in chat controller:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   }
}