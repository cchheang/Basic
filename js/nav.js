function toggleRespNav() {
    const x = document.getElementById("navBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  } 