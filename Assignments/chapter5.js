/* 
    Here is a recursive algorithm for finding all of the 
    keys in the tree that are equal to or less than
    a given key.

    We traverse the tree starting at the root and 
    if this key is less than the given key, print
    this key and do the same for the root's left
    child, and then the root's right child if they exit. 
    Repeat this process for each node. This uses recursion.

    I implement this below in JavaScript. This function would
    
*/
const displayAllKeysLessThanValue = ( currentNode, suppliedKey ) => {

    if (currentNode === null) return  

    const currentKey = currentNode.getKey()

    if (currentKey <= suppliedKey) {

        console.log(currentKey)

        const currentNodeLeftChild = currentNode.getLeftChild()
        const currentNodeRightChild = currentNode.getRightChild()

        displayAllKeysLessThanValue(currentNodeLeftChild, suppliedKey)        
        displayAllKeysLessThanValue(currentNodeRightChild, suppliedKey)        
    } 
} 

// Example: displayAllKeysLessThanValue(rootNode, 12)