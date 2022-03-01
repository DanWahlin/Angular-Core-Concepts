##### Stage 1
FROM node:lts as node
LABEL author="Dan Wahlin"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Angular 12+ does a production build by default if you've enabled it using 
# ng update @angular/cli --migrate-only production-by-default
# https://github.com/angular/angular-cli/issues/21073#issuecomment-855960826
# RUN npm run build

# Prod build if production-by-default hasn't been enabled 
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f nginx.prod.dockerfile .
# docker run -p 8080:80 nginx-angular