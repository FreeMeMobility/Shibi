import {From} from "./From";
import {Leg} from "./Leg";
import {StPublicLeg} from "./StPublicLeg";

export interface TPTTrip {
    id:                          string;
    from:                        From;
    to:                          From;
    legs:                        Leg[];
    fares:                       any;
    capacity:                    any;
    numChanges:                  number;
    lastPublicLegArrivalTime:    number;
    publicDuration:              number;
    travelable:                  boolean;
    firstDepartureTime:          number;
    firstPublicLeg:              StPublicLeg;
    firstPublicLegDepartureTime: number;
    lastArrivalTime:             number;
    lastPublicLeg:               StPublicLeg;
    duration:                    number;
    maxTime:                     number;
    minTime:                     number;
}
