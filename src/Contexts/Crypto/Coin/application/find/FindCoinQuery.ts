import { Query } from '../../../../Shared/domain/Query';

export class FindCoinQuery implements Query {
  constructor(readonly id: string) {}

  static create(id: string): FindCoinQuery {
    return new FindCoinQuery(id);
  }
}
