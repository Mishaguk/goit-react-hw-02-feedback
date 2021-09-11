import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
		percentage: 100,
		isOpen: false,
	};

	countTotalFeedback() {
		this.setState(state => ({
			total: state.good + state.neutral + state.bad,
		}));
	}

	countPositiveFeedbackPercentage() {
		this.setState(state => ({
			percentage: (100 / (state.good + state.bad + state.neutral)) * state.good,
		}));
	}

	handleGood = () => {
		this.setState({ isOpen: true });
		this.setState(state => ({
			good: state.good + 1,
		}));
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	};
	handleNeutral = () => {
		this.setState({ isOpen: true });
		this.setState(state => ({
			neutral: state.neutral + 1,
		}));
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	};

	handleBad = () => {
		this.setState({ isOpen: true });
		this.setState(state => ({
			bad: state.bad + 1,
		}));
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	};

	render() {
		const { good, neutral, bad, isOpen, total, percentage } = this.state;

		return (
			<div>
				<h2>Please leave feedback</h2>
				<button type='button' onClick={this.handleGood}>
					Good
				</button>
				<button type='button' onClick={this.handleNeutral}>
					Neutral
				</button>
				<button type='button' onClick={this.handleBad}>
					Bad
				</button>

				<h2>Statistics</h2>

				{isOpen ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						percentage={percentage}
						isOpen={isOpen}
					/>
				) : (
					<Notification message='No feedback given' />
				)}
			</div>
		);
	}
}

// 	<div>
// 		<Feedback />
// 	</div>
// );
// export default App;
