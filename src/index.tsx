import { render } from 'react-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import Application from './components/Application';

import { store } from './store/store';
import theme from './theme';

render(
    <Provider store={ store }>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ theme }>
                <Application />
            </ThemeProvider>
        </StyledEngineProvider>
    </Provider>,
    document.getElementById('root'),
);
