# Stardust

> 星尘（Stardust）：茫茫星空的一颗尘埃————代码收集区

## What

- Stardust是一个由`vue-cli`搭建的`vue`项目
- 用于分享[技巧](https://github.com/Fifth-Patient/vue-skill/tree/master/src/views/skill)和小[demo](https://github.com/Fifth-Patient/vue-skill/tree/master/src/views/skill)
- 内容不仅仅局限于`vue`，但技术栈主要以`vue`为主

## How

`vue-cli`默认搭建即可。

### 主要目录

```text
src
│ components       组件库，可复用的组件
|
│ views            视图层：每一个文件夹对应一个大分类
|   ├skill         技巧类：主要是针对vue，也会有js原生的范围
|   ├demo          示例类：主要是展示意图，相对skill会比较健全
|   └layout.vue    布局组件
```

### Todo List

#### global

- [x] 建设首页
- [x] 删除脚手架生成的冗余文件
- [x] 统配路由界面
- [ ] lib/until.js
- [ ] 国际化 多语言支持

#### components

- [x] router-map
- [ ] base-translate

#### skill

- [ ] 自定义双向绑定
- [ ] 组件通讯

#### demo

- [ ] todo

#### engineer

- [ ] stylus
- [ ] less/sass/scss*
- [ ] typescript
- [ ] build

## Why

### 自述

从写下第一句`Hello world`以来已经是过了相当长的一段时间了。经历过项目开发、自己也不时会写些demo、代码片段更是频繁。

写代码太方便了，我们有好几种方式可以写，如：

1. 在线代码编辑器
2. 云笔记
3. 本地文件/目录

这种碎片化式固然写代码方便，只是**记录散乱**，**也无法迭代**，完全是**点与点**的关系。

我更希望这些散乱的小点可以集成为一个项目，规模不重要；最重要的是可以**维护**和**迭代**。

当然如果只是仅仅收集代码，作用未免太小了，做成一个项目，在其他地方，星尘也能发挥自己的作用。

它可以是代码/仓库的草稿纸，也可以是一个实验品，更是博文的示例。

所以这也是这个仓库存在的理由：**收集散乱的代码，以点连线，以线成面**。

~~因此，也以“星尘”命名，虽然星尘本质也是一个点。~~

**不管写的东西是实操也好，挖坑自埋也好，统统记录下来，咱用一个个提交积累。**

现在只有`skill`还有`demo`两个分类，以后还会接触更多的如：

- 工程化
- 调试
- webpack（针对vue）

### 其他

独立的demo还是会使用新的目录、store；

这个store主要做代码收集，部分或许可以嵌套进来。
