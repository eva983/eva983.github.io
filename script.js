// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("light-mode");
//     console.log("ok");
//   }


// Iterate through the NodeList and add the 'styled-table' class to each table
document.querySelectorAll('table').forEach(function(table) {
  table.classList.add('styled-table');
});  
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


 

  // const typed=new typed('.moving-text', {
  //   strings: ['Web Developer'],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   backDelay:1000,
  //   loop:true
  // });

  
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      console.log(newText, this.el.innerText)
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // // ——————————————————————————————————————————————————
  // // Example
  // // ——————————————————————————————————————————————————
  
  const phrases = [
    'eva',
    '26',
    'human'
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()