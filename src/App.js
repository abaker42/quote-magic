import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetails from './pages/QuoteDetails';

//LAZY LOADING: Only loading components when needed. Could be useful in
//bigger app with a lot of components see syntax of how to lazy load
//NewQuote component below.

//const NewQuote = React.lazy(()=> import('./pages/NewQuote'))

//Using the sytax above means the NewQoute will only get loaded if that
//route is visited. The component being lazy loaded must be wrapped in
//the Suspense component from react with a fallback prop that takes JSX

function App() {
	return (
		<Layout>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route exact path='/' element={<Navigate replace to='/quotes' />} />
					<Route exact path='quotes' element={<AllQuotes />} />
					<Route path='quotes/:quoteId' element={<QuoteDetails />}>
						{/* <Route
						path=''
						exact
						element={
							<div className='centered'>
								<Link className='btn--flat' to={`/quotes/:quoteId/comments`}>
									Load Comments
								</Link>
							</div>
						}
					/> */}
						<Route path='comments' element={<Comments />} />
					</Route>
					<Route path='/new-quote' element={<NewQuote />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
