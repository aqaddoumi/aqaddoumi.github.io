AFRAME.registerComponent('tap-business-card', {
  schema: {
    videoAsset: { type: 'string' },
  },
  init: function () {
    //Assign Element & Data
    const element = this.el;
    const data = this.data;

    //DELETE
    const grassAsset = document.getElementById('grass-texture-asset');
    const plane = document.createElement('a-plane');
    plane.setAttribute('material', 'src', grassAsset);
    plane.setAttribute('position', '0 0 -5');

    plane.setAttribute(
      'animation',
      'property: scale; to: 10 10 10; dur: 10000; easing: easeInElastic; delay: 0'
    );

    element.appendChild(plane);

    //DELETE
  },
});
