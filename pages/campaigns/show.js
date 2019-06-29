import React, { Component } from "react";
// Recall that we always want our 'Layout' component to be the topmost component
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

// Creating a new component that displays Campaigns
class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      // Adding `address` to allow integration between `CampaignShow` and `ContributeForm`
      // `getInitialProps` is not a part of our campaign address, so the rest
      // of the components in this address, do not know about this address, so
      // we must specifiy it below so that we can return the address on this
      // object below.
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    // Pulling each property off of this `props` component above.
    const {
      balance,
      manager,
      minimumContribution,
      approversCount,
      requestsCount
    } = this.props; // Desstructuring all properties from `this.props`

    // Now, for the first item object, we can pass in the header of, say,
    // `manager`.
    // Adding `style` to add a style feature
    const items = [
      {
        header: manager,
        description:
          "The manager created this campaign and can create requests to withdraw money",
        meta: "Address of Manager",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver."
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers."
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign."
      },
      // Recall that `balance` is going to be in terms of `wei`, must use `web3` library to
      // convert `wei` to `ether`.
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend."
      }
    ];

    // Creating the actual component and getting it to display on the screen.
    return <Card.Group items={items} />;
  }

  // Remember to call `renderCards()` function inside the `render()` function
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
