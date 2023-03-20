/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          // openDropdown.classList.remove('show');
        }
      }
    }
  }
  function myFunctionfilter() {
    document.getElementById("myDropdownfilter").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnfilter')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentfilter");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          // openDropdown.classList.remove('show');
        }
      }
    }
  }
  function myFunctionNano() {
    document.getElementById("myDropdownNano").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnNano')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentNano");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          // openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  function ClearFields() {

    document.getElementById("ip2").value = "";
    document.getElementById("ip3").value = "";
    document.getElementById("ip4").value = "";
    document.getElementById("ip5").value = "";
    document.getElementById("ip6").value = "";
    document.getElementById("ip7").value = "";
    document.getElementById("ip8").value = "";
    document.getElementById("ip9").value = "";
    document.getElementById("ip10").value = "";
    document.getElementById("ip11").value = "";
    document.getElementById("ip12").value = "";
    document.getElementById("ip13").value = "";
    document.getElementById("ip14").value = "";
    document.getElementById("ip15").value = "";
    document.getElementById("ip16").value = "";
    document.getElementById("ip17").value = "";
    document.getElementById("ip18").value = "";
    document.getElementById("ip19").value = "";

}
