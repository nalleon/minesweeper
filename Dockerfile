# Use the official PHP image as a base image
FROM node:18-alpine

# Set working directory
WORKDIR ./minesweeper

COPY minesweeper/public/ /var/www/minesweeper/public
COPY minesweeper/src/ /var/www/minesweeper/src
COPY minesweeper/package.json /var/www/minesweeper/

RUN npm install && npm start

EXPOSE 9000
CMD ["serve", "-s", "build", "-l"]