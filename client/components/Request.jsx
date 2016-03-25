Request = React.createClass({
  render() {
    return <li>
        <h4>{this.props.request.name}</h4>
        <ul>
          <li>{this.props.request.description}</li>
          <li>Requested by {this.props.request.submitter}</li>
        </ul>
    </li>;
  }
});
