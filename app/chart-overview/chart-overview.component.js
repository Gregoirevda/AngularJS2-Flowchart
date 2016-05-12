/**
 * Created by vanderauwermeulen on 6/05/2016.
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
var node_service_1 = require("./node/node.service");
var circle_service_1 = require("./node/circle.service");
var link_service_1 = require("./node/link.service");
var ChartOverviewComponent = (function () {
    function ChartOverviewComponent(nodeService, linkService) {
        this.nodeService = nodeService;
        this.linkService = linkService;
        this.globalTranslation = {
            value: 0,
            svg: "translate(0,0)"
        };
    }
    ChartOverviewComponent.prototype.ngOnInit = function () {
        this.nodeService.convert(this.nodes, this.globalTranslation);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartOverviewComponent.prototype, "nodes", void 0);
    ChartOverviewComponent = __decorate([
        core_1.Component({
            selector: "chart-overview",
            template: "\n        <svg style=\"width: 100%; height: 100%;\">\n        <g [attr.transform]=\"globalTranslation.svg\">\n            <g *ngFor=\"let node of nodes\" [attr.transform]=\"node.translate\" fill=\"transparent\" stroke-width=\"10\">\n\n                <path [attr.d]=\"node.arc\" [attr.stroke]=\"node.stroke\"> </path>\n\n                 <g *ngFor=\"let link of node.links\">\n                    <path [attr.d]=\"link.arc\" [attr.stroke]=\"link.stroke\"> </path>\n                    <path [attr.d]=\"link.curve\" stroke=\"black\" stroke-width=\"1\" fill=\"transparent\"> </path>\n                 </g>\n\n                 <path [attr.d]=\"node.arc\" fill=\"white\">  </path>\n\n            </g>\n\n            <!--<g *ngFor=\"let node of nodes\">-->\n                <!--<text [attr.x]=\"node.x\" [attr.y]=\"node.y\" fill=\"black\"> {{ node.x  }} &nbsp; {{ node.y }}  </text>-->\n            <!--</g>-->\n        </g>\n        </svg>\n    ",
            providers: [node_service_1.NodeService, circle_service_1.CircleService, link_service_1.LinkService]
        }), 
        __metadata('design:paramtypes', [node_service_1.NodeService, link_service_1.LinkService])
    ], ChartOverviewComponent);
    return ChartOverviewComponent;
})();
exports.ChartOverviewComponent = ChartOverviewComponent;
//# sourceMappingURL=chart-overview.component.js.map