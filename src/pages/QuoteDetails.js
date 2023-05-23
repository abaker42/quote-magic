import React, { Fragment, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
	const params = useParams();
	const { quoteId } = params;
	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		<div className='centered'>
			<LoadingSpinner />
		</div>;
	}

	if (error) {
		<p className='centered focus'>{error}</p>;
	}

	//const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
	if (!loadedQuote) {
		return <p>No Quote Found</p>;
	}
	/**How do we make the Load comment link disapper when comments are loaded? in V6 */
	return (
		<Fragment>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<div className='centered'>
				<Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
					Load Comments
				</Link>
			</div>

			<Outlet />
		</Fragment>
	);
};

export default QuoteDetails;
