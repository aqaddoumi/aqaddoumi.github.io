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
    //const catEl = document.getElementById('cat-model');
    //const videoEl = document.getElementById('birthday-video');

    //Loading Progress
    let loadingAmount = 0;

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
        const box = document.getElementById('box');
        box.setAttribute('visible', true);

        didExperienceStart = true;
        hideLoadingElement();
        showGiftModel();
        //playPopSound();
        //startBackgroundMusic();
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
        //hideGiftModel();
        //playConfettiSound();

        //startParticles();
        //showCatModel();
        //showHappyBirthdayText();
        //showBirthdayVideo();
        //tuneDownBackgroundMusic();
      });
    }
  }
});