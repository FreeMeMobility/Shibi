export interface Entry {
    id:             string;
    url:            string;
    startID:        string;
    startloc:       string;
    startcoord:     string;
    goalID:         string;
    goalloc:        string;
    goalcoord:      string;
    stopovernames:  any[];
    stopovercoords: any[];
    creationdate:   Date;
    lastupdate:     Date;
    type:           string;
    regulary:       string;
    username:       string;
    imgUser:        string;
    byTrain:        string;
    distToStart:    number;
    distToGoal:     number;
    mobileHash?:    string;
    emailHash:      string;
    times:          string;
    starttimebegin: string;
    starttimeend:   string;
    phoneHash?:     string;
}
