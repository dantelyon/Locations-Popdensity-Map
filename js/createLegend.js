
import METADATA from "./METADATA.js";

const CELLS = [
    {color: '#feedde', popdensity: "< 10"},
    {color: '#fdd0a2', popdensity: "10"},
    {color: '#fdae6b', popdensity: "20"},
    {color: '#fd8d3c', popdensity: "50"},
    {color: '#f16913', popdensity: "100"},
    {color: '#d94801', popdensity: "200"},
    {color: '#8c2d04', popdensity: "> 1000"}
]

function createLegendCells() {
    let ul = document.createElement('ul');
    ul.className = "legend-popdensity-colors";
    CELLS.forEach(item => {
        let li = document.createElement('li');
        let color = document.createElement('div');
        let text = document.createElement('div');
        color.className = "legend-popdensity-color";
        color.style.background = item.color;
        text.className = "legend-popdensity-inhabitants";
        text.textContent = item.popdensity;
        li.appendChild(color);
        li.appendChild(text);
        ul.appendChild(li);
    })
    document.getElementsByClassName("legend-popdensity")[0].appendChild(ul)
}
createLegendCells()

for (let place in METADATA) {
    let option = document.createElement('option');
    option.value = METADATA[place].value;
    option.textContent = METADATA[place].name;
    document.querySelector(".legend-dropdown").appendChild(option);
}

document.querySelector("input[name=averageAll]").addEventListener("change", togglePin)
document.querySelector("input[name=centerPop]").addEventListener("change", togglePin)
function togglePin(event) {
    let map_pin = document.querySelector(`div .${event.target.name}`);
    map_pin.style.display = event.target.checked ? "block" : "none";
}

document.getElementById("show-more-info").addEventListener('click', showLegendInfo)
function showLegendInfo() {
    const showHide = [".legend-info", ".location-description", ".count"];
    for (let item of showHide) {
        document.querySelector(item).classList.toggle("hiddenOnMobile");
    }
    const isHidden = document.querySelector(".legend-info").classList.contains("hiddenOnMobile");
    document.getElementById("moreless").textContent = isHidden ? "more" : "less";
}