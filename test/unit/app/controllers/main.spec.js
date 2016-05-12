'use strict';

describe('BeeperPlusCtrl', function() {
  var scope, ctrl, beeperPlus;

  beforeEach(function() {
    module('AngularBeeperPlus');

    inject(function($rootScope, $injector, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('BeeperPlusCtrl', {$scope: scope});
    });

    inject(function(_beeperPlus_) {
      beeperPlus = _beeperPlus_;
      scope.machine = beeperPlus;
    });
  });

  it('should set up a beeper plus service', function() {
    expect(beeperPlus).toEqual(jasmine.any(Object));
    expect(scope.machine).toEqual(jasmine.any(Object));
  });

  describe('method playLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'play');
    });

    it('should tell the machine to start playing', function() {
      scope.playLoop();
      expect(scope.machine.play).toHaveBeenCalled();
    });
  });

  describe('method stopLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'stop');
    });

    it('should tell the machine to stop', function() {
      scope.stopLoop();
      expect(scope.machine.stop).toHaveBeenCalled();
    });
  });

  describe('method resetLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'reset');
    });

    it('should tell the machine to reset itself', function() {
      scope.resetLoop();
      expect(scope.machine.reset).toHaveBeenCalled();
    });
  });

  describe('method updateTempo', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'setTempo');
    });

    it('should tell the machine to update the tempo', function() {
      scope.tempo = 120;
      scope.updateTempo();
      expect(scope.machine.setTempo).toHaveBeenCalledWith(120);
    });
  });
});
