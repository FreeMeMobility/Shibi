import {Flixbus} from "../../model/flixbus/Flixbus";
import Shibi from "../../model/shibi/Shibi";
import {Message} from "../../model/flixbus/Message";
import Vehicle, {VehicleClimateFootprint, VehicleFeatures, VehicleSpeed, VehicleType} from "../../model/shibi/Vehicle";
import SubTrip from "../../model/shibi/SubTrip";
import Place, {PlaceType} from "../../model/shibi/Place";
import Departure from "../../model/shibi/Departure";
import Trip, {TripType} from "../../model/shibi/Trip";
import {BlaTrip} from '../../model/blablacar/BlaTrip';
import {ThePublicTransport} from "../../model/thepublictransport/ThePublicTransport";
import {TPTTrip} from "../../model/thepublictransport/TPTTrip";
import {MiFazData} from "../../model/mifaz/MiFazData";
import {Entry} from "../../model/mifaz/Entry";
import DateTools from "../date/DateTools";
import {BlaBlaCarData} from "../../model/blablacar/BlaBlaCarData";

export default class ShibiCreator {

    public createShibiFromFlixbus(flixbus: Flixbus): Shibi {
        try {
            let shibiTrips: Trip[] = [];

            flixbus.message.forEach(function (msg: Message) {
                let shibiSubTrips: SubTrip[] = [];
                msg.legs.forEach(function (leg) {
                    let shibiVehicle: Vehicle = {
                        operator: leg.operator.name + ", " + leg.operator.id,
                        id: leg.operator.id,
                        name: leg.operator.name,
                        vehicleType: VehicleType.BUS,
                        climateFootprint: VehicleClimateFootprint.MEDIUM,
                        speed: VehicleSpeed.NORMAL,
                        features: [
                            VehicleFeatures.WIFI,
                            VehicleFeatures.TOILETS,
                            VehicleFeatures.POWER_SOCKETS,
                            VehicleFeatures.FAMILY_FRIENDLY
                        ],
                        barrier_free: false,
                        seats: null
                    };

                    let shibiFrom: Place = {
                        location: null,
                        placeType: PlaceType.STATION,
                        name: leg.origin.name,
                        id: leg.origin.id,
                        information: [
                            leg.mode
                        ],
                        barrier_free: false,
                        available: leg.public,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };
                    let shibiTo: Place = {
                        location: null,
                        placeType: PlaceType.STATION,
                        name: leg.destination.name,
                        id: leg.destination.id,
                        information: [
                            leg.mode
                        ],
                        barrier_free: false,
                        available: leg.public,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };
                    let shibiDeparture: Departure = {
                        time: leg.departure,
                        predictedTime: leg.departure,
                        noPreciseTime: false
                    };
                    let shibiArrival: Departure = {
                        time: leg.arrival,
                        predictedTime: leg.arrival,
                        noPreciseTime: false
                    };

                    shibiSubTrips.push({
                        from: shibiFrom,
                        to: shibiTo,
                        stops: null,
                        departure: shibiDeparture,
                        arrival: shibiArrival,
                        vehicle: shibiVehicle,
                        information: null,
                        source: "FlixBus",
                        url: leg.operator.url
                    });
                });

                shibiTrips.push({
                    from: shibiSubTrips[0].from,
                    to: shibiSubTrips[shibiSubTrips.length - 1].to,
                    departure: shibiSubTrips[0].departure,
                    arrival: shibiSubTrips[shibiSubTrips.length - 1].arrival,
                    routes: shibiSubTrips,
                    tripType: TripType.SINGLE_MODAL,
                    alternative: false,
                    information: [
                        msg.info.message,
                    ]
                })
            });

            return {
                context: null,
                serverResponseTime: Date.now(),
                from: shibiTrips[0].from,
                to: shibiTrips[shibiTrips.length - 1].to,
                trips: shibiTrips
            }
        } catch (e) {
           return null;
        }
    }

    public createShibiFromTPT(tpt: ThePublicTransport, source: string): Shibi {
        try {
            let shibiTrips: Trip[] = [];
            tpt.trips.forEach(function (trip: TPTTrip) {
                let shibiSubTrips: SubTrip[] = [];
                trip.legs.forEach(function (leg) {
                    let shibiVehicle: Vehicle = {
                        operator: source,
                        id: leg.line?.id,
                        name: leg.line?.label != null ? leg.line?.label : leg.line?.name,
                        vehicleType: ShibiCreator.getVehicleType(leg.line?.product),
                        climateFootprint: ShibiCreator.getVehicleFootprint(leg.line?.product),
                        speed: ShibiCreator.getVehicleSpeed(leg.line?.product),
                        features: [],
                        barrier_free: true,
                        seats: null
                    };

                    let shibiFrom: Place = {
                        location: {
                            latitude: leg.departure.latAsDouble,
                            longitude: leg.departure.lonAsDouble
                        },
                        placeType: PlaceType.STATION,
                        name: leg.departure.name + (leg.departure.place != null ? ", " + leg.departure.place : ""),
                        id: leg.departure.id,
                        information: [],
                        barrier_free: true,
                        available: leg.departure.identified,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };
                    let shibiTo: Place = {
                        location: {
                            latitude: leg.arrival.latAsDouble,
                            longitude: leg.arrival.lonAsDouble
                        },
                        placeType: PlaceType.STATION,
                        name: leg.arrival.name + (leg.arrival.place != null ? ", " + leg.arrival.place : ""),
                        id: leg.arrival.id,
                        information: [],
                        barrier_free: true,
                        available: leg.arrival.identified,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };
                    let shibiDeparture: Departure = {
                        time: new Date(leg.departureTime),
                        predictedTime: new Date(leg.departureTime + leg.departureDelay),
                        noPreciseTime: false
                    };
                    let shibiArrival: Departure = {
                        time: new Date(leg.arrivalTime),
                        predictedTime: new Date(leg.arrivalTime + leg.arrivalDelay),
                        noPreciseTime: false
                    };

                    let shibiStops: Place[] = [];
                    if (leg.intermediateStops != null) {
                        leg.intermediateStops.forEach(function (stop) {
                            shibiStops.push({
                                location: {
                                    latitude: stop.location.latAsDouble,
                                    longitude: stop.location.lonAsDouble
                                },
                                placeType: PlaceType.STATION,
                                name: stop.location.name + (stop.location.place != null ? ", " + stop.location.place : ""),
                                id: stop.location.id,
                                information: [],
                                barrier_free: true,
                                available: stop.location.identified,
                                hasTimeDetails: true,
                                timeDetailsDeparture: {
                                    time: new Date(stop.departureTime),
                                    predictedTime: new Date(stop.departureTime + stop.departureDelay),
                                    noPreciseTime: false
                                },
                                timeDetailsArrival: {
                                    time: new Date(stop.arrivalTime),
                                    predictedTime: new Date(stop.arrivalTime + stop.arrivalDelay),
                                    noPreciseTime: false
                                },
                            });
                        });
                    }

                    shibiSubTrips.push({
                        from: shibiFrom,
                        to: shibiTo,
                        stops: shibiStops,
                        departure: shibiDeparture,
                        arrival: shibiArrival,
                        fromTrack: leg.departurePosition != null ? leg.departurePosition.name : null,
                        toTrack: leg.arrivalPosition != null ? leg.arrivalPosition.name : null,
                        vehicle: shibiVehicle,
                        information: leg.message,
                        source: source,
                        url: undefined
                    });
                });

                shibiTrips.push({
                    from: shibiSubTrips[0].from,
                    to: shibiSubTrips[shibiSubTrips.length - 1].to,
                    departure: shibiSubTrips[0].departure,
                    arrival: shibiSubTrips[shibiSubTrips.length - 1].arrival,
                    routes: shibiSubTrips,
                    tripType: TripType.SINGLE_MODAL,
                    alternative: false,
                    information: []
                });
            });

            return {
                context: tpt.context.laterContext,
                serverResponseTime: Date.now(),
                from: shibiTrips[0].from,
                to: shibiTrips[shibiTrips.length - 1].to,
                trips: shibiTrips
            }
        } catch (e) {
            return null;
        }
    }

    public createShibiFromMiFaz(mifaz: MiFazData, date: Date): Shibi {
        let miFazDate = DateTools.getMiFazDate(date);

        try {
            let shibiTrips: Trip[] = [];

            mifaz.entries.forEach(function (entry: Entry) {
                let shibiSubTrips: SubTrip[] = [];

                let shibiVehicle: Vehicle = {
                    operator: entry.username,
                    id: entry.id,
                    name: "MiFaz Trip",
                    vehicleType: VehicleType.RIDESHARING,
                    climateFootprint: VehicleClimateFootprint.MEDIUM,
                    speed: VehicleSpeed.FAST,
                    features: [],
                    barrier_free: false,
                    seats: null
                };

                let shibiFrom: Place = {
                    location: {
                        latitude: Number(entry.startcoord.split(" ")[0]),
                        longitude: Number(entry.startcoord.split(" ")[1]),
                        altitude: null
                    },
                    placeType: PlaceType.ADDRESS,
                    name: entry.startloc,
                    id: entry.startID,
                    information: [],
                    barrier_free: false,
                    available: true,
                    hasTimeDetails: false,
                    timeDetailsDeparture: null,
                    timeDetailsArrival: null
                };
                let shibiTo: Place = {
                    location: {
                        latitude: Number(entry.goalcoord.split(" ")[0]),
                        longitude: Number(entry.goalcoord.split(" ")[1]),
                        altitude: null
                    },
                    placeType: PlaceType.ADDRESS,
                    name: entry.goalloc,
                    id: entry.goalID,
                    information: [
                    ],
                    barrier_free: false,
                    available: true,
                    hasTimeDetails: false,
                    timeDetailsDeparture: null,
                    timeDetailsArrival: null
                };
                let shibiDeparture: Departure = {
                    time: DateTools.miFazToDate(miFazDate, entry.starttimebegin),
                    predictedTime: DateTools.miFazToDate(miFazDate, entry.starttimebegin),
                    noPreciseTime: false
                };
                let shibiArrival: Departure = {
                    time: DateTools.miFazToDate(miFazDate, entry.starttimeend),
                    predictedTime: DateTools.miFazToDate(miFazDate, entry.starttimeend),
                    noPreciseTime: true
                };

                shibiSubTrips.push({
                    from: shibiFrom,
                    to: shibiTo,
                    stops: null,
                    departure: shibiDeparture,
                    arrival: shibiArrival,
                    vehicle: shibiVehicle,
                    information: null,
                    source: "MiFaz",
                    url: entry.url
                });

                shibiTrips.push({
                    from: shibiSubTrips[0].from,
                    to: shibiSubTrips[shibiSubTrips.length - 1].to,
                    departure: shibiSubTrips[0].departure,
                    arrival: shibiSubTrips[shibiSubTrips.length - 1].arrival,
                    routes: shibiSubTrips,
                    tripType: TripType.SINGLE_MODAL,
                    alternative: false,
                    information: []
                })
            });

            return {
                context: null,
                serverResponseTime: Date.now(),
                from: shibiTrips[0].from,
                to: shibiTrips[shibiTrips.length - 1].to,
                trips: shibiTrips
            }
        } catch (e) {
            return null;
        }
    }

    public createShibiFromBlaBlaCar(blaBlaCarData: BlaBlaCarData): Shibi {
        try {
            let shibiTrips: Trip[] = [];
            blaBlaCarData.trips.forEach(function (trip: BlaTrip) {
                let shibiSubTrips: SubTrip[] = [];

                let shibiVehicle: Vehicle = {
                    operator: trip.vehicle.model,
                    id: trip.vehicle.make,
                    name: trip.vehicle.model,
                    vehicleType: VehicleType.RIDESHARING,
                    climateFootprint: VehicleClimateFootprint.MEDIUM,
                    speed: VehicleSpeed.FAST,
                    features: [],
                    barrier_free: false,
                    seats: null
                };

                for (let i = 0; i < trip.waypoints.length; i++) {
                    let waypoint = trip.waypoints[i];
                    let waypoint2 = trip.waypoints[i + 1];

                    if (waypoint2 == undefined) {
                        break;
                    }

                    let shibiFrom: Place  = {
                        location: {
                            latitude: waypoint.place.latitude,
                            longitude: waypoint.place.longitude
                        },
                        placeType: PlaceType.ADDRESS,
                        name: waypoint.place.address,
                        id: waypoint.place.address + "_" + waypoint.place.city + "_" + waypoint.place.country_code,
                        information: [],
                        barrier_free: false,
                        available: true,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };

                    let shibiTo: Place  = {
                        location: {
                            latitude: waypoint2.place.latitude,
                            longitude: waypoint2.place.longitude
                        },
                        placeType: PlaceType.ADDRESS,
                        name: waypoint2.place.address,
                        id: waypoint2.place.address + "_" + waypoint2.place.city + "_" + waypoint2.place.country_code,
                        information: [],
                        barrier_free: false,
                        available: true,
                        hasTimeDetails: false,
                        timeDetailsDeparture: null,
                        timeDetailsArrival: null
                    };

                    let shibiDeparture: Departure = {
                        time: new Date(waypoint.date_time),
                        predictedTime: null,
                        noPreciseTime: true
                    };
                    let shibiArrival: Departure = {
                        time: new Date(waypoint2.date_time),
                        predictedTime: null,
                        noPreciseTime: true
                    }

                    shibiSubTrips.push({
                        from: shibiFrom,
                        to: shibiTo,
                        stops: null,
                        departure: shibiDeparture,
                        arrival: shibiArrival,
                        vehicle: shibiVehicle,
                        information: null,
                        source: "BlaBlaCar",
                        url: undefined
                    });
                }

                shibiTrips.push({
                    from: shibiSubTrips[0].from,
                    to: shibiSubTrips[shibiSubTrips.length - 1].to,
                    departure: shibiSubTrips[0].departure,
                    arrival: shibiSubTrips[shibiSubTrips.length - 1].arrival,
                    routes: shibiSubTrips,
                    tripType: TripType.SINGLE_MODAL,
                    alternative: false,
                    information: []
                });
            });

            return {
                context: blaBlaCarData.next_cursor,
                serverResponseTime: Date.now(),
                from: shibiTrips[0].from,
                to: shibiTrips[shibiTrips.length - 1].to,
                trips: shibiTrips
            }
        } catch (e) {
            return null;
        }
    }

    private static getVehicleType(vehicle?: string): VehicleType {
        switch (vehicle) {
            case "HIGH_SPEED_TRAIN":
            case "REGIONAL_TRAIN":
            case "SUBURBAN_TRAIN":
                return VehicleType.TRAIN;
            case "BUS":
                return VehicleType.BUS;
            case "TRAM":
                return VehicleType.TRAM;
            case "FERRY":
                return VehicleType.FERRY;
            default:
                return VehicleType.MISC;
        }
    }

    private static getVehicleSpeed(vehicle?: string): VehicleSpeed {
        switch (vehicle) {
            case "HIGH_SPEED_TRAIN":
                return VehicleSpeed.VERY_FAST;
            case "REGIONAL_TRAIN":
            case "SUBURBAN_TRAIN":
                return VehicleSpeed.FAST;
            case "BUS":
                return VehicleSpeed.NORMAL;
            case "TRAM":
                return VehicleSpeed.NORMAL;
            case "FERRY":
                return VehicleSpeed.SLOW;
            default:
                return VehicleSpeed.NORMAL;
        }
    }

    private static getVehicleFootprint(vehicle?: string): VehicleClimateFootprint {
        switch (vehicle) {
            case "HIGH_SPEED_TRAIN":
            case "REGIONAL_TRAIN":
            case "SUBURBAN_TRAIN":
                return VehicleClimateFootprint.VERY_LOW;
            case "BUS":
                return VehicleClimateFootprint.LOW;
            case "TRAM":
                return VehicleClimateFootprint.VERY_LOW;
            case "FERRY":
                return VehicleClimateFootprint.HIGH;
            default:
                return VehicleClimateFootprint.MEDIUM;
        }
    }
}
