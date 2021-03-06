const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'prispevky'))

exports.zobrazDetail = (dotaz, odpoved) => {
    odpoved.render('prispevky/detail');
};
exports.zobrazPrehled = (dotaz, odpoved) => {
    
    let prispevky = model.nacistVsechnyPrispevky()
    
    odpoved.render('prispevky/prehled', {
        prispevky,
    });  
};
exports.zobrazPridani = (dotaz, odpoved) => {
    odpoved.render('prispevky/pridani');
}
exports.zobrazOdebrat = (dotaz, odpoved) => {
    odpoved.render('prispevky/odebrat');
}
exports.pridat = (dotaz, odpoved) => {
    let nadpis = dotaz.body.input_nadpis;
    let datum = dotaz.body.input_datum;
    let telo = dotaz.body.input_clanek;
    let autor = dotaz.body.input_autor;

    prispevky.pridat(nadpis, datum, telo, autor);

    return odpoved.json({
        uspech: true,
        url: '/prispevky/prehled',
    });
}