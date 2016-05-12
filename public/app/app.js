'use strict';

//var app = angular.module('AngularBeeperPlus', ['ngRoute']);
var app = angular.module('AngularBeeperPlus', []);

app.run(['beeperPlus', '$q', '$rootScope', '$timeout', function(beeperPlus, $q, $rootScope, $timeout) {
  $rootScope.loading = true;

  beeperPlus.loadInstruments().then(function(result) {
    beeperPlus.loadSequence().then(function(result) {
      $rootScope.machine = beeperPlus;
      $rootScope.tempo = beeperPlus.tempo.call(this);
      $rootScope.loading = false;
    })
  });
}]);
