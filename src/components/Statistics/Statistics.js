import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, isOpen, percentage }) => (
	<div>
		{isOpen ? (
			<div>
				<span>Good : {good}</span>
				<br></br>
				<span>Neutral : {neutral}</span>
				<br></br>
				<span>Bad : {bad}</span>
				<br></br>
				<span>Total : {total}</span>
				<br></br>
				{total === 1 ? (
					<span>Positive feedback : 100%</span>
				) : (
					<span>Positive feedback : {percentage}%</span>
				)}
			</div>
		) : (
			<h3>No feedback given</h3>
		)}
	</div>
);

Statistics.ropTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	percentage: PropTypes.number.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default Statistics;
