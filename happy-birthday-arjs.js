

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
    const loadingEl = document.getElementById('loading-text');
    const giftEl = document.getElementById('gift-model');
    const catEl = document.getElementById('cat-model');
    const videoEl = document.getElementById('birthday-video');

    //Loading Progress
    let loadingAmount = 0;

    //Load Assets
    let assets = [];

    loadAssets();

    function loadAssets() {
      addVideoAssets(); 
      addAudioAssets();
      addModelAssets();
  
      loadVideoAssets();
      loadAudioAssets();
      loadModelAssets();
    }

    //Listen to Button Click
    const button = document.getElementById('start-button');
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
        } else {
          if (!didAssetsLoad) {
            showLoadingElement();
          }
        }
      }
    });

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
          hideLoadingElement();
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
        didExperienceStart = true;
        hideLoadingElement();
        showGiftModel();
        playPopAudio();
        startBirthdayMusic();
      }
    }

    //Loading
    function showLoadingElement() {
      loadingEl.setAttribute('color', 'white');
      loadingEl.setAttribute('value', `${(loadingAmount * 100).toFixed()}%`);
      loadingEl.setAttribute('align', 'center');
      loadingEl.object3D.translateY(0.5);
      loadingEl.setAttribute('visible', true);
    }

    function hideLoadingElement() {
      loadingEl.setAttribute('visible', false);
    }

    function updateLoadingProgress() {
      loadingEl.setAttribute('value', `${(loadingAmount * 100).toFixed()}%`);
    }

    //Custom Experience
    //Gift
    function showGiftModel() {
      giftEl.object3D.visible = true;
      giftEl.setAttribute(
        'animation-timeline',
        'timeline: #gift-animation-timeline; loop:false;'
      );
      giftEl.addEventListener('animationtimelinecomplete', function () {
        hideGiftModel();
        playConfettiAudio();

        startParticles();
        showCatModel();
        showBirthdayText();
        showBirthdayVideo();
        //tuneDownBirthdayMusic();
      });
    }

    function hideGiftModel() {
      giftEl.setAttribute('animation-mixer', 'loop: pingpong');
      giftEl.setAttribute(
        'animation__opacity',
        'property: model-opacity; to: 0; dur: 500; delay: 500'
      );
      giftEl.setAttribute(
        'animation__scale',
        'property: scale; to: 1 1 1; dur: 500;'
      );
      setTimeout(function() {
        giftEl.parentNode.removeChild(giftEl);
      }, 1000)
    }

    //Cat
    function showCatModel() {
      catEl.object3D.visible = true;
      catEl.setAttribute(
        'animation',
        'property: scale; to: 0.1 0.1 0.1; dur: 500; delay: 500'
      );
    }

    //Particles
    function startParticles() {
      const particles = document.getElementsByClassName('particles');
      let interval = 0;
      for (const p of particles) {
        
        setTimeout(function () {
          p.components['particle-system'].startParticles();
        }, 200 + interval);
        setTimeout(function () {
          p.components['particle-system'].stopParticles();
        }, 800 + interval);
        setTimeout(function() {
          p.parentNode.removeChild(p);
        }, 3000 + interval);
        interval += 100;
      }
    }

    //Text
    function showBirthdayText() {
      setTimeout(function() {
        const text01 = document.getElementById('text-01');
        const text02 = document.getElementById('text-02');
        const text03 = document.getElementById('text-03');
        const text04 = document.getElementById('text-04');
  
        text01.setAttribute('visible', true);
        text01.setAttribute(
          'animation-timeline',
          'timeline: #text-01-animation-timeline; loop:false;'
        );
        setTimeout(function() {
          text01.parentNode.removeChild(text01);
        }, 5000)
  
        setTimeout(function () {
          text02.setAttribute('visible', true);
          text02.setAttribute(
            'animation-timeline',
            'timeline: #text-02-animation-timeline; loop:false;'
          );
          setTimeout(function() {
            text02.parentNode.removeChild(text02);
          }, 5000)
        }, 250);
  
        setTimeout(function () {
          text03.setAttribute('visible', true);
          text03.setAttribute(
            'animation-timeline',
            'timeline: #text-03-animation-timeline; loop:false;'
          );
          setTimeout(function() {
            text03.parentNode.removeChild(text03);
          }, 5000)
        }, 500);
  
        setTimeout(function () {
          text04.setAttribute('visible', true);
          text04.setAttribute(
            'animation-timeline',
            'timeline: #text-04-animation-timeline; loop:false;'
          );
          setTimeout(function() {
            text04.parentNode.removeChild(text04);
          }, 5000)
        }, 750);
      }, 2000);
    }

    //Birthday Video
    function showBirthdayVideo() {
      setTimeout(function () {
        videoEl.object3D.visible = true;
        const videoAsset = document.getElementById('birthday-video-asset');
        videoAsset.play();
        videoAsset.muted = false;
        videoAsset.volume = 1;
        videoAsset.loop = false;
        videoAsset.addEventListener('ended', function() {
          hideBirthdayVideo();
          turnUpBackgroundMusic();
        })

        tuneDownBackgroundMusic();
        videoEl.setAttribute(
          'animation',
          'property: scale; to: 2 2 2; dur: 500;'
        );
      }, 8000);
    }

    function hideBirthdayVideo() {
      videoEl.setAttribute(
        'animation',
        'property: scale; to: 0 0 0; dur: 500;'
      );
    }

    //Birthday Music
    function startBirthdayMusic() {
      const musicAsset = document.getElementById(
        'background-music-audio-asset-high'
      );
      musicAsset.volume = 1;
      musicAsset.muted = false;
      musicAsset.play();
    }

    function tuneDownBackgroundMusic() {
      const musicAssetHigh = document.getElementById(
        'background-music-audio-asset-high'
      );
      musicAssetHigh.pause();

      const musicAssetLow = document.getElementById(
        'background-music-audio-asset-low'
      );
      musicAssetLow.volume = 1;
      musicAssetLow.muted = false;
      musicAssetLow.currentTime = musicAssetHigh.currentTime;
      musicAssetLow.play();
    }

    function turnUpBackgroundMusic() {
      const musicAssetLow = document.getElementById(
        'background-music-audio-asset-low'
      );
      musicAssetLow.pause();

      const musicAssetHigh = document.getElementById(
        'background-music-audio-asset-high'
      );
      musicAssetHigh.volume = 1;
      musicAssetHigh.muted = false;
      musicAssetHigh.currentTime = musicAssetLow.currentTime;
      musicAssetHigh.play();
    }

    //Audio
    function playPopAudio() {
      const audioAsset = document.getElementById('pop-sound-audio-asset');
      audioAsset.currentTime = 0;
      audioAsset.muted = false;
      audioAsset.volume = 1;
      audioAsset.play();
    }

    function playConfettiAudio() {
      setTimeout(function () {
        const audioAsset = document.getElementById(
          'confetti-sound-audio-asset'
        );
        audioAsset.currentTime = 0;
        audioAsset.muted = false;
        audioAsset.volume = 1;
        audioAsset.play();
      }, 250);
    }
    //End Custom


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
  }
});