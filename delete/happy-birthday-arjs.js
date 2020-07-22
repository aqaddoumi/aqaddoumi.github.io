AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {




    function hideGiftModel() {
      /*giftElement.setAttribute('animation-mixer', 'loop: pingpong');
      giftElement.setAttribute(
        'animation__opacity',
        'property: model-opacity; to: 0; dur: 500; delay: 500'
      );
      giftElement.setAttribute(
        'animation__scale',
        'property: scale; to: 1 1 1; dur: 500;'
      );*/
    }

    //Cat
    function showCatModel() {
      /*catElement.object3D.visible = true;
      catElement.setAttribute(
        'animation',
        'property: scale; to: 0.1 0.1 0.1; dur: 500; delay: 500'
      );*/ 
    }

    //Particles
    function startParticles() {
      /*const particles = document.getElementsByClassName('particles');
      for (const p of particles) {
        setTimeout(function () {
          p.components['particle-system'].startParticles();
        }, 200);
        setTimeout(function () {
          p.components['particle-system'].stopParticles();
        }, 800);
      }*/
    }

    //Text
    function showBirthdayText() {
      /*const text01 = document.getElementById('text-01');
      const text02 = document.getElementById('text-02');
      const text03 = document.getElementById('text-03');
      const text04 = document.getElementById('text-04');

      text01.setAttribute('visible', true);
      text01.setAttribute(
        'animation-timeline',
        'timeline: #text-01-animation-timeline; loop:false;'
      );

      setTimeout(function () {
        text02.setAttribute('visible', true);
        text02.setAttribute(
          'animation-timeline',
          'timeline: #text-02-animation-timeline; loop:false;'
        );
      }, 250);

      setTimeout(function () {
        text03.setAttribute('visible', true);
        text03.setAttribute(
          'animation-timeline',
          'timeline: #text-03-animation-timeline; loop:false;'
        );
      }, 500);

      setTimeout(function () {
        text04.setAttribute('visible', true);
        text04.setAttribute(
          'animation-timeline',
          'timeline: #text-04-animation-timeline; loop:false;'
        );
      }, 750);*/
    }

    //Birthday Video
    function showBirthdayVideo() {
      /*setTimeout(function () {
        videoElement.object3D.visible = true;
        const videoAsset = document.getElementById('birthday-video-asset');
        videoAsset.play();
        videoAsset.muted = false;
        videoAsset.volume = 1;
        videoAsset.loop = false;
        videoAsset.addEventListener('ended', function() {
          hideVideoElement();
        })

        videoElement.setAttribute(
          'animation',
          'property: scale; to: 2 2 2; dur: 500;'
        );
        
      }, 6000);*/
    }

    function hideBirthdayVideo() {
      /*videoElement.setAttribute(
        'animation',
        'property: scale; to: 0 0 0; dur: 500;'
      );*/
    }

    function tuneDownBirthdayMusic() {
      /*const musicAsset = document.getElementById(
        'background-music-audio-asset'
      );
      musicAsset.volume = 1;

      let vol = 1;
      let interval = 500;
      let newVol = 0.1;

      var fadeOutMusic = setInterval(function () {
        if (vol > newVol) {
          vol -= 0.05;
          if (vol < newVol) {
            vol = newVol;
          }
          musicAsset.volume = vol;
        } else {
          clearInterval(fadeOutMusic);
        }
      }, interval);*/
    }



    function playConfettiAudio() {
      /*setTimeout(function () {
        const audioAsset = document.getElementById(
          'confetti-sound-audio-asset'
        );
        audioAsset.currentTime = 0;
        audioAsset.volume = 1;
        audioAsset.play();
      }, 250);*/
    }
  }
});

AFRAME.registerComponent('model-opacity', {
  schema: { default: 1.0 },
  init: function () {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function () {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) {
      return;
    }
    mesh.traverse(function (node) {
      if (node.isMesh) {
        node.material.opacity = data;
        node.material.transparent = data < 1.0;
        node.material.needsUpdate = true;
      }
    });
  },
});

//Show Interface
//Point Camera At QR Code
//Hide Interface
//Activate Media

//Load Assets
//Show Loading
//Hide Loading

//Start Experience

//Show Gift
//Hide Gift
//Show Cat
//Show Particles
//Show Text
//Hide Text
//Show Video
//Hide Video
//Play Music
//Tune Down Music
//Play Pop Sound
//Play Confetti Sound

//Barcode