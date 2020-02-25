// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibNum = (num) => {

    let newArr = [1, 1]

    for(let i=1; i < num; i++){

      newArr.push(newArr[i] + newArr[i-1])
    }
    return newArr
  }
//   console.log(fibNum(10))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddSort = arr =>{

    let newArr = []
    
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && arr[i] % 2 === 1 || arr[i] % 2 === -1){
            newArr.push(arr[i])
         }
    }
        return newArr.sort((a,b) => a-b)
}

// console.log(oddSort(fullArr1))
// console.log(oddSort(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var word1 = "hello"
// Expected output: “l”
// he(l)lo  l--> index at 2. Position + length = 2 + 1 = 3 which gives us l he(l)(l)o but the "end" value is not returned in the .substring method.
var word2 = "rhinoceros"
// Expected output: “oc”
// rhin(o)ceros n--> 10/2 = 5-1 = 4. Length = 2 + the position gives us the 2 next letters.
// rhi)(o)(c)(e)ros & substring doest include the final integer so (e) is not included. 
var word3 = "runTime"
//wanted to test the logic more to ensure that it worked. 

const middleLetter = str => {

    let position = 0
    let length = 0;

    if(str.length % 2 === 1) {
        //divide the word in half to get the middle letter. If number ends in .5 round down
        position = str.length / 2
        length = 1
    } else if(str.length % 2 === 0) {
        position = str.length / 2 - 1
        //divide word in two and subtract one: EX: fl(u)x u --> index 2, then subtract 1 gives us index 1 --> f(l)ux
        length = 2
        //setting the length = to 2 gives us second index: EX: fl(u)x
        }
        return str.substring(position, position + length)
        //using substring we need the starting integer (position) & position + length. Which doesnt count the second "end" integer. In odd numbered words, this will give us the middle value. In even numbered words, this will give us the 2 middle letters.
    }

// console.log(middleLetter(word1))
// console.log(middleLetter(word2))
// console.log(middleLetter(word3))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    constructor(radius){
        this.volume = 4 * Math.PI * radius * radius
    }

    string (){
        return `The radius of the new sphere is ${this.volume}.`
    }
}

let sphere1 = new Sphere(2)
let sphere2 = new Sphere(3)
let sphere3 = new Sphere(4)

// console.log(sphere1.string())
// console.log(sphere2.string())
// console.log(sphere3.string())




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const accumSum = (arr) =>{

    let result = [arr[0]];

    if(arr.length > 0) {
    for(let i = 1; i < arr.length; i++) {
        result[i] = result[i - 1] + arr[i]
    }
        return result
    } else if(arr.length === 0) {
        return []
    } else{
        return "please input an array"
    }
}

// console.log(accumSum(numbersToAdd1))
// console.log(accumSum(numbersToAdd2))
// console.log(accumSum(numbersToAdd3))