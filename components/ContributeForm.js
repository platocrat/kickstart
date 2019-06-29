import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    // Handling our input, whenever a user enters som text into the input we want to
  // take that value and store it in our state object.
  // Initializing state object.
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  // Changning `(event`) to `async event` because the function is now asynchronous
  // due to the addition of `const accounts = await web3.eth.getAccounts();`
  onSubmit = async event => {
    event.preventDefault();    // keeping the form from attempting to submit itself.
    // Instance of campaign, so now all we have to do is get a list of our accounts
    // and call the contribute function on our campaign.
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        // Recall that we are recording the value of balacne in Ether
        // and not Wei, convert Ether balance to Wei
        value: web3.utils.toWei(this.state.value, "ether")
      });
      // Passing in the current URL that we are looking at, saying to
      // refresh the page.
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    // Resetting the form, clearing the input number and the loading spinner
    this.setState({ loading: false, value: '' });
  };

  // Always required with React components because we want to render
  // the component on the page.
  render() {
    // The HTML code that is to be returned by the browser
    return (
      // Creating onSubmit handler for the form.
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            // onChange handler, anytime someone changes this input...
            onChange={event => this.setState({ value: event.target.value })}
            label="ether" // We want people to be able to spend a lot more on money on our campaigns by displaying `ether`
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Contribute!</Button>
      </Form>
    );
  }
}

// Always required for a new component.
export default ContributeForm;
