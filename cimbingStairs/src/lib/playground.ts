export const exampleFunction = (value: number[][]) => {
  console.log(value.length);
  let total = 0
  value.forEach(weekday => {
    if (weekday.length === 0) {
      total = 0;
    } else {
      total = 140;
    };
  });
  return total;
};
