FROM node

ADD package.json .
RUN npm install
ADD . .

CMD npm start
