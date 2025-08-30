function findMax(list){
    let max = list[0]
    for (const item of list){
        if (item > max){
            max = item
        }
    }
    return max              
}

const test = [3, 17, -1, 4, -19]
// console.log(findMax(test))

function includes(list, num){
    for (const item of list){
        if (num === item){
            return true
        }
    }
    return false
}

console.log(includes(test, 4))
