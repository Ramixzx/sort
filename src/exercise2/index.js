let cars = ['Volvo', 'BMW', 'Ford', 'Mazda', 'Audi', 'Chevrolet', 'Tesla', 'Fiat'];
let cars2 = ['Volvo', 'BmW', 'FORd', 'Mazda', 'auDi', 'Chevrolet', 'tESlA', 'fiat'];

// This function sorts any array of strings it receives by parameter
const sortArrayOfStrings = (array) => {
    
    // First iterate through the array. For each element it saves, in a new array, an object with the index and value corresponding to that element.
    let newArray = array.map((element, i) => {
        // Converts the text string (element) to lowercase letters
        return { index: i, value: element.toLowerCase()}
    })
    
    // Sort the new array according to the "value" of each element.
    newArray.sort((a, b) => {
        if(a.value > b.value){
            return 1
        }
        if(a.value < b.value){
            return -1
        }
        return 0
    })
    
    //Loop through the new array once sorted. For each element, it sends to the original array the elements ordered by their index.
    let theArray = newArray.map(element => {
        return array[element.index]
    })
    
    console.log(theArray)
}

sortArrayOfStrings(cars)
sortArrayOfStrings(cars2)