/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function sendForm() {
    message = document.getElementById("Message").value;
    email = document.getElementById("Email").value;
    name = document.getElementById("Name").value;
    console.log(message, email, name);
    if (message && email && name) {
      window.location = "NEI.html";
    }
  }
