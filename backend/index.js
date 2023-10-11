const arr = [

    {
        id: 1,
        name: 'istekhar'
    },
    {
        id: 2,
        name: 'khan'
    }
]

const arr2 = arr.map((element, index, arr) => element.name)

console.log(arr2)
console.log(arr)