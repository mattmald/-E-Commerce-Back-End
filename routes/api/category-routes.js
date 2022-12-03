const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll()
     res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id},
  }).then((Category) => {
    res.json(Category)
  }) 
});

router.post('/', async (req, res) => {
  try {
    const categoryDataa = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Tag.update(
    {category_name: req.body.category_name},
    {where: {id: req.params.id}}
  ) 
  .then((categoryUpdated) => {
      res.json(categoryUpdated);
    })
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{id: req.params.id}
  }) 
  .then((categoryDelete) => {
    res.json(categoryDelete);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
