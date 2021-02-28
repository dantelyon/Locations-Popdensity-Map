
const popdensity = [
    {color: '#feedde', text: "< 10"},
    {color: '#fdd0a2', text: "10"},
    {color: '#fdae6b', text: "20"},
    {color: '#fd8d3c', text: "50"},
    {color: '#f16913', text: "100"},
    {color: '#d94801', text: "200"},
    {color: '#8c2d04', text: "> 1000"}
]

let ul = document.createElement('ul')
ul.className = "legend-colors"

popdensity.forEach(item => {
    let li = document.createElement('li');
    let color = document.createElement('div');
    let text = document.createElement('div');
    color.className = "legend-popdensity-color";
    color.style.background = item.color;
    text.className = "legend-popdensity-inhabitants";
    text.innerHTML = item.text;
    li.appendChild(color);
    li.appendChild(text);
    ul.appendChild(li);
})

document.getElementsByClassName("legend-popdensity")[0].appendChild(ul)


/*
                <svg class="legend2">
                    <g class="legendCells">
                        <g class="cell" style="opacity: 1;" transform="translate(0,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(202, 0, 32);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">10%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(50,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(243, 160, 127);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">18%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(100,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(247, 242, 240);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">26%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(150,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(142, 194, 221);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">33%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(200,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(5, 113, 176);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">41%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(250,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(202, 0, 32);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">10%</text>
                        </g>
                        <g class="cell" style="opacity: 1;" transform="translate(300,0)">
                            <rect class="swatch" height="10" width="50" style="fill: rgb(142, 194, 221);"></rect>
                            <text class="label" transform="translate(0,23)" style="text-anchor: start;">33%</text>
                        </g>
                    </g>
                </svg>
*/