const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { movies, users } = require('./MoviesData.js');
const cors = require('cors');




const app = express();
const PORT = 2410;
app.use(cors());
app.use(bodyParser.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.status(403).send('Invalid Token');
        req.user = user;
        next();
    });
};

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!user) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ email: user.email, fname: user.fname, lname: user.lname }, 'your-secret-key');
    res.json({ token, user }); // Including user details in the response
});

app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get('/movies/search/:city/:language/:format/:genre/:q', (req, res) => {
    const { city, language, format, genre, q: searchTerm } = req.params;

    // Filter movies based on the provided parameters
    const filteredMovies = movies.filter(movie =>
        (!city || movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())) &&
        (!language || movie.language.toLowerCase() === language.toLowerCase()) &&
        (!format || movie.format.toLowerCase() === format.toLowerCase()) &&
        (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (!searchTerm ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    res.json(filteredMovies);
});
app.get("/movies", function (req, res) {
    let language = req.query.language;
    let format = req.query.format;
    let city = req.query.city;
    let genre = req.query.genre;
    let searchTerm = req.query.q; // Added to capture the search term
    let filteredMovies = [...movies]; // Create a copy of the original movies array

    if (language) {
        filteredMovies = filteredMovies.filter(movie => movie.language.toLowerCase() === language.toLowerCase());
    }

    if (format) {
        filteredMovies = filteredMovies.filter(movie => movie.format.toLowerCase() === format.toLowerCase());
    }

    if (genre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (city) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())
        );
    }

    if (searchTerm) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    res.send(filteredMovies);
});





// Update the previous movie endpoints to use '/movies' instead of '/movies/search'
app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
});

app.post('/movies', authenticateToken, (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.json(newMovie);
});

app.put('/movies/:id', authenticateToken, (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');

    movies[movieIndex] = { ...movies[movieIndex], ...req.body };
    res.json(movies[movieIndex]);
});

app.delete('/movies/:id', authenticateToken, (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');

    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
