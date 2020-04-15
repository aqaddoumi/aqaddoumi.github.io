//Load AFrame

//Change Logo
//Change Loading Image
//Change Colors
//Load Assets
//Load Experience
//Animate Experience
//Fix Loading Error
//Upload to Hosting

/*const onxrloaded = () => {
  XR8.addCameraPipelineModules([
    XR8.GlTextureRenderer.pipelineModule(),
    XRExtras.AlmostThere.pipelineModule(),
    XRExtras.FullWindowCanvas.pipelineModule(),
    XRExtras.Loading.pipelineModule(),
    XRExtras.RuntimeError.pipelineModule(),
  ]);

  XR8.run({ canvas: document.getElementById('camerafeed') });
};

const load = () => {
  XRExtras.Loading.showLoading({ onxrloaded });
};

window.onload = () => {
  window.XRExtras ? load() : window.addEventListener('xrextrasloaded', load);
};*/

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
const xrScene = `
<a-scene xrweb xrextras-tap-recenter xrextras-almost-there xrextras-loading xrextras-runtime-error
    xrextras-gesture-detector>
  <a-camera position="0 3 3"></a-camera>
  <a-box position="0 0.5 -1" material="color: #7611B6;" shadow xrextras-one-finger-rotate></a-box>
  <a-box scale="100 2 100" position="0 -1 0" material="shader: shadow" shadow></a-box>
</a-scene>
`;

window.XRExtras.AFrame.loadAFrameForXr({
  version: 'latest',
}).then(() => document.body.insertAdjacentHTML('beforeend', xrScene));
