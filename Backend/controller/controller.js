const Bill = require('../model/bill');

exports.addBill = (req, res, next) => {
    const dishes = req.body.dishes;
    const price = req.body.price;
    const table = req.body.table;
    return Bill.create({
        dishes: dishes,
        price: price,
        table: table

    }).then(data => {
        console.log('Successfully added to the database from the page');
        return res.json(data);
    }).catch(err => console.log(err));
}

exports.getBill = (req, res, next) => {
    Bill.findAll()
        .then(row => {
            res.json(row);
        })
        .catch(err => console.log(err));
}

exports.deleteBill = (req, res, next) => {
    const id = req.body.id;
    Bill.findByPk(id)
        .then(Row => {
            return Row.destroy();
        }).then(() => {
            console.log('Succesfully deleted ---------------');
            res.redirect('add-bill');
        }).catch(err => console.log(err));
}
