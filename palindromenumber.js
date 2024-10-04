

let isNegative = (number) => number < 0;

let isOneDigit = (number) => number >-1 && number <10

var result = isPalindrome(1234321)

function isPalindrome(number){

    if(isNegative(number))
    {
        return false;
    }
    else if(isOneDigit(number))
    {
        return true;
    }
    var originalNumber = number;
    var reversedNumber = 0;

    while(number>0){
        var lastDigit = number % 10;
        reversedNumber = reversedNumber*10 + lastDigit;
        number = Math.floor(number / 10)   
    }

    if(originalNumber == reversedNumber)
    {
        return true;
    }
    else{
        return false;
    }
}

/* 
let isNegative = (number) => number < 0;

let isOneDigit = (number) => number >-1 && number <10

var result = isPalindrome(1234321)
console.log("result : "+result);

function isPalindrome(number){

    if(isNegative(number))
    {
        return false;
    }
    else if(isOneDigit(number))
    {
        return true;
    }
    console.log(number + " my number")
    //123

    console.log("________________________");
    var originalNumber = number;
    //123   

    var reversedNumber = 0;
    //0

    while(number>0){
        var lastDigit = number % 10;
        //3     2       1
        console.log(lastDigit + " my lastdigit")
    
        reversedNumber = reversedNumber*10 + lastDigit;
        //3     32      321
        console.log(reversedNumber + " my reversed")
    
    
        number = Math.floor(number / 10)
        //12    1       0
        console.log(number + " my new number")

    console.log("________________________");

  }

  console.log("finished reversed = " + reversedNumber);


  if(originalNumber == reversedNumber)
  {
    return true;
  }
  else{
    return false;
  }
} */