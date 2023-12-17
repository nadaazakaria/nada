let currentIndex = 0;

function apperacetext() {
  let text = document.querySelector('.text');
  const texts = [`"The best revenge is massive success."
  --Frank Sinatra` ,
  `"It is not what happens to you, but how you react to it that matters."
  --Epictetus` ,
  `"You miss 100% of the shots you don t take."
  --Wayne Gretzy` ,
  `"Resentment is like drinking poison and waiting for your enemies to die."
  --Nelson Mandela` ];

  text.textContent = texts[currentIndex];

  currentIndex++;
  if (currentIndex >= texts.length) {
    currentIndex = 0;
  }
  // text.style.font-size ='40px'
}