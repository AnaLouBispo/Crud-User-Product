// Nome, preco, qtd
const validateProduct = (req, resp, next) =>{
    const { nome, preco,qtd} =  req.body;
    if (!nome||!preco||!qtd) {
        return resp.status(400).json({
            msg: "Canpos Invalidos, revise ios dados"
        });
    };
    next();
};

const validateProductId = (req,res,next) =>{
    const { id } =  req.params;

    if(!id){
        return res.status(400).json({
            msg: "Missing Params :( "
        });
    };
    next();
};

module.exports = {validateProduct, validateProductId}