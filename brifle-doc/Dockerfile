FROM node as build

COPY . /app
WORKDIR /app

ENV ENABLE_MATOMO=true

RUN npm install yarn
RUN npm install
RUN yarn docusaurus gen-api-docs all
RUN npm run build





# run stage

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

