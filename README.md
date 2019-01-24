# cms-client

## 简介
cms-client是基于vue+nuxt实现的单页Web应用（SPA），采用服务端渲染（SSR）的方式，大大提升了首屏渲染速度和搜索引擎优化（SEO）
> * 后端接口：https://github.com/zhulinwei/cms-server
> * 演示地址：http://www.51linwei.top

## 组成
> * 1.用户系统
> * 2.统计系统
> * 3.任务系统
> * 4.通知系统
> * 5.博客系统

### 用户系统
![用户系统1](http://image.51linwei.top/github/account1)
![用户系统2](http://image.51linwei.top/github/setting1)

### 统计系统
![统计系统](http://image.51linwei.top/github/dashboard)

### 博客系统
目录列表
![目录列表](http://image.51linwei.top/github/blog/catalog)

文章列表
![文章列表](http://image.51linwei.top/github/blog/article)

文章发布
![文章发布](http://image.51linwei.top/github/blog/editor)

博客详情
![博客详情](http://image.51linwei.top/github/blog)

### 任务系统
![任务系统](http://image.51linwei.top/github/task)

## 开发
npm run dev

## 启动
1.npm 启动
npm run build
npm start

2.docker 启动
docker build -t cms-client;docker run -d --name cms-client cms-client

