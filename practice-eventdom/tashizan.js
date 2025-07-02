let b, p;
b = document.querySelector('button#calc');
b.addEventListener('click',addition);

p = document.querySelector('span#answer');

function addition(){
    let i1 = document.querySelector('input[name="left"]');
    let i2 = document.querySelector('input[name="right"]');
    let i3 = parseInt(i1.value);
    let i4 = parseInt(i2.value);
    let kotae = (i3 + i4);
    p.textContent = kotae;
}