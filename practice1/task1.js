function printPowsOf2(number) {
// Write code here
    if (typeof number === 'number') {
        for(let i = 1; i <= number; i++) {
            console.log(i);
        }
    } else {
        console.log('Error - invalid');
    }
}
    
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);