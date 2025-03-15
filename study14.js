// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function myfunc1(xx, yy = 200, zz = 100) {
    console.log(xx)
    console.log(yy)
    console.log(zz)
}

myfunc1(10, 20, 30)
console.log('-----------------')
myfunc1(11, 22)
console.log('-----------------')
myfunc1(13)

// function for return mulitple value
// return array value
function myfunc2() {
    let aa = [10, 20, 30]
    return aa
}

// return object value
function myfunc3() {
    let bb = {
        name: 'john',
        age: 30,
    }
    return bb
}

// use destruction to get value from object and array
console.log('-----------------')
let [n1, n2, n3] = myfunc2()
console.log(n1, n2, n3)
console.log('-----------------')
let { name, age } = myfunc3()
console.log(name, age)