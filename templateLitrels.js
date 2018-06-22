const name = 'sheeraz';
const age = 41;
const job = 'web developer';
const  city = 'bhopal';
let html;

html = `<ul>

<li>Name:  ${name}  </li> <ul> <li>age:  ${age} </li> <ul> <li>job  ${job} </li>

<ul> <li>city: ${city}  </li> </ul>`;

document.body.innerHTML = html;