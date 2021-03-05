
const items = [
    {name: "ikea", value: "IKEA"},
    {name: "policeStations", value: "Police stations"},
    {name: "icamaxi", value: "ICA Maxi"},
    {name: "kronans", value: "Pharmacy (kronans)"},
    {name: "powerplants", value: "Power plants"},
    {name: "chargingstations", value: "EV charging stations"},
    {name: "oldestcompanies", value: "Oldest companies (still active)"},
    {name: "districtcourts", value: "District courts"},
    {name: "prisons", value: "Prisons"},
    {name: "max", value: "MAX hamburgers"},
]

items.forEach(item => {
    let option = document.createElement('option');
    option.value = item.name;
    option.setAttribute("onclick", `addMarkers("${item.name}")`);
    option.textContent = item.value;
    document.querySelector(".legend-dropdown").appendChild(option);
})