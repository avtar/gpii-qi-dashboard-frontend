(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.qualityInfrastructure.frontEnd.demo");

    gpii.qualityInfrastructure.frontEnd.demo.getURLParamValue = function (param) {
        var params={};window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(str,key,value){params[key] = value;});
        return params[param];
    };

    $(document).ready(function () {

        var repoFromURL = gpii.qualityInfrastructure.frontEnd.demo.getURLParamValue("repo");
        var shouldAnimate = gpii.qualityInfrastructure.frontEnd.demo.getURLParamValue("animate");

        if (repoFromURL !== undefined) {
            $("#gpii-demo-repoTitle").text(repoFromURL);

            gpii.qualityInfrastructure.frontEnd.demo.createPanels(repoFromURL, shouldAnimate);

        }
    });

    gpii.qualityInfrastructure.frontEnd.demo.bindViewSelectHandler = function(commitsPanel, contributorsPanel) {
        var selectControl = $(".gpiic-demo-dataRangeSelector");
        selectControl.change(function (e) {
            var selectedValue = $(this).find(":selected").attr("value");
            gpii.qualityInfrastructure.frontEnd.demo.changeZoom(commitsPanel, selectedValue);
            gpii.qualityInfrastructure.frontEnd.demo.changeZoom(contributorsPanel, selectedValue);
            e.preventDefault();
        });
    };

    gpii.qualityInfrastructure.frontEnd.demo.createPanels = function (repo, shouldAnimate) {

        var commitsContainer = ".gpiic-metrics-commits",
        contributorsContainer = ".gpiic-metrics-contributors";

        var commitsPanel = gpii.qualityInfrastructure.frontEnd.createCommitsPanel(repo, commitsContainer);

        var contributorsPanel = gpii.qualityInfrastructure.frontEnd.createContributorsPanel(repo, contributorsContainer);

        gpii.qualityInfrastructure.frontEnd.demo.bindViewSelectHandler(commitsPanel, contributorsPanel);

        $("#gpiic-metrics-visibility-highContrast").click(function (e) {
            $("body").toggleClass("highContrast");
            e.preventDefault();
        });

        $("#gpiic-metrics-visibility-largeGraphs").click(function (e) {
            $("body").toggleClass("largeGraphs");
            e.preventDefault();
        });

        if (shouldAnimate) {
            gpii.qualityInfrastructure.frontEnd.demo.animate(commitsPanel, contributorsPanel, gpii.qualityInfrastructure.frontEnd.demo.daysToZoom);
            }
    };

    gpii.qualityInfrastructure.frontEnd.demo.changeZoom = function (panel, daysToZoom) {
        gpii.qualityInfrastructure.frontEnd.demo.daysToZoom = daysToZoom;
        panel.applier.change("currentEventsDataViewSettings.daysBack", daysToZoom);
    };

    gpii.qualityInfrastructure.frontEnd.demo.animate = function(commitsPanel, contributorsPanel, daysToScroll) {

        var forward = false;

        var changeView = function() {
            var daysToRoll = forward ? daysToScroll : -daysToScroll;
            try {
                gpii.qualityInfrastructure.frontEnd.demo.rollDays(commitsPanel, daysToRoll);
                gpii.qualityInfrastructure.frontEnd.demo.rollDays(contributorsPanel, daysToRoll);
            }
            catch(e) {
                forward = forward ? false : true;
            }
        };

        window.setInterval(changeView, 5000);
    };

})(jQuery, fluid);
