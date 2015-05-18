/*Keep global variable riddleNum updated if page refereshes*/
$.cookie('my_number','0');
var riddleNum = Number($.cookie('my_number'));

/*Modal Box checks answer*/
function displayModalBox() {
    var riddleAnswer = ["75","25","iron","devil","July 16"];
    var riddleGuess = 0;
    //var breakOutOfLoop = false;
    while(riddleGuess <= 5) {
        var answer = prompt('Answer here ',' ');
        riddleGuess++;
        if(answer != riddleAnswer[riddleNum]) {
            $(function() {
                var object = $('<img>')
                .attr('id','tempImg')
                .attr('src', '../images/gif/wrong.gif')
                .attr('width', '400px')
                .attr('height', '400px')
                .appendTo('.contentContainer')
                .css('position', 'absolute')
                .css('top', 'calc(50% - 400px/2)')
                .css('left', 'calc(50% - 400px/2)');
            });
            setTimeout(function(){document.getElementById('tempImg').style.display = 'none';},1000);   
        }
        else {
            break;
        }
        /*var answer = $('#input' + riddleNum).val();
        $(document).ready(function(e) {
            $('#submit' + riddleNum).on('click',function() { 
                riddleGuess++;
                if(answer != riddleAnswer[riddleNum]) {
                    $(function() {
                        var object = $('<img>')
                        .attr('id','tempImg')
                        .attr('src', '../images/gif/wrong.gif')
                        .attr('width', '400px')
                        .attr('height', '400px')
                        .appendTo('.contentContainer')
                        .css('position', 'absolute')
                        .css('top', 'calc(50% - 400px/2)')
                        .css('left', 'calc(50% - 400px/2)');
                    });
                    setTimeout(function(){document.getElementById('tempImg').style.display = 'none';},1000);
                }
                else {
                    breakOutOfLoop = true;
                }
            });
        });*/
    }
    if(riddleGuess > 5) {
        setTimeout(function() {
        $(function() {
            var object = $('<img>')
            .attr('src', '../images/gif/denzel.gif')
            .attr('width', '400px')
            .attr('height', '400px')
            .appendTo('.contentContainer')
            .css('position', 'absolute')
            .css('top', 'calc(50% - 400px/2)')
            .css('left', 'calc(50% - 400px/2)');
        })}, 100);
    }
}

function displayRiddle() {              
   while(riddleNum <= 4) {
        document.getElementById('riddle' + riddleNum).style.display = 'block';
        displayModalBox();
        document.getElementById('riddle' + riddleNum).style.display = 'none';
        var nextRiddle = riddleNum++;
        $.cookie('my_number',nextRiddle.toString());     
    }
    $.cookie('my_number',null);
}

displayRiddle();