const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//finds all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll()
     res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//find a certain tag based on id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {id: req.params.id},
  }).then((Tag) => {
    res.json(Tag)
  })  
});

//makes a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates a tag based on id
router.put('/:id', (req, res) => {
  Tag.update(
    {tag_name: req.body.tag_name},
    {where: {id: req.params.id}}
  ) 
  .then((tagUpdated) => {
      res.json(tagUpdated);
    })
    .catch((err) => res.json(err))
});

//delete tag based on id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{id: req.params.id}
  }) 
  .then((tagDelete) => {
    res.json(tagDelete);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
