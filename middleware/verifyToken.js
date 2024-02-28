const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const token = req.headers['authorization'];

    if(!token) return res.status(401).json({ message : 'Unauthorized'});

    jwt.verify(token.split(' ')[1], process.env.SEKRETKEY, (err, decoded) =>{
        if(err) return res.status(401).json({message: 'Invalid token'});
        next();
    })
}

module.exports= verifyToken;