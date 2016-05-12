/**
 * Created by vanderauwermeulen on 6/05/2016.
 */

import { Component, Input, OnInit } from "@angular/core";
import {NodeService} from "./node/node.service";
import {Node} from "./node/node";
import {CircleService} from "./node/circle.service";
import {LinkService} from "./node/link.service";

@Component({
    selector : "chart-overview",
    template : `
        <svg style="width: 100%; height: 100%;">
        <g [attr.transform]="globalTranslation.svg">
            <g *ngFor="let node of nodes" [attr.transform]="node.translate" fill="transparent" stroke-width="10">

                <path [attr.d]="node.arc" [attr.stroke]="node.stroke"> </path>

                 <g *ngFor="let link of node.links">
                    <path [attr.d]="link.arc" [attr.stroke]="link.stroke"> </path>
                    <path [attr.d]="link.curve" stroke="black" stroke-width="1" fill="transparent"> </path>
                 </g>

                 <path [attr.d]="node.arc" fill="white">  </path>

            </g>

            <!--<g *ngFor="let node of nodes">-->
                <!--<text [attr.x]="node.x" [attr.y]="node.y" fill="black"> {{ node.x  }} &nbsp; {{ node.y }}  </text>-->
            <!--</g>-->
        </g>
        </svg>
    `,
    providers : [NodeService, CircleService, LinkService]
})
export class ChartOverviewComponent implements OnInit{
    @Input()
    nodes:  Node[];
    globalTranslation = {
        value : 0,
        svg : "translate(0,0)"
    };

    constructor(
        private nodeService: NodeService,
        private linkService: LinkService
    ) { }

    ngOnInit() {
        this.nodeService.convert(this.nodes, this.globalTranslation);
    }

}