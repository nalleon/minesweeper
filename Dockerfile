# Use the official PHP image as a base image
FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www/minesweeper

COPY minesweeper/public/ /var/www/minesweeper/public
COPY minesweeper/src/ /var/www/minesweeper/src
COPY minesweeper/package.json /var/www/minesweeper/

RUN npm install && npm run build

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["serve", "-s", "build", "-l"]