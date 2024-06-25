const express = require('express');
const mongoose = require('mongoose');
const config = require('./pkg/config');
const academyRoutes = require('./handlers/routes/academyRoutes');
const courseRoutes = require('./handlers/routes/courseRoutes');
const Course = require('./models/course')
require ('./pkg/db/db')



const env = process.env.NODE_ENV || 'development';
const { port, MONGO_URI } = config.getSection(env);

const app = express();
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// mongoose.connect(MONGO_URI, {
// })
// .then(() => {
//     console.log('MongoDB connected');
// })
// .catch(err => console.error('MongoDB connection error:', err));

app.get('/test', (req, res) => {
    res.render('test', { pageTitle: 'Тест за backend развој на софтвер' });
  });
  
  app.get('/welcome', async (req, res) => {
    try {
      const courses = await Course.find(); 
      res.render('welcome', { courses });
    } catch (err) {
      console.error('Error fetching courses:', err);
      res.status(500).send('Error fetching courses');
    }
  });

app.use('/academies', academyRoutes);
app.use('/courses', courseRoutes);

const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
