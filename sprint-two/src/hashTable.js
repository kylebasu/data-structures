var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
  	var house = {};
  	house[k] = v
	return this._storage.set(i, house)
  }
  if(this._storage.get(i) !== undefined){
  	this._storage.get(i)[k] = v
  }
  // house[k] = v
  // return this._storage.set(i, house)

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k]

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k] = null
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
