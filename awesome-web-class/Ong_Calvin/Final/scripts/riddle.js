/*Keep global variable riddleNum updated if page refereshes*/
localStorage.setItem("riddleNumber", riddleNumber);

var displayRiddle = $(function (riddleNum) {
    for(; riddleNum < 5; counter++) {
        document.getElementById("riddle" + riddleNum).style.display = 'block';
        break;
    }
}
                                         
/*Modal Box*/
function displayModalBox(riddleQuestion) {
    var riddleAnswer = [];
    if(riddleGuess != 5) {
        var answer = prompt(riddleQuestion,'')
        if(answer == riddleAnswer) {
            //nice.gif
        }
        else {
            //wrong.gif
        } 
    }
    else {
        //fail.gif
    }
}