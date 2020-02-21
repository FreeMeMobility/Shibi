import {Leg} from "./Leg";
import {Info} from "./Info";
import {Price} from "./Price";

export interface Message {
    type:    string;
    id:      string;
    legs:    Leg[];
    status:  string;
    borders: boolean;
    info:    Info;
    price:   Price;
}
