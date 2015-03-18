﻿app.controller("authorDetailController", ["$scope", "Authors", "$modalInstance", "id", function ($scope, Authors, $modalInstance, id) {

$scope.$on("gotAuthor", function (event, data) {
    console.log("modal controller: ", data);
    $scope.author = data;
});



$scope.ok = function () {

    if (confirm("Är du säker på att du vill ta bort denna författare?"))
    {
        $modalInstance.close();
    }
 };

$scope.cancel = function () {

    $modalInstance.dismiss('cancel');
};

Authors.get(id);

}]);