// .env file ko load karne ke liye
require('dotenv').config()

// DNS servers set karne ke liye
const dns = require('node:dns/promises');
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// App aur DB connection ko import karne ke liye
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})