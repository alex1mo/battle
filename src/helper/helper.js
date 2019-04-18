export function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1) - min);
}

export function gavg(operators) {
  let sum = 0;

  operators.forEach(e => {
    sum += e.attckSaccese();
  });

  let result = Math.sqrt(sum / operators.length);

  return result;
}

export function sum(operators) {
  let sum = 0;

  operators.forEach(e => {
    sum += e.experience;
  });

  return sum;
}
