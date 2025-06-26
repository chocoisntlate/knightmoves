
function knightMoves(start, destination) {
    if (start === destination) {

    }

    let queue = []

}

function getPossibleMoves(start) {
    let array = []
    array.push([start[0]-2, start[1]+1], [start[0]-2, start[1]-1],
            [start[0]+2, start[1]+1], [start[0]+2, start[1]-1],
            [start[0]+1, start[1]+2], [start[0]+1, start[1]-2],
            [start[0]-1, start[1]+2], [start[0]-1, start[1]-2],
    )
    return array.filter((element) => element[0]>=0 && element[0]<=7 && element[1]>=0 && element[1]<=7 )
}

console.log(getPossibleMoves([0,0]));