const inquirer = require('inquirer');

import { isInteger } from './validations';
import handler from './handler';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'totalHours',
      message: 'Please input total hours:',
      default: 0,
      validate: isInteger,
    },
  ])
  .then(handler);
