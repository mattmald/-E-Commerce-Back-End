const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    })
     res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id},
    include: [Product]
  }).then((Category) => {
    res.json(Category)
  }) 
});

router.post('/', (req, res) => {
    Category.create(
       req.body
    ).then((categoryData) => {
       res.status(200).json(categoryData);
    })
   .catch ((err) => {
    res.status(400).json(err);
})});

router.put('/:id', (req, res) => {
  Category.update(
    req.body,
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
