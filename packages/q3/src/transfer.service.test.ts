import TransferService from './transfer.service';

describe('Reading transaction', (): void => {
  it('should read a single transaction record', (): void => {
    const service = new TransferService();
    const transaction = 'Customer A, USD, 15';

    service.readTransaction(transaction);

    expect(service).toEqual({
      storage: {
        'Customer A': [
          {
            currency: 'USD',
            value: 15,
          },
        ],
      },
    });
  });

  it('should leave untouched when transaction is missing fields', (): void => {
    const service = new TransferService();
    const valid_transaction = 'Customer A, USD, 15';
    const misformatted_transaction = '';

    service.readTransaction(valid_transaction);
    const before = JSON.stringify(service);

    service.readTransaction(misformatted_transaction);
    const after = JSON.stringify(service);

    expect(after).toBe(before);
  });

  it('should return when value in transaction is an invalid number', (): void => {
    const service = new TransferService();
    const misformatted_transaction = 'Customer B, USD, abc';

    const before = JSON.stringify(service);

    service.readTransaction(misformatted_transaction);
    const after = JSON.stringify(service);

    expect(after).toBe(before);
  });
});

describe('Get customer list', (): void => {
  it('should get an empty customer list', (): void => {
    const service = new TransferService();

    const customers = service.getCustomers();

    expect(customers).toEqual([]);
  });

  it('should get a correct customer list', (): void => {
    const service = new TransferService();
    const transactionA1 = 'Customer A, USD, 15';
    const transactionA2 = 'Customer A, USD, -5';
    const transactionB = 'Customer B, VDN, 40000';

    service.readTransaction(transactionA1);
    service.readTransaction(transactionA2);
    service.readTransaction(transactionB);

    const customers = service.getCustomers();

    expect(customers).toEqual(['Customer A', 'Customer B']);
  });
});

describe('Get balance of a customer', (): void => {
  it('should correct with 1 type of currency & positive transactions', (): void => {
    const service = new TransferService();
    const transactionA1 = 'Customer A, USD, 15';
    const transactionA2 = 'Customer A, USD, 21';

    service.readTransaction(transactionA1);
    service.readTransaction(transactionA2);

    const balanceA = service.getBalance('Customer A');

    expect(balanceA).toBe('Customer A: USD 36.00');
  });

  it('should correct with 1 type of currency & negative transactions', (): void => {
    const service = new TransferService();
    const transactionA1 = 'Customer A, USD, 15';
    const transactionA2 = 'Customer A, USD, -4';

    service.readTransaction(transactionA1);
    service.readTransaction(transactionA2);

    const balanceA = service.getBalance('Customer A');

    expect(balanceA).toBe('Customer A: USD 11.00');
  });

  it('should correct with 2 types of currency transactions', (): void => {
    const service = new TransferService();
    const transactionA1 = 'Customer A, USD, 15';
    const transactionA2 = 'Customer A, VND, 300000';
    const transactionA3 = 'Customer A, VND, 150000';
    const transactionA4 = 'Customer A, USD, -2.25';

    service.readTransaction(transactionA1);
    service.readTransaction(transactionA2);
    service.readTransaction(transactionA3);
    service.readTransaction(transactionA4);

    const balanceA = service.getBalance('Customer A');

    expect(balanceA).toBe('Customer A: USD 12.75, VND 450000.00');
  });
});
