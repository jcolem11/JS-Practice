
window.onload = function() {
  var objects = [];
  var updateCount = 0;
  function thing (newPosition, mesh) {
    this.mesh = mesh;
    this.newPosition = newPosition;
    this.angle = 1;
  }
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(.93,.93,.94);
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  controls = new THREE.OrbitControls( camera );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (x=1; x < 8 ; x++){
    for (y=1; y < 8 ; y++){
      for (z=1; z < 8 ; z++){
        var color = new THREE.Color( 1/(x * .5 + x), 1/(y * .1 + z), 1/(z * .42) );
        var geometry = new THREE.SphereGeometry( 1, 15, 15);
        var material = new THREE.MeshBasicMaterial( { color: color } );
        var circle = new THREE.Mesh( geometry, material );
        geometry.translate( x, y, z );
        scene.add( circle );
        var newThing = new thing(new THREE.Vector3( x, y, z ), circle);
        objects.push(newThing);
      }
    }
  }

  camera.position.x = 6;
  camera.position.y = 2;
  camera.position.z =20;

  function render() {
  	requestAnimationFrame( render );
  	renderer.render( scene, camera );
    controls.update();
    if (updateCount/2 == 1){
      for (i=0; i < objects.length ; i++){
        var thing = objects[i];
        var g = thing.mesh
        var x = Math.sin(thing.angle * thing.newPosition.x) + thing.newPosition.x + 2;
        var y = Math.sin(thing.angle * thing.newPosition.y) + thing.newPosition.y + 1;
        var z = Math.sin(thing.angle * thing.newPosition.z)  + thing.newPosition.z + 4;
        g.position.set(x,y,z);
        thing.angle += 0.08;
        updateCount = 0;
      }
    }
    updateCount++;
  }
  render();

};
