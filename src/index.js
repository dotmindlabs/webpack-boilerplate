import "./main.scss";

//import { run } from "./app/app";
//import { AlertService } from "./app/alert.service";
//import { ComponentService } from "./app/component.service";
//const alertService = new AlertService();
//const componentService = new ComponentService();
//run(alertService, componentService);

// ES6 (ES2015)
let a = 40;
const b = 50;
var evens = [1,2,3,47]
var odds = evens.map(v => v + 1); 
var nums = evens.map((v, i) => v + i);

console.log("odds:" + odds);

// ES7 (ES2016) use babel-polyfill
async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}

getPosts().then(posts => console.log(posts))

