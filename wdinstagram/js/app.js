"use strict";



(function(){


  angular
  .module("wdinstagram", ["ui.router", "ngResource"])
  .config(["$stateProvider", RouterFunction])
  .controller("WDInstragramIndexController", ["WDInstagramFactory", WDInstragramIndexControllerFunction])
  .controller("WDInstragramShowController", ["WDInstagramFactory", "$stateParams", WDInstragramShowControllerFunction])
  .factory("WDInstagramFactory", ["$resource", FactoryFunction])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("WDInstagramIndex", {
      url: "/wdinstagram",
      templateUrl: "js/ng-views/index.html",
      controller: "WDInstragramIndexController",
      controllerAs: "vm"
    })
    .state("WDInstagramShow", {
      url: "/wdinstagram/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "WDInstragramShowController",
      controllerAs: "vm"
    })
  }



  function WDInstragramIndexControllerFunction(WDInstagramFactory) {
    this.instagrams = WDInstagramFactory.query()
  }

  function WDInstragramShowControllerFunction(WDInstagramFactory, $stateParams) {
    this.instagram = WDInstagramFactory.get({id: $stateParams.id});
    console.log("WORKS??");
  }

  function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/entries/:id");
}








})();
