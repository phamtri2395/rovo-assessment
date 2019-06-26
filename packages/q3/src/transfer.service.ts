import {
  join,
  keys,
  groupBy,
  map,
  path,
  pathOr,
  prop,
  split,
  sum,
} from 'ramda';

export default class TransferService {
  private storage: {} = {};

  public readTransaction(record: string): void {
    const [customer, currency, value] = split(', ', record);

    if (!this.storage[customer]) {
      this.storage[customer] = [];
    }

    this.storage[customer].push({ currency, value });
  }

  public getCustomers(): string[] {
    return keys(this.storage);
  }

  public getBalance(customer): string {
    const transactions = pathOr([], [customer], this.storage);

    const byCurrency = (t): string => path(['currency'], t);
    const currencyGroups = groupBy(byCurrency)(transactions);

    const balances = map(
      group => {
        // @ts-ignore
        const total = sum(map(prop('value'), group));

        return total;
      },
      // @ts-ignore
      currencyGroups
    );

    const currencies = map(
      // @ts-ignore
      k => `${k} ${balances[k]}`,
      keys(balances)
    );

    return `${customer}: ${join(', ', currencies)}`;
  }
}
