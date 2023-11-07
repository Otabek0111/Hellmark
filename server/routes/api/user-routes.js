const router = require('express').Router();
const {
  createAccount,
  login,
  addCard,
  deleteCard,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');
//make auth middleware

router.route('/').post(createAccount);
router.route('/login').post(login);
router.route('/cards/:cardId').get(authMiddleware, addCard);
router.route('/:cardId').delete(authMiddleware, deleteCard);

module.exports = router;
