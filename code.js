var skore = 0;
    var polenaskore = document.getElementById("skore");
    var vyhodnoceno = false;
    function vyhodnotit(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno = false;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno = true;
        alert("špatně! Začněte znovu kliknutím na tlačítko Resetovat")
      }
      polenaskore.innerText = skore;
    }
    function resetovat(){
      window.location.reload(true);
    }

  