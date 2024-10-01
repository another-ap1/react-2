function unroll(squareArray) {
    let unrolled = [];
    //keep reapeating the spriral pattern until there is nothing left
    while(squareArray.length > 0){
        
        //get the top row
        unrolled = [...unrolled, squareArray.shift()];
        
        //get last item in each row of matrix
        unrolled = [...unrolled, squareArray.map(x => x.pop())];
        
        //get the last row in reverse order
        unrolled = [...unrolled, squareArray.pop().reverse()];
        
        //complete the spiral getting the first item of each row. 
        unrolled = [...unrolled, squareArray.map(y => y.shift()).reverse()];
    }

    //This will return the array all in one. without flat() it has each step in its own array
    return unrolled.flat();
}

module.exports = unroll;
