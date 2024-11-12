import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<span>Hello World</span>
		</div>
	);
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
