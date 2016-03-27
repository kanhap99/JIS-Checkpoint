
//Routes and more
/*
Search
Requests
Pictures/Colours

*/
FlowRouter.route('/', {
  name: "Home",
  action(params) {
    ReactLayout.render(MainLayout, {content: <CheckpointHome />})
  }
});
FlowRouter.route('/login', {
  name: "Login",
  action(params) {
    ReactLayout.render(MainLayout, {content: <Login />})
  }
});
FlowRouter.route('/request', {
  name:"Request",
  action(params) {
    ReactLayout.render(MainLayout, {content: <AddRequest />})
  }
});

/*FlowRouter.route('/:itemId', {
  name: "Read",
  action(params) {
    ReactLayout.render(MainLayout, {})
  }
});*/
