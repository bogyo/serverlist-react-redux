# serverlist-react-redux

<b>Application deployed here:</b>
https://react-table-with-filters.herokuapp.com/
Data comes from node.js (with Express) backend:
https://serverlist-nodejs.herokuapp.com/list

<b>Local install</b>

1. clone the repo

#Start mock API Backend:
1. node server.js (root dir)

#Start Frontend
2. npm install (root dir)
3. npm start (root dir)

(Assuming that you already have node and npm installed on your machine)

Browser should open: http://localhost:3000

Local version works together with mocked API.
Change this behavior: change proxy target in package.json

Deployment instructions to Heroku with create-react-app-buildpack available here:
https://github.com/mars/create-react-app-buildpack

<b>Short Application introduction </b>

App was built with create-react-app as application bootstrap.

Data is served with a small node-js (Express) based Backend.
List endpoint parse the excel file and send data as json (see in root dir/index.js).
In dev: https://github.com/bogyo/serverlist-nodejs
In deployed : https://serverlist-nodejs.herokuapp.com/list

Frontend was built with React and Redux with Redux-thunk middleware.
The application is full responsive. It use one breakpoint to demonstrate the mobile view (480px).
The application display the recieved data in a list. The user can apply filters on the list. I used frontend filters because they have better performance than requesting the backend all the time for data. The user can apply all filters together and can remove them together. (I added a remove filters button, which can be useful, when the filters not match for all data, for instance there is no 128gb ram in filter section. See filters section in the .xlsx file - there are servers with 128gb).

SearchInput works with multiple data as well. (Should add multiple to select Tag in SearchInput , please note the multiple version is not a dropdown style, only select tag)

- Reducers:
  - Servers
  - Filters
- Actions:
  - available actionTypes as constants
  - available actionCreators. Seperately for filter and server related
- Container Components:
  - Filters
  - ServerTable
  These components communicate with Redux Store
 - Representational Components:
  - SearchInput,
  - CheckBoxGroup
  - SliderInput
 These are for displaying inputs and other elements only.
 - index.js - app bootstrap
 - style
  Only css files here per components, no css-prepocessors. In a bigger application would be useful to add sass/less.

 Deployed files are under build directory. Entry point index.html.

 Testing:
  Unit tests with Jest and enzyime.
  Tests located in the same directory under __tests__ subfolder next to the tested module.

  running tests npm test in root directory.

  Possible development plan:
  - More tests
  - add more style for example use custom checkbox style.
  - using minimum slider as well.
  - Using sass/less
  - add dropdown style with combining checkboxes to searchInput.
  
  Please note: Heroku free sleeps in every 30 minutes. That's why the first loading of the page and the data is a bit slower (not the app itself.)
