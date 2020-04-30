import {SearchInfo} from "./SearchInfo";
import {BlaTrip} from "./BlaTrip";

export interface BlaBlaCarData {
    link:        string;
    search_info: SearchInfo;
    trips:       BlaTrip[];
    next_cursor: string;
}
