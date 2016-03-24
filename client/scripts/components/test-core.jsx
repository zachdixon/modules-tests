import {React, ReactDOM} from '/client/scripts/core';
import {Test} from '/client/scripts/components';

class TestCore extends Test {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Test Core</p>
      </div>
    )
  }
}
export default TestCore
export {TestCore}