export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  header: document.querySelector("header"),
  card: document.querySelector(".investments-now"),
  rowItem: document.querySelectorAll(".table-list .table-list__row")[0],

}




