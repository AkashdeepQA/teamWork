let item2 = document.getElementById('item2');

let prevSib = item2.previousSibling;
while(prevSib.nodeType !== Node.ELEMENT_NODE){
    prevSib = prevSib.previousSibling;
}
prevSib.style.background = 'yellow';

let nextSib = item2.nextSibling;
while(nextSib.nodeType !== Node.ELEMENT_NODE){
    nextSib = nextSib.nextSibling;
}
nextSib.style.background = 'green';