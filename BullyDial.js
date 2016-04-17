// first define all the data
var LA = ["Buckinghamshire", "Camden", "Leicester", "Manchester"];
var density = [278.51, 10798.42, 4182.31, 4313.00];
var violence = [7.18, 21.13, 17.31, 20.70];
var income = [25500, 31600, 17600, 18800];
var schools = [76, 100, 89, 62];
var diversity = [8.3, 33.7, 49.4, 33.3];
var bullying = [54.2, 42.6, 49.4, 48.6];

// create space to select four local authorities
var selected1;
var selected2;
var selected3;
var selected4;

// modify the dials

function setDials(dropInput) {

    if (dropInput != "none" && _.isEmpty(selected1) || selected1 == 5 ) {
        selected1 = dropInput;
        document.getElementById("redDensity").style.display = "block";
        document.getElementById("redDensity").style.marginLeft = 7 + (density[selected1]/23.73) +"px";
        document.getElementById("redDensityNum").innerHTML = Math.round(density[selected1]);

        document.getElementById("redViolence").style.display = "block";
        document.getElementById("redViolence").style.marginLeft = 7 + (violence[selected1]*21.067 - 42.1333) +"px";
        document.getElementById("redViolenceNum").innerHTML = violence[selected1];

        document.getElementById("redIncome").style.display = "block";
        document.getElementById("redIncome").style.marginLeft = 7 + (income[selected1]*0.0280 - 449.42) +"px";
        document.getElementById("redIncomeNum").innerHTML = "£" + income[selected1];

        document.getElementById("redSchools").style.display = "block";
        document.getElementById("redSchools").style.marginLeft = 7 + (schools[selected1]*7.022 - 70.222) +"px";
        document.getElementById("redSchoolsNum").innerHTML = schools[selected1] + "%";

        document.getElementById("redDiversity").style.display = "block";
        document.getElementById("redDiversity").style.marginLeft = 7 + diversity[selected1]/0.1186 +"px";
        document.getElementById("redDiversityNum").innerHTML = diversity[selected1] + "%";

        document.getElementById("selectedRed").style.display = "block";
        document.getElementById("selectedRed").innerHTML = "<p>" + LA[selected1] + "<span class=\"hide\"><a>X</a></span></p>";
        document.getElementById("redResult").innerHTML = bullying[selected1].toString();
    } else if (dropInput != "none" && _.isEmpty(selected2) || selected2 == 5) {
        selected2 = dropInput;
        document.getElementById("blueDensity").style.display = "block";
        document.getElementById("blueDensity").style.marginLeft = (density[selected2]/23.73) - (density[selected1]/23.73) - 5 + "px";
        document.getElementById("blueDensityNum").innerHTML =  Math.round(density[selected2]);

        document.getElementById("blueViolence").style.display = "block";
        document.getElementById("blueViolence").style.marginLeft = (violence[selected2]*21.067 - 42.1333) - (violence[selected1]*21.067 - 42.1333) - 5 +"px";
        document.getElementById("blueViolenceNum").innerHTML = violence[selected2];

        document.getElementById("blueIncome").style.display = "block";
        document.getElementById("blueIncome").style.marginLeft = (income[selected2]*0.0280 - 449.42) - (income[selected1]*0.0280 - 449.42) - 5 +"px";
        document.getElementById("blueIncomeNum").innerHTML = "£" + income[selected2];

        document.getElementById("blueSchools").style.display = "block";
        document.getElementById("blueSchools").style.marginLeft = (schools[selected2]*7.022 - 70.222) - (schools[selected1]*7.022 - 70.222) - 5 + "px";
        document.getElementById("blueSchoolsNum").innerHTML = schools[selected2] + "%";

        document.getElementById("blueDiversity").style.display = "block";
        document.getElementById("blueDiversity").style.marginLeft = diversity[selected2]/0.1186 - (diversity[selected1]/0.1186) - 5 +"px";
        document.getElementById("blueDiversityNum").innerHTML = diversity[selected2] + "%";


        document.getElementById("selectedBlue").style.display = "block";
        document.getElementById("selectedBlue").innerHTML = "<p>" + LA[selected2] + "<span class=\"hide\"><a>X</a></span></p>";
        document.getElementById("blueResult").innerHTML = bullying[selected2].toString();
    } else if (dropInput != "none" && _.isEmpty(selected3)) {
        alert("Too many places selected. Delete a selection first.");
    } else if (dropInput != "none" && _.isEmpty(selected4)) {
        selected4 = dropInput;
    } else if (dropInput == "none") {
    } else {
        alert("Too many places selected. Delete a selection first.");
    }
}

// enable removing selected locations
function removeSelection(whichSelection) {

    if (whichSelection == selected1) {
        document.getElementById("selectedRed").style.display = "none";
        document.getElementById("redDensity").style.display = "none";
        document.getElementById("redDensityNum").innerHTML = "";
        document.getElementById("redViolence").style.display = "none";
        document.getElementById("redViolenceNum").innerHTML = "";
        document.getElementById("redIncome").style.display = "none";
        document.getElementById("redIncomeNum").innerHTML = "";
        document.getElementById("redDiversity").style.display = "none";
        document.getElementById("redDiversityNum").innerHTML = "";
        document.getElementById("redResult").innerHTML = "";
        selected1 = 5;
    } else if (whichSelection == selected2) {
        document.getElementById("selectedBlue").style.display = "none";
        document.getElementById("blueDensity").style.display = "none";
        document.getElementById("blueDensityNum").innerHTML = "";
        document.getElementById("blueViolence").style.display = "none";
        document.getElementById("blueViolenceNum").innerHTML = "";
        document.getElementById("blueIncome").style.display = "none";
        document.getElementById("blueIncomeNum").innerHTML = "";
        document.getElementById("blueDiversity").style.display = "none";
        document.getElementById("blueDiversityNum").innerHTML = "";
        document.getElementById("blueResult").innerHTML = "";
        selected2 = 5;
    } else if (_.isEmpty(selected3)) {

    } else if (_.isEmpty(selected4)) {

    }
}