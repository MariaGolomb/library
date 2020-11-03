const { PORT } = require('./common/config');
const app = require('./app');
const connectToDB = require('./db/db.client');

connectToDB(() => {
    app.listen(process.env.PORT || PORT, () => console.log(`App is running on http://localhost:${PORT}`));
});

