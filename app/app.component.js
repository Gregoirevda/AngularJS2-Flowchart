/**
 * Created by vanderauwermeulen on 5/05/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var chart_overview_component_1 = require("./chart-overview/chart-overview.component");
/*@RouteConfig([
    {
        path : '/heroes',
        name : "Heroes",
        component : HeroesComponent
    },
    {
        path : "/dashboard",
        name : "Dashboard",
        component : DashboardComponent,
        useAsDefault : true
    },
    {
        path : "/detail/:id",
        name : "HeroDetail",
        component : HeroDetailComponent
    }
])*/
var AppComponent = (function () {
    function AppComponent() {
        this.nodes = [
            {
                id: 1,
                rating: 1,
                total: 1000,
                links: []
            },
            {
                id: 2,
                rating: 4,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 0,
                        end: 250
                    }
                ]
            },
            {
                id: 3,
                rating: 1,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 0,
                        end: 500
                    }
                ]
            },
            {
                id: 4,
                rating: 4,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 0,
                        end: 750
                    }
                ]
            },
            {
                id: 5,
                rating: 4,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 0,
                        end: 1000
                    }
                ]
            },
            {
                id: 6,
                rating: 4,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 250,
                        end: 500
                    }
                ]
            },
            {
                id: 7,
                rating: 4,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 300,
                        end: 400
                    }
                ]
            },
            {
                id: 8,
                rating: 2,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 500,
                        end: 750
                    }
                ]
            },
            {
                id: 9,
                rating: 5,
                total: 1000,
                links: [
                    {
                        id: 1,
                        start: 750,
                        end: 1000
                    }
                ]
            },
            {
                id: 10,
                rating: 5,
                total: 1000,
                links: [
                    {
                        id: 9,
                        start: 750,
                        end: 1000
                    }
                ]
            },
            {
                id: 11,
                rating: 1,
                total: 1000,
                links: [
                    {
                        id: 9,
                        start: 500,
                        end: 750
                    }
                ]
            } /*,
            {
                id : 5,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 500
                    }
                ]
            },
            {
                id : 6,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 499
                    }
                ]
            },
            {
                id : 7,
                rating : 100,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 333
                    }
                ]
            },
            {
                id : 8,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 320
                    }
                ]
            },
            {
                id : 9,
                rating : 50,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 250
                    }
                ]
            },
            {
                id : 10,
                rating : 75,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 249
                    }
                ]
            },
            {
                id : 11,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 200
                    }
                ]
            },
            {
                id : 12,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 100
                    }
                ]
            },
            {
                id : 13,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 10
                    }
                ]
            },
            {
                id : 14,
                rating : 25,
                total: 1000,
                links : [
                    {
                        id : 1,
                        start : 0,
                        end : 1
                    },
                    {
                        id : 2,
                        start : 100,
                        end : 300
                    },
                    {
                        id : 3,
                        start : 500,
                        end : 800
                    }
                ]
            }*/
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n        <chart-overview [nodes]=\"nodes\"> </chart-overview>\n    ",
            directives: [chart_overview_component_1.ChartOverviewComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map