
export default function showLegendInfo() {
    const showHide = [".legend-info", ".location-description", ".count"];
    for (let item of showHide) {
        document.querySelector(item).classList.toggle("hiddenOnMobile")
    }
    const isHidden = document.querySelector(".legend-info").classList.contains("hiddenOnMobile");
    document.getElementById("moreless").textContent = isHidden ? "more" : "less";
}