const list = document.getElementById('list');

const addButton = document.getElementById('addButton').addEventListener('click', addToList)
const removeButton = document.getElementById('removeButton').addEventListener('click', removeFromList)

function addToList() {

let addedListItem = document.getElementById('addedListItem').value;
let entry = document.createElement('li');
entry.appendChild(document.createTextNode(addedListItem))
entry.onclick= toggle;
list.appendChild(entry)

}

function removeFromList() {
    list.removeChild(list.childNodes[0])
}


const checklist = document.querySelectorAll('li')
checklist.forEach(item => {
    item.addEventListener('click', toggle)
})

function toggle() {
    event.target.classList.toggle('strikethrough')

if (event.target.classList.contains('strikethrough')) {
    event.target.className = 'strikethrough'
}
// else {
//     event.target.innerHTML = event.target.classList.replace('strikethrough', '')
// }

}
