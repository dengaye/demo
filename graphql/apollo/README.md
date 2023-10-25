## 'schema-first' design 
根据客户端需要哪些数据来准确的实现功能。
通常有三个核心步骤：
1. 定义 schema。先确定客户端需要哪些数据，然后构建 schema 尽可能的提供这些数据
2. 后端实现 backend implementation。使用 Apollo Server 构建 GraphQL API，并可以通过任何方式获取数据。
3. 前端实现 frontend implementation。

好处：前后端可以并行工作，ji