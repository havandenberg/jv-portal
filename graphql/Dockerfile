FROM node:16-alpine

RUN apk add tzdata

RUN npm install -g graphql
RUN npm install -g tslib
RUN npm install -g postgraphile
RUN npm install -g postgraphile-plugin-connection-filter
RUN npm install -g postgraphile-plugin-atomic-mutations
RUN npm install -g postgraphile-plugin-nested-mutations
RUN npm install -g @graphile-contrib/pg-simplify-inflector
RUN npm install -g @graphile-contrib/pg-many-to-many

COPY ./.postgraphilerc.js ./

EXPOSE 5000
ENTRYPOINT ["postgraphile", "-n", "0.0.0.0"]