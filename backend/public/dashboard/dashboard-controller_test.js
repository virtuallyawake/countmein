describe('Controller: WeDashboardController', function(){
  beforeEach(module('weApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('WeDashboardController');
  }));

  it('should have items available on load', function(){
    expect(ctrl.lockdown).toEqual( { status : true } );
  });

});
