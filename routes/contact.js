
var Contact = require('../DBSchema/contact');
var contact = {
    getAllContact: function (req, res, next) {
        Contact.find(function (err, all) {
            if (err)
                res.send(err);

            res.json(all);
        });
    },
    addContact: function (req, res, next) {
        var ToAdd = new Contact(req.body);

        error = ToAdd.validateSync();
        var i;
        for (i in error.errors) {
            if (error.errors.hasOwnProperty(i)) {
                console.log(error.errors[i].path,error.errors[i].message);
            }
        }
        if (error == undefined) {
            Contact.create(req.body, function (err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } else {
            res.json("Validation Error");
        }
    },
    updateContact: function (req, res, next) {
        Contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }

}

module.exports = contact;