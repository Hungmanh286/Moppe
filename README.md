# Moppe — E-commerce Web App with Product Recommendations

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Moppe is an online shop built as a team university project. Customers can browse products, sign up and log in, manage a cart, and check out. A separate Python service suggests products using **user-based collaborative filtering** on the rating history.

🎬 **Demo video:** https://www.youtube.com/watch?v=7NoVBbEmbio

## Features

- **Catalogue:** product listing, product details, and similar products
- **Auth:** registration and login with JWT access and refresh tokens; passwords hashed with bcrypt
- **Cart and checkout:** cart state managed with Redux
- **Recommendations:** collaborative-filtering service (`back/recommendationSystem`) exposed over HTTP and called from the Node API

## Architecture

```
front/ (React + Redux, :3000 dev server)
   │  REST (axios)
   ▼
back/src (Express API, :3001) ──► MongoDB Atlas
   │  HTTP
   ▼
back/recommendationSystem (Flask, user-based CF on database/rating.csv)
```

## Project structure

```
back/
  src/                    Express app: routes → controllers → services → models
  recommendationSystem/   Flask service + collaborative-filtering model
  database/rating.csv     Sample rating matrix
front/
  src/pages/              Home, Products, Product, Cart, Checkout, Login, Register, Profile…
  src/components/         Navbar, Footer, product lists
  src/redux/              Store, actions, reducers
```

## Getting started

**Backend API**

```bash
cd back
cp .env.example .env      # then fill in MONGODB_URI and the two JWT secrets
npm install
npm run dev               # http://localhost:3001
```

**Recommendation service**

```bash
cd back/recommendationSystem
pip install -r requirement.txt
python app.py
```

**Frontend**

```bash
cd front
npm install
npm start
```

## Contributors

- [Nguyễn Mạnh Hùng](https://github.com/Hungmanh286)
- [Vũ Đình Thọ](https://github.com/takanami12)
- [Nguyễn Công Thành](https://github.com/thanhnguyen808)
- [Nguyễn Tuấn Thành](https://github.com/TuanThanh2004)

## License

Released under the [MIT License](LICENSE).
