import {Flixbus} from "../../model/flixbus/Flixbus";
import Shibi from "../../model/shibi/Shibi";
import {Message} from "../../model/flixbus/Message";
import Vehicle, {VehicleClimateFootprint, VehicleFeatures, VehicleSpeed, VehicleType} from "../../model/shibi/Vehicle";
import SubTrip from "../../model/shibi/SubTrip";
import Place, {PlaceType} from "../../model/shibi/Place";
import Departure from "../../model/shibi/Departure";
import Trip, {TripType} from "../../model/shibi/Trip";
import {ThePublicTransport} from "../../model/thepublictransport/ThePublicTransport";
import {TPTTrip} from "../../model/thepublictransport/TPTTrip";

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
                        available: leg.public
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
                        available: leg.public
                    };
                    let shibiDeparture: Departure = {
                        time: leg.departure,
                        predictedTime: leg.departure
                    };
                    let shibiArrival: Departure = {
                        time: leg.arrival,
                        predictedTime: leg.arrival
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

    public createShibiFromTPT(tpt: ThePublicTransport): Shibi {
        try {
            let shibiTrips: Trip[] = [];
            tpt.trips.forEach(function (trip: TPTTrip) {
                let shibiSubTrips: SubTrip[] = [];
                trip.legs.forEach(function (leg) {
                    let shibiVehicle: Vehicle = {
                        operator: leg.line?.product + ", " + leg.line?.id,
                        id: leg.line?.id,
                        name: leg.line?.name,
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
                        name: leg.departure.name,
                        id: leg.departure.id,
                        information: [],
                        barrier_free: true,
                        available: leg.departure.identified
                    };
                    let shibiTo: Place = {
                        location: {
                            latitude: leg.arrival.latAsDouble,
                            longitude: leg.arrival.lonAsDouble
                        },
                        placeType: PlaceType.STATION,
                        name: leg.arrival.name,
                        id: leg.arrival.id,
                        information: [],
                        barrier_free: true,
                        available: leg.arrival.identified
                    };
                    let shibiDeparture: Departure = {
                        time: new Date(leg.departureTime),
                        predictedTime: new Date(leg.departureTime + leg.departureDelay)
                    };
                    let shibiArrival: Departure = {
                        time: new Date(leg.arrivalTime),
                        predictedTime: new Date(leg.arrivalTime + leg.arrivalDelay)
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
                                name: stop.location.name,
                                id: stop.location.id,
                                information: [],
                                barrier_free: true,
                                available: stop.location.identified
                            });
                        });
                    }

                    shibiSubTrips.push({
                        from: shibiFrom,
                        to: shibiTo,
                        stops: shibiStops,
                        departure: shibiDeparture,
                        arrival: shibiArrival,
                        vehicle: shibiVehicle,
                        information: leg.message,
                        source: "ThePublicTransport",
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
