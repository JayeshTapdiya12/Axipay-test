const User = require('../Models/user');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getUsers = async (_, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.updateUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, { where: { id: req.params.user_id } });
        updated ? res.json({ message: 'Updated' }) : res.status(404).json({ message: 'User not found' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({ where: { id: req.params.user_id } });
        deleted ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'User not found' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
