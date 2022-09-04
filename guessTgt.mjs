// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';


const EX = function guessSubjectTargetUrl(anno) {
  let tgt = (anno || false).target;
  if (Array.isArray(tgt)) {
    const n = tgt.length;
    if (n < 1) { throw new Error('Found no target'); }
    if (n > 1) { throw new Error('Found too many targets'); }
    [tgt] = tgt;
  }
  tgt = (tgt.scope
    || tgt.id
    || tgt.source
    || tgt);
  mustBe.nest('Target URL', tgt);
  return tgt;
};



export default EX;
