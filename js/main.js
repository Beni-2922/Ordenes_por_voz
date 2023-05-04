const messages=document.querySelector(".texts");
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p");
recognition.addEventListener("result", (e) => {

  messages.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;

  if (e.results[0].isFinal) {

    if (text.includes("Siri prende foco uno")) {
      document.getElementById("F1").checked = true;
      document.querySelector(".B1").style.background =
        "url(../img/bulb_on.jpg)";}

    if (text.includes("Siri apaga foco uno")) {
      document.getElementById("F1").checked = false;
      document.querySelector(".B1").style.background =
        "url(../img/bulb_off.jpg)";}

    if (text.includes("Siri prende foco dos")) {
      document.getElementById("F2").checked = true;
      document.querySelector(".B2").style.background =
        "url(../img/bulb_on.jpg)";}

    if (text.includes("Siri apaga foco dos")) {
      document.getElementById("F2").checked = false;
      document.querySelector(".B2").style.background =
        "url(../img/bulb_off.jpg)";}

    if (text.includes("Siri prende foco tres")) {
      document.getElementById("F3").checked = true;
      document.querySelector(".B3").style.background =
        "url(../img/bulb_on.jpg)";}

    if (text.includes("Siri apaga foco tres")) {
      document.getElementById("F3").checked = false;
      document.querySelector(".B3").style.background =
        "url(../img/bulb_off.jpg)";}

    if (text.includes("Siri prende foco cuatro")) {
      document.getElementById("F4").checked = true;
      document.querySelector(".B4").style.background =
        "url(../img/bulb_on.jpg)";}

    if (text.includes("Siri apaga foco cuatro")) {
      document.getElementById("F4").checked = false;
      document.querySelector(".B4").style.background =
        "url(../img/bulb_off.jpg)";}

    if (text.includes("Siri prende foco cinco")) {
      document.getElementById("F5").checked = true;
      document.querySelector(".B5").style.background =
        "url(../img/bulb_on.jpg)";}

    if (text.includes("Siri apaga foco cinco")) {
      document.getElementById("F5").checked = false;
      document.querySelector(".B5").style.background =
        "url(../img/bulb_off.jpg)";}

    if (text.includes("Siri")) {
      const audio = document.getElementById("linux-sound");
      audio.play();}

    p = document.createElement("p");
  }});
recognition.addEventListener("end", () => {
  recognition.start();});
recognition.start();