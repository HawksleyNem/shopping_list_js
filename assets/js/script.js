// let ul = document.querySelector('ul');
// let input = document.querySelector('input');

// function addToList() {
//     let inputValue = input.value;
//     console.log(inputValue);

//     let li = document.createElement("li");
//     console.log(li);
//     let span = document.createElement("span");
//     console.log(span);
//     let button = document.createElement("button");
//     console.log(button);

//     button.textContent = 'Supprimer';
//     button.setAttribute('onclick', "removeToList()");
//     console.log(button);

//     span.textContent = `${inputValue} `;

//     li.appendChild(span);
//     li.appendChild(button);
//     ul.appendChild(li);
// }


// function removeToList() {
//     let li = document.querySelector("li");
//     ul.removeChild(li);
// }



// // Méthode non recommendée
// let ul = document.querySelector('ul');
// let input = document.querySelector('input');

// function addToList() {
//     const inputValue = input.value;
//     console.log(inputValue);
//     ul.innerHTML += `
//     <li>
//     <span>
//     ${inputValue}
//     </span>
//     <button>Supprimer</button>
//     </li>`
// }



// Correction
let ul = document.querySelector('ul');
let input = document.querySelector('input');

function addToList() {
    const inputValue = input.value;
    // Création des éléments 'li', 'span' et 'button'
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // Utilisation de la saisie utilisateur pour l'afficher
    span.textContent = inputValue;
    button.textContent = 'Supprimer';

    // Insersion des éléments 'span' et 'button' dans 'li'
    li.appendChild(span);
    li.appendChild(button);
    // Insertion de l'élément 'li' dans 'ul'
    ul.appendChild(li);

    // Application de l'attribut qui permet de supprimer l'élément de la liste au bouton
    button.setAttribute("onclick", "removeToList(this)");
}

function removeToList(el) {
    console.log(el);
    el.parentElement.remove();
}