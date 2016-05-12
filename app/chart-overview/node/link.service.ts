/**
 * Created by vanderauwermeulen on 9/05/2016.
 */

import { Injectable } from "@angular/core";
import { Node } from "./node";
import {Circle} from "./circle";

@Injectable()
export class LinkService {

    static minimumRepulsion = 100;
    static acceptableRange = 60;
    static globalTranslation = 0;

    link(node: Node, circle: Circle, parentNode: Node, globalTranslation) {
        if(!parentNode) return;

        let repulsionForNode = LinkService.minimumRepulsion;

        //Check if repulsion needs to be added
        if(parentNode.linkedAngles){
            let amountOfPreviousLinkedAnglesTooClose = this.getAmountOfPreviousLinkAngleTooClose(circle, parentNode);
            repulsionForNode = amountOfPreviousLinkedAnglesTooClose ? amountOfPreviousLinkedAnglesTooClose * LinkService.minimumRepulsion : LinkService.minimumRepulsion;
        }

        let transformY = LinkService.getYCoordinate(node, circle, parentNode, repulsionForNode);
        let transformX = LinkService.getXCoordinate(node, circle, parentNode, repulsionForNode);
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
        if((node.x - node.radius) < 0 || (node.y - node.radius) < 0){
            globalTranslation.value += node.radius + 20;
            globalTranslation.svg = "translate(" + globalTranslation.value + "," + globalTranslation.value + ")";
        }

        //Evrytime a link is added to a parent node, keep track of the link angle on this parent node
        if(parentNode.linkedAngles){
            parentNode.linkedAngles.push(circle.linkAngle);
        } else {
            parentNode.linkedAngles = [circle.linkAngle];
        }
    }

    static getYCoordinate(node: Node, circle: Circle, parentNode: Node, repulsion): number {
        let difference = parentNode.y - node.y;
        //Sin is positive above, window is positive below
        return difference + -(Math.sin((circle.linkAngle + 180) * Math.PI / 180.0) * (parentNode.radius  + node.radius + repulsion));
    }

    static getXCoordinate(node: Node, circle: Circle, parentNode: Node, repulsion): number {
        let difference = parentNode.x - node.x;
        return difference + (Math.cos((circle.linkAngle + 180) * Math.PI / 180.0) * (parentNode.radius  + node.radius + repulsion));
    }


    getCurve(parentNode, node) {
        let parentX = this.getParentX(parentNode, node);
        let parentY = this.getParentY(parentNode, node);
        let M = "M " + parentX + " " + parentY + " ";
        let Q = "Q " + this.hop(node.x) + " " + this.hop(node.y) + " " +
            node.x + " " + node.y;
        return M  + Q;
    }

    getAmountOfPreviousLinkAngleTooClose(circle, parentNode) {
        let amount = 0;
        for(let i = 0, l = parentNode.linkedAngles.length; i < l; i++){
            if(this.linkAngleIsTooClose(circle.linkAngle, parentNode.linkedAngles[i]))
                amount++;
        }
        return amount;
    }

    linkAngleIsTooClose(circleAngle, oneOfTheParentNodesAngle) {
        return (circleAngle - oneOfTheParentNodesAngle) < LinkService.acceptableRange &&
            (circleAngle - oneOfTheParentNodesAngle) > -LinkService.acceptableRange;
    }

    hop(coordinate){
        return coordinate;
    }

    getParentY(parentNode, node) {
        return parentNode.y - node.translateY;
    }

    getParentX(parentNode, node) {
        return parentNode.x - node.translateX;
    }

    static getGlobalTranslation() {
        return LinkService.globalTranslation;
    }

    static setGlobalTranslation(val) {
        LinkService.globalTranslation = val;
    }

}