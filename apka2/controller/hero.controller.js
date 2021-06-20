'use strict';
const Hero = require('../model/hero.model');
exports.findAll = function (req, res) {
    Hero.findAll(function (err, hero) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', hero);
        res.send(hero);
    });
};
exports.create = function (req, res) {
    const new_hero = new Hero(req.body);
    console.log(req.body)
//handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        Hero.create(new_hero, function (err, hero) {
            if (err)
                res.send(err);
            res.json(hero);
        });
    }
};
exports.findById = function (req, res) {
    Hero.findById(req.params.id, function (err, hero) {
        console.log("Fetching Hero with id: " + req.params.id + "\n" + hero + "\n");
        if (err)
            res.send(err);
        res.json(hero);
    });
};
exports.update = function (req, res) {
    console.log('put request')
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        Hero.update(req.params.id, new Hero(req.body), function (err, hero) {
            if (err)
                res.send(err);
            res.json({error: false, message: 'Hero successfully updated'});
        });
    }
};
exports.delete = function (req, res) {
    Hero.delete(req.params.id, function (err, hero) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Hero successfully deleted'});
    });
};

exports.getByName = function (req, res) {
    Hero.findByName(req.params.name, function (err, hero) {
        console.log('exports.getByName')
        console.log(req.params.name)
        if (err)
            res.send(err);
        res.json(hero);
    });
};
