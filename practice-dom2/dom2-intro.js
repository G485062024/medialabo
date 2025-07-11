let b = document.querySelector('button#henkou');
b.addEventListener('click',changeDom);

function changeDom(){
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src','bluemoon.jpg');

    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);

    let x = document.querySelector('li#mochi');
    x.remove();
    let y = document.querySelector('ul#kassen');
    y.remove();

    let u = document.createElement('ul');
    let p2 = document.querySelector('p#primary'); 
    p2.insertAdjacentElement('afterend', u);   

    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l); 

    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
}