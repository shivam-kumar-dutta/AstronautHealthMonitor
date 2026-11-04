# ⎈ ORBIT — Astronaut Health Monitor

> **NASA Space Apps Challenge 2026 Submission**  
> *A lightweight, real-time physiological telemetry dashboard for crew wellness and microgravity vital analysis.*

---

## 🚀 Overview

**ORBIT** is a telemetry-driven web application designed to monitor astronaut health indicators during long-duration space missions (e.g., ISS, Lunar Habitat, or Mars transit). 

In extreme mission environments, physical microgravity stressors, fluid shifts, radiation exposure, and isolation pose continuous risks to crew members. **ORBIT** aggregates physiological telemetry data into a streamlined visual dashboard, enabling astronauts and ground control flight surgeons to monitor vitals, detect drift outside baseline thresholds early, and act on targeted recovery advisories.

---

## ✨ Key Features

- **Crew Wellness Score:** Dynamically evaluates overall health readiness based on multi-indicator baseline metrics.
- **Biometric Telemetry Cards:** Real-time visualization for critical health metrics:
  - Heart Rate (`bpm`)
  - Blood Oxygen / SpO2 (`%`)
  - Body Temperature (`°C`)
  - Systolic / Diastolic Blood Pressure (`mmHg`)
  - Sleep Duration (`hours`)
  - Radiation Exposure (`mSv`)
- **Automated Threshold Evaluation:** Categorizes each reading as `Normal`, `Watch / Monitor`, or `Alert` based on safe spaceflight thresholds.
- **Sparkline Visualizations:** Pure SVG mini-charts demonstrating temporal trends without heavy external libraries.
- **Interactive Telemetry Testing:** Allows manual vital updates directly from the dashboard to simulate telemetry drift and threshold triggers in real time.
- **Targeted Action Advisories:** Automatically suggests contextual medical guidelines when vitals drift out of nominal ranges.

---

## 🛠️ Architecture & Tech Stack

Designed from the ground up as a **zero-dependency, lightweight web system**, ensuring low memory overhead, high reliability, and fast performance.

- **Backend / Server:** Node.js (Built using native `http`, `fs`, and `path` modules)
- **Data Layer:** Structured JSON telemetry payloads (`data.json`)
- **Frontend UI:** HTML5 (`index.html`) & Modern CSS3 (`style.css`) utilizing CSS Grid and Flexbox layouts
- **Logic & DOM Parsing:** Vanilla JavaScript (`script.js`) using asynchronous `fetch()` API calls

---

## 📁 Repository Structure

```text
orbit-health-monitor/
├── server.js          # Node.js local web server & API routing
├── index.html         # Main dashboard layout structure
├── style.css          # Aerospace light UI theme & responsive styling
├── script.js          # Telemetry fetching, evaluation logic & DOM builder
├── data.json          # Simulated astronaut biometric telemetry payload
└── README.md          # Project documentation & mission summary
```

---

## ⚡ Quick Start & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 14 or higher) installed on your system.

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/orbit-health-monitor.git
   cd orbit-health-monitor
   ```

2. **Start the Node.js server:**
   ```bash
   node server.js
   ```

3. **Launch the dashboard:**
   Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 🔬 How It Works

1. **Data Ingestion:** `server.js` serves static assets and exposes the `/api/data` endpoint delivering structured telemetry from `data.json`.
2. **Status Determination:** The frontend script evaluates each metric against physiological normal and watch ranges:
   $$\text{Status} = \begin{cases} \text{Normal} & \text{if } V \in [\text{min}_{\text{normal}}, \text{max}_{\text{normal}}] \\ \text{Watch} & \text{if } V \in [\text{min}_{\text{watch}}, \text{max}_{\text{watch}}] \\ \text{Alert} & \text{otherwise} \end{cases}$$
3. **Dynamic UI Rendering:** The system constructs biometric cards, applies visual status badges, plots trend sparklines, and updates the aggregate wellness score dynamically without full page reloads.

---

## 🛰️ Future Roadmap

- [ ] Real-time WebSocket streaming for continuous sensor telemetry input.
- [ ] Multi-crew selector interface for Mission Control ground staff.
- [ ] Historical telemetry logging backed by persistent SQLite database storage.
- [ ] Integration with wearable physiological hardware (e.g., smart garments, ECG straps).

---

## 📜 Disclaimer
*This project is a hackathon prototype developed for the NASA Space Apps Challenge 2026. It is intended for demonstration purposes and is not a certified medical diagnostic system.*
