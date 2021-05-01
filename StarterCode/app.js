
d3.json("static/js/samples.json").then((data) => {
    germs = data

    console.log(germs);

    // Promise Pending
    // const dataPromise = d3.json("static/js/samples.json");
    // console.log("Data Promise: ", dataPromise);

    var subjectID = data.names;
    var samples = data.samples;
    var meta = data.metadata

    var otu_ids = germs.samples.filter((key) => { return key.id === "940" })[0]
    // otu_ids = otu_ids.slice(0, 10)


    // var otu_label = data.samples.otu_lables;
    // var sample_value = data.samples.sample_values;
    // var meta = data.metadata

    console.log(samples)
    console.log(subjectID)
    console.log(meta)
    console.log(otu_ids)
    // console.log(otu_label)
    // console.log(sample_value)


    // // Call updatePlotly() when a change takes place to the DOM
    // d3.selectAll("#selDataset").on("change", updatePlotly);

    // // This function is called when a dropdown menu item is selected
    // function updatePlotly() {
    //     // Use D3 to select the dropdown menu
    //     var dropdownMenu = d3.select("#selDataset");
    //     // Assign the value of the dropdown menu option to a variable
    //     var dataset = dropdownMenu.property("onchange");

    //     // if dataset === subjectID

    //     var trace1 = {
    //             type: "bar",
    //             // mode: "lines",
    //             // name: name,
    //             x: samples,
    //             y: subjectID,
    //             // line: {
    //             //     color: "#17BECF"
    //             // }
    //         };

    //     // Create the data array for the plot
    //     var germ1 = [trace1];

    //     Plotly.newPlot("bar", germ1);
    // };
});



