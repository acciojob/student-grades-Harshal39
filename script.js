//your JS code here. If required.
let data = fetch('students.json').
	then(response => response.json()).
	then(console.log(data)).
	catch(err => console.log(err));