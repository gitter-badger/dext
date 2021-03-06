import React, { PropTypes } from 'react';
import { compose, style } from 'glamor';
import QueryFieldContainer from '../containers/QueryFieldContainer';
import ResultListContainer from '../containers/ResultListContainer';

const base = style({
  backgroundColor: '#f2f2f2',
  color: '#333',
  borderRadius: 0,
  borderWidth: 0,
  boxSizing: 'border-box',
  fontFamily: 'Lucida Grande, Arial, sans-serif',
  fontWeight: 'lighter',
  padding: 0,
  width: '100%',
  overflow: 'hidden',
});

const App = ({ theme }) => {
  let styles = base;
  // apply theme styles
  if (theme.window) {
    styles = compose(base, theme.window);
  }
  return (
    <div {...styles}>
      <QueryFieldContainer theme={theme} />
      <ResultListContainer theme={theme} />
    </div>
  );
};

App.defaultProps = {
  theme: {},
};

App.propTypes = {
  theme: PropTypes.object,
};

export default App;
