import React, { Component } from 'react';
// to grab the 'Form' and 'Button' components from the 'semantic-ui-react' library
import { Form, Button, Input, Message } from 'semantic-ui-react';
// going up two folders to then navigate back down to get to the Layout.js file
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
// 'Link' object is a react component that allows us to render anchor tags into our React
// components and navigate around the app.

 // 'Router' object is a react component that allows us to programmatically redirect people
// from one page to another page in our app.
import { Router } from '../../routes';

// Recall from the last JavaScript file, we used the 'primary' property instead of
// 'type' because 'primary' on a button gives it that nice kind of blue look that draws
// users eye to it.

// Changing '<h1>' tag to '<h3>' tag for a larger text size header

// Placing the '<Button>' tag still inside of the '<Form>' tag maintains nice
// spacing of the button component away from the text box of the '<Form>'.
class CampaignNew extends Component {
  // initializing our state object:
  // This is going to be the piece of state that records whatever the user is typing
  // into our input right now
  state = {
    minimumContribution: '',
    // Adding a new property to our 'state' called 'errorMessage' as an empty String
    errorMessage: '',
    loading: false
  };

  // Creating a new 'eventHandler' called 'onSubmit'

  // Adding '(event)' handler and 'event.preventDefault()' to prevent the
  // browser from automatically attempting to submit the form to our backend server

  // Being in the function body is where we want to attempt to create a new Campaign

  // Recall: we must specify that our function is async when we are awaiting function calls
  // such as '.createCampaign' and '.send()'
  onSubmit = async (event) => {
    event.preventDefault();

    // As soon as user clicks button, starting the spinner on.

    // Adding 'errorMessage: '' ' to get rid of the error message's permanence,
    // so the error message is only displayed after the user does something wrong and not
    // displayed continuously.
    this.setState({ loading: true, errorMessage: '' });
    // trying to catch error object: 'err' is a thrown error and it has a bunch of
    // different properties describing exactly what went wrong. Additionally,
    // 'err' has the '.message' property  is actual string that can safely be
    // printed inside of our component placed in a -- safely be placed inside
    // React object without throwing an error message for some reason

    // Probably want to pop the spinner up as soon as the user makes a transaction, entering the
    // function below
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
      });
    // Immediately after we successfully create our contract we then want to redirect our user
    // over to our /campaign/index page

    // 'Router.pushRoute('')' and pass in the route that we want to redirect our user to
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }

    // TUrning off spiner as soon as transaction is complete
      this.setState({ loading: false });
  };

  // Setting up a few event handlers to sure that we actually record user input on
  // the '<Input>' tag that we just added.

  // Assigning the 'label=' property, so that everybody knows that this is the in 'wei'
  // Assigning 'labelPosition=' as right, to position label on right hand side

  // Setting value property, which is where we take our state value for minimum contribution
  // push it back into the component
  // Setting up the eventHandler to update that state anytime a user types inside this
  // form
  // 'onChange=' will be called with an 'event =>' object
  render () {
    // Not placing any parentheses after 'onSubmit' because we are not trying to run
    // this function right now. We just want to pass a reference to submit to this
    // component so that it can be executed at some point in the future --- so no parentheses afterwards

    // 'semantic-ui-react' requires that you add the property of 'error' at the top
    // of '<Form>' tag.
    // Adding a condition to the 'error' property to prevent the error message from showing
    // by default

    // Using '!!' double exclamation points as a flag:
    // Double exclamation '!!' means, the first '!' takes the value and flips it into the
    // opposite value of its Boolean form, and the second '!' just flips the Boolean value
    // back -- '!!' is just a trick to turn an empty string into its equivalent Boolean value.
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout >
    );
  }
}

export default CampaignNew;
