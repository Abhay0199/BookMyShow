const movies = [
    {
        id: 0,
        title: "War",
        genre: "Action",
        director: "Siddharth Anand",
        description: "An action-packed Bollywood movie.",
        theaters: [
            {
                city: "NCR",
                name: "Cinepolis: DLF Place, Saket",
                timings: [
                    { date: "2023-10-01", time: "13:15", price: 420 },
                    { date: "2023-10-01", time: "17:30", price: 380 },
                ],
                seats: {
                    "13:15": ["A1", "A2", "B1", "B2"],
                    "17:30": ["C1", "C2", "D1", "D2"],
                },
            },
            {
                city: "NCR",
                name: "Cinepolis: Ambiance Mall, Gurgaon",
                timings: [
                    { date: "2023-10-01", time: "13:15", price: 420 },
                    { date: "2023-10-01", time: "17:30", price: 380 },
                    { date: "2023-10-01", time: "10:00", price: 420 },
                    { date: "2023-10-01", time: "14:30", price: 380 },
                    { date: "2023-10-01", time: "20:30", price: 250 },
                ],
                seats: {
                    "13:15": ["A1", "A2", "B1", "B2"],
                    "17:30": ["L1", "J2", "P15", "K2"],
                    "10:00": ["C5", "C2", "G1", "E2"],
                    "14:30": ["M8", "N9", "O1", "P2"],
                    "20:30": ["Q1", "P6", "J1", "K2"],
                },
            },
            {
                city: "Mumbai",
                name: "PVR: Phoenix Marketcity, Kurla",
                timings: [
                    { date: "2023-10-01", time: "14:00", price: 420 },
                    { date: "2023-10-01", time: "19:45", price: 380 },
                ],
                seats: {
                    "14:00": ["E1", "E2", "F1", "F2"],
                    "19:45": ["Q1", "O12", "L18", "M13"],
                },
            },
        ],
        language: "Hindi",
        format: "2D",
    },
    {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Action",
        director: "Anthony Russo, Joe Russo",
        description:
            "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        theaters: [
            {
                city: "NCR",
                name: "AMC Empire 25",
                timings: [
                    { date: "2023-10-01", time: "15:00", price: 420 },
                    { date: "2023-10-01", time: "19:30", price: 420 },
                ],
                seats: {
                    "15:00": ["A1", "A2", "B1", "B2"],
                    "19:30": ["C1", "C2", "D1", "D2"],
                },
            },
            {
                city: "Noida",
                name: "Cinemark 18",
                timings: [
                    { date: "2023-10-01", time: "14:15", price: 250 },
                    { date: "2023-10-01", time: "20:00", price: 250 },
                ],
                seats: {
                    "14:15": ["J1", "K2", "O1", "P12"],
                    "20:00": ["M1", "K5", "J9", "N10"],
                },
            },
        ],
        language: "English",
        format: "3D",
    },
    {
        id: 2,
        title: "Bhaag Milkha Bhaag",
        genre: "Biography",
        director: "Rakeysh Omprakash Mehra",
        description:
            'The story of the "Flying Sikh" - world champion runner and Olympian Milkha Singh.',
        theaters: [
            {
                city: "Delhi",
                name: "PVR: Select Citywalk, Saket",
                timings: [
                    { date: "2023-10-01", time: "16:30", price: 420 },
                    { date: "2023-10-01", time: "20:45", price: 430 },
                ],
                seats: {
                    "16:30": ["A1", "A2", "B1", "B2"],
                    "20:45": ["C1", "C2", "D1", "D2"],
                },
            },
            {
                city: "Chandigarh",
                name: "Wave Cinemas: Elante Mall",
                timings: [
                    { date: "2023-10-01", time: "15:15", price: 410 },
                    { date: "2023-10-01", time: "21:00", price: 420 },
                ],
                seats: {
                    "15:15": ["E1", "E2", "F1", "F2"],
                    "21:00": ["G1", "G2", "H1", "H2"],
                },
            },
        ],
        language: "Hindi",
        format: "2D",
    },
    {
        id: 3,
        title: "Petta",
        genre: "Action",
        director: "Karthik Subbaraj",
        description: "An action-packed Tamil movie starring Rajinikanth.",
        theaters: [
            {
                city: "Chennai",
                name: "Sathyam Cinemas",
                timings: [
                    { date: "2023-10-01", time: "14:45", price: 430 },
                    { date: "2023-10-01", time: "19:15", price: 440 },
                ],
                seats: {
                    "14:45": ["A1", "A2", "B1", "B2"],
                    "19:15": ["C1", "C2", "D1", "D2"],
                },
            },
            {
                city: "Bangalore",
                name: "Inox: Garuda Mall",
                timings: [
                    { date: "2023-10-01", time: "15:30", price: 420 },
                    { date: "2023-10-01", time: "21:30", price: 430 },
                ],
                seats: {
                    "15:30": ["E1", "E2", "F1", "F2"],
                    "21:30": ["G1", "G2", "H1", "H2"],
                },
            },
        ],
        language: "Tamil",
        format: "2D",
    },
];
users = [
    { email: "test@test.com", password: "testpassword", fname: "ashish", lname: "rawat", married: "No" },
];
module.exports = { movies, users };