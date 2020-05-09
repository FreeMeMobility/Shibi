import {From} from "./From";
import {Line} from "./Line";
import {Stop} from "./Stop";
import {Position} from "./Position";

export interface Leg {
    departure:                   From;
    arrival:                     From;
    line?:                       Line;
    destination?:                From;
    departureStop?:              Stop;
    arrivalStop?:                Stop;
    intermediateStops?:          Stop[];
    message?:                    string;
    departureTimePredicted?:     boolean;
    departureTime:               number;
    arrivalTime:                 number;
    departurePosition?:          Position | null;
    departurePositionPredicted?: boolean;
    arrivalTimePredicted?:       boolean;
    arrivalPosition?:            Position | null;
    arrivalPositionPredicted?:   boolean;
    departureDelay?:             number;
    arrivalDelay?:               number;
    maxTime:                     number;
    minTime:                     number;
    type?:                       string;
    min?:                        number;
    distance?:                   number;
}
