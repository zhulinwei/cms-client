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

![用户系统2](./static/images/account.png)

### 统计系统
![统计系统](./static/images/dashboard.png)

### 博客系统
目录列表
![目录列表](./static/images/catalog.png)

文章列表
![文章列表](./static/images/article_list.png)

文章发布
![文章发布](./static/images/article_public.png)

博客详情
![博客详情](./static/images/blog.png)

### 任务系统
![任务系统](./static/images/task.png)


## 开发
npm run dev

## 启动
1.npm 启动
npm run build
npm start

2.docker 启动
docker build -t cms-client;docker run -d --name cms-client cms-client

## 其他

### 图标：https://fontawesome.com/icons