'use strict';

var allCitys = require('../city.json');

exports.query = function (parent) {
    var cityList = allCitys;

    if (parent) {
        var found = cityList.some(function find(item) {
            if (item.name === parent) {
                cityList = item.children;
                return true;
            } else if (item.children && item.children.length) {
                return item.children.some(find);
            } else {
                return false;
            }
        });

        if (!found) {
            return [];
        }
    }

    return cityList.map(function (city) {
        return city.name;
    });
};
