// terms & cond
for (i = 0; i < document.getElementsByClassName('accordion').length; i++) {
  document
    .getElementsByClassName('accordion')
    [i].addEventListener('click', function () {
      this.classList.toggle('active');

      console.log(this);
      if (document.getElementById('panel').style.maxHeight) {
        document.getElementById('panel').style.maxHeight = null;
        arrow.innerHTML = '▶ Όροι και Προϋποθέσεις';
      } else {
        document.getElementById('panel').style.maxHeight =
          panel.scrollHeight + 'px';
        arrow.innerHTML = '▲ Όροι και Προϋποθέσεις';
      }
    });
}

//DISPLAY TRAIN OF THE DAY
//the train has the ID of the day and year each day. 
//each train has unique place on the map

document.getElementById('btns-container').innerHTML += `
    <div class="btn-cont" id="locked-ice-${new Date().getDate()}-${new Date().getFullYear()}">
        <div class="wbq--map__l flex-col flex-center" id="rot-${new Date().getDate()}-${new Date().getFullYear()}"></div>
         <div class="wbq--map__l--text" id="text-${new Date().getDate()}-${new Date().getFullYear()}">
         ${new Date().getDate()}/${new Date().getMonth() + 1}</div>
    </div>
 `;

////////////////////////////////////////////
//change where visual elements appear depending on the dates 
if (new Date().getDate() <= 17 && new Date().getFullYear() === 2023) {
  document.querySelector('.lottie-link').classList.add('lottie-top');
  document.getElementById('trees').style.display = 'none';
  document.getElementById('snowman').style.top = '905px';
  document.getElementById('snowman').style.left = '353px';
} else if (new Date().getFullYear() === 2024 || new Date().getDate() >= 25) {
  document.querySelector('.lottie-link').classList.add('lottie-btm');
  document.getElementById('snowman').style.top = '905px';
  document.getElementById('snowman').style.left = '353px';
} else {
  document.querySelector('.lottie-link').classList.add('lottie-middle');
  document.getElementById('snowman').style.display = 'block';
}

////change what visual text elements appear depending on the dates 
if (new Date().getDate() < 11 && new Date().getFullYear() === 2023) {
  document.querySelector('.down-text').innerHTML = `5k Prize Pool`;
} else if (new Date().getDate() < 18 && new Date().getFullYear() === 2023) {
  document.querySelector('.down-text').innerHTML = `6k Prize Pool`;
} else if (new Date().getDate() >= 18 && new Date().getDate() < 25) {
  document.querySelector('.lottie-link').href = '/el/casino/cat/xmas-duels';
  document.querySelector('.down-text').innerHTML = `10k Prize Pool`;
} else {
  document.querySelector('.down-text').innerHTML = `10k Prize Pool`;
}


//function to display POP UP
//when the visual element is clicked the pop up appears
//we blur the elements behind it using the class blur 
document.getElementById(
  'locked-ice-' + new Date().getDate() + '-' + new Date().getFullYear()
).onclick = function () {
  document.getElementById(
    'modal' + new Date().getDate() + '-' + new Date().getFullYear()
  ).style.display = 'block';
  document.getElementById('island').classList.add('blur');
  document.getElementById('hall-logo-subtitle').classList.add('blur');
  document.getElementById('hall-logo-subtitleh2').classList.add('blur');
  document.getElementById('hall-logo').classList.add('blur');
  document.querySelector('.accordion').style.display = 'none';

  document.body.style.overflow = 'hidden'; //makes page unscrollable
};

//closes modal when you click X and removes blur filter
document
  .getElementById(
    'modal-close-btn' + new Date().getDate() + '-' + new Date().getFullYear()
  )
  .addEventListener('click', function () {
    document.getElementById(
      'modal' + new Date().getDate() + '-' + new Date().getFullYear()
    ).style.display = 'none';
    document.getElementById('island').classList.remove('blur');
    document.getElementById('hall-logo-subtitle').classList.remove('blur');
    document.getElementById('hall-logo-subtitleh2').classList.remove('blur');
    document.getElementById('hall-logo').classList.remove('blur');
    document.querySelector('.accordion').style.display = 'block';

    document.body.style.overflow = 'visible';
  });

document.addEventListener('click', (event) => {
  // Check if theres a click event is outside the popup to close modal and remove blur 
  if (
    event.target == document.getElementById('island-container') ||
    event.target == document.getElementById('island') ||
    event.target == document.body
  ) {
    document.getElementById(
      'modal' + new Date().getDate() + '-' + new Date().getFullYear()
    ).style.display = 'none';
    document.getElementById('island').classList.remove('blur');
    document.getElementById('hall-logo-subtitle').classList.remove('blur');
    document.getElementById('hall-logo-subtitleh2').classList.remove('blur');
    document.getElementById('hall-logo').classList.remove('blur');
    document.querySelector('.accordion').style.display = 'block';

    document.body.style.overflow = 'visible';
  }
});

//function to scroll to the visual element when the user enters the page 
setTimeout(function () {
  if (
    document.getElementById(
      'locked-ice-' + new Date().getDate() + '-' + new Date().getFullYear()
    )
  ) {
    document
      .getElementById(
        'locked-ice-' + new Date().getDate() + '-' + new Date().getFullYear()
      )
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }  //block: 'center' > centers the element 
}, 1000); // delay to scroll 

//loads our lottie animation
bodymovin.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://intranet-wm.s3.eu-central-1.amazonaws.com/resources/img/santa.json',
});
