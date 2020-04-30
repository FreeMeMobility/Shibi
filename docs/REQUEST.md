# Request / Response

A sample request looks like this:

``https://api.thepublictransport.de/shibi/deutschebahn.shibi?latFrom=48.139&lonFrom=11.574&latTo=52.522&lonTo=13.410&date=2020-03-15T18:21:48``

And the response of this request:

````json
{
  "context": "1|OF|MT#11#135214#135214#135852#135852#0#0#565#135195#3#-2147483622#0#1#2|PDH#35ab7d59cb318330195aef7189336b75|RD#15032020|RT#194400",
  "serverResponseTime": 1588230602391,
  "from": {
    "location": {
      "latitude": 48.139546,
      "longitude": 11.575203
    },
    "placeType": "station",
    "name": "Theatinerstraße",
    "id": "623374",
    "information": [],
    "barrier_free": true,
    "available": true,
    "hasTimeDetails": false,
    "timeDetailsDeparture": null,
    "timeDetailsArrival": null
  },
  "to": {
    "location": {
      "latitude": 52.521526,
      "longitude": 13.411088
    },
    "placeType": "station",
    "name": "Berlin Alexanderplatz",
    "id": "8011155",
    "information": [],
    "barrier_free": true,
    "available": true,
    "hasTimeDetails": false,
    "timeDetailsDeparture": null,
    "timeDetailsArrival": null
  },
  "trips": [
    {
      "from": {
        "location": {
          "latitude": 48.139546,
          "longitude": 11.575203
        },
        "placeType": "station",
        "name": "Theatinerstraße",
        "id": "623374",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "to": {
        "location": {
          "latitude": 52.521526,
          "longitude": 13.411088
        },
        "placeType": "station",
        "name": "Berlin Alexanderplatz",
        "id": "8011155",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "departure": {
        "time": "2020-03-15T19:04:00.000Z",
        "predictedTime": "2020-03-15T19:04:00.000Z",
        "noPreciseTime": false
      },
      "arrival": {
        "time": "2020-03-16T04:51:00.000Z",
        "predictedTime": "2020-03-16T04:51:00.000Z",
        "noPreciseTime": false
      },
      "routes": [
        {
          "from": {
            "location": {
              "latitude": 48.139546,
              "longitude": 11.575203
            },
            "placeType": "station",
            "name": "Theatinerstraße",
            "id": "623374",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.140858,
                "longitude": 11.568524
              },
              "placeType": "station",
              "name": "München Lenbachplatz",
              "id": "8070934",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T19:06:00.000Z",
                "predictedTime": "2020-03-15T19:06:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T19:06:00.000Z",
                "predictedTime": "2020-03-15T19:06:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.139564,
                "longitude": 11.565521
              },
              "placeType": "station",
              "name": "München Karlsplatz",
              "id": "8004132",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T19:08:00.000Z",
                "predictedTime": "2020-03-15T19:08:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T19:08:00.000Z",
                "predictedTime": "2020-03-15T19:08:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T19:04:00.000Z",
            "predictedTime": "2020-03-15T19:04:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T19:10:00.000Z",
            "predictedTime": "2020-03-15T19:10:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "TRAM, 8_swm002_21",
            "id": "8_swm002_21",
            "name": "STR 21",
            "vehicleType": "tram",
            "climateFootprint": "very_low",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-15T19:10:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T19:18:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 50.554794,
              "longitude": 9.684178
            },
            "placeType": "station",
            "name": "Fulda",
            "id": "8000115",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.744538,
                "longitude": 11.437335
              },
              "placeType": "station",
              "name": "Ingolstadt Hbf",
              "id": "8000183",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:00:00.000Z",
                "predictedTime": "2020-03-15T20:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T19:58:00.000Z",
                "predictedTime": "2020-03-15T19:58:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.445435,
                "longitude": 11.08227
              },
              "placeType": "station",
              "name": "Nürnberg Hbf",
              "id": "8000284",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:34:00.000Z",
                "predictedTime": "2020-03-15T20:34:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:31:00.000Z",
                "predictedTime": "2020-03-15T20:31:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.802163,
                "longitude": 9.93593
              },
              "placeType": "station",
              "name": "Würzburg Hbf",
              "id": "8000260",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:28:00.000Z",
                "predictedTime": "2020-03-15T21:28:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:26:00.000Z",
                "predictedTime": "2020-03-15T21:26:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T19:21:00.000Z",
            "predictedTime": "2020-03-15T19:21:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T22:02:00.000Z",
            "predictedTime": "2020-03-15T22:02:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "HIGH_SPEED_TRAIN, null",
            "id": null,
            "name": "ICE 780",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "very_fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 50.554794,
              "longitude": 9.684178
            },
            "placeType": "station",
            "name": "Fulda",
            "id": "8000115",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.377079,
              "longitude": 9.741763
            },
            "placeType": "station",
            "name": "Hannover Hbf",
            "id": "8000152",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 51.312998,
                "longitude": 9.446845
              },
              "placeType": "station",
              "name": "Kassel-Wilhelmshöhe",
              "id": "8003200",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:53:00.000Z",
                "predictedTime": "2020-03-15T22:53:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:50:00.000Z",
                "predictedTime": "2020-03-15T22:50:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.536758,
                "longitude": 9.926257
              },
              "placeType": "station",
              "name": "Göttingen",
              "id": "8000128",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T23:47:00.000Z",
                "predictedTime": "2020-03-15T23:47:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T23:45:00.000Z",
                "predictedTime": "2020-03-15T23:45:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T22:19:00.000Z",
            "predictedTime": "2020-03-15T22:19:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T00:46:00.000Z",
            "predictedTime": "2020-03-16T00:46:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "HIGH_SPEED_TRAIN, null",
            "id": null,
            "name": "ICE 590",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "very_fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.377079,
              "longitude": 9.741763
            },
            "placeType": "station",
            "name": "Hannover Hbf",
            "id": "8000152",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 52.252128,
                "longitude": 10.540436
              },
              "placeType": "station",
              "name": "Braunschweig Hbf",
              "id": "8000049",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T02:03:00.000Z",
                "predictedTime": "2020-03-16T02:03:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T02:01:00.000Z",
                "predictedTime": "2020-03-16T02:01:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.130495,
                "longitude": 11.6269
              },
              "placeType": "station",
              "name": "Magdeburg Hbf",
              "id": "8010224",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T03:04:00.000Z",
                "predictedTime": "2020-03-16T03:04:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T03:02:00.000Z",
                "predictedTime": "2020-03-16T03:02:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.400756,
                "longitude": 12.566416
              },
              "placeType": "station",
              "name": "Brandenburg Hbf",
              "id": "8010060",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T03:47:00.000Z",
                "predictedTime": "2020-03-16T03:47:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T03:45:00.000Z",
                "predictedTime": "2020-03-16T03:45:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.391551,
                "longitude": 13.066711
              },
              "placeType": "station",
              "name": "Potsdam Hbf",
              "id": "8012666",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "1970-01-01T00:00:00.000Z",
                "predictedTime": "1970-01-01T00:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:04:00.000Z",
                "predictedTime": "2020-03-16T04:04:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.420955,
                "longitude": 13.179696
              },
              "placeType": "station",
              "name": "Berlin Wannsee",
              "id": "8010405",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "1970-01-01T00:00:00.000Z",
                "predictedTime": "1970-01-01T00:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:13:00.000Z",
                "predictedTime": "2020-03-16T04:13:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.507242,
                "longitude": 13.332414
              },
              "placeType": "station",
              "name": "Berlin Zoologischer Garten",
              "id": "8010406",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "1970-01-01T00:00:00.000Z",
                "predictedTime": "1970-01-01T00:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:29:00.000Z",
                "predictedTime": "2020-03-16T04:29:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-16T01:29:00.000Z",
            "predictedTime": "2020-03-16T01:29:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T04:36:00.000Z",
            "predictedTime": "2020-03-16T04:36:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "HIGH_SPEED_TRAIN, null",
            "id": null,
            "name": "ICE 949",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "very_fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-16T04:36:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T04:44:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.521526,
              "longitude": 13.411088
            },
            "placeType": "station",
            "name": "Berlin Alexanderplatz",
            "id": "8011155",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 52.520331,
                "longitude": 13.386925
              },
              "placeType": "station",
              "name": "Berlin Friedrichstraße",
              "id": "8011306",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:48:00.000Z",
                "predictedTime": "2020-03-16T04:48:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:47:00.000Z",
                "predictedTime": "2020-03-16T04:47:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.522614,
                "longitude": 13.402197
              },
              "placeType": "station",
              "name": "Berlin Hackescher Markt",
              "id": "8089017",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:50:00.000Z",
                "predictedTime": "2020-03-16T04:50:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:49:00.000Z",
                "predictedTime": "2020-03-16T04:49:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-16T04:45:00.000Z",
            "predictedTime": "2020-03-16T04:45:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T04:51:00.000Z",
            "predictedTime": "2020-03-16T04:51:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "SUBURBAN_TRAIN, 4_08_____9",
            "id": "4_08_____9",
            "name": "S 9",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        }
      ],
      "tripType": "single_modal",
      "alternative": false,
      "information": []
    },
    {
      "from": {
        "location": {
          "latitude": 48.139546,
          "longitude": 11.575203
        },
        "placeType": "station",
        "name": "Theatinerstraße",
        "id": "623374",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "to": {
        "location": {
          "latitude": 52.521526,
          "longitude": 13.411088
        },
        "placeType": "station",
        "name": "Berlin Alexanderplatz",
        "id": "8011155",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "departure": {
        "time": "2020-03-15T20:14:00.000Z",
        "predictedTime": "2020-03-15T20:14:00.000Z",
        "noPreciseTime": false
      },
      "arrival": {
        "time": "2020-03-16T05:41:00.000Z",
        "predictedTime": "2020-03-16T05:41:00.000Z",
        "noPreciseTime": false
      },
      "routes": [
        {
          "from": {
            "location": {
              "latitude": 48.139546,
              "longitude": 11.575203
            },
            "placeType": "station",
            "name": "Theatinerstraße",
            "id": "623374",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.140858,
                "longitude": 11.568524
              },
              "placeType": "station",
              "name": "München Lenbachplatz",
              "id": "8070934",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:16:00.000Z",
                "predictedTime": "2020-03-15T20:16:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:16:00.000Z",
                "predictedTime": "2020-03-15T20:16:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.139564,
                "longitude": 11.565521
              },
              "placeType": "station",
              "name": "München Karlsplatz",
              "id": "8004132",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:18:00.000Z",
                "predictedTime": "2020-03-15T20:18:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:18:00.000Z",
                "predictedTime": "2020-03-15T20:18:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T20:14:00.000Z",
            "predictedTime": "2020-03-15T20:14:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T20:20:00.000Z",
            "predictedTime": "2020-03-15T20:20:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "TRAM, 8_swm002_21",
            "id": "8_swm002_21",
            "name": "STR 21",
            "vehicleType": "tram",
            "climateFootprint": "very_low",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-15T20:20:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T20:28:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 49.445435,
              "longitude": 11.08227
            },
            "placeType": "station",
            "name": "Nürnberg Hbf",
            "id": "8000284",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.254697,
                "longitude": 11.444266
              },
              "placeType": "station",
              "name": "Dachau Bahnhof",
              "id": "8001354",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:43:00.000Z",
                "predictedTime": "2020-03-15T20:43:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:42:00.000Z",
                "predictedTime": "2020-03-15T20:42:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.41289,
                "longitude": 11.469256
              },
              "placeType": "station",
              "name": "Petershausen(Obb)",
              "id": "8004775",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:53:00.000Z",
                "predictedTime": "2020-03-15T20:53:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:52:00.000Z",
                "predictedTime": "2020-03-15T20:52:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.442797,
                "longitude": 11.487432
              },
              "placeType": "station",
              "name": "Paindorf",
              "id": "8004747",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:57:00.000Z",
                "predictedTime": "2020-03-15T20:57:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:56:00.000Z",
                "predictedTime": "2020-03-15T20:56:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.471077,
                "longitude": 11.510193
              },
              "placeType": "station",
              "name": "Reichertshausen(Ilm)",
              "id": "8005008",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:00:00.000Z",
                "predictedTime": "2020-03-15T21:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:00:00.000Z",
                "predictedTime": "2020-03-15T21:00:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.522944,
                "longitude": 11.511982
              },
              "placeType": "station",
              "name": "Pfaffenhofen(Ilm)",
              "id": "8004781",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:06:00.000Z",
                "predictedTime": "2020-03-15T21:06:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:05:00.000Z",
                "predictedTime": "2020-03-15T21:05:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.606041,
                "longitude": 11.573387
              },
              "placeType": "station",
              "name": "Rohrbach(Ilm)",
              "id": "8000256",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:13:00.000Z",
                "predictedTime": "2020-03-15T21:13:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:12:00.000Z",
                "predictedTime": "2020-03-15T21:12:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.673667,
                "longitude": 11.46113
              },
              "placeType": "station",
              "name": "Baar-Ebenhausen",
              "id": "8000678",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:21:00.000Z",
                "predictedTime": "2020-03-15T21:21:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:21:00.000Z",
                "predictedTime": "2020-03-15T21:21:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.744538,
                "longitude": 11.437335
              },
              "placeType": "station",
              "name": "Ingolstadt Hbf",
              "id": "8000183",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:30:00.000Z",
                "predictedTime": "2020-03-15T21:30:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:27:00.000Z",
                "predictedTime": "2020-03-15T21:27:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.773015,
                "longitude": 11.43293
              },
              "placeType": "station",
              "name": "Ingolstadt Nord",
              "id": "8003076",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:34:00.000Z",
                "predictedTime": "2020-03-15T21:34:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:33:00.000Z",
                "predictedTime": "2020-03-15T21:33:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.790499,
                "longitude": 11.407455
              },
              "placeType": "station",
              "name": "Ingolstadt Audi",
              "id": "8003074",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:37:00.000Z",
                "predictedTime": "2020-03-15T21:37:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:36:00.000Z",
                "predictedTime": "2020-03-15T21:36:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.798778,
                "longitude": 11.369817
              },
              "placeType": "station",
              "name": "Gaimersheim",
              "id": "8002171",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:40:00.000Z",
                "predictedTime": "2020-03-15T21:40:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:40:00.000Z",
                "predictedTime": "2020-03-15T21:40:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.815822,
                "longitude": 11.319765
              },
              "placeType": "station",
              "name": "Eitensheim",
              "id": "8001734",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:44:00.000Z",
                "predictedTime": "2020-03-15T21:44:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:44:00.000Z",
                "predictedTime": "2020-03-15T21:44:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.819274,
                "longitude": 11.275592
              },
              "placeType": "station",
              "name": "Tauberfeld",
              "id": "8005828",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:47:00.000Z",
                "predictedTime": "2020-03-15T21:47:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:47:00.000Z",
                "predictedTime": "2020-03-15T21:47:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.840758,
                "longitude": 11.211445
              },
              "placeType": "station",
              "name": "Adelschlag",
              "id": "8000419",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:52:00.000Z",
                "predictedTime": "2020-03-15T21:52:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:52:00.000Z",
                "predictedTime": "2020-03-15T21:52:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.869856,
                "longitude": 11.163632
              },
              "placeType": "station",
              "name": "Eichstätt Bahnhof",
              "id": "8001708",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:57:00.000Z",
                "predictedTime": "2020-03-15T21:57:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:56:00.000Z",
                "predictedTime": "2020-03-15T21:56:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.87142,
                "longitude": 11.07898
              },
              "placeType": "station",
              "name": "Dollnstein",
              "id": "8001495",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:03:00.000Z",
                "predictedTime": "2020-03-15T22:03:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:03:00.000Z",
                "predictedTime": "2020-03-15T22:03:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.89197,
                "longitude": 10.994086
              },
              "placeType": "station",
              "name": "Solnhofen",
              "id": "8005593",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:09:00.000Z",
                "predictedTime": "2020-03-15T22:09:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:09:00.000Z",
                "predictedTime": "2020-03-15T22:09:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.926389,
                "longitude": 10.963999
              },
              "placeType": "station",
              "name": "Pappenheim",
              "id": "8004753",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:14:00.000Z",
                "predictedTime": "2020-03-15T22:14:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:14:00.000Z",
                "predictedTime": "2020-03-15T22:14:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.961142,
                "longitude": 10.908104
              },
              "placeType": "station",
              "name": "Treuchtlingen",
              "id": "8000122",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:25:00.000Z",
                "predictedTime": "2020-03-15T22:25:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:20:00.000Z",
                "predictedTime": "2020-03-15T22:20:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.029675,
                "longitude": 10.965393
              },
              "placeType": "station",
              "name": "Weißenburg(Bay)",
              "id": "8006298",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:31:00.000Z",
                "predictedTime": "2020-03-15T22:31:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:30:00.000Z",
                "predictedTime": "2020-03-15T22:30:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.066342,
                "longitude": 10.959774
              },
              "placeType": "station",
              "name": "Ellingen(Bay)",
              "id": "8001749",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:35:00.000Z",
                "predictedTime": "2020-03-15T22:35:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:34:00.000Z",
                "predictedTime": "2020-03-15T22:34:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.106254,
                "longitude": 10.977375
              },
              "placeType": "station",
              "name": "Pleinfeld",
              "id": "8004835",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:40:00.000Z",
                "predictedTime": "2020-03-15T22:40:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:39:00.000Z",
                "predictedTime": "2020-03-15T22:39:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.151156,
                "longitude": 11.007759
              },
              "placeType": "station",
              "name": "Mühlstetten",
              "id": "8004115",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:44:00.000Z",
                "predictedTime": "2020-03-15T22:44:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:44:00.000Z",
                "predictedTime": "2020-03-15T22:44:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.18402,
                "longitude": 11.016802
              },
              "placeType": "station",
              "name": "Georgensgmünd",
              "id": "8002237",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:48:00.000Z",
                "predictedTime": "2020-03-15T22:48:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:47:00.000Z",
                "predictedTime": "2020-03-15T22:47:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.213271,
                "longitude": 11.055608
              },
              "placeType": "station",
              "name": "Unterheckenhofen",
              "id": "8005995",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:52:00.000Z",
                "predictedTime": "2020-03-15T22:52:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:51:00.000Z",
                "predictedTime": "2020-03-15T22:51:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.241147,
                "longitude": 11.082675
              },
              "placeType": "station",
              "name": "Roth",
              "id": "8005185",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:56:00.000Z",
                "predictedTime": "2020-03-15T22:56:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:55:00.000Z",
                "predictedTime": "2020-03-15T22:55:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.32578,
                "longitude": 11.035365
              },
              "placeType": "station",
              "name": "Schwabach",
              "id": "8005439",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T23:04:00.000Z",
                "predictedTime": "2020-03-15T23:04:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T23:03:00.000Z",
                "predictedTime": "2020-03-15T23:03:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T20:31:00.000Z",
            "predictedTime": "2020-03-15T20:31:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T23:15:00.000Z",
            "predictedTime": "2020-03-15T23:15:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "REGIONAL_TRAIN, null",
            "id": null,
            "name": "RB 59108",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 49.445435,
              "longitude": 11.08227
            },
            "placeType": "station",
            "name": "Nürnberg Hbf",
            "id": "8000284",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 49.469724,
                "longitude": 10.989987
              },
              "placeType": "station",
              "name": "Fürth(Bay)Hbf",
              "id": "8000114",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T23:30:00.000Z",
                "predictedTime": "2020-03-15T23:30:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T23:28:00.000Z",
                "predictedTime": "2020-03-15T23:28:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.595969,
                "longitude": 11.001664
              },
              "placeType": "station",
              "name": "Erlangen",
              "id": "8001844",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T23:40:00.000Z",
                "predictedTime": "2020-03-15T23:40:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T23:38:00.000Z",
                "predictedTime": "2020-03-15T23:38:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.900793,
                "longitude": 10.899493
              },
              "placeType": "station",
              "name": "Bamberg",
              "id": "8000025",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T00:04:00.000Z",
                "predictedTime": "2020-03-16T00:04:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T00:02:00.000Z",
                "predictedTime": "2020-03-16T00:02:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.146504,
                "longitude": 11.059312
              },
              "placeType": "station",
              "name": "Lichtenfels",
              "id": "8000228",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T00:26:00.000Z",
                "predictedTime": "2020-03-16T00:26:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T00:24:00.000Z",
                "predictedTime": "2020-03-16T00:24:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.650466,
                "longitude": 11.374546
              },
              "placeType": "station",
              "name": "Saalfeld(Saale)",
              "id": "8010309",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T01:36:00.000Z",
                "predictedTime": "2020-03-16T01:36:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T01:34:00.000Z",
                "predictedTime": "2020-03-16T01:34:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.883763,
                "longitude": 11.593307
              },
              "placeType": "station",
              "name": "Jena-Göschwitz",
              "id": "8010133",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T02:03:00.000Z",
                "predictedTime": "2020-03-16T02:03:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T02:01:00.000Z",
                "predictedTime": "2020-03-16T02:01:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.924916,
                "longitude": 11.587599
              },
              "placeType": "station",
              "name": "Jena Paradies",
              "id": "8011956",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T02:11:00.000Z",
                "predictedTime": "2020-03-16T02:11:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T02:09:00.000Z",
                "predictedTime": "2020-03-16T02:09:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.163004,
                "longitude": 11.796706
              },
              "placeType": "station",
              "name": "Naumburg(Saale)Hbf",
              "id": "8010240",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T02:39:00.000Z",
                "predictedTime": "2020-03-16T02:39:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T02:37:00.000Z",
                "predictedTime": "2020-03-16T02:37:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.477079,
                "longitude": 11.98699
              },
              "placeType": "station",
              "name": "Halle(Saale)Hbf",
              "id": "8010159",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T03:31:00.000Z",
                "predictedTime": "2020-03-16T03:31:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T03:12:00.000Z",
                "predictedTime": "2020-03-16T03:12:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.345081,
                "longitude": 12.381167
              },
              "placeType": "station",
              "name": "Leipzig Hbf",
              "id": "8010205",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T03:57:00.000Z",
                "predictedTime": "2020-03-16T03:57:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T03:50:00.000Z",
                "predictedTime": "2020-03-16T03:50:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.622911,
                "longitude": 12.316966
              },
              "placeType": "station",
              "name": "Bitterfeld",
              "id": "8010050",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:22:00.000Z",
                "predictedTime": "2020-03-16T04:22:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:20:00.000Z",
                "predictedTime": "2020-03-16T04:20:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.867579,
                "longitude": 12.661999
              },
              "placeType": "station",
              "name": "Lutherstadt Wittenberg Hbf",
              "id": "8010222",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:41:00.000Z",
                "predictedTime": "2020-03-16T04:41:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:39:00.000Z",
                "predictedTime": "2020-03-16T04:39:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.47623,
                "longitude": 13.365863
              },
              "placeType": "station",
              "name": "Berlin Südkreuz",
              "id": "8011113",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:21:00.000Z",
                "predictedTime": "2020-03-16T05:21:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:19:00.000Z",
                "predictedTime": "2020-03-16T05:19:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T23:23:00.000Z",
            "predictedTime": "2020-03-15T23:23:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T05:26:00.000Z",
            "predictedTime": "2020-03-16T05:26:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "HIGH_SPEED_TRAIN, null",
            "id": null,
            "name": "IC 94",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "very_fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-16T05:26:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T05:35:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.521526,
              "longitude": 13.411088
            },
            "placeType": "station",
            "name": "Berlin Alexanderplatz",
            "id": "8011155",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 52.520331,
                "longitude": 13.386925
              },
              "placeType": "station",
              "name": "Berlin Friedrichstraße",
              "id": "8011306",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:38:00.000Z",
                "predictedTime": "2020-03-16T05:38:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:37:00.000Z",
                "predictedTime": "2020-03-16T05:37:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.522614,
                "longitude": 13.402197
              },
              "placeType": "station",
              "name": "Berlin Hackescher Markt",
              "id": "8089017",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:40:00.000Z",
                "predictedTime": "2020-03-16T05:40:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:39:00.000Z",
                "predictedTime": "2020-03-16T05:39:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-16T05:35:00.000Z",
            "predictedTime": "2020-03-16T05:35:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T05:41:00.000Z",
            "predictedTime": "2020-03-16T05:41:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "SUBURBAN_TRAIN, 4_08_____3",
            "id": "4_08_____3",
            "name": "S 3",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        }
      ],
      "tripType": "single_modal",
      "alternative": false,
      "information": []
    },
    {
      "from": {
        "location": {
          "latitude": 48.139546,
          "longitude": 11.575203
        },
        "placeType": "station",
        "name": "Theatinerstraße",
        "id": "623374",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "to": {
        "location": {
          "latitude": 52.521526,
          "longitude": 13.411088
        },
        "placeType": "station",
        "name": "Berlin Alexanderplatz",
        "id": "8011155",
        "information": [],
        "barrier_free": true,
        "available": true,
        "hasTimeDetails": false,
        "timeDetailsDeparture": null,
        "timeDetailsArrival": null
      },
      "departure": {
        "time": "2020-03-15T20:34:00.000Z",
        "predictedTime": "2020-03-15T20:34:00.000Z",
        "noPreciseTime": false
      },
      "arrival": {
        "time": "2020-03-16T07:12:00.000Z",
        "predictedTime": "2020-03-16T07:12:00.000Z",
        "noPreciseTime": false
      },
      "routes": [
        {
          "from": {
            "location": {
              "latitude": 48.139546,
              "longitude": 11.575203
            },
            "placeType": "station",
            "name": "Theatinerstraße",
            "id": "623374",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.140858,
                "longitude": 11.568524
              },
              "placeType": "station",
              "name": "München Lenbachplatz",
              "id": "8070934",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:36:00.000Z",
                "predictedTime": "2020-03-15T20:36:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:36:00.000Z",
                "predictedTime": "2020-03-15T20:36:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.139564,
                "longitude": 11.565521
              },
              "placeType": "station",
              "name": "München Karlsplatz",
              "id": "8004132",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T20:38:00.000Z",
                "predictedTime": "2020-03-15T20:38:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T20:38:00.000Z",
                "predictedTime": "2020-03-15T20:38:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T20:34:00.000Z",
            "predictedTime": "2020-03-15T20:34:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T20:40:00.000Z",
            "predictedTime": "2020-03-15T20:40:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "TRAM, 8_swm002_21",
            "id": "8_swm002_21",
            "name": "STR 21",
            "vehicleType": "tram",
            "climateFootprint": "very_low",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-15T20:40:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-15T20:48:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 48.140364,
              "longitude": 11.558744
            },
            "placeType": "station",
            "name": "München Hbf",
            "id": "8000261",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 48.365247,
                "longitude": 10.885595
              },
              "placeType": "station",
              "name": "Augsburg Hbf",
              "id": "8000013",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T21:20:00.000Z",
                "predictedTime": "2020-03-15T21:20:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T21:18:00.000Z",
                "predictedTime": "2020-03-15T21:18:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.399585,
                "longitude": 9.982422
              },
              "placeType": "station",
              "name": "Ulm Hbf",
              "id": "8000170",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T22:08:00.000Z",
                "predictedTime": "2020-03-15T22:08:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T22:06:00.000Z",
                "predictedTime": "2020-03-15T22:06:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 48.785052,
                "longitude": 9.182589
              },
              "placeType": "station",
              "name": "Stuttgart Hbf",
              "id": "8000096",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-15T23:12:00.000Z",
                "predictedTime": "2020-03-15T23:12:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-15T23:06:00.000Z",
                "predictedTime": "2020-03-15T23:06:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 49.479181,
                "longitude": 8.469268
              },
              "placeType": "station",
              "name": "Mannheim Hbf",
              "id": "8000244",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T00:44:00.000Z",
                "predictedTime": "2020-03-16T00:44:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T00:42:00.000Z",
                "predictedTime": "2020-03-16T00:42:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.052926,
                "longitude": 8.569776
              },
              "placeType": "station",
              "name": "Frankfurt(M) Flughafen Fernbf",
              "id": "8070003",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T01:30:00.000Z",
                "predictedTime": "2020-03-16T01:30:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T01:24:00.000Z",
                "predictedTime": "2020-03-16T01:24:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.106817,
                "longitude": 8.663003
              },
              "placeType": "station",
              "name": "Frankfurt(Main)Hbf",
              "id": "8000105",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T01:49:00.000Z",
                "predictedTime": "2020-03-16T01:49:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T01:40:00.000Z",
                "predictedTime": "2020-03-16T01:40:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.976928,
                "longitude": 10.33212
              },
              "placeType": "station",
              "name": "Eisenach",
              "id": "8010097",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T03:48:00.000Z",
                "predictedTime": "2020-03-16T03:48:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T03:45:00.000Z",
                "predictedTime": "2020-03-16T03:45:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.939029,
                "longitude": 10.712688
              },
              "placeType": "station",
              "name": "Gotha",
              "id": "8010136",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:08:00.000Z",
                "predictedTime": "2020-03-16T04:08:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:06:00.000Z",
                "predictedTime": "2020-03-16T04:06:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.97255,
                "longitude": 11.038502
              },
              "placeType": "station",
              "name": "Erfurt Hbf",
              "id": "8010101",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:23:00.000Z",
                "predictedTime": "2020-03-16T04:23:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:21:00.000Z",
                "predictedTime": "2020-03-16T04:21:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 50.991652,
                "longitude": 11.326471
              },
              "placeType": "station",
              "name": "Weimar",
              "id": "8010366",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T04:37:00.000Z",
                "predictedTime": "2020-03-16T04:37:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T04:35:00.000Z",
                "predictedTime": "2020-03-16T04:35:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.163004,
                "longitude": 11.796706
              },
              "placeType": "station",
              "name": "Naumburg(Saale)Hbf",
              "id": "8010240",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:05:00.000Z",
                "predictedTime": "2020-03-16T05:05:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:03:00.000Z",
                "predictedTime": "2020-03-16T05:03:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.477079,
                "longitude": 11.98699
              },
              "placeType": "station",
              "name": "Halle(Saale)Hbf",
              "id": "8010159",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:40:00.000Z",
                "predictedTime": "2020-03-16T05:40:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:38:00.000Z",
                "predictedTime": "2020-03-16T05:38:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 51.622911,
                "longitude": 12.316966
              },
              "placeType": "station",
              "name": "Bitterfeld",
              "id": "8010050",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T05:58:00.000Z",
                "predictedTime": "2020-03-16T05:58:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T05:56:00.000Z",
                "predictedTime": "2020-03-16T05:56:00.000Z",
                "noPreciseTime": false
              }
            },
            {
              "location": {
                "latitude": 52.47623,
                "longitude": 13.365863
              },
              "placeType": "station",
              "name": "Berlin Südkreuz",
              "id": "8011113",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "1970-01-01T00:00:00.000Z",
                "predictedTime": "1970-01-01T00:00:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T06:50:00.000Z",
                "predictedTime": "2020-03-16T06:50:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-15T20:51:00.000Z",
            "predictedTime": "2020-03-15T20:51:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T06:57:00.000Z",
            "predictedTime": "2020-03-16T06:57:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "HIGH_SPEED_TRAIN, null",
            "id": null,
            "name": "ICE 698",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "very_fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [],
          "departure": {
            "time": "2020-03-16T06:57:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T07:06:00.000Z",
            "predictedTime": null,
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "undefined, undefined",
            "vehicleType": "misc",
            "climateFootprint": "medium",
            "speed": "normal",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "source": "Deutsche Bahn (DB Navigator)"
        },
        {
          "from": {
            "location": {
              "latitude": 52.524924,
              "longitude": 13.369629
            },
            "placeType": "station",
            "name": "Berlin Hbf",
            "id": "8011160",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "to": {
            "location": {
              "latitude": 52.521526,
              "longitude": 13.411088
            },
            "placeType": "station",
            "name": "Berlin Alexanderplatz",
            "id": "8011155",
            "information": [],
            "barrier_free": true,
            "available": true,
            "hasTimeDetails": false,
            "timeDetailsDeparture": null,
            "timeDetailsArrival": null
          },
          "stops": [
            {
              "location": {
                "latitude": 52.520331,
                "longitude": 13.386925
              },
              "placeType": "station",
              "name": "Berlin Friedrichstraße",
              "id": "8011306",
              "information": [],
              "barrier_free": true,
              "available": true,
              "hasTimeDetails": true,
              "timeDetailsDeparture": {
                "time": "2020-03-16T07:10:00.000Z",
                "predictedTime": "2020-03-16T07:10:00.000Z",
                "noPreciseTime": false
              },
              "timeDetailsArrival": {
                "time": "2020-03-16T07:09:00.000Z",
                "predictedTime": "2020-03-16T07:09:00.000Z",
                "noPreciseTime": false
              }
            }
          ],
          "departure": {
            "time": "2020-03-16T07:06:00.000Z",
            "predictedTime": "2020-03-16T07:06:00.000Z",
            "noPreciseTime": false
          },
          "arrival": {
            "time": "2020-03-16T07:12:00.000Z",
            "predictedTime": "2020-03-16T07:12:00.000Z",
            "noPreciseTime": false
          },
          "vehicle": {
            "operator": "REGIONAL_TRAIN, null",
            "id": null,
            "name": "RE 62192",
            "vehicleType": "train",
            "climateFootprint": "very_low",
            "speed": "fast",
            "features": [],
            "barrier_free": true,
            "seats": null
          },
          "information": null,
          "source": "Deutsche Bahn (DB Navigator)"
        }
      ],
      "tripType": "single_modal",
      "alternative": false,
      "information": []
    }
  ]
}

````
