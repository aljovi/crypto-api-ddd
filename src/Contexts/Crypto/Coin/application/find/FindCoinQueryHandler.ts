import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { FindCoinResponse } from './FindCoinResponse';
import { FindCoinQuery } from './FindCoinQuery';
import { Query } from '../../../../Shared/domain/Query';
import { CoinFinder } from './CoinFinder';
import { CoinId } from "../../domain/value-object/CoinId";

export class FindCoinQueryHandler implements QueryHandler<FindCoinQuery, FindCoinResponse> {
  constructor(private readonly coinFinder: CoinFinder) {}

  async handle(query: FindCoinQuery): Promise<FindCoinResponse> {
    const coin = await this.coinFinder.run(
      CoinId.fromString(query.id)
    );

    return FindCoinResponse.fromDomain(coin);
  }

  subscribedTo(): Query {
    return FindCoinQuery;
  }
}
