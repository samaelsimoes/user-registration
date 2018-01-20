(function(){
	'use strict';
	
	angular.module("usuarios").directive("json", Directive);
	
	Directive.$inject = [];
	
	function Directive(){
		return {
			restrict : 'E',
			scope : {
				'data' : '=data'
			},
			templateUrl : 'js/directive/json.html'
		};
	}
})();