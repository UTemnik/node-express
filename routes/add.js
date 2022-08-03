const {Router} = require('express');
const Courses = require('../models/courses');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true
  });
});

router.post('/', async (req, res) => {
  const {title, price, img} = req.body;
  const courses = new Courses(title, price, img);

  await courses.save();

  res.redirect('/courses');
});

module.exports = router;
