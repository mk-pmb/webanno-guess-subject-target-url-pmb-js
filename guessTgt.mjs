// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';


const EX = function guessSubjectTargetUrl(anno) {
  return (EX.fallible(anno) || EX.foundNone());
};


Object.assign(EX, {

  multi(anno) {
    if (!anno) { return []; }
    let tgt = EX.guessUrisFromTargetList(anno.target);
    if (!tgt.length) { return tgt; }

    const inReplyTo = EX.guessUrisFromTargetList(anno['as:inReplyTo']);
    tgt = tgt.filter(u => !inReplyTo.includes(u));

    Object.assign(tgt, EX.multiResultApi);
    return tgt;
  },


  multiResultApi: {
    primary() { return this[0] || false; },
    additional() { return (this.length >= 2) && this.slice(1); },
  },


  fallible(anno) {
    const tgt = EX.multi(anno);
    if (!tgt.length) { return false; }
    if (tgt.length === 1) { return tgt[0]; }
    throw new Error('Found too many potential subject targets');
  },


  foundNone() {
    const err = new Error('Found no potential subject target');
    err.type = 'AnnoNoSubjectTarget';
    throw err;
  },


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
    Object.assign(urls, EX.multiResultApi);
    return urls;
  },


});


export default EX;
