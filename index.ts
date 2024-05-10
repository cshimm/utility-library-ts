function identity<T>(arg: T): T {
    return arg
}
const hello = identity("hello")
console.log("identity", hello)

function reverseArray<T>(array: T[]): T[] {
    return array.reverse()
}
const forwardArr = [1,2,3,4]
const reversedArr = reverseArray(forwardArr)
console.log("Reversed arr", reversedArr)
function mapObject<K extends string | number | symbol, V, U>(
    obj: { [key in K]: V },
    map: (val: V) => U
): { [key in K]: U } {
    const newObj = {} as {[key in K]: U}
    for (const key in obj) {
        newObj[key] = map(obj[key]) as U
    }
    return newObj
}

const inputObj = { a: 1, b: 2 };
const outputObj = mapObject(inputObj, x => x.toString());
console.log("Map", outputObj)


function filterArray<T>(arr:T[], filter: (val: T) => boolean): T[] {
    const filteredArr:T[] = []
    for (const elem of arr) {
        if (!filter((elem))){
            filteredArr.push(elem)
        }
    }
    return filteredArr
}
const inputArr = [0,1,2,3,4,5,6,7,8,9]
const outputArr = filterArray(inputArr, x => x % 2 == 0)
console.log("Filter", outputArr)