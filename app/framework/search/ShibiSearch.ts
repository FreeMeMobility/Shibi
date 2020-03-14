import axios from 'axios'
import {TPTSearch} from "../../model/thepublictransport/search/TPTSearch";
import {ThePublicTransport} from "../../model/thepublictransport/ThePublicTransport";
import {Flixbus} from "../../model/flixbus/Flixbus";
import {FlixbusSearch, Message} from "../../model/flixbus/search/FlixbusSearch";
import {MiFazData} from "../../model/mifaz/MiFazData";
import DateTools from "../date/DateTools";

export default class ShibiSearch {
    public async shibiTPTSearch(lat: number, lon: number, latTo: number, lonTo: number, date: Date, source: string): Promise<ThePublicTransport> {
        let SEARCH: string = "https://api.thepublictransport.de/location/nearby?lat="
            + lat.toString() + "&lon=" + lon.toString()
            + "&types=STATION&maxLocations=1&source=DB";

        let SEARCH_TO: string = "https://api.thepublictransport.de/location/nearby?lat="
            + latTo.toString() + "&lon=" + lonTo.toString()
            + "&types=STATION&maxLocations=1&source=DB";

        let FROM_REQUEST    = await axios.get(SEARCH);
        let TO_REQUEST      = await axios.get(SEARCH_TO);

        let FROM    = FROM_REQUEST.data as TPTSearch;
        let TO      = TO_REQUEST.data as TPTSearch;

        if (FROM.locations.length == 0 || TO.locations.length == 0)
            return null;

        let request =  await axios.get("https://api.thepublictransport.de/trips/id?from="
            + FROM.locations[0].id
            + "&to=" + TO.locations[0].id
            + "&when=" + DateTools.getTPTDate(date)
            + "&accessibility=NEUTRAL&optimization=LEAST_DURATION&walkspeed=NORMAL&source=" + source);

        return request.data as ThePublicTransport;
    }

    public async shibiFlixbusSearch(nameFrom: string, nameTo: string, date: Date): Promise<Flixbus> {
        let SEARCH: string = "https://api.thepublictransport.de/flix/query/"+ nameFrom + "/5";

        let SEARCH_TO: string = "https://api.thepublictransport.de/flix/query/"+ nameTo + "/5";

        let FROM_REQUEST    = await axios.get(SEARCH);
        let TO_REQUEST      = await axios.get(SEARCH_TO);

        let FROM    = FROM_REQUEST.data as FlixbusSearch;
        let TO      = TO_REQUEST.data as FlixbusSearch;

        if (FROM.message.length == 0 || TO.message.length == 0)
            return null;

        let FROM_FUZZY: Message;
        let TO_FUZZY: Message;

        for (let i = 0; i < FROM.message.length; i++) {
            for (let a = 0; a < FROM.message.length; a++) {
                if (FROM.message[i].type == TO.message[a].type) {
                    FROM_FUZZY = FROM.message[i];
                    TO_FUZZY = TO.message[a];
                    break;
                }
            }
            if (FROM_FUZZY != null) break;
        }

        if (FROM_FUZZY == null || TO_FUZZY == null)
            return null;

        let request = await axios.get("https://api.thepublictransport.de/flix/journey/"
            + FROM_FUZZY.id + "/"
            + FROM_FUZZY.type + "/"
            + TO_FUZZY.id + "/"
            + TO_FUZZY.type + "/"
            + date.toDateString() + "/de");

        return request.data as Flixbus;
    }

    public async shibiMiFazSearch(lat: number, lon: number, latTo: number, lonTo: number, date: Date): Promise<MiFazData> {
        let request = await axios.get("https://api.mifaz.de/request/?f=getEntries" +
            "&startlatitude=" + lat +
            "&startlongitude=" + lon +
            "&goallatitude=" + latTo +
            "&goallongitude=" + lonTo +
            "&journeydate=" + DateTools.getMiFazDate(date));

        return request.data as MiFazData;
    }
}
