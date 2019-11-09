
# How to startup

Install dependencies first time:

```
yarn install
```

Run the dev server:
```
yarn start
```

Open your browser at [http://localhost:3000](http://localhost:3000).

## Remarkable notes

Data has been pulled from [NASA API Asteroids NeoWs](https://nasa.github.io/api-new/).

Js libraries:

- [Material UI](https://material-ui.com/)
- [NVD3](http://nvd3.org/)
- [NVD3 for React](https://github.com/NuCivic/react-nvd3)
- [React Create App](https://github.com/facebook/create-react-app)


## Data model

```
{
    "links": {
      "self": "http://www.neowsapp.com/rest/v1/neo/2451297?api_key=3GRsLMn8cdeucuXbwo0dFMwBdc4faqgzTQY2hVbd"
    },
    "id": "2451297",
    "neo_reference_id": "2451297",
    "name": "451297 (2010 TK54)",
    "designation": "451297",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2451297",
    "absolute_magnitude_h": 19.2,
    "estimated_diameter": {
      "kilometers": {
        "estimated_diameter_min": 0.3841978911,
        "estimated_diameter_max": 0.8590926012
      },
      "meters": {
        "estimated_diameter_min": 384.1978910643,
        "estimated_diameter_max": 859.0926012318
      },
      "miles": {
        "estimated_diameter_min": 0.2387294278,
        "estimated_diameter_max": 0.5338152287
      },
      "feet": {
        "estimated_diameter_min": 1260.4918089193,
        "estimated_diameter_max": 2818.5453698252
      }
    },
    "is_potentially_hazardous_asteroid": true,
    "close_approach_data": [],
    "orbital_data": {
      "orbit_id": "24",
      "orbit_determination_date": "2017-04-06 09:20:08",
      "first_observation_date": "2010-10-08",
      "last_observation_date": "2015-11-09",
      "data_arc_in_days": 1858,
      "observations_used": 69,
      "orbit_uncertainty": "1",
      "minimum_orbit_intersection": ".0138983",
      "jupiter_tisserand_invariant": "3.715",
      "epoch_osculation": "2458600.5",
      "eccentricity": ".4951687211553038",
      "semi_major_axis": "1.840484178151614",
      "inclination": "30.80179064946347",
      "ascending_node_longitude": "28.17719239723301",
      "orbital_period": "912.0036141941391",
      "perihelion_distance": ".9291339813497091",
      "perihelion_argument": "222.9528375699591",
      "aphelion_distance": "2.751834374953519",
      "perihelion_time": "2458887.829380171751",
      "mean_anomaly": "246.5809572989135",
      "mean_motion": ".3947352777961321",
      "equinox": "J2000",
      "orbit_class": {
        "orbit_class_type": "APO",
        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
      }
    },
    "is_sentry_object": false
  }
```