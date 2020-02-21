import {Destination} from "./Destination";
import {Operator} from "./Operator";

export interface Leg {
    origin:      Destination;
    destination: Destination;
    departure:   Date;
    arrival:     Date;
    hint:        null;
    operator:    Operator;
    mode:        string;
    public:      boolean;
}
