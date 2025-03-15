// control statement (loop/iteration/repetition) Ep.1
// การทำงานเดิมๆ ซ้ำ
//------------------------------
// 1. while เป็นจริงทำ
let aa = 1
while (aa <= 5) {
    console.log('Hello...')
    aa++ // ++a หรือ a =a + 1 หรือ a += 1 
}


// 2. do-while ทำก่อน แล้วพิสูจ เป็นจริงกลับไปทำ
let bb = 1
do {
    console.log('Hi...')
    bb++ // ++a หรือ a =a + 1 หรือ a += 1 
}
while (bb <= 5)

// 3. for
for (let cc = 1; cc <= 5; cc++) {
    console.log('Hey...')
}