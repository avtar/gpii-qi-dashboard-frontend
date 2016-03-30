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

    gpii.qualityInfrastructure.frontEnd.qualityInfrastructureDefaults = {
        host: "http://localhost:3000",
        apiVersion: "a"
    };

    gpii.qualityInfrastructure.frontEnd.getEndpointURL = function(endpoint, qualityInfrastructureHost, apiVersion, repo) {
        return qualityInfrastructureHost + "/" + apiVersion + "/" + repo + "/" + endpoint;
    };

    gpii.qualityInfrastructure.frontEnd.createPanel = function (repo, container, endpoint, panelComponent) {

        var qualityInfrastructureHost = gpii.qualityInfrastructure.frontEnd.qualityInfrastructureDefaults.host,
        apiVersion = gpii.qualityInfrastructure.frontEnd.qualityInfrastructureDefaults.apiVersion;

        var endPointURL = gpii.qualityInfrastructure.frontEnd.getEndpointURL(endpoint, qualityInfrastructureHost, apiVersion, repo);

        return panelComponent(container, {
            components: {
                jsonpLoader: {
                    options: {
                        jsonpOptions: {
                            url: endPointURL
                        }
                    }
                }
            }
        });
    };

    gpii.qualityInfrastructure.frontEnd.createCommitsPanel = function (repo, container) {

        return gpii.qualityInfrastructure.frontEnd.createPanel(repo, container, "commits", gpii.qualityInfrastructure.frontEnd.commitsMetricsPanel);
    };

    gpii.qualityInfrastructure.frontEnd.createContributorsPanel = function (repo, container) {

        return gpii.qualityInfrastructure.frontEnd.createPanel(repo, container, "contributors", gpii.qualityInfrastructure.frontEnd.contributorsMetricsPanel);
    };

})(jQuery, fluid);
