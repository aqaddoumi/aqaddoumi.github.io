AFRAME.registerComponent('follow', {
  init: function () {
    const el = this.el;
    const box = document.createElement('a-box');
    box.setAttribute('position', '0 2 0');
    box.setAttribute('material', 'color', '#4CC3D9');
    el.appendChild(box);
  },
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
