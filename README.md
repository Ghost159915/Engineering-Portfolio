# Engineering Portfolio

A clean, minimalist, single-page portfolio site built with plain HTML, CSS and JavaScript. It’s designed to showcase your work, skills and résumé in a lightweight, responsive package. Navigation between sections happens via simple page links (or optional animated transitions), and your résumé is embedded directly in the “About” page for quick in-browser viewing with a one-click download.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
5. [Project Structure](#project-structure)  
6. [Customizing Your Content](#customizing-your-content)  
7. [Deployment](#deployment)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Overview

This repository contains a simple, yet flexible, portfolio website template. It emphasizes:

- **Clarity & Readability**: A clean layout with ample whitespace and a focus on your photo, name, tagline, and résumé.
- **Responsiveness**: Looks great on desktop, tablet, and mobile.
- **Ease of Use**: No build tools or frameworks—just clone, edit your text/images, and publish.
- **Embed & Download**: Your résumé is embedded via `<iframe>`/PDF.js for in-browser preview, plus a download button.

---

## Features

- **Sticky, centered navigation** with pill-shaped “Projects”, “About”, and “Contact” links.
- **Hero section**: Circular avatar, your name, a short bio/tagline, and call-to-action buttons.
- **About section**: In-page résumé embed + download link.
- **Projects grid**: Card layout for highlighting repo links or case studies.
- **Optional page-transition animations** (forward/backward slide).
- **Mobile-first** CSS with fluid typography and layouts.

---

## Tech Stack

- **HTML5**: Semantically structured pages  
- **CSS3**: Flexbox, Grid, custom properties (no preprocessors)  
- **Vanilla JavaScript**: Light interactivity (nav active state, transitions, PDF.js embed)  
- **PDF.js** (optional): Clean résumé embed without heavy browser UI  

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).  
- **(Optional)** A simple HTTP server for local testing (e.g. VS Code Live Server, Python’s `http.server`, etc.).

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YourUsername/Engineering-Portfolio.git
   cd Engineering-Portfolio
