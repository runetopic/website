import styled from '@emotion/styled';
import theme from '../../../theme';

const PageContent = styled('div')({
    padding: theme.spacing(2),
}, (props: any) => ({ width: props.width }));

export default PageContent;
