var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var Resource = (function () {
            function Resource($resource) {
                this.$resource = $resource;
            }
            Resource.prototype.get = function (service, params, success) {
                if (params === void 0) { params = {}; }
                return this.getResource(service).get(params, success);
            };
            Resource.prototype.query = function (service, params, success) {
                if (params === void 0) { params = {}; }
                return this.getResource(service).query(params, success);
            };
            Resource.prototype.getResource = function (service) {
                if (Resource.requestCount === 0)
                    $(".my-spinner").show();
                Resource.requestCount++;
                return this.$resource(service, {}, {
                    "get": {
                        method: "GET",
                        interceptor: {
                            responseError: this.onErrorResponse,
                            response: this.onSucessReponse
                        }
                    },
                    "query": {
                        method: "GET", isArray: true,
                        interceptor: {
                            responseError: this.onErrorResponse,
                            response: this.onSucessReponse
                        }
                    }
                });
            };
            Resource.prototype.onSucessReponse = function (response) {
                Resource.requestCount--;
                if (Resource.requestCount <= 0) {
                    $(".my-spinner").hide();
                }
                return response.data;
            };
            Resource.prototype.onErrorResponse = function (response) {
                Resource.requestCount--;
                if (Resource.requestCount <= 0) {
                    $(".my-spinner").hide();
                }
                alert("Hubo error");
            };
            Resource.requestCount = 0;
            return Resource;
        })();
        Services.Resource = Resource;
        function ResourceFactory($resource) {
            return new Resource($resource);
        }
        Services.ResourceFactory = ResourceFactory;
        angular.module(App.Config.Settings.AppName)
            .factory("Resource", ResourceFactory);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=Resource.js.map