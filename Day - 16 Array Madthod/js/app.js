let students = ['Helal', 'Jubayer', 'Habib', 'Abdullah'];

// students.push('Siam'); Add list of array last item 
// students.unshift('siam'); add list of array first time
// students.shift(); delete list of arrys first item
// students.pop(); delete list of arry last item
// students.indexOf(); Take Out array possition 
// Just Countinue

console.log(students);



let deleteAnyItem = students.indexOf('Habib');

students.splice(deleteAnyItem, 1);

