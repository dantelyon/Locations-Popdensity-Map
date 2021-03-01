
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
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.type = "radio";
    input.id = item.name + "Radio";
    input.name = "place";
    input.value = item.name;
    input.setAttribute("onclick", `addMarkers("${item.name}")`);
    label.for = item.name + "Radio";
    label.textContent = item.value;
    div.appendChild(input);
    div.appendChild(label);
    document.querySelector(".legend-radiobuttons").appendChild(div);
})

items.forEach(item => {
    let option = document.createElement('option');
    option.value = item.name;
    option.setAttribute("onclick", `addMarkers("${item.name}")`);
    option.textContent = item.value;
    document.querySelector(".legend-dropdown").appendChild(option);
})
