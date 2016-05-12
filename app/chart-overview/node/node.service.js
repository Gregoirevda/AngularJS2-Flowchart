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
var circle_service_1 = require("./circle.service");
var link_service_1 = require("./link.service");
var NodeService = (function () {
    function NodeService(circleService, linkService) {
        this.circleService = circleService;
        this.linkService = linkService;
    }
    NodeService.prototype.convert = function (nodes, globalTranslation) {
        for (var i = 0; i < nodes.length; i++) {
            //By default we need an entire circle
            this.initializeNode(nodes[i], i);
            for (var j = 0; j < nodes[i].links.length; j++) {
                //Circles needs to know the total length of the song, the rating (radius), number of link (position)
                this.circleService.convert(nodes[i].links[j], nodes[i], i);
                this.linkService.link(nodes[i], nodes[i].links[j], this.getNodeToLinkTo(nodes[i].links[j], nodes), globalTranslation);
            }
        }
    };
    NodeService.prototype.initializeNode = function (node, index) {
        node.radius = node.rating * 10;
        if (index == 0) {
            node.x = 300;
            node.y = 200;
        }
        else {
            node.x = 200;
            node.y = 200;
        }
        //A node has by default a full circle
        this.addFullCircle(node);
    };
    NodeService.prototype.addFullCircle = function (node) {
        node.arc =
            "M " + node.x + " " + node.y + " " +
                "m " + -node.radius + " 0 " +
                "a " + node.radius + " " + node.radius + " 0 1 0 " + (node.radius * 2) + " 0 " +
                "a " + node.radius + " " + node.radius + " 0 1 0 " + -(node.radius * 2) + " 0 ";
        //Color
        node.stroke = "red";
    };
    NodeService.prototype.getNodeToLinkTo = function (link, nodes) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (nodes[i].id == link.id)
                return nodes[i];
        }
    };
    //Start at the center of the screen
    NodeService.startX = $(window).width() / 2;
    NodeService.startY = $(window).height() / 2;
    NodeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [circle_service_1.CircleService, link_service_1.LinkService])
    ], NodeService);
    return NodeService;
})();
exports.NodeService = NodeService;
//# sourceMappingURL=node.service.js.map