let c = document.getElementById('blue')
let d = document.getElementById('white')
let a = 1
let b = 799
setInterval(() => {
    if (a < 800 && b >0){
    a++;
    b--; 
    c.style.width = a + 'px'
    d.style.width = b + 'px'
    }
}, 100);