function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("На ноль делить нельзя");
  }

  return a / b;
}

function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Массив чисел пуст");
  }

  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
}

console.log("Сложение:", add(10, 5));
console.log("Вычитание:", subtract(10, 5));
console.log("Умножение:", multiply(10, 5));
console.log("Деление:", divide(10, 5));
console.log("Среднее:", average([10, 20, 30, 40]));