/*(function() {
    'use strict';

    angular
        .module('moosicApp')
        .controller('MoosicDetailsController', Controller);

    Controller.$inject = ['MoosicFactory', '$log', '$stateParams', ];

      @ngInject 
    function Controller(MoosicFactory, $log, $stateParams) {
        var vm = this;
        vm.title = 'MoosicDetailsController';


        vm.hello = "hello";
        console.log(vm.hello);

        vm.mood = $stateParams.name;

        getSpot($stateParams.name);

            var get = "GET";

            function getSpot (spot) {
            var url = 'https://webcamstravel.p.mashape.com/webcams/list/category=beach';
            MoosicFactory.getMusic(url, get).then(
                function(response) {
                    vm.spotResults = response.data;
                    console.log(vm.spotResults);
                    
                },

                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };
    };
})(); */
