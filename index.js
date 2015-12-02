"use strict"
var SeqObject = module.exports = function(obj){
    Object.call(this, obj || {});
};
SeqObject.prototype.max = function(){
    var self = this;
    return Object.keys(self)
        .reduce(function(r,key){ return Math.max(self[key], r) }, 0)
}
SeqObject.prototype.min = function(){
    var self = this;
    return Object.keys(self)
        .reduce(function(r,key){ return Math.min(self[key], r) }, 0)
}
SeqObject.prototype.sizeOf = function(){
    return this.max() + 1
}
SeqObject.prototype.toArray = function(){
    var self = this;
    return Object.keys(self)
        .map(function(key){ return key })
}
SeqObject.create = function(list){
    var spec = list.reduce(function(r, v, idx){
        r[v] = idx;
        return r;
    }, new SeqObject())
    return Object.freeze(spec);
}
