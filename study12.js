// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function myFuncA() {
    console.log('Hello')
    console.log('Hi')
}
//myFuncA()

// 2. have parameter, no return
function myFuncB(data1, data2, data3) {
    console.log(data1)
    console.log(data2 + data3)
}

myFuncA()
myFuncA()
myFuncB('Hello', 10, 20) //ข้อมูลที่ส่งให้ parameter เรียก argument
myFuncB('Hi', 100, 200)
myFuncA()