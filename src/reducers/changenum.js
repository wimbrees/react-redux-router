const changenum = (state = 23, action) => {
  switch (action.type) {
    case 'CHANGE_NUM':
        return action.num;      
    case 'DOUBLE_NUM':
        return state * 2;
    default:
        return state;
  }
}

export default changenum