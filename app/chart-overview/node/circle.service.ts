/**
 * Created by vanderauwermeulen on 9/05/2016.
 */

import { Injectable } from "@angular/core";
import {Circle} from "./circle";
import { Node } from "./node";
import {startWith} from "rxjs/operator/startWith";

@Injectable()
export class CircleService {

    node: Node;

    convert(circle: Circle, node: Node, nodeIndex: number) {
        //Default
        this.node = node;

        let startDegrees = this.getDegrees(circle.start, node.total);
        let endDegrees = this.getDegrees(circle.end, node.total);

        let startX = this.getStartXCoordinate(startDegrees);
        let startY = this.getStartYCoordinate(startDegrees);

        let endX = this.getEndXCoordinate(endDegrees, startX);
        let endY = this.getEndYCoordinate(endDegrees, startY);

        let largeArcFlag = (this.getPercentageOfCircle(circle) < 50) ? 0 : 1;
        let sweepFlag = (this.getPercentageOfCircle(circle) > 50) ? 0 : 1;

        //Path can't handle a full circle
        if(circle.start == 0 && circle.end == node.total){
            this.addFullCircle(circle);
        } else {
            circle.arc =
                "M " + node.x + " " + node.y + " " +
                "m " + startX + " " + startY + " " +
                "a " + node.radius + " " + node.radius + " 0 " + largeArcFlag + " " + 1 + " " + endX + " " + endY;
        }

        circle.stroke = "black";
        circle.linkAngle = this.getLinkAngle(startX, startY, endX, endY, circle);
    }

    getEndXCoordinate(percentage: number, startX: number) {
        return -startX + this.getStartXCoordinate(percentage);
    }

    getEndYCoordinate(percentage: number, startY: number) {
        return -startY + this.getStartYCoordinate(percentage);
    }

    getStartXCoordinate(percentage) {
        return Math.cos(percentage * Math.PI / 180.0) * this.node.radius;
    }

    getStartYCoordinate(percentage) {
        return -(Math.sin(percentage * Math.PI / 180.0) * this.node.radius);
    }

    getDegrees(part: number, total: number): number {
        //The 0° angle is represented above and we go clockwise
        //Because of sin and cos, we need to keep the 'normal' 0° angle on the right
        //Inside the circle range (%360) we set the 0° at 90° (+90) and transform the x/100 to x/360
        let canBeNegative = -(part/total * 360) + 90;
        canBeNegative = canBeNegative < 0 ? canBeNegative + 360 : canBeNegative;
        return canBeNegative % 360;
    }

    getPercentageOfCircle(circle: Circle): number {
        let part = -(circle.start - circle.end);
        return part/this.node.total*100;
    }

    addFullCircle(circle: Circle) {
        circle.arc =
            "M " + this.node.x + " " + this.node.y + " " +
            "m " + -this.node.radius + " 0 " +
            "a " + this.node.radius + " " + this.node.radius + " 0 1 0 " + (this.node.radius * 2) + " 0 " +
            "a " + this.node.radius + " " + this.node.radius + " 0 1 0 " + -(this.node.radius * 2) + " 0 ";
    }

    getLinkAngle(startX: number, startY: number, endX: number, endY: number, circle: Circle) {

        let middleX = startX + (endX / 2);
        let middleY = startY + (endY / 2);

        let rad = Math.atan2(-middleY, middleX);
        let angle = rad * (180 / Math.PI);

        //If angle is greater then 180 degrees, the middle is the opposite point
        let percentageOfCircle = this.getPercentageOfCircle(circle);
        if(percentageOfCircle >= 50) {
            angle = (angle > 0) ? angle + 180 : angle - 180;
        }
        //positive only
        angle = (angle + 720) % 360;
        return angle;
    }

    getRadius(node) {
        return node.rating * 10;
    }
}