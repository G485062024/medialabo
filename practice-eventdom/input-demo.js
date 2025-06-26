let b;
let i;
b = document.querySelector('button#print');
i = document.querySelector('input[name="shimei"]');
i.getAttribute('name');
b.addEventListener('click', greeting);
    function greeting() {
        console.log('こんにちは,' + i.value + "さん");
    }