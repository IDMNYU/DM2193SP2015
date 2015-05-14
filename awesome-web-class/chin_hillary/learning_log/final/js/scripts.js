//console.log("is it working at all");

$('[store-player-choice]').on('click', function(){
    //console.log("please work");
    var clicked = $(event.target).attr('class');    
    sessionStorage.setItem('player-choice', clicked);
    //console.log(clicked);
    var playerChosen = sessionStorage.getItem('player-choice');
    //console.log(playerChosen);
});