let log = console.log;

// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
// log(document.domain);
// log(document.URL);
// log(document.title);
// // document.title = 123;
// log(document.doctype);
// log(document.head);
// log(document.body);
// log(document.all);
// log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// log(document.forms[0]);
// log(document.links);
// log(document.images);

//  GETELEMENTBYID //
// log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item');
// log(items);
// log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// // Gives error
// // items.style.backgroundColor = '#f4f4f4';
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// let li = document.getElementsByTagName('li');
// log(li);
// log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// // Gives error
// // li.style.backgroundColor = '#f4f4f4';
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItemm = document.querySelector('.list-group-item:last-child');
// lastItemm.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');

// log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
let itemList = document.querySelector('#items');
// parentNode
// log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// log(itemList.parentNode.parentNode.parentNode);

// parentElement
// log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// log(itemList.parentElement.parentElement.parentElement);

// childNodes
// log(itemList.childNodes);

// log(itemList.children);
// log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // Firstchild
// log(itemList.firstChild);
// // firstElementchild
// log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// log(itemList.lastChild);
// firstElementchild
// log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// log(itemList.nextSibling);
// // nextElementSibling
// log(itemList.nextElementSibling);

// previousSibling
log(itemList.previousSibling);
// previousElementSibling
log(itemList.previousElementSibling);