module.exports = {
    //Create Product Function
    create: (req, res) => {
        req.app.db.create_product().then( (dbResponse) => {
            res.status(200).send('Created');
        }).catch( () => {
            res.status(500).send('Failed');
        })
    },

    //Read Product Function
    getOne: (req, res) => {
        req.app.db.read_product().then((product) => {
            res.status(200).send(product);
        }).catch(() => {
            res.status(500).send('Could not retrieve product');
            console.log(error);
        })
    },

    getAll: (req, res) => {
        req.app.db.read_products().then((products) => {
            res.status(200).send(products);
        }).catch(() => {
            res.status(500).send('Could not get products');
            console.log(error);
        })
    },

    update: (req, res) => {
        req.app.db.update_product().then(() => {
            res.status(200).send('Updated');
        }).catch(() => {
            res.send(500).send('Failed');
        })
    },

    delete: (req, res) => {
        req.app.db.delete_product().then(() => {
            res.status(200).send('Deleted');
        }).catch(() => {
            res.status(500).send('Failed');
        })
    }
}