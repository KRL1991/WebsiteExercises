function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      
        var randomDogPic = JSON.parse(this.responseText)
      document.getElementById("imageName").innerHTML = randomDogPic.message[0];

      const img = document.getElementById("randomPicture");
      img.src = randomDogPic.message[0];
    
    };
    xhttp.open("GET", "https://dog.ceo/api/breeds/image/random/3", true);
    xhttp.send();
  }

  loadDoc()