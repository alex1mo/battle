function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1) - min);
}

function gavg(operators) {
  let sum = 0;

  operators.forEach(e => {
    sum += e.attckSaccese();
  });

  result = Math.sqrt(sum / operators.length);

  return result;
}

function sum(operators) {
  let sum = 0;

  operators.forEach(e => {
    sum += e.experience;
  });

  return sum;
}
