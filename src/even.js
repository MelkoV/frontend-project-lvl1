import readLineSync from 'readline-sync';

const RANDOM_MIN = 1;
const RANDOM_MAX = 1000;
const WIN_COUNT = 3;
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const isEven = (num) => num % 2 === 0;

const getRandomInt = (min, max) => {
  let minValue = min;
  let maxValue = max;
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const ansQuestion = () => {
  const num = getRandomInt(RANDOM_MIN, RANDOM_MAX);
  const answer = isEven(num) ? ANSWER_YES : ANSWER_NO;
  console.log(`Question: ${num}`);
  const userAns = readLineSync.question('Your answer: ');
  if (userAns === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const start = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < WIN_COUNT; i += 1) {
    const answer = ansQuestion();
    if (!answer) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default start;
