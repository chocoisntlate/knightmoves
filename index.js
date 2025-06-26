
function knightMoves(start, destination) {
    if (start[0] === destination[0] && start[1] === destination[1]) {
        console.log(start);
        return
    }

    let queue = [[start]]
    
    while (queue.length !== 0) {
        const currentPath = queue.shift() // [[3,3]]

        const currentPoint =  currentPath[currentPath.length-1] // [3,3]
        
        if (currentPoint[0] === destination[0] && currentPoint[1] === destination[1]) {
            console.log("You made it in some number of moves");
            console.log(currentPath);
            return
        }
        for (let endpoint of getPossibleMoves(currentPoint)) {
            let newPath = currentPath.concat([endpoint])
            queue.push(newPath)
        }
        // console.log(queue);
    }

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

knightMoves([3,3],[4,3])
