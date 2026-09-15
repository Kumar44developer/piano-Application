<div align="center">

# Piano

### Play a full octave right in your browser

An interactive virtual piano built with vanilla HTML, CSS, and JavaScript. Play notes with your mouse or keyboard and hear each tone generated live through the Web Audio API. No audio files, dependencies, or build step required.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/API-Web%20Audio-8A2BE2)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Keyboard Mapping](#keyboard-mapping)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Piano is a front-end only application that renders a playable one-octave keyboard in the browser. Each key produces its correct musical pitch using synthesized audio, so there are no sample files to download or host. The layout uses styled white and black keys with a press animation for visual feedback.

## Features

- Full octave from C to B with white and black keys
- Live tone synthesis for every note through the Web Audio API
- Mouse click and physical keyboard input
- Visual key-press animation
- No audio assets, external libraries, or build tools

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Keyboard layout and structure |
| CSS3 | Key styling, gradients, and press animation |
| JavaScript | Input handling and note triggering |
| Web Audio API | Real-time tone generation |

## How It Works

Each key carries a data attribute naming its note. When a key is clicked or its mapped keyboard key is pressed, the app looks up the note frequency, creates an oscillator with a short attack and release envelope through the Web Audio API, and plays the tone. A CSS class provides a brief press animation on every strike.

## Keyboard Mapping

| Keyboard | Note |
| --- | --- |
| A | C |
| W | Db |
| S | D |
| E | Eb |
| D | E |
| F | F |
| T | Gb |
| G | G |
| Y | Ab |
| H | A |
| U | Bb |
| J | B |

## Project Structure

```
project30/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server dependencies are required.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/piano-Application.git
```

Open `index.html` in any modern browser. For live reloading during development, the VS Code Live Server extension works well.

## Usage

1. Click a key with your mouse, or press its mapped keyboard key.
2. Hear the corresponding note play instantly.
3. Combine keys to play simple melodies.

## Roadmap

- Multiple octaves with an octave shift control
- Selectable instrument tones and waveforms
- Sustain and volume controls
- Recording and playback of performances
- On-screen keyboard hints

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
