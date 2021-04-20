
const CELLS = [
    {color: '#feedde', popdensity: "< 10"},
    {color: '#fdd0a2', popdensity: "10"},
    {color: '#fdae6b', popdensity: "20"},
    {color: '#fd8d3c', popdensity: "50"},
    {color: '#f16913', popdensity: "100"},
    {color: '#d94801', popdensity: "200"},
    {color: '#8c2d04', popdensity: "> 1000"}
]

export default function createLegendCells() {
    let ul = document.createElement('ul')
    ul.className = "legend-popdensity-colors"
    CELLS.forEach(item => {
        let li = document.createElement('li');
        let color = document.createElement('div');
        let text = document.createElement('div');
        color.className = "legend-popdensity-color";
        color.style.background = item.color;
        text.className = "legend-popdensity-inhabitants";
        text.innerHTML = item.popdensity;
        li.appendChild(color);
        li.appendChild(text);
        ul.appendChild(li);
    })
    document.getElementsByClassName("legend-popdensity")[0].appendChild(ul)
}