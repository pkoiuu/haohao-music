# 好好音乐门户 Spec

## Why
当前 GitHub 仓库的音乐文件无法被 GitHub 默认搜索功能索引，用户无法通过搜索找到歌曲。同时，需要一个美观的网页界面来展示所有歌曲，提供搜索功能和直接播放链接，方便用户发现和引用音乐。

## What Changes
- 生成完整的歌曲索引文件（JSON 格式），包含所有歌曲的元数据和直链
- 更新 README.md，添加所有歌曲的完整列表和可点击链接
- 创建一个美观的音乐展示网页（GitHub Pages 托管）
- 网页支持搜索功能，可搜索歌曲名和歌手
- 点击歌曲可跳转到 GitHub 直链，支持外部引用

## Impact
- Affected specs: 音乐仓库文档、歌曲发现体验
- Affected code: README.md、index.html、歌曲索引 JSON

## ADDED Requirements

### Requirement: 歌曲索引生成
The system SHALL provide a complete song index in JSON format containing all songs with metadata.

#### Scenario: Index generation
- **GIVEN** the music repository has songs organized in directories
- **WHEN** the index generator scans the repository
- **THEN** it creates a JSON file with song name, artist, category, path, and direct GitHub raw URL

### Requirement: README 完整歌曲列表
The system SHALL update README.md to include a complete, searchable song list with clickable links.

#### Scenario: README song list
- **GIVEN** the song index JSON exists
- **WHEN** a user views the README
- **THEN** they see all songs listed with links to the direct GitHub raw URLs
- **AND** the list is organized by category

### Requirement: GitHub 搜索优化
The system SHALL optimize the repository for GitHub's search functionality.

#### Scenario: GitHub search discoverability
- **GIVEN** a user searches for a song name in GitHub search
- **WHEN** the search query matches a song in the index
- **THEN** the repository appears in search results
- **NOTE**: This requires the song names to be in plain text files (not just binary MP3 files)

### Requirement: 音乐展示网页
The system SHALL create a beautiful web interface for browsing and searching songs.

#### Scenario: Web portal browsing
- **GIVEN** the music portal webpage is deployed
- **WHEN** a user visits the page
- **THEN** they see a modern, responsive interface with:
  - Category navigation
  - Search bar for song/artist search
  - Song cards with play buttons
  - Direct links to GitHub raw URLs for external embedding

#### Scenario: Song search
- **GIVEN** the user is on the music portal
- **WHEN** they type in the search box
- **THEN** the song list filters in real-time to show matching results
- **AND** matches are highlighted

#### Scenario: Direct link access
- **GIVEN** a user finds a song on the portal
- **WHEN** they click the song or copy link button
- **THEN** they get the direct GitHub raw URL
- **AND** the URL can be used in external players or websites

## Technical Requirements

### Web Portal Features
- Modern, clean UI design
- Responsive layout (mobile-friendly)
- Real-time search with debouncing
- Category filtering
- Copy-to-clipboard for direct links
- Dark/Light mode support
- Fast loading with lazy loading for large lists

### GitHub Integration
- Use GitHub Raw URLs for direct file access
- Support for both MP3 and FLAC formats
- Proper URL encoding for special characters

### Search Implementation
- Client-side search using JavaScript
- Fuzzy matching for song names and artists
- Search result highlighting
