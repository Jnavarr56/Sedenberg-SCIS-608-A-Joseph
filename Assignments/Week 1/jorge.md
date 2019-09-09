## A - 1.11
###### Given an array, A, of n positive integers, each of which appears in A exactly twice, except for one integer, x, describe an O(n)-time method for finding x using only a single variable besides A.
#

Below, I write pseudocode as comments in my real implementation of an algorithm that satisfies the criteria in JavaScript. The algorithm is executed within a function I define called getSingleNumber:
```javascript
// INPUT: Array A of integers in which all but one item (4) appear twice.
const A = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6,]

const getSingleNumber = arr => {
  /* STEP 1:
    This is a hash table based strategy.
    A hash table is a data structure that maps "keys"
    to values. We can use such a structure to map
    the items in the array to their frequencies
    by making the items keys and their values their
    counts.

    In JavaScript, the hash table data type is an
    object literal, which we are assigning to the 
    value count below.

    This will be our only other variable besides A. */ 
    const counts = {}

    /* STEP 2:
    Iterate through the input array and for each
    item, check to see if that item is the
    key in a key value pair that currently 
    exists in our hash table variable (counts).
    
    If the item IS the key in an existing 
    key value pair, then increase the value of 
    that pair by 1.
    
    If the item IS NOT the key in an existing
    key value pair, then create a key value pair
    with the item as the key and the value 1. */
    arr.forEach(n => {
        if (counts[n] !== undefined) counts[n]++
        else counts[n] = 1
    })
   
    /* STEP 3:
    Iterate through each key in our hash table
    (counts). Use each key to access its corresponding
    value in the hash table. If the value is equal
    to 1, then return it as that is the item that 
    appears only 1 time in the input array. */
    
    for (let n in counts) if (counts[n] === 1) return n
}
    /* EXPLANATION:
    This is O(n) because the amount of items we will 
    have to iterate through anytime we are iterating
    will only ever be at most equal to the size of 
    the input array, since the only array we are iterating 
    through is the input array itself. */
```

## A - 1.13
###### Suppose you are writing a simulator for a single-elimination sports tournament (like in NCAA Division-1 basketball). There are n teams at the beginning of the tournament and in each round of the tournament teams are paired up and the games for each pair are simulated. Winners progress to the next round and losers are sent home. This continues until a grand champion team is the final winner. Suppose your simulator takes O(log n) time to process each game. How much time does your simulator take in total?
#
If x is the round: 
- number of teams in a round = ![equation](https://latex.codecogs.com/gif.latex?n%20*%20%281/2%29%5E%7Bx%20-%201%7D)
- number of games in a a round = ![equation](https://latex.codecogs.com/gif.latex?n%20*%20%281/2%29%5E%7Bx%7D)

We know that:
- time to simulate a game = log(num of teams in round) =  ![equation](https://latex.codecogs.com/gif.latex?%5Clog%20%28n%20*%20%281/2%29%5E%7Bx%20-%201%7D%29)

So the following must be true :
- time to simulate round x = number of games in round x * time to simulate a game  = ![equationo](https://latex.codecogs.com/gif.latex?%28n%20*%20%281/2%29%5E%7Bx%7D%29%20*%20%5Clog%20%28n%20*%20%281/2%29%5E%7Bx%20-%201%7D%29)

This means that the time to simulate the entire tournament is the sum of all of time it takes to simulate each round between 1 and the total number of rounds it takes for the tournament to finish. If the number of rounds is r:
![equation](https://latex.codecogs.com/gif.latex?%5Csum_%7Bx%20%3D%201%7D%5E%7Br%7D%20%28n%20*%20%281/2%29%5E%7Bx%7D%29%20*%20%5Clog%20%28n%20*%20%281/2%29%5E%7Bx%20-%201%7D%29)
