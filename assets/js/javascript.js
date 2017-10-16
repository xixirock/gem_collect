// creates variable of win, lost, counter for player

var counter = 0;
var wins = 0;
var losses = 0;
$('#win').text(wins);
$('#loss').text(losses);


// input pictures into arrays

crystals = ['assets/images/red.png', 'assets/images/blue.png', 'assets/images/yellow.png', 'assets/images/green.png'];

//write function to generate numbers for the scoreboard, generate number in between 19 - 120

var value = Math.floor(Math.random() * 101 + 19);

$('.value').text(value);


//assign number to each gem, generate score in between 1-13

var red = Math.floor((Math.random() * 13) + 1);
var blue = Math.floor((Math.random() * 13) + 1);
var yellow = Math.floor((Math.random() * 13) + 1);
var green = Math.floor((Math.random() * 13) + 1);

//update the clause as they go

var update = function() {
    $('#counter').empty();
    $('#counter').append(counter);
    $('#losses').empty();
    $('#losses').append(losses);
}

//function for reset

var reset = function() {
    counter = 0;
    value = Math.floor(Math.random() * 101 + 19);

    $('.value').empty();
    $('.value').append(value);

    var red = Math.floor((Math.random() * 13) + 1);
    var blue = Math.floor((Math.random() * 13) + 1);
    var yellow = Math.floor((Math.random() * 13) + 1);
    var green = Math.floor((Math.random() * 13) + 1);

    //alert('restart!');
    update();

}

//logic of the game

var logic = function() {
    if (counter === value) {
        win += 1;
        $('#status').text('You won!!!!');
        update()
        reset();
    } else if (counter > value) {
        losses += 1;
        $('#status').text('You lost!!!!');
        update();
        reset();
    } else {
        update();
    }
}

$('#counter').append(counter);

//clickable gems


$(document).ready(function() {
    $('#red').click(function() {
        counter = counter + red;
        logic();
    })
    $('#blue').click(function() {
        counter = counter + blue;
        logic();
    })
    $('#yellow').click(function() {
        counter = counter + yellow;
        logic();
    })
    $('#green').click(function() {
        counter = counter + green;
        logic();
    })
});

