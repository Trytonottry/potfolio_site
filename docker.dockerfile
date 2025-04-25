FROM node:16

WORKDIR /app
COPY index.html .
COPY portfolio.test.js .

RUN npm install -g serve
RUN npm install --save-dev jest @testing-library/react @testing-library/jest-dom react-router-dom

EXPOSE 3000
CMD ["serve", "-s", ".", "-p", "3000"]