import superagent from 'superagent';

const getLists = lists => ({
  type: 'LISTS_GET',
  payload: lists,
});

const fetchUserLists = () => (store) => {
  const { token } = store.getState();
  console.log(token);
  return superagent.get('https://a.wunderlist.com/api/v1/lists')
    .set('X-Access-Token', token)
    .set('X-Client-ID', '450fc863964df672ed75')
    .set('Content-Type', 'application/json')
    .then((response) => {
      console.log(response);
      return store.dispatch(getLists(response.body));
    });
};

export { getLists, fetchUserLists };
