/**
 * Created by vanderauwermeulen on 6/05/2016.
 */

import { Injectable } from "@angular/core";
import {NodeCircleComponent} from "./node-circle.component";
import {Node} from "./node";
import {Circle} from "./circle";
import {CircleService} from "./circle.service";
import {LinkService} from "./link.service";

declare var $: any;

@Injectable()
export class NodeService {
    //Start at the center of the screen
    static startX = $(window).width() / 2;
    static startY = $(window).height() / 2;

    constructor(
        private circleService: CircleService,
        private linkService: LinkService
    ) {}

    convert(nodes: Node[], globalTranslation) {
        for(let i = 0; i < nodes.length; i++){
            //By default we need an entire circle
            this.initializeNode(nodes[i], i);
            for(let j = 0; j < nodes[i].links.length; j++){
                //Circles needs to know the total length of the song, the rating (radius), number of link (position)
                this.circleService.convert(nodes[i].links[j], nodes[i], i);
                this.linkService.link(nodes[i], nodes[i].links[j], this.getNodeToLinkTo(nodes[i].links[j], nodes), globalTranslation);
            }
        }
    }

    initializeNode(node, index) {
        node.radius = node.rating * 10;

        if(index == 0){
            node.x = 300;
            node.y = 200;
        } else {
            node.x = 200;
            node.y = 200;
        }
        //A node has by default a full circle
        this.addFullCircle(node);
    }

    addFullCircle(node: Node) {
        node.arc =
            "M " + node.x + " " + node.y + " " +
            "m " + -node.radius + " 0 " +
            "a " + node.radius + " " + node.radius + " 0 1 0 " + (node.radius * 2) + " 0 " +
            "a " + node.radius + " " + node.radius + " 0 1 0 " + -(node.radius * 2) + " 0 ";
        //Color
        node.stroke = "red";
    }

    getNodeToLinkTo(link: Circle, nodes: Node[]): Node {
        for(var i = 0, l = nodes.length; i < l; i++){
            if(nodes[i].id == link.id)
                return nodes[i];
        }
    }

}