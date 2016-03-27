CheckpointHome = React.createClass({

  getInitialState: function() {
    return {
      data:null
    };
  },
  componentDidMount() {
    this.serverRequest = $.getJSON('https://spreadsheets.google.com/feeds/list/1-k9Y5scus9GK2Nkbl_pCW7RwcKRLNLovWCOJ0_IORik/1/public/full?alt=json&reverse=true&orderby=column:controlnumber', function (data) {
      this.setState({
        data: data.feed
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <div>
        {/*}<SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />*/}
      <ItemsList
          items={this.state.data}
        />
      </div>
    );
  }
});
var ItemsList = React.createClass({
  render: function() {
    var rows = [];
    for(var entry in this.props.items) {
      rows.push(<ItemRow entry={entry} />)
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
var ItemRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.entry.gsx$controlnumber.$t}</td>
        <td>{this.props.entry.gsx$date.$t}</td>
        <td>{this.props.entry.gsx$item.$t}</td>
        <td>{this.props.entry.gsx$description.$t}</td>
        <td>{this.props.entry.gsx$location.$t}</td>
      </tr>
    );
  }
});
