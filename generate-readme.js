const fs = require('fs');
const path = require('path');

const songsJsonPath = path.join(__dirname, 'songs.json');
const readmePath = path.join(__dirname, 'README.md');

const data = JSON.parse(fs.readFileSync(songsJsonPath, 'utf8'));
const songs = data.songs;

const categories = {};
songs.forEach(song => {
  const cat = song.category || '未分类';
  const subcat = song.subcategory || '';
  
  if (!categories[cat]) {
    categories[cat] = {};
  }
  
  if (!categories[cat][subcat]) {
    categories[cat][subcat] = [];
  }
  
  categories[cat][subcat].push(song);
});

let readme = `# 🎵 好好音乐仓库

一个基于 GitHub 的音乐存储和分享项目，按心情和场景分类整理优质音乐。

---

## 📖 项目简介

好好音乐仓库是一个用于收藏和分享音乐的开源仓库，我们相信好的音乐应该被更多人听到。项目按照使用场景和情绪状态对音乐进行分类，方便你在不同心情下快速找到适合的音乐。

**仓库地址**: https://github.com/pkoiuu/haohao-music

---

## 📊 统计数据

| 项目 | 数量 |
|------|------|
| 🎵 总歌曲数 | ${songs.length} |
| 📁 分类数 | ${Object.keys(categories).length} |

---

## 🎶 完整歌曲列表

> 以下列表包含仓库中所有 ${songs.length} 首歌曲，点击歌曲名可直接播放或下载。
> 所有链接均指向 GitHub Raw 地址，可直接在浏览器或音乐播放器中打开。

`;

for (const [category, subcategories] of Object.entries(categories)) {
  readme += `### ${category}\n\n`;
  
  for (const [subcategory, categorySongs] of Object.entries(subcategories)) {
    if (subcategory) {
      readme += `#### ${subcategory}\n\n`;
    }
    
    categorySongs.forEach(song => {
      const name = song.name || '未知歌曲';
      const artist = song.artist || '未知歌手';
      readme += `- [${name} - ${artist}](${song.url})\n`;
    });
    
    readme += '\n';
  }
}

readme += `
---

## 🤝 如何贡献

如果你想添加新的歌曲到仓库，请按照以下步骤：

1. Fork 本仓库
2. 将音乐文件按照分类放入相应目录
3. 更新 \`songs.json\` 文件
4. 提交 Pull Request

---

## 📝 注意事项

- 所有音乐文件仅供个人学习和欣赏使用
- 请尊重版权，不要用于商业用途
- 如有侵权请联系删除

---

*最后更新: ${new Date().toLocaleString('zh-CN')}*
`;

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ README.md 已成功生成！');
