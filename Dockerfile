FROM node:10.9.0

ENV NAME cms_client
ENV PORT 80
ENV NODE_ENV production
 
COPY . /home/cms_client
WORKDIR /home/cms_client

# RUN npm --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist install

EXPOSE 80

CMD ["npm", "start"]
