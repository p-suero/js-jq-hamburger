//OPZIONE A (mantengo il codice HTMl pulito da stile in linea)
//seleziono l'elemento e gli assegno un evento
$("a i").click(function(){
    //inserisco ed elimino la classe active tramite l'operatore "toogleclass"
    $(".hamburger-menu").toggleClass("active")
})

// //OPZIONE B (bello, ma inquino la pagina html con stile in linea)
// //seleziono l'elemento e gli assegno un evento
// $(".header-right a").click(function(){
//     //modifico il display none dell'hamburger menu tramite "FadeIn"
//     $(".hamburger-menu").fadeIn();
// })
//
// $(".hamburger-menu a").click(function(){
//     //modifico il display block dell'hamburger menu tramite "FadeOut"
//     $(".hamburger-menu").fadeOut();
// })

// // OPZIONE C (non affatto elegante ed inquino la pagina html con stile in linea)
// //seleziono l'elemento e gli assegno un evento
// $(".header-right a").click(function(){
//     //modifico il display none dell'hamburger menu tramite "show"
//     $(".hamburger-menu").show();
// })
//
// $(".hamburger-menu a").click(function(){
//     //modifico il display block dell'hamburger menu tramite lo "hide"
//     $(".hamburger-menu").hide();
// })
