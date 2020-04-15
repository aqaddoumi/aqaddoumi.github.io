//XXX Load AFrame
//Add Component

//Change Logo
//Change Loading Image
//Change Colors
//Load Assets
//Load Experience
//Animate Experience
//Fix Loading Error
//Upload to Hosting

const xrScene = `
<a-scene xrweb xrextras-almost-there xrextras-loading xrextras-runtime-error tap-business-card>
  <a-camera position="0 0 0"></a-camera>
</a-scene>
`;

const tapBusinessCardComponent = {
  init: function () {
    const element = this.el;

    const box = document.createElement('a-box');
    box.setAttribute('position', '0 0 -5');
    box.setAttribute('material', 'color', '#7611B6');
    element.appendChild(box);
  },
};

window.XRExtras.AFrame.loadAFrameForXr({
  version: 'latest',
  components: { 'tap-business-card': tapBusinessCardComponent },
}).then(() => {
  document.body.insertAdjacentHTML('beforeend', xrScene);
});

/*<div id="interface-container">
  <div id="interface-text-container">
    <h1 id="interface-text">Tap anywhere to see the experience</h1>
  </div>
</div>

<a-scene tap-business-card="videoAsset: #talk-video-asset" xrextras-almost-there xrextras-loading xrextras-runtime-error xrweb>
  <a-assets>
    <audio id="pop-01-sound-asset" src="./assets/pop-01-sound.mp3" preload="auto"></audio>
    <audio id="pop-02-sound-asset" src="./assets/pop-02-sound.mp3" preload="auto"></audio>
    <audio id="whoosh-01-sound-asset" src="./assets/whoosh-01-sound.mp3" preload="auto"></audio>
    <img id="loading-texture-asset" src="./assets/loading-texture.png">
    <img id="grass-texture-asset" src="./assets/grass-texture.png">
    <img id="for-sale-texture-asset" src="./assets/for-sale-texture.png">
    <a-asset-item id="for-sale-model-asset" src="./assets/for-sale-model.glb"></a-asset-item>
    <video id="talk-video-asset" muted autoplay playsinline crossorigin="anonymous" src="./assets/talk-video.mp4"></video>
  </a-assets>

  <a-camera id="camera" position="0 0 0" raycaster="objects: .cantap" cursor="fuse: false; rayOrigin: mouse;"></a-camera>
  <a-box id="ground" class="cantap" scale="1000 2 1000" position="0 -1 0" material="shader: shadow; transparent: true; opacity: 0.4" shadow></a-box>

</a-scene>*/

/*const throwErrorComponent = {
  init: function () {
    // A pipeline module that throws an error after 300 frames -- illustrates the error
    // handinling in xrweb-runtime-error.
    const throwerrorPipelineModule = () => {
      let frame = 0;
      return {
        name: 'throwerror',
        onUpdate: () => {
          if (++frame > 300) {
            throw Error('Too many frames!');
          }
        },
      };
    };
    const load = () => {
      XR.addCameraPipelineModule(throwerrorPipelineModule());
    };
    window.XRExtras && window.XR
      ? load()
      : window.addEventListener('xrandextrasloaded', load);
  },
};*/

/*const xrScene = `
<a-scene xrweb xrextras-tap-recenter xrextras-almost-there xrextras-loading xrextras-runtime-error
    xrextras-gesture-detector throw-error>
  <a-camera position="0 3 3"></a-camera>
  <a-box position="0 0.5 -1" material="color: #7611B6;" shadow xrextras-one-finger-rotate></a-box>
  <a-box scale="100 2 100" position="0 -1 0" material="shader: shadow" shadow></a-box>
</a-scene>
      `;
const throwErrorComponent = {
  init: function () {
    // A pipeline module that throws an error after 300 frames -- illustrates the error
    // handinling in xrweb-runtime-error.
    const throwerrorPipelineModule = () => {
      let frame = 0;
      return {
        name: 'throwerror',
        //onUpdate: () => {
        //  if (++frame > 300) {
        //throw Error('Too many frames!');
        //  }
        //},
      };
    };
    const load = () => {
      //XR.addCameraPipelineModule(throwerrorPipelineModule());
    };
    window.XRExtras && window.XR
      ? load()
      : window.addEventListener('xrandextrasloaded', load);
  },
};
window.XRExtras.AFrame.loadAFrameForXr({
  version: 'latest',
  //components: { 'throw-error': throwErrorComponent },
}).then(() => document.body.insertAdjacentHTML('beforeend', xrScene));*/
