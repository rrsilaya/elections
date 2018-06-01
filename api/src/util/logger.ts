import chalk from 'chalk';

export const log = (message, type = 'ERROR') => {
  const timestamp = new Date();

  const INDICATION = type === 'ERROR' ? chalk.bold.bgRed : chalk.bold.bgGreen.black;

  console.log(
    INDICATION(` ${type} `),
    message,
    chalk.blue.underline(timestamp.toString())
  );
}