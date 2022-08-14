$(document).ready(function(){

    $('#dropdownSelectImpType').change(function(e){
        var e = document.getElementById('dropdownSelectImpType');
        var value = e.value;

        if (value == "1") {
            document.getElementById('impMinUnit').innerHTML = "imp/kWh";
        } else if (value == "2") {
            document.getElementById('impMinUnit').innerHTML = "ms";
        } else {
            console.warn("Got Invalid Dropdown Value: " + value)
        }
    });

    // And now fire change event when the DOM is ready
    $('#dropdownSelectImpType').trigger('change');
});

function btnCalcFunc() {
    var impkWh = document.getElementById('impkWhInput').value;
    var dropdown = document.getElementById('dropdownSelectImpType');
    var impmin;

    if(dropdown.value == "1") {
        impmin = document.getElementById('impMinInput').value;
    } else if(dropdown.value == "2") {
        var input = document.getElementById('impMinInput').value;

        impmin = 60000 / input;
    } else {
        console.warn("Got Invalid Dropdown Value: " + value)
    }

    var W = Math.round(impmin * ((60 / impkWh) * 1000), 2);

    document.getElementById('outputLabel').innerHTML = "Your Wattage is: " + W + "W";
}