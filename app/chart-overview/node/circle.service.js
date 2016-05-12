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
var CircleService = (function () {
    function CircleService() {
    }
    CircleService.prototype.convert = function (circle, node, nodeIndex) {
        //Default
        this.node = node;
        var startDegrees = this.getDegrees(circle.start, node.total);
        var endDegrees = this.getDegrees(circle.end, node.total);
        var startX = this.getStartXCoordinate(startDegrees);
        var startY = this.getStartYCoordinate(startDegrees);
        var endX = this.getEndXCoordinate(endDegrees, startX);
        var endY = this.getEndYCoordinate(endDegrees, startY);
        var largeArcFlag = (this.getPercentageOfCircle(circle) < 50) ? 0 : 1;
        var sweepFlag = (this.getPercentageOfCircle(circle) > 50) ? 0 : 1;
        //Path can't handle a full circle
        if (circle.start == 0 && circle.end == node.total) {
            this.addFullCircle(circle);
        }
        else {
            circle.arc =
                "M " + node.x + " " + node.y + " " +
                    "m " + startX + " " + startY + " " +
                    "a " + node.radius + " " + node.radius + " 0 " + largeArcFlag + " " + 1 + " " + endX + " " + endY;
        }
        circle.stroke = "black";
        circle.linkAngle = this.getLinkAngle(startX, startY, endX, endY, circle);
    };
    CircleService.prototype.getEndXCoordinate = function (percentage, startX) {
        return -startX + this.getStartXCoordinate(percentage);
    };
    CircleService.prototype.getEndYCoordinate = function (percentage, startY) {
        return -startY + this.getStartYCoordinate(percentage);
    };
    CircleService.prototype.getStartXCoordinate = function (percentage) {
        return Math.cos(percentage * Math.PI / 180.0) * this.node.radius;
    };
    CircleService.prototype.getStartYCoordinate = function (percentage) {
        return -(Math.sin(percentage * Math.PI / 180.0) * this.node.radius);
    };
    CircleService.prototype.getDegrees = function (part, total) {
        //The 0° angle is represented above and we go clockwise
        //Because of sin and cos, we need to keep the 'normal' 0° angle on the right
        //Inside the circle range (%360) we set the 0° at 90° (+90) and transform the x/100 to x/360
        var canBeNegative = -(part / total * 360) + 90;
        canBeNegative = canBeNegative < 0 ? canBeNegative + 360 : canBeNegative;
        return canBeNegative % 360;
    };
    CircleService.prototype.getPercentageOfCircle = function (circle) {
        var part = -(circle.start - circle.end);
        return part / this.node.total * 100;
    };
    CircleService.prototype.addFullCircle = function (circle) {
        circle.arc =
            "M " + this.node.x + " " + this.node.y + " " +
                "m " + -this.node.radius + " 0 " +
                "a " + this.node.radius + " " + this.node.radius + " 0 1 0 " + (this.node.radius * 2) + " 0 " +
                "a " + this.node.radius + " " + this.node.radius + " 0 1 0 " + -(this.node.radius * 2) + " 0 ";
    };
    CircleService.prototype.getLinkAngle = function (startX, startY, endX, endY, circle) {
        var middleX = startX + (endX / 2);
        var middleY = startY + (endY / 2);
        var rad = Math.atan2(-middleY, middleX);
        var angle = rad * (180 / Math.PI);
        //If angle is greater then 180 degrees, the middle is the opposite point
        var percentageOfCircle = this.getPercentageOfCircle(circle);
        if (percentageOfCircle >= 50) {
            angle = (angle > 0) ? angle + 180 : angle - 180;
        }
        //positive only
        angle = (angle + 720) % 360;
        return angle;
    };
    CircleService.prototype.getRadius = function (node) {
        return node.rating * 10;
    };
    CircleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CircleService);
    return CircleService;
})();
exports.CircleService = CircleService;
//# sourceMappingURL=circle.service.js.map