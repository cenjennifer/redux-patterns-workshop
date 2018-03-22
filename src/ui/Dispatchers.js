import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../redux/actions/books.actions';

const Dispatchers = ({ fetch }) => (
  <div className="dispatchers">
    <input className="dispatch-input" />
    <button className="dispatch-button" onClick={fetch}>Dispatch</button>
  </div>
);

export default connect(null,{ fetch: fetchBooks })(Dispatchers);
