console.log('TEST');

window.addEventListener('arjs-nft-loaded', function (e) {
  alert('Loaded 8');
});

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
