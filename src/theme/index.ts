import { createTheme, Theme } from '@mui/material';

declare module '@mui/styles/defaultTheme' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends Theme { }
}

const theme = createTheme({
	
});

export default theme;