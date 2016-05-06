// first define all the data
var LA = ["Barking and Dagenham","Barnet","Barnsley","Bath and North East Somerset","Bedford","Bexley","Birmingham","Blackburn with Darwen","Blackpool","Bolton","Bournemouth","Bracknell Forest","Bradford","Brent","Brighton and Hove","Bristol","Bromley","Buckinghamshire","Bury","Calderdale","Cambridgeshire","Camden","Central Bedfordshire","Cheshire East","Cheshire West and Chester","Cornwall","County Durham","Coventry","Croydon","Cumbria","Darlington","Derby","Derbyshire","Devon","Doncaster","Dorset","Dudley","Ealing","East Riding of Yorkshire","East Sussex","Enfield","Essex","Gateshead","Gloucestershire","Greenwich","Hackney","Halton","Hammersmith and Fulham","Hampshire","Haringey","Harrow","Hartlepool","Havering","Herefordshire","Hertfordshire","Hillingdon","Hounslow","Isle of Wight","Islington","Kensington and Chelsea","Kent","Kingston upon Hull","Kingston upon Thames","Kirklees","Knowsley","Lambeth","Lancashire","Leeds","Leicester","Leicestershire","Lewisham","Lincolnshire","Liverpool","Luton","Manchester","Medway","Merton","Middlesbrough","Milton Keynes","Newcastle upon Tyne","Newham","Norfolk","North East Lincolnshire","North Lincolnshire","North Somerset","North Tyneside","North Yorkshire","Northamptonshire","Northumberland","Nottingham","Nottinghamshire","Oldham","Oxfordshire","Peterborough","Plymouth","Poole","Portsmouth","Reading","Redbridge","Redcar and Cleveland","Richmond upon Thames","Rochdale","Rotherham","Rutland","Salford","Sandwell","Sefton","Sheffield","Shropshire","Slough","Solihull","Somerset","South Gloucestershire","South Tyneside","Southampton","Southend-on-Sea","Southwark","St Helens","Staffordshire","Stockport","Stockton-on-Tees","Stoke-on-Trent","Suffolk","Sunderland","Surrey","Sutton","Swindon","Tameside","Telford and Wrekin","Thurrock","Torbay","Tower Hamlets","Trafford","Wakefield","Walsall","Waltham Forest","Wandsworth","Warrington","Warwickshire","West Berkshire","West Sussex","Westminster","Wigan","Wiltshire","Windsor and Maidenhead","Wirral","Wokingham","Wolverhampton","Worcestershire","York"];
var density = [4980.38,4014.40,691.71,520.08,337.52,3764.27,3872.22,1022.14,4008.79,1906.20,3640.56,1065.40,1399.00,5933.94,3130.13,4025.93,2080.47,278.51,1847.06,557.10,188.79,10798.42,356.62,311.92,357.06,150.95,229.46,3200.82,3994.03,73.56,510.66,3163.55,297.07,114.10,511.61,157.66,3137.71,5736.16,140.67,301.21,3648.47,390.18,1346.55,194.07,4826.44,11499.41,1507.85,10345.03,365.90,7604.74,4558.40,972.80,2103.23,82.26,702.84,2300.04,4228.91,369.56,13060.71,13973.47,404.27,3693.55,4535.99,1003.05,1724.50,10606.32,384.78,1447.77,4182.31,309.79,7580.16,105.12,3980.80,4584.56,4313.00,1336.75,5551.67,2642.64,782.49,2575.64,6628.82,163.39,820.01,190.64,567.68,2408.99,69.88,302.20,62.24,4110.68,384.36,1543.72,258.16,505.05,3242.74,2195.03,5145.83,3817.92,4795.02,561.04,3325.38,1298.00,888.58,101.05,2356.14,3421.38,1781.92,1509.76,91.76,4028.96,1155.93,129.85,532.90,2385.66,4809.76,3959.01,9948.28,1300.49,317.05,2257.94,943.57,2569.03,194.45,2062.64,698.29,4428.52,876.85,2102.15,560.13,977.25,2135.29,12034.22,2049.37,961.49,2471.27,5851.98,8451.30,1101.10,279.29,218.66,416.07,11784.11,1634.37,141.26,743.69,1966.49,912.03,3447.25,330.51,744.32];
var violence = [23.11,13.51,10.43,10.51,15.84,12.97,14.74,15.86,28.65,15.03,15.45,9.28,13.20,21.01,18.84,19.31,15.17,7.18,14.63,11.82,9.36,21.13,10.33,9.42,11.33,11.20,10.34,13.05,20.25,13.20,11.40,14.97,7.99,10.83,14.66,7.75,9.71,18.91,8.93,16.45,16.45,11.60,8.22,8.42,21.67,24.40,14.38,21.89,11.96,21.28,13.00,15.36,14.53,11.66,10.14,20.00,19.86,15.76,24.45,20.16,16.22,20.43,13.04,11.70,11.01,24.10,12.11,12.68,17.31,7.37,21.48,8.38,16.96,18.59,20.70,19.62,13.33,20.35,12.86,13.89,22.25,13.71,20.70,12.67,11.52,8.32,6.69,16.00,6.01,22.39,13.30,17.42,7.23,17.68,21.16,9.81,23.61,15.79,17.07,10.93,10.89,17.66,10.83,5.19,12.21,11.39,10.14,10.40,9.53,16.16,9.10,10.21,8.09,9.57,23.47,17.86,22.93,13.35,12.44,10.76,11.47,25.46,11.19,9.26,9.55,14.35,15.30,17.55,15.78,14.73,19.95,24.18,9.22,12.62,12.73,20.24,15.85,12.67,8.94,9.25,12.06,31.67,12.06,9.13,9.17,12.09,5.58,15.90,11.87,9.45];
var income = [20100,25800,18700,22400,21700,23100,19500,17700,17100,18700,19900,24900,18900,20600,22400,20900,26900,25500,19900,19000,22800,31600,23600,22100,20900,18100,19600,19200,23900,20000,19800,19700,20100,19600,18400,20500,19700,22700,20700,20600,22700,22300,19300,21200,22600,24300,19800,27600,22900,23300,24000,19500,23500,19600,24500,23200,22400,18200,28500,37800,21900,17300,26500,19600,20000,26000,19400,20400,17600,21700,23000,19200,19900,19000,18800,21200,25800,19300,23000,20800,18500,19200,19200,20200,22100,19900,20800,20800,20700,17600,20000,18100,23900,19000,18800,21000,20400,22900,23800,19900,33400,18900,19200,24100,18600,18400,19600,20000,20700,21500,22600,19900,22100,18800,19900,22000,25000,19900,20400,21300,19500,18200,20500,18800,27200,25000,20600,19100,19100,21400,16900,25800,22600,19100,18600,21400,31000,21800,22200,26300,21900,35200,19000,22100,27200,19800,27500,17800,20700,19900];
var schools = [90,98,22,100,79,86,78,68,47,69,53,57,47,86,89,73,89,76,95,80,78,100,56,77,82,82,88,69,63,74,73,55,76,43,86,55,86,73,38,84,86,72,78,64,74,99,57,100,79,98,94,35,73,89,74,81,100,14,100,100,81,55,84,80,50,74,77,69,89,73,77,78,82,84,62,89,70,42,71,75,78,62,41,84,88,71,74,65,66,75,80,57,87,54,72,86,53,65,87,60,87,73,71,100,47,74,56,58,74,85,80,67,63,90,66,68,95,47,68,72,62,34,73,62,90,94,50,46,89,92,79,100,90,61,78,91,93,75,70,55,71,100,81,81,61,71,90,72,81,91];
var diversity = [41.7,35.9,2.1,5.4,19.4,18.1,42.1,30.9,3.4,18.1,8.1,9.4,32.5,63.6,10.9,16,15.7,8.3,10.9,10.3,5.4,33.7,6.1,3.2,2.5,1.8,1.9,26.2,44.8,1.4,3.8,19.8,4,5.1,4.8,2.1,10,51,1.9,2.3,39,3.2,3.7,8.4,37.5,45.3,2.2,31.9,3.3,39.5,57.7,2.4,12.3,1.8,12.5,39.4,48.6,2.7,31.9,29.4,11,5.9,25.5,20.9,2.7,42.9,8.2,15,49.4,15,46.4,1.5,11.2,45.3,33.3,10.4,35.1,11.7,20,14.4,71,3.5,2.6,4,2.7,3.4,7.7,9.6,1.6,28.5,5.9,22.4,4.9,17.5,3.9,4.2,11.7,25.2,57.4,1.4,14.1,18.4,6.5,2.8,9.9,30.1,2.7,16.3,2,54.3,10.9,1.5,5,4,14.1,8.4,45.7,2,3,7.9,5.3,11.3,2.8,4.1,5,21.4,10.2,9.1,7.3,14.1,2.5,54.8,14.5,4.5,21.2,47.9,28.6,4.1,7.2,5.2,3.4,38.4,2.7,3.3,13.9,3,11.6,32,8.75,5.7];
var bullying = [52.3,50.1,55.3,52.5,52.3,51.9,48.9,53.4,56.5,56.0,59.1,54.8,54.1,48.2,56.9,55.2,52.7,54.2,53.2,55.7,54.2,42.6,52.1,54.7,56.4,57.5,54.0,58.4,50.5,58.4,56.3,55.3,56.7,59.1,58.6,57.9,49.6,44.1,59.0,58.5,48.1,58.4,58.4,57.1,50.0,48.5,52.3,48.8,57.0,48.8,50.8,62.3,54.0,57.2,55.6,51.0,52.7,63.1,47.6,50.2,59.5,54.5,52.2,55.3,42.9,48.5,57.9,54.3,49.4,56.2,54.4,56.2,50.3,52.2,48.6,57.1,53.0,54.1,59.4,50.1,48.9,59.9,55.1,61.0,61.6,51.6,53.8,57.2,60.7,54.7,57.5,52.7,57.8,54.6,58.5,55.0,57.4,55.8,50.4,55.0,55.2,53.0,58.5,60.2,51.2,53.1,50.3,50.4,57.1,54.2,50.2,58.2,56.8,53.7,56.7,59.1,48.7,52.3,55.5,54.6,57.1,57.9,55.8,54.3,54.7,52.5,53.3,58.2,59.3,53.7,60.2,46.5,53.0,57.1,53.6,50.4,46.9,56.4,56.8,61.9,59.0,49.6,55.9,58.7,53.9,53.8,49.9,50.6,58.4,53.8];


// create space to select four local authorities
var selected1;
var selected2;
var selected3;
var selected4;
var redDenAmt;
var redVioAmt;
var redIncAmt;
var redSchAmt;
var redDivAmt;
var blueDenAmt;
var blueVioAmt;
var blueIncAmt;
var blueSchAmt;
var blueDivAmt;


// modify the dials

function setDials(dropInput) {

    if (dropInput != "none" && dropInput != "Select a location" && _.isEmpty(selected1) || selected1 == 5 && dropInput != "none" && dropInput != "Select a location") {
        selected1 = dropInput;
        document.getElementById("redDensity").style.display = "block";
        redDenAmt = 7 + (density[selected1]/23.73);
        document.getElementById("redDensity").style.marginLeft = redDenAmt+"px";
        document.getElementById("redDensityNum").innerHTML = Math.round(density[selected1]);

        document.getElementById("redViolence").style.display = "block";
        redVioAmt = 7 + (violence[selected1]*21.067 - 42.1333);
        document.getElementById("redViolence").style.marginLeft = redVioAmt+"px";
        document.getElementById("redViolenceNum").innerHTML = violence[selected1];

        document.getElementById("redIncome").style.display = "block";
        redIncAmt = 7 + (income[selected1]*0.0280 - 449.42);
        document.getElementById("redIncome").style.marginLeft = redIncAmt+"px";
        document.getElementById("redIncomeNum").innerHTML = "£" + income[selected1];

        document.getElementById("redSchools").style.display = "block";
        redSchAmt = 7 + (schools[selected1]*7.022 - 70.222);
        document.getElementById("redSchools").style.marginLeft = redSchAmt+"px";
        document.getElementById("redSchoolsNum").innerHTML = schools[selected1] + "%";

        document.getElementById("redDiversity").style.display = "block";
        redDivAmt = 7 + diversity[selected1]/0.1186;
        document.getElementById("redDiversity").style.marginLeft = redDivAmt+"px";
        document.getElementById("redDiversityNum").innerHTML = diversity[selected1] + "%";

        document.getElementById("selectedRed").style.display = "block";
        document.getElementById("selectedRed").innerHTML = "<p>" + LA[selected1] + "<span class=\"hide\"><a>X</a></span></p>";
        document.getElementById("redResult").innerHTML = bullying[selected1].toString();
    } else if (dropInput != "none" && dropInput != "Select a location" && _.isEmpty(selected2) && dropInput !=selected1|| selected2 == 5 && dropInput != "none" && dropInput != "Select a location" && dropInput !=selected1) {
        selected2 = dropInput;
        document.getElementById("blueDensity").style.display = "block";
        blueDenAmt = density[selected2]/23.73;
        document.getElementById("blueDensity").style.marginLeft = blueDenAmt - redDenAmt + 2 + "px";
        document.getElementById("blueDensityNum").innerHTML =  Math.round(density[selected2]);

        document.getElementById("blueViolence").style.display = "block";
        blueVioAmt = violence[selected2]*21.067 - 42.1333;
        document.getElementById("blueViolence").style.marginLeft = blueVioAmt - redVioAmt + 2 +"px";
        document.getElementById("blueViolenceNum").innerHTML = violence[selected2];

        document.getElementById("blueIncome").style.display = "block";
        blueIncAmt = income[selected2]*0.0280 - 449.42;
        document.getElementById("blueIncome").style.marginLeft = blueIncAmt - redIncAmt + 2 +"px";
        document.getElementById("blueIncomeNum").innerHTML = "£" + income[selected2];

        document.getElementById("blueSchools").style.display = "block";
        blueSchAmt = schools[selected2]*7.022 - 70.222;
        document.getElementById("blueSchools").style.marginLeft = blueSchAmt - redSchAmt + 2 + "px";
        document.getElementById("blueSchoolsNum").innerHTML = schools[selected2] + "%";

        document.getElementById("blueDiversity").style.display = "block";
        blueDivAmt = diversity[selected2]/0.1186;
        document.getElementById("blueDiversity").style.marginLeft = blueDivAmt - redDivAmt + 2 +"px";
        document.getElementById("blueDiversityNum").innerHTML = diversity[selected2] + "%";


        document.getElementById("selectedBlue").style.display = "block";
        document.getElementById("selectedBlue").innerHTML = "<p>" + LA[selected2] + "<span class=\"hide\"><a>X</a></span></p>";
        document.getElementById("blueResult").innerHTML = bullying[selected2].toString();
    } else if (dropInput = selected1) {
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
function reset() {
        document.getElementById("selectedRed").style.display = "none";
        document.getElementById("redDensity").style.display = "none";
        document.getElementById("redDensityNum").innerHTML = "";
        document.getElementById("redViolence").style.display = "none";
        document.getElementById("redViolenceNum").innerHTML = "";
        document.getElementById("redIncome").style.display = "none";
        document.getElementById("redIncomeNum").innerHTML = "";
        document.getElementById("redSchools").style.display = "none";
        document.getElementById("redSchoolsNum").innerHTML = "";
        document.getElementById("redDiversity").style.display = "none";
        document.getElementById("redDiversityNum").innerHTML = "";
        document.getElementById("redResult").innerHTML = "";
        selected1 = 5;
        document.getElementById("selectedBlue").style.display = "none";
        document.getElementById("blueDensity").style.display = "none";
        document.getElementById("blueDensityNum").innerHTML = "";
        document.getElementById("blueViolence").style.display = "none";
        document.getElementById("blueViolenceNum").innerHTML = "";
        document.getElementById("blueIncome").style.display = "none";
        document.getElementById("blueIncomeNum").innerHTML = "";
        document.getElementById("blueSchools").style.display = "none";
        document.getElementById("blueSchoolsNum").innerHTML = "";
        document.getElementById("blueDiversity").style.display = "none";
        document.getElementById("blueDiversityNum").innerHTML = "";
        document.getElementById("blueResult").innerHTML = "";
        selected2 = 5;
}