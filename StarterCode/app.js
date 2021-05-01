
d3.json("static/js/samples.json").then((data) => {
    germs = data

    console.log(germs);

    // Promise Pending
    const dataPromise = d3.json("static/js/samples.json");
    console.log("Data Promise: ", dataPromise);

    var subjectID = germs.names;
    var samples = germs.samples;
    var meta = germs.metadata;

    console.log(samples)
    console.log(subjectID)
    console.log(meta)

    var otu_ids = germs.samples.filter((key) => { return key.id === "940" })[0].otu_ids
    var top10id = otu_ids.slice(0, 10)
    console.log(top10id)

    var sample_values = germs.samples.filter((key) => { return key.id === "940" })[0].sample_values
    var top10samplesvalues = sample_values.slice(0, 10)
    console.log(top10samplesvalues)

    var otu_labels = germs.samples.filter((key) => { return key.id === "940" })[0].otu_labels
    var top10labels = otu_labels.slice(0, 10)
    console.log(top10labels)


    // var sel = d3.select("#selDataset")
    // sel.append('option')
    // .html('940')

    // function optionchanged (id){ alert(id) } {

    //     // Assign the dropdown menu item ID to a variable
    // var dropdownMenuID = dropdownMenu.id;
    //     // Assign the dropdown menu option to a variable
    // var selectedOption = dropdownMenu.value;

    //     console.log(dropdownMenuID);
    //     console.log(selectedOption);
    // }


    var trace1 = {
        x: top10samplesvalues,
        orientation: 'h',
        type: "bar",
    };

    // Create the data array for the plot
    var germ1 = [trace1];

    var layout = {
        xaxis: { title: top10samplesvalues },
        yaxix: { title: top10labels }
    };

    Plotly.newPlot("bar", germ1, layout);


    var trace2 = {
        x: top10id,
        y: top10samplesvalues,
        orientation: 'h',
        mode: 'markers',
        size: top10samplesvalues
    };

    // Create the data array for the plot
    var germ2 = [trace2];

    var layout2 = {
        xaxis: { title: 'Otu-ids' },
    };

    Plotly.newPlot("bubble", germ2, layout2);
});


var sel1 = d3.select('#sample-metadat')
sel1.append()



