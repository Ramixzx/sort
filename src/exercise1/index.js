let arr = [9,2,6,1,4,3,8,7]

//The for loop iterates the array "arr". For each iteration of the loop, iterates the array again, comparing the value of element j with that of the next element [j + 1]. If j is greater than [j + 1] they change their positions, but if j is <= [j + 1] they keep their positions.
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
            let origin = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = origin;
        }
    }
}

console.log(arr);
