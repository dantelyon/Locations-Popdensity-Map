
import COORDS_DATA from "./coordsData.js";

const averageCoords = {
    average_of_ALL: [15.636830766913004, 59.26063787090151],
    icamaxi: [15.39884632183908,58.598537586206895],
    ikea: [15.86243378181818,59.24982607727274],
    oldestcompanies: [15.297745408707323,58.54811563967479],
    districtcourts: [16.067704114652773,59.43269646787718],
    prisons: [16.046506022222225,59.19030015555556],
    kronans: [15.466329582802544,59.12684053503183],
    max: [15.899692751492545,59.223979081343295],
    policestations: [15.355998115328468,59.289423144525585],
    powerplants: [16.20785595238095,61.71807321428572],
    chargingstations: [15.343572544843065,59.03586594618839],
    ingridbergman: [16.132403971606216,59.5009873049529],
    hospitals: [15.72708045371428,59.34572754114289],
    firestations: [15.295312813729504,59.174471618032825],
    systembolaget: [15.542727814026993,59.17940289878541],
    trialsubjects: [14.90825185453094,58.29532085264662],
}

export default averageCoords

//for calculating average coordinate of all places
function getAverageALL() {
    let longitudeAllSum = 0;
    let latitudeAllSum = 0;
    for (let item in COORDS_DATA) {
        const average = getAverage(item)
        longitudeAllSum += average[0];
        latitudeAllSum += average[1];
    }
    let longitudeAllAverage = longitudeAllSum / Object.keys(COORDS_DATA).length;
    let latitudeAllAverage = latitudeAllSum / Object.keys(COORDS_DATA).length;
    return [longitudeAllAverage, latitudeAllAverage]
}

//for calculating the average coordinate of one place
function getAverage(type) {
    let longitudeSum = 0;
    let latitudeSum = 0;
    const parseData = JSON.parse(COORDS_DATA[type])
    parseData.forEach(coord => longitudeSum += coord[0]);
    parseData.forEach(coord => latitudeSum += coord[1]);
    let longitudeAverage = longitudeSum / parseData.length;
    let latitudeAverage = latitudeSum / parseData.length;
    return [longitudeAverage, latitudeAverage];
}
