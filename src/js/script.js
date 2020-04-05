import { BASE_DIR } from "../constants.yml";
import ShaderManager from "./lib/shaderManager";

const view = document.querySelector(".js-view");
const manager = new ShaderManager(view);

manager.init();
