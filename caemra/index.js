AFRAME.registerComponent('follow', {
  tick: function () {
    const el = this.el;
    const obj = el.object3D;

    const camera = document.getElementById('scene-camera').object3D;

    obj.rotation.y = Math.atan2(
      camera.position.x - obj.position.x,
      camera.position.z - obj.position.z
    );
  },
});
