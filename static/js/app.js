// from data.js
var ufoData = data;

// Select table body
var tbody = d3.select("tbody");

// Log ufo data from data.js file

function buildTable() {
    ufoData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    
    });
    });
}

console.log(buildTable(ufoData));

// Select the submit button
var submit = d3.select("#filter-btn");


submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear body of table
    var clearRows = document.getElementById('data-rows');
    clearRows.remove()

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // filter the data by date and print that 
    var filteredData = ufoData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // Filter table with required results 
    function filteredTable() {
        filteredData.forEach((filtered) => {
        var row = tbody.append("tr");
        Object.entries(filtered).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
        });
    
    }


});



