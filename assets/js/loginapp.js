(function() {
    
'use strict';
var app = angular.module("myApp", ['ngMaterial', 'chart.js', 'md.data.table', 'ngMessages','perfect_scrollbar','ui.calendar']);
app.factory('requete', function ($http, $q) {
    var factory = {
        banner: false,
        authentification: function (dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/User/Authentification',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        }, 
        getliststockpremnofiltre:function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getliststockpremnofiltre',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistreallpremstock: function(dataObj) {
            var deferred = $q.defer();
            $http({ 
                method: 'POST',
                url: 'index.php/Stock/Enregistretousprem',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getliststockpfininofiltre:function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getliststockpfininofiltre',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistreallproduit: function(dataObj) {
            var deferred = $q.defer();
            $http({ 
                method: 'POST',
                url: 'index.php/Stock/Enregistretousproduit',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistreallstock: function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/Enregistretous',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getanotherstock:  function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getanotherstock',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getAllliststock: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getAllliststock',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstocksorti: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstocksorti',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstockentre: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstockentre',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistreallstocksorti: function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/Enregistretoussorti',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        sortirbon: function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/sortirbon',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstocksortifilter: function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getallstocksortifilter',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstockentrerfilter: function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getallstockentrerfilter',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatsortijour: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatsorti',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatsortimois:  function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatsortimois',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatentrerjour: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatentrerjour',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatentrermois: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatentrermois',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatenstock: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatenstock',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstocksortinofilter: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstocksortinofilter',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstockentrernofilter: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstockentrernofilter',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getstatvendu: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getstatvendu',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getliststockprem:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getliststockprem',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getliststockpfini:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getliststockpfini',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistrerentrerlimite:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/enregistrerentrerlimite',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstockentrerfilterproduit:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getallstockentrerfilterproduit',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        enregistreproduction:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/enregistreproduction',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        checkstock: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/checkstock',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getliststocklimite: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getliststocklimite',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstockentrernofilterproduit: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstockentrernofilterproduit',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstocksortinofilterproduit: function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/Stock/getallstocksortinofilterproduit',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        getallstocksortifilterproduit:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/Stock/getallstocksortifilterproduit',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        profil:function(dataObj) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'index.php/User/profil',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
        username:function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'index.php/User/username',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    then(function (datas) {
                        deferred.resolve(datas);
                    });
            return deferred.promise;
        },
    };
    return factory;
});
app.controller("login", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.credential = {};
    $scope.credential.username = "";
    $scope.credential.password = "";
    $scope.typePassword = "password";
    $scope.typeicon = "mdi-eye";
    $scope.searchButtonText = "Search";
    $scope.test = "false";
    $scope.searchButtonText = "SE CONNECTER";
    $scope.authent = function (credential) {
        console.log(credential);   
        $scope.searchButtonText = "CONNEXION";
        var dataObj = {
            username: credential.username,
            password: credential.password
        };
        console.log(dataObj);
        requete.authentification(dataObj).then(function (datas) {
            console.log(datas);
            $scope.searchButtonText = "SE CONNECTER";
            if (!datas.data.error) {
                window.location.href = "http://127.0.0.1/GestStock/Stock";
            }
            else{
                $.notify({
                    title: "<strong>Echec d'Authentification</strong><br> ",
                    message: "Nom d'utilisateur incorrecte ou mot de passe incorecte"
                }, {
                    type: 'danger',
                    placement: {
                        from: "bottom"
                    },
                    animate: {
                        enter: 'animated fadeInUp',
                        exit: 'animated fadeOutDown'
                    },
                });
            }
        });
        $scope.credential.username = "";
        $scope.credential.password = "";
        $scope.typePassword = "password";
        $scope.typeicon = "mdi-eye";
    }
    
    $scope.montrerCacherPass = function ()
    {
        if ($scope.typePassword == "password"){
            $scope.typePassword = "text";
            $scope.typeicon = "mdi-eye-off";
        }
        else{
            $scope.typePassword = "password";
            $scope.typeicon = "mdi-eye";
        }
    }
}]);
app.controller("liststock", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    requete.getanotherstock($scope.query).then(function(datas) {
         $scope.liststock = datas.data.stock;
         $scope.liststock.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
    });    
    $scope.resetliststockall = function () {
        requete.getanotherstock($scope.query).then(function(datas) {
            $scope.liststock = datas.data.stock;
            $scope.liststock.count = datas.data.count;
        });
        $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
    };
    $scope.filter = "";
    $scope.onKey = function($event) {
        if ($scope.filter != "") {
            requete.getAllliststock().then(function(datas) {
                console.log(datas); 
                $scope.liststock = datas.data.stock.filter((v) => {
                    if (v.datestock.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1  || v.user.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 || v.nom.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststock.count = $scope.liststock.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
            requete.getanotherstock($scope.query).then(function(datas) {
                 $scope.liststock = datas.data.stock;
                 $scope.liststock.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                }, 1000);
            });
        }
    };
}]);
app.controller("liststockprem", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    requete.getliststockprem($scope.query).then(function(datas) {
         $scope.liststock = datas.data.stock;
         $scope.liststock.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
         console.log(datas);
    });    
    $scope.resetliststockall = function () {
        requete.getliststockprem($scope.query).then(function(datas) {
            $scope.liststock = datas.data.stock;
            $scope.liststock.count = datas.data.count;
        });
        $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
    };
    $scope.filter = "";
    $scope.onKey = function($event) {
        if ($scope.filter != "") {
            requete.getliststockpremnofiltre().then(function(datas) {
                console.log(datas); 
                $scope.liststock = datas.data.stock.filter((v) => {
                    if (v.nom.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststock.count = $scope.liststock.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
            requete.getliststockprem($scope.query).then(function(datas) {
                 $scope.liststock = datas.data.stock;
                 $scope.liststock.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                }, 1000);
            });
        }
    };
}]);
app.controller("listpfini", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    requete.getliststockpfini($scope.query).then(function(datas) {
         $scope.liststock = datas.data.stock;
         $scope.liststock.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
         console.log(datas);
    });    
    $scope.resetliststockall = function () {
        requete.getliststockpfini($scope.query).then(function(datas) {
            $scope.liststock = datas.data.stock;
            $scope.liststock.count = datas.data.count;
        });
        $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
    };
    $scope.filter = "";
    $scope.onKey = function($event) {
        if ($scope.filter != "") {
            requete.getliststockpfininofiltre().then(function(datas) {
                console.log(datas); 
                $scope.liststock = datas.data.stock.filter((v) => {
                    if (v.nom.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststock.count = $scope.liststock.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
            requete.getliststockpfini($scope.query).then(function(datas) {
                 $scope.liststock = datas.data.stock;
                 $scope.liststock.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                }, 1000);
            });
        }
    };
}]);
app.controller("menu", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.soumen = "nonaffiche";
    $scope.soumennou = "nonaffichenouv";
    $scope.alert = "activer";
    $scope.soumenparam = "nonafficherparam";
    $scope.soumenmouvement = 'nonaffichermouvement'
    requete.checkstock().then(function(datas) {
        console.log(datas.data.statue);
        if (datas.data.statue) {
            $scope.alert = "activer";
        }
        else{
            $scope.alert = "nonactiver";
        }
    });
    $scope.affichesoumenparam = function() {
        if ($scope.soumenparam == "afficherparam") {
            $scope.soumenparam = "nonafficherparam";
        }
        else if($scope.soumenparam == "nonafficherparam"){
            $scope.soumenparam = "afficherparam";
        }
    }
    $scope.affichesoumen = function() {
        if ($scope.soumen == "afficher") {
            $scope.soumen = "nonaffiche";
        }
        else if($scope.soumen == "nonaffiche"){
            $scope.soumen = "afficher";
        }
    }
    $scope.affichesoumennouv = function() {
        if ($scope.soumennou == "affichernouv") {
            $scope.soumennou = "nonaffichenouv";
        }
        else if($scope.soumennou == "nonaffichenouv"){
            $scope.soumennou = "affichernouv";
        }
        console.log("click");
    }
    $scope.affichemouvement = function() {
        if ($scope.soumenmouvement == "affichermouvement") {
            $scope.soumenmouvement = "nonaffichermouvement";
        }
        else if($scope.soumenmouvement == "nonaffichermouvement"){
            $scope.soumenmouvement = "affichermouvement";
        }
    }
        
}]);
app.controller("modifalerte", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    
    requete.getliststocklimite().then(function(datas) {
       $scope.liststock = datas.data;
       console.log(datas.data);
    });
    $scope.onKey = function($event) {
        if ($scope.filter != "") {
            requete.getliststocklimite().then(function(datas) {
                $scope.liststock = datas.data.filter((v) => {
                    if (v.nom.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
            });
        }
        else{
            requete.getliststocklimite().then(function(datas) {
                 $scope.liststock = datas.data;
            });
        }
    };
    $scope.modif = function(limite) {
        $("#btnedit"+limite).css("display", "none");
        $("#btnsave"+limite).css("display", "block");
        $("#btnannul"+limite).css("display", "block");
        $("#val"+limite).attr("type", "number");
        $("#valud"+limite).css("display", "none");
    }
    $scope.annuler = function(limite) {
        $("#btnedit"+limite).css("display", "block");
        $("#btnsave"+limite).css("display", "none");
        $("#btnannul"+limite).css("display", "none");
        $("#val"+limite).attr("type", "hidden");
        $("#valud"+limite).css("display", "block");
    }
    $scope.enregistrer = function(limite) {
        if (confirm("Voullez-vous vraiment modifier cette entrez?")) {
            var objet = {
                valeur : $("#val"+limite)[0].valueAsNumber,
                id : limite
            }
            requete.enregistrerentrerlimite(objet).then(function(datas) {
               if (datas.data.statue) {
                    $("#btnedit"+limite).css("display", "block");
                    $("#btnsave"+limite).css("display", "none");
                    $("#btnannul"+limite).css("display", "none");
                    $("#val"+limite).attr("type", "hidden");
                    $("#valud"+limite).css("display", "block");
                    $("#valud"+limite).text($("#val"+limite).val());
                    $.notify({
                        title: "<strong>Limite</strong><br> ",
                        message: "Modification effectuer avec success"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "top"
                        },
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                    });
               }
            }); 
        }
    }
}]);
app.controller("production", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.liststock = [];
    $scope.mt = {};
    $scope.mt.nom = "";
    $scope.mt.quantite = "";
    $scope.mtlist = [];
    $scope.pf = {};
    $scope.pf.nom = "";
    $scope.pf.nombre = "";
    $scope.pf.prix = "";
    $scope.pflist = [];
    $scope.projectNames = [];
    $scope.Names = [];
    requete.getallstockentrernofilterproduit().then(function(datas) {
        $scope.Names = datas.data.stock;
        for (var i=0; i < $scope.Names.length; i++) {
            $scope.projectNames.push($scope.Names[i].nom);
        }
    });
    $('#nomp').autoComplete({
          minChars: 1,
          source: function(term, suggest){
              term = term.toLowerCase();
              var suggestions = [];
              for (var i=0; i < $scope.projectNames.length; i++)
                  if (~$scope.projectNames[i].toLowerCase().indexOf(term)) suggestions.push($scope.projectNames[i]);
              suggest(suggestions);
            }
    });
    $scope.affprixpf = function() {
        var prix = $scope.Names.filter((v) => {
                if (v.nom.indexOf($scope.pf.nom) > -1) {
                  return true;
                }
            });
        console.log(prix);
            $scope.pf.prix = parseInt(prix[0].prix);
    }
    requete.getliststockpremnofiltre().then(function(datas) {
        $scope.liststock = datas.data.stock;
        console.log($scope.liststock);
    });
    $scope.mtinsert = function(mtentre) {
       if (mtentre.quantite != "" && mtentre.nom.quantite >= mtentre.quantite) {
            $scope.mtlist.push({ nombre: mtentre.quantite, nom: mtentre.nom.nom });
            $scope.mt.quantite = "";
            $scope.mt.nombre = "";
       }
       else if (mtentre.nom.quantite < mtentre.quantite) {
            $.notify({
            title: "<strong>Stock insuiffisant</strong><br> ",
            message: ""
            }, {
                type: 'warning',
                placement: {
                    from: "top"
                },
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
            });
       }
    }
    $scope.pfinsert = function(pfentrer) {
        if (pfentrer.nombre != "" && pfentrer.nom != "" && pfentrer.prix != "") {
            $scope.pflist.push({ nombre: pfentrer.nombre, nom: pfentrer.nom, prix: pfentrer.prix });
            $scope.pf.nom = "";
            $scope.pf.nombre = "";
            $scope.pf.prix = "";
       }
    }
    $scope.affprix = function() {
        $scope.mt.quantite = parseInt($scope.mt.nom.quantite);
        
    }
    $scope.modif = function(entre) {
        if (confirm("Voullez vous vraiment modifier cette entrez?")) {
            $scope.mtlist = $scope.mtlist.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.mt.nom = entre.nom;
            $scope.mt.nombre = entre.nombre;
        }
    }
    $scope.supprime = function (entre) {
        if (confirm("Voullez vous vraiment supprimer cette entrez?")) {
            $scope.mtlist = $scope.mtlist.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
        }
    }
    $scope.modifpf = function(entre) {
        if (confirm("Voullez vous vraiment modifier cette entrez?")) {
            $scope.pflist = $scope.pflist.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.pf.nom = entre.nom;
            $scope.pf.nombre = entre.nombre;
            $scope.pf.prix = entre.prix;
        }
    }
    $scope.supprimepf = function (entre) {
        if (confirm("Voullez vous vraiment supprimer cette entrez?")) {
            $scope.pflist = $scope.pflist.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
        }
    }
    $scope.enregistrertous = function() {
        var dataObj = {
            mt : $scope.mtlist,
            pf : $scope.pflist
        }
        if ($scope.mtlist.length > 0 && $scope.pflist.length > 0) {
            requete.enregistreproduction(dataObj).then(function(datas) {
                if (datas.data.statue) {
                    $scope.mtlist = [];
                    $scope.pflist = [];
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Tous les produits premiere ont ete ajouter. Ils sont visibles dans le liste des stock"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
                else {
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Une erreur s'est produit"
                    }, {
                        type: 'warning',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
            });
        }
    }
}]);
app.controller("nouveaumatierep", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.stockprem = {};
    $scope.stockprem.nom = "";
    $scope.stockprem.prix = "";
    $scope.stockprem.nombre = "";
    $scope.stockprem.montant = "";
    $scope.stockpreminserer = [];
    $scope.projectNames = [];
    requete.getliststockpremnofiltre().then(function(datas) {
        $scope.Names = datas.data.stock;
        for (var i=0; i < $scope.Names.length; i++) {
            $scope.projectNames.push($scope.Names[i].nom);
        }
    });
    $('#nomp').autoComplete({
          minChars: 1,
          source: function(term, suggest){
              term = term.toLowerCase();
              var suggestions = [];
              for (var i=0; i < $scope.projectNames.length; i++)
                  if (~$scope.projectNames[i].toLowerCase().indexOf(term)) suggestions.push($scope.projectNames[i]);
              suggest(suggestions);
            }
    });
    $scope.enregistrestockprem = function(stockprem){
        if (stockprem.nom != "" && stockprem.nombre != "" && stockprem.prix != "") {
            $scope.stockpreminserer.push({nom: stockprem.nom, nombre: stockprem.nombre, prix: stockprem.prix, montant: stockprem.prix*stockprem.nombre});
        }
        $scope.stockprem.nom = "";
        $scope.stockprem.prix = "";
        $scope.stockprem.nombre = "";
        $scope.stockprem.montant = "";
    }
    $scope.modif = function(entre) {
        if (confirm("Voullez vous vraiment modifier cette entrez?")) {
            $scope.stockpreminserer = $scope.stockpreminserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.stockprem.nom = entre.nom;
            $scope.stockprem.prix = entre.prix;
            $scope.stockprem.nombre = entre.nombre;
            console.log("click");
        }
    }
    $scope.supprime = function (entre) {
        if (confirm("Voullez vous vraiment supprimer cette entrez?")) {
            $scope.stockpreminserer = $scope.stockpreminserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
        }
    }
     $scope.enregistrertou = function () {
        if (confirm("Ete vous sur de vouloir tous enregistrer?")) {
            var dataObj = {
                stock: $scope.stockpreminserer
            };
            requete.enregistreallpremstock(dataObj).then(function(datas) {
                console.log(datas);
                if (datas.data.statue) {
                    $scope.stockpreminserer = [];
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Tous les produits premiere ont ete ajouter. Ils sont visibles dans le liste des stock"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
                else{
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Une erreur s'est produit"
                    }, {
                        type: 'warning',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
            });
        }
    }
}]);
app.controller("nouveauproduit", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.stockprem = {};
    $scope.stockprem.nom = "";
    $scope.stockprem.prix = "";
    $scope.stockprem.nombre = "";
    $scope.stockprem.montant = "";
    $scope.stockpreminserer = [];
    $scope.projectNames = [];
    $scope.Names = [];
    requete.getallstockentrernofilterproduit().then(function(datas) {
        $scope.Names = datas.data.stock;
        for (var i=0; i < $scope.Names.length; i++) {
            $scope.projectNames.push($scope.Names[i].nom);
        }
    });
    $scope.cherchprix = function() {
        var stockprix = $scope.Names.filter((v) => {
            if (v.nom.indexOf($scope.stockprem.nom) > -1) {
              return true;
            }
        });
        console.log(stockprix);
        $scope.stockprem.prix = parseInt(stockprix[0].prix) ;
    }
    $('#nomp').autoComplete({
          minChars: 1,
          source: function(term, suggest){
              term = term.toLowerCase();
              var suggestions = [];
              for (var i=0; i < $scope.projectNames.length; i++)
                  if (~$scope.projectNames[i].toLowerCase().indexOf(term)) suggestions.push($scope.projectNames[i]);
              suggest(suggestions);
            }
    });
    $scope.enregistrestockprem = function(stockprem){
        if (stockprem.nom != "" && stockprem.nombre != "" && stockprem.prix != "") {
            $scope.stockpreminserer.push({nom: stockprem.nom, nombre: stockprem.nombre, prix: stockprem.prix, montant: stockprem.prix*stockprem.nombre});
        }
        $scope.stockprem.nom = "";
        $scope.stockprem.prix = "";
        $scope.stockprem.nombre = "";
        $scope.stockprem.montant = "";
    }
    $scope.modif = function(entre) {
        if (confirm("Voullez vous vraiment modifier cette entrez?")) {
            $scope.stockpreminserer = $scope.stockpreminserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.stockprem.nom = entre.nom;
            $scope.stockprem.prix = entre.prix;
            $scope.stockprem.nombre = entre.nombre;
            console.log("click");
        }
    }
    $scope.supprime = function (entre) {
        if (confirm("Voullez vous vraiment supprimer cette entrez?")) {
            $scope.stockpreminserer = $scope.stockpreminserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
        }
    }
     $scope.enregistrertou = function () {
        if (confirm("Ete vous sur de vouloir tous enregistrer?")) {
            var dataObj = {
                stock: $scope.stockpreminserer
            };
            requete.enregistreallproduit(dataObj).then(function(datas) {
                console.log(datas);
                if (datas.data.statue) {
                    $scope.stockpreminserer = [];
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Tous les produits ont ete ajouter. Ils sont visibles dans le liste des stock"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
                else{
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Une erreur s'est produit"
                    }, {
                        type: 'warning',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
            });
        }
    }
}]);

app.controller("sortiStock", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.projectNames = [];
    $scope.Names = [];
    requete.getallstocksorti().then(function(datas) {
        $scope.Names = datas.data;
        for (var i=0; i < $scope.Names.length; i++) {
            $scope.projectNames.push($scope.Names[i].nom);
        }
    });
    $scope.stocksorti = {};
    $scope.stocksorti.nom = "";
    $scope.stocksorti.prix = "";
    $scope.stocksorti.nombre = "";
    $scope.stocksorti.nominp = "";
    $scope.montant = 0;
    $scope.stockinserer = [];
    $scope.maxnombre = 100;
    $scope.cherchprix = function() {
        if ($scope.stocksorti.nominp != "") {
            var stockprix = $scope.Names.filter((v) => {
                if (v.nom.indexOf($scope.stocksorti.nominp) > -1) {
                  return true;
                }
            });
            if (stockprix.length == 0) {
                $scope.stocksorti.prix = 0;
                $scope.stocksorti.nombre = 0;
                $scope.maxnombre = 100;
            }
            else{
                $scope.stocksorti.prix = stockprix[0].prix;
                $scope.stocksorti.nombre = parseInt(stockprix[0].quantite);
                $scope.maxnombre = parseInt(stockprix[0].quantite);
            }
        }
        else{
            $scope.stocksorti.prix = "";
            $scope.stocksorti.nombre = "";
        }
    }
    $('#nomp').autoComplete({
          minChars: 1,
          source: function(term, suggest){
              term = term.toLowerCase();
              var suggestions = [];
              for (var i=0; i < $scope.projectNames.length; i++)
                  if (~$scope.projectNames[i].toLowerCase().indexOf(term)) suggestions.push($scope.projectNames[i]);
              suggest(suggestions);
            }
    });
    $scope.enregistrestock = function(stocknew) {
        if (stocknew.nombre != "" && stocknew.nominp != "") {
            if ($scope.maxnombre < stocknew.nombre) {
                $.notify({
                title: "<strong>Stock insuiffisant</strong><br> ",
                message: ""
                }, {
                    type: 'warning',
                    placement: {
                        from: "top"
                    },
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                });
            }
            else{
                $scope.stockinserer.push({nom: stocknew.nominp, nombre: stocknew.nombre, prix: stocknew.prix});
                $scope.maxnombre = 100;
                $scope.montant += stocknew.prix * stocknew.nombre;
                $scope.Names = $scope.Names.filter((v) => {
                    if (v.nom.indexOf(stocknew.nominp) > -1) {
                      return false;
                    }
                    return true;
                });
                $scope.stocksorti.nominp = "";
                $scope.stocksorti.prix = "";
                $scope.stocksorti.nombre = "";
            }
        }
    }
    $scope.affprix = function() {
        var stockprix = $scope.Names.filter((v) => {
            if (v.nom.indexOf($scope.stocksorti.nom.nom) > -1) {
              return true;
            }
        });
        console.log($scope.stocksorti.nom.nom);
        $scope.stocksorti.prix = stockprix[0].prix;
        $scope.stocksorti.nombre = parseInt(stockprix[0].quantite);
        $scope.maxnombre = parseInt(stockprix[0].quantite);
        $scope.stocksorti.nominp = stockprix[0].nom;
    }
    $scope.modif = function(entre) {
        if (confirm("Voullez vous vraiment modifier cette entrez?")) {
            requete.getallstocksorti().then(function(datas) {
                $scope.Names = datas.data;
            });
            $scope.stockinserer = $scope.stockinserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.montant = $scope.montant - entre.nombre * entre.prix;
            $scope.stocksorti.nominp = entre.nom;
            $scope.stocksorti.prix = entre.prix;
            $scope.stocksorti.nombre = entre.nombre;
        }
    }
    $scope.supprime = function (entre) {
        if (confirm("Voullez vous vraiment supprimer cette entrez?")) {
            requete.getallstocksorti().then(function(datas) {
                $scope.Names = datas.data;
            });
            $scope.stockinserer = $scope.stockinserer.filter((v) => {
                if (v.$$hashKey.indexOf(entre.$$hashKey) > -1) {
                  return false;
                }
                return true;
            });
            $scope.montant = $scope.montant - entre.nombre * entre.prix;
        }
    }
    $scope.enregistrertou = function () {
        if (confirm("Ete vous sur de vouloir tous enregistrer?")) {
            var dataObj = {
                stock: $scope.stockinserer
            };
            requete.enregistreallstocksorti(dataObj).then(function(datas) {
                console.log(datas);
                if (datas.data.statue) {
                    //$scope.stockinserer = [];
                    $.notify({
                        title: "<strong>Vente</strong><br> ",
                        message: "Operation effectuer avec success"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                    var dataObj = {
                        vente: datas.data.vente_id,
                        stock: $scope.stockinserer
                    };
                    // if (confirm("Voullez vous sortir un bond de sorti?")) {
                    //     requete.sortirbon(dataObj).then(function(datas) {
                    //         window.open('assets\\bondsorti\\'+datas.data.lien, '_blank');
                    //     });
                    // }
                    $scope.stockinserer = [];
                }
                else{
                    $.notify({
                        title: "<strong>Nouvelle stock</strong><br> ",
                        message: "Une erreur s'est produit"
                    }, {
                        type: 'warning',
                        placement: {
                            from: "bottom"
                        },
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutDown'
                        },
                    });
                }
            });
        }
    }
}]);
app.controller("statistique", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.titrestatsorti = "Historique des stocks sorti";
    $scope.titrestatentrer = "Historique des stocks entrer";
    $scope.titrestatenstock = "Statistique des stocks";
    $scope.titrestatvendu = "Statistique des stocks vendu";
    $scope.item = {};
    $scope.item.statsorti = 1;
    $scope.item.statentrer = 1;
    $scope.lineChartLegendstatsorti = true;
    $scope.lineChartLegendstatentrer = true;
    $scope.doughnutChartLegendtitrestatenstock = true;
    $scope.doughnutChartLegendstatvendu = true;
    $scope.optionsdoughnut= {
        responsive: true,
        legend: {
          display: true,
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
    };
    $scope.optionsstat= {
        responsive: true,
        legend: {
          display: true,
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
    };
    requete.getstatsortijour().then(function(datas) {
        $scope.datastatsorti = datas.data.count;
        $scope.datastatsortiserie = datas.data.series;
        $scope.labelsstatsorti = datas.data.label;
    });
    requete.getstatentrerjour().then(function(datas) {
        $scope.datastatentrer = datas.data.count;
        $scope.datastatentrerserie = datas.data.series;
        $scope.labelsstatentrer = datas.data.label;
    });
    requete.getstatenstock().then(function(datas) {
        console.log(datas);
        $scope.doughnutChartDatatitrestatenstock = datas.data.count;
        $scope.doughnutChartLabelstitrestatenstock = datas.data.series;
    });
    requete.getstatvendu().then(function(datas) {
        $scope.doughnutChartDatastatvendu = datas.data.count;
        $scope.doughnutChartLabelsstatvendu = datas.data.series;
    });
    $scope.itemstatsorti = function() {
        if ($scope.item.statsorti == 1) {
            requete.getstatsortijour().then(function(datas) {
                $scope.datastatsorti = datas.data.count;
                $scope.datastatsortiserie = datas.data.series;
                $scope.labelsstatsorti = datas.data.label;
            });
        }
        else if($scope.item.statsorti == 2){
            requete.getstatsortimois().then(function(datas) {
                $scope.datastatsorti = datas.data.count;
                $scope.datastatsortiserie = datas.data.series;
                $scope.labelsstatsorti = datas.data.label;
            });
        }
    }
    $scope.itemstatentrer = function() {
        if ($scope.item.statentrer == 1) {
            requete.getstatentrerjour().then(function(datas) {
                $scope.datastatentrer = datas.data.count;
                $scope.datastatentrerserie = datas.data.series;
                $scope.labelsstatentrer = datas.data.label;
            });
        }
        else if($scope.item.statentrer == 2){
            requete.getstatentrermois().then(function(datas) {
                $scope.datastatentrer = datas.data.count;
                $scope.datastatentrerserie = datas.data.series;
                $scope.labelsstatentrer = datas.data.label;
            });
        }
    }
}]);
app.controller("mouvmt", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.active = "entrer";
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    $scope.queryentrer = {
        order: 'id',
        limit: 10,
        page: 1
    };
    $scope.menu = function(id) {
        if (id == 1) {
            $scope.active = "sorti";
        }
        else if(id == 2){
            $scope.active = "entrer";
        }
    };
    requete.getallstocksortifilter($scope.query).then(function(datas) {
         $scope.liststock = datas.data.stock;
         $scope.liststock.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
         console.log(datas);
    });
    requete.getallstockentrerfilter($scope.queryentrer).then(function(datas) {
         $scope.liststockentrer = datas.data.stock;
         $scope.liststockentrer.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
         console.log(datas);
    });
    $scope.stocksorti = function() {
        requete.getallstocksortifilter($scope.query).then(function(datas) {
             $scope.liststock = datas.data.stock;
             $scope.liststock.count = datas.data.count;
             $scope.$broadcast("rebuild:scrollbar");
        });
        $scope.promise = $timeout(function () {
        }, 2000);
    };
    $scope.stockentrer = function() {
        requete.getallstockentrerfilter($scope.queryentrer).then(function(datas) {
             $scope.liststockentrer = datas.data.stock;
             $scope.liststockentrer.count = datas.data.count;
             $scope.$broadcast("rebuild:scrollbar");
             $scope.promise = $timeout(function () {

             }, 2000);
        });
    };
    $scope.onKeystocksorti = function($event) {
        if ($scope.filtersorti != "") {
            requete.getallstocksortinofilter().then(function(datas) {
                $scope.liststock = datas.data.stock.filter((v) => {
                    if (v.date.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 || v.nom.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1  || v.user.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1) {
                      return true;
                    }
                });
                $scope.liststock.count = $scope.liststock.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
           requete.getallstocksortifilter($scope.query).then(function(datas) {
                 $scope.liststock = datas.data.stock;
                 $scope.liststock.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                 }, 2000);
            });
        }
    };
    $scope.onKeystockentrer = function($event) {
        if ($scope.filterentrer != "") {
            requete.getallstockentrernofilter().then(function(datas) {
                console.log(datas);
                $scope.liststockentrer = datas.data.stock.filter((v) => {
                    if (v.date.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1  || v.user.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 || v.nom.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststockentrer.count = $scope.liststockentrer.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
            requete.getallstockentrerfilter($scope.queryentrer).then(function(datas) {
                 $scope.liststockentrer = datas.data.stock;
                 $scope.liststockentrer.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                 }, 2000);
            });
        }
    };
}]);
app.controller("mouvepfini", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.active = "entrer";
    $scope.liststockentrer = [];
    $scope.queryentrer = {
        order: 'id',
        limit: 10,
        page: 1
    };
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    $scope.menu = function(id) {
        if (id == 1) {
            $scope.active = "sorti";
        }
        else if(id == 2){
            $scope.active = "entrer";
        }
    };
    requete.getallstockentrerfilterproduit($scope.queryentrer).then(function(datas) {
         $scope.liststockentrer = datas.data.stock;
         $scope.liststockentrer.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
         console.log(datas.data);
    });
    requete.getallstocksortifilterproduit($scope.query).then(function(datas) {
         $scope.liststock = datas.data.stock;
         $scope.liststock.count = datas.data.count;
         $scope.$broadcast("rebuild:scrollbar");
         $scope.promise = $timeout(function () {

         }, 1000);
    });
    $scope.onKeystockentrer = function($event) {
        if ($scope.filterentrer != "") {
            requete.getallstockentrernofilterproduit().then(function(datas) {
                $scope.liststockentrer = datas.data.stock.filter((v) => {
                    if (v.date.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1  || v.user.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 || v.nom.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filterentrer.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststockentrer.count = $scope.liststockentrer.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);
            });
        }
        else{
            requete.getallstockentrerfilterproduit($scope.queryentrer).then(function(datas) {
                 $scope.liststockentrer = datas.data.stock;
                 $scope.liststockentrer.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                 }, 2000);
            });

        }
    };
    $scope.onKeystocksorti = function($event) {
        if ($scope.filtersorti != "") {
            requete.getallstocksortinofilterproduit().then(function(datas) {
                $scope.liststock = datas.data.stock.filter((v) => {
                    if (v.date.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1  || v.user.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 || v.nom.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 || v.prix.toLowerCase().indexOf($scope.filtersorti.toLowerCase()) > -1 ) {
                      return true;
                    }
                });
                $scope.liststock.count = $scope.liststock.length;
                $scope.$broadcast("rebuild:scrollbar");
                $scope.promise = $timeout(function () {

                }, 1000);


            });
        }
        else{
            requete.getallstocksortifilterproduit($scope.queryentrer).then(function(datas) {
                 $scope.liststockentrer = datas.data.stock;
                 $scope.liststockentrer.count = datas.data.count;
                 $scope.$broadcast("rebuild:scrollbar");
                 $scope.promise = $timeout(function () {

                 }, 2000);
            });
        }
    };
}]);
app.controller("paramcount", ['$scope', '$http', 'requete', '$timeout', '$location', '$window', function($scope, $http, requete, $timeout, $location, $window) {
    $scope.user = {};
    requete.username().then(function(datas) {
        $scope.user.name = datas.data.username;
    });
    $scope.save = function(user) {
        if(user.newpassword != user.confirmationpassword){
            $.notify({
                title: "<strong>Nouveau mot de passe et confirmation mot de passe ne correspond pas</strong><br> ",
                message: ""
            }, {
                type: 'warning',
                placement: {
                    from: "top"
                },
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
            });
        }
        else{
            var objet = {
                username : user.name,
                password : user.confirmationpassword,
                passwordactuel : user.password
            }
            requete.profil(objet).then(function(datas) {
                if (datas.data.statue) {
                    $.notify({
                        title: "<strong>Profil</strong><br> ",
                        message: "Mise a jours effectuer avec success"
                    }, {
                        type: 'danger',
                        placement: {
                            from: "top"
                        },
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                    });
                }
                else{
                    $.notify({
                        title: "<strong>Mot de passe incorrecte</strong><br> ",
                        message: ""
                    }, {
                        type: 'warning',
                        placement: {
                            from: "top"
                        },
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                    });
                }
            });
        }
    }
}]);

})();