const isObjectEmpty = objectName => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

const isString = value => typeof value === 'string';

export { isObjectEmpty, isString };
