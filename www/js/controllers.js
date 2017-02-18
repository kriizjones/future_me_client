angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate, $timeout, $state) {

    var cardTypes = [{
      id: 1,
      title: "bagare",
      image: "Bagare.png"
    },
      {
        id: 2,
        title: "sjuksköterska",
        image: "Sjuksköterska.png"
      },
      {
        id: 3,
        title: "möbeldesigner",
        image: "Mobeldes.png"
      },
      {
        id: 4,
        title: "läkare",
        image: "Sjuksköterska.png"
      }
    ];

    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0)
    };

    $scope.cardDestroyed = function (index) {
      $scope.cards.active.splice(index, 1);
      if ($scope.cards.active.length === 0)
        $scope.refreshCards();
    };

    $scope.$on('removeCard', function(event, element, card) {
      $scope.cards.active.splice($scope.cards.active.indexOf(card), 0);
    });

    $scope.addCard = function () {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    };

    $scope.refreshCards = function () {
      $scope.cards.active = null;
      $timeout(function () {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
      });
    };

    $scope.cardSwipedLeft = function (index) {
    };

    $scope.cardSwipedRight = function (index) {
    };
  })

  .controller('cardCtrl', function ($scope, TDCardDelegate) {
  })

  .controller('descriptionCtrl', function ($scope, $ionicHistory) {
    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  })

  .controller('pathCtrl', function ($scope, $ionicHistory) {
    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  })

  .controller('libraryController', function ($scope) {

  });
