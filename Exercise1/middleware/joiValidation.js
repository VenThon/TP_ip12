const joiValidation = (schema) =>{
    return async (req, res, next) =>{
        try {
            const body = req.body;
            await schema.validateAsync(body);
        } catch (error) {
            return res.json({success: false, error: error})
        }
        next();
    }
}

module.exports = joiValidation;