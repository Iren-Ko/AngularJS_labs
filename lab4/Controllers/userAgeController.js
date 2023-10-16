angular.module('ageApp', []).controller('userAgeController', function ($scope) {

    // Высчитываем возраст пользователя исходя из введенной даты рождения
    $scope.userAge = function () {

        let age = new Date().getFullYear() - $scope.userBirthYear.getFullYear();

        return age == 1 ? age + ' year' : age + ' years';
    }

    // Высчитываем год рождения пользователя исходя из введенного возраста
    $scope.userBirthYear = function () {

        let year = new Date().getFullYear() - $scope.userInputAge;

        return isNaN(year) ? '...' : year;
    }
});
