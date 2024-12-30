console.log('Hello World!');
var num = 1;
var poop = document.querySelector('.main');
var btn = document.querySelector('.yoo');

//poop.style.backgroundColor = 'black'
poop.addEventListener('click', function(){
  poop.style.backgroundColor = 'pink';
  btn.innerHTML = 'Welcome Rose, you just clicked the button ' + num++ + ' times';
  btn.style.width = 'auto';
  btn.style.minWidth = '150px';

  if (num == 10) {
    btn.innerHTML = 'huh is that not okay?';
    num += 1;
     poop.style.backgroundColor = 'green';
  }else if (num == 20) {
    btn.innerHTML = 'I love you so much dear 💕'
    num += 1;
    poop.style.backgroundColor = 'yellow';

  }else if (num == 30) {
    btn.innerHTML = 'I adore you my Darling and i will always love you'
    poop.style.backgroundColor = 'blue';
  }else if (num > 30) {
    btn.innerHTML = 'Huh I think that is okay my dear'
  }
})
