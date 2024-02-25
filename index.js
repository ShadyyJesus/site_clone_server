const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const productRouter = require('./routes/product');
const gallaryRouter = require('./routes/gallary');
app.use("/product", productRouter);
app.use("/gallary", gallaryRouter);
app.use('/image', express.static('image'));

db.sequelize.sync().then((value) => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});