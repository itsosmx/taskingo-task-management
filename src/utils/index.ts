export function RandomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 40%, 60%)`;
}

/**
 * Normalize the object and add its id in the object;
 * @param object data
 * @returns
 */
export function NormalizeObject(object: Object): Object {
  const data = {};
  for (const prop in object) {
    //@ts-ignore
    data[prop] = {
      _id: prop,
      //@ts-ignore
      ...object[prop],
    };
  }
  return data;
}
