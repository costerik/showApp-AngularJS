
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("index");

    $stateProvider
        .state('hello', {
            url: "/hello",
            template: require("../views/hello.html"),
        })
        .state('about', {
            url: "/about",
            template: require("../views/about.html"),
        });
}

