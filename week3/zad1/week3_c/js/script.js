const calculateAverage = () => {
    const input = document.getElementById("input").value;
    const sortField = document.getElementById("sort").value;
    const measurements = input.split("@");
    let sensors = {};
    for (let i = 0; i < measurements.length; i++) {
        let sensorId = parseInt(measurements[i].substring(0, 2));
        let temperature = parseInt(measurements[i].substring(2));

        if (!sensors[sensorId]) {
            sensors[sensorId] = {
                totalTemperature: 0,
                count: 0
            };
        }
        sensors[sensorId].totalTemperature += temperature;
        sensors[sensorId].count++;
    }
    let sortedSensors = [];
    for (let sensorId in sensors) {
        sortedSensors.push({
            id: sensorId,
            averageTemperature: sensors[sensorId].totalTemperature / sensors[sensorId].count
        });
    }
    if (sortField === "id") {
        sortedSensors.sort(function (a, b) {
            return a.id - b.id;
        });
    } else if (sortField === "temperature") {
        sortedSensors.sort(function (a, b) {
            return a.averageTemperature - b.averageTemperature;
        });
    }
    let output = document.getElementById("output");
    output.innerHTML = "<h2>Результат:</h2>";
    for (let j = 0; j < sortedSensors.length; j++) {
        let div = document.createElement("div");
        div.innerHTML = sortedSensors[j].id + " " + sortedSensors[j].averageTemperature.toFixed(1);
        div.style.fontSize = "20px";
        output.appendChild(div);
    }
}