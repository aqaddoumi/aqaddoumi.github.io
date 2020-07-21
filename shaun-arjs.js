AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {
    const scene = this.el.sceneEl;
    const element = this.el;
    const data = this.data;

    var didUserTap = false;
    var didAssetsLoad = false;
    var didExperienceStart = false;

    let loadingAmount = 0;

    let assets = [];

    initializeLoadingElement();

    addVideoAssets();
    addAudioAssets();
    addModelAssets();

    loadVideoAssets();
    loadAudioAssets();
    loadModelAssets();

    const loadingElement = document.createElement('a-text');
    const giftElement = document.getElementById('gift-model');
    const catElement = document.getElementById('cat-model');
    const videoElement = document.getElementById('birthday-video');

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

    function initializeLoadingElement() {
      loadingElement.setAttribute('color', 'white');
      loadingElement.setAttribute('value', `${loadingAmount}%`);
      loadingElement.setAttribute('align', 'center');
      loadingElement.object3D.translateY(0.5);
      scene.appendChild(loadingElement);
    }

    function startExperience() {
      didExperienceStart = true;
      hideLoadingElement();
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

    function showLoadingElement() {

    }

    function hideLoadingElement() {
      
    }

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


/*AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {
    assets = {
      giftModelAsset: {
        type: 'model',
        url: './assets/models/gift/scene.gltf'
      },
      catModelAsset: {
        type: 'model',
        url: './assets/models/cat/scene.gltf'
      },
      birthdayVideoAsset: {
        type: 'video',
        url: './assets/videos/birthday-video.mp4'
      },
      birthdayAudioAsset: {
        type: 'audio',
        url: './assets/audios/background-music.mp3'
      },
      popAudioAsset: {
        type: 'audio',
        url: './assets/audios/pop-sound.mp3'
      },
      confettiAudioAsset: {
        type: 'audio',
        url: './assets/audios/confetti-sound.wav'
      }
    }

    let numberOfTotalAssets = 0;
    let numberOfLoadedAssets = 0;

    var didUserTap = false;
    var didAssetsLoad = false;
    var didExperienceStart = false;

    const giftEl = document.getElementById('gift-model');
    const catEl = document.getElementById('cat-model');
    const videoEl = document.getElementById('birthday-video');

    let modelLoader = new THREE.GLTFLoader();

    initializeLoadingElement();
    loadAssets();

    function initializeLoadingElement() {
      //const loadingTextEl = document.createElement('a-text');

      //loadingTextEl.setAttribute('color', 'white');
      //loadingTextEl.setAttribute('value', `${loadingAmount}%`);
      //loadingTextEl.setAttribute('align', 'center');
      //loadingTextEl.object3D.translateY(0.5);
      //loadingEl.appendChild(loadingTextEl);
    }

    function loadAssets() {
      for (const [key, value] of Object.entries(assets)) {
        numberOfTotalAssets++;
        if (value.type == 'model') {
          loadModelAsset(key, value);
        } else if (value.type == 'video') {
          loadVideoAsset(key, value);
        } else if (value.type == 'audio') {
          loadAudioAsset(key, value);
        }
      }
    }

    function loadModelAsset(key, value) {
      assets[key].isLoaded = false;
      modelLoader.load(value.url, function (modelAsset) {
        if (!assets[key].isLoaded) {
          loadAsset(key, modelAsset);
        }
      });
    }

    function loadVideoAsset(key, value) {
      assets[key].isLoaded = false;
      const videoAsset = document.createElement('video');
      videoAsset.setAttribute('id', key);
      videoAsset.setAttribute('crossorigin', 'anonymous');
      videoAsset.setAttribute('src', value.url);
      videoAsset.setAttribute('playsinline', '');
      document.body.appendChild(videoAsset);
      videoAsset.oncanplaythrough = function () {
        if (!assets[key].isLoaded) {
          loadAsset(key, videoAsset);
        }
      };
      if (!assets[key].isLoaded) {
        if (videoAsset.readyState > 3) {
          loadAsset(key, videoAsset);
        }
      }
    }

    function loadAudioAsset(key, value) {
      assets[key].isLoaded = false;
      const audioAsset = document.createElement('audio');
      audioAsset.setAttribute('id', key);
      audioAsset.setAttribute('crossorigin', 'anonymous');
      audioAsset.setAttribute('src', value.url);
      document.body.appendChild(audioAsset);
      audioAsset.oncanplaythrough = function () {
        if (!assets[key].isLoaded) {
          loadAsset(key, audioAsset);
        }
      };
      if (!assets[key].isLoaded) {
        if (audioAsset.readyState > 3) {
          loadAsset(key, audioAsset);
        }
      }
    }

    function loadAsset(key, asset) {
      assets[key].isLoaded = true;
      assets[key].asset = asset;
      numberOfLoadedAssets++;
      onAssetLoaded();
    }

    function onAssetLoaded() {
      if (!didAssetsLoad) {
        if (numberOfLoadedAssets === numberOfTotalAssets) {
          didAssetsLoad = true;
          initializeExperience();
          //loadingAmount = 100;
          //loadingTextEl.setAttribute('value', `${loadingAmount}%`);
          //initializeElements();
        } else {
          console.log('A');
          //loadingAmount = (numberOfLoadedAssets / assetsData.length) * 100;
          //loadingTextEl.setAttribute('value', `${loadingAmount}%`);
        }
      }
    }

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

    function initializeExperience() {
      console.log('Initialize');
    }

    function initializeGiftElement() {

    }

    function initializeCatElement() {

    }

    function initializeVideoElement() {

    }

  }
});*/

/*<!DOCTYPE html>
<html>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"></script>
  <script src="https://unpkg.com/aframe-animation-timeline-component@2.0.0/dist/aframe-animation-timeline-component.min.js"></script>
  <script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
  <script src="https://rawgit.com/mayognaise/aframe-mouse-cursor-component/master/dist/aframe-mouse-cursor-component.min.js"></script>
  <script src="shaun-arjs.js"></script>
  <body>
    <a-scene
      happy-birthday-arjs
      id="happy-birthday-arjs-scene"
      cursor="rayOrigin: mouse"
      raycaster="objects: #ground"
    >
      <a-timeline id="gift-animation-timeline">
        <a-timeline-animation
          select="#gift-model"
          name="gift_01"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#gift-model"
          name="gift_02"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#gift-model"
          name="gift_03"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#gift-model"
          name="gift_04"
        ></a-timeline-animation>
      </a-timeline>

      <a-timeline id="text-01-animation-timeline">
        <a-timeline-animation
          select="#text-01"
          name="text_01_scale_up"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-01"
          name="text_01_still"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-01"
          name="text_01_scale_down"
        ></a-timeline-animation>
      </a-timeline>

      <a-timeline id="text-02-animation-timeline">
        <a-timeline-animation
          select="#text-02"
          name="text_02_scale_up"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-02"
          name="text_02_still"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-02"
          name="text_02_scale_down"
        ></a-timeline-animation>
      </a-timeline>

      <a-timeline id="text-03-animation-timeline">
        <a-timeline-animation
          select="#text-03"
          name="text_03_scale_up"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-03"
          name="text_03_still"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-03"
          name="text_03_scale_down"
        ></a-timeline-animation>
      </a-timeline>

      <a-timeline id="text-04-animation-timeline">
        <a-timeline-animation
          select="#text-04"
          name="text_04_scale_up"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-04"
          name="text_04_still"
        ></a-timeline-animation>
        <a-timeline-animation
          select="#text-04"
          name="text_04_scale_down"
        ></a-timeline-animation>
      </a-timeline>

      <a-assets timeout="10">
        <a-asset-item
          class="model"
          id="gift-asset"
          src="./assets/models/gift/scene.gltf"
        ></a-asset-item>
        <a-asset-item
          class="model"
          id="cat-asset"
          src="./assets/models/cat/scene.gltf"
        ></a-asset-item>
        <video
          id="birthday-video-asset"
          muted
          autoplay
          loop="true"
          src="./assets/videos/birthday-video.mp4"
        ></video>
        <audio
          id="background-music-audio-asset"
          src="./assets/audios/background-music.mp3"
        ></audio>
        <audio
          id="pop-sound-audio-asset"
          src="./assets/audios/pop-sound.mp3"
        ></audio>
        <audio
          id="confetti-sound-audio-asset"
          src="./assets/audios/confetti-sound.wav"
        ></audio>
      </a-assets>

      <a-box
        id="ground"
        scale="20 0.1 20"
        position="0 -2 0"
        color="#bdbdbd"
      ></a-box>

      <a-entity scale="0.1 0.1 0.1" id="container">
        <a-entity>
          <a-entity
            class="particles"
            particle-system="size: 0.3; velocityValue: 0 35 0; accelerationSpread: 2 0 2; blending: 1; color: #FEF000; texture: assets/images/confetti/confetti-01.png; enabled: false;"
          ></a-entity>
          <a-entity
            class="particles"
            particle-system="size: 0.3; velocityValue: 0 35 0; accelerationSpread: 2 0 2; blending: 1; color: #38A7F8; texture: assets/images/confetti/confetti-02.png; enabled: false;"
          ></a-entity>
          <a-entity
            class="particles"
            particle-system="size: 0.3; velocityValue: 0 35 0; accelerationSpread: 2 0 2; blending: 1; color: #FF1614; texture: assets/images/confetti/confetti-03.png; enabled: false;"
          ></a-entity>
          <a-entity
            class="particles"
            particle-system="size: 0.3; velocityValue: 0 35 0; accelerationSpread: 2 0 2; blending: 1; color: #8A5EA8; texture: assets/images/confetti/confetti-04.png; enabled: false;"
          ></a-entity>
          <a-entity
            class="particles"
            particle-system="size: 0.3; velocityValue: 0 35 0; accelerationSpread: 2 0 2; blending: 1; color: #32B744; texture: assets/images/confetti/confetti-05.png; enabled: false;"
          ></a-entity>
        </a-entity>

        <a-video
          id="birthday-video"
          position="0 30 0"
          width="7.2"
          height="12.8"
          scale="0 0 0"
          src="#birthday-video-asset"
          visible="false"
        ></a-video>

        <a-entity position="0 12 0">
          <a-entity
            visible="false"
            id="text-01"
            scale="0 0 0"
            text="align: center; value:Happy Birthday, ; color:#32B744; shader: msdf; font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/kalam/Kalam-Bold.json;"
            position="0 21 0"
            animation__text_01_scale_up="property: scale; from: 0 0 0; to: 100 100 100; dur: 500; autoplay: false; easing: easeInOutQuint"
            animation__text_01_still="property: scale; from: 100 100 100; to: 100 100 100; dur: 3000; autoplay: false; easing: easeInOutQuint"
            animation__text_01_scale_down="property: scale; from: 100 100 100; to: 0 0 0; dur: 500;  autoplay: false; easing: easeInOutQuint;"
          ></a-entity>
          <a-entity
            visible="false"
            id="text-02"
            scale="0 0 0"
            text="align: center; value:Lily!; color:#38A7F8; shader: msdf; font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/kalam/Kalam-Bold.json;"
            position="0 14 0"
            animation__text_02_scale_up="property: scale; from: 0 0 0; to: 100 100 100; dur: 500; autoplay: false; easing: easeInOutQuint"
            animation__text_02_still="property: scale; from: 100 100 100; to: 100 100 100; dur: 3000; autoplay: false; easing: easeInOutQuint"
            animation__text_02_scale_down="property: scale; from: 100 100 100; to: 0 0 0; dur: 500;  autoplay: false; easing: easeInOutQuint;"
          ></a-entity>
          <a-entity
            visible="false"
            id="text-03"
            scale="0 0 0"
            text="align: center; value:Love,; color:#FF1614; shader: msdf; font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/kalam/Kalam-Bold.json;"
            position="0 7 0"
            animation__text_03_scale_up="property: scale; from: 0 0 0; to: 100 100 100; dur: 500; autoplay: false; easing: easeInOutQuint"
            animation__text_03_still="property: scale; from: 100 100 100; to: 100 100 100; dur: 3000; autoplay: false; easing: easeInOutQuint"
            animation__text_03_scale_down="property: scale; from: 100 100 100; to: 0 0 0; dur: 500;  autoplay: false; easing: easeInOutQuint;"
          ></a-entity>
          <a-entity
            visible="false"
            id="text-04"
            scale="0 0 0"
            text="align: center; value:Shaun; color:#8A5EA8; shader: msdf; font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/kalam/Kalam-Bold.json;"
            position="0 0 0"
            animation__text_04_scale_up="property: scale; from: 0 0 0; to: 100 100 100; dur: 500; autoplay: false; easing: easeInOutQuint"
            animation__text_04_still="property: scale; from: 100 100 100; to: 100 100 100; dur: 3000; autoplay: false; easing: easeInOutQuint"
            animation__text_04_scale_down="property: scale; from: 100 100 100; to: 0 0 0; dur: 500;  autoplay: false; easing: easeInOutQuint;"
          ></a-entity>
        </a-entity>

        <a-gltf-model
          visible="false"
          src="#gift-asset"
          id="gift-model"
          model-opacity="1"
          scale="0 0 0"
          animation__gift_01="property: scale; from: 0 0 0; to: 1 1 1; dur: 500; autoplay: false; easing: easeInOutQuint"
          animation__gift_02="property: scale; from: 1 1 1; to: 1.2 0.6 1.2; dur: 500; autoplay: false; easing: easeInOutQuint;"
          animation__gift_03="property: scale; from: 1.2 0.6 1.2; to: 0.6 1.2 0.6; dur: 500; autoplay: false; easing: easeInOutQuint"
          animation__gift_04="property: scale; from: 0.6 1.2 0.6; to: 1 0.6 1; dur: 250; autoplay: false; easing: easeInOutQuint"
        ></a-gltf-model>

        <a-gltf-model
          visible="false"
          src="#cat-asset"
          id="cat-model"
          animation-mixer
          scale="0 0 0"
        ></a-gltf-model>
      </a-entity>

      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>*/