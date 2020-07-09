AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {
    const scene = this.el.sceneEl;
    const element = this.el;
    const data = this.data;

    var didUserTap = false;
    var didAssetsLoad = false;
    var didExperienceStart = false;

    let assets = [];

    addVideoAssets();
    addAudioAssets();
    addModelAssets();

    loadVideoAssets();
    loadAudioAssets();
    loadModelAssets();

    const giftElement = document.getElementById('gift-model');
    const catElement = document.getElementById('cat-model');
    const videoElement = document.getElementById('birthday-video');
    const musicElement = document.getElementById('background-music');

    const ground = document.getElementById('ground');
    ground.addEventListener('click', function (e) {
      if (!didUserTap) {
        didUserTap = true;

        const touchPoint = event.detail.intersection.point;
        const container = document.getElementById('container');
        container.setAttribute('position', touchPoint);

        activateMedia();

        if (didAssetsLoad) {
          if (!didExperienceStart) {
            startExperience();
          }
        }
      }
    });

    function startExperience() {
      didExperienceStart = true;
      showGiftModel();
      playPopSound();
      startBackgroundMusic();
    }

    function areAllAssetsAreLoaded() {
      let length = assets.length;
      let count = 0;
      for (let i = 0; i < assets.length; i++) {
        if (assets[i].isLoaded) {
          count++;
        }
      }

      if (count === length) {
        if (!didAssetsLoad) {
          didAssetsLoad = true;

          if (didUserTap) {
            if (!didExperienceStart) {
              startExperience();
            }
          }
        }
      }
    }

    function videoAssetLoaded(id) {
      let video = assets.find((v) => v.type === 'video' && v.id === id);
      video.isLoaded = true;
      areAllAssetsAreLoaded();
    }

    function audioAssetLoaded(id) {
      let audio = assets.find((v) => v.type === 'audio' && v.id === id);
      audio.isLoaded = true;
      areAllAssetsAreLoaded();
    }

    function modelAssetLoaded(id) {
      let model = assets.find((v) => v.type === 'model' && v.id === id);
      model.isLoaded = true;
      areAllAssetsAreLoaded();
    }

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

    function loadAudioAssets() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'audio') {
          console.log(a);
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

    function activateMedia() {
      for (let i = 0; i < assets.length; i++) {
        const a = assets[i];
        if (a.type === 'video' || a.type === 'audio') {
          a.asset.play();
          a.asset.pause();
        }
      }
    }

    function showGiftModel() {
      giftElement.object3D.visible = true;
      /*giftElement.setAttribute(
        'animation-timeline',
        'timeline: #gift-animation-timeline; loop:false'
      );*/
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

    function showCatModel() {
      catElement.object3D.visible = true;
      catElement.setAttribute(
        'animation',
        'property: scale; to: 0.1 0.1 0.1; dur: 500; delay: 500'
      );
    }

    function hideCatModel() {}

    function showBirthdayVideo() {
      setTimeout(function () {
        videoElement.object3D.visible = true;
        const videoAsset = document.getElementById('birthday-video-asset');
        videoAsset.play();
        videoAsset.muted = false;
        videoAsset.volume = 1;
        videoAsset.loop = false;
        videoElement.setAttribute(
          'animation',
          'property: scale; to: 2 2 2; dur: 500;'
        );
      }, 6000);
    }

    function hideBirthdayVideo() {}

    function showHappyBirthdayText() {
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

    function startBackgroundMusic() {
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

    function playPopSound() {
      const musicAsset = document.getElementById('pop-sound-audio-asset');
      musicAsset.currentTime = 0;
      musicAsset.volume = 1;
      musicAsset.play();
    }

    function playConfettiSound() {
      setTimeout(function () {
        const musicAsset = document.getElementById(
          'confetti-sound-audio-asset'
        );
        musicAsset.currentTime = 0;
        musicAsset.volume = 1;
        musicAsset.play();
      }, 250);
    }

    function tuneDownBackgroundMusic() {
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
  },
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

//Gift Show

//XXX Loading
//XXX Video
//XXX Music
//XXX Models

//Play Music
//Turn Music Volume Down

//Particles
//Text

/*<a-entity
class="particles"
particle-system="size: 0.3; velocityValue: 0 35 0; maxParticleCount: 500; maxAge: 3; blending: 1; color: #38A7F8; texture: assets/images/confetti/confetti-02.png; enabled: false"
></a-entity>
<a-entity
class="particles"
particle-system="size: 0.3; velocityValue: 0 35 0; maxParticleCount: 500; maxAge: 3; blending: 1; color: #FF1614; texture: assets/images/confetti/confetti-03.png; enabled: false"
></a-entity>
<a-entity
class="particles"
particle-system="size: 0.3; velocityValue: 0 35 0; maxParticleCount: 500; maxAge: 3; blending: 1; color: #8A5EA8; texture: assets/images/confetti/confetti-04.png; enabled: false"
></a-entity>
<a-entity
class="particles"
particle-system="size: 0.3; velocityValue: 0 35 0; maxParticleCount: 500; maxAge: 3; blending: 1; color: #32B744; texture: assets/images/confetti/confetti-05.png; enabled: false"
></a-entity>*/
