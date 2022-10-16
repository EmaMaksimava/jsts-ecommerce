import './index.css';
import { App } from './App/App';


const root = document.getElementById("root");

const app = new App();

if(!root) {
  throw new Error('The root element is undefined!');
}

root.innerHTML = app.render();