# Full-Stack Mercedes-Benz Code Challenge

This project is created for the Mercedes-Benz company in order to show coding skills.

The challenge consists 3 part;

Firstly, there is an Authentication system. 
    After registering to the system at "https://developer.mercedes-benz.com" and creating a car from "https://car-simulator.developer.mercedes-benz.com", you can log in to the system with the application I created. After that Mercedes-Benz API returns an acces_token to the URL which I define at their panel. The frontend application store this access_token for future requests.

Secondly, 
    You can change and view your car door status at vehicle detail page.

Thirdly,
    To keep the whole system in sync, I added a setInterval function to the backend app that periodically sends requests to the API, and if there's a change, the app will store them in the database. Then I implemented a socket.io package for both my frontend and backend app. With this, I made the front-end application listen to the back-end application for database changes. As a result, if there are any changes in the car status, the front-end application will show them synchronously.


## Table of Contents

- [Installation](#installation)
- [Structure](#structure)
- [Support](#support)
- [Presentation](#presentation)
- [Contributing](#contributing)

## Installation
### with Docker
```sh
git clone https://github.com/mJiyan/mercedes-coding-challenge.git
cd mercedes-coding-challenge
docker-compose up --build

-> Open your browser at http://localhost:3000 
```

### manually
```sh
git clone https://github.com/mJiyan/mercedes-coding-challenge.git

cd mercedes-coding-challengee/server
yarn
yarn start

cd mercedes-coding-challengee/server
yarn
yarn start

Open your browser at http://localhost:3000 
```

### Presentation

Short video presentation of solution:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ZliTDWYdoDc/0.jpg)](http://www.youtube.com/watch?v=ZliTDWYdoDc)



## Structure
```

├─ client
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ assets
│  │  │  ├─ css
│  │  │  │  └─ robots.txt
│  │  │  └─ images
│  │  │     └─ mercedes-logo.png
│  │  ├─ components
│  │  │  ├─ Door
│  │  │  │  ├─ index.js
│  │  │  │  └─ useStatus.js
│  │  │  ├─ Navbar
│  │  │  │  └─ index.js
│  │  │  ├─ Redirect
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ layout
│  │  │  └─ MainLayout.js
│  │  ├─ privateRoutes
│  │  │  └─ index.js
│  │  ├─ redux
│  │  │  ├─ actions
│  │  │  │  ├─ Account
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ types.js
│  │  │  │  ├─ Door
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ types.js
│  │  │  │  └─ Vehicle
│  │  │  │     ├─ index.js
│  │  │  │     └─ types.js
│  │  │  └─ reducers
│  │  │     ├─ Account
│  │  │     │  └─ index.js
│  │  │     ├─ Door
│  │  │     │  └─ index.js
│  │  │     ├─ Vehicle
│  │  │     │  └─ index.js
│  │  │     └─ index.js
│  │  ├─ routes
│  │  │  └─ index.js
│  │  ├─ services
│  │  │  ├─ api.js
│  │  │  ├─ constants.js
│  │  │  └─ storage.js
│  │  ├─ views
│  │  │     ├─ auth
│  │  │     │  ├─ LoginPage.js
│  │  │     │  └─ RedirectPage.js
│  │  │     ├─ error
│  │  │     │  └─ ErrorPage.js
│  │  │     ├─ vehicle
│  │  │     │  ├─ VehicleDetails.js
│  │  │     │  └─ VehicleList.js
│  │  │     └─ index.js
│  │  ├─ configureStore.js
│  │  ├─ index.js
│  │  └─ reducer.js
│  ├─ Dockerfile
│  └─ package.json
│  
├─ server
│  ├─ src
│  │  ├─ api
│  │  │  ├─ controllers
│  │  │  │  ├─ authController.js
│  │  │  │  ├─ doorController.js
│  │  │  │  └─ vehicleController.js
│  │  │  └─ routes
│  │  │     ├─ authRoutes.js
│  │  │     ├─ doorRoutes.js
│  │  │     ├─ routeManager.js
│  │  │     └─ vehicleRoutes.js
│  │  ├─ config
│  │  │     ├─ index.js
│  │  │     └─ logger.config.js
│  │  ├─ loaders
│  │  │     ├─ express.js
│  │  │     ├─ index.js
│  │  │     └─ mongoose.js
│  │  ├─ models
│  │  │     ├─ doorStatusModel.js
│  │  │     └─ index.js
│  │  └─ app.js
│  ├─ .env
│  ├─ Dockerfile
│  └─ package.json
├─ docker-compose.yml
└─ README.md

```

## Support

Please [open an issue](https://github.com/mJiyan/mercedes-coding-challenge/issues) for support & suggestions.



## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/mJiyan/mercedes-coding-challenge/compare).
