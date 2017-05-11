var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/tasks', ['tasks']);


router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});
router.get('/tasks/:id', function (req, res, next) {
    db.tasks.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {

            res.send(err);
        }
        res.json(task);
    });
});


// Save New task
router.post('/tasks', function (req, res, next) {
    // Server Level Validations
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

});


router.delete('/tasks/:id', function (req, res, next) {
    db.tasks.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {

            res.send(err);
        }
        res.json(task);
    });
});


router.put('/tasks/:id', function (req, res, next) {
    // Server Level Validations
    var task = req.body;
    if (task.Name == '') {
        res.status(400);
        res.json({
            "error": "bad data"
        });

    } else {
        db.tasks.update({_id:mongojs.ObjectId(task._id)},task,{}, function (err, task) {
            if (err) {
                res.send(err);

            } else {
                res.json(task);
            }
        });

    }

});
module.exports = router;