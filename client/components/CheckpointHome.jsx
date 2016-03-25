CheckpointHome = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      items: Items.find({},{sort:{createdAt: -1}}).fetch(),
      requests: Requests.find({},{sort:{createdAt: -1}}).fetch()
    };
  },
  renderItems() {
    return this.data.items.map((item) => {
        return <Item key={item._id} item={item} />
    });
  },
  renderRequests() {
    return this.data.requests.map((request) => {
        return <Request key={request._id} request={request} />
    });
  },
  render() {
    return <div className="container-fluid">

      <br></br>
      {/*<Searchbar items={this.data.items} />*/}
      <div className="row">
        <div className="col-md-5 col-md-offset-2">
          <h3>Found items at Checkpoint (in order of most recent)</h3>
          <br></br>
          <ul>
            {this.renderItems()}
          </ul>
        </div>
        <div className="col-md-5">
          <h3>Pending requests</h3>
          <br></br>
          <ul>
            {this.renderRequests()}
          </ul>
        </div>
      </div>
    </div>;
  }
});
