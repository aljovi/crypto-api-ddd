import { Coin } from './Coin';
import { CoinId } from "./value-object/CoinId";

export interface CoinRepository {
  searchAll(): Promise<Coin[]>;

  findById(coinId: CoinId): Promise<Coin|undefined>;
}
