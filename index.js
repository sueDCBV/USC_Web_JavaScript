// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $filterInput = document.querySelector("#searchby");
var $searchBtn = document.querySelector("#show");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

$(document).ready(function(){
  $('#myTable').dataTable();
});

window.onload = function() {
  document.getElementById("siteLoader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var ufo_sights = filteredData[i];
    var fields = Object.keys(ufo_sights);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo_sights[field];
    }
  }
}

function handleSearchButtonClick() {
  //console.log(document.getElementById("mySelect").value.trim().toLowerCase());

  var filterType =document.getElementById("comboSelection").value.trim().toLowerCase();
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterText = $filterInput.value.trim().toLowerCase();

  if(filterType === "datetime"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataDatetime = data.datetime.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataDatetime === filterText;
    });
  }
  
  if(filterType === "city"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataCity = data.city.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataCity === filterText;
    });
  }
  
  if(filterType === "state"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataState = data.state.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataState === filterText;
    });
  }

  if(filterType === "country"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataCountry = data.country.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataCountry === filterText;
    });
  }

  if(filterType === "shape"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataShape = data.shape.toLowerCase();
            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataShape === filterText;
    });
  }

  if(filterType === "all"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet
  }

  renderTable();
}
renderTable();