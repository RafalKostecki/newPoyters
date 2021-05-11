# Poyters
[Poyters](https://poyters.pl) is my own brand single page application. I hand-coded it in the newest Angular version and Nest.js. It provides an easy data presentation mechanism and Poyters Account functionalities (sign in/up etc).

## Set up
To set up a whole project (including API) at first, u need to `git clone` Poyters repository and than go to main dir and run `npm install` command to get all API packages. You have to do the same at /client directory to get Poyters client packages. To run both (API and client) need to run `npm start` command at specific directory - main for API and /client for client side of the project.


## Changelog

### Version 1.6.0 (18 May 2021)
- POY-118, Add info message popups
- POY-119, Update portfolio data, add Poyters Account project
- POY-117, Add option to verify user mail
- POY-114, Create Poyters User and add ability to set profile description
- POY-93, Create offer view
- POY-124, Separate get button as component

### Version 1.5.0 (25 April 2021)
- POY-115, Redesign a whole web app
- POY-110, Connect to Poyters Account
- POY-89, Add first and last name
- POY-62, Add option to change mail
- POY-60, Add option to change password
- POY-45, Add option to recover forgotten password
- POY-12, Add Poyters logo
- POY-113, Create Poyters page stage environment

### Version 1.4.0 (04 January 2021)
- Create profile view connected to DB
- Add to User model created date
- Fix floating credits footer at /contact page
- Add base informations to contact form
- Create base product template view
- Create /kostek-urodziny separate view for Kostek "Urodziny" RPG game
- Redesign user profile menu
- Create Stella product separate view
- Fix views changing flashes
- Replace Google Disc by Poyters FTP server at downloading Kostek "Urodziny" game
- Add user role to Poyters Account
-Create Product Slider and create it to Kostek Urodziny game


### Version 1.3.1 (04 November 2020)
- Clear contact form after sending email
- Clear signup form after succesfully registration
- Center horizontally and vertically apiMessage text
- Show the first letter of the username in case of an avatar absence
- Fix contact for email validation overflow


### Version 1.3.0 (04 November 2020)
- Create contact form
- Delete /diary page
- Add Project Stella to /home and /portfolio
- Swap Hiper Jumper 2000 by Hiper Jumper 3000
- Redesign and rewrite /home page
- Redesign and rewrite error massages for all forms
- Redesign signup and signin forms
- Send email after correct registration
- Redesign hosting architecture. Keep all project as subdomains, eg breadhunter4.poyters.pl
- Fix credit footer overflow
- Create Poyters API info endpoint
- Create Poyters API mail sender service
- Send emails by contact form at Poyters Client


### Version 1.2.0 (16 April 2020)
- Redesign and rewrite menu
- Rewrite and redesign /portfolio page
- Rewrite category component
- Redesign login panel


### Version 1.1.0 (01 March 2020)
- If user is logged, he cannot go to /signin or /signup
- User can log in and log out and create Poyters account
- Protect JWT by http-only cookie
- Show message about wrong credentials at sign in
- Redesign page logo
- Create protected base account view
- Update all npm packages
- Redesign and rewrite footer
- Create resume at portfolio page
- Turn off alerts


### Version 1.0.0 (08 January 2020)
- Rewrite Data service
- Close menu after change page (mobile)
- Redesign project architecture
- Remove renome from portfolio
- Fix images overflow
- Optimize web page
- Add images lazy loading
- Change Poyters colors to more bright


### Version beta 1.0.0 (30 April 2019)
- Redesign /home view
- Rewrite app flow tos services
- Fix menu overflow for mobile devices
- Add Facebook and Github icons to main menu
- Load portfolio and home projects from JSON data


### Version alpha 1.0.0 (23 July 2018)
- Create home web page
- Create diary page
- Create contact page
- Create portfolio page