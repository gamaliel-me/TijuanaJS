module App.Services {
    "use strict";

    export class Resource {
        static requestCount: number = 0;

        constructor(private $resource: ng.resource.IResourceService) {
        }

        public get(service: string, params = {}, success?: Function): any {
            return this.getResource(service).get(params, success);
        }

        public query(service: string, params = {}, success?: Function): any {
            return this.getResource(service).query(params, success);
        }

        private getResource(service: string): any {
            if (Resource.requestCount === 0) $(".my-spinner").show();
            Resource.requestCount++;
            return this.$resource(service, {},
                {
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
        }

        public onSucessReponse(response: any): any {
            Resource.requestCount--;
            if (Resource.requestCount <= 0) {
                $(".my-spinner").hide();
            }
            return response.data;
        }

        public onErrorResponse(response: any): void {
            Resource.requestCount--;
            if (Resource.requestCount <= 0) {
                $(".my-spinner").hide();
            }
            alert("Hubo error");
        }
    }
    export function ResourceFactory($resource: ng.resource.IResourceService): any {
        return new Resource($resource);
    }

    angular.module(App.Config.Settings.AppName)
        .factory("Resource", ResourceFactory);
}