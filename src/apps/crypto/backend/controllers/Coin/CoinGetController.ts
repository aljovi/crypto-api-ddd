import { Request, Response } from 'express';
import { Controller } from '../Controller';
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import { FindCoinQuery } from '../../../../../Contexts/Crypto/Coin/application/find/FindCoinQuery';
import { FindCoinResponse } from '../../../../../Contexts/Crypto/Coin/application/find/FindCoinResponse';
import httpStatus from 'http-status';
import { NotFoundError } from "../../../../../Contexts/Shared/domain/error/NotFoundError";

export class CoinGetController implements Controller {
  constructor(private readonly queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {
    try {
      const coinResponse = await this.queryBus.ask<FindCoinResponse>(FindCoinQuery.create(req.params.id as string));

      res.status(httpStatus.OK).send(coinResponse.toResponse());
    } catch (error) {
      switch (true) {
        case error instanceof NotFoundError:
          res.status(httpStatus.NOT_FOUND).send();
          break;

        default:
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
          break;
      }
    }
  }
}
