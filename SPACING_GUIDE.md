# Scholar X - Figma 精确间距指南

本文档记录了从 Figma 设计中提取的精确空间关系。

## 📐 主要尺寸

### 整体布局
- **设计宽度**: 1728px
- **设计高度**: 1959px
- **左侧导航栏**: 72px 宽 (固定)
- **主内容区域**: 从 left: 126px 开始，宽度 1094px
- **右侧边栏**: 从 left: 1302px 开始，宽度 386px

### 出版物卡片布局

#### 水平间距
- **第1列位置**: left: 126px
- **第2列位置**: left: 534px (间距 408px)
- **第3列位置**: left: 942px (间距 408px)
- **卡片宽度**: 280px
- **实际 gap**: 128px (408 - 280 = 128px)

#### 垂直间距
- **顶部栏高度**: 72px
- **"Recently Reviewed" 标题**: top: 127px (距离顶部栏 55px)
- **特色文章标题**: top: 152px
- **特色文章内容**: top: 252px
- **第1行卡片**: top: 510px (距离特色文章底部 40px)
- **第2行卡片**: top: 819px (距离第1行 309px)
- **第3行卡片**: top: 1128px (距离第2行 309px)
- **第4行卡片**: top: 1437px (距离第3行 309px)
- **分页组件**: top: 1746px (距离第4行 309px)
- **页脚**: top: 1878px

### 分隔线位置
- **Featured 底部**: top: 470px, width: 1094px
- **第1-2行之间**: top: 779px
- **第2-3行之间**: top: 1088px
- **第3-4行之间**: top: 1397px
- **右侧边栏分隔线**: top: 945px, width: 386px

### 右侧边栏
- **"Just SUBMITTED" 标题**: top: 127px
- **内容开始**: top: 157px
- **项目间距**: 32px
- **"Needs peer review" 标题**: top: 985px (距离 "Just SUBMITTED" 858px)
- **边框**: 左侧有 1px border

## 🎨 卡片组件尺寸

### PublicationCard
- **高度**: 229px (固定)
- **标题字号**: 24px, font-family: Instrument Serif
- **摘要字号**: 14px, line-height: 24px
- **作者字号**: 12px
- **头像尺寸**: 16px × 16px
- **标签字号**: 10px, tracking: 0.3px
- **内部 gap**: 64px (摘要和底部信息之间)

### 右侧边栏项目
- **标题字号**: 12px, line-height: 20px
- **时间/标签字号**: 10px
- **项目间距**: 32px
- **标题间距**: 30px

## 🔤 字体
- **界面文本**: Inter (Regular, Medium, Semi Bold, Bold)
- **标题**: Instrument Serif (Regular)

## 🎨 颜色
- **背景**: #111116
- **侧边栏**: #29292d
- **TrustBlue/0**: #ffffff
- **TrustBlue/150**: #bed0f9
- **TrustBlue/350**: #2563eb
- **OpenGreen/300**: #3dc799
- **OpenGreen/600**: #064a34
- **Preserved**: #6d5441 (bg), #d9ccbc (text)

## 📝 实现注意事项

1. 所有尺寸都直接来自 Figma 设计，使用精确的 px 值
2. 使用 `flex` 布局而非 `grid`，以更好地控制间距
3. 卡片高度固定为 229px，使用 `justify-between` 保持内部布局一致
4. 右侧边栏使用 `sticky` 定位，top: 96px
5. 主内容区域不使用 `max-width` 容器，而是使用精确的 margin-left 和 width

