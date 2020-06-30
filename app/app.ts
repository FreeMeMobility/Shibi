import express from 'express';
import ShibiCreator from "./framework/creator/ShibiCreator";
import Shibi from "./model/shibi/Shibi";
import ShibiSearch from "./framework/search/ShibiSearch";

const expressServer: express.Application = express();

const shibiCreator: ShibiCreator = new ShibiCreator();
const shibiSearch: ShibiSearch = new ShibiSearch();

// Define Port
const PORT = process.env.PORT || '8174';

expressServer.get("/shibi/deutschebahn.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "DB");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Deutsche Bahn (DB Navigator)");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/rmv.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "NVV_RMV");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Rhein-Main Verkehrsbund");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/bvg.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "BVG");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Berliner Verkehrsgesellschaft");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/avv.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "AVVAachen");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Aachener Verkehrsgesellschaft");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/insa.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "NASA");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "INSA");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/vbn.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "VBN");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Verkehrsverbund Bremen/Niedersachsen (VBN)");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/sncb.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "SNCB");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Société nationale des chemins de fer belges");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/vonanachb.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "AnachB");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Verkehrsverbund Ost-Region (VOR)");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/oebb.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date), "OEBB");

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromTPT(data, "Österreichische Bundesbahn");

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/flixbus.shibi", async function (req, res, next) {
    let nameFrom        = req.query['nameFrom'];
    let nameTo          = req.query['nameTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiFlixbusSearch(nameFrom, nameTo, new Date(date));

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shibi = shibiCreator.createShibiFromFlixbus(data);

        if (finishedData == null) {
            res.send("Shibi parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/mifaz.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiMiFazSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date));

    if (data == null) res.send("Request failed.");

    else {
        let finishedData: Shibi = shibiCreator.createShibiFromMiFaz(data, new Date(date));

        if (finishedData == null) res.send("Shibi parsing failed.");

        else {
            res.send(finishedData);
        }
    }
});

expressServer.get("/shibi/blablacar.shibi", async function (req, res, next) {
    let apikey          = req.query['apikey'];
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let fromCountry     = req.query['fromCountry'];
    let toCountry       = req.query['toCountry'];
    let locale          = req.query['locale'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    if (apikey == undefined) {
        res.send("No APIKey provided.");
    }

    let data = await shibiSearch.shibiBlaBlaCarSearch(
        latitudeFrom,
        longitudeFrom,
        latitudeTo,
        longitudeTo,
        fromCountry,
        toCountry,
        locale,
        apikey,
        new Date(date));

    if (data == null) res.send("Request failed.");

    else {
        let finishedData: Shibi = shibiCreator.createShibiFromBlaBlaCar(data);

        if (finishedData == null) res.send("Shibi parsing failed.");

        else {
            res.send(finishedData);
        }
    }
});


expressServer.listen(PORT, function() {
    console.log('Shibi listening on port ' + PORT.toString());
});
