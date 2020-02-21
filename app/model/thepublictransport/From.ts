export interface From {
    type:        string;
    id:          undefined | string;
    coord:       { [key: string]: number } | null;
    place:       null | string;
    name:        undefined | string;
    products:    string[] | null;
    lonAsDouble: number;
    latAsDouble: number;
    lonAs1E6:    number;
    latAs1E6:    number;
    identified:  boolean;
}
