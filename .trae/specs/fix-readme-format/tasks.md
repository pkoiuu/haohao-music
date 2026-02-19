# Tasks

- [x] Task 1: 重新生成正确的歌曲索引
  - [x] SubTask 1.1: 读取所有音乐文件
  - [x] SubTask 1.2: 正确解析歌曲名和歌手名（处理带 [] 的文件名）
  - [x] SubTask 1.3: 生成正确 URL 编码的 GitHub Raw URL
  - [x] SubTask 1.4: 保存为 songs.json

- [x] Task 2: 修复 README.md 格式
  - [x] SubTask 2.1: 读取 songs.json 数据
  - [x] SubTask 2.2: 清理歌曲名格式（移除多余的 [] 和分类信息）
  - [x] SubTask 2.3: 生成正确格式的 Markdown 链接
  - [x] SubTask 2.4: 更新 README.md 文件

- [x] Task 3: 验证链接可访问性
  - [x] SubTask 3.1: 随机抽样测试链接
  - [x] SubTask 3.2: 确保 URL 编码正确

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
