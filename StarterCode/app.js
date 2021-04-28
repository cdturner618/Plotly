d3.json("static\js/samples.json").then((data) => {
    console.log(data);

    var subjectID = data.names;
    var sampples = data.samples
    var otu_ids = data.otu_ids;
    var otu_labels = data.otu_labels;
    console.log(samples)
});

// // Promise Pending
// const dataPromise = d3.json(data);
// console.log("Data Promise: ", dataPromise)