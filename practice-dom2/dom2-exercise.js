//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let x = document.querySelector('button#show');
x.addEventListener('click',show)

function show(){
let a = document.createElement('a');
a.textContent = campus.address;
let p = document.querySelector('h2#addr');
p.insertAdjacentElement('afterend',a);

let u  = document.createElement('ul');
let l = document.createElement('li');
let b = document.querySelector('h2#dept');
b.insertAdjacentElement('afterend',u);

l.textContent = gakka[0].name;
u.insertAdjacentElement('beforeend',l);
l = document.createElement('li');

l.textContent = gakka[1].name;
u.insertAdjacentElement('beforeend',l);
l = document.createElement('li');

l.textContent = gakka[2].name;
u.insertAdjacentElement('beforeend',l);
l = document.createElement('li');


l.textContent = gakka[3].name;
u.insertAdjacentElement('beforeend',l);
l = document.createElement('li');
};