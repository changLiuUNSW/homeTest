# homeTest
Express + Joi + Docker + Heroku

## How to start

**Note** this project is based on node v8.1.4 and npm 5.0.3.

If you have problems to run this project, please check your node and npm versions.

In order to run this project:

```bash
# install the project's dependencies
npm install
# Runs the app
npm start
```

## Publish to Heroku

```bash
# log in to heroku
heroku login
# Log in to Container Registry
heroku container:login
# Navigate to the app’s directory and create a Heroku app
heroku create
# Build the image and push to Container Registry
heroku container:push web
# Then release the image to your app
heroku container:release web
# Now open the app in your browser
heroku open
```

## Demo
Post: https://changhome.herokuapp.com/

Post Request:
```json
{
    "payload": [
        {
            "address": {
                "buildingNumber": "28",
                "lat": -33.912542000000002,
                "lon": 151.00293199999999,
                "postcode": "2198",
                "state": "NSW",
                "street": "Donington Ave",
                "suburb": "Georges Hall"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "aqsdasd",
            "shortId": "6Laj49N3PiwZ",
            "status": 0,
            "type": "htv",
            "workflow": "pending"
        },
        {
            "address": {
                "buildingNumber": "Level 6",
                "postcode": "2060",
                "state": "NSW",
                "street": "146 Arthur Street",
                "suburb": "North Sydney"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "asdasd",
            "shortId": "E9eQVYEMkub2",
            "status": 4,
            "type": "htv",
            "valfirm": null,
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "25",
                "postcode": "4000",
                "state": "QLD",
                "street": "Mary St",
                "suburb": "Brisbane"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "asdas",
            "shortId": "nQMyWWLBvu4A",
            "status": 1,
            "type": "avm",
            "workflow": "pending"
        },
        {
            "address": {
                "buildingNumber": "92",
                "postcode": "2000",
                "state": "NSW",
                "street": "Pitt Street",
                "suburb": "Sydney",
                "unitNumber": "Suite 1 Level 8"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdasd",
            "shortId": "ZM73nE4nKH56",
            "status": 4,
            "type": "avm",
            "workflow": "cancelled"
        },
        {
            "address": {
                "buildingNumber": "28",
                "lat": -33.912542000000002,
                "lon": 151.00293199999999,
                "postcode": "2198",
                "state": "NSW",
                "street": "Donington Ave",
                "suburb": "Georges Hall"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdasdas",
            "shortId": "AQzAB5xMXFNx",
            "status": 3,
            "type": "avm",
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "360",
                "postcode": "3000",
                "state": "VIC",
                "street": "Elizabeth St",
                "suburb": "Melbourne",
                "unitNumber": "Level 28"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdas",
            "shortId": "yebZvgdA7FRk",
            "status": 1,
            "type": "htv",
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "153",
                "postcode": "2229",
                "state": "NSW",
                "street": "Denman Avenue",
                "suburb": "CARINGBAH",
                "unitNumber": "Suite 7"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdas",
            "shortId": "YP7NJVNpVCdr",
            "status": 4,
            "type": "htv",
            "workflow": "cancelled"
        }
    ]
}
```

Response:
```json
{
    "response": [
        {
            "concataddress": "Level 6 146 Arthur Street North Sydney NSW 2060",
            "type": "htv",
            "workflow": "completed"
        },
        {
            "concataddress": "Level 28 360 Elizabeth St Melbourne VIC 3000",
            "type": "htv",
            "workflow": "completed"
        }
    ]
}
```