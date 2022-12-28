// Dapatkan jam saat ini dalam bentuk integer
  const jam = new Date().getHours();

  // Tentukan pesan yang sesuai berdasarkan waktu saat ini
  if (jam < 11) {
    document.getElementById("good").innerHTML = "Selamat Pagi";
  } else if (jam < 15) {
    document.getElementById("good").innerHTML = "Selamat Siang";
  } else if (jam < 18) {
    document.getElementById("good").innerHTML = "Selamat Sore";
  } else {
    document.getElementById("good").innerHTML = "Selamat Malam";
  }

if (screen.width > 600) {
  alert("Maaf, aplikasi ini hanya bisa dibuka pada ponsel");
}

if (navigator.userAgent.match(/Computer|Laptop/i)) {
  alert("Maaf, website ini tidak kompatibel dengan perangkat Anda");
}

if (navigator.userAgent.match(/Computer|Laptop/i)) {
  document.body.style.display = "none";
}

window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
    
  function filter() {
    var value,name,profile,i;
    value = document.getElementById("value").value.toUpperCase();
    profile = document.getElementsByClassName("profile");
    for(i=0;i<profile.length;i++){
      name = profile[i].getElementsByClassName("name");
      if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
        profile[i].style.display = "flex";
      }else{
        profile[i].style.display = "none";
      }
    }
  }