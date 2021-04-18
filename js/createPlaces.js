
const placeOptions = [
    {value: "ikea", name: "IKEA"},
    {value: "policestations", name: "Police stations"},
    {value: "icamaxi", name: "ICA Maxi"},
    {value: "kronans", name: "Pharmacy (kronans)"},
    {value: "powerplants", name: "Power plants"},
    {value: "chargingstations", name: "EV charging stations"},
    {value: "oldestcompanies", name: "Oldest companies (still active)"},
    {value: "districtcourts", name: "District courts"},
    {value: "prisons", name: "Prisons"},
    {value: "max", name: "MAX hamburgers"},
    {value: "ingridbergman", name: "Ingrid Bergman"},
    {value: "hospitals", name: "Hospitals"},
    {value: "firestations", name: "Fire stations"},
    {value: "systembolaget", name: "Systembolaget"},
    {value: "trialsubjects", name: "Subjects of criminal trial"},
]

export default function createLegendOptions() {
    placeOptions.forEach(place => {
        let option = document.createElement('option');
        option.value = place.value;
        option.textContent = place.name;
        document.querySelector(".legend-dropdown").appendChild(option);
    })
}