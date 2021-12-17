import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Application from './components/Application';

import { store } from './store/store';

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
