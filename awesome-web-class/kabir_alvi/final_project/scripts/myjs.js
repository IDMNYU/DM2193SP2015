/**
 * Created by Alvi on 4/16/2015.
 */

/*--------------------JQUERY-----------------------------------*/
jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
jq(document).ready(function(){
    jq('#collapsible').css("margin-right","-"+jq('#stories').width());
    jq('.dropdown-button').on('click', function(){
        jq('#stories').css("width","auto");
    });
    jq('ul.tabs').tabs();
    var $currentTab = jq("a[href='"+location.hash+"']").data('target');

    if ($currentTab){
        $currentTab=$currentTab.substring(1,$currentTab.length);
        jq('ul.tabs').tabs('select_tab', $currentTab);
    }
    jq('.indicator').invisible();
    jq('ul.tabs').on('click',function(){
        if (jq('.indicator').css("visibility")==="hidden"){
            jq('.indicator').visible();
        }
    });
    jq('.brand-logo').on('click', function(){
        jq('.indicator').invisible();
    });
    jq('#stories>li>a').on('click', function(){
        var $target = jq(this).data("target");
        $target = $target.substring(1, $target.length);
        jq('ul.tabs').tabs('select_tab', $target);
    });
});
/*--------------------ANGULARJS-----------------------------------*/
angular.module("app", ['ngRoute'])
    .controller('StoryCtrl',['$scope',function($scope){
        $scope.load = function() {
            jq('.generate').on('click',function(){
                var showText = true;
                jq('.validate').each(function(){
                    if (jq(this).val().length == 0){
                        showText = false;
                        return false;
                    }
                });
                if (showText){
                    jq('.story').removeClass('blackout');
                    jq('.number').removeClass('visible').addClass('not-visible');
                }
                else{
                    alert('Enter all the words!');
                }
            });
        };
        $scope.load();
    }])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: './views/home.html'
            })
            .when('/story1',{
                templateUrl: './views/story1.html',
                controller: 'StoryCtrl'
            })
            .when('/story2',{
                templateUrl: './views/story2.html',
                controller: 'StoryCtrl'
            })
            .when('/story3',{
                templateUrl: './views/story3.html',
                controller: 'StoryCtrl'
            })
            .when('/story4',{
                templateUrl: './views/story4.html',
                controller: 'StoryCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
    });