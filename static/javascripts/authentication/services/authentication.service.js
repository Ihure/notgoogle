**
* Authentication
* @namespace thinkster.authentication.services
*/
(function (){
	'use strict';

	angular
	.module('thinkster.authentication.services')
	.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http'];

  /**
  * @namespace Authentication
  * @returns {Factory}
  */
  function Authentication($cookies, $http){
  	var Authentication ={
		register: register
  	};

  	return Authentication;

  	function register(email, password, username){
  		return $http.post('/api/v1/accounts/',{
  			username: username,
  			password: password,
  			email: email
  		});

  	}
  }

})();