module App.Directives {
    "use strict";

    export class MyNavbar {
        AppName: string;
        Items;
        OnClick;

        constructor() {
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

            this.OnClick = (item) => {
            }
        }

        public IsActive(item): boolean {
            return (location.hash === item.Link) ? true : false;
        }
    }

    angular.module(App.Config.Settings.AppName)
        .directive("myNavbar", () => {
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
            }
        });
} 