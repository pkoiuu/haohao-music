# 修复 README 格式和链接 Spec

## Why

当前 README.md 中的歌曲链接存在两个问题：

1. 链接格式混乱，部分歌曲名显示为 `[歌曲名] - [歌手名] - [分类]` 的冗余格式
2. URL 没有正确编码，文件名中的空格和特殊字符（如 `[]`、`()`、`#` 等）导致链接无法访问

## What Changes

* 修复 README.md 中所有歌曲链接的显示格式

* 对所有 URL 进行正确的 URL 编码（encodeURIComponent）

* 统一链接格式为 `[歌曲名 - 歌手名](编码后的URL)`

* 确保所有链接可正常点击访问

## Impact

* Affected specs: README.md 文档

* Affected code: 歌曲列表部分的 Markdown 链接

## ADDED Requirements

### Requirement: 修复链接显示格式

The system SHALL fix the display format of all song links in README.md.

#### Scenario: Link display format

* **GIVEN** the README.md has song links with inconsistent formats

* **WHEN** the fix is applied

* **THEN** all links display as `[歌曲名 - 歌手名](URL)` format

* **AND** redundant brackets like `[歌曲名] - [歌手] - [分类]` are removed

### Requirement: URL 编码修复

The system SHALL properly encode all URLs in README.md.

#### Scenario: URL encoding

* **GIVEN** song filenames contain special characters (spaces, brackets, parentheses, #, etc.)

* **WHEN** the URLs are generated

* **THEN** all special characters are properly URL encoded

* **AND** the links are accessible when clicked

### Requirement: 链接可访问性验证

The system SHALL ensure all links in README.md are accessible.

#### Scenario: Link accessibility

* **GIVEN** the README.md has been updated

* **WHEN** a user clicks on any song link

* **THEN** the link opens the correct GitHub Raw URL

* **AND** returns the audio file (not 404 error)

## Examples

### 修复前（错误格式）

```markdown
- [[All My Friends Say (我所有的朋友都说)] - [] - [Leisure Bath]](https://raw.githubusercontent.com/pkoiuu/haohao-music/main/休闲洗澡/流行精选/[All My Friends Say (我所有的朋友都说)] - [] - [Leisure Bath].flac)
- [妈妈的话 - Zyboy忠宇](https://raw.githubusercontent.com/pkoiuu/haohao-music/main/休闲洗澡/中文流行/妈妈的话-Zyboy忠宇#2p8ZQQ.mp3)
```

### 修复后（正确格式）

```markdown
- [All My Friends Say (我所有的朋友都说) - Leisure Bath](https://raw.githubusercontent.com/pkoiuu/haohao-music/main/%E4%BC%91%E9%97%B2%E6%B4%97%E6%BE%A1/%E6%B5%81%E8%A1%8C%E7%B2%BE%E9%80%89/%5BAll%20My%20Friends%20Say%20(%E6%88%91%E6%89%80%E6%9C%89%E7%9A%84%E6%9C%8B%E5%8F%8B%E9%83%BD%E8%AF%B4)%5D%20-%20%5B%5D%20-%20%5BLeisure%20Bath%5D.flac)
- [妈妈的话 - Zyboy忠宇](https://raw.githubusercontent.com/pkoiuu/haohao-music/main/%E4%BC%91%E9%97%B2%E6%B4%97%E6%BE%A1/%E4%B8%AD%E6%96%87%E6%B5%81%E8%A1%8C/%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D-Zyboy%E5%BF%A0%E5%AE%87%232p8ZQQ.mp3)
```

