
numbers = [131,24,32,45,51,31,234,31,1,2,3,4];


hasDuplicate(numbers);

function hasDuplicate(numbers){

  for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j ++){
  
      if(numbers[i] == numbers[j]){
        return true;
      }
    }
  }
  return false;
}


/* numbers = [131,24,32,45,51,31,234,31,1,2,3,4]
let mustStop = false;

for(let i = 0; i < numbers.length; i++){
  console.log("berem cislo dla sverki s ostalnimi: " + numbers[i]);

  for(let j = i + 1; j < numbers.length; j ++){

    console.log("proverayem s cislami " + numbers[j])

    console.log("Sverayem 2 cisla: " + numbers[i] + " & " + numbers[j])
    if(numbers[i] == numbers[j]){
      console.log('Duplicate ' + numbers[i]);
      mustStop = true;
    }

    if(mustStop){
      break;
    }
  }

  if(mustStop){
    break;
  }
}
 */

