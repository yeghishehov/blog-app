const getUniqueId = checkingObject => {
  return checkingObject
    ? checkingObject.reduce((acc, { id }) => {
      return id > acc ? id : acc;
    }, 0)
    : 0;
};

export default getUniqueId;
