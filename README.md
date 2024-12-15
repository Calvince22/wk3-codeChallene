# Movie Theatre Web App

This project is a simple movie theatre web application that allows users to browse through a list of films, view details of selected films, search for movies, and buy tickets.
---
## Table of content
1. [Features](#features)
2. [Installation](#installation)
3. [File structure](#file-structure)
4. [Usage](#usage)
5. [Technology Used](#technologies-used)
6. [License](#license)

## Features

- **Film List**: Displays a list of movies fetched from a server.
- **Search Functionality**: Allows users to search movies by title.
- **Movie Details**: Displays details of a selected movie, including the title, poster, runtime, showtime, and available tickets.
- **Ticket Purchase**: Users can buy tickets for a movie, and the available tickets are updated dynamically.

## Installation

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Setup Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/calvince22/wk3-codeChallenge.git
   cd wk3-codeChallenge
   ```

2. Install `json-server` globally if not already installed:
   ```bash
   npm install -g json-server
   ```

3. Start the `json-server` with the provided `db.json` file:
   ```bash
   json-server --watch db.json
   ```

4. Open the `index.html` file in your browser to view the app.

## File Structure

```
wk3-codeChallenge/
├── index.html       # Main HTML file
├── styles.css       # Styling for the app
├── script.js        # Main JavaScript file
├── db.json          # JSON database for movies
└── README.md        # Documentation file
```

## Usage

1. **Viewing Movie List**:
   - The sidebar displays a list of movies fetched from the server.
   - Click on a movie to view its details in the main content area.

2. **Searching for Movies**:
   - Use the search bar in the header to filter the list of movies by title.

3. **Buying Tickets**:
   - Click the "Buy Ticket" button to purchase a ticket.
   - If tickets are sold out, an alert will notify the user.

## Technologies Used

- **HTML5**: For structuring the app.
- **CSS3**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content.
- **json-server**: To simulate a backend for fetching movie data.

## Customization

1. **Styling**:
   - Modify `styles.css` to change the appearance of the app.

2. **Data**:
   - Edit `db.json` to add, remove, or modify movie details.

3. **Behavior**:
   - Update `script.js` to implement additional functionality or adjust current behavior.

## Known Issues

- Tickets do not persist across sessions. This could be resolved by adding server-side updates.

## Future Enhancements

- Add user authentication for ticket purchases.
- Integrate a real backend with a database for persistent data.
- Display additional movie details such as ratings and reviews.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

