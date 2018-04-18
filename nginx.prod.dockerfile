##### Stage 1
FROM node:latest as node
LABEL author="Dan Wahlin"
WORKDIR /app
COPY . .
RUN npm install
ARG env=prod
RUN npm run build -- --prod --environment $env

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf