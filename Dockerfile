FROM node:14.21.3-bullseye AS build
WORKDIR /app

COPY ./ /app

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx as dist

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80