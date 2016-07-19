import React from 'react';
//es5  var React = require('react')
import uuid from 'uuid';

const notes = [
	{
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

//es5 var notes = [
// {
//   id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
//   task: 'Learn React'
// }, 
// {
//   id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
//   task: 'Do laundry'
// }
// ]; 

export default () => (
	<ul>{notes.map(note =>
		<li key={note.id}>{note.task}</li>
	)}</ul>
)
// es5
// exports.default = function () {
// 	return React.createElement(
// 		"ul",
// 		null,
// 		notes.map(function (note) {
// 			return React.createElement(
// 				"li",
// 				{ key: note.id },
// 				note.task
// 			);
// 		})
// 	);
// };