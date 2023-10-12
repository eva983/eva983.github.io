function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    console.log("ok");
  }

  
  let menuIcon=document.querySelector('#menu-icon');
  let navbar=document.querySelector('#navbar');

  menuIcon.onclick=()=> {
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }


  const typed=new typed('.moving-text', {
    strings: ['Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
  });


  