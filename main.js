// Using vanilla JS, I will create a command-line-based program that returns "misheard" Ben Franklin quote each time
// a user runs the program.

// store components: create 3 lists - 'first', 'second' and 'third', and store 5 pieces of a BF quote in each of them.

// create a function that grabs a random element from a given array. create three vars the is the result of running the function for
// each of the arrays. console.log a string that is the concatenation of each var - specifically in order of the arrays.

const first = [
    'Well done is better than to ',
    'It takes many good deeds to ',
    'By failing to ',
    'Three can ',
    'Never leave that till tomorrow when you can '
]

const second = [
    'eat ',
    'laugh ',
    'cry ',
    'fart ',
    'read '
]

const third = [
    'alone.', 
    'together.',
    'indisposed.',
    'without pants on.',
    'in the crick well past dawn.'
]

const grabRandElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const createString = (arr1, arr2, arr3) => {
    const firstPart = grabRandElement(arr1);
    const secondPart = grabRandElement(arr2);
    const thirdPart = grabRandElement(arr3);

    return firstPart + secondPart + thirdPart;
}

console.log(createString(first, second, third));