function sumArray(input){
    if(input.length != 0){
        let sum = 0;
        for(let element of input) {
            if(Number.isInteger(element)){
                sum += element;
            }else{
                return "array should contain integers only";
            }
        };
        return sum;
    }else{
        return "array is empty";
    }
}

module.exports = sumArray;