// let
// if(true){
//     let name = 'jack'
// }
// console.log(name)

function varTest(){
    var x = 1
    if(true){
        var x = 2
        console.log(x)
    }console.log(x)
}

function letTest(){
    let x = 1
    if(true){
        let x = 2
        console.log(x)
    }console.log(x)
}

varTest()
letTest()

// constant immutable
// const a = 10;
// a = 11
// console.log(a)

// template literal
let name = 'David'
// let msg = 'welcome '+name+' !';
// let msg = `welcome ${name}`
// console.log(msg)

let a = 8
let b = 9
let msg = `The sum is ${a+b}`
console.log(msg)

