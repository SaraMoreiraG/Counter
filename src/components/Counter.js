import React from 'react';

import '../styles/Counter.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';

function Counter(props) {
	const row = 'row text-white justify-content-center m-1'
	const cards = 'card col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2 fs-1'

	return (
		<div className={row}>
			<div className={cards}>
				<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
			</div>
			<div className={cards}>
				{props.digitSixt}
			</div>
			<div className={cards}>
				{props.digitFive}
			</div>
			<div className={cards}>
				{props.digitFour}
			</div>
			<div className={cards}>
				{props.digitThree}
			</div>
			<div className={cards}>
				{props.digitTwo}
			</div>
			<div className={cards}>
				{props.digitOne}
			</div>
		</div>
	)
}

export default Counter;
