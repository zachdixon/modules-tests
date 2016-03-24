import {React, ReactDOM} from '/client/scripts/core';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}
export default Test
export {Test}