exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "este e o valor da variavel local"
    next();
}

module.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfErro = (err, req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.render("404")
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}