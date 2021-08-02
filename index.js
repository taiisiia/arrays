const array = [];
array.push(1,2,3,4,5,6,7,8,9,10);

array.unshift(0);

array.shift()
array.pop()

array.splice(3,1)

array.splice(3,0,5)

array1 = array.slice(0)

array1.splice(array.length/2 - 1)

const array2 = [];
array2.length = 8; 

array2.fill(0,0,4)

const array3 = array2.filter(function(value) {
    return value != null;
});

const numbers = [1,2,3,4,5,6,7,8,9,10];
const square = numbers.map(function(value) {
    return value*value;
});

console.log(square.join(' && '));


const products = [
{
    name: 'Apples',
    price: 30,
    isInWarehouse: true,
    quantity: 100,
}, 

{
    name: 'Bananas',
    price: 80,
    isInWarehouse: false,
    quantity: 0,
},

{
    name: 'Oranges',
    price: 90,
    isInWarehouse: true,
    quantity: 5,
},

{
    name: 'Lemons',
    price: 50,
    isInWarehouse: false,
    quantity: 0,
},
{   name: 'Peaches',
    price: 20,
    isInWarehouse: true,
    quantity: 20,
}
]

const stock = products.filter(value => value.isInWarehouse === true && value.quantity >= 5); 
  

let bin = []

const trash = [
{ 
    name: 'Paper ball',
    weight: 5,
}, 

{ 
    name: 'Apple core',
    weight: 40,
},

{ 
    name: 'Bubblegum',
    weight: 3,
},

{ 
    name: 'Candy wrapper',
    weight: 2,
}
]

let throwIntoBin = prompt ('Enter an ID of the item which you would like to throw into the bin');

if (throwIntoBin === '0') {
    bin = Object.assign([0], trash);
    console.log (bin);
}

if (throwIntoBin === '1') {
    bin = Object.assign([1], trash);
    console.log (bin);
}




