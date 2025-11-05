function showMessage() {
    document.getElementById('message').style.display = 'block';
    createHearts();
  }
  
  function createHearts() {
    const container = document.querySelector('.hearts');
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      container.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  }
  