const jwt = require("jsonwebtoken");

const generateToken = () =>{
    return jwt.sign({}, process.env.SEKRETKEY, {expiresIn:'24h'});
}


exports.login = async(req,res) =>{
    const {email, password } = req.body;

    if(email === 'admin@codesfortomorrow.com' && password === 'Admin123!@#'){
        const token = generateToken();
        res.json({token});
    } else{
        res.status(401).json({ message:"Invalid credentials"});
    }
}
