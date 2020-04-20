function myTimer() {
    var Time = new Date();
    var h1 = document.getElementById('date');
    h1.innerHTML = Time.toLocaleTimeString();
  }
  window.onload = setInterval(myTimer, 1000);