var subjectID;
var samples;
var meta;
var germs;
var metasample;

d3.json("static/js/samples.json").then((data) => {
    germs = data

    // console.log(germs);

    subjectID = germs.names;
    samples = germs.samples;
    meta = germs.metadata;

    console.log(samples)
    console.log(subjectID)
    console.log(meta)

    loaddropdownlist(subjectID);

    buildchart('940');


});

function buildchart(id) {

    // console.log(germs.samples)
    var otu_ids = samples.filter((key) => { return key.id === id })[0].otu_ids
    var top10id = otu_ids.slice(0, 10)
    console.log(top10id)
    // console.log(id)
    var sample_values = samples.filter((key) => { return key.id === id })[0].sample_values
    var top10samplesvalues = sample_values.slice(0, 10)
    console.log(top10samplesvalues)

    var otu_labels = samples.filter((key) => { return key.id === id })[0].otu_labels
    var top10labels = otu_labels.slice(0, 10)
    console.log(top10labels)


    var filtering = meta.filter(sample => sample.id === parseInt(id))
    console.log(filtering)
    var result = filtering[0];
    console.log(result)
    var sample_meta = d3.select("#sample-metadata");
    sample_meta.html("");
    Object.entries(result).forEach(([key, value]) => {
        sample_meta.append("h6").text(`${key}:${value}`);
    });

    //Create Bar Chart 
    var trace1 = {
        x: top10samplesvalues,
        //y: top10id,
        text: top10labels,
        orientation: 'h',
        type: "bar",
    };

    // Create the data array for the plot
    var germ1 = [trace1];

    var layout = {
        yaxis: top10id,
        height: 600,
        width: 1000
    };

    Plotly.newPlot("bar", germ1, layout);

    //Create bubble Chart 
    var trace2 = {
        x: top10id,
        y: top10samplesvalues,
        mode: 'markers',
        text: top10labels,

        marker: {
            color: top10id,
            size: top10samplesvalues
        }

    };

    // Create the data array for the plot
    var germ2 = [trace2];

    var layout2 = {
        xaxis: { title: 'OTU ID' },
        height: 600,
        width: 1000
    };

    Plotly.newPlot("bubble", germ2, layout2);

};


function loaddropdownlist(subjectID) {
    var sel = document.getElementById("selDataset");
    subjectID.forEach(otu => {
        var currentOption = document.createElement('option');
        currentOption.text = otu;
        sel.appendChild(currentOption);

    });
};

function optionChanged(id) {
    buildchart(id);

};





