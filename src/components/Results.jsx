import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Tally from './Tally';
import {connect} from 'react-redux'

export const Results = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <div>{
      this.props.winner ?
        <Winner ref="winner" winner={this.props.winner}/> :
        <Tally ref="tally" tally={this.props.tally} next={this.props.next} pair={this.props.pair}/>
    }</div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    tally: state.getIn(['vote', 'tally'])
  };
}

export const ResultsContainer = connect(mapStateToProps)(Results);