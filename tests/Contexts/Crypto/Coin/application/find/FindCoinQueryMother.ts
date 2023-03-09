import { FindCoinQuery } from '../../../../../../src/Contexts/Crypto/Coin/application/find/FindCoinQuery';

export class FindCoinQueryMother {
  static default(): FindCoinQuery {
    return FindCoinQuery.create('BTC');
  }
}
