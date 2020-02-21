import {From} from "./From";
import {Line} from "./Line";
import {Stop} from "./Stop";

export interface StPublicLeg {
    departure:                  From;
    arrival:                    From;
    line:                       Line;
    destination:                From;
    departureStop:              Stop;
    arrivalStop:                Stop;
    intermediateStops:          Stop[];
    message:                    null;
    departureTimePredicted:     boolean;
    departureTime:              number;
    arrivalTime:                number;
    departurePosition:          null;
    departurePositionPredicted: boolean;
    arrivalTimePredicted:       boolean;
    arrivalPosition:            null;
    arrivalPositionPredicted:   boolean;
    departureDelay:             null;
    arrivalDelay:               null;
    maxTime:                    number;
    minTime:                    number;
}
