export const authAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token !== 'Bearer admin345') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};