const express = require('express');
const app = express();
const sequelize = require('./Config/db');
const userRoutes = require('./Routes/userRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');

app.use(express.json());
app.use(userRoutes);
app.use(paymentRoutes);

sequelize.sync().then(() => {
    console.log('DB connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
});
