const o = () => Math.random().toString(36).slice(2), r = (t) => {
  if (typeof t != "object")
    return t;
  let n = new t.constructor();
  for (const e in t)
    n[e] = r(t[e]);
  return n;
};
export {
  r as deepClone,
  o as randomString
};
