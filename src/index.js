import './assets/scss/main.scss'; // pipe scss through webpack
import {Dog} from './dog.js'; // named imports, export does not use "default" and curly braces required
import catSays from './cat.js'; // import from class/function with export default

function component(inner) {
    let element = document.createElement('div');

    let innerContent = '';

    if( inner ) {
        innerContent = inner;
    }

    element.innerHTML = innerContent;

    return element;
}

const mainContainer = document.getElementById('app');

var testFunction = (param) => param + 1; // test arrow function for to make sure babel is transpiling es6

// send test values to index.html
document.body.appendChild(component());

let dog = new Dog('ralph', 'golden retriever');

document.body.appendChild(component( 'Imported class - Dog greeting: ' + dog.sayHi() ));

document.body.appendChild(component( 'Imported function - Cat says: ' + catSays()));

mainContainer.innerHTML = 'Arrow function result - ' + testFunction(2);