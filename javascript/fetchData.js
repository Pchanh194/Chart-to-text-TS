const fs = require('fs');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API_PATH = 'dev-api.piechowskienergy.org';
const BUILDING_ID = '111';

function fetchData(startDate, endDate) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            } else if (this.readyState == 4) {
                reject('Error fetching data');
            }
        };
        xhttp.open("GET", `https://${API_PATH}/building-data/data/time/zones/${BUILDING_ID}?data_type=temp&start_date=${startDate}&end_date=${endDate}`, true);
        xhttp.send();
    });
}

function isDateValid(year, month, day) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

async function fetchAndSaveData() {
    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
            if (!isDateValid(2022, month, day)) continue;
            let dateString = `${2022}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            try {
                const data = await fetchData(dateString, dateString);
                fs.writeFileSync(`data/data_${dateString}.json`, JSON.stringify(data, null, 2));
            } catch (error) {
                console.error(`Error fetching data for ${dateString}: ${error}`);
            }
        }
    }
}

fetchAndSaveData();
