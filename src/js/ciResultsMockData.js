/*
Copyright 2016 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://raw.githubusercontent.com/waharnum/qi-dashboard-frontend-demo/GPII-1681/LICENSE.txt
*/

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.qualityInfrastructure.frontEnd");

    gpii.qualityInfrastructure.frontEnd.ciResults = {
        "summary": {
            "lastCiResultStatus": "passed",
            "numOflastPassedCiResult": 2,
            "totalCiResults": 1004
        },
        "events": [{
            "id": "failed",
            "data": [{
                "date": "2012-03-05",
                "value": 1
              },
              {
                "date": "2012-03-06",
                "value": 3
              },
              {
                "date": "2012-03-09",
                "value": 1
              },
              {
                "date": "2012-03-12",
                "value": 2
              },
              {
                "date": "2012-03-23",
                "value": 3
              },
              {
                "date": "2012-03-27",
                "value": 1
              },
              {
                "date": "2012-03-29",
                "value": 4
              },
              {
                "date": "2012-04-04",
                "value": 1
              },
              {
                "date": "2012-04-11",
                "value": 1
              },
              {
                "date": "2012-04-20",
                "value": 1
              },
              {
                "date": "2012-04-23",
                "value": 1
              },
              {
                "date": "2012-04-24",
                "value": 2
              },
              {
                "date": "2012-04-25",
                "value": 2
              },
              {
                "date": "2012-04-30",
                "value": 1
              },
              {
                "date": "2012-05-02",
                "value": 1
              },
              {
                "date": "2012-05-03",
                "value": 2
              },
              {
                "date": "2012-05-04",
                "value": 1
              },
              {
                "date": "2012-05-08",
                "value": 1
              },
              {
                "date": "2012-05-10",
                "value": 3
              },
              {
                "date": "2012-05-11",
                "value": 6
              },
              {
                "date": "2012-05-12",
                "value": 1
              },
              {
                "date": "2012-05-13",
                "value": 2
              },
              {
                "date": "2012-06-04",
                "value": 2
              },
              {
                "date": "2012-06-07",
                "value": 1
              },
              {
                "date": "2012-06-08",
                "value": 1
              },
              {
                "date": "2012-06-27",
                "value": 2
              },
              {
                "date": "2012-06-28",
                "value": 1
              },
              {
                "date": "2012-06-29",
                "value": 1
              },
              {
                "date": "2012-07-04",
                "value": 3
              },
              {
                "date": "2012-07-05",
                "value": 1
              },
              {
                "date": "2012-07-06",
                "value": 3
              },
              {
                "date": "2012-07-07",
                "value": 1
              },
              {
                "date": "2012-07-08",
                "value": 4
              },
              {
                "date": "2012-07-09",
                "value": 3
              },
              {
                "date": "2012-07-11",
                "value": 3
              },
              {
                "date": "2012-08-10",
                "value": 2
              },
              {
                "date": "2012-08-22",
                "value": 1
              },
              {
                "date": "2012-08-24",
                "value": 1
              },
              {
                "date": "2012-09-17",
                "value": 2
              },
              {
                "date": "2012-09-18",
                "value": 1
              },
              {
                "date": "2012-09-24",
                "value": 1
              },
              {
                "date": "2012-10-09",
                "value": 2
              },
              {
                "date": "2012-10-10",
                "value": 1
              },
              {
                "date": "2012-10-12",
                "value": 3
              },
              {
                "date": "2012-10-19",
                "value": 2
              },
              {
                "date": "2012-10-22",
                "value": 2
              },
              {
                "date": "2012-10-25",
                "value": 2
              },
              {
                "date": "2012-11-05",
                "value": 2
              },
              {
                "date": "2012-11-12",
                "value": 5
              },
              {
                "date": "2012-11-13",
                "value": 1
              },
              {
                "date": "2012-11-15",
                "value": 1
              },
              {
                "date": "2012-11-20",
                "value": 1
              },
              {
                "date": "2012-11-21",
                "value": 2
              },
              {
                "date": "2012-11-22",
                "value": 2
              },
              {
                "date": "2012-11-24",
                "value": 1
              },
              {
                "date": "2012-11-25",
                "value": 1
              },
              {
                "date": "2012-11-26",
                "value": 3
              },
              {
                "date": "2013-01-31",
                "value": 2
              },
              {
                "date": "2013-02-11",
                "value": 1
              },
              {
                "date": "2013-02-15",
                "value": 2
              },
              {
                "date": "2013-03-06",
                "value": 3
              },
              {
                "date": "2013-03-07",
                "value": 1
              },
              {
                "date": "2013-03-11",
                "value": 1
              },
              {
                "date": "2013-03-14",
                "value": 1
              },
              {
                "date": "2013-04-08",
                "value": 1
              },
              {
                "date": "2013-04-15",
                "value": 1
              },
              {
                "date": "2013-05-01",
                "value": 2
              },
              {
                "date": "2013-06-17",
                "value": 1
              },
              {
                "date": "2013-07-05",
                "value": 2
              },
              {
                "date": "2013-07-22",
                "value": 2
              },
              {
                "date": "2013-07-30",
                "value": 2
              },
              {
                "date": "2013-08-06",
                "value": 1
              },
              {
                "date": "2013-08-09",
                "value": 2
              },
              {
                "date": "2013-08-12",
                "value": 5
              },
              {
                "date": "2013-08-14",
                "value": 1
              },
              {
                "date": "2013-08-21",
                "value": 2
              },
              {
                "date": "2013-08-23",
                "value": 2
              },
              {
                "date": "2013-08-29",
                "value": 2
              },
              {
                "date": "2013-09-15",
                "value": 6
              },
              {
                "date": "2013-09-16",
                "value": 2
              },
              {
                "date": "2013-10-08",
                "value": 1
              },
              {
                "date": "2013-10-09",
                "value": 1
              },
              {
                "date": "2013-10-15",
                "value": 4
              },
              {
                "date": "2013-10-17",
                "value": 2
              },
              {
                "date": "2013-10-28",
                "value": 1
              },
              {
                "date": "2013-10-31",
                "value": 3
              },
              {
                "date": "2013-11-04",
                "value": 1
              },
              {
                "date": "2013-11-14",
                "value": 1
              },
              {
                "date": "2013-11-18",
                "value": 1
              },
              {
                "date": "2013-11-27",
                "value": 1
              },
              {
                "date": "2013-11-28",
                "value": 1
              },
              {
                "date": "2013-12-03",
                "value": 2
              },
              {
                "date": "2013-12-05",
                "value": 1
              },
              {
                "date": "2013-12-10",
                "value": 2
              },
              {
                "date": "2013-12-17",
                "value": 1
              },
              {
                "date": "2013-12-19",
                "value": 3
              },
              {
                "date": "2013-12-20",
                "value": 2
              },
              {
                "date": "2013-12-30",
                "value": 1
              },
              {
                "date": "2014-01-09",
                "value": 1
              },
              {
                "date": "2014-01-10",
                "value": 3
              },
              {
                "date": "2014-01-11",
                "value": 4
              },
              {
                "date": "2014-01-14",
                "value": 2
              },
              {
                "date": "2014-01-21",
                "value": 1
              },
              {
                "date": "2014-01-23",
                "value": 1
              },
              {
                "date": "2014-01-27",
                "value": 1
              },
              {
                "date": "2014-01-29",
                "value": 1
              },
              {
                "date": "2014-02-05",
                "value": 2
              },
              {
                "date": "2014-02-10",
                "value": 3
              },
              {
                "date": "2014-02-12",
                "value": 1
              },
              {
                "date": "2014-02-17",
                "value": 1
              },
              {
                "date": "2014-02-21",
                "value": 2
              },
              {
                "date": "2014-02-24",
                "value": 1
              },
              {
                "date": "2014-03-03",
                "value": 1
              },
              {
                "date": "2014-03-07",
                "value": 1
              },
              {
                "date": "2014-03-12",
                "value": 1
              },
              {
                "date": "2014-03-15",
                "value": 1
              },
              {
                "date": "2014-03-18",
                "value": 1
              },
              {
                "date": "2014-03-21",
                "value": 1
              },
              {
                "date": "2014-03-24",
                "value": 3
              },
              {
                "date": "2014-03-25",
                "value": 1
              },
              {
                "date": "2014-03-31",
                "value": 1
              },
              {
                "date": "2014-05-12",
                "value": 1
              },
              {
                "date": "2014-05-14",
                "value": 2
              },
              {
                "date": "2014-06-11",
                "value": 1
              },
              {
                "date": "2014-06-16",
                "value": 1
              },
              {
                "date": "2014-06-17",
                "value": 1
              },
              {
                "date": "2014-06-22",
                "value": 1
              },
              {
                "date": "2014-06-25",
                "value": 1
              },
              {
                "date": "2014-06-29",
                "value": 1
              },
              {
                "date": "2014-07-14",
                "value": 1
              },
              {
                "date": "2014-07-16",
                "value": 1
              },
              {
                "date": "2014-07-18",
                "value": 1
              },
              {
                "date": "2014-08-04",
                "value": 1
              },
              {
                "date": "2014-08-05",
                "value": 1
              },
              {
                "date": "2014-08-10",
                "value": 1
              },
              {
                "date": "2014-08-12",
                "value": 1
              },
              {
                "date": "2014-08-15",
                "value": 1
              },
              {
                "date": "2014-08-20",
                "value": 1
              },
              {
                "date": "2014-08-26",
                "value": 1
              },
              {
                "date": "2014-09-02",
                "value": 1
              },
              {
                "date": "2014-09-03",
                "value": 1
              },
              {
                "date": "2014-09-13",
                "value": 1
              },
              {
                "date": "2014-09-16",
                "value": 1
              },
              {
                "date": "2014-09-18",
                "value": 2
              },
              {
                "date": "2014-09-25",
                "value": 2
              },
              {
                "date": "2014-10-01",
                "value": 1
              },
              {
                "date": "2014-10-03",
                "value": 1
              },
              {
                "date": "2014-10-14",
                "value": 1
              },
              {
                "date": "2014-10-17",
                "value": 3
              },
              {
                "date": "2014-10-20",
                "value": 1
              },
              {
                "date": "2014-10-22",
                "value": 1
              },
              {
                "date": "2014-10-23",
                "value": 1
              },
              {
                "date": "2014-10-25",
                "value": 1
              },
              {
                "date": "2014-11-10",
                "value": 3
              },
              {
                "date": "2014-11-14",
                "value": 1
              },
              {
                "date": "2014-11-18",
                "value": 1
              },
              {
                "date": "2014-11-19",
                "value": 1
              },
              {
                "date": "2014-12-02",
                "value": 1
              },
              {
                "date": "2014-12-04",
                "value": 1
              },
              {
                "date": "2014-12-09",
                "value": 1
              },
              {
                "date": "2014-12-10",
                "value": 1
              },
              {
                "date": "2014-12-13",
                "value": 1
              },
              {
                "date": "2014-12-16",
                "value": 2
              },
              {
                "date": "2014-12-17",
                "value": 2
              },
              {
                "date": "2014-12-18",
                "value": 2
              },
              {
                "date": "2014-12-22",
                "value": 2
              },
              {
                "date": "2014-12-23",
                "value": 1
              },
              {
                "date": "2014-12-25",
                "value": 1
              },
              {
                "date": "2014-12-26",
                "value": 1
              },
              {
                "date": "2015-01-02",
                "value": 2
              },
              {
                "date": "2015-01-05",
                "value": 1
              },
              {
                "date": "2015-01-06",
                "value": 2
              },
              {
                "date": "2015-01-07",
                "value": 2
              },
              {
                "date": "2015-01-08",
                "value": 5
              },
              {
                "date": "2015-01-09",
                "value": 4
              },
              {
                "date": "2015-01-11",
                "value": 1
              },
              {
                "date": "2015-01-13",
                "value": 5
              },
              {
                "date": "2015-01-14",
                "value": 3
              },
              {
                "date": "2015-01-15",
                "value": 3
              },
              {
                "date": "2015-01-16",
                "value": 4
              },
              {
                "date": "2015-01-20",
                "value": 2
              },
              {
                "date": "2015-01-21",
                "value": 1
              },
              {
                "date": "2015-01-29",
                "value": 1
              },
              {
                "date": "2015-02-02",
                "value": 2
              },
              {
                "date": "2015-02-06",
                "value": 4
              },
              {
                "date": "2015-02-18",
                "value": 1
              },
              {
                "date": "2015-02-19",
                "value": 1
              },
              {
                "date": "2015-02-24",
                "value": 3
              },
              {
                "date": "2015-02-25",
                "value": 1
              },
              {
                "date": "2015-03-10",
                "value": 2
              },
              {
                "date": "2015-03-13",
                "value": 1
              },
              {
                "date": "2015-03-19",
                "value": 2
              },
              {
                "date": "2015-03-31",
                "value": 1
              },
              {
                "date": "2015-04-02",
                "value": 1
              },
              {
                "date": "2015-04-22",
                "value": 2
              },
              {
                "date": "2015-05-06",
                "value": 2
              },
              {
                "date": "2014-12-15",
                "value": 2
              },
              {
                "date": "2015-02-12",
                "value": 1
              },
              {
                "date": "2015-04-09",
                "value": 1
              },
              {
                "date": "2015-05-07",
                "value": 2
              },
              {
                "date": "2015-05-08",
                "value": 3
              },
              {
                "date": "2015-05-11",
                "value": 1
              },
              {
                "date": "2015-05-12",
                "value": 2
              },
              {
                "date": "2015-05-15",
                "value": 1
              },
              {
                "date": "2015-05-20",
                "value": 2
              },
              {
                "date": "2015-05-22",
                "value": 2
              },
              {
                "date": "2015-05-19",
                "value": 2
              },
              {
                "date": "2015-06-15",
                "value": 2
              },
              {
                "date": "2015-06-16",
                "value": 1
              },
              {
                "date": "2015-06-19",
                "value": 1
              },
              {
                "date": "2015-06-28",
                "value": 1
              },
              {
                "date": "2015-07-02",
                "value": 2
              },
              {
                "date": "2015-07-03",
                "value": 2
              },
              {
                "date": "2015-07-14",
                "value": 1
              },
              {
                "date": "2015-07-24",
                "value": 1
              },
              {
                "date": "2015-07-31",
                "value": 2
              },
              {
                "date": "2015-08-05",
                "value": 2
              },
              {
                "date": "2015-08-07",
                "value": 1
              },
              {
                "date": "2015-08-20",
                "value": 4
              },
              {
                "date": "2015-08-28",
                "value": 1
              },
              {
                "date": "2015-09-02",
                "value": 1
              },
              {
                "date": "2015-09-16",
                "value": 3
              },
              {
                "date": "2015-09-24",
                "value": 1
              },
              {
                "date": "2015-10-01",
                "value": 1
              },
              {
                "date": "2015-10-07",
                "value": 1
              },
              {
                "date": "2015-10-08",
                "value": 4
              },
              {
                "date": "2015-10-10",
                "value": 1
              },
              {
                "date": "2015-10-11",
                "value": 1
              },
              {
                "date": "2015-10-13",
                "value": 1
              },
              {
                "date": "2015-10-14",
                "value": 1
              },
              {
                "date": "2015-10-16",
                "value": 1
              },
              {
                "date": "2015-10-20",
                "value": 1
              },
              {
                "date": "2015-10-26",
                "value": 1
              },
              {
                "date": "2015-10-27",
                "value": 1
              },
              {
                "date": "2015-10-30",
                "value": 1
              },
              {
                "date": "2015-11-02",
                "value": 2
              },
              {
                "date": "2015-11-03",
                "value": 1
              },
              {
                "date": "2015-11-06",
                "value": 1
              },
              {
                "date": "2015-11-12",
                "value": 1
              },
              {
                "date": "2015-11-13",
                "value": 1
              },
              {
                "date": "2015-11-17",
                "value": 2
              },
              {
                "date": "2015-11-18",
                "value": 1
              },
              {
                "date": "2015-11-26",
                "value": 1
              },
              {
                "date": "2015-11-30",
                "value": 3
              },
              {
                "date": "2015-12-01",
                "value": 2
              },
              {
                "date": "2015-12-04",
                "value": 1
              },
              {
                "date": "2015-12-07",
                "value": 1
              },
              {
                "date": "2015-12-09",
                "value": 2
              },
              {
                "date": "2015-12-10",
                "value": 1
              },
              {
                "date": "2015-12-11",
                "value": 1
              },
              {
                "date": "2015-12-14",
                "value": 1
              },
              {
                "date": "2015-12-15",
                "value": 1
              },
              {
                "date": "2015-12-16",
                "value": 2
              },
              {
                "date": "2015-12-18",
                "value": 1
              },
              {
                "date": "2015-12-23",
                "value": 1
              },
              {
                "date": "2016-01-05",
                "value": 2
              },
              {
                "date": "2016-01-06",
                "value": 1
              },
              {
                "date": "2016-01-08",
                "value": 1
              },
              {
                "date": "2016-01-11",
                "value": 1
              },
              {
                "date": "2016-01-21",
                "value": 1
              },
              {
                "date": "2016-01-22",
                "value": 1
              },
              {
                "date": "2016-01-25",
                "value": 1
              },
              {
                "date": "2016-01-29",
                "value": 1
              },
              {
                "date": "2016-02-12",
                "value": 1
              },
              {
                "date": "2016-02-23",
                "value": 1
              },
              {
                "date": "2016-03-24",
                "value": 1
              },
              {
                "date": "2016-03-30",
                "value": 1
              },
              {
                "date": "2016-04-05",
                "value": 1
              },
              {
                "date": "2016-04-15",
                "value": 1
              },
              {
                "date": "2016-05-03",
                "value": 1
              },
              {
                "date": "2016-05-06",
                "value": 1
              },
              {
                "date": "2016-05-20",
                "value": 1
              },
              {
                "date": "2016-05-25",
                "value": 1
              },
              {
                "date": "2016-05-26",
                "value": 1
              },
              {
                "date": "2016-06-02",
                "value": 1
              },
              {
                "date": "2016-05-19",
                "value": 1
              },
              {
                "date": "2016-06-04",
                "value": 2
              },
              {
                "date": "2016-06-10",
                "value": 1
              },
              {
                "date": "2016-06-14",
                "value": 1
              },
              {
                "date": "2016-06-17",
                "value": 1
              },
              {
                "date": "2016-06-21",
                "value": 1
              },
              {
                "date": "2016-06-24",
                "value": 1
              },
              {
                "date": "2016-06-30",
                "value": 1
              },
              {
                "date": "2016-07-05",
                "value": 1
              },
              {
                "date": "2016-07-06",
                "value": 1
              },
              {
                "date": "2016-07-20",
                "value": 1
              },
              {
                "date": "2016-07-21",
                "value": 1
              },
              {
                "date": "2016-08-11",
                "value": 2
              },
              {
                "date": "2016-08-12",
                "value": 1
              },
              {
                "date": "2016-08-13",
                "value": 1
              },
              {
                "date": "2016-08-16",
                "value": 1
              },
              {
                "date": "2016-08-18",
                "value": 1
              },
              {
                "date": "2016-08-29",
                "value": 1
              },
              {
                "date": "2016-08-31",
                "value": 2
              },
              {
                "date": "2016-09-01",
                "value": 1
              },
              {
                "date": "2016-09-03",
                "value": 1
              },
              {
                "date": "2016-09-07",
                "value": 1
              },
              {
                "date": "2016-09-14",
                "value": 2
              },
              {
                "date": "2016-09-15",
                "value": 1
              },
              {
                "date": "2016-09-16",
                "value": 1
              },
              {
                "date": "2016-09-21",
                "value": 2
              },
              {
                "date": "2016-09-22",
                "value": 1
              },
              {
                "date": "2016-09-23",
                "value": 1
              },
              {
                "date": "2016-09-26",
                "value": 1
              },
              {
                "date": "2016-09-27",
                "value": 1
              },
              {
                "date": "2016-09-28",
                "value": 3
              },
              {
                "date": "2016-09-30",
                "value": 1
              },
              {
                "date": "2016-10-01",
                "value": 1
              },
              {
                "date": "2016-10-06",
                "value": 1
              },
              {
                "date": "2016-10-17",
                "value": 2
              },
              {
                "date": "2016-10-25",
                "value": 1
              },
              {
                "date": "2016-11-06",
                "value": 1
              },
              {
                "date": "2016-11-07",
                "value": 1
              },
              {
                "date": "2016-11-10",
                "value": 1
              },
              {
                "date": "2016-11-16",
                "value": 1
              },
              {
                "date": "2016-11-18",
                "value": 1
              },
              {
                "date": "2016-11-29",
                "value": 1
              },
              {
                "date": "2016-11-30",
                "value": 1
              },
              {
                "date": "2017-01-27",
                "value": 2
              },
              {
                "date": "2017-01-30",
                "value": 2
              },
              {
                "date": "2017-02-01",
                "value": 2
              },
              {
                "date": "2017-02-02",
                "value": 1
              },
              {
                "date": "2017-02-03",
                "value": 1
              }
            ]
          },
          {
            "id": "success",
            "data": [
              {
                "date": "2012-03-05",
                "value": 6
              },
              {
                "date": "2012-03-06",
                "value": 1
              },
              {
                "date": "2012-03-07",
                "value": 12
              },
              {
                "date": "2012-03-08",
                "value": 4
              },
              {
                "date": "2012-03-09",
                "value": 10
              },
              {
                "date": "2012-03-10",
                "value": 1
              },
              {
                "date": "2012-03-12",
                "value": 1
              },
              {
                "date": "2012-03-14",
                "value": 1
              },
              {
                "date": "2012-03-20",
                "value": 1
              },
              {
                "date": "2012-03-22",
                "value": 1
              },
              {
                "date": "2012-03-23",
                "value": 4
              },
              {
                "date": "2012-03-27",
                "value": 2
              },
              {
                "date": "2012-03-28",
                "value": 1
              },
              {
                "date": "2012-03-29",
                "value": 9
              },
              {
                "date": "2012-03-30",
                "value": 1
              },
              {
                "date": "2012-04-03",
                "value": 1
              },
              {
                "date": "2012-04-04",
                "value": 6
              },
              {
                "date": "2012-04-05",
                "value": 4
              },
              {
                "date": "2012-04-09",
                "value": 2
              },
              {
                "date": "2012-04-10",
                "value": 3
              },
              {
                "date": "2012-04-11",
                "value": 2
              },
              {
                "date": "2012-04-23",
                "value": 1
              },
              {
                "date": "2012-04-24",
                "value": 6
              },
              {
                "date": "2012-04-25",
                "value": 4
              },
              {
                "date": "2012-04-27",
                "value": 1
              },
              {
                "date": "2012-05-02",
                "value": 3
              },
              {
                "date": "2012-05-04",
                "value": 2
              },
              {
                "date": "2012-05-07",
                "value": 1
              },
              {
                "date": "2012-05-08",
                "value": 9
              },
              {
                "date": "2012-05-09",
                "value": 7
              },
              {
                "date": "2012-05-10",
                "value": 12
              },
              {
                "date": "2012-05-11",
                "value": 28
              },
              {
                "date": "2012-05-12",
                "value": 6
              },
              {
                "date": "2012-05-13",
                "value": 2
              },
              {
                "date": "2012-05-18",
                "value": 1
              },
              {
                "date": "2012-05-22",
                "value": 1
              },
              {
                "date": "2012-05-23",
                "value": 2
              },
              {
                "date": "2012-06-04",
                "value": 2
              },
              {
                "date": "2012-06-07",
                "value": 4
              },
              {
                "date": "2012-06-26",
                "value": 3
              },
              {
                "date": "2012-06-27",
                "value": 2
              },
              {
                "date": "2012-06-28",
                "value": 2
              },
              {
                "date": "2012-07-03",
                "value": 3
              },
              {
                "date": "2012-07-04",
                "value": 10
              },
              {
                "date": "2012-07-05",
                "value": 2
              },
              {
                "date": "2012-07-06",
                "value": 6
              },
              {
                "date": "2012-07-07",
                "value": 8
              },
              {
                "date": "2012-07-08",
                "value": 16
              },
              {
                "date": "2012-07-09",
                "value": 4
              },
              {
                "date": "2012-07-11",
                "value": 6
              },
              {
                "date": "2012-07-12",
                "value": 6
              },
              {
                "date": "2012-07-13",
                "value": 6
              },
              {
                "date": "2012-07-14",
                "value": 2
              },
              {
                "date": "2012-08-09",
                "value": 2
              },
              {
                "date": "2012-08-10",
                "value": 2
              },
              {
                "date": "2012-08-13",
                "value": 1
              },
              {
                "date": "2012-08-14",
                "value": 2
              },
              {
                "date": "2012-08-16",
                "value": 2
              },
              {
                "date": "2012-08-17",
                "value": 3
              },
              {
                "date": "2012-08-20",
                "value": 1
              },
              {
                "date": "2012-08-22",
                "value": 2
              },
              {
                "date": "2012-08-23",
                "value": 1
              },
              {
                "date": "2012-08-24",
                "value": 4
              },
              {
                "date": "2012-08-27",
                "value": 1
              },
              {
                "date": "2012-08-28",
                "value": 3
              },
              {
                "date": "2012-08-29",
                "value": 1
              },
              {
                "date": "2012-09-05",
                "value": 2
              },
              {
                "date": "2012-09-10",
                "value": 1
              },
              {
                "date": "2012-09-11",
                "value": 1
              },
              {
                "date": "2012-09-14",
                "value": 1
              },
              {
                "date": "2012-09-17",
                "value": 5
              },
              {
                "date": "2012-09-18",
                "value": 2
              },
              {
                "date": "2012-09-19",
                "value": 3
              },
              {
                "date": "2012-09-24",
                "value": 1
              },
              {
                "date": "2012-09-25",
                "value": 1
              },
              {
                "date": "2012-09-27",
                "value": 1
              },
              {
                "date": "2012-09-28",
                "value": 11
              },
              {
                "date": "2012-10-03",
                "value": 3
              },
              {
                "date": "2012-10-04",
                "value": 2
              },
              {
                "date": "2012-10-09",
                "value": 1
              },
              {
                "date": "2012-10-10",
                "value": 1
              },
              {
                "date": "2012-10-11",
                "value": 3
              },
              {
                "date": "2012-10-12",
                "value": 2
              },
              {
                "date": "2012-10-16",
                "value": 2
              },
              {
                "date": "2012-10-18",
                "value": 3
              },
              {
                "date": "2012-10-19",
                "value": 2
              },
              {
                "date": "2012-10-22",
                "value": 6
              },
              {
                "date": "2012-10-25",
                "value": 4
              },
              {
                "date": "2012-10-30",
                "value": 4
              },
              {
                "date": "2012-11-01",
                "value": 3
              },
              {
                "date": "2012-11-05",
                "value": 5
              },
              {
                "date": "2012-11-12",
                "value": 6
              },
              {
                "date": "2012-11-13",
                "value": 4
              },
              {
                "date": "2012-11-14",
                "value": 1
              },
              {
                "date": "2012-11-15",
                "value": 3
              },
              {
                "date": "2012-11-16",
                "value": 2
              },
              {
                "date": "2012-11-18",
                "value": 4
              },
              {
                "date": "2012-11-19",
                "value": 1
              },
              {
                "date": "2012-11-21",
                "value": 2
              },
              {
                "date": "2012-11-22",
                "value": 5
              },
              {
                "date": "2012-11-23",
                "value": 3
              },
              {
                "date": "2012-11-24",
                "value": 10
              },
              {
                "date": "2012-11-25",
                "value": 10
              },
              {
                "date": "2012-11-26",
                "value": 9
              },
              {
                "date": "2012-11-27",
                "value": 1
              },
              {
                "date": "2012-11-28",
                "value": 1
              },
              {
                "date": "2012-11-30",
                "value": 3
              },
              {
                "date": "2013-01-16",
                "value": 1
              },
              {
                "date": "2013-01-17",
                "value": 1
              },
              {
                "date": "2013-01-22",
                "value": 1
              },
              {
                "date": "2013-01-30",
                "value": 1
              },
              {
                "date": "2013-01-31",
                "value": 6
              },
              {
                "date": "2013-02-01",
                "value": 1
              },
              {
                "date": "2013-02-04",
                "value": 2
              },
              {
                "date": "2013-02-15",
                "value": 1
              },
              {
                "date": "2013-02-25",
                "value": 3
              },
              {
                "date": "2013-02-27",
                "value": 3
              },
              {
                "date": "2013-02-28",
                "value": 1
              },
              {
                "date": "2013-03-06",
                "value": 6
              },
              {
                "date": "2013-03-07",
                "value": 2
              },
              {
                "date": "2013-03-11",
                "value": 13
              },
              {
                "date": "2013-03-12",
                "value": 2
              },
              {
                "date": "2013-03-13",
                "value": 1
              },
              {
                "date": "2013-03-14",
                "value": 3
              },
              {
                "date": "2013-03-18",
                "value": 1
              },
              {
                "date": "2013-03-19",
                "value": 1
              },
              {
                "date": "2013-04-06",
                "value": 1
              },
              {
                "date": "2013-04-08",
                "value": 1
              },
              {
                "date": "2013-04-09",
                "value": 2
              },
              {
                "date": "2013-04-18",
                "value": 1
              },
              {
                "date": "2013-04-22",
                "value": 2
              },
              {
                "date": "2013-06-05",
                "value": 1
              },
              {
                "date": "2013-06-17",
                "value": 1
              },
              {
                "date": "2013-06-18",
                "value": 3
              },
              {
                "date": "2013-06-19",
                "value": 1
              },
              {
                "date": "2013-07-05",
                "value": 3
              },
              {
                "date": "2013-07-08",
                "value": 3
              },
              {
                "date": "2013-07-09",
                "value": 3
              },
              {
                "date": "2013-07-13",
                "value": 1
              },
              {
                "date": "2013-07-16",
                "value": 1
              },
              {
                "date": "2013-07-22",
                "value": 1
              },
              {
                "date": "2013-07-23",
                "value": 1
              },
              {
                "date": "2013-07-26",
                "value": 1
              },
              {
                "date": "2013-07-28",
                "value": 3
              },
              {
                "date": "2013-07-29",
                "value": 2
              },
              {
                "date": "2013-07-30",
                "value": 2
              },
              {
                "date": "2013-07-31",
                "value": 1
              },
              {
                "date": "2013-08-01",
                "value": 1
              },
              {
                "date": "2013-08-07",
                "value": 2
              },
              {
                "date": "2013-08-12",
                "value": 8
              },
              {
                "date": "2013-08-13",
                "value": 3
              },
              {
                "date": "2013-08-15",
                "value": 4
              },
              {
                "date": "2013-08-16",
                "value": 2
              },
              {
                "date": "2013-08-22",
                "value": 9
              },
              {
                "date": "2013-08-23",
                "value": 4
              },
              {
                "date": "2013-08-26",
                "value": 1
              },
              {
                "date": "2013-08-29",
                "value": 1
              },
              {
                "date": "2013-09-03",
                "value": 1
              },
              {
                "date": "2013-09-04",
                "value": 1
              },
              {
                "date": "2013-09-05",
                "value": 4
              },
              {
                "date": "2013-09-07",
                "value": 3
              },
              {
                "date": "2013-09-10",
                "value": 5
              },
              {
                "date": "2013-09-11",
                "value": 2
              },
              {
                "date": "2013-09-12",
                "value": 2
              },
              {
                "date": "2013-09-13",
                "value": 1
              },
              {
                "date": "2013-09-14",
                "value": 7
              },
              {
                "date": "2013-09-15",
                "value": 16
              },
              {
                "date": "2013-09-16",
                "value": 12
              },
              {
                "date": "2013-09-17",
                "value": 5
              },
              {
                "date": "2013-09-21",
                "value": 1
              },
              {
                "date": "2013-10-09",
                "value": 2
              },
              {
                "date": "2013-10-15",
                "value": 3
              },
              {
                "date": "2013-10-16",
                "value": 1
              },
              {
                "date": "2013-10-17",
                "value": 2
              },
              {
                "date": "2013-10-18",
                "value": 1
              },
              {
                "date": "2013-10-26",
                "value": 1
              },
              {
                "date": "2013-10-28",
                "value": 1
              },
              {
                "date": "2013-10-31",
                "value": 3
              },
              {
                "date": "2013-11-01",
                "value": 1
              },
              {
                "date": "2013-11-11",
                "value": 2
              },
              {
                "date": "2013-11-13",
                "value": 2
              },
              {
                "date": "2013-11-14",
                "value": 3
              },
              {
                "date": "2013-11-15",
                "value": 2
              },
              {
                "date": "2013-11-18",
                "value": 3
              },
              {
                "date": "2013-11-21",
                "value": 1
              },
              {
                "date": "2013-09-18",
                "value": 1
              },
              {
                "date": "2013-10-30",
                "value": 1
              },
              {
                "date": "2013-11-22",
                "value": 2
              },
              {
                "date": "2013-11-25",
                "value": 1
              },
              {
                "date": "2013-11-26",
                "value": 1
              },
              {
                "date": "2013-11-28",
                "value": 3
              },
              {
                "date": "2013-12-02",
                "value": 4
              },
              {
                "date": "2013-12-03",
                "value": 5
              },
              {
                "date": "2013-12-04",
                "value": 1
              },
              {
                "date": "2013-12-05",
                "value": 5
              },
              {
                "date": "2013-12-09",
                "value": 1
              },
              {
                "date": "2013-12-10",
                "value": 13
              },
              {
                "date": "2013-12-11",
                "value": 1
              },
              {
                "date": "2013-12-12",
                "value": 3
              },
              {
                "date": "2013-12-16",
                "value": 3
              },
              {
                "date": "2013-12-17",
                "value": 12
              },
              {
                "date": "2013-12-18",
                "value": 2
              },
              {
                "date": "2013-12-19",
                "value": 6
              },
              {
                "date": "2013-12-20",
                "value": 5
              },
              {
                "date": "2013-12-30",
                "value": 2
              },
              {
                "date": "2014-01-02",
                "value": 1
              },
              {
                "date": "2014-01-08",
                "value": 5
              },
              {
                "date": "2014-01-09",
                "value": 12
              },
              {
                "date": "2014-01-10",
                "value": 8
              },
              {
                "date": "2014-01-11",
                "value": 7
              },
              {
                "date": "2014-01-12",
                "value": 3
              },
              {
                "date": "2014-01-13",
                "value": 1
              },
              {
                "date": "2014-01-14",
                "value": 2
              },
              {
                "date": "2014-01-23",
                "value": 6
              },
              {
                "date": "2014-01-27",
                "value": 3
              },
              {
                "date": "2014-01-28",
                "value": 2
              },
              {
                "date": "2014-01-29",
                "value": 3
              },
              {
                "date": "2014-01-31",
                "value": 3
              },
              {
                "date": "2014-02-04",
                "value": 4
              },
              {
                "date": "2014-02-05",
                "value": 3
              },
              {
                "date": "2014-02-06",
                "value": 1
              },
              {
                "date": "2014-02-07",
                "value": 5
              },
              {
                "date": "2014-02-10",
                "value": 4
              },
              {
                "date": "2014-02-12",
                "value": 1
              },
              {
                "date": "2014-02-13",
                "value": 2
              },
              {
                "date": "2014-02-14",
                "value": 3
              },
              {
                "date": "2014-02-17",
                "value": 1
              },
              {
                "date": "2014-02-18",
                "value": 1
              },
              {
                "date": "2014-02-19",
                "value": 1
              },
              {
                "date": "2014-02-20",
                "value": 5
              },
              {
                "date": "2014-02-21",
                "value": 2
              },
              {
                "date": "2014-02-22",
                "value": 2
              },
              {
                "date": "2014-02-11",
                "value": 2
              },
              {
                "date": "2014-02-25",
                "value": 4
              },
              {
                "date": "2014-02-26",
                "value": 2
              },
              {
                "date": "2014-03-03",
                "value": 1
              },
              {
                "date": "2014-03-02",
                "value": 1
              },
              {
                "date": "2014-03-07",
                "value": 1
              },
              {
                "date": "2014-03-12",
                "value": 1
              },
              {
                "date": "2014-03-15",
                "value": 1
              },
              {
                "date": "2014-03-16",
                "value": 2
              },
              {
                "date": "2014-03-17",
                "value": 1
              },
              {
                "date": "2014-03-18",
                "value": 5
              },
              {
                "date": "2014-03-24",
                "value": 2
              },
              {
                "date": "2014-03-25",
                "value": 1
              },
              {
                "date": "2014-03-27",
                "value": 1
              },
              {
                "date": "2014-03-28",
                "value": 1
              },
              {
                "date": "2014-04-01",
                "value": 1
              },
              {
                "date": "2014-04-02",
                "value": 1
              },
              {
                "date": "2014-04-03",
                "value": 2
              },
              {
                "date": "2014-04-30",
                "value": 3
              },
              {
                "date": "2014-05-05",
                "value": 3
              },
              {
                "date": "2014-05-10",
                "value": 1
              },
              {
                "date": "2014-05-14",
                "value": 5
              },
              {
                "date": "2014-05-15",
                "value": 3
              },
              {
                "date": "2014-06-09",
                "value": 1
              },
              {
                "date": "2014-06-12",
                "value": 2
              },
              {
                "date": "2014-06-13",
                "value": 2
              },
              {
                "date": "2014-06-16",
                "value": 3
              },
              {
                "date": "2014-06-22",
                "value": 2
              },
              {
                "date": "2014-06-25",
                "value": 1
              },
              {
                "date": "2014-07-07",
                "value": 2
              },
              {
                "date": "2014-07-08",
                "value": 1
              },
              {
                "date": "2014-07-09",
                "value": 1
              },
              {
                "date": "2014-07-17",
                "value": 2
              },
              {
                "date": "2014-07-18",
                "value": 2
              },
              {
                "date": "2014-07-22",
                "value": 1
              },
              {
                "date": "2014-07-24",
                "value": 2
              },
              {
                "date": "2014-08-03",
                "value": 1
              },
              {
                "date": "2014-08-04",
                "value": 2
              },
              {
                "date": "2014-08-05",
                "value": 3
              },
              {
                "date": "2014-08-07",
                "value": 2
              },
              {
                "date": "2014-08-08",
                "value": 4
              },
              {
                "date": "2014-08-12",
                "value": 1
              },
              {
                "date": "2014-08-13",
                "value": 2
              },
              {
                "date": "2014-08-14",
                "value": 2
              },
              {
                "date": "2014-08-15",
                "value": 2
              },
              {
                "date": "2014-08-20",
                "value": 6
              },
              {
                "date": "2014-08-22",
                "value": 1
              },
              {
                "date": "2014-08-25",
                "value": 1
              },
              {
                "date": "2014-08-26",
                "value": 3
              },
              {
                "date": "2014-08-27",
                "value": 2
              },
              {
                "date": "2014-09-01",
                "value": 3
              },
              {
                "date": "2014-09-03",
                "value": 2
              },
              {
                "date": "2014-09-04",
                "value": 1
              },
              {
                "date": "2014-09-05",
                "value": 2
              },
              {
                "date": "2014-09-13",
                "value": 4
              },
              {
                "date": "2014-09-15",
                "value": 3
              },
              {
                "date": "2014-09-16",
                "value": 1
              },
              {
                "date": "2014-09-17",
                "value": 1
              },
              {
                "date": "2014-09-18",
                "value": 1
              },
              {
                "date": "2014-09-19",
                "value": 2
              },
              {
                "date": "2014-09-20",
                "value": 1
              },
              {
                "date": "2014-09-25",
                "value": 1
              },
              {
                "date": "2014-09-26",
                "value": 1
              },
              {
                "date": "2014-09-29",
                "value": 1
              },
              {
                "date": "2014-09-30",
                "value": 1
              },
              {
                "date": "2014-10-03",
                "value": 2
              },
              {
                "date": "2014-10-06",
                "value": 1
              },
              {
                "date": "2014-10-07",
                "value": 2
              },
              {
                "date": "2014-10-09",
                "value": 1
              },
              {
                "date": "2014-10-11",
                "value": 3
              },
              {
                "date": "2014-10-14",
                "value": 2
              },
              {
                "date": "2014-10-15",
                "value": 1
              },
              {
                "date": "2014-10-16",
                "value": 1
              },
              {
                "date": "2014-10-17",
                "value": 5
              },
              {
                "date": "2014-10-19",
                "value": 3
              },
              {
                "date": "2014-10-20",
                "value": 1
              },
              {
                "date": "2014-10-21",
                "value": 3
              },
              {
                "date": "2014-10-22",
                "value": 3
              },
              {
                "date": "2014-10-23",
                "value": 2
              },
              {
                "date": "2014-10-25",
                "value": 1
              },
              {
                "date": "2014-11-04",
                "value": 1
              },
              {
                "date": "2014-11-05",
                "value": 1
              },
              {
                "date": "2014-11-06",
                "value": 2
              },
              {
                "date": "2014-11-07",
                "value": 2
              },
              {
                "date": "2014-11-08",
                "value": 3
              },
              {
                "date": "2014-11-09",
                "value": 1
              },
              {
                "date": "2014-11-10",
                "value": 4
              },
              {
                "date": "2014-11-11",
                "value": 2
              },
              {
                "date": "2014-11-13",
                "value": 1
              },
              {
                "date": "2014-11-14",
                "value": 2
              },
              {
                "date": "2014-11-17",
                "value": 1
              },
              {
                "date": "2014-11-18",
                "value": 4
              },
              {
                "date": "2014-11-19",
                "value": 4
              },
              {
                "date": "2014-11-21",
                "value": 3
              },
              {
                "date": "2014-11-26",
                "value": 4
              },
              {
                "date": "2014-11-27",
                "value": 1
              },
              {
                "date": "2014-11-28",
                "value": 2
              },
              {
                "date": "2014-12-02",
                "value": 1
              },
              {
                "date": "2014-12-03",
                "value": 1
              },
              {
                "date": "2014-12-08",
                "value": 1
              },
              {
                "date": "2014-12-09",
                "value": 5
              },
              {
                "date": "2014-12-10",
                "value": 3
              },
              {
                "date": "2014-12-11",
                "value": 1
              },
              {
                "date": "2014-12-13",
                "value": 3
              },
              {
                "date": "2014-12-14",
                "value": 3
              },
              {
                "date": "2014-12-16",
                "value": 6
              },
              {
                "date": "2014-12-17",
                "value": 4
              },
              {
                "date": "2014-12-19",
                "value": 4
              },
              {
                "date": "2014-12-20",
                "value": 2
              },
              {
                "date": "2014-12-22",
                "value": 2
              },
              {
                "date": "2014-12-23",
                "value": 10
              },
              {
                "date": "2015-01-02",
                "value": 3
              },
              {
                "date": "2015-01-04",
                "value": 1
              },
              {
                "date": "2015-01-05",
                "value": 3
              },
              {
                "date": "2015-01-06",
                "value": 11
              },
              {
                "date": "2015-01-07",
                "value": 9
              },
              {
                "date": "2015-01-08",
                "value": 15
              },
              {
                "date": "2015-01-09",
                "value": 27
              },
              {
                "date": "2015-01-11",
                "value": 1
              },
              {
                "date": "2015-01-12",
                "value": 8
              },
              {
                "date": "2015-01-13",
                "value": 31
              },
              {
                "date": "2015-01-14",
                "value": 8
              },
              {
                "date": "2015-01-15",
                "value": 9
              },
              {
                "date": "2015-01-16",
                "value": 8
              },
              {
                "date": "2015-01-17",
                "value": 1
              },
              {
                "date": "2015-01-19",
                "value": 3
              },
              {
                "date": "2015-01-20",
                "value": 4
              },
              {
                "date": "2015-01-26",
                "value": 2
              },
              {
                "date": "2015-01-27",
                "value": 2
              },
              {
                "date": "2015-01-29",
                "value": 1
              },
              {
                "date": "2015-01-30",
                "value": 2
              },
              {
                "date": "2015-02-02",
                "value": 3
              },
              {
                "date": "2015-02-03",
                "value": 3
              },
              {
                "date": "2015-01-18",
                "value": 2
              },
              {
                "date": "2015-02-05",
                "value": 4
              },
              {
                "date": "2015-02-06",
                "value": 3
              },
              {
                "date": "2015-02-09",
                "value": 3
              },
              {
                "date": "2015-02-11",
                "value": 2
              },
              {
                "date": "2015-02-13",
                "value": 3
              },
              {
                "date": "2015-02-18",
                "value": 6
              },
              {
                "date": "2015-02-19",
                "value": 1
              },
              {
                "date": "2015-02-20",
                "value": 2
              },
              {
                "date": "2015-02-23",
                "value": 1
              },
              {
                "date": "2015-02-24",
                "value": 2
              },
              {
                "date": "2015-02-25",
                "value": 1
              },
              {
                "date": "2015-02-26",
                "value": 2
              },
              {
                "date": "2015-02-28",
                "value": 1
              },
              {
                "date": "2015-03-01",
                "value": 3
              },
              {
                "date": "2015-03-02",
                "value": 1
              },
              {
                "date": "2015-03-09",
                "value": 2
              },
              {
                "date": "2015-03-10",
                "value": 2
              },
              {
                "date": "2015-03-11",
                "value": 4
              },
              {
                "date": "2015-03-17",
                "value": 1
              },
              {
                "date": "2015-03-18",
                "value": 1
              },
              {
                "date": "2015-03-19",
                "value": 1
              },
              {
                "date": "2015-03-23",
                "value": 1
              },
              {
                "date": "2015-03-25",
                "value": 6
              },
              {
                "date": "2015-04-03",
                "value": 1
              },
              {
                "date": "2015-04-06",
                "value": 1
              },
              {
                "date": "2015-04-08",
                "value": 3
              },
              {
                "date": "2015-04-10",
                "value": 2
              },
              {
                "date": "2015-04-13",
                "value": 5
              },
              {
                "date": "2015-04-14",
                "value": 1
              },
              {
                "date": "2015-04-15",
                "value": 1
              },
              {
                "date": "2015-04-17",
                "value": 1
              },
              {
                "date": "2015-04-20",
                "value": 1
              },
              {
                "date": "2015-04-22",
                "value": 1
              },
              {
                "date": "2015-05-06",
                "value": 2
              },
              {
                "date": "2014-12-15",
                "value": 4
              },
              {
                "date": "2015-02-12",
                "value": 2
              },
              {
                "date": "2015-03-16",
                "value": 6
              },
              {
                "date": "2015-03-26",
                "value": 7
              },
              {
                "date": "2015-04-09",
                "value": 1
              },
              {
                "date": "2015-05-07",
                "value": 5
              },
              {
                "date": "2015-05-08",
                "value": 22
              },
              {
                "date": "2015-05-11",
                "value": 2
              },
              {
                "date": "2015-05-12",
                "value": 3
              },
              {
                "date": "2015-05-13",
                "value": 5
              },
              {
                "date": "2015-05-18",
                "value": 1
              },
              {
                "date": "2015-05-20",
                "value": 3
              },
              {
                "date": "2015-05-22",
                "value": 7
              },
              {
                "date": "2015-06-01",
                "value": 4
              },
              {
                "date": "2015-06-02",
                "value": 1
              },
              {
                "date": "2015-05-19",
                "value": 1
              },
              {
                "date": "2015-06-09",
                "value": 1
              },
              {
                "date": "2015-06-10",
                "value": 1
              },
              {
                "date": "2015-06-12",
                "value": 2
              },
              {
                "date": "2015-06-15",
                "value": 5
              },
              {
                "date": "2015-06-16",
                "value": 3
              },
              {
                "date": "2015-06-19",
                "value": 5
              },
              {
                "date": "2015-06-23",
                "value": 1
              },
              {
                "date": "2015-06-28",
                "value": 1
              },
              {
                "date": "2015-06-29",
                "value": 2
              },
              {
                "date": "2015-06-30",
                "value": 1
              },
              {
                "date": "2015-07-01",
                "value": 1
              },
              {
                "date": "2015-07-02",
                "value": 11
              },
              {
                "date": "2015-07-03",
                "value": 8
              },
              {
                "date": "2015-07-05",
                "value": 3
              },
              {
                "date": "2015-07-08",
                "value": 4
              },
              {
                "date": "2015-07-09",
                "value": 1
              },
              {
                "date": "2015-07-10",
                "value": 1
              },
              {
                "date": "2015-07-13",
                "value": 4
              },
              {
                "date": "2015-07-14",
                "value": 1
              },
              {
                "date": "2015-07-15",
                "value": 1
              },
              {
                "date": "2015-07-20",
                "value": 1
              },
              {
                "date": "2015-07-22",
                "value": 1
              },
              {
                "date": "2015-07-24",
                "value": 1
              },
              {
                "date": "2015-07-28",
                "value": 2
              },
              {
                "date": "2015-07-29",
                "value": 3
              },
              {
                "date": "2015-07-31",
                "value": 3
              },
              {
                "date": "2015-08-04",
                "value": 2
              },
              {
                "date": "2015-08-05",
                "value": 8
              },
              {
                "date": "2015-08-06",
                "value": 4
              },
              {
                "date": "2015-08-07",
                "value": 1
              },
              {
                "date": "2015-08-17",
                "value": 3
              },
              {
                "date": "2015-08-18",
                "value": 1
              },
              {
                "date": "2015-08-20",
                "value": 4
              },
              {
                "date": "2015-08-24",
                "value": 2
              },
              {
                "date": "2015-08-25",
                "value": 3
              },
              {
                "date": "2015-08-26",
                "value": 1
              },
              {
                "date": "2015-08-28",
                "value": 1
              },
              {
                "date": "2015-09-01",
                "value": 2
              },
              {
                "date": "2015-09-02",
                "value": 1
              },
              {
                "date": "2015-09-03",
                "value": 3
              },
              {
                "date": "2015-09-04",
                "value": 1
              },
              {
                "date": "2015-09-08",
                "value": 1
              },
              {
                "date": "2015-09-09",
                "value": 1
              },
              {
                "date": "2015-09-10",
                "value": 1
              },
              {
                "date": "2015-09-16",
                "value": 1
              },
              {
                "date": "2015-09-17",
                "value": 3
              },
              {
                "date": "2015-09-18",
                "value": 4
              },
              {
                "date": "2015-09-21",
                "value": 2
              },
              {
                "date": "2015-09-23",
                "value": 1
              },
              {
                "date": "2015-09-24",
                "value": 2
              },
              {
                "date": "2015-09-25",
                "value": 3
              },
              {
                "date": "2015-09-26",
                "value": 1
              },
              {
                "date": "2015-09-28",
                "value": 4
              },
              {
                "date": "2015-09-29",
                "value": 2
              },
              {
                "date": "2015-10-05",
                "value": 6
              },
              {
                "date": "2015-10-07",
                "value": 4
              },
              {
                "date": "2015-10-08",
                "value": 4
              },
              {
                "date": "2015-10-09",
                "value": 4
              },
              {
                "date": "2015-10-10",
                "value": 2
              },
              {
                "date": "2015-10-12",
                "value": 1
              },
              {
                "date": "2015-10-14",
                "value": 3
              },
              {
                "date": "2015-10-15",
                "value": 4
              },
              {
                "date": "2015-10-16",
                "value": 3
              },
              {
                "date": "2015-10-17",
                "value": 1
              },
              {
                "date": "2015-10-18",
                "value": 2
              },
              {
                "date": "2015-10-19",
                "value": 3
              },
              {
                "date": "2015-10-20",
                "value": 2
              },
              {
                "date": "2015-10-21",
                "value": 2
              },
              {
                "date": "2015-10-23",
                "value": 4
              },
              {
                "date": "2015-10-26",
                "value": 2
              },
              {
                "date": "2015-10-27",
                "value": 5
              },
              {
                "date": "2015-10-28",
                "value": 2
              },
              {
                "date": "2015-10-29",
                "value": 2
              },
              {
                "date": "2015-10-31",
                "value": 1
              },
              {
                "date": "2015-11-02",
                "value": 1
              },
              {
                "date": "2015-11-03",
                "value": 6
              },
              {
                "date": "2015-11-05",
                "value": 1
              },
              {
                "date": "2015-11-06",
                "value": 2
              },
              {
                "date": "2015-11-09",
                "value": 2
              },
              {
                "date": "2015-11-12",
                "value": 1
              },
              {
                "date": "2015-11-13",
                "value": 2
              },
              {
                "date": "2015-11-16",
                "value": 3
              },
              {
                "date": "2015-11-17",
                "value": 4
              },
              {
                "date": "2015-11-18",
                "value": 2
              },
              {
                "date": "2015-11-23",
                "value": 3
              },
              {
                "date": "2015-11-24",
                "value": 4
              },
              {
                "date": "2015-11-26",
                "value": 3
              },
              {
                "date": "2015-11-27",
                "value": 2
              },
              {
                "date": "2015-11-28",
                "value": 2
              },
              {
                "date": "2015-11-29",
                "value": 1
              },
              {
                "date": "2015-11-30",
                "value": 3
              },
              {
                "date": "2015-12-02",
                "value": 1
              },
              {
                "date": "2015-12-03",
                "value": 2
              },
              {
                "date": "2015-12-04",
                "value": 2
              },
              {
                "date": "2015-12-08",
                "value": 3
              },
              {
                "date": "2015-12-09",
                "value": 5
              },
              {
                "date": "2015-12-11",
                "value": 2
              },
              {
                "date": "2015-12-15",
                "value": 5
              },
              {
                "date": "2015-12-16",
                "value": 3
              },
              {
                "date": "2015-12-17",
                "value": 1
              },
              {
                "date": "2015-12-18",
                "value": 3
              },
              {
                "date": "2015-12-23",
                "value": 5
              },
              {
                "date": "2016-01-04",
                "value": 2
              },
              {
                "date": "2016-01-05",
                "value": 2
              },
              {
                "date": "2016-01-06",
                "value": 1
              },
              {
                "date": "2016-01-07",
                "value": 2
              },
              {
                "date": "2016-01-08",
                "value": 5
              },
              {
                "date": "2016-01-11",
                "value": 1
              },
              {
                "date": "2016-01-18",
                "value": 1
              },
              {
                "date": "2016-01-19",
                "value": 4
              },
              {
                "date": "2016-01-20",
                "value": 2
              },
              {
                "date": "2016-01-22",
                "value": 9
              },
              {
                "date": "2016-01-27",
                "value": 1
              },
              {
                "date": "2016-01-28",
                "value": 2
              },
              {
                "date": "2016-01-29",
                "value": 1
              },
              {
                "date": "2016-02-01",
                "value": 1
              },
              {
                "date": "2016-02-02",
                "value": 2
              },
              {
                "date": "2016-02-04",
                "value": 1
              },
              {
                "date": "2016-02-10",
                "value": 1
              },
              {
                "date": "2016-02-17",
                "value": 1
              },
              {
                "date": "2016-02-23",
                "value": 3
              },
              {
                "date": "2016-02-26",
                "value": 1
              },
              {
                "date": "2016-03-16",
                "value": 2
              },
              {
                "date": "2016-03-20",
                "value": 1
              },
              {
                "date": "2016-03-24",
                "value": 1
              },
              {
                "date": "2016-03-30",
                "value": 1
              },
              {
                "date": "2016-03-31",
                "value": 1
              },
              {
                "date": "2016-04-15",
                "value": 1
              },
              {
                "date": "2016-04-27",
                "value": 1
              },
              {
                "date": "2016-04-29",
                "value": 1
              },
              {
                "date": "2016-04-30",
                "value": 1
              },
              {
                "date": "2016-05-03",
                "value": 2
              },
              {
                "date": "2016-05-04",
                "value": 1
              },
              {
                "date": "2016-05-05",
                "value": 1
              },
              {
                "date": "2016-05-06",
                "value": 1
              },
              {
                "date": "2016-05-11",
                "value": 3
              },
              {
                "date": "2016-05-12",
                "value": 4
              },
              {
                "date": "2016-05-13",
                "value": 2
              },
              {
                "date": "2016-05-16",
                "value": 1
              },
              {
                "date": "2016-05-17",
                "value": 2
              },
              {
                "date": "2016-05-24",
                "value": 2
              },
              {
                "date": "2016-05-25",
                "value": 5
              },
              {
                "date": "2016-05-26",
                "value": 6
              },
              {
                "date": "2016-05-27",
                "value": 1
              },
              {
                "date": "2016-05-31",
                "value": 1
              },
              {
                "date": "2016-06-02",
                "value": 1
              },
              {
                "date": "2016-05-19",
                "value": 10
              },
              {
                "date": "2016-06-04",
                "value": 4
              },
              {
                "date": "2016-06-06",
                "value": 1
              },
              {
                "date": "2016-06-08",
                "value": 2
              },
              {
                "date": "2016-06-09",
                "value": 2
              },
              {
                "date": "2016-06-12",
                "value": 1
              },
              {
                "date": "2016-06-13",
                "value": 1
              },
              {
                "date": "2016-06-14",
                "value": 1
              },
              {
                "date": "2016-06-15",
                "value": 1
              },
              {
                "date": "2016-06-16",
                "value": 1
              },
              {
                "date": "2016-06-17",
                "value": 1
              },
              {
                "date": "2016-06-18",
                "value": 2
              },
              {
                "date": "2016-06-21",
                "value": 4
              },
              {
                "date": "2016-06-22",
                "value": 1
              },
              {
                "date": "2016-06-23",
                "value": 2
              },
              {
                "date": "2016-06-24",
                "value": 3
              },
              {
                "date": "2016-06-25",
                "value": 1
              },
              {
                "date": "2016-06-26",
                "value": 1
              },
              {
                "date": "2016-06-27",
                "value": 2
              },
              {
                "date": "2016-06-30",
                "value": 2
              },
              {
                "date": "2016-07-04",
                "value": 2
              },
              {
                "date": "2016-07-06",
                "value": 1
              },
              {
                "date": "2016-07-09",
                "value": 1
              },
              {
                "date": "2016-07-12",
                "value": 3
              },
              {
                "date": "2016-07-20",
                "value": 3
              },
              {
                "date": "2016-07-21",
                "value": 1
              },
              {
                "date": "2016-07-26",
                "value": 1
              },
              {
                "date": "2016-07-28",
                "value": 2
              },
              {
                "date": "2016-07-29",
                "value": 4
              },
              {
                "date": "2016-08-02",
                "value": 1
              },
              {
                "date": "2016-08-03",
                "value": 2
              },
              {
                "date": "2016-08-04",
                "value": 1
              },
              {
                "date": "2016-08-05",
                "value": 1
              },
              {
                "date": "2016-08-07",
                "value": 1
              },
              {
                "date": "2016-08-08",
                "value": 1
              },
              {
                "date": "2016-08-09",
                "value": 1
              },
              {
                "date": "2016-08-10",
                "value": 1
              },
              {
                "date": "2016-08-11",
                "value": 3
              },
              {
                "date": "2016-08-12",
                "value": 10
              },
              {
                "date": "2016-08-13",
                "value": 4
              },
              {
                "date": "2016-08-14",
                "value": 1
              },
              {
                "date": "2016-08-17",
                "value": 1
              },
              {
                "date": "2016-08-18",
                "value": 1
              },
              {
                "date": "2016-08-19",
                "value": 3
              },
              {
                "date": "2016-08-22",
                "value": 3
              },
              {
                "date": "2016-08-24",
                "value": 2
              },
              {
                "date": "2016-08-25",
                "value": 2
              },
              {
                "date": "2016-08-26",
                "value": 2
              },
              {
                "date": "2016-08-27",
                "value": 1
              },
              {
                "date": "2016-08-30",
                "value": 4
              },
              {
                "date": "2016-08-31",
                "value": 5
              },
              {
                "date": "2016-09-01",
                "value": 3
              },
              {
                "date": "2016-09-02",
                "value": 1
              },
              {
                "date": "2016-09-03",
                "value": 1
              },
              {
                "date": "2016-09-05",
                "value": 2
              },
              {
                "date": "2016-09-06",
                "value": 1
              },
              {
                "date": "2016-09-08",
                "value": 3
              },
              {
                "date": "2016-09-09",
                "value": 3
              },
              {
                "date": "2016-09-13",
                "value": 2
              },
              {
                "date": "2016-09-14",
                "value": 4
              },
              {
                "date": "2016-09-15",
                "value": 5
              },
              {
                "date": "2016-09-16",
                "value": 2
              },
              {
                "date": "2016-09-17",
                "value": 1
              },
              {
                "date": "2016-09-19",
                "value": 3
              },
              {
                "date": "2016-09-21",
                "value": 5
              },
              {
                "date": "2016-09-20",
                "value": 7
              },
              {
                "date": "2016-09-22",
                "value": 5
              },
              {
                "date": "2016-09-23",
                "value": 3
              },
              {
                "date": "2016-09-26",
                "value": 3
              },
              {
                "date": "2016-09-27",
                "value": 5
              },
              {
                "date": "2016-09-28",
                "value": 8
              },
              {
                "date": "2016-09-30",
                "value": 4
              },
              {
                "date": "2016-10-01",
                "value": 6
              },
              {
                "date": "2016-10-03",
                "value": 1
              },
              {
                "date": "2016-10-04",
                "value": 2
              },
              {
                "date": "2016-10-06",
                "value": 6
              },
              {
                "date": "2016-10-11",
                "value": 3
              },
              {
                "date": "2016-10-18",
                "value": 1
              },
              {
                "date": "2016-10-19",
                "value": 2
              },
              {
                "date": "2016-10-20",
                "value": 4
              },
              {
                "date": "2016-10-24",
                "value": 3
              },
              {
                "date": "2016-10-25",
                "value": 7
              },
              {
                "date": "2016-10-27",
                "value": 1
              },
              {
                "date": "2016-10-28",
                "value": 5
              },
              {
                "date": "2016-10-31",
                "value": 4
              },
              {
                "date": "2016-11-01",
                "value": 4
              },
              {
                "date": "2016-11-04",
                "value": 2
              },
              {
                "date": "2016-11-06",
                "value": 3
              },
              {
                "date": "2016-11-07",
                "value": 1
              },
              {
                "date": "2016-11-08",
                "value": 1
              },
              {
                "date": "2016-11-09",
                "value": 5
              },
              {
                "date": "2016-11-10",
                "value": 6
              },
              {
                "date": "2016-11-12",
                "value": 4
              },
              {
                "date": "2016-11-13",
                "value": 2
              },
              {
                "date": "2016-11-14",
                "value": 1
              },
              {
                "date": "2016-11-15",
                "value": 3
              },
              {
                "date": "2016-11-16",
                "value": 3
              },
              {
                "date": "2016-11-17",
                "value": 1
              },
              {
                "date": "2016-11-18",
                "value": 4
              },
              {
                "date": "2016-11-21",
                "value": 2
              },
              {
                "date": "2016-11-22",
                "value": 3
              },
              {
                "date": "2016-11-23",
                "value": 3
              },
              {
                "date": "2016-11-28",
                "value": 1
              },
              {
                "date": "2016-11-30",
                "value": 1
              },
              {
                "date": "2016-12-01",
                "value": 1
              },
              {
                "date": "2016-12-04",
                "value": 1
              },
              {
                "date": "2016-12-05",
                "value": 1
              },
              {
                "date": "2017-01-01",
                "value": 2
              },
              {
                "date": "2017-01-03",
                "value": 1
              },
              {
                "date": "2017-01-21",
                "value": 1
              },
              {
                "date": "2017-01-23",
                "value": 1
              },
              {
                "date": "2017-01-25",
                "value": 1
              },
              {
                "date": "2017-01-26",
                "value": 2
              },
              {
                "date": "2017-01-27",
                "value": 3
              },
              {
                "date": "2017-01-30",
                "value": 2
              },
              {
                "date": "2017-01-31",
                "value": 1
              },
              {
                "date": "2017-02-01",
                "value": 1
              },
              {
                "date": "2017-02-03",
                "value": 4
              },
              {
                "date": "2017-02-21",
                "value": 1
              }]
        }]
    };

})(jQuery, fluid);
