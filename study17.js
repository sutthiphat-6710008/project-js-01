// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function คือ ฟังชั่นที่ทำงานทีหลัง หลังจากเรียกใช้ฟังชั่นหนึ่งๆ ไปก่อนหน้า

function FuncA(xx, yy, zz) {
    console.log(xx)
    let aa = yy * 10

    zz(aa) //callback function
}

function FuncB(nn) {
    console.log(nn * 200)
}

FuncA(11, 22, FuncB)
console.log('-----------------')
FuncA(10, 20, (data) => {
    console.log('wow wow wow')
    console.log('woo woo woo')
    console.log(data)
})