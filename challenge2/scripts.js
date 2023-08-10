const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

// To get the correct balance I found that I have to add in an extra variable
// (taxPercCalc) to properly calculate the tax or else it just deducts 0.08,
// instead of 8% 

if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / '100'
    const taxPercCalc = salary * taxAsDecimal
    const startingAfterTax = salary * (parseInt('1')) - taxPercCalc
    const balance =  startingAfterTax - transport - food - rent

    console.log('R', balance.toFixed(2))
}

// if I run this code balance is R337.97 

// if (hourOfDay === 0 && minuteOfDay === 0) {
//     const taxAsDecimal = parseFloat(tax) / 100
//     const startingAfterTax = salary * (parseInt('1')) - taxAsDecimal
//     const balance =  startingAfterTax - transport - food - rent

//     console.log('R', balance.toFixed(2))
// }

