import React from 'react';
import {
	Grid,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

const Results = () => (
	<Grid>
		<h2>Results List</h2>
		<ListGroup className="play">
			<ListGroupItem href="#" active>Link 1</ListGroupItem>
			<ListGroupItem href="#">Foxhollow</ListGroupItem>
			<ListGroupItem href="#" disabled>Link 3</ListGroupItem>
</ListGroup>
	</Grid>
);

export default Results;