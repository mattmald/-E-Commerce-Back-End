const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll()
     res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {id: req.params.id},
  }).then((Tag) => {
    res.json(Tag)
  })  
});

router.post('/', async (req, res) => {
  // create a new tag
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

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
