var spec1 = "codemap.vg.json";
      vegaEmbed('#symbol_map', spec1).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
      }).catch(console.error);