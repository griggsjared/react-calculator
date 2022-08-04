const math = (a, b, op) => {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    default:
      return a / b;
  }
}

export default math;
