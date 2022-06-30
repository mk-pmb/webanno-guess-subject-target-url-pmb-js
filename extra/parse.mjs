// -*- coding: utf-8, tab-width: 2 -*-

import guessTgt from '../guessTgt.mjs';


const EX = function guessAndParse(anno) {
  const tgt = guessTgt(anno);
  const um = EX.safeUrlRgx.exec(tgt.toLowerCase());
  if (!um) { throw new Error('Unsupported target URL format: ' + tgt); }
  const pathParts = tgt.split(/\/+/).filter(Boolean).slice(1);
  let port = 0;
  const host = pathParts.shift().replace(/:\d+$/, function hasPort(m) {
    port = +m.slice(1);
    return '';
  });
  const revHost = host.split('.').reverse().join('.');
  return {
    url: tgt,
    host,
    port,
    revHost,
    pathParts,
  };
};


Object.assign(EX, {

  safeUrlRgx: /^https?:\/{2}([a-z0-9_:\.\/\-]+)$/,

});


export default EX;
