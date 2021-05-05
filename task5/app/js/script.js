// // Написать таймер Timer 
// с методами start (), stop (), reset ()
$(document).ready(function($) {
var timer = undefined;
            $('#start').on('click', function(){
                timer = window.setInterval('tictac()', 1000);
            });
            $('#pause').on('click', function(){
                window.clearInterval(timer);
            });
            $('#reset').on('click', function(){
                counter = -1;
                tictac();
                window.clearInterval(timer);
            });

        });
        var counter = 0;
        function tictac(){
            counter++;
            $("#clock").html(counter);}