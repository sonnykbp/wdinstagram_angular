"use strict";



(function(){

  let WDInstagramData = [
    {photo_url:"https://vetstreet.brightspotcdn.com/dims4/default/edb51df/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F716f20a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-2-645mk062811.jpg", author: "Sonny", body: "My prince <3"},
    {photo_url:"https://s-media-cache-ak0.pinimg.com/736x/e4/7c/e5/e47ce5b12dd50743b35a008d09630d12.jpg", author: "Danielle", body: "The puppsters!"},
    {photo_url:"https://s-media-cache-ak0.pinimg.com/736x/cf/b7/a2/cfb7a23b99bded240bb685494bfe8525.jpg", author: "Jenny", body: "Sleeping time zzzzzz."}
  ]
  
  angular
  .module("wdinstagram", [])
  // .config("$stateProvider", RouterFunction)
  .controller("WDInstragramIndexController", WDInstragramIndexControllerFunction)
  // .controller("WDInstragramShowController", ["$stateParams", WDInstragramIndexControllerFunction])

  function WDInstragramIndexControllerFunction() {
    this.instagrams = WDInstagramData
  }







})();
