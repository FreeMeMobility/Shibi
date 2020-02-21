import {From} from "./From";

export interface Context {
    from:           From;
    via:            null;
    to:             From;
    date:           number;
    dep:            boolean;
    products:       string[];
    walkSpeed:      string;
    laterContext:   string;
    earlierContext: string;
}
