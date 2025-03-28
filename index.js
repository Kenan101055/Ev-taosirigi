let a = 0; //saniye
let b = 0; //deqiqe
let c = 0; //saat
//let d = 29; //gün
//let e = 6; //hefte
//let f = 3; //ay
//let g = 2025; //il
//let h = 61; //qerine
//let i = 21; //esr
function clock() {
setInterval(() => {
  a++;
  if (a == 60) {
    a = 0;
    b++; 
  }
  if (b == 60) {
    a = 0;
    b = 0;
    c++;
  }
 // if (c == 24) {
 //   c = 0;
 //   d++;
 // }
 // if (d == 7) {
 //   e = 0;
 //   e++;
 // }
 // if (d == 30) {
 //   f++;
 // }
 // if (d == 365) {
 //   d = 0;
 //   g++;
 // }
 // if (g == 33) {
 //   h++;
 // }
 // if (g == 100) {
 //   i++;
 // }
  document.getElementById('saat').innerText = `${c}:${b}:${a}`;
}, 1000);

}
clock()