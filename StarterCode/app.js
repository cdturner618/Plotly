d3.json("static/js/samples.json").then((data) => {
    console.log(data);

    // function unpack(rows, index) {
    //     return rows.map(function (row) {
    //         return row[index];
    //     });
    // }



    var subjectID = data.names;
    var samples = data.samples
    var otu_ids = data.sample;
    var otu_labels = data.sample;
    console.log(samples)
    console.log(subjectID)
    console.log(otu_ids)
    console.log(otu_labels)
});



