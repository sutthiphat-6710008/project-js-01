// control statement (loop/iteration/repetition) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 1. break in loop ทำงานเมื่อไหร่ จบเลย
let aa = 1
while (aa <= 5) {
    aa++

    if (aa == 3) {
        break
    }
    console.log(aa - 1, 'Hello...')
    // ++a หรือ a =a + 1 หรือ a += 1 
}


// 2. continue in loop ทำงานเมื่อไหร่ จบloopรอบนั้นไปรอบต่อไปเลย
let bb = 1
while (bb <= 5) {
    bb++

    if (bb == 3) {
        continue
    }
    console.log(bb - 1, 'Hi...')

} // ++a หรือ a =a + 1 หรือ a += 1 