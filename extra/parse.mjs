// -*- coding: utf-8, tab-width: 2 -*-

import guessTgt from '../guessTgt.mjs';


const EX = function guessAndParse(anno) {
  const tgt = String(guessTgt(anno) || '');
  if (!tgt) { throw new Error('No target given'); }
  const um = EX.safeUrlRgx.exec(tgt);
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

  safeUrlRgx: /^https?:\/{2}([\w:\.\/\-]+)$/,

});


export default EX;
