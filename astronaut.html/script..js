// script.js - Telemetry data and dynamic card renderer

const data = {
  "astronaut": "Alex Morgan",
  "mission": "Expedition 74",
  "indicators": [
    {
      "id": "heartRate",
      "name": "Heart rate",
      "unit": "bpm",
      "value": 72,
      "normal": [60, 100],
      "watch": [50, 110],
      "baseline": "Resting range 60–100 bpm",
      "sparkline": "M 0,20 Q 20,5 40,20 T 80,10 T 120,20"
    },
    {
      "id": "bloodOxygen",
      "name": "Blood oxygen",
      "unit": "%",
      "value": 98,
      "normal": [95, 100],
      "watch": [90, 94],
      "baseline": "Target saturation 95–100%",
      "sparkline": "M 0,15 Q 30,10 60,18 T 120,15"
    },
    {
      "id": "bodyTemp",
      "name": "Body temperature",
      "unit": "°C",
      "value": 36.7,
      "normal": [36.1, 37.2],
      "watch": [35.5, 38.0],
      "baseline": "Baseline range 36.1–37.2 °C",
      "sparkline": "M 0,20 Q 25,25 50,15 T 120,20"
    },
    {
      "id": "bloodPressure",
      "name": "Blood pressure",
      "unit": "mmHg",
      "value": 118,
      "normal": [90, 120],
      "watch": [80, 139],
      "baseline": "Within your personal baseline",
      "sparkline": "M 0,10 Q 30,25 70,12 T 120,18"
    },
    {
      "id": "sleep",
      "name": "Sleep duration",
      "unit": "hours",
      "value": 6.4,
      "normal": [7, 9],
      "watch": [5, 10],
      "baseline": "Goal 7–9 hours",
      "sparkline": "M 0,10 Q 40,30 80,15 T 120,25"
    },
    {
      "id": "radiation",
      "name": "Radiation exposure",
      "unit": "mSv",
      "value": 0.12,
      "normal": [0, 0.5],
      "watch": [0.51, 1.0],
      "baseline": "Daily dose below threshold",
      "sparkline": "M 0,25 Q 30,20 60,22 T 120,25"
    }
  ]
};

// Helper function to check health status
function getStatus(indicator) {
  const val = indicator.value;
  if (val >= indicator.normal[0] && val <= indicator.normal[1]) return "normal";
  if (val >= indicator.watch[0] && val <= indicator.watch[1]) return "watch";
  return "alert";
}

const badgeLabels = {
  normal: "Normal",
  watch: "Monitor",
  alert: "Alert"
};

// Function to build and inject the cards into index.html
function renderPage() {
  document.getElementById("astronaut-name").textContent = data.astronaut;
  
  let cardsHtml = "";
  
  data.indicators.forEach(item => {
    const status = getStatus(item);
    
    cardsHtml += `
      <div class="card">
        <div class="card-header">
          <span class="card-title">${item.name}</span>
          <span class="badge ${status}">${badgeLabels[status]}</span>
        </div>
        <div class="card-body">
          <div>
            <div class="value">${item.value} <span class="unit">${item.unit}</span></div>
            <div class="baseline">${item.baseline}</div>
          </div>
          <svg class="sparkline" viewBox="0 0 120 35">
            <path d="${item.sparkline}" fill="none" stroke="${status === 'normal' ? '#10b981' : '#f59e0b'}" stroke-width="2"/>
          </svg>
        </div>
      </div>
    `;
  });

  document.getElementById("cards").innerHTML = cardsHtml;
}

// Run the script when the page loads
renderPage();