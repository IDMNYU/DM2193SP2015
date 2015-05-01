var correctRiddleAnswers = []

function verifyCorrectAnswerForRiddle(riddleNum,riddleAnswer,riddleArr) {
 
    if(riddleAnswer == riddleArr[riddleNum]) {
           
        $(function () {
            $('<img>')
            .attr('src', 'pictures/nice.gif')
            .attr('width', '400px')
            .attr('height', '400px')
            .appendTo('.contentContainer')
            .css('position', 'absolute')
            .css('top', 'calc(50% - 400px/2)')
            .css('left', 'calc(50% - 400px/2)');
          
        })
        
    }
    
    else {
        
        $(function () {
            $('<img>')
            .attr('src', 'pictures/wrong.gif')
            .attr('width', '400px')
            .attr('height', '400px')
            .appendTo('.contentContainer')
            .css('position', 'absolute')
            .css('top', 'calc(50% - 400px/2)')
            .css('left', 'calc(50% - 400px/2)');
          
        })
        
    }
    
}