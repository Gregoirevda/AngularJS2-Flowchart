import {Circle} from "./circle";


export interface Node {
    id: number;
    rating: number;
    links: Circle[];
    total: number;
    x?: number;
    y?: number;
    radius?: number;
    arc?: string;
    stroke?: string;
    translate?: string;
    translateX?: number;
    translateY?: number;
    linkedAngles?: [number];
}