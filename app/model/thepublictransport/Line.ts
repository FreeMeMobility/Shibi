import {Style} from "./Style";

export interface Line {
    id:      string;
    network: string;
    product: string;
    label:   string;
    name:    string;
    style:   Style;
    attrs:   string;
    message: string;
}
