import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './components/app';

ReactDOM.render(
	<BrowserRouter>
		<Application />
	</BrowserRouter>,
	document.getElementById('root')
);