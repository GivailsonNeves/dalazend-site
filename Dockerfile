FROM php:7.2.6-apache
RUN a2enmod rewrite
RUN docker-php-ext-install mysqli