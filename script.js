
// Pole, ktoré obsahuje todo
let todos = [];

// Toto je funkcia ktorá na základe value inputu pridá položku do zoznamu
$("#addTodo").click(function(){
    let a = $("#userInput").val();
    todos.push (a);
    $("ul").append(`<li>${a}</li>`);
//vyčistí input aby tam nebol predošlý text
    $("#userInput").val("");
});


