var navigation  = new Array();

var e1 = '<div class="navegador" id="navegador">';
var e2 = '<nav class="navbar">';
var e3 = '<ul class="nav">';
var e4 = '<li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>';
var e5 = '<li class="nav-item"><a class="nav-link" href="contenido.html">Contenido</a></li>';
var e6 = '<li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>';
var e7 = '<li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>';
var e8 = '</ul></nav></div>';

navigation.push(e1+e2+e3+e4+e5+e6+e7+e8);

function show(nav)
{
    for (var x in nav)
     {
      document.write(nav[x]+'\n');
     }
}
show(navigation);