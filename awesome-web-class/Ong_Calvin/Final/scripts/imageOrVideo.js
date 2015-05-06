/*Takes random index and if the remainder of the index divided by 2 is 1, then a video tag is inserted into the page, otherwise a picture tag is inserted*/

var imagePath = 'images/';
var vidPath = 'videos/';
var randomImageOrVideo =['gtr.jpg','crossover.mp4','Pusheen.gif','downfall.mp4','rover.jpg','dunk.mp4','cern.jpg','pitch.mp4','pepe.jpg','skyrim.mp4','q40.jpg'];

function getRandomItem(imgArray) {
    var randomIndex = Math.floor(Math.random() * imgArray.length);
    if(randomIndex % 2 == 1) {
        alert('video');
        var vid = imgArray[randomIndex];
        $(function () {
            $('<video>')
            .attr('id', 'video' + randomIndex)
            .attr('src', vidPath + vid)
            .attr('width', '400px')
            .attr('height', '400px')
            .prop('controls',true)
            .appendTo('.contentContainer')
            .css('position', 'absolute')
            .css('top', 'calc(50% - 400px/2)')
            .css('left', 'calc(50% - 400px/2)');
          
        });
    }
    else {
        alert('image');
        var img = imgArray[randomIndex];
        $(function () {
            var object = $('<img>')
            .attr('src', imagePath + img)
            .attr('width', '400px')
            .attr('height', '400px')
            .appendTo('.contentContainer')
            .css('position', 'absolute')
            .css('top', 'calc(50% - 400px/2)')
            .css('left', 'calc(50% - 400px/2)');
        });
    }
} 

getRandomItem(randomImageOrVideo);
