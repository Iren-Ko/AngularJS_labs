var app = angular.module('lab6', ['ngRoute']);


// routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
        })
        .when('/persons', {
            templateUrl: 'views/persons.html',
            controller: 'personsController'

        })
        .when('/orders', {
            templateUrl: 'views/orders.html',
            controller: 'ordersController'
        })
        .otherwise({
            template: '<span style="color: red">Ошибка 404. Страница не найдена.</span>'
        });
});

app.controller('personsController', function ($scope) {

    $scope.persons = [
        { name: 'User 1' },
        { name: 'User 2' },
        { name: 'User 3' },
        { name: 'User 4' },
        { name: 'User 5' },
        { name: 'User 6' },
        { name: 'User 7' }
    ]
});

app.controller('ordersController', function ($scope) {

    $scope.orders = [
        { name: 'Изумруд', amount: 154, price: 15445 },
        { name: 'Алмаз', amount: 1258, price: 418 },
        { name: 'Топаз', amount: 1254, price: 1485 },
        { name: 'Циркон', amount: 12, price: 7854 },
        { name: 'Аметист', amount: 48, price: 4851 },
        { name: 'Цитрин', amount: 785, price: 12445 },
        { name: 'Жадеит', amount: 456, price: 18754 },
        { name: 'Опал', amount: 123, price: 15478 },
        { name: 'Перидот', amount: 10258, price: 1205 },
        { name: 'Кварц', amount: 1498, price: 2584 }
    ];
});