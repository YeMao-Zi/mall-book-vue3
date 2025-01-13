const o = (t) => {
  const n = {};
  return Object.keys(t).forEach((s) => {
    const e = t[s];
    l(e) ? n[s] = `${e}px` : e ? n[s] = e : n[s] = "initial";
  }), n;
}, l = (t) => !isNaN(parseFloat(t)) && isFinite(t), r = (t, n) => (t.install = (s) => {
  for (const e of [t, ...Object.values({})])
    s.component(e.name, e);
}, t), a = (t = []) => (s) => {
  t.forEach((e) => s.use(e));
};
export {
  o as getMainStyle,
  l as isNumber,
  a as makeInstaller,
  r as withInstall
};
