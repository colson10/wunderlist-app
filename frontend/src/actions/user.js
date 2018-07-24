import superagent from 'superagent';

const getLists = lists => ({
  type: 'LISTS_GET',
  payload: lists,
});

const fetchUserLists = () => (store) => {
  const { token } = store.getState();
  return superagent.get('https://a.wunderlist.com/api/v1/lists')
    .set('X-Access-Token', `${token}`)
    .set('X-Client-ID', process.env.CLIENT_ID)
    .set('Content-Type', 'application/json')
    .then((response) => {
      return store.dispatch(getLists(response.body));
    });
};

export { getLists, fetchUserLists };
