'user strict'

angular.module('NigshahOM').factory('accountsServ', ['$resource', function ($resource) {

    var methods = { getAll: {method: 'GET'}};

    var AccountsResource = $resource('/api/accounts/:id', { id: '@id' }, methods);
    var TransactionsResource = $resource('/api/accounts/:id/transactions', { id: '@id' }, methods);

	return {
		GetAllAccounts: function(){
		    return AccountsResource.getAll();
		},
		GetAccountById: function(accountId){
			return AccountsResource.get({id: accountId})
		},
		GetAllTransactionsForAccount: function(accountId){
			return TransactionsResource.getAll({id: accountId});
		}
	};
}])