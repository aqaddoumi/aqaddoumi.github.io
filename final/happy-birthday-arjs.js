AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {
    //Get Element and scene
    const el = this.el;
    const scene = this.el.sceneEl;

    //Variables to keep track of experience and when to start properly
    let didUserTap = false;
    let didAssetsLoad = false;
    let didFindMarker = false;
    let didExperienceStart = false;

    //Elements
    const loadingEl = document.getElementById('loading');
    const giftEl = document.getElementById('gift-model');
    const catEl = document.getElementById('cat-model');
    const videoEl = document.getElementById('birthday-video');

    //Loading Progress
    let loadingAmount = 0;

    //Get Button
    const button = document.getElementById('start-button');
    console.log(button);

    //Listen to Button Click
    button.addEventListener('click', function() {
      if (!didUserTap) {
        didUserTap = true;
        hideInterface();
        activateMedia();
  
        if (didAssetsLoad && didFindMarker && !didExperienceStart) {
          startExperience();
        } 
      }
    })

    function hideInterface() {
      const userInterface = document.getElementById('interface-container');
      userInterface.style.display = 'none';
    }

    //Activate media on touch to enable sounds and playing later on
    function activateMedia() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'video' || a.type === 'audio') {
          a.asset.play();
          a.asset.pause();
        }
      }
    }

    //Listen to Marker Found Event
    el.addEventListener('markerFound', (e) => {
      if (!didFindMarker) {
        didFindMarker = true;
        if (didUserTap && didAssetsLoad && !didExperienceStart) {
          startExperience();
        } else if (didUserTap) {
          showLoadingElement();
        }
      }
    });

    //Load Assets
    let assets = [];

    addVideoAssets();
    addAudioAssets();
    addModelAssets();

    loadVideoAssets();
    loadAudioAssets();
    loadModelAssets();

    //Add Video Assets into assets array
    function addVideoAssets() {
      const videoAssets = scene.querySelectorAll('video');
      for (let i = 0; i < videoAssets.length; i++) {
        let v = {};
        v.type = 'video';
        v.id = videoAssets[i].id;
        v.asset = videoAssets[i];
        v.isLoaded = false;
        assets.push(v);
      }
    }

    //Add Audio Assets into assets array
    function addAudioAssets() {
      const audioAssets = scene.querySelectorAll('audio');
      for (let i = 0; i < audioAssets.length; i++) {
        let a = {};
        a.type = 'audio';
        a.id = audioAssets[i].id;
        a.asset = audioAssets[i];
        a.isLoaded = false;
        assets.push(a);
      }
    }

    //Add Model Assets into assets array
    function addModelAssets() {
      const modelAssets = document.getElementsByClassName('model');
      for (let i = 0; i < modelAssets.length; i++) {
        let m = {};
        m.type = 'model';
        m.id = modelAssets[i].id;
        m.asset = modelAssets[i];
        m.isLoaded = false;
        assets.push(m);
      }
    }

    //Check if video assets are loaded and register events when loaded
    function loadVideoAssets() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'video') {
          if (!a.isLoaded) {
            if (a.asset.readyState > 3) {
              videoAssetLoaded(a.id);
            } else {
              a.asset.oncanplaythrough = function () {
                videoAssetLoaded(a.id);
              };
            }
          }
        }
      }
    }

    //Change video asset into loaded in the assets array when loaded
    function videoAssetLoaded(id) {
      let video = assets.find((v) => v.type === 'video' && v.id === id);
      video.isLoaded = true;
      areAllAssetsAreLoaded();
    }

    //Check if audio assets are loaded and register events when loaded
    function loadAudioAssets() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'audio') {
          if (!a.isLoaded) {
            if (a.asset.readyState > 3) {
              audioAssetLoaded(a.id);
            } else {
              a.asset.oncanplaythrough = function () {
                audioAssetLoaded(a.id);
              };
            }
          }
        }
      }
    }

    //Change video asset into loaded in the assets array when loaded
    function audioAssetLoaded(id) {
      let audio = assets.find((v) => v.type === 'audio' && v.id === id);
      audio.isLoaded = true;
      areAllAssetsAreLoaded();
    }

    //Check if model assets are loaded and register events when loaded
    function loadModelAssets() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'model') {
          if (!a.isLoaded) {
            if (a.asset.hasLoaded) {
              modelAssetLoaded(a.id);
            } else {
              a.asset.addEventListener('loaded', () => {
                modelAssetLoaded(a.id);
              });
            }
          }
        }
      }
    }

    //Change model asset into loaded in the assets array when loaded
    function modelAssetLoaded(id) {
      let model = assets.find((v) => v.type === 'model' && v.id === id);
      model.isLoaded = true;
      areAllAssetsAreLoaded();
    }

    //Check if all Assets are loaded
    function areAllAssetsAreLoaded() {
      let count = 0;
      for (let i = 0; i < assets.length; i++) {
        if (assets[i].isLoaded) {
          count++;
        }
      }

      if (count === assets.length) {
        if (!didAssetsLoad) {
          didAssetsLoad = true;
          if (didUserTap && didFindMarker && !didExperienceStart) {
            startExperience();
          }
        }
      } else {
        loadingAmount = count / assets.length;
        updateLoadingProgress();
      }
    }

    //Start Experience
    function startExperience() {
      if (!didExperienceStart) {
        alert('start experience');
        didExperienceStart = true;
        hideLoadingElement();
        showGiftModel();
        playPopSound();
        startBackgroundMusic();
      }
    }

    //Loading
    function showLoadingElement() {
      loadingEl.setAttribute('color', 'white');
      loadingEl.setAttribute('value', `${loadingAmount}%`);
      loadingEl.setAttribute('align', 'center');
      loadingEl.object3D.translateY(0.5);
      loadingEl.setAttribute('visible', true);
    }

    function hideLoadingElement() {
      loadingEl.setAttribute('visible', false);
    }

    function updateLoadingProgress() {
      loadingEl.setAttribute('value', `${loadingAmount}%`);
    }

    //Gift
    function showGiftModel() {
      giftElement.object3D.visible = true;
      giftElement.setAttribute(
        'animation-timeline',
        'timeline: #gift-animation-timeline; loop:false;'
      );
      giftElement.addEventListener('animationtimelinecomplete', function () {
        hideGiftModel();
        playConfettiSound();

        startParticles();
        showCatModel();
        showHappyBirthdayText();
        showBirthdayVideo();
        tuneDownBackgroundMusic();
      });
    }

    function hideGiftModel() {
      giftElement.setAttribute('animation-mixer', 'loop: pingpong');
      giftElement.setAttribute(
        'animation__opacity',
        'property: model-opacity; to: 0; dur: 500; delay: 500'
      );
      giftElement.setAttribute(
        'animation__scale',
        'property: scale; to: 1 1 1; dur: 500;'
      );
    }

    //Cat
    function showCatModel() {
      catElement.object3D.visible = true;
      catElement.setAttribute(
        'animation',
        'property: scale; to: 0.1 0.1 0.1; dur: 500; delay: 500'
      );
    }

    //Particles
    function startParticles() {
      const particles = document.getElementsByClassName('particles');
      for (const p of particles) {
        setTimeout(function () {
          p.components['particle-system'].startParticles();
        }, 200);
        setTimeout(function () {
          p.components['particle-system'].stopParticles();
        }, 800);
      }
    }

    //Text
    function showBirthdayText() {
      const text01 = document.getElementById('text-01');
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
      }, 750);
    }

    //Birthday Video
    function showBirthdayVideo() {
      setTimeout(function () {
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
        
      }, 6000);
    }

    function hideBirthdayVideo() {
      videoElement.setAttribute(
        'animation',
        'property: scale; to: 0 0 0; dur: 500;'
      );
    }

    //Birthday Music
    function startBirthdayMusic() {
      const musicAsset = document.getElementById(
        'background-music-audio-asset'
      );
      musicAsset.currentTime = 0;
      musicAsset.volume = 0;
      musicAsset.play();

      let vol = 0;
      let interval = 200;

      var fadeInMusic = setInterval(function () {
        if (vol < 1) {
          vol += 0.05;
          if (vol > 1) {
            vol = 1;
          }
          musicAsset.volume = vol;
        } else {
          clearInterval(fadeInMusic);
        }
      }, interval);
    }

    function tuneDownBirthdayMusic() {
      const musicAsset = document.getElementById(
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
      }, interval);
    }

    //Audio
    function playPopAudio() {
      const audioAsset = document.getElementById('pop-sound-audio-asset');
      audioAsset.currentTime = 0;
      audioAsset.volume = 1;
      audioAsset.play();
    }

    function playConfettiAudio() {
      setTimeout(function () {
        const audioAsset = document.getElementById(
          'confetti-sound-audio-asset'
        );
        audioAsset.currentTime = 0;
        audioAsset.volume = 1;
        audioAsset.play();
      }, 250);
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