import vars from '../_vars';
import { elementHeight } from '../functions/customFunctions';
window.addEventListener("DOMContentLoaded", () => {
elementHeight(vars.header, "header-height");
elementHeight(vars.card, "card-height");
elementHeight(vars.rowItem, "row-height");
});
