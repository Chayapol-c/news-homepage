import './style.css'

const hamburger = document.querySelector(".hamburger-btn")
const slideOut = document.querySelector(".slide-out")
const closeBtn = document.querySelector(".close-btn")
const overlay = document.querySelector(".overlay")

slideOut?.classList.add("hidden")
overlay?.classList.add("hidden")

hamburger?.addEventListener("click", () => {
  slideOut?.classList.remove("hidden")
  overlay?.classList.remove("hidden")
})
closeBtn?.addEventListener("click", () => {
  slideOut?.classList.add("hidden")
  overlay?.classList.add("hidden")
})