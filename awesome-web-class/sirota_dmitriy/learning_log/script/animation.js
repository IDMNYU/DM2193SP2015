var Ball = function (element, nextPostion, selector, duration) {
    
    this._element = element;
    this._selector = selector || window;
    this._duration = duration || 100;
    
    this.makeNewPosition = function () {
        var h = $(this._selector).height() - nextPostion;
        var w = $(this._selector).width() - nextPostion;

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);

        return [nh, nw];
    }

    this.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];

        }

        return color;
    }

    this.animateDiv = function () {

        var newq = this.makeNewPosition(),
            self = this;

        this._element.animate({
            top: newq[0],
            left: newq[1]
        }, this._duration, function () {
            self.animateDiv();

            self._element.css("background-color", self.getRandomColor());
        });

    }

}
$(document).ready(function () {

    var ball = new Ball($('.flip'), 20, null, 1000);
    ball.animateDiv();

    var ball2 = new Ball($('.flip2'), 20, null, 1000);
    ball2.animateDiv();
    
    var ball3 = new Ball($('.flip3'), 20, null, 1000);
    ball3.animateDiv();

    var ball4 = new Ball($('.flip4'), 20, null, 1000);
    ball4.animateDiv();
    
    var ball5 = new Ball($('.flip5'), 20, null, 1000);
    ball5.animateDiv();

    var ball6 = new Ball($('.flip6'), 20, null, 1000);
    ball6.animateDiv();
    
    var ball7 = new Ball($('.flip7'), 20);
    ball7.animateDiv();

    var ball8 = new Ball($('.flip8'), 20);
    ball8.animateDiv();
    
    var ball9 = new Ball($('.flip9'), 20);
    ball9.animateDiv();

    var ball10 = new Ball($('.flip10'), 20);
    ball10.animateDiv();
    
    var ball11 = new Ball($('.flip11'), 20);
    ball11.animateDiv();

    var ball12 = new Ball($('.flip12'), 20, '.container');
    ball12.animateDiv();


});

$(function() {
        $("#contentPost").delay(2000).fadeIn(500);
});