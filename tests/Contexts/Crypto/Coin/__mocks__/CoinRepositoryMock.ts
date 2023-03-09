import { CoinRepository } from '../../../../../src/Contexts/Crypto/Coin/domain/CoinRepository';
import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';

export class CoinRepositoryMock implements CoinRepository {
  private searchAllMock = jest.fn();
  private findByIdMock = jest.fn();

  searchAll(): Promise<Coin[]> {
    return this.searchAllMock();
  }

  searchAllHasBeenCalled(times: number = 1): void {
    expect(this.searchAllMock).toBeCalledTimes(times);
  }

  searchAllShouldReturn(coins: Coin[]): void {
    this.searchAllMock.mockReturnValue(coins);
  }

  findById(): Promise<Coin> {
    return this.findByIdMock();
  }

  findByIdHasBeenCalled(times: number = 1): void {
    expect(this.findByIdMock).toBeCalledTimes(times);
  }

  findByIdShouldReturn(coin: Coin|undefined): void {
    this.findByIdMock.mockReturnValue(coin);
  }
}
