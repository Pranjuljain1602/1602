document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio('audio/suniya-suniya-raata.mp3');
  
    // Handle audio playback button
    const playButton = document.getElementById('play-audio');
    playButton.addEventListener('click', function () {
      audio.play().catch(error => {
        console.log('Audio playback was prevented. Show a UI element to let the user manually start playback.');
      });
      // Hide the button after the audio starts playing
      playButton.style.display = 'none';
    });
  
    const slider = document.querySelector('.slider');
  
    function activate(e) {
      const items = document.querySelectorAll('.item');
      if (e.target.matches('.next')) {
        slider.append(items[0]);
      }
      if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
      }
    }
  
    document.addEventListener('click', activate, false);
  
    // Existing GSAP and ScrollTrigger code here...
  });
  
  