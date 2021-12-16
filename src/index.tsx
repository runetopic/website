import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Application from './components/Application';

ReactDOM.render(
    <BrowserRouter>
        <Application/>
    </BrowserRouter>,
    document.getElementById('root')
);