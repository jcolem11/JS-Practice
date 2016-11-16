window.onLoad = begin;
var begin = function(){
  var mesh;
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);
  camera.position.z = 10;

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(500, 400);
  document.body.appendChild(renderer.domElement);

  var svg = document.getElementById("svgContainer").querySelector("svg");
  var svgData = (new XMLSerializer()).serializeToString(svg);

  var canvas = document.createElement("canvas");
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var ctx = canvas.getContext("2d");

  var img = document.createElement("img");
  img.setAttribute("src", "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svgData))) );

  img.onload = function() {
    ctx.drawImage(img, 0, 0);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    material.map.minFilter = THREE.LinearFilter;
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  };

  var render = function () {
      requestAnimationFrame(render);
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
  };

  render();
}
