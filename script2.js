console.log('Document:=>')
console.log(document);

console.log('First Child:=>');
console.log(document.firstChild);

console.log('First Child\'s first child:=>');
console.log(document.firstChild.firstChild);

let h2Node = document.getElementsByTagName('h2')[1];
//h2Node.style.color = 'brown';

let classNameNode = document.getElementsByClassName('para')[1];
//classNameNode.style.color = 'brown';

let idNode = document.getElementById('item2');
//idNode.style.color = 'brown';

let parent = idNode.parentNode;
//parent.style.background = 'yellow';

let firstChild = parent.firstChild;
while(firstChild.nodeType !== Node.ELEMENT_NODE){
    firstChild = firstChild.nextSibling;
}
console.log(firstChild);
//firstChild.style.color = 'red';

let item2Node = document.getElementById('item2');

let prevSibling = item2Node.previousSibling;
//while(prevSibling.nodeType !== Node.ELEMENT_NODE){
//    prevSibling = prevSibling.previousSibling;
//}
//prevSibling.style.background = 'lightyellow'

let nextSibling = item2Node.nextSibling;
//while(nextSibling.nodeType !== Node.ELEMENT_NODE){
//    nextSibling = nextSibling.nextSibling;
//}
//nextSibling.style.background = 'lightgreen'

//Creating a new element
let bodyNode = document.getElementsByTagName('body')[0];
let divElement = document.createElement('div');
divElement.textContent = 'Hello! This is a new Element!!';
divElement.style.background = 'yellow';
bodyNode.appendChild(divElement);

//updating an existing element
let contactElement = document.getElementById('contact');
contactElement.textContent = 'Contact Our Team:';

//delete an existing element
//let btn1 = document.getElementById('btn1');
//bodyNode.removeChild(btn1);

//==================================
let textDiv = document.createElement('div');
textDiv.textContent = 'Please enter the radius of circle:';
bodyNode.appendChild(textDiv);

let inputBox = document.createElement('input');
inputBox.setAttribute('type', 'number');
bodyNode.appendChild(inputBox);

bodyNode.appendChild(document.createElement('p'));

let calculateButton = document.createElement('button');
calculateButton.textContent = 'Click here to calculate!';
bodyNode.appendChild(calculateButton);

calculateButton.addEventListener('click', calculateArea);
calculateButton.addEventListener('dblclick', calculateCircumference);

function calculateArea(){
    let radius = inputBox.value;
    let area = 3.14 * radius * radius;
    let areaP = document.createElement('p');
    areaP.textContent = `You have clicked the button!\nThe area of the circle is: ${area}`;
    bodyNode.appendChild(areaP);
}

function calculateCircumference(){
    let radius = inputBox.value;
    let circum = 2 * 3.14 * radius;
    let circumP = document.createElement('p');
    circumP.textContent = `You have double clicked the button!\nThe circumference of the circle is: ${circum}`;
    bodyNode.appendChild(circumP);

}
// comment is add by shiva on in branchshiva */



