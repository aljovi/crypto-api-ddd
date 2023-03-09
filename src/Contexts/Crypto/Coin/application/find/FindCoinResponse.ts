import { Response } from '../../../../Shared/domain/Response';
import { Coin } from '../../domain/Coin';

type CoinResponseItem = {
  id: string;
  name: string;
  price: string;
};

export class FindCoinResponse implements Response {
  constructor(private readonly coin: CoinResponseItem) {}

  static fromDomain(coin: Coin) {
    return new FindCoinResponse(this.mapCoin(coin));
  }

  private static mapCoin(coin: Coin): CoinResponseItem {
    return {
      id: coin.id.value,
      name: coin.name.value,
      price: coin.price.toString()
    };
  }

  toResponse(): CoinResponseItem {
    return this.coin;
  }
}
