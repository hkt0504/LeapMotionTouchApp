var parse = require('mout/queryString/parse');
var keys = require('mout/object/keys');
var query = exports.query = parse(window.location.href.replace('#','?'));

exports.useStats = false;

var amountMap = {
    '4k' : [64, 64, 0.29],
    '8k' : [128, 64, 0.42],
    '16k' : [128, 128, 0.48],
    '32k' : [256, 128, 0.55],
    '65k' : [256, 256, 0.6],
    '131k' : [512, 256, 0.85],
    '252k' : [512, 512, 1.2],
    '524k' : [1024, 512, 1.4],
    '1m' : [1024, 1024, 1.6],
    '2m' : [2048, 1024, 2],
    '4m' : [2048, 2048, 2.5]
};

exports.amountList = keys(amountMap);
query.amount = amountMap[query.amount] ? query.amount : '65k';
var amountInfo = amountMap[query.amount];
exports.simulatorTextureWidth = amountInfo[0];
exports.simulatorTextureHeight = amountInfo[1];

exports.useStats = false;
exports.useBillboardParticle = false;

// dont need restart
exports.lightSpeed = 0;
exports.bloomOpacity = 0.45;

exports.particlesDropRadius = 20;
exports.particlesFromY = 300;
exports.particlesYDynamicRange = 300;

exports.handBounceRatio = 0.1;
exports.handForce = 0.015;
exports.gravity = 10;

exports.fxaa = false;
var motionBlurQualityMap = exports.motionBlurQualityMap = {
    best: 1,
    high: 0.5,
    medium: 1 / 3,
    low: 0.25
};
exports.motionBlurQualityList = keys(motionBlurQualityMap);
query.motionBlurQuality = motionBlurQualityMap[query.motionBlurQuality] ? query.motionBlurQuality : 'medium';
exports.motionBlur = true;
exports.motionBlurPause = false;
exports.bloom = false;
exports.vignette = false;
exports.vignetteMultiplier = 0.8;