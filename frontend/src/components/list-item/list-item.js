import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    return (
    <li>
      <h3>{this.props.list.title}</h3>
    </li>
    );  
  }
}

ListItem.propTypes = {
  list: PropTypes.object,
};

export default ListItem;
