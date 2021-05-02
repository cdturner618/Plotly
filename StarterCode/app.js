var subjectID;
var samples;
var meta;
var germs;
// var ethnicity;
// var age;
// var gender;
// var location;
// var sample;

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

    // meta_sample('940');


});

function buildchart(id) {

    // console.log(germs.samples)
    var otu_ids = samples.filter((key) => { return key.id === id })[0].otu_ids
    var top10id = otu_ids.slice(0, 10)
    console.log(top10id)

    var sample_values = samples.filter((key) => { return key.id === id })[0].sample_values
    var top10samplesvalues = sample_values.slice(0, 10)
    console.log(top10samplesvalues)

    var otu_labels = samples.filter((key) => { return key.id === id })[0].otu_labels
    var top10labels = otu_labels.slice(0, 10)
    console.log(top10labels)


    //Create Bar Chart 
    var trace1 = {
        x: top10samplesvalues,
        // y: top10id,
        text: top10labels,
        orientation: 'h',
        type: "bar",
    };

    // Create the data array for the plot
    var germ1 = [trace1];

    var layout = {
        yaxis: top10id
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

function optionChanged(id) {
    buildchart(id);
    // meta_sample(id);
}

function meta_sample(id) {

    var ethnicity = meta.filter((key) => { return key.id === id }).ethnicity
    console.log(ethnicity)

    var gender = meta.filter((key) => { return key.id === id }).gender
    console.log(gender)

    var age = meta.filter((key) => { return key.id === id }).age
    console.log(age)

    var location = meta.filter((key) => { return key.id === id }).location
    console.log(location)

    var metadata_filtered = meta.filter(ss => ss.id == sample)
    var results_1 = metadata_filtered[0];
    var table = d3.select("#sample-metadata")
    table.html("")

    //     // append table 
    //     .append('li').text(ethnicity)
    //     .append('li').text(gender)
    //     .append('li').text(age)
    //     .append('li').text(location)

    // Object.entries(results_1).forEach(([key, value]) => {
    //     sample_meta.append("h6").text(`${key}:${value}`)
    // });

};

