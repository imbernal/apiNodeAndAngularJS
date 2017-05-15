app.factory("stocksProvidder" , ["$http" , function($http){



  function getStocks(){
    return $http.get("/stocks");
  }

  function createStock($params){
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "/createStock",
      data: $params,
      cache: true,
      method: "POST"
    })
    .success(function(res){
        console.log(res);
    });
  }
  //
  function deleteStock(id){

    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "/deleteStock",
      cache:true,
      data: id,
      method: "DELETE"
    }).success(function(res){
      console.log(res);
    });

  }

  return { getStocks , createStock , deleteStock }

}]);
