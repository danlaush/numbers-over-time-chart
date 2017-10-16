# numbers-over-time-chart
This app will help you keep track of numbers over time, with info about those numbers.

Add a number+timestamp+details to a graph of your choice, with notes displayed beneath for the current entry.

##Things I want to track:

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
		* 




##App should:

	* Adjust for lack of data - if I forget/don't record for a while, just show gaps in the graph. That's fine, sorta gives a visual indication of how the reliable the graph is.
	* Calculate for loss/gain over time - 

		* How much am I spending now vs 3 months ago when I started watching where I was spending my money?
		* How much faster am I running?


##Learnings to be learned

	* A new database technology maybe?

		* Would it be faster to go with mysql since I know it vs learn something new since it might be useful and might be easier to implement with new frameworky tools? Are there tools that support simple node/express/mysql use?
  * More Express knowledge
	* React router
	* Redux
	* Styled components
	* Data viz
	* Stretch goal: Animation in data viz
	* Ultra stretch goal: React Native

