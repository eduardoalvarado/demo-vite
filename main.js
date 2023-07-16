import "./style.css";
import buttonStyle from "./button.module.css";
import imageSVGStyle from "./imageSVG.module.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import girl from "./public/girl.svg";
import boy from "./public/boy.svg";
import { user } from "./data.json";
import suma from "./suma.ts";

console.log(`suma de 2 + 3 = ${suma(2, 3)}`);

//import global modules
const modules = import.meta.glob("./modules/*.js");

for (const path in modules) {
  const fn = async () => {
    const mod = await modules[path]();
    mod.load();
  };
  fn();
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <a>Documentation</a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn" >Test</button>
    <div class="imageSVG" >
      <img id="imgBoy" />
      <img id="imgGirl" />
    </div>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;
document.getElementById("btn").className = buttonStyle.btn;
const imgBoy = document.getElementById("imgBoy");
const imgGirl = document.getElementById("imgGirl");
imgBoy.src = boy;
imgGirl.src = girl;
document.getElementsByClassName("imageSVG")[0].className =
  imageSVGStyle.imageSVG;

setupCounter(document.querySelector("#counter"));
