$($(document).ready(function() {
  $('#bnt_adicionar').click(function(event) {
    event.preventDefault();

    var modelo = $('#modelo-veiculo').val();
    var placa = $('#placa-veiculo').val();
    var Marca = $('#marca-veiculo').val();
    
    alert(`Seu veiculo ${modelo} da marca: ${Marca} possua a placa ${placa}`);
    });
  })
 )