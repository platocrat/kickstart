import React from "react";
import { Menu } from "semantic-ui-react";
// Importing the 'Link' helper so that we can create a linked tag a user can use to actually
// navigate around themselves.
import { Link } from "../routes";

// This begins the react html code
export default () => {
  //
  return (
    // Top level menu = '<Menu>'
    // Subsection menu = '<Menu.Menu>'
    // Adding top level menu custom styling with 'style={}', where the first curly
    // braces denotes that we're about to write a JavaScript expression, and the second
    // is the actual object literal that we're creating

    // Whenever we use a 'Link' tag we have to specify the route that a user should go to if
    // click on this button

    // Note that the '<Link>' tag doesn't add any HTML to the document, instead
    // if anyone clicks on any of the '<Link>' tag's children, it is automatically going to
    // navigate the user around the page. Traditionally, we would use an anchor '<a>' tag to
    // display a nice kind underline effect whenever we use a '<Link>' tag on some plain text.

    // <Link route="/campaigns/new">
    //    <a className="item">+</a>
    // </Link>

    // Notice that the above code block uses a different route
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>

      </Menu.Menu>
    </Menu>
  );
};
