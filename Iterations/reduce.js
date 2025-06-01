// to accumulate i.e. add or subtract or multiply values from an array we use reduce()
// this reduces the values to a single value

const shoppingCart = [
    {
        course :'java',
        price : 999
    },
    {
        course :'js',
        price : 1999
    },
    {
        course :'mobile dev',
        price : 2999
    },
]

const priceToPay = shoppingCart.reduce( (acc,items)=> acc+items.price,0 );

console.log(priceToPay);

