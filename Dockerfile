# build environment
FROM node:16 as build
WORKDIR /app
COPY . ./
RUN npm i -g cross-env
RUN rm -fr .parcel-cache
RUN yarn
RUN yarn prod

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/prod /usr/share/nginx/html
# new
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
