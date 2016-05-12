/**
 * Created by vanderauwermeulen on 9/05/2016.
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
var LinkService = (function () {
    function LinkService() {
    }
    LinkService.prototype.link = function (node, circle, parentNode, globalTranslation) {
        if (!parentNode)
            return;
        var repulsionForNode = LinkService.minimumRepulsion;
        //Check if repulsion needs to be added
        if (parentNode.linkedAngles) {
            var amountOfPreviousLinkedAnglesTooClose = this.getAmountOfPreviousLinkAngleTooClose(circle, parentNode);
            repulsionForNode = amountOfPreviousLinkedAnglesTooClose ? amountOfPreviousLinkedAnglesTooClose * LinkService.minimumRepulsion : LinkService.minimumRepulsion;
        }
        var transformY = LinkService.getYCoordinate(node, circle, parentNode, repulsionForNode);
        var transformX = LinkService.getXCoordinate(node, circle, parentNode, repulsionForNode);
        //Add translation to node
        node.translateY = transformY;
        node.translateX = transformX;
        node.translate = "translate(" + node.translateX + " " + node.translateY + ")";
        circle.curve = this.getCurve(parentNode, node);
        //The absolute coordinates need to change too,
        //but only after the curve is added
        node.x = Math.round(node.x + transformX);
        node.y = Math.round(node.y + transformY);
        //If absolute position of a node is going out of window,
        //Set global translation
        if ((node.x - node.radius) < 0 || (node.y - node.radius) < 0) {
            globalTranslation.value += node.radius + 20;
            globalTranslation.svg = "translate(" + globalTranslation.value + "," + globalTranslation.value + ")";
        }
        //Evrytime a link is added to a parent node, keep track of the link angle on this parent node
        if (parentNode.linkedAngles) {
            parentNode.linkedAngles.push(circle.linkAngle);
        }
        else {
            parentNode.linkedAngles = [circle.linkAngle];
        }
    };
    LinkService.getYCoordinate = function (node, circle, parentNode, repulsion) {
        var difference = parentNode.y - node.y;
        //Sin is positive above, window is positive below
        return difference + -(Math.sin((circle.linkAngle + 180) * Math.PI / 180.0) * (parentNode.radius + node.radius + repulsion));
    };
    LinkService.getXCoordinate = function (node, circle, parentNode, repulsion) {
        var difference = parentNode.x - node.x;
        return difference + (Math.cos((circle.linkAngle + 180) * Math.PI / 180.0) * (parentNode.radius + node.radius + repulsion));
    };
    LinkService.prototype.getCurve = function (parentNode, node) {
        var parentX = this.getParentX(parentNode, node);
        var parentY = this.getParentY(parentNode, node);
        var M = "M " + parentX + " " + parentY + " ";
        var Q = "Q " + this.hop(node.x) + " " + this.hop(node.y) + " " +
            node.x + " " + node.y;
        return M + Q;
    };
    LinkService.prototype.getAmountOfPreviousLinkAngleTooClose = function (circle, parentNode) {
        var amount = 0;
        for (var i = 0, l = parentNode.linkedAngles.length; i < l; i++) {
            if (this.linkAngleIsTooClose(circle.linkAngle, parentNode.linkedAngles[i]))
                amount++;
        }
        return amount;
    };
    LinkService.prototype.linkAngleIsTooClose = function (circleAngle, oneOfTheParentNodesAngle) {
        return (circleAngle - oneOfTheParentNodesAngle) < LinkService.acceptableRange &&
            (circleAngle - oneOfTheParentNodesAngle) > -LinkService.acceptableRange;
    };
    LinkService.prototype.hop = function (coordinate) {
        return coordinate;
    };
    LinkService.prototype.getParentY = function (parentNode, node) {
        return parentNode.y - node.translateY;
    };
    LinkService.prototype.getParentX = function (parentNode, node) {
        return parentNode.x - node.translateX;
    };
    LinkService.getGlobalTranslation = function () {
        return LinkService.globalTranslation;
    };
    LinkService.setGlobalTranslation = function (val) {
        LinkService.globalTranslation = val;
    };
    LinkService.minimumRepulsion = 100;
    LinkService.acceptableRange = 60;
    LinkService.globalTranslation = 0;
    LinkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LinkService);
    return LinkService;
})();
exports.LinkService = LinkService;
//# sourceMappingURL=link.service.js.map