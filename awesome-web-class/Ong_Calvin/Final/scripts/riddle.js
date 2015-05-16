/*Keep global variable riddleNum updated if page refereshes*/
$.cookie('my_number','0');
var riddleNum = Number($.cookie('my_number'));

/*Modal Box checks answer*/
function displayModalBox() {
    var riddleAnswer = ['75','25','iron','devil','July 16'];
    var riddleGuess = 0;
    while(riddleGuess <= 5) {
        /*$(document).ready(function (e){
            $('#'+riddleNum+'submit').on('click',function (){
                var answer = $('#'+riddleNum+'input').val();
            });
        });*/
        
        var answer = prompt('Answer question here: ',' ');
        if(answer == riddleAnswer[riddleNum]) {
            alert('nice');
            break;
            //nice.gif
        }
        else {
            alert('wrong');
            riddleGuess++;
            //wrong.gif
        }      
  
    }
    
    if(riddleGuess > 5) {
        alert('fail');     
        //fail.gif
    }
    
}

function displayRiddle() {              
   while(riddleNum <= 4) {
        document.getElementById('riddle' + riddleNum).style.display = 'block';
        displayModalBox();
        var nextRiddle = riddleNum++;
        $.cookie('my_number',nextRiddle.toString());     
    }
    $.cookie('my_number',null);
}

displayRiddle();