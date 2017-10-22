# numbers-over-time-chart

## [View App](https://numbers-over-time.herokuapp.com/)

This app will help you keep track of numbers over time, with info about those numbers.

Add a number+timestamp+details to a graph of your choice, with notes displayed beneath for the current entry.

![Sketch of main app screen](https://github.com/danlaush/numbers-over-time-chart/blob/master/docs/sketch%20with%20notes.jpg?raw=true)

## Things I want to track:

* Weight
  * Can filter by morning/evening recordings automatically based on timestamp
  * Can record multiple weighings in one day, and record 
  * display the average of the day over time up top, and a list of weighings for that day below
* Run Score: Km split adjusted for distance
  * Get a "score" for your run that's a function of split time and distance ran
  * When I go a shorter distance I would expect myself to be faster, and when I go for a longer run I would be satisfied with a run with a higher split time
* Healthy Meals
  * Scale of 1-5: was this meal healthy?
  * Want to filter by category, breakfast/lunch/dinner
* Money spent
  * One entry per transaction but would want the tracking over time to be sum of day's total

## App should:

* Adjust for lack of data - if I forget/don't record for a while, just show gaps in the graph. That's fine, sorta gives a visual indication of how the reliable the graph is.
* Calculate for loss/gain over time
  * How much am I spending now vs 3 months ago when I started watching where I was spending my money?
  * How much faster am I running?

# Project

## Phase 1: Front end
  
My #1 learning priority in the short term is Styled Components and working on my React skills. Will build the UI with static data

* [x] Design and create data structure as JSON
	- See `docs/dataset.json` for structure
	- Store "cache" of each day's number instead of recalculating everything on the fly
* [x] Create Express+React app
	- [Create React App with Express Backend](https://daveceddia.com/create-react-app-express-backend/)
	- [React+Express+Heroku](https://daveceddia.com/create-react-app-express-production/)
* [ ] Build main app screen components
  * [ ] Header/menu
  * [ ] React Router
  	- Load menu items as separate views
  	- Wildcard sub-route for to load categories in data
  * [ ] Date selector, change active date
  * [ ] Daily entries table, show data from active date
  	- Header: Current date
  	- Body: Table of Time/Number/Notes
  		+ Number field can have have optional pre-label like $ or post-label like kg
  * [ ] Graph of number over time
  	- Data viz library - d3?
* [ ] Styled Components
	- All of the above
* [ ] Buttons to add new 

## Notes and weird stuff

* Build process
  - "The --production=false flag might look odd. It’s there because by default, yarn will not install devDependencies in production, and we need those (“react-scripts” in particular) to build the React app." via [Dave Ceddia](https://daveceddia.com/create-react-app-express-production/)


## Learnings to be learned

1. A new database technology maybe?
  * Would it be faster to go with mysql since I know it vs learn something new since it might be useful and might be easier to implement with new frameworky tools? Are there tools that support simple node/express/mysql use?
2. Running Express for access to data and a React App on the same server
3. React router
4. Redux
5. Styled components
6. Data viz
7. Stretch goal: Animation in data viz
8. Ultra stretch goal: React Native

