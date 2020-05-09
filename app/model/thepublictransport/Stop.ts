import {From} from "./From";

export interface Stop {
    location:                   From;
    plannedArrivalTime:         number | null;
    predictedArrivalTime:       number | null;
    plannedArrivalPosition:     string;
    predictedArrivalPosition:   string;
    arrivalCancelled:           boolean;
    plannedDepartureTime:       number | null;
    predictedDepartureTime:     string;
    plannedDeparturePosition:   string;
    predictedDeparturePosition: boolean;
    departureCancelled:         boolean;
    departureTimePredicted:     boolean;
    departureTime:              number | null;
    arrivalTime:                number | null;
    departurePosition:          string;
    departurePositionPredicted: boolean;
    arrivalTimePredicted:       boolean;
    arrivalPosition:            string;
    arrivalPositionPredicted:   boolean;
    departureDelay:             number | null;
    arrivalDelay:               number | null;
    maxTime:                    number | null;
    minTime:                    number | null;
}
