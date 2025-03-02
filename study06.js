// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let x = 10
x = x + 5
let y = 20
y = y + 7 * x / 5

// Nullish Coalescing Operator __??__
let aa = null
let bb = 111
console.log(aa ?? 888)
console.log(bb ?? 555)

// Ternary Conditional Operator __?__:__
let cc = 10 < 55 ? 'hello...' : 'goodbye...'
console.log(cc)

let dd = 'Sombat' > 'Somjai' ? 555 : 999
console.log(dd)

// Spread Operator __...__
let ee = [1, 2, 3]
let ff = [10, 20, 30]
let gg = [...ee, ...ff]
console.log(gg)

