import {Waypoint} from "./Waypoint";
import {Price} from "./Price";
import {Vehicle} from "./Vehicle";

export interface BlaTrip {
    link:                string;
    waypoints:           Waypoint[];
    price:               Price;
    vehicle:             Vehicle;
    distance_in_meters:  number;
    duration_in_seconds: number;
}
