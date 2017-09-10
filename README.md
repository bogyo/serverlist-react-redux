# serverlist-react-redux

<b>Install</b>

1. clone the repo
2. npm install (root dir)
3. npm start (root dir)

Start mock API: 
1. node index.js (root dir)

Browser should open: http://localhost:3000

Local version works only together with mocked API. 
Change this behavior: change proxy target in package.json

<b>Application deployed here:</b>
https://react-table-with-filters.herokuapp.com/
Data comes from this node.js backend:
https://serverlist-nodejs.herokuapp.com/list

<b>Short Application introduction </b>

App was built with create-react-app as application bootsrap.

Data is served with a small node-js (Express) based Backend.
List endpoint parse the excel file and send data as json (see in root dir/index.js).

Frontend was built with React and Redux with Redux-thunk middleware.

- Reducers: 
  - Servers
  - Filters
- Actions: 
  - avaliable actionTypes as constants
  - avaliable actionCreators. Seperatly for filter and server related
- Container Components:
  - Filters
  - ServerTable
  These components communicate with Redux Store
 - Representational Components:
  - SearchInput,
  - CheckBoxGroup
  - SilderInput
 These are for displaying inputs and other elements only.
 - index.js - app bootstrap
 - style
  Only css files here per components, no css-prepocessors. In a bigger application would be useful to add sass/less.
 
 Deployed files are under build directory. Entry point index.html.
 
 

  
 
  
  

