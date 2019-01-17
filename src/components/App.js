import React from "react";
import PrivateListItems from "./PrivateListItems";
import PublicListItems from "./PublicListItems";

const App = props => (
  <div class="container">
    <div class="row">
      <div class="col-sm mt-5">
        <ul class="list-group">
          {props.userHasPermissions && <PrivateListItems />}
          <PublicListItems />
        </ul>
      </div>
    </div>
  </div>
);

export default App;
