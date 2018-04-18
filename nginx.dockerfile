FROM nginx:alpine
LABEL author="Dan Wahlin"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf