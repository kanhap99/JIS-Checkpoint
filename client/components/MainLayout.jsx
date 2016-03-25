MainLayout = React.createClass({
  render() {
    return <div>
      <header><Header/></header>
      <main>{this.props.content}</main>
      <footer>We love Meteor</footer>
    </div>;
  }
});
