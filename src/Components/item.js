import React from 'react';

const Item =  ({match}) => (
	<div>
		<p>Work id ==> {match.params.id}</p>
		
	</div>)

export default Item;