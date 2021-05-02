var subjectID;
var samples;
var meta;

d3.json("static/js/samples.json").then((data) => {
    germs = data

    console.log(germs);

    subjectID = germs.names;
    samples = germs.samples;
    meta = germs.metadata;

    console.log(samples)
    console.log(subjectID)
    console.log(meta)

    loaddropdownlist(subjectID)

    // Promise Pending
    const dataPromise = d3.json("static/js/samples.json");
    console.log("Data Promise: ", dataPromise);
    buildchart('940', germs);

});


var sel1 = d3.select('#sample-metadat')
sel1.append()

function buildchart(id, germs) {

    console.log(germs.samples)

    var otu_ids = germs.samples.filter((key) => { return key.id === id })[0].otu_ids
    var top10id = otu_ids.slice(0, 10)
    console.log(top10id)

    var sample_values = germs.samples.filter((key) => { return key.id === id })[0].sample_values
    var top10samplesvalues = sample_values.slice(0, 10)
    console.log(top10samplesvalues)

    var otu_labels = germs.samples.filter((key) => { return key.id === id })[0].otu_labels
    var top10labels = otu_labels.slice(0, 10)
    console.log(top10labels)





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
        mode: 'markers',
        markers: {
            size: top10samplesvalues
        }

    };

    // Create the data array for the plot
    var germ2 = [trace2];

    var layout2 = {
        xaxis: { title: 'Otu-ids' },
    };

    Plotly.newPlot("bubble", germ2, layout2);

}



function loaddropdownlist(subjectID) {
    var sel = document.getElementById("selDataset");
    subjectID.forEach(otu => {
        var currentOption = document.createElement('option');
        currentOption.text = otu;
        sel.appendChild(currentOption);

    });
};

function optionChanged(id) { alert(id) } {
    var dropdownMenu = d3.select('#selDataset');

    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;
    console.log(selectedOption);
    buildchart(selectedOption);
}
