
var cargo = "vendedor";



function ajustarMenuPorCargo() {
  var itensMenu = document.querySelectorAll('.menu-item');

  itensMenu.forEach(function(item) {
    var permissao = item.getAttribute('cargo');

   
    if ((cargo === "vendedor" && permissao === "vendedor") ||
        (cargo === "supervisor" && (permissao === "vendedor" || permissao === "supervisor")) ||
        (cargo === "gerente" && (permissao === "vendedor" || permissao === "supervisor" || permissao === "gerente")) ||
        (permissao === "todos")) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


window.onload = ajustarMenuPorCargo;
