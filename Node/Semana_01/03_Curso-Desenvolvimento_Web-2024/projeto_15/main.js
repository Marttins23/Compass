let list = document.getElementById("my-list");

let arrayFrutas = ['Banana', "Maçã", "Uva", "Pêra", "Melancia"];

for(let i = 0; i < arrayFrutas.length; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(arrayFrutas[i]));
    list.appendChild(listItem);
}