function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    // Write code here
    let result = 0;

    for (let element of initialArray) {
        if (typeof element === 'number') {
            // result += element;
            result = result + element;
        }
    }

    console.log(result);
}
    
calculateSumOfArray();