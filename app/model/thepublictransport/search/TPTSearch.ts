export interface TPTSearch {
    header:    Header;
    status:    string;
    locations: Location[];
}

export interface Header {
    network:       string;
    serverProduct: string;
    serverVersion: string;
    serverName:    string;
    serverTime:    number;
    context:       null;
}

export interface Location {
    type:        string;
    id:          string;
    coord:       { [key: string]: number };
    place:       null;
    name:        string;
    products:    string[];
    lonAsDouble: number;
    latAsDouble: number;
    lonAs1E6:    number;
    latAs1E6:    number;
    identified:  boolean;
}
