require('dotenv').config();
const app = require('./app');
const connectToDB = require('./db/db.client');

connectToDB(() => {
    app.listen(process.env.PORT, () => console.log(`App is running on http://localhost:${process.env.PORT}`));
});

