//ASSIGNMENT QUESTION 1 :create a function that will be able to convert figures from fahrenheit to celcius.

function toFarenheit(c){
    let surname=(c*9/5)+32;
    return surname;
}

let myTemp=toFarenheit(38.8);
console.log(myTemp);

//ANS=tofarenheit(101.84)

//QUESTION 2:create a function that will calculate the average of numbers in an array.
function findAverage(array){
    let average=0;
    for(let i=0;i< array.length;i++){
        let currentNum = array[i]
        average+=currentNum;
    }
    average= average/array.length
    return average;
}
console.log(findAverage([1,4,7]));
//ANS= findAverage(4)


//QUESTION 3:create a function that checks if a number,'n' is divisible by two numbers 'X & 'Y ,all input are positive ,non-zero digits.

function isDivisible(n,x,y){
    if( n % x ==0 && n % y == 0){

        return true;
    }else 
        return false;
    
}

console.log(isDivisible(2,3,5))

// ANS=isDivisible(false)

//QUESTION 4:Create a function that will output the first 100 prime numbers
function prime(num){
    var temp =0;
    for(var i=1;i<=num;i++){
        for(var j=2; j<=i-1; j++){
            if(i % j ==0){
                temp +=1;
            }
        }
        if(temp == 0){
            console.log(" " +i)
        }else{
            temp = 0;
        }
    }
}
prime(100)

//QUESTION 5:Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(n) {
    
    if ( n < 2)
        return '${n} false'


    for (let i = 2; i < n;i++){
        if (n % i === 0) {
            return '${n} false'
        }
    }
    return '${n} true' 
}
console.log(isPrime(2));

//ANS= isPrime(true)


//QUESTION 7:Write a program that prints the numbers from 1 to 100,but for multiples of 3 prints "FIZZ" instead of the number and for the multiple 
//of 5 print"BUZZ" for numbers which are multiples of both 3 & 5 print "FIZZBUZZ".

function fizzbuzz(){
    array=[]
    count=1
    while (count<=100){
        if(count%15===0){
            array.push('fizz')
        }else if(count%5===0){
            array.push('buzz')
        }else if (count%3===0){
            array.push('fizzbuzz')
        }else{
            array.push(count)
        }
        count++
        
    }
    console.log(array)
}
fizzbuzz();





