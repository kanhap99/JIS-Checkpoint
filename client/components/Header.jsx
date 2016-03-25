Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  logout() {
    Meteor.logout();
  },
  getLogoutButton() {
    return <li>
      <a onClick={this.logout}>Logout</a>
    </li>
  },
  getLoginButton() {
    return <li>
      <a href="/login">Login</a>
    </li>
  },
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Checkpoint@JIS</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/add">Add</a></li>
              <li><a href="/request">Request</a></li>
              {this.data.user? this.getLogoutButton() : this.getLoginButton()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});
