import { Coin } from '../../domain/Coin';
import { CoinRepository } from '../../domain/CoinRepository';
import { NotFoundError } from "../../../../Shared/domain/error/NotFoundError";
import { CoinId } from "../../domain/value-object/CoinId";

export class CoinFinder {
  constructor(private readonly coinRepository: CoinRepository) {}

  /**
   * @throws NotFoundError
   */
  async run(coinId: CoinId): Promise<Coin> {
    const coin: Coin|undefined = await this.coinRepository.findById(coinId);

    if (coin === undefined) {
      throw NotFoundError.withMessage(`Coin with Id <${coinId.value}> not found!`);
    }

    return coin;
  }
}
