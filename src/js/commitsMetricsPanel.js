/*
Copyright 2016-2017 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://raw.githubusercontent.com/waharnum/qi-dashboard-frontend-demo/GPII-1681/LICENSE.txt
*/

(function ($, fluid) {

    "use strict";

    fluid.defaults("gpii.qualityInfrastructure.frontEnd.commitsMetricsPanel.graph", {
        gradeNames: ["gpii.qualityInfrastructure.frontEnd.singleDataSetGraph"],
        model: {
            svgTitle: "Commits line chart",
            svgDescription: "Number of commits over a certain period of time"
        }
    });

    fluid.defaults("gpii.qualityInfrastructure.frontEnd.commitsMetricsPanel", {
        gradeNames: ["gpii.qualityInfrastructure.frontEnd.baseSingleDataSetMetricsPanel"],
        resources: {
            template: {
                resourceText: "<div class=\"gpii-metricsPanel-summary gpiic-metricsPanel-summary\"><h2>Commits</h2></div><div class=\"gpii-metricsPanel-graph\"><h3>Number of Commits</h3><p class=\"gpii-metricsPanel-instructions\">Use <a class=\"gpiic-metricsPanel-backControl gpii-metricsPanel-backControl\" href=\"#\">Back</a> and <a class=\"gpiic-metricsPanel-forwardControl gpii-metricsPanel-forwardControl\" href=\"#\">Forward</a> to scroll</p><div class=\"gpiic-metricsPanel-graphContent\"><div class=\"gpiic-metricsPanel-svg gpii-metricsPanel-svg\"></div></div></div><div class=\"gpiic-metricsPanel-dataTable\"></div>"
            }
        },
        selectors: {
            graph: ".gpii-metricsPanel-svg"
        },
        strings: {
            backControlDescription: "Advance back in time to view previous commits",
            forwardControlDescription: "Advance forward in time to view more recent commits"
        },
        components: {
            summary: {
                type: "gpii.qualityInfrastructure.frontEnd.commitsSummaryPanel",
                container: "{commitsMetricsPanel}.dom.summary",
                createOnEvent: "{commitsMetricsPanel}.events.onCreateGraph",
                options: {
                    model: {
                        mostFrequentCommitterTotalCommits: "{commitsMetricsPanel}.model.summary.mostFrequentCommitterTotalCommits",
                        mostFrequentCommitter: "{commitsMetricsPanel}.model.summary.mostFrequentCommitter",
                        totalCommits: "{commitsMetricsPanel}.model.summary.totalCommits"
                    }
                }
            },
            graph: {
                type: "gpii.qualityInfrastructure.frontEnd.commitsMetricsPanel.graph"
            },
            dataTable: {
                options: {
                    headerTexts: ["Date", "Number of Commits"]
                }
            }
        }
    });

})(jQuery, fluid);
