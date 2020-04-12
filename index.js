AFRAME.registerComponent('tap-business-card', {});

/*schema: {
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

    videoAsset.oncanplay = function () {
      startExperience();
    };

    videoAsset.oncanplaythrough = function () {
      startExperience();
    };

    //Assets
    const loadingTexAsset = document.getElementById('loading-texture-asset');
    const grassTexAsset = document.getElementById('grass-texture-asset');
    const forSaleTexAsset = document.getElementById('for-sale-texture-asset');

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
      videoEl.setAttribute('material', 'src', videoAsset);
      videoEl.setAttribute('material', {
        shader: 'chromakey',
        src: '#talk-video-asset',
        color: '0.1 0.9 0.2',
      });

      const width = 1;
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
      grassEl.setAttribute('scale', '0 0 0');
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
      signModelEl.setAttribute('position', '0.3 0.2 0');
      signModelEl.setAttribute('scale', '0.005 0.005 0.005');
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

        if (!hasVideoLoaded) {
          showLoadingElement();
        } else {
          if (!isExperiencePlaying) {
            isExperiencePlaying = true;
            showGrassElement();
            showSignElement();
            playVideo();
            showVideoElement();
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
        'property: scale; to: 1 1 1; dur: 1000; easing: easeOutElastic;'
      );
    }

    function showSignElement() {
      signModelEl.object3D.visible = true;
      signTexEl.object3D.visible = true;
      signModelEl.setAttribute('scale', '0 0 0');
      signModelEl.setAttribute('rotation', '-90 60 0');
      signModelEl.setAttribute(
        'animation',
        'property: scale; to: 0.005 0.005 0.005; dur: 1000; easing: easeOutElastic; delay: 750;'
      );
      signModelEl.setAttribute(
        'animation__rot',
        'property: rotation; to: 0 60 0; dur: 1000; easing: easeOutElastic; delay: 750;'
      );
    }

    function playVideo() {
      videoAsset.currentTime = 0;
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
          playVideo();
          showVideoElement();
        }
      }
    }
  },*/
