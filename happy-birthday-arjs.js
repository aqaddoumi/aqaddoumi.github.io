

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
    console.log('init');
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
          showLoadingElement();
        }
      }
    });

    //Check if all Assets are loaded
    function areAllAssetsAreLoaded() {
      console.log('assets');
      let count = 0;
      for (let i = 0; i < assets.length; i++) {
        if (assets[i].isLoaded) {
          count++;
        }
      }
      if (count === assets.length) {
        console.log('loaded');
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
        //alert('start experience');
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
        tuneDownBirthdayMusic();
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
      }, 2000);
    }

    //Birthday Video
    function showBirthdayVideo() {
      console.log('show video');
      setTimeout(function () {
        videoElement.object3D.visible = true;
        const videoAsset = document.getElementById('birthday-video-asset');
        videoAsset.play();
        videoAsset.muted = false;
        videoAsset.volume = 1;
        videoAsset.loop = false;
        videoAsset.addEventListener('ended', function() {
          hideBirthdayVideo();
        })

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
      console.log('video');
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
      console.log('audio');
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


/*



/*
    //Get Element and scene
    const el = this.el;
    const scene = this.el.sceneEl;

    //Variables to keep track of experience and when to start properly
    let didUserTap = false;
    let didAssetsLoad = false;
    let didFindMarker = false;
    let didExperienceStart = false;

    //Loading Progress
    let loadingAmount = 0;

    //Elements
    const loadingEl = document.getElementById('loading-text');
    //const giftEl = document.getElementById('gift-model');
    //const catEl = document.getElementById('cat-model');
    //const videoEl = document.getElementById('birthday-video');

    //Load Assets
    let assets = [];

    initializeLoadingElement();

    function initializeLoadingElement() {
      loadingEl.setAttribute('align', 'center');
      loadingEl.setAttribute('color', 'red');
      loadingEl.setAttribute('postion', '0 0.5 0');
      loadingEl.setAttribute('value', '0%');
      loadingEl.setAttribute('scale', '2 2 2');
    }

    //Listen to Button Click
    const button = document.getElementById('start-button');
    button.addEventListener('click', function() {
      if (!didUserTap) {
        didUserTap = true;
        //hideInterface();
        //showGiftModel();
        //activateMedia();
          
        if (didAssetsLoad && didFindMarker && !didExperienceStart) {
          //startExperience();
        }
      }
    })

    function hideInterface() {
      const userInterface = document.getElementById('interface-container');
      userInterface.style.display = 'none';
    }

    //Listen to Marker Found Event
    el.addEventListener('markerFound', (e) => {
      if (!didFindMarker) {
        didFindMarker = true;
        if (didUserTap && didAssetsLoad && !didExperienceStart) {
          startExperience();
        } else {
          showLoadingElement();
        }
      }
    });

    //Loading
    function showLoadingElement() {
      loadingEl.setAttribute('color', 'green');
      //loadingEl.setAttribute('value', `${loadingAmount}%`);
      //loadingEl.setAttribute('align', 'center');
      //loadingEl.object3D.translateY(0.5);
      //loadingEl.setAttribute('visible', true);
    }

    //Start Experience
    function startExperience() {
      if (!didExperienceStart) {
        //alert('start experience');
        didExperienceStart = true;
        //hideLoadingElement();
        //showGiftModel();
        //playPopSound();
        //startBackgroundMusic();
      }
    }
  }*/
/*AFRAME.registerComponent('happy-birthday-arjs', {
  init: function () {

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

    //Audio
    function playPopAudio() {
      const audioAsset = document.getElementById('pop-sound-audio-asset');
      audioAsset.currentTime = 0;
      audioAsset.volume = 1;
      audioAsset.play();
    }
  }
});*/


/*
<!doctype HTML>
<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  </head>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <script src="https://unpkg.com/aframe-animation-timeline-component@2.0.0/dist/aframe-animation-timeline-component.min.js"></script>
  <script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
  <script src="happy-birthday-arjs.js"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
  <link rel="stylesheet" type="text/css" href="./styles.css" />
    
  <body style='margin : 0px; overflow: hidden;'>    
    <a-scene happy-birthday-arjs embedded arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;" renderer="logarithmicDepthBuffer: true; antialias: true; colorManagement: true; sortObjects: true;" vr-mode-ui="enabled: false;">
      <a-marker id="marker"  emitevents="true" type='barcode' value='5'>
        <a-text id="loading-text"></a-text>
        <a-box color="red"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </body>
</html>
*/


/*
    const assetsData = [

      {
        name: 'birthday-video-asset',
        //url: './assets/videos/birthday-video.mp4',
        url: 'https://admin.talkar.app/uploads/talk_video_mp4_cba53f5b97.mp4',
        type: 'video'
      }
      {
        name: 'birthday-audio-asset',
        url: './assets/audios/background-music.mp3',
        type: 'audio'
      },
      {
        name: 'pop-audio-asset',
        url: './assets/audios/pop-sound.mp3',
        type: 'audio'
      },
      {
        name: 'confetti-audio-asset',
        url: './assets/audios/confetti-sound.wav',
        type: 'audio'
      }
            {
        name: 'gift-model-asset',
        url: './assets/models/gift/scene.gltf',
        type: 'model'
      },
      {
        name: 'cat-model-asset',
        url: './assets/models/cat/scene.gltf',
        type: 'model'
      }

    ]

      let loadingAmount = 0;

      let modelLoader = new THREE.GLTFLoader();
  
      let assets = {};
      let numberOfLoadedAssets = 0;
  
      let elements = {};
      let numberOfInitializedElements = 0;
  
      let didAssetsLoad = false;
      let didElementsInitialize = false;
      let didUserTap = false;
      let didExperienceStart = false;
  
      initializeAssets();
  
      function initializeAssets() {
        for (const a of assetsData) {
          a.isLoaded = false;
          if (a.type == 'model') {
            loadModelAsset(a);
          } else if (a.type == 'audio') {
            loadAudioAsset(a);
          } else if (a.type == 'video') {
            loadVideoAsset(a);
          } 
        }
      }
  
      function loadVideoAsset(assetData) {
        console.log('video');
        const videoAsset = document.createElement('video');
        videoAsset.setAttribute('id', assetData.name);
        videoAsset.setAttribute('crossorigin', 'anonymous');
        videoAsset.setAttribute('src', assetData.url);
        videoAsset.setAttribute('playsinline', '');
        document.body.appendChild(videoAsset);
        videoAsset.oncanplaythrough = function () {
          if (!assetData.isLoaded) {
            loadAsset(assetData, videoAsset);
          }
        };
        if (!assetData.isLoaded) {
          if (videoAsset.readyState > 3) {
            loadAsset(assetData, videoAsset);
          }
        }
      }
  
      function loadAudioAsset(assetData) {
        console.log('audio');
        const audioAsset = document.createElement('audio');
        audioAsset.setAttribute('id', assetData.name);
        audioAsset.setAttribute('crossorigin', 'anonymous');
        audioAsset.setAttribute('src', assetData.url);
        document.body.appendChild(audioAsset);
        audioAsset.oncanplaythrough = function () {
          if (!assetData.isLoaded) {
            loadAsset(assetData, audioAsset);
          }
        };
        if (!assetData.isLoaded) {
          if (audioAsset.readyState > 3) {
            loadAsset(assetData, audioAsset);
          }
        }
      }
  
      function loadModelAsset(assetData) {
        console.log('model');
        modelLoader.load(assetData.url, function (modelAsset) {
          if (assetData.isLoaded) {
            loadAsset(assetData, modelAsset);
          }
        });
      }
  
      function loadAsset(assetData, asset) {
        console.log("AAAAAAA");
        assetData.isLoaded = true;
        assetData.asset = asset;
        numberOfLoadedAssets++;
        onAssetLoaded();
      }
  
      function onAssetLoaded() {
        console.log('ASSET');
        if (!didAssetsLoad) {
          if (numberOfLoadedAssets === assetsData.length) {
            didAssetsLoad = true;
            console.log('LOADED');
            //loadingAmount = 100;
            //loadingTextEl.setAttribute('value', `${loadingAmount}%`);
            //initializeElements();
          } else {
            //loadingAmount = (numberOfLoadedAssets / assetsData.length) * 100;
            //loadingTextEl.setAttribute('value', `${loadingAmount}%`);
          }
        }
      }*/