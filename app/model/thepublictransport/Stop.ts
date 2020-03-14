import {From} from "./From";

export interface Stop {
    location:                   From;
    plannedArrivalTime:         number | null;
    predictedArrivalTime:       null;
    plannedArrivalPosition:     null;
    predictedArrivalPosition:   null;
    arrivalCancelled:           boolean;
    plannedDepartureTime:       number | null;
    predictedDepartureTime:     null;
    plannedDeparturePosition:   null;
    predictedDeparturePosition: null;
    departureCancelled:         boolean;
    departureTimePredicted:     boolean;
    departureTime:              number | null;
    arrivalTime:                number | null;
    departurePosition:          null;
    departurePositionPredicted: boolean;
    arrivalTimePredicted:       boolean;
    arrivalPosition:            null;
    arrivalPositionPredicted:   boolean;
    departureDelay:             number | null;
    arrivalDelay:               number | null;
    maxTime:                    number | null;
    minTime:                    number | null;
}
