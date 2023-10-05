function setTime(){
    var time = new Date();
    document.getElementById("clock").innerHTML = getCurrentTime()

    setTimeout(setTime, 1000);
}


function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}


window.addEventListener("load", (event) => {
    setTime();
});
