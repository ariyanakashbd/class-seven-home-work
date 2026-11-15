function security(req,res,next){
    if(req.headers.authorization == "12345678"){
        next();
    }else{
        return res.json({
            success : false,
            message : 'Data Not Found'
        });
    };
};

module.exports = security;