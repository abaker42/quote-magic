import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.author > quoteB.author ? 1 : -1;
		} else {
			return quoteA.author < quoteB.author ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	const history = useNavigate(); //useHistory is deprecated in reacr router dom
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const sortAscending = queryParams.get('sort') === 'asc';
	const sortedQuotes = sortQuotes(props.quotes, sortAscending);

	const handleSorting = () => {
		history('/quotes?sort=' + (sortAscending ? 'desc' : 'asc'));
	};
	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={handleSorting}>
					Sort {sortAscending ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
