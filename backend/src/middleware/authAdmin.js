export const authAdmin = (req, res, next) => {
    const token = req.handlers['authorization'];
    if (token !== 'Bearer admin345') {
        return res.status(401).json({ massage: 'Unauthorized' });
    }
    next();
};