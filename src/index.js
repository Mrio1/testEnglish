import Controller from './components/controller/controller';
import './index.scss';

const body = document.querySelector('body');
body.innerHTML = `
    <div class = 'app' id = 'app'>
        <div class = 'top-bar' id = 'top-bar'></div>
        <div class = 'main' id = 'main'></div>
    </div>
`
const appBlock = document.getElementById('app')
const mainBlock = document.getElementById('main');
const topBarBlock = document.getElementById('top-bar');

const controller = new Controller(appBlock, mainBlock, topBarBlock);

controller.init()