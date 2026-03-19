

import { Manager } from "./Manager.js";
import { UI } from "./UI.js";

const manager= new Manager();
const ui= new UI(manager);

ui.render();