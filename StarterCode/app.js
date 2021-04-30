d3.json("static/js/samples.json").then((data) => {
    console.log(data);

    // function unpack(rows, index) {
    //     return rows.map(function (row) {
    //         return row[index];
    //     });
    // }

    var subjectID = data.names;
    var samples = data.samples


    // function filterdata(data) {
    //     return data.samples;
    // }
    // var filter = samples.filter(filterdata);
    // console.log(filter);

    var otu_ids = data.map(sample => sample.otu_ids);
    // var otu_label = data.sample[1];

    console.log(samples)
    console.log(subjectID)
    console.log(otu_ids)
    // console.log(otu_labels)
});

// var trace1 = {
//     type: "bar",
//     // mode: "lines",
//     // name: name,
//     x: samples,
//     y: subjectID,
//     line: {
//         color: "#17BECF"
//     }
// };

// var data = [trace1];

// var layout = {
//     title: `${stock} closing prices`,
//     xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//     },
//     yaxis: {
//         autorange: true,
//         type: "linear"
//     }
// };

// Plotly.newPlot("plot", data, layout);

//   });
// }


