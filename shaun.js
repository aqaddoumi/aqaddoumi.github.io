AFRAME.registerComponent('gift', {
  init: function () {
    console.log('A');
    this.el.addEventListener('model-loaded', (e) => {
      console.log(this.el.components['gltf-model'].model.animations);
    });
  },
});
