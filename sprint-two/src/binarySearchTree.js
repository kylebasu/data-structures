var BinarySearchTree = function(value){
	this.value = value
	this.left = undefined
	this.right = undefined
};

BinarySearchTree.prototype.insert = function(value){
	if(value > this.value){
		if(this.right === undefined){
			this.right = new BinarySearchTree(value)
		}else{
			this.right.insert(value)
		}
	}
	if(value < this.value){
		if(this.left === undefined){
			this.left = new BinarySearchTree(value)
		}else{
			this.left.insert(value)
		}
	}
}

BinarySearchTree.prototype.contains = function(value){
	if(this.value === value){
		return true
	}
	if(value > this.value){
		if(this.right === undefined){
			return false
		}
		return this.right.contains(value)
	}
	if(value < this.value){
		if(this.left === undefined){
			return false
		}
		return this.left.contains(value)
	}
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
	callback(this.value);
	if(this.right !== undefined){
		this.right.depthFirstLog(callback)
	}
	if(this.left !== undefined){
		this.left.depthFirstLog(callback)
	}
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
