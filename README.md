# Astronaut Health Monitor

A lightweight, browser-based dashboard concept for viewing an astronaut's health and wellness indicators during a space mission. The interface displays sample telemetry for heart rate, blood oxygen, body temperature, blood pressure, sleep duration, and radiation exposure.

> **Demo only:** The dashboard uses hard-coded sample values. It is not connected to live sensors or medical systems, and it must not be used for diagnosis or treatment.

## Features

- Mission overview with crew member and mission details
- Health indicator cards rendered dynamically with JavaScript
- Status badges for normal, monitor, and alert ranges
- Baseline guidance and simple SVG sparklines for each indicator
- Responsive styling with a dark, space-inspired visual design

## Project structure

```text
.
├── app.js                     # Small console-based sample telemetry example
├── data/
│   └── astronaut.json         # Sample astronaut telemetry data
└── astronaut.html/
    ├── index.html             # Dashboard page
    ├── script..js             # Sample indicator data and card rendering
    └── style.css              # Dashboard styles
```

## Run locally

No build step or package installation is required. Clone or download the repository, then open `astronaut.html/index.html` in a modern web browser. The page loads its styles and JavaScript from the same directory.

Alternatively, serve the repository with any static file server and visit `/astronaut.html/`.

## Sample data

The dashboard currently uses illustrative values defined in `astronaut.html/script..js`. The separate `data/astronaut.json` file and root-level `app.js` are also sample telemetry examples; the dashboard does not currently fetch or read that JSON file.

Indicator status ranges are configured in the dashboard script. Update those values and the sample readings there to change what the cards display. These thresholds are for demonstrating the interface only and are not medical guidance.

## Technologies

- HTML
- CSS
- Vanilla JavaScript
- Inline SVG sparklines

## License

No license is currently specified. Contact the repository owner before using or redistributing this project.
