import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { bindActions } from '../../actions';

import Page from 'components/Page';

class Home extends React.Component {

  render() {

    const {
      home,
      homeActions
    } = this.props;

    return (
      <Page title='Home'>
        <h3>Redux Implementation</h3>
        <section style={{marginTop: '1rem'}}>
          <div>
            Count: {home.get('count')}
          </div>
          <div>
            <Button handleClick={homeActions.incrementCount}>+</Button>
            <Button handleClick={homeActions.decrementCount}>-</Button>
            <Button handleClick={homeActions.resetCount}>reset</Button>
          </div>
        </section>
      </Page>
    );
  }
}


Home.propTypes = {
  home: PropTypes.object,
  homeActions: PropTypes.object,
};

export default connect(
  function mapStateToProps( state ){ return { home: state.get('home') }; },
  function mapDispatchToProps( dispatch ){ return { homeActions: bindActions(dispatch).home }; }
)(Home);
