import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const navigate = useNavigate();

	useEffect(() => {
		if (status === 'completed') {
			navigate('../quotes', { replace: true });
		}
	}, [status, navigate]);

	const handleAddQuote = (quoteData) => {
		sendRequest(quoteData);
		console.log(quoteData);
	};

	return (
		<QuoteForm isLoading={status === 'pending'} onAddQuote={handleAddQuote} />
	);
};

export default NewQuote;
