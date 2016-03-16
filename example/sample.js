window.addEventListener('load', function() {
  init();
});

function init() {
  var myAppRoot = new POKEMON.Root('myApp');
  var map = new POKEMON.Map();
  myAppRoot.setMap(map);
  var boy = new POKEMON.Avatar();
  myAppRoot.addAvatar(boy);
}
