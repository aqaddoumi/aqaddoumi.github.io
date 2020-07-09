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

AFRAME.registerComponent('happy-birthday-ar', {
  init: function () {
    alert('FOUND 4');
    const element = this.el;
    const data = this.data;

    element.addEventListener('markerFound', (e) => {
      const giftElement = document.getElementById('gift-model');

      giftElement.object3D.visible = true;
      giftElement.setAttribute(
        'animation-timeline',
        'timeline: #gift-animation-timeline; loop:false'
      );

      giftElement.addEventListener('animationtimelinecomplete', function () {
        giftElement.setAttribute('animation-mixer', 'loop: pingpong');
        giftElement.setAttribute(
          'animation',
          'property: model-opacity; to: 0; dur: 500; delay: 500'
        );
      });
    });
  },
});

//Timeline
//Cat
//Particles
//Video
//Sound
//Loading
