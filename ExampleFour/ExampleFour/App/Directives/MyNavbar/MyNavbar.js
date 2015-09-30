var App;
(function (App) {
    var Directives;
    (function (Directives) {
        "use strict";
        var MyNavbar = (function () {
            function MyNavbar() {
                this.Items = [
                    {
                        Text: "Home",
                        Link: "#/"
                    },
                    {
                        Text: "Attendees",
                        Link: "#/Attendees"
                    }
                ];
                this.OnClick = function (item) {
                };
            }
            MyNavbar.prototype.IsActive = function (item) {
                return (location.hash === item.Link) ? true : false;
            };
            return MyNavbar;
        })();
        Directives.MyNavbar = MyNavbar;
        angular.module(App.Config.Settings.AppName)
            .directive("myNavbar", function () {
            return {
                scope: {
                    AppName: '@?appName',
                    Items: '=?navItems',
                    OnClick: '&?'
                },
                controller: MyNavbar,
                controllerAs: "vm",
                bindToController: true,
                templateUrl: "App/Directives/MyNavbar/MyNavbar.html"
            };
        });
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=MyNavbar.js.map