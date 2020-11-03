const {PORT} = require('./common/config');
const app = require('./app')

app.listen(process.env.PORT || PORT, () =>
console.log(`App is running on http://localhost:${PORT}`)
);