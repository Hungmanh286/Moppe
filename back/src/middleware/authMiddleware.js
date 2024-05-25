const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
        if (user?.isAdmin) {
            next()    
        } else {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
      });
}

// const authUserMiddleWare = (req, res, next) => {
//     console.log('req.headers.token', req.headers.token)
//     const token = req.headers.token.split(' ')[1]
//     const userId = req.params.id
//     jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
//         if (err) {
//             return res.status(404).json({
//                 message: 'The authentication',
//                 status: 'ERROR'
//             })
//         }
//         if (user?.isAdmin || user?.id === userId) {
//             next()    
//         } else {
//             return res.status(404).json({
//                 message: 'The authentication',
//                 status: 'ERROR'
//             })
//         }
//       });
// }
const authUserMiddleWare = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'No token provided',
            status: 'ERROR'
        });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({
            message: 'Invalid token format',
            status: 'ERROR'
        });
    }

    const token = parts[1];
    const userId = req.params.id;

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(403).json({
                message: 'Failed to authenticate token',
                status: 'ERROR'
            });
        }

        if (user?.isAdmin || user?.id === userId) {
            next();
        } else {
            return res.status(403).json({
                message: 'Unauthorized access',
                status: 'ERROR'
            });
        }
    });
};
module.exports = {
    authMiddleWare,
    authUserMiddleWare,
}