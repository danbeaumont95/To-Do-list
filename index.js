const list = document.getElementById('list');

const addButton = document.getElementById('button').addEventListener('click', addToList)


function addToList() {
    //console.log('hi from button')
let addedListItem = document.getElementById('addedListItem').value;
let entry = document.createElement('li');
entry.appendChild(document.createTextNode(addedListItem))
list.appendChild(entry)
}
