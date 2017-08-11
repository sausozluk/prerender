FROM node:8.3.0
COPY . /app
WORKDIR /app
RUN ["npm", "install"]
EXPOSE 3000
CMD ["npm", "start"]