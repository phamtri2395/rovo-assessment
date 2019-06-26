const inquirer = require('inquirer');
const lineReader = require('line-reader');

import TransferService from './transfer.service';

const transferService = new TransferService();

console.info('Reading transactions...');
lineReader.eachLine(__dirname + '/input.txt', (line, last): void => {
  transferService.readTransaction(line);

  if (last) {
    console.info('Done');

    const customers: string[] = transferService.getCustomers();
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedCustomer',
          message: 'Please select a customer to view balance:',
          choices: customers,
        },
      ])
      .then(({ selectedCustomer }) => {
        const balance = transferService.getBalance(selectedCustomer);

        console.info(balance);
      });
  }
});
