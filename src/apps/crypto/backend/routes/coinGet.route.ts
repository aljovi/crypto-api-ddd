import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoinGetController } from '../controllers/Coin/CoinGetController';

export const register = (router: Router) => {
  const controller: CoinGetController = container.get('Apps.crypto.controllers.CoinGetController');
  router.get('/coin/:id', (req: Request, res: Response) => controller.run(req, res));
};
