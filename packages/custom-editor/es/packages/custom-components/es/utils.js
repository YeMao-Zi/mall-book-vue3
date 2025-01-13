const o = (a) => {
  const n = {};
  return Object.keys(a).forEach((e) => {
    const s = a[e];
    t(s) ? n[e] = `${s}px` : s ? n[e] = s : n[e] = "initial";
  }), n;
}, t = (a) => !isNaN(parseFloat(a)) && isFinite(a), i = (a, n) => (a.install = (e) => {
  for (const s of [a, ...Object.values({})]) e.component(s.name, s);
}, a), l = (a = []) => (n) => {
  a.forEach((e) => n.use(e));
};
export {
  o as getMainStyle,
  t as isNumber,
  l as makeInstaller,
  i as withInstall
};
