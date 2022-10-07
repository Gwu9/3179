var specVis1 = "https://gwu9.github.io/3179/assignment2/james.vg.json";
var specVis2 = "https://gwu9.github.io/3179/assignment2/bubplot.vg.json";
      vegaEmbed('#vis1', specVis1);
            vegaEmbed('#vis1', specVis1).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
      }).catch(console.error);
