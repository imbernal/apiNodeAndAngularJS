app.controller("mainController" , ["$scope" ,"$location", "$route" ,"stocksProvidder" , function($scope,$location,$route ,stocksProvidder){

  $scope.table_name = "Stocks";

  stocksProvidder.getStocks().then(res=>{
    $scope.stocks = res.data;
  });

  $scope.showModalforNew = function($event){
    $event.preventDefault();

    $(".modalStock").modal();
  }

  $scope.editStock = function(stock , $event){
    $event.preventDefault();
    $scope.dat = "ASAS";
    $(".modalEditStock").modal();
  }

  $scope.deleteStock = function(id , $event){
    $event.preventDefault();

    $params = $.param({
      "id" : id
    })

    stocksProvidder.deleteStock(id).then(res=>{
      $route.reload();
    })

  }

  $scope.addStock = function(stockData){

    $params = $.param({
      "name": stockData.name,
      "symbol": stockData.symbol,
      "price": stockData.price,
      "date" : stockData.date
    });


    stocksProvidder.createStock($params).then(res=>{
      console.log(res);
      $route.reload();
    });
  }

}]);
