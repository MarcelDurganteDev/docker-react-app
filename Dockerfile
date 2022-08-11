FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm run build
COPY . .
EXPOSE 3001
CMD ["npm", "start"]

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
