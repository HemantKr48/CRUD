const express = require('express');
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleCreateUser, handleUpdateUser, handleDeleteUser } = require('../controller/user');


router.get('/', handleGetAllUsers);

// app.get('/users', (req, res) => {
//     const html = `<ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// })

router.get('/:id', handleGetUserById);
router.post('/', handleCreateUser);
router.put('/:id', handleUpdateUser);
router.delete('/:id', handleDeleteUser);

module.exports = router;