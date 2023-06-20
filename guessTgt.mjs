// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';


const EX = function guessSubjectTargetUrl(anno) {
  if (!anno) { EX.foundNone(); }
  let tgt = EX.guessUrisFromTargetList(anno.target);
  if (tgt.length) {
    const inReplyTo = EX.guessUrisFromTargetList(anno['as:inReplyTo']);
    tgt = tgt.filter(u => !inReplyTo.includes(u));
  }
  if (!tgt.length) { EX.foundNone(); }
  if (tgt.length === 1) { return tgt[0]; }
  console.debug('targets:', tgt);
  throw new Error('Found too many potential subject targets');
};


Object.assign(EX, {

  foundNone() { throw new Error('Found no potential subject target'); },

  guessUri(tgt) {
    if (!tgt) { return ''; }
    return mustBe.nest('Target URL', (tgt.scope
      || tgt.id
      || tgt.source
      || tgt));
  },

  guessUrisFromTargetList(list) {
    const urls = [];
    [].concat(list).forEach(function chk(tgt) {
      if (!tgt) { return; }
      const url = EX.guessUri(tgt);
      if (!url) { return; }
      if (urls.includes(url)) { return; }
      urls.push(url);
    });
    return urls;
  },

});


export default EX;
