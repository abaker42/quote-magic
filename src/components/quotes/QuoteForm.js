import { Fragment, useRef } from 'react';
//import { usePrompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();
	//const [isTouched, setIsTouched] = useState(false);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const handleFormFocus = () => {
		/**Since react router dom doesn't support the Prompt component
		 * or usePrompt or useBlock hooks we have no clear work around
		 * for prompting the user to stop upon exiting form page once
		 * touched
		 */
		//setIsTouched(true);
		// usePrompt(
		// 	'Are you sure you want to leave? All data in form will be lost!',
		// 	isTouched
		// );
		console.log(
			'Just logging here since there no workaround for usePrompt in v6'
		);
	};

	return (
		<Fragment>
			{/* <Prompt
				when={isTouched}
				message={(location) =>
					''
				}
			/> */}
			<Card>
				<form
					onFocus={handleFormFocus}
					className={classes.form}
					onSubmit={submitFormHandler}>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor='author'>Author</label>
						<input type='text' id='author' ref={authorInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor='text'>Text</label>
						<textarea id='text' rows='5' ref={textInputRef}></textarea>
					</div>
					<div className={classes.actions}>
						<button className='btn'>Add Quote</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default QuoteForm;
