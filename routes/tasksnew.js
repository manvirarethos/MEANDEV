var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/tasks', ['tasks']);

var products = {

    getAllTasks: function (req, res, next) {
        db.tasks.find(function (err, tasks) {
            if (err) {
                res.send(err);
            }
            res.json(tasks);
        });
    },

    addTask: function (req, res, next) {
        var task = req.body;
        if (task.Name == '') {
            res.status(400);
            res.json({
                "error": "bad data"
            });

        } else {
            db.tasks.save(task, function (err, task) {
                if (err) {
                    res.send(err);

                } else {
                    res.json(task);
                }
            });

        }
    },
    updateTask: function (req, res, next) {
        var task = req.body;
        if (task.Name == '') {
            res.status(400);
            res.json({
                "error": "bad data"
            });

        } else {
            db.tasks.update({
                _id: mongojs.ObjectId(task._id)
            }, task, {}, function (err, task) {
                if (err) {
                    res.send(err);

                } else {
                    res.json(task);
                }
            });

        }
    },

    deleteTask: function (req, res, next) {
        db.tasks.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, function (err, task) {
            if (err) {

                res.send(err);
            }
            res.json(task);
        });
    }


}
module.exports = products;