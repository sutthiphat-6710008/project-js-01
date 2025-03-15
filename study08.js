// control statement (condition/selection) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 3. if-else-if
let score = 55
if (score >= 80) {
    console.log('A')
} else if (score >= 70) {
    console.log('B')
} else if (score >= 60) {
    console.log('C')
} else if (score >= 50) {
    console.log('D')
} else {
    console.log('F')
}

// 4. switch-case
let busno = 27
switch (busno) {
    case 3:
        console.log('ไปสนามหลวง')
        break
    case 84:
        console.log('ไปวงเวียนใหญ่')
        break
    case 57:
        console.log('ไปปิ่นเกล้า')
        break
    case 28:
        console.log('ไปหมอชิต')
        break
    default:
        console.log('ยังไม่มีข้อมูล...')
        break
}