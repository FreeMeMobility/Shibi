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
    message:                    string;
    departureTimePredicted:     boolean;
    departureTime:              number;
    arrivalTime:                number;
    departurePosition:          string;
    departurePositionPredicted: boolean;
    arrivalTimePredicted:       boolean;
    arrivalPosition:            string;
    arrivalPositionPredicted:   boolean;
    departureDelay:             number | null;
    arrivalDelay:               number | null;
    maxTime:                    number;
    minTime:                    number;
}
