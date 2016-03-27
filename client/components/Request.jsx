Request = React.createClass({
  render() {
    return <li>
        <span>
          <h4>{this.props.request.name}</h4>
          Submitted by {this.props.request.submitterUsername} ({this.props.request.submitterEmail})
        </span>
        <p>{this.props.request.description}</p>
    </li>;
  }
});
