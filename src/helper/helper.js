export function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1) - min);
}

export function gavg(arrValue) {
  let _sum = sum(arrValue);

  let result = Math.sqrt(_sum / arrValue.length);

  return result;
}

export function sum(arrValue) {
  let sum = 0;

  arrValue.forEach(e => {
    sum += e;
  });

  return sum;
}
