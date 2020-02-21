import {Header} from "./Header";
import {From} from "./From";
import {Context} from "./Context";
import {TPTTrip} from "./TPTTrip";

export interface ThePublicTransport {
    header:  Header;
    status:  string;
    from:    From;
    to:      From;
    context: Context;
    trips:   TPTTrip[];
}
