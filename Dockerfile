FROM node:latest

ENV NAME cms_client
ENV PORT 3452
ENV NODE_ENV production
 
COPY . /home/cms_client
WORKDIR /home/cms_client

# RUN npm --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist install

EXPOSE 3452

CMD ["npm", "start"]
