/**
 * 图
 * 是边的集合及顶点的集合组成
 */

/**
 * 
 */

class Graph {
	constructor(v) {
		this.vertices = v; // 记录顶点的数量
		this.edges = 0;  // 边的个数
		this.adj = []; // 各顶点的相邻顶点，叫邻接表或邻接矩阵，是个二维数组
		this.marked = []; //标记是否已经被访问过
		for(let i = 0; i < this.vertices; ++i) {
			// 为数组中的每个元素添加一个子数组来存储所有的相邻顶点
			this.adj[i] = [];
			this.marked[i] = false;
		}

		this.edgeTo = [];  // 一个顶点到下一个顶点的所有边

		this.vertexList = [];
	}

	// 传入顶点A和B，函数先查找顶点A的邻接表，将顶点B添加到列表中
	// 然后在我查找顶点B的邻接表，将顶点A加入列表
	// 边数加1
	addEdge(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges ++;
	}

	// 打印所有顶点以及其相邻顶点列表， 
	showGraph() {
		let printStr = '';
		for(let i = 0; i < this.vertices; i++) {
			printStr = i + ' -> ';
			for(let j = 0; j < this.vertices; j++) {
				if(this.adj[i][j] != undefined) {
					printStr += this.adj[i][j] + ' '
				}
			}
			console.log(printStr)
		}
	}

	/**
	 * 深度优先搜索
	 * 访问一个没有访问过的顶点，将它标记为已访问
	 * 再递归去访问在初始顶点的邻接表中其他没有访问过的顶点
	 * @param {number} v 
	 */
	dfs(v) {
		this.marked[v] = true;
		if(this.adj[v] != undefined) {
			console.log('Visited vertex: ' + v);
		} 
		for(const w of this.adj[v]) {
			if(!this.marked[w]) {
				this.dfs(w);
			}
		}
	}

	/**
	 * 广度优先搜索
	 * 从第一个顶点开始，尝试访问尽可能靠近它的顶点。
	 * 本质上，这种搜索在图上是逐层移动的，
	 * 首先检查最靠近第一个顶点的层，
	 * 再逐渐向下移动到离起始顶点最远的层。
	 */

	/**
	 * 实现原理：（是用来抽象队列而不是数组来对已访问过的顶点进行排序）
	 * 1. 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
	 * 2. 从图中取出一个顶点v，添加到已访问的顶点列表；
	 * 3. 将所有与v相邻的未访问顶点添加到队列
	 * @param {number} s 
	 */
	bfs(s) {
		let queue = [];
		this.marked[s] = true;
		queue.push(s); 
		while(queue.length > 0) {
			let v = queue.shift();
			if(v != undefined) {
				console.log(`Visisted vertex: ` + v);
			}
			for(const w of this.adj[v]) {
				if(!this.marked[w]) {
					this.edgeTo[w] = v;
					this.marked[w] = true;
					queue.push(w);
				}
			}
		}
	}

	/**
	 * 最短路径
	 * 广度优先搜索查找最短路径
	 * @param {number} v 
	 */
	pathTo(v) {
		let source = 0;
		if(!this.hasPathTo(v)) {
			return undefined;
		}
		let path = [];
		for(let i = v; i != source; i = this.edgeTo[i]) {
			path.push(i);
		}
		path.push(source);
		return path;
	}
	hasPathTo(v) {
		return this.marked[v]
	}

	/**
	 * 拓扑排序算法
	 * 与深度优先搜索类似
	 * 不同的是，拓扑排序算法不会立即输出已访问的顶点，
	 * 而是访问当前顶点邻接表中的所有相邻顶点，
	 * 直到这个列表穷尽时，才将当前顶点压入栈中
	 * 
	 * 拆分为两个函数 topSort() 和 topSortHelper()
	 */

	/**
	 * 设置排序进程
	 */
	topSort() {
		let stack = [];
		let visited = [];
		for(let i = 0; i < this.vertices; i++) {
			visited[i] = false;
		}
		for(i = 0; i < this.vertices; i++) {
			if(visited[i] == false) {
				this.topSortHelper(i, visited, stack);
			}
		}
		for( i = 0; i < stack.length; i++) {
			if(stack[i] != undefined && stack[i] != false) {
				console.log(this.vertexList[stack[i]]);
			}
		}
	}
	/**
	 * 
	 */
	topSortHelper(v, visited, stack) {
		visited[v] = true;
		for(const w in this.adj[v]) {
			if(!visited[w]) {
				this.topSortHelper(this.vertexList[w], visited, stack);
			}
		}
		stack.push(v);
	}

	toString() {

	}
}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
// g.addEdge(5, 4);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);

// g.bfs(3);