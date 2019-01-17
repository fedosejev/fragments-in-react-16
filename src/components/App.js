import React, { Component } from "react";
import PrivateListItems from "./PrivateListItems";
import PublicListItems from "./PublicListItems";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm mt-5">
            <ul class="list-group">
              {this.props.userHasPermissions && <PrivateListItems />}
              <PublicListItems />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
