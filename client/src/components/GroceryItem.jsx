import React from 'react';


const GroceryItem = (props) => (
	<div>
		<span>{props.item.description} {props.item.quantity}</span>
	</div>
	);

export default GroceryItem;
