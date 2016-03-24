import {React, ReactDOM} from '/client/scripts/core';
import {Test, TestCore} from '/client/scripts/components';

Meteor.startup(() => {
  ReactDOM.render(<TestCore />, document.getElementById('main'))
});
