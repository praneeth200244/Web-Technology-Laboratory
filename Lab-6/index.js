const form = document.querySelector('#student-test-details');
console.log(form);
form.addEventListener('submit', formValidation);
function formValidation(e) {
	console.log(e);
	e.preventDefault();
	for (let i=0; i<form.elements.length-1; i++) {
		if (form[i].value.trim() === '') {
			alert("Some input fields are empty....");
			return;		
		}	
		if (form[i].id === 'usn' && form[i].value.length !== 12) {
			alert("Invalid USN..!");
			return;		
		}
		if (form[i].id === 'subject-code' && form[i].value.length !== 7) {
			alert("Invalid Subject Code..!");
			return;		
		}
		if (form[i].id === 'test-1' || form[i].id === 'test-2' || form[i].id === 'test-3') {
			/*if (!Number.isInteger(form[i].value)) {
				alert("Enter marks in numbers");	
				return;		
			}	*/	
			if (Number(form[i].value) > 20 || Number(form[i].value) < 0) {
				alert("Invalid marks");
				return;
			}
		}
	}
	
	const marks = [];
	for (let i=0; i<3; i++) {
		let mark = Number(form[i+2].value);
		marks.push(mark);	
	}
	
	marks.sort(function(a,b) {
		return a-b;
	});
	const average = (marks[1] + marks[2]) / 2;
	alert("The average marks of best of two tests is " + average);
}
