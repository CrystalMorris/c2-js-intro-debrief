//GenBuzz


let myNumber = 7;
if (myNumber%5 === 0 && myNumber%3=== 0){
    console.log('GenBuzz') }
    else if (myNumber%3 === 0){
    console.log('Gen');
} else if (myNumber%5 === 0){
    console.log('Buzz');
} else if (typeof myNumber !== 'number'){
    console.log('This is not a number');
} else {
    console.log(myNumber);
}


// E-commerce Item List

let item ='socks';
item= item.toLocaleLowerCase();
switch(item){
    case 'shoes': 
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hat' :
        console.log('Hats are $12');
        break;
    case 'socks':
        console.log('Socks are $2');
        break;
    case (item !== 'shoes' || item !== 'jeans' || item !== 'hat' || item !== 'socks'):
        console.log('Invalid Item');
        break;
}


// print random number between 50 and 100

let randomNumber = Math.floor((Math.random() * 50) +50); 
console.log(randomNumber);