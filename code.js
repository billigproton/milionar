var skore = 0;
    var polenaskore = document.getElementById("skore");
    var vyhodnoceno1 = false;
    var vyhodnoceno2 = false;
    var vyhodnoceno3 = false;
    var vyhodnoceno4 = false;
    var vyhodnoceno5 = false;
    var vyhodnoceno6 = false;
    var vyhodnoceno7 = false;
    var vyhodnoceno8 = false;
    var vyhodnoceno9 = false;
    var vyhodnoceno10 = false;
    function vyhodnotit1(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno1 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno1 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno1 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno1 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit2(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno2 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno2 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno2 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno2 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit3(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno3 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno3 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno3 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno3 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit4(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno4 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno4 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno4 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno4 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit5(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno5 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno5 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno5 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno5 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit6(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno6 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno6 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno6 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno6 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit7(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno7 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno7 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno7 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno7 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit8(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno8 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno8 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno8 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno8 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit9(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno9 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno9 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno9 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno9 = true;
      }
      polenaskore.innerText = skore;
    }
    function vyhodnotit10(input){
      if(input.className == "spravnaodpoved" && vyhodnoceno10 == false){
        input.style.backgroundColor = "lightgreen";
        skore += 100000;
        vyhodnoceno10 = true;
      } else if (input.className != "spravnaodpoved" && vyhodnoceno10 == false){
        input.style.backgroundColor = "red";
        skore = 0;
        vyhodnoceno10 = true;
      }
      polenaskore.innerText = skore;
    }
    
    function resetovat(){
      window.location.reload(true);
    }