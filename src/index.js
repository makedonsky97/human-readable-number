module.exports = function toReadable (number) {
    let numbers = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
    }
 
  number = number.toString();
  let result = [];
  let dig1 = number[0];
  let dig2 = number[1];
  let dig3 = number[2];
 
  if (number.length === 3){
   
    result.push(numbers[dig1]+' hundred');
   
    if(dig2 == 0 && dig3!= 0){
      result.push(numbers[dig3])
    }else
    if((dig2!=0 && dig3==0) ||(dig2==1 && dig3!=0)){
      result.push(numbers[dig2.toString()+dig3])
    }else if(dig2 != 0 && dig3!= 0){
      result.push(numbers[dig2+'0']);
      result.push(numbers[dig3])
    }
    
    }
  
 
  if (number.length === 2){
    let dig1 = number[0];
    let dig2 = number[1];    
    if(dig1 == 1){
      result.push(numbers[dig1+dig2])
    }else{
      result.push(numbers[dig1+0])
    }
    if(dig2 !=0 && dig1!=1){
      result.push(numbers[dig2])
    }
  }
   
  if (number.length === 1){
    let dig1 = number[0];
    result.push(numbers[dig1])
  }    
  return (result.join(' '))
}
