var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var CommonResource = (function () {
            function CommonResource($resource) {
                this.$resource = $resource;
            }
            CommonResource.prototype.get = function (service, params, success) {
                if (params === void 0) { params = {}; }
            };
            CommonResource.prototype.query = function (service, params, success) {
                if (params === void 0) { params = {}; }
            };
            CommonResource.prototype.getResource = function (service) {
                if (CommonResource.requestCount === 0)
                    $(".my-spinner").show();
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
            CommonResource.prototype.onSucessReponse = function (response) {
                CommonResource.requestCount--;
                if (CommonResource.requestCount <= 0) {
                    $(".my-spinner").hide();
                }
                return response.data;
            };
            CommonResource.prototype.onErrorResponse = function (response) {
                CommonResource.requestCount--;
                if (CommonResource.requestCount <= 0) {
                    $(".my-spinner").hide();
                }
                alert("Hubo error");
            };
            CommonResource.requestCount = 0;
            return CommonResource;
        })();
        Services.CommonResource = CommonResource;
        function AppResourceFactory($resource) {
            return new CommonResource($resource);
        }
        Services.AppResourceFactory = AppResourceFactory;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=CommonResource.js.map