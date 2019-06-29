import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'; // use curly braces to signify that we are importing solely one component from that semantic UI react like so
// '../' to navigate out of current directory and walk back down to the
// 'factory.js' file
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
// Importing the 'Link' helper from 'route.js' file
import { Link } from '../routes';

// Displaying a list of all Campaign addresses
// Redefining our functional component into a class based component
// To use the component based class we must import '{ Component }'
class CampaignIndex extends Component {
  // componentDidMount() is ok structuring for a traditional react app, but not for this app
  // This code block below is not being rendered by React.

  // To solve this problem we will use a method called 'getInitialProps', a
  // lifecycle method that is defined exclusively and used exclusively by 'next.js'

  // Defining a function with the 'static' keyword makes the function to
  // be not assigned to instances of the class -- instead the function is assigned to
  // instances of the class itself.

  // The 'static' keyword is a requirement by the 'next.js' framework
  // 'Next.js' wants to be able to retreive this initial data without attempting
  // to actually render our component. Rendering a component is a very computationally
  // expensive process so skipping any initial rendering here and just directly
  // calling that function, 'next.js' is able to be much more efficient
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };   // condensed version of { campaigns: campaigns };
  }

  // Creating a new function called 'renderCampaigns()'
  renderCampaigns() {
    // Iterate over list of campaign addresses and for every separate address
    // we're going to reate a different object that will have a different 'Card' Props (from the 'Card.group')

    // Iterate over our list of campaigns by using the 'map()' function
    // Recall how a map works:  We pass a function into map and that function will then
    // be called one time for every element inside of this array and it also gets
    // called with each element in the array and whatever gets returned will be
    // assigned to the 'const items' variable

    // This statement will give us a list of objects that will  give us our list
    // of objects where each object represents a single-card
    const items = this.props.campaigns.map(address => {
      // Return one object which will represent our 'Card'
      return {
        // Our 'Card' object will have the 'header:' property which will be the text
        // text that we want to display as the header of the card
        header: address,
        // We want our description property to be a link to go view this particular campaign

        // Recall that the '<Link' tag represents the route that we are going to navigate the user to
        // where 'route=' specifies where you want to send the user to when they click on this
        // '<a>' tag, in this case being '<a>View Campaigns</a>'

        // 'route={`/campaigns/${address}`' the '${address}' represents the address of the
        // current campaign that we are iterating over
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),                                      // Placing an '<a>' = anchor tag, a temporary solution
        fluid: true                             // 'fluid: true' property causes card to stretch to the entire width of its container
      };
    });

    // Using this item's array to create our card component and return it from this 'renderCampaign' function
    return <Card.Group items={items} />;
  }
  // Whenever we make a React Component we have to return some JSX from the
  // 'render()' method -- putting out some minimum amount of JSX
  render() {
    // Very temporary solution by adding '<link' tag to our component
    return (
      // Note:    The anchor tag '<a>' is what gives us the actual traditional right click
      //          functionality where we can right click the link and 'open a new tab',
      //          OR WHAT HAVE YOU *tophat*

      //          The '<Link>' tag is what gives us the iniital navigation functionality
      //          The '<a>' tag is what allows us to do like the right click and open a
      //          new tag stuff, AND inside the '<a>' tag we can place any other element we want
      //
      //          In our case, we're using a '<Button>'
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"               // 'floated=' property sets up a CSS property of 'float' and sets it equal to 'right'
                content="Create Campaign"     // 'content' property that specifies what text will be contained within the button
                icon="add circle"             // 'icon' property specifies the icon from a collection of icon names that come with the React documentation
                primary={true}                     // by listing 'primary' like this, this property gets automatically expanded to primary equals true
              />
            </a>
          </Link>

          {this.renderCampaigns()}

        </div>
      </Layout>
    );      // Adding 'renderCampaigns()' function to show the big list of nice looking cards to our users
  }
}

// Must export the React component, because Next.js expects an export of the
// React component
export default CampaignIndex;
