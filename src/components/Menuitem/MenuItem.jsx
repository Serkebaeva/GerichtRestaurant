import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__MenuItem'>
    <div className="app__MenuItem-head">
		<div className="app__MenuItem-name">
			<p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
		</div>

		<div className="app__MenuItem-price">
			<p className='p__cormorant' >{price}</p>
		</div>
	</div>
  </div>
);

export default MenuItem;
