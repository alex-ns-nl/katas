export const exampleFunction = (value: number[][]) => {
  console.log('value: ', value.length);
  let total = 0
  value.forEach(weekday => {    
    if (weekday.length === 0) {
      total += 0;
    } 
    else if (weekday.length > 0){
      weekday.forEach(number => total += number * 20);
    }
  });
  
  return total;
};
