import { FindCoinQueryHandler } from '../../../../../../src/Contexts/Crypto/Coin/application/find/FindCoinQueryHandler';
import { CoinFinder } from '../../../../../../src/Contexts/Crypto/Coin/application/find/CoinFinder';
import { FindCoinQueryMother } from './FindCoinQueryMother';
import { FindCoinResponse } from '../../../../../../src/Contexts/Crypto/Coin/application/find/FindCoinResponse';
import { Coin } from '../../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinRepositoryMock } from '../../__mocks__/CoinRepositoryMock';
import { CoinPrice } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';
import { CoinName } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';
import { CoinId } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';
import { NotFoundError } from "../../../../../../src/Contexts/Shared/domain/error/NotFoundError";

let handler: FindCoinQueryHandler;
let repository: CoinRepositoryMock;

beforeEach(() => {
  repository = new CoinRepositoryMock();
  handler = new FindCoinQueryHandler(new CoinFinder(repository));
});

describe('FindCoinQueryHandler', () => {
  it('should return a coin with required id', async () => {
    const query = FindCoinQueryMother.default();
    const expectedCoin: Coin = aCoin();
    repository.findByIdShouldReturn(expectedCoin);
    const response = await handler.handle(query);
    const expectedResponse = FindCoinResponse.fromDomain(expectedCoin);
    repository.findByIdHasBeenCalled();
    expect(response).toEqual(expectedResponse);
  });

  it('should throw a NotFoundError when coin is not found', async () => {
    const query = FindCoinQueryMother.default();
    repository.findByIdShouldReturn(undefined);

    await expect(handler.handle(query)).rejects.toThrowError(NotFoundError);

    repository.findByIdHasBeenCalled();
  });
});

function aCoin(): Coin {
  return Coin.create(
    CoinId.fromString('BTC'),
    CoinName.fromString('Bitcoin'),
    CoinPrice.fromNumber(23_00)
  );
}
