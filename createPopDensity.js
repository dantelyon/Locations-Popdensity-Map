
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
ul.className = "legend-popdensity-colors"

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
