FROM node:alpine as builder

WORKDIR /app

COPY package.json /app
RUN npm install

COPY ./ /app
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/migrate-angular-client-to-s3-demo /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]