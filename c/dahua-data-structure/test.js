var binaryTree = {
	val: 3,
	left: null,
	right: null
	// left: { 
	// 	val: 9, 
	// 	left: null, 
	// 	right: {
	// 		val: 10,
	// 		left:  { val: 15, left: null, right: null },
	// 	 	right:  { 
	// 			 val: 7, 
	// 			 left: {
	// 					val: 20,
	// 					left:  { val: 15, left: null, right: null },
	// 					right:  { val: 7, left: null, right: null }
	// 				}, 
	// 			 right: null
	// 		 }
	// 	}
	// },
  // right:
  //   {
  //    val: 20,
  //    left:  { val: 15, left: null, right: null },
	// 	 right:  { val: 7, left: null, right: null }
	// 	} 
}
let max = 0;

var levelOrder = function (root) {
	if(root) {
		return Math.max(levelOrder(root.left), levelOrder(root.right)) + 1; 
	} 
	return 0
}

var isSameTree = function(p, q) {
	if(!p && !q) return true;
	if(!p || !q) return false;
	return p.val == q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
}

var isSymmetric = function(root) {
	if(!root)	return true;
	return isSameTree(root.left, root.right);
};

var tree1 = {
  val: 1,
  left: {
		val: 2,
		left:  { val: 3, left: null, right: null },
		right: { val: 4, left: null, right: null } 
	},
  right:{
		val: 2,
		left:  { val: 4, left: null, right: null },
		right:  { val: 3, left: null, right: null } 
	} 
}

var pathSum = function(root, sum = 0) {
	if(root) {
		if(root.left) {
			console.log(root.left.val, sum)
			pathSum(root.left, sum + root.left.val)
		}
	}
	return sum;
}

var hasPathSum = function(root, sum = 0) {
	if(root) {
		return pathSum(root, root.val);
	}
};

var binaryTreePaths = function(root) {
  if (root === null) return [];
  if (root.left === null && root.right === null) {
    return [root.val.toString()];
  }
  var left = binaryTreePaths(root.left),
      right = binaryTreePaths(root.right);
  return left.concat(right).map(x => root.val + '->' + x);

}
console.log(binaryTreePaths(tree1))