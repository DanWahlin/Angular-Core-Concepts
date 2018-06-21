FROM nginx:alpine
LABEL author="Dan Wahlin"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# Use the following commands to build the image and run the container (run from the root folder)
# You'll first need to build the project using `ng build`

# docker build -t nginx-angular -f nginx.dockerfile .
# docker run -p 8080:80 -v $(pwd)/dist:/usr/share/nginx/html nginx-angular