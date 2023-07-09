FROM docker.io/node:19.4.0 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM registry.access.redhat.com/rhscl/httpd-24-rhel7
COPY --from=builder /usr/src/app/dist/* /var/www/html *