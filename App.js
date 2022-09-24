const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm");
const btn = document.querySelector("#btn");


function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "Am" ;
  if (h>12) {
    h = h - 12;
     ampm = "Pm"
  }
 
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s
hourEl.innerHTML=h
minuteEl.innerHTML=m
secondEl.innerHTML=s
 ampmEl.innerHTML=ampm
// ampmEl,(innerText =ampm)

 setTimeout(() =>{
   clock()
 }, 1000);
}
clock()