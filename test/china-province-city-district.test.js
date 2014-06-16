/*global describe, it*/

'use strict';

var assert = require('chai').assert;
var city = require('../lib/china-province-city-district');

describe('city', function () {
    describe('#query', function () {
        it('is a function', function () {
            assert.isFunction(city.query);
        });

        it('should return all provinces if no parent', function () {
            assert.deepEqual([
                '安徽',
                '北京市',
                '福建',
                '甘肃',
                '广东',
                '广西',
                '贵州',
                '海南',
                '河北',
                '河南',
                '黑龙江',
                '湖北',
                '湖南',
                '吉林',
                '江苏',
                '江西',
                '辽宁',
                '内蒙古',
                '宁夏',
                '青海',
                '山东',
                '山西',
                '陕西',
                '上海市',
                '四川',
                '天津市',
                '西藏',
                '新疆',
                '云南',
                '浙江',
                '重庆市'
            ], city.query());
        });

        it('should return all areas for 北京市', function () {
            assert.deepEqual([
                '昌平区',
                '朝阳区',
                '崇文区',
                '大兴区',
                '东城区',
                '房山区',
                '丰台区',
                '海淀区',
                '怀柔区',
                '门头沟区',
                '密云县',
                '平谷区',
                '石景山区',
                '顺义区',
                '通州区',
                '西城区',
                '宣武区',
                '延庆县'
            ], city.query('北京市'));
        });

        it('should return a empty list for 昌平区', function () {
            assert.deepEqual([], city.query('昌平区'));
        });

        it('should return area list for 咸宁市', function () {
            assert.deepEqual([
                '赤壁市',
                '崇阳县',
                '嘉鱼县',
                '通城县',
                '通山县',
                '咸安区'
            ], city.query('咸宁市'));
        });
    });
});
