$(document).ready( function() {
  /*
  * Ricreare la navbar di revolut
    Rendere funzionali i menu dropdown all’interno della navigazione principale
    Importante l’uso di $(this)
    Usare il click() oppure mouseenter() / mouseleave() per mostrare / nascondere i dropdown menu
    Modificare l’icona freccia nel selettore della lingua all’hover (freccia giù / freccia su) usando fontawesome
  */

  // Referenze
  var dropDown = $('.top-actions-list .with-dropdown');
  var dropLinks = dropDown.children('a');
  var dropdownMenu = dropDown.children('.dropdown-menu');

  // Visualizzo/Nascondo dropdown menu
  dropLinks.click(function(event) {

    event.preventDefault();

    var actualMenu = $(this).next('.dropdown-menu');

    dropdownMenu.not(actualMenu).hide();

    actualMenu.toggle();

  });


























});