import './index.css';
import { App } from './App/App';
import { appStore } from './App/Store/AppStore';


const root = document.getElementById("root");

const app = new App();

if(!root) {
  throw new Error('The root element is undefined!');
}

root.innerHTML = app.render();

appStore.$state.subscribe(() => {
  root.innerHTML = app.render();
  app.addEvents();
});