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

AFRAME.registerComponent('ar-experience', {
  init: function () {
    const giftElement = document.getElementById('box');
    giftElement.object3D.visible = false;

    const catElement = document.getElementById('cat-model');
    catElement.object3D.visible = false;

    const ground = document.getElementById('ground');
    ground.addEventListener('click', function (e) {
      const touchPoint = event.detail.intersection.point;
      const container = document.getElementById('container');
      container.setAttribute('position', touchPoint);

      giftElement.object3D.visible = true;
      giftElement.setAttribute(
        'animation-timeline',
        'timeline: #myTimeline; loop:false'
      );

      giftElement.addEventListener('animationtimelinecomplete', function () {
        giftElement.setAttribute('animation-mixer', 'loop: pingpong');
        giftElement.setAttribute(
          'animation',
          'property: model-opacity; to: 0; dur: 500; delay: 500'
        );

        catElement.object3D.visible = true;
        catElement.setAttribute(
          'animation',
          'property: scale; dur: 500; delay: 200; to: 0.2 0.2 0.2;'
        );
      });

      //const particles = document.getElementById('particles');
      //particles.components['particle-system'].startParticles();
      //particles.setAttribute('enabled', false);
    });
  },
});

//const catElement = document.getElementById('cat-model');
//catElement.object3D.visible = false;

//const giftElement = document.getElementById('gift-model');
//giftElement.object3D.visible = false;

//animation-timeline="timeline: #myTimeline; loop:false"
//animation__scale_one="property: scale; from: 0 0 0; to: 1 1 1; dur: 1500; autoplay: false"
//animation__scale_two="property: scale; from: 1 1 1; to: 0.5 0.5 0.5; dur: 1500; autoplay: false"
//animation__scale_three="property: scale; from: 0.5 0.5 0.5; to: 1 1 1; dur: 1500; autoplay: false"

//catElement.object3D.visible = true;
/*giftElement.setAttribute('scale', '0 0 0');
      giftElement.object3D.visible = true;
      giftElement.setAttribute('animation', 'property: scale; to: 1 1 1');
      giftElement.setAttribute('animation-mixer', 'loop: pingpong');*/

/*giftElement.addEventListener('animation-loop', function () {
        //console.log('AAAA');
        //alert('AAAA');
      });*/

/*
        <a-gltf-model
          gift
          id="cat-model"
          rotation="0 45 0"
          scale="0.01 0.01 0.01"
          src="#cat-asset"
        ></a-gltf-model>*/

/*console.log('A');
    this.el.addEventListener('model-loaded', (e) => {
      console.log(this.el.components['gltf-model'].model.animations);
    });*/

/*
      <a-gltf-model
        gift
        id="gift-model"
        rotation="0 45 0"
        position="0 0 -20"
        scale="0.5 0.5 0.5"
        src="#gift"
        animation-mixer="loop: pingpong"
      ></a-gltf-model>

      <a-gltf-model
        gift
        id="cat"
        rotation="0 45 0"
        position="0 0 -20"
        scale="0.05 0.05 0.05"
        src="#cat"
        animation-mixer
      ></a-gltf-model>

      <a-text
        position="0 0 -20"
        color="#AB47BC"
        value="Happy Birthday Lily!"
      ></a-text>*/

/*<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello, WebVR! • A-Frame</title>
    <meta name="description" content="Hello, WebVR! • A-Frame" />
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"></script>
    <script src="https://rawgit.com/mayognaise/aframe-mouse-cursor-component/master/dist/aframe-mouse-cursor-component.min.js"></script>
    <script src="https://unpkg.com/aframe-animation-timeline-component@2.0.0/dist/aframe-animation-timeline-component.min.js"></script>
    <script src="shaun.js"></script>
  </head>
  <body>
    <a-scene
      ar-experience
      id="talkar-scene"
      cursor="rayOrigin: mouse"
      raycaster="objects: #ground"
    >
      <a-assets>
        <a-timeline id="myTimeline">
          <a-timeline-animation
            select="#gift-model"
            name="fadein"
          ></a-timeline-animation>
          <a-timeline-animation
            select="#gift-model"
            name="fadeout"
            offset="500"
          ></a-timeline-animation>
        </a-timeline>

        <a-asset-item
          id="gift-asset"
          src="assets/gift/scene.gltf"
        ></a-asset-item>
        <a-asset-item id="cat-asset" src="assets/cat/scene.gltf"></a-asset-item>
      </a-assets>
      <a-entity position="0 0 0" camera mouse-cursor></a-entity>
      <a-box
        id="ground"
        scale="20 0.1 20"
        position="0 -2 0"
        color="#bdbdbd"
      ></a-box>
      <a-entity id="container" scale="0.1 0.1 0.1">
        <a-gltf-model
          animation__fadein="property: scale; from: 0; to: 1 1 1; startEvents: null"
          animation__fadeout="property: scale; from: 1; to 0 0 0; startEvents: null"
          gift
          id="gift-model"
          rotation="0 45 0"
          src="#gift-asset"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  </body>
</html>
*/

/*giftElement.setAttribute(
        'animation__scale_one',
        'property: scale; from: 0 0 0; to: 1 1 1; dur: 1500; autoplay: false'
      );
      giftElement.setAttribute(
        'animation__scale_two',
        'scale; from: 1 1 1; to: 0.5 0.5 0.5; dur: 1500; autoplay: false'
      );
      giftElement.setAttribute(
        'animation__scale_three',
        'scale; from: 0.5 0.5 0.5; to: 1 1 1; dur: 1500; autoplay: false'
      );*/

//console.log('TEST');

/*window.addEventListener('arjs-nft-loaded', function (e) {
  alert('Loaded 12');
});*/

/*
<!DOCTYPE html>
<html>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <!-- we import arjs version without NFT but with marker + location based support -->
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <body>
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
    >
      <a-marker type="barcode" value="5">
        <a-box position="0 0 0" color="yellow"></a-box>
      </a-marker>
    </a-scene>
  </body>
</html>
*/
