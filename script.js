let body = document.querySelector('body');
console.log(body);


let ul = document.createElement('ul'),
    li1 = document.createElement('li'),
    a1 = document.createElement('a'),
    li2 = document.createElement('li'),
    a2 = document.createElement('a'),
    li3 = document.createElement('li'),
    a3 = document.createElement('a');

console.log(ul);
console.log(li1, li2, li3);

a1.href ="https://www.facebook.com/";
a2.href ="https://www.facebook.com/";
a3.href ="https://www.facebook.com/";


a1.innerHTML = 'home';
a2.innerHTML ='about';
a3.innerHTML = 'projects';

li1.append(a1);
li2.append(a2);
li3.append(a3);
ul.append(li1, li2, li3);
body.append(ul);

let form1 = document.createElement('form'),
    form2 = docuument.creatElement('form'),
    form3 = document.createElement('form');

console.log(form1, form2, form3);

form.lastElementChild.addEventListener('click', function(e){
    e.preventDefault();
    if(form1.username.value){
        console.log('Welcome ' + sForm.username.value);
    }
    if(form2.password.value){
        console.log('Your password ' + sForm.password.value);
    }
});





body.className = 'container';




console.log(body);

//create links
