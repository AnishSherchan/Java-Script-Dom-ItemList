// // console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.)

// Get Element by ID
// console.log(document.getElementById('header-title'));
// const headerTile = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// // headerTile.textContent = 'Hello'; // pays attention on css
// // headerTile.innerHTML = 'GoodBye'; //Inner text pays attention on just text
// // headerTile.innerHTML ='<h3> Hello </h3>';
// header.style.borderBottom = 'solid 3px black'


// Get Element by class name 
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[2].innerHTML = ('Hello');
// items[2].style.backgroundColor = 'pink';

// for (let i = 0; i < items.length; i++) {
//     if (i%2 == 0) {
//         items[i].style.backgroundColor='pink'
//     }
//     else{
//         items[i].style.backgroundColor='purple'
//     }
    
// }

//by tag name
// const li = document.getElementsByTagName('li');
// console.log(li);

// Get Elemet by Query Selector
// const header = document.querySelector('#main-header'); //For id
// header.style.borderBottom = 'solid 4px black';

// const message = document.querySelector("input");   //tag name
// message.value = 'Hello';
// var submit = document.querySelector('input[type = "submit"]')
// submit.value = "Sucess";

// const items = document.querySelector('.list-group-item'); // class name
// console.log(items);
// const items3 = document.querySelector('.list-group-item:last-child');
// console.log(items3);
// const items4 = document.querySelector('.list-group-item:nth-child(2)');
// console.log(items4);
 
// items.style.color = 'blue';
// items3.style.color = 'grey';
// items4.style.color = 'pink';

// QuerySelector All
// const title = document.querySelectorAll('.title');
// console.log(title);
// title[0].innerHTML = 'Anish';
// const lists = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.color = 'white';
// }

// tarnversing dom
//  //parent node
//  console.log(itemlist.parentNode);
//  itemlist.parentNode.style.backgroundColor = 'grey';
//  console.log(itemlist.parentElement);

// console.log(itemlist.children);
// console.log(itemlist.firstElementChild);

// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousElementSibling);


// Create elemrnt

// var newDiv = document.createElement('div');
// // Adding class to div 
// newDiv.className = 'Hello';
// // adding id
// newDiv.id = 'New';
// // adding attr
// newDiv.setAttribute('title','Hello Div');
// // adding text in div
// var textmess = document.createTextNode("Hello World");
// // adding text into div 
// newDiv.appendChild(textmess);
// console.log(newDiv);

// var cont = document.querySelector('.container');
// var h1 = document.querySelector('h1');
// cont.insertBefore(newDiv,h1);
// console.log(newDiv)

// // new 

// function Insert() {
//     var itemlist = document.querySelector('#items');
//     console.log(itemlist);
//     var li = document.createElement('li');
//     li.className = "list-group-item";
//     console.log(itemlist.children[2])
//     var text = document.createTextNode("Item 0");
//     li.appendChild(text);
//     itemlist.insertBefore(li,itemlist.children[0])
// }

// EventListner
// var btn = document.getElementById('Button').addEventListener('click',btn);
// function btn(e) {
//     // document.getElementById('header-title').textContent = "AnishSherchan.";
//     // document.getElementById('main').style.backgroundColor = 'grey';
//     // console.log(e)
//     console.log(e.target.className);
//     var out
// }
// var btn = document.getElementById('Button').addEventListener('dblclick',runEvent);
// var btn = document.getElementById('Button').addEventListener('mousedown',runEvent);
// var btn = document.getElementById('Button').addEventListener('mouseup',runEvent);
// var box = document.getElementById('box');
// // box.addEventListener('mouseenter',runEvent)
// // box.addEventListener('mouseleave',runEvent)
// // box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)
// var input = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// input.addEventListener('keydown', runEvent);
// form.addEventListener('submit', runEvent)
// function runEvent(e) {
//     e.preventDefault();
//     console.log(e.target.value)
//     // Focus, Blur, keypress, keyup, keydown, cut paste
//     var box = document.getElementById('box')
//     box.innerHTML = '<h2>'+e.target.value+'</h2>' ;
//     // console.log('EVENT TYPE: '+ e.type);

// }

// Main Project
var form = document.getElementById('addform');
var iteamlist = document.getElementById('items');
var clrbtn = document.getElementById('Clear');
Check()
function Check(){
    if (iteamlist.childElementCount === 0) {
        clrbtn.style.display = 'none';
    }
}
// Making a submit event
form.addEventListener('submit',add);
// Making delete btn
iteamlist.addEventListener('click',remove);
// Filter
var filter = document.getElementById('filter');
filter.addEventListener('keyup',search);
// Add Function
function add(e) {
    e.preventDefault();
    var value = document.getElementById('value').value;
    if (value.length > 0 ){
        var package = document.createElement('li');
        package.className='list-group-item';
        package.appendChild(document.createTextNode(value));
        iteamlist.appendChild(package);
        // 
        var delbtn = document.createElement('button');
        delbtn.className = 'btn btn-danger btn-sm float-end delete';
        delbtn.appendChild(document.createTextNode('X'));
        // Adding btn to the li
        package.appendChild(delbtn);
        console.log(package);
        document.getElementById('value').value = '';
        clrbtn.style.display = 'block';
    }else{
        alert("Please Enter Something to insert")
    }
}
function remove(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure!')) {
            var li = e.target.parentElement;
            iteamlist.removeChild(li);
            Check();
        }
    }
}
function search(e) {
    var text = e.target.value.toLowerCase();
    var items = iteamlist.getElementsByTagName('li');
    // changiong to Array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}
clrbtn.addEventListener('click',Clear);
function Clear(e){
    iteamlist.innerHTML='';
    clrbtn.style.display='none';
}