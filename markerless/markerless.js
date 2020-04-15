//XXX Load AFrame
//XXX Add Component
//XXX Change Colors
//XXX Fix Loading Error
//XXX Load Assets
//XXX Animate Experience

//Load Experience

//Change Logo
//Change Loading Image
//Upload to Hosting

const xrScene = `
<div id="interface-container">
  <div id="interface-text-container">
    <h1 id="interface-text">Tap anywhere to see the experience</h1>
  </div>
</div>
<a-scene tap-business-card="videoAsset: #talk-video-asset" xrweb xrextras-almost-there xrextras-loading xrextras-runtime-error>
  <a-assets>
    <audio id="pop-01-sound-asset" src="assets/pop-01-sound.mp3" preload="auto"></audio>
    <audio id="pop-02-sound-asset" src="assets/pop-02-sound.mp3" preload="auto"></audio>
    <audio id="whoosh-01-sound-asset" src="assets/whoosh-01-sound.mp3" preload="auto"></audio>
    <img id="loading-texture-asset" src="assets/loading-texture.png">
    <img id="grass-texture-asset" src="assets/grass-texture.png">
    <img id="for-sale-texture-asset" src="assets/for-sale-texture.png">
    <a-asset-item id="for-sale-model-asset" src="assets/for-sale-model.glb"></a-asset-item>
    <video id="talk-video-asset" muted autoplay playsinline crossorigin="anonymous" src="assets/talk-video.mp4"></video>
  </a-assets>
  <a-camera id="camera" position="0 0 0" raycaster="objects: .cantap" cursor="fuse: false; rayOrigin: mouse;"></a-camera>
  <a-box id="ground" class="cantap" scale="1000 2 1000" position="0 -1 0" material="shader: shadow; transparent: true; opacity: 0.4" shadow></a-box>
</a-scene>
`;

const tapBusinessCardComponent = {
  schema: {
    videoAsset: { type: 'string' },
  },
  init: function () {
    //Assign Element & Data
    const element = this.el;
    const data = this.data;

    //Variables
    var hasUserTapped = false;
    var hasVideoLoaded = false;
    var isExperiencePlaying = false;

    //Video Asset
    const videoAsset = document.querySelector(data.videoAsset);

    if (videoAsset.readyState > 3) {
      startExperience();
    }

    videoAsset.oncanplaythrough = function () {
      startExperience();
    };

    /*videoAsset.onended = function () {
      finishExperience();
    };*/

    //Assets
    const loadingTexAsset = document.getElementById('loading-texture-asset');
    const grassTexAsset = document.getElementById('grass-texture-asset');
    const forSaleTexAsset = document.getElementById('for-sale-texture-asset');

    //const pop01SoundAsset = document.getElementById('pop-01-sound-asset');
    //const pop02SoundAsset = document.getElementById('pop-02-sound-asset');
    //const whoosh01SoundAsset = document.getElementById('whoosh-01-sound-asset');

    //Elements
    const parentEl = document.createElement('a-entity');
    const videoEl = document.createElement('a-plane');
    const loadingEl = document.createElement('a-plane');
    const grassEl = document.createElement('a-circle');
    const signEl = document.createElement('a-entity');
    const signModelEl = document.createElement('a-entity');
    const signTexEl = document.createElement('a-plane');

    //Initialize Elements
    createParentElement();
    createVideoElement();
    createLoadingElement();
    createGrassElement();
    createSignElement();

    function createParentElement() {
      element.appendChild(parentEl);
    }

    function createVideoElement() {
      videoEl.object3D.visible = false;
      videoEl.object3D.translateZ(0.35);
      videoEl.setAttribute('material', 'src', videoAsset);
      videoEl.setAttribute('material', {
        shader: 'chromakey',
        src: '#talk-video-asset',
        color: '0.1 0.9 0.2',
      });

      const width = 1.5;
      const height = (720 / 404) * width;
      videoEl.setAttribute('width', width);
      videoEl.setAttribute('height', height);
      videoEl.object3D.translateY(height / 2);

      parentEl.appendChild(videoEl);
    }

    function createLoadingElement() {
      loadingEl.object3D.visible = false;
      loadingEl.setAttribute('material', 'src', loadingTexAsset);
      loadingEl.setAttribute('material', 'transparent', true);
      loadingEl.object3D.translateY(0.5);
      loadingEl.setAttribute(
        'animation',
        'property: rotation; to: 0 0 -360; dur: 1000; loop: true; easing: linear'
      );
      parentEl.appendChild(loadingEl);
    }

    function createGrassElement() {
      grassEl.object3D.visible = false;
      grassEl.setAttribute('rotation', '-90 0 0');
      grassEl.setAttribute('material', 'src', grassTexAsset);
      parentEl.appendChild(grassEl);
    }

    function createSignElement() {
      parentEl.appendChild(signEl);
      createSignModel();
      createSignImage();
    }

    function createSignModel() {
      signModelEl.object3D.visible = false;
      signModelEl.setAttribute('gltf-model', '#for-sale-model-asset');
      signModelEl.setAttribute('position', '0.5 0 -0.5');
      signModelEl.setAttribute('rotation', '0 60 0');
      signEl.appendChild(signModelEl);
    }

    function createSignImage() {
      signTexEl.object3D.visible = false;
      signTexEl.setAttribute('material', 'src', forSaleTexAsset);
      signTexEl.setAttribute('scale', '90 70 1');
      signTexEl.setAttribute('position', '0 125 65');
      signTexEl.setAttribute('rotation', '0 -90 0');
      signModelEl.appendChild(signTexEl);
    }

    const ground = document.getElementById('ground');
    ground.addEventListener('click', (event) => {
      const touchPoint = event.detail.intersection.point;
      parentEl.setAttribute('position', touchPoint);

      if (!hasUserTapped) {
        hasUserTapped = true;
        hideInterface();

        videoAsset.play();
        videoAsset.pause();

        /*pop01SoundAsset.play();
        pop01SoundAsset.pause();

        pop02SoundAsset.play();
        pop02SoundAsset.pause();

        whoosh01SoundAsset.play();
        whoosh01SoundAsset.pause();*/

        if (!hasVideoLoaded) {
          showLoadingElement();
        } else {
          if (!isExperiencePlaying) {
            isExperiencePlaying = true;
            showGrassElement();
            showSignElement();
            setTimeout(function () {
              playVideo();
              showVideoElement();
            }, 1000);
          }
        }
      }
    });

    function hideInterface() {
      const userInterface = document.getElementById('interface-container');
      userInterface.style.display = 'none';
    }

    function showLoadingElement() {
      loadingEl.object3D.visible = true;
    }

    function hideLoadingElement() {
      loadingEl.object3D.visible = false;
    }

    function showVideoElement() {
      setTimeout(function () {
        videoEl.object3D.visible = true;
        videoAsset.muted = false;
      }, 100);
    }

    function showGrassElement() {
      grassEl.object3D.visible = true;
      grassEl.setAttribute('scale', '0 0 0');
      grassEl.setAttribute(
        'animation',
        'property: scale; to: 1 1 1; dur: 1000; easing: easeOutElastic; delay: 50;'
      );
      //pop01SoundAsset.currentTime = 0;
      //pop01SoundAsset.play();
    }

    function showSignElement() {
      signModelEl.object3D.visible = true;
      signTexEl.object3D.visible = true;
      signModelEl.setAttribute('scale', '0 0 0');
      signModelEl.setAttribute(
        'animation',
        'property: scale; to: 0.01 0.01 0.01; dur: 1500; easing: easeOutElastic; delay: 500;'
      );

      /*setTimeout(function () {
        pop02SoundAsset.currentTime = 0;
        pop02SoundAsset.play();
      }, 500);*/
    }

    function playVideo() {
      videoAsset.currentTime = 0;
      videoAsset.loop = false;
      videoAsset.play();
    }

    function startExperience() {
      hasVideoLoaded = true;

      if (hasUserTapped) {
        if (!isExperiencePlaying) {
          isExperiencePlaying = true;
          hideLoadingElement();
          showGrassElement();
          showSignElement();
          setTimeout(function () {
            playVideo();
            showVideoElement();
          }, 1000);
        }
      }
    }

    function finishExperience() {
      signModelEl.setAttribute(
        'animation',
        'property: scale; to: 0 0 0; dur: 1000; easing: easeInElastic; delay: 0'
      );
      grassEl.setAttribute(
        'animation',
        'property: scale; to: 0 0 0; dur: 1000; easing: easeInElastic; delay: 0'
      );

      //whoosh01SoundAsset.currentTime = 0;
      //whoosh01SoundAsset.play();

      setTimeout(function () {
        hasUserTapped = false;
        isExperiencePlaying = false;
        videoEl.object3D.visible = false;
        signModelEl.object3D.visible = false;
        signTexEl.object3D.visible = false;
        grassEl.object3D.visible = false;
      }, 1000);
    }
  },
};

window.XRExtras.AFrame.loadAFrameForXr({
  version: 'latest',
  components: { 'tap-business-card': tapBusinessCardComponent },
}).then(() => {
  document.body.insertAdjacentHTML('beforeend', xrScene);
});
