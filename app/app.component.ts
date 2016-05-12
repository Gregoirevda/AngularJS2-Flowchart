/**
 * Created by vanderauwermeulen on 5/05/2016.
 */

import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import {ChartOverviewComponent} from "./chart-overview/chart-overview.component";
import { Node } from "./chart-overview/node/node";
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
@Component({
    selector : "my-app",
    template : `
        <chart-overview [nodes]="nodes"> </chart-overview>
    `,
    directives : [ChartOverviewComponent]
})
export class AppComponent {
    nodes: Node[] = [
        {
            id : 1,
            rating : 1,
            total: 1000,
            links : [
            ]
        },
        {
            id : 2,
            rating : 4,
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
            id : 3,
            rating : 1,
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
            id : 4,
            rating : 4,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 0,
                    end : 750
                }
            ]
        },
        {
            id : 5,
            rating : 4,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 0,
                    end : 1000
                }
            ]
        },
        {
            id : 6,
            rating : 4,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 250,
                    end : 500
                }
            ]
        },
        {
            id : 7,
            rating : 4,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 300,
                    end : 400
                }
            ]
        },
        {
            id : 8,
            rating : 2,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 500,
                    end : 750
                }
            ]
        },
        {
            id : 9,
            rating : 5,
            total: 1000,
            links : [
                {
                    id : 1,
                    start : 750,
                    end : 1000
                }
            ]
        },
        {
            id : 10,
            rating : 5,
            total: 1000,
            links : [
                {
                    id : 9,
                    start : 750,
                    end : 1000
                }
            ]
        },
        {
            id : 11,
            rating : 1,
            total: 1000,
            links : [
                {
                    id : 9,
                    start : 500,
                    end : 750
                }
            ]
        }/*,
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