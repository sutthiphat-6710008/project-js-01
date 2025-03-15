// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
var aa = () => {
    console.log('Hello')
}

let bb = (data) => {
    console.log('Hi', data)
}
let bb111 = data => console.log('Hi', data)

const cc = () => {
    console.log('Hey')
}
const cc111 = () => console.log('Hey')


const ee = (n1, n2) => {
    return n1 * n2
}
const ee111 = (n1, n2) => n1 * n2

console.log(ee(10, 20))

let dd = cc

aa()
bb('wow wow wow')
cc()
aa()
aa()
dd()