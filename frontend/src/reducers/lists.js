export default (state = [], { type, payload }) => {
  switch (type) {
    case 'LISTS_GET':
      return payload;
    default:
      return state;
  }
};
