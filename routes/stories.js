const express = require(`express`);
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');
const storiesController = require('../controllers/stories');

router
  .route('/add')
  .get(ensureAuth, storiesController.add)
  .post(ensureAuth, storiesController.create);

module.exports = router;
