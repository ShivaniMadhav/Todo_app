const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://shivanimadhav0906:Shiva%402004%2A@cluster0.kcofw9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
