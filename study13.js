// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function myFuncC() {
    console.log('Woo')
    return 'Wow wow wow'
}

//4. have parameter, has return
function myFuncD(n1, n2) {
    return n1 + n2
}

//เวลาเรียกใช้ควรที่จะเอาค่าที่ return มาใช้
// myFuncD(10, 20) เรียกใช้แบบนี้ได้ แต่ไม่ควรทำ
console.log(myFuncD(10, 20))

let xx = myFuncC()
console.log(`${xx} ^_^`)