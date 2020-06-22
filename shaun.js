AFRAME.registerComponent('gift', {
  init: function () {
    this.el.addEventListener('model-loaded', (e) => {
      console.log(this.el.components['gltf-model'].model.animations);
    });
  },
});
