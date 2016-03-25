Item = React.createClass({
  render() {
    return <li>
      <span><h4>{this.props.item.name}</h4></span>
      <p>{this.props.item.description}</p>
    </li>;
  }
});
