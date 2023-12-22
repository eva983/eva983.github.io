function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    console.log("ok");
  }

  
  let menuIcon=document.querySelector('#menu-icon');
  let closeIcon=document.querySelector('#close-icon');
  let navbar=document.querySelector('#navbar');
  let menuBtns=document.querySelectorAll('.nav-btn');
  console.log(menuBtns);

  menuIcon.onclick=()=> {
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
      document.body.style.overflow = 'visible'; //makes page scrollable


    } else {
      navbar.style.display = "block";
      document.body.style.overflow = 'hidden'; //makes page unscrollable

    }
  }
  menuBtns.forEach((btn) => btn.addEventListener("click", (e)=> {
    navbar.style.display = "none";
    console.log("k");
    document.body.style.overflow = 'visible'; //makes page scrollable


  })
  );


 

  const typed=new typed('.moving-text', {
    strings: ['Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
  });

  
