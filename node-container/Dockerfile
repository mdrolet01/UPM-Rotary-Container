FROM node:carbon
WORKDIR /usr/src/app
COPY main.js ./
COPY package.json ./
COPY index.html ./
RUN npm install
EXPOSE 8000
ENV MONGODB_URL 127.0.0.1
ENV MONGODB_PORT 27017
ENTRYPOINT ["npm", "start"]
