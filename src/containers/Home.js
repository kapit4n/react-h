import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../actions';

class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchHome())
  }

  render() {
    return <div>Home Info goes here</div>
  }
};

const mapStateToProps = state => {
  const { home } = state;
  return {
    home
  }
}

export default connect(mapStateToProps)(Home);