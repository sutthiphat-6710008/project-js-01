// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = 'aaaa'
let bb = "bbbb"
let cc = `cccc ${10 * 5} `
console.log(aa, bb, cc)

// number
let dd = 111
let ee = 22.3445
console.log(dd, ee)
console.log(`dd ee`)
console.log(`${dd} ${ee}`)

// boolean
let ff = true
let gg = false
console.log(dd, gg)

// object
let hh = {
    name: 'John',
    age: 30,
    major: 'DTI',
    uni: `SAU ${10 * 20}`
}
console.log(hh)
console.log(`ชื่อ ${hh.name} อายุ${hh.age}`)
console.log(hh.uni)

// array
let ii = [10, 20, 30, 30]
console.log(ii)
console.log(ii[1])
console.log(ii[0] * ii[3])
// undefined
let jj
let kk = undefined
console.log(ii)
console.log(kk)
// null
let ll = null
console.log(ll)

// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ll)
console.log(typeof hh)
console.log(typeof kk)