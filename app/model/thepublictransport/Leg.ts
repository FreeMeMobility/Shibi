import {From} from "./From";
import {Line} from "./Line";
import {Stop} from "./Stop";

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
    departurePosition?:          null;
    departurePositionPredicted?: boolean;
    arrivalTimePredicted?:       boolean;
    arrivalPosition?:            null;
    arrivalPositionPredicted?:   boolean;
    departureDelay?:             number;
    arrivalDelay?:               number;
    maxTime:                     number;
    minTime:                     number;
    type?:                       string;
    min?:                        number;
    distance?:                   number;
}
