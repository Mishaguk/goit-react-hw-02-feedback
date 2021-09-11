import React from 'react';

const FeedbackOptions = () => (
	<div>
		<button type='button' onClick={this.handleGood}>
			Good
		</button>
		<button type='button' onClick={this.handleNeutral}>
			Neutral
		</button>
		<button type='button' onClick={this.handleBad}>
			Bad
		</button>
	</div>
);

export default FeedbackOptions;
