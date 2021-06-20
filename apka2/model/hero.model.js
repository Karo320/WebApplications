'use strict';
var dbConn = require('../config/db.config');

//Hero object create
var Hero = function (hero) {
    this.id = hero.id;
    this.name = hero.name;
    this.age = hero.age;
};
Hero.create = function (newHero, result) {
    dbConn.query("INSERT INTO hero set ?", newHero, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            dbConn.query("Select * from heroes where id = ? ", res.insertId, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
        }
    });
};
Hero.findById = function (id, result) {
    dbConn.query("Select * from heroes where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Hero.findAll = function (result) {
    dbConn.query("Select * from heroes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('heroes : ', res);
            result(null, res);
        }
    });
};
Hero.update = function (id, hero, result) {
    dbConn.query("UPDATE heroes SET name=?,age=? WHERE id = ?", [hero.name, hero.age, hero.isbn, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Hero.delete = function (id, result) {
    dbConn.query("DELETE FROM heroes WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Hero.findByName = function (name, result) {
    const likeName = "%" + name + "%";
    dbConn.query("SELECT * FROM heroes b WHERE b.name LIKE  ?", [likeName], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
module.exports = Hero;
