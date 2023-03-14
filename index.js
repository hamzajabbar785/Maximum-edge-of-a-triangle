/* Create a function that finds the maximum range of a triangles third edge, where the side lengths are all integers

Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

Notes
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers.
Don't forget to return the result. */

const nextEdge = (side1, side2) => {
    if(side1 < 0 || side2 < 0){
        return "Enter positive Intefers"
    } else {
        const side3 = (side1 + side2) - 1;
        return side3;
    }
}

nextEdge(8, 10)