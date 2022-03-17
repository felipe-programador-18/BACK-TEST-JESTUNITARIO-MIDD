
const Home = (req, res, next) => {
    res.render('home')
    next('verificando acesso página')
}


module.exports= {
    Home
}