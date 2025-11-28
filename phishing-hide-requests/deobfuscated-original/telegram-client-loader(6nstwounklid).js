;
;
const __vite__fileDeps = [
        './ex5wh64xjoki.js',
        './ev1xqgkmwscz.js',
        './0zx86h19te8p.js',
        './kv2cybuejeyn.js',
        './k6hys9edud6g.css',
        './v1hmpyaq7lt7.js',
        './qf86abyg8t87.css'
    ], __vite__mapDeps = _0x4191be => _0x4191be.map(_0x459a63 => __vite__fileDeps[_0x459a63]);
var i1 = Object.defineProperty, r1 = (_0x2f1ff5, _0xdd76ef, _0x1af051) => _0xdd76ef in _0x2f1ff5 ? i1(_0x2f1ff5, _0xdd76ef, {
        'enumerable': true,
        'configurable': true,
        'writable': true,
        'value': _0x1af051
    }) : _0x2f1ff5[_0xdd76ef] = _0x1af051, Dn = (_0x340ace, _0x59eab5, _0x67f1fe) => (r1(_0x340ace, typeof _0x59eab5 != 'symbol' ? _0x59eab5 + '' : _0x59eab5, _0x67f1fe), _0x67f1fe);
(function () {
    const _0x297df2 = document.createElement('link').relList;
    if (_0x297df2 && _0x297df2.supports && _0x297df2.supports('modulepreload')) {
        return;
    }
    for (const _0x3707db of document.querySelectorAll('link[rel="modulepreload"]'))
        _0x46600d(_0x3707db);
    const _0x4c2ace = {
        childList: true,
        subtree: true
    };
    ;
    ;
    new MutationObserver(_0x2fda74 => {
        ;
        for (const _0x3e98a8 of _0x2fda74)
            if (_0x3e98a8.type === 'childList') {
                for (const _0x2df0fc of _0x3e98a8.addedNodes)
                    _0x2df0fc.tagName === 'LINK' && _0x2df0fc.rel === 'modulepreload' && _0x46600d(_0x2df0fc);
            }
    }).observe(document, _0x4c2ace);
    ;
    function _0x3a1039(_0x1098d2) {
        const _0x1e3d87 = {};
        return _0x1098d2.integrity && (_0x1e3d87.integrity = _0x1098d2.integrity), _0x1098d2.referrerPolicy && (_0x1e3d87.referrerPolicy = _0x1098d2.referrerPolicy), _0x1098d2.crossOrigin === 'use-credentials' ? _0x1e3d87.credentials = 'include' : _0x1098d2.crossOrigin === 'anonymous' ? _0x1e3d87.credentials = 'omit' : _0x1e3d87.credentials = 'same-origin', _0x1e3d87;
    }
    function _0x46600d(_0x392833) {
        ;
        if (_0x392833.ep) {
            return;
        }
        _0x392833.ep = true;
        const _0x483bba = _0x3a1039(_0x392833);
        fetch(_0x392833.href, _0x483bba);
    }
}());
const a1 = 'modulepreload', o1 = function (_0x19f67a, _0x3fab60) {
        return new URL(_0x19f67a, _0x3fab60).href;
    }, Lr = {}, ze = function (_0x3069e9, _0x1f8041, _0x2324dc) {
        ;
        let _0x42662f = Promise.resolve();
        if (_0x1f8041 && _0x1f8041.length > 0) {
            const _0x59d8b4 = document.getElementsByTagName('link'), _0x256a54 = document.querySelector('meta[property=csp-nonce]'), _0x3600c0 = _0x256a54?.nonce || _0x256a54?.getAttribute('nonce');
            _0x42662f = Promise.all(_0x1f8041.map(_0x503c73 => {
                ;
                if (_0x503c73 = o1(_0x503c73, _0x2324dc), _0x503c73 in Lr) {
                    return;
                }
                Lr[_0x503c73] = true;
                const _0x32ee13 = _0x503c73.endsWith('.css'), _0x5c2bd9 = _0x32ee13 ? '[rel="stylesheet"]' : '';
                if (!!_0x2324dc) {
                    for (let _0x30069e = _0x59d8b4.length - 1; _0x30069e >= 0; _0x30069e--) {
                        const _0x184c0a = _0x59d8b4[_0x30069e];
                        if (_0x184c0a.href === _0x503c73 && (!_0x32ee13 || _0x184c0a.rel === 'stylesheet')) {
                            return;
                        }
                    }
                } else {
                    if (document.querySelector('link[href="' + _0x503c73 + '"]' + _0x5c2bd9)) {
                        return;
                    }
                }
                const _0x5c3c6d = document.createElement('link');
                if (_0x5c3c6d.rel = _0x32ee13 ? 'stylesheet' : a1, _0x32ee13 || (_0x5c3c6d.as = 'script', _0x5c3c6d.crossOrigin = ''), _0x5c3c6d.href = _0x503c73, _0x3600c0 && _0x5c3c6d.setAttribute('nonce', _0x3600c0), document.head.appendChild(_0x5c3c6d), _0x32ee13) {
                    return new Promise((_0x3536f5, _0x25c53e) => {
                        ;
                        _0x5c3c6d.addEventListener('load', _0x3536f5);
                        _0x5c3c6d.addEventListener('error', () => _0x25c53e(new Error('Unable to preload CSS for ' + _0x503c73)));
                        ;
                    });
                }
            }));
        }
        return _0x42662f.then(() => _0x3069e9()).catch(_0x3b55fb => {
            const _0x1d41e7 = { cancelable: true };
            ;
            const _0x1d40f6 = new Event('vite:preloadError', _0x1d41e7);
            if (_0x1d40f6.payload = _0x3b55fb, window.dispatchEvent(_0x1d40f6), !_0x1d40f6.defaultPrevented) {
                throw _0x3b55fb;
            }
        });
    }, xr = [
        'web.telegram.org',
        'webk.telegram.org'
    ], nm = 'b8ed37d7', Mr = Math.min(4, navigator.hardwareConcurrency ?? 4), ne = {
        'id': 2496,
        'hash': '8da85b0d5bfe62527e5b244c209159c3',
        'version': '2.2',
        'versionFull': '2.2 (909)',
        'build': 909,
        'langPackVersion': 215995,
        'langPackLocalVersion': 16,
        'langPack': 'webk',
        'langPackCode': 'en',
        'domains': xr,
        'baseDcId': 2,
        'isMainDomain': xr.includes(location.hostname),
        'suffix': 'K',
        'threads': Mr,
        'cryptoWorkers': Mr,
        'mtproxy': null,
        'hostname': null
    };
ne.isMainDomain && (ne.id = 2496, ne.hash = '8da85b0d5bfe62527e5b244c209159c3');
function ja() {
    ;
    return document.activeElement?.blur ? (document.activeElement.blur(), true) : false;
}
const a0_0x6b37c8 = {};
a0_0x6b37c8.value = 'Module';
const Fe = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch, Mi = typeof window < 'u' ? window : self, ks = navigator ? navigator.userAgent : null, Et = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1, Ii = navigator.userAgent.toLowerCase().indexOf('android') !== -1, Ri = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), Ha = ((() => {
        ;
        try {
            return +navigator.userAgent.match(/Chrom(?:e|ium)\/(.+?)(?:\s|\.)/)[1];
        } catch {
        }
    })()), ps = (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !Mi.MSStream, be = 'safari' in Mi || !!(ks && (/\b(iPad|iPhone|iPod)\b/.test(ks) || ks.match('Safari') && !ks.match('Chrome'))), wt = navigator.userAgent.toLowerCase().indexOf('firefox') > -1, bs = be && ps, Re = (navigator.maxTouchPoints === void 0 || navigator.maxTouchPoints > 0) && navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1, c1 = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'CHROMIUM_VERSION': Ha,
        'IS_ANDROID': Ii,
        'IS_APPLE': Et,
        'IS_APPLE_MOBILE': ps,
        'IS_CHROMIUM': Ri,
        'IS_FIREFOX': wt,
        'IS_MOBILE': Re,
        'IS_MOBILE_SAFARI': bs,
        'IS_SAFARI': be,
        'USER_AGENT': ks
    }, Symbol.toStringTag, a0_0x6b37c8));
function yt(_0x3e5f5a, _0x5ceb49) {
    ;
    return _0x3e5f5a.closest('.' + _0x5ceb49);
}
let Ds;
function Oe(_0xe5ed01) {
    ;
    Ds ? Ds.push(_0xe5ed01) : (Ds = [_0xe5ed01], requestAnimationFrame(() => {
        ;
        const _0x1154ba = Ds;
        Ds = void 0;
        _0x1154ba.forEach(_0x4d5001 => _0x4d5001());
        ;
    }));
}
let Wt;
function d1() {
    ;
    return Wt || (Wt = new Promise(_0x58b04a => Oe(() => _0x58b04a())), Wt.then(() => {
        Wt = void 0;
    }), Wt);
}
function Wa() {
    ;
    return new Promise(_0x478023 => {
        ;
        Oe(() => {
            Oe(_0x478023);
        });
    });
}
function Ir(_0x55bbb4) {
    ;
    _0x55bbb4.style.transform = 'translateY(-99999px)';
    _0x55bbb4.focus();
    Wa().then(() => {
        ;
        _0x55bbb4.style.transform = '';
    });
    ;
}
const Va = be && Re && Fe && false;
if (Va) {
    const s = 'clientY';
    let e = 0;
    const a0_0x42c0f8 = {
        capture: true,
        passive: false
    };
    ;
    ;
    ;
    const t = a0_0x42c0f8, f = _0x2317cc => {
            const _0x4a10a8 = _0x2317cc.touches[0], _0x145f1f = yt(_0x4a10a8.target, 'scrollable-y');
            if (_0x145f1f) {
                const _0x5f1dac = _0x4a10a8[s], _0x3aeb3b = e - _0x5f1dac, _0x3cc063 = _0x145f1f.scrollTop, _0x32106b = _0x145f1f.scrollHeight, _0xb17fd3 = _0x145f1f.clientHeight, _0x5bd404 = _0x3cc063 ? Math.round(_0x3cc063 + _0x145f1f.clientHeight + _0x3aeb3b) : _0x3cc063 + _0x3aeb3b;
                (_0x32106b === _0xb17fd3 || _0x5bd404 >= _0x32106b || _0x5bd404 <= 0) && _0x2317cc.preventDefault();
            } else {
                _0x2317cc.preventDefault();
            }
        };
    let n = 0;
    const a0_0x2eb05f = { passive: true };
    ;
    const a0_0x1f80be = { passive: true };
    ;
    const a0_0x1c644c = { passive: true };
    ;
    document.addEventListener('focusin', _0x1cde1f => {
        ;
        !_0x1cde1f.target.classList.contains('is-sticky-input-bugged') || _0x1cde1f.timeStamp - n < 50 || (Ir(_0x1cde1f.target), document.addEventListener('touchmove', f, t), document.addEventListener('touchstart', _0x4b448c => {
            ;
            if (_0x4b448c.touches.length > 1) {
                return;
            }
            e = _0x4b448c.touches[0][s];
        }));
    }, a0_0x2eb05f);
    document.addEventListener('focusout', _0x5e5310 => {
        ;
        document.removeEventListener('touchmove', f, t);
        n = _0x5e5310.timeStamp;
        ;
    }, a0_0x1f80be);
    document.addEventListener('visibilitychange', () => {
        ;
        document.activeElement && document.activeElement.classList.contains('is-sticky-input-bugged') && document.activeElement.blur && Ir(document.activeElement);
    }, a0_0x1c644c);
    ;
    ;
}
function im(_0x2bd6ef) {
    ;
    Va && _0x2bd6ef.classList.add('is-sticky-input-bugged');
}
const Vs = 'Roboto', za = Vs + ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif', l1 = '16px', u1 = '400', rm = u1 + ' ' + l1 + ' ' + za;
function ve() {
}
function ft(_0x4168aa) {
    return new Promise(_0x5f297a => {
        setTimeout(_0x5f297a, _0x4168aa);
    });
}
const Oi = 'tgico';
function am(_0x5448bb) {
    return Oi + '-' + _0x5448bb;
}
const a0_0x180083 = {};
a0_0x180083.text = Vs;
a0_0x180083.icons = Oi;
a0_0x180083.monospace = 'Roboto Mono';
;
const Sn = [
        'b',
        'б'
    ], An = {}, h1 = a0_0x180083, a0_0x7f8ea = {};
a0_0x7f8ea.text = Sn;
a0_0x7f8ea.icons = void 0;
a0_0x7f8ea.monospace = Sn;
;
function om(_0x5dd288 = a0_0x7f8ea) {
    ;
    if (!('fonts' in document)) {
        return Promise.resolve();
    }
    const _0x1308af = [];
    for (const _0x495baa in _0x5dd288) {
        let _0x3beede = _0x5dd288[_0x495baa];
        _0x3beede === 'all' && (_0x3beede = Sn);
        const _0x34ef95 = h1[_0x495baa], _0x16d115 = _0x495baa === 'icons' ? [500] : [
                400,
                500
            ];
        for (const _0x318492 of _0x16d115) {
            const _0x99bf3e = (_0x3beede || [void 0]).map(_0x4bc775 => {
                ;
                var _0x45fbf7, _0x416532;
                const _0x50e10e = [
                    _0x318492,
                    '1rem',
                    _0x34ef95
                ].join(' ');
                return (_0x45fbf7 = An[_0x50e10e] ?? (An[_0x50e10e] = {}))[_0x416532 = _0x4bc775 || ''] ?? (_0x45fbf7[_0x416532] = document.fonts.load(_0x50e10e, _0x4bc775));
            });
            _0x1308af.push(..._0x99bf3e);
        }
    }
    return Promise.race([
        Promise.all(_0x1308af).catch(ve),
        ft(1000)
    ]);
}
const Ni = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1, fs = 'account', cm = 3, m1 = 4, Rr = m1;
function Ga(_0xad581a) {
    ;
    return _0xad581a instanceof URL || (_0xad581a = new URL(_0xad581a + '', location.href)), location.search && _0xad581a.protocol !== 'blob:' && new URLSearchParams(location.search).forEach((_0xcf282d, _0x36c419) => {
        ;
        _0x36c419 !== fs && _0xad581a.searchParams.set(_0x36c419, _0xcf282d);
    }), _0xad581a.searchParams.delete('swfix'), _0xad581a;
}
function g1() {
    const _0x9ad29f = {
        'construct'(_0x5dd16d, _0x300202) {
            return _0x300202[0] = Ga(_0x300202[0]), new _0x5dd16d(..._0x300202);
        }
    };
    [
        Worker,
        typeof SharedWorker < 'u' && SharedWorker
    ].filter(Boolean).forEach(_0x5c52b7 => {
        window[_0x5c52b7.name] = new Proxy(_0x5c52b7, _0x9ad29f);
    });
}
g1();
function dm() {
    ;
    Element.prototype.toggleAttribute || (Element.prototype.toggleAttribute = function (_0x1b820e, _0x4f35b2) {
        ;
        return _0x4f35b2 !== void 0 && (_0x4f35b2 = !!_0x4f35b2), this.hasAttribute(_0x1b820e) ? _0x4f35b2 ? true : (this.removeAttribute(_0x1b820e), false) : _0x4f35b2 === false ? false : (this.setAttribute(_0x1b820e, ''), true);
    });
}
const Bi = 0, lm = 1271266957, um = 489000, hm = 777, mm = 2666000, gm = 777000, pm = 2147483647, bm = '', ym = 20971520, jn = '', vm = [
        7322096,
        16766590,
        13338331,
        9367192,
        16749490,
        16478047
    ], Em = 'default_static', Mf = 4294967296, wm = Mf + 1, Dm = false, p1 = new Set([
        'web',
        'k',
        'z',
        'a'
    ]), Sm = 2147483646, Am = new Set([
        'image/jpeg',
        'image/png',
        'image/bmp',
        'image/gif'
    ]), Cm = 'XTR', km = 5000, Fm = -1, b1 = 0, y1 = 1, v1 = new Set([
        b1,
        y1
    ]);
Math.max(...Array.from(v1)) + 1;
const Pm = false;
class je {
    constructor(_0x6c7a71) {
        ;
        this['_constructor'](_0x6c7a71);
    }
    ['_constructor'](_0x46dbb7) {
        ;
        this.reuseResults = _0x46dbb7;
        this.listeners = {};
        this.listenerResults = {};
        ;
    }
    ['addEventListener'](_0x45f22d, _0x40da4a, _0x4aba7b) {
        ;
        var _0x4b633c;
        const _0x1e955b = {
            callback: _0x40da4a,
            options: _0x4aba7b
        };
        ;
        ;
        ;
        const _0x42f714 = _0x1e955b;
        if (((_0x4b633c = this.listeners)[_0x45f22d] ?? (_0x4b633c[_0x45f22d] = new Set())).add(_0x42f714), this.listenerResults.hasOwnProperty(_0x45f22d) && (_0x40da4a(...this.listenerResults[_0x45f22d]), _0x4aba7b?.once)) {
            this.listeners[_0x45f22d].delete(_0x42f714);
            return;
        }
    }
    ['addMultipleEventsListeners'](_0x288d17) {
        ;
        for (const _0x4be474 in _0x288d17)
            this.addEventListener(_0x4be474, _0x288d17[_0x4be474]);
    }
    ['removeEventListener'](_0x9d7fbf, _0x4ea40f, _0x557ff3) {
        ;
        if (this.listeners[_0x9d7fbf]) {
            for (const _0xd84060 of this.listeners[_0x9d7fbf])
                if (_0xd84060.callback === _0x4ea40f) {
                    this.listeners[_0x9d7fbf].delete(_0xd84060);
                    break;
                }
        }
    }
    ['invokeListenerCallback'](_0x29ad45, _0x1b22e5, ..._0xda3a8b) {
        ;
        let _0x4fc100, _0x1a10b3;
        try {
            _0x4fc100 = _0x1b22e5.callback(..._0xda3a8b);
        } catch (_0x3fa351) {
            _0x1a10b3 = _0x3fa351;
        }
        if (_0x1b22e5.options?.once && this.removeEventListener(_0x29ad45, _0x1b22e5.callback), _0x1a10b3) {
            throw _0x1a10b3;
        }
        return _0x4fc100;
    }
    ['_dispatchEvent'](_0x27e36e, _0x559b8e, ..._0x24bfb2) {
        ;
        this.reuseResults && (this.listenerResults[_0x27e36e] = _0x24bfb2);
        const _0x2043e0 = _0x559b8e && [], _0x1e46f5 = this.listeners[_0x27e36e];
        if (_0x1e46f5) {
            for (const _0x1e8ed4 of _0x1e46f5) {
                const _0x15572d = this.invokeListenerCallback(_0x27e36e, _0x1e8ed4, ..._0x24bfb2);
                _0x2043e0 && _0x2043e0.push(_0x15572d);
            }
        }
        return _0x2043e0;
    }
    ['dispatchResultableEvent'](_0x3a3d5e, ..._0x4e0d6a) {
        ;
        return this['_dispatchEvent'](_0x3a3d5e, true, ..._0x4e0d6a);
    }
    ['dispatchEvent'](_0x1c8a3d, ..._0xbfe923) {
        ;
        this['_dispatchEvent'](_0x1c8a3d, false, ..._0xbfe923);
    }
    ['cleanup']() {
        ;
        this.listeners = {};
        this.listenerResults = {};
        ;
    }
}
const _m = false, qa = false, E1 = typeof window < 'u' ? window : self, N = E1, If = Date.now() % Math.random() * 100000000 | 0;
function xe(_0x5e45d2, _0x31d30c) {
    const _0x556a98 = _0x5e45d2.indexOf(_0x31d30c);
    return (_0x556a98 === -1 ? void 0 : _0x5e45d2.splice(_0x556a98, 1))?.[0];
}
const a0_0x43d082 = {};
a0_0x43d082.includeUncontrolled = false;
a0_0x43d082.type = 'window';
;
const Zs = typeof ServiceWorkerGlobalScope < 'u' && self instanceof ServiceWorkerGlobalScope, rn = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && !Zs, bt = rn || Zs, w1 = () => self.clients.matchAll(a0_0x43d082), $a = (_0x1b2588, ..._0x5dc2d0) => {
        ;
        try {
            _0x1b2588.postMessage(..._0x5dc2d0);
        } catch {
        }
    }, Ya = (_0x5a71e3, ..._0x5045a2) => {
        ;
        w1().then(_0x3723b0 => {
            ;
            _0x3723b0.length && _0x3723b0.slice(_0x5a71e3 ? 0 : -1).forEach(_0x12634b => {
                $a(_0x12634b, ..._0x5045a2);
            });
        });
    }, Ka = (..._0x136f44) => {
        $a(self, ..._0x136f44);
    }, Ja = () => {
    };
Zs && Ya.bind(null, false);
Zs && Ya.bind(null, true);
;
function Ee(_0x4d5020, _0xfa7072) {
    const _0x39a85b = new Error(), _0x393151 = {
            'type': _0x4d5020,
            'stack': _0x39a85b.stack
        };
    return _0xfa7072 && (_0x393151.message = _0xfa7072), _0x393151;
}
const D1 = Date.now();
function Or() {
    ;
    return '[' + ((Date.now() - D1) / 1000).toFixed(3) + ']';
}
var ef = (_0x1cac05 => (_0x1cac05[_0x1cac05.None = 0] = 'None', _0x1cac05[_0x1cac05.Error = 1] = 'Error', _0x1cac05[_0x1cac05.Warn = 2] = 'Warn', _0x1cac05[_0x1cac05.Log = 4] = 'Log', _0x1cac05[_0x1cac05.Debug = 8] = 'Debug', _0x1cac05))(ef || {});
const a0_0xabfa68 = {};
a0_0xabfa68.black = '\x1B[30m';
a0_0xabfa68.red = '\x1B[31m';
a0_0xabfa68.green = '\x1B[32m';
a0_0xabfa68.yellow = '\x1B[33m';
a0_0xabfa68.blue = '\x1B[34m';
a0_0xabfa68.magenta = '\x1B[35m';
a0_0xabfa68.cyan = '\x1B[36m';
a0_0xabfa68.white = '\x1B[37m';
;
const a0_0x410af7 = {};
a0_0x410af7.black = '\x1B[40m';
a0_0x410af7.red = '\x1B[41m';
a0_0x410af7.green = '\x1B[42m';
a0_0x410af7.yellow = '\x1B[43m';
a0_0x410af7.blue = '\x1B[44m';
a0_0x410af7.magenta = '\x1B[45m';
a0_0x410af7.cyan = '\x1B[46m';
a0_0x410af7.white = '\x1B[47m';
;
const a0_0x4f289e = {};
a0_0x4f289e.reset = '\x1B[0m';
a0_0x4f289e.bright = '\x1B[1m';
a0_0x4f289e.dim = '\x1B[2m';
a0_0x4f289e.underscore = '\x1B[4m';
a0_0x4f289e.blink = '\x1B[5m';
a0_0x4f289e.reverse = '\x1B[7m';
a0_0x4f289e.hidden = '\x1B[8m';
a0_0x4f289e.fg = a0_0xabfa68;
a0_0x4f289e.bg = a0_0x410af7;
;
const S1 = [
        0,
        1,
        2,
        4,
        8
    ], A1 = be || wt, Nr = !A1, Cn = a0_0x4f289e, C1 = [
        [
            'debug',
            8
        ],
        [
            'info',
            4
        ],
        [
            'warn',
            2
        ],
        [
            'error',
            1
        ],
        [
            'assert',
            1
        ],
        [
            'trace',
            4
        ],
        [
            'group',
            4
        ],
        [
            'groupCollapsed',
            4
        ],
        [
            'groupEnd',
            4
        ]
    ];
function Q(_0x84d07d, _0x82a84d = 7, _0xc31c4c = false, _0x10243a = '') {
    ;
    let _0x25263b;
    _0xc31c4c || (_0x82a84d = 1);
    Nr ? _0x10243a || (Zs ? _0x10243a = Cn.fg.yellow : rn && (_0x10243a = Cn.fg.cyan)) : _0x10243a = '';
    ;
    const _0x158810 = _0x10243a;
    _0x10243a ? _0x10243a = '%s ' + _0x10243a + '%s' : _0x10243a = '%s';
    const _0x413ccb = function (..._0xd28d65) {
        return _0x82a84d & 4 && void 0;
    };
    C1.forEach(([_0x18c4d2, _0xc72b4c]) => {
        _0x413ccb[_0x18c4d2] = function (..._0x1abaac) {
            return _0x82a84d & _0xc72b4c && void 0;
        };
    });
    _0x413ccb.setPrefix = function (_0x14284b) {
        ;
        _0x25263b = _0x14284b;
        _0x84d07d = '[' + _0x14284b + ']';
        ;
    };
    _0x413ccb.setPrefix(_0x84d07d);
    _0x413ccb.setLevel = function (_0x2612b1) {
        ;
        _0x82a84d = S1.slice(0, _0x2612b1 + 1).reduce((_0x74bad7, _0x13ff4b) => _0x74bad7 | _0x13ff4b, 0);
    };
    ;
    const _0x3e7999 = {};
    return _0x413ccb.bindPrefix = function (_0x2ca257, _0x5b474c = _0x82a84d) {
        ;
        return _0x3e7999[_0x2ca257] ?? (_0x3e7999[_0x2ca257] = Q(_0x25263b + '] ' + (Nr && _0x158810 ? Cn.reset : '') + '[' + _0x2ca257, _0x5b474c, _0xc31c4c, _0x158810));
    }, _0x413ccb;
}
const k1 = true;
class zs extends je {
    constructor(_0x36b8bd) {
        ;
        super(false);
        this.logSuffix = _0x36b8bd;
        this.onMessage = _0x5c5a8f => {
            ;
            const _0x3f138d = _0x5c5a8f.data, _0x197929 = _0x5c5a8f.source || _0x5c5a8f.currentTarget;
            this.processTaskMap[_0x3f138d.type](_0x3f138d, _0x197929, _0x5c5a8f);
        };
        this.processResultTask = _0x457d68 => {
            const {
                    taskId: _0x51eff6,
                    result: _0x39bbbe,
                    error: _0x4e8dc8
                } = _0x457d68.payload, _0x53c9f5 = this.awaiting[_0x51eff6];
            _0x53c9f5 && (this.debug && this.log.debug('done', _0x53c9f5.taskType, _0x39bbbe, _0x4e8dc8), 'error' in _0x457d68.payload ? _0x53c9f5.reject(_0x4e8dc8) : _0x53c9f5.resolve(_0x39bbbe), delete this.awaiting[_0x51eff6]);
        };
        this.processAckTask = _0x2c2dd9 => {
            const _0x343fe2 = _0x2c2dd9.payload, _0x5d50b6 = this.awaiting[_0x343fe2.taskId];
            if (!_0x5d50b6) {
                return;
            }
            const _0x2c228c = _0x5d50b6.resolve, _0x41d8b7 = {
                    'cached': _0x343fe2.cached,
                    'result': _0x343fe2.cached ? 'result' in _0x343fe2 ? Promise.resolve(_0x343fe2.result) : Promise.reject(_0x343fe2.error) : new Promise((_0xa12079, _0x20aab8) => {
                        ;
                        _0x5d50b6.resolve = _0xa12079;
                        _0x5d50b6.reject = _0x20aab8;
                        ;
                    })
                };
            _0x2c228c(_0x41d8b7);
            _0x343fe2.cached && delete this.awaiting[_0x343fe2.taskId];
            ;
        };
        this.processPingTask = (_0x3abfb4, _0x29b6d1, _0x301651) => {
            ;
            this.pushTask(this.createTask('pong', void 0), _0x301651.source);
        };
        this.processPongTask = (_0x4ed44a, _0x1d2b4e, _0x403b36) => {
            const _0x355d80 = this.pingResolves.get(_0x1d2b4e);
            _0x355d80 && (this.pingResolves.delete(_0x1d2b4e), _0x355d80());
        };
        this.processCloseTask = (_0x3773c7, _0x2b2f8c, _0x1c36ba) => {
            ;
            this.detachPort(_0x2b2f8c);
        };
        this.processBatchTask = (_0x2a931a, _0x5500c6, _0x4be307) => {
            const _0x154471 = {
                data: _0x4be307.data,
                source: _0x4be307.source,
                currentTarget: _0x4be307.currentTarget
            };
            ;
            ;
            ;
            ;
            const _0x3916ec = _0x154471;
            _0x2a931a.payload.forEach(_0x25cff4 => {
                ;
                _0x3916ec.data = _0x25cff4;
                this.onMessage(_0x3916ec);
                ;
            });
        };
        this.processLockTask = (_0x54b6ef, _0x3cfe8f, _0x59feef) => {
            const _0x22731f = _0x54b6ef.payload;
            this.requestedLocks.has(_0x22731f) || (this.requestedLocks.set(_0x22731f, _0x3cfe8f), navigator.locks.request(_0x22731f, () => {
                ;
                this.processCloseTask(void 0, _0x3cfe8f, void 0);
                this.requestedLocks.delete(_0x22731f);
                ;
            }));
        };
        this.processInvokeTask = async (_0x5bfe1a, _0x6b316, _0x4e356c) => {
            const _0x3db12d = _0x5bfe1a.id, _0x5d3832 = _0x5bfe1a.payload;
            let _0x4d7d37, _0xbcc01d, _0xa9aea2;
            const _0xb33465 = { taskId: _0x3db12d };
            ;
            const _0x21b236 = {
                taskId: _0x3db12d,
                cached: true
            };
            ;
            ;
            _0x5d3832.void || (_0x4d7d37 = _0xb33465, _0xbcc01d = this.createTask('result', _0x4d7d37));
            _0x5d3832.withAck && (_0xa9aea2 = this.createTask('ack', _0x21b236));
            ;
            ;
            let _0x4513be;
            try {
                const _0x2e3c80 = this.listeners[_0x5d3832.type];
                if (!_0x2e3c80?.size) {
                    throw new Error('no listener');
                }
                const _0xc45322 = _0x2e3c80.values().next().value;
                let _0xc5c11a = this.invokeListenerCallback(_0x5d3832.type, _0xc45322, _0x5d3832.payload, _0x6b316, _0x4e356c);
                if (_0x5d3832.void) {
                    return;
                }
                if (_0x4513be = _0xc5c11a instanceof Promise, _0xa9aea2) {
                    const _0x21da80 = !_0x4513be;
                    if (_0xa9aea2.payload.cached = _0x21da80, _0x21da80 && (_0xa9aea2.payload.result = _0xc5c11a), this.pushTask(_0xa9aea2, _0x6b316), _0x21da80) {
                        return;
                    }
                }
                _0x4513be && (_0xc5c11a = await _0xc5c11a);
                if (_0xc5c11a instanceof zs.TransferableResult) {
                    _0xbcc01d.transfer = _0xc5c11a.transferables;
                    _0xc5c11a = _0xc5c11a.value;
                }
                _0x4d7d37.result = _0xc5c11a;
                ;
            } catch (_0x433ace) {
                if (this.log.error('worker task error:', _0x433ace, _0x5bfe1a), _0x5d3832.void) {
                    return;
                }
                if (_0xa9aea2 && _0xa9aea2.payload.cached) {
                    _0xa9aea2.payload.error = _0x433ace;
                    this.pushTask(_0xa9aea2, _0x6b316);
                    ;
                    return;
                }
                _0x4d7d37.error = _0x433ace;
            }
            this.pushTask(_0xbcc01d, _0x6b316);
        };
        this.listenPorts = [];
        this.sendPorts = [];
        this.pingResolves = new Map();
        this.taskId = Math.random();
        this.awaiting = {};
        this.pending = new Map();
        this.log = Q('MP' + (_0x36b8bd ? '-' + _0x36b8bd : ''));
        this.debug = qa;
        this.heldLocks = new Map();
        this.requestedLocks = new Map();
        this.processTaskMap = {
            'result': this.processResultTask,
            'ack': this.processAckTask,
            'invoke': this.processInvokeTask,
            'ping': this.processPingTask,
            'pong': this.processPongTask,
            'close': this.processCloseTask,
            'lock': this.processLockTask,
            'batch': this.processBatchTask
        };
        ;
    }
    ['setOnPortDisconnect'](_0x2cbb2f) {
        ;
        this.onPortDisconnect = _0x2cbb2f;
    }
    ['attachPort'](_0x14264e) {
        ;
        this.attachListenPort(_0x14264e);
        this.attachSendPort(_0x14264e);
        ;
    }
    ['attachListenPort'](_0x28df74) {
        ;
        this.listenPorts.push(_0x28df74);
        _0x28df74.addEventListener('message', this.onMessage);
        ;
    }
    ['attachSendPort'](_0x210973) {
        ;
        if (this.log.warn('attaching send port'), _0x210973.start?.(), this.sendPorts.push(_0x210973), typeof window < 'u' && k1) {
            if ('locks' in navigator) {
                const _0x588950 = [
                    'lock',
                    If,
                    this.logSuffix || '',
                    Math.random() * 2147483647 | 0
                ].join('-');
                this.log.warn('created lock', _0x588950);
                const _0x310d40 = new Promise(_0x54409c => this.heldLocks.set(_0x210973, {
                    'resolve': _0x54409c,
                    'id': _0x588950
                })).then(() => this.heldLocks.delete(_0x210973));
                navigator.locks.request(_0x588950, () => (this.resendLockTask(_0x210973), _0x310d40));
            } else {
                window.addEventListener('beforeunload', () => {
                    const _0x21c928 = this.createTask('close', void 0);
                    this.postMessage(void 0, _0x21c928);
                });
            }
        }
        this.releasePending();
    }
    ['resendLockTask'](_0x4ad891) {
        const _0x29e265 = this.heldLocks.get(_0x4ad891);
        _0x29e265 && this.pushTask(this.createTask('lock', _0x29e265.id), _0x4ad891);
    }
    ['detachPort'](_0x3716b9) {
        ;
        this.log.warn('disconnecting port');
        xe(this.listenPorts, _0x3716b9);
        xe(this.sendPorts, _0x3716b9);
        _0x3716b9.removeEventListener?.('message', this.onMessage);
        _0x3716b9.close?.();
        this.onPortDisconnect?.(_0x3716b9);
        this.heldLocks.get(_0x3716b9)?.resolve();
        ;
        const _0x4c0501 = Ee('PORT_DISCONNECTED');
        for (const _0x5056fa in this.awaiting) {
            const _0x46a65e = this.awaiting[_0x5056fa];
            if (_0x46a65e.port === _0x3716b9) {
                _0x46a65e.reject(_0x4c0501);
                delete this.awaiting[_0x5056fa];
            }
        }
    }
    ['postMessage'](_0x597f31, _0xd7e4b9) {
        ;
        (Array.isArray(_0x597f31) ? _0x597f31 : _0x597f31 ? [_0x597f31] : this.sendPorts).forEach(_0x2b36c2 => {
            ;
            _0x2b36c2.postMessage(_0xd7e4b9, _0xd7e4b9.transfer);
        });
    }
    async ['releasePending']() {
        ;
        this.releasingPending || (this.releasingPending = true, await Promise.resolve(), this.debug && this.log.debug('releasing tasks, length:', this.pending.size), this.pending.forEach((_0x3f015d, _0x59c3c0) => {
            ;
            let _0x5aa569 = _0x3f015d;
            {
                let _0x3981ca;
                _0x5aa569 = [];
                _0x3f015d.forEach(_0x37efd8 => {
                    ;
                    _0x37efd8.transfer ? (_0x3981ca = void 0, _0x5aa569.push(_0x37efd8)) : (_0x3981ca || (_0x3981ca = this.createTask('batch', []), _0x5aa569.push(_0x3981ca)), _0x3981ca.payload.push(_0x37efd8));
                });
                ;
            }
            const _0x39e802 = _0x59c3c0 ? [_0x59c3c0] : this.sendPorts;
            _0x39e802.length && (_0x5aa569.forEach(_0x200a58 => {
                ;
                try {
                    this.postMessage(_0x39e802, _0x200a58);
                } catch (_0x12d1ae) {
                    this.log.error('postMessage error:', _0x12d1ae, _0x200a58, _0x39e802);
                }
            }), this.pending.delete(_0x59c3c0));
        }), this.debug && this.log.debug('released tasks'), this.releasingPending = false);
    }
    ['createTask'](_0x29a8a3, _0x160cce, _0x5c6222) {
        const _0x1cf326 = {};
        return _0x1cf326.type = _0x29a8a3, _0x1cf326.payload = _0x160cce, _0x1cf326.id = this.taskId++, _0x1cf326.transfer = _0x5c6222, _0x1cf326;
    }
    ['createInvokeTask'](_0xef0e3e, _0x506f92, _0x3fb8d4, _0x496d07, _0x3e05b3) {
        const _0x18934f = {};
        return _0x18934f.type = _0xef0e3e, _0x18934f.payload = _0x506f92, _0x18934f.withAck = _0x3fb8d4, _0x18934f.void = _0x496d07, this.createTask('invoke', _0x18934f, _0x3e05b3);
    }
    ['pushTask'](_0x3a8308, _0x502e69) {
        ;
        let _0x3e99fc = this.pending.get(_0x502e69);
        _0x3e99fc || this.pending.set(_0x502e69, _0x3e99fc = []);
        _0x3e99fc.push(_0x3a8308);
        this.releasePending();
        ;
    }
    ['invokeVoid'](_0x221abe, _0x6a6a83, _0x12af2, _0x5af916) {
        const _0x23532a = this.createInvokeTask(_0x221abe, _0x6a6a83, void 0, true, _0x5af916);
        this.pushTask(_0x23532a, _0x12af2);
    }
    ['invoke'](_0x580b3a, _0x4f10df, _0x355578, _0x54ff98, _0x16ab97) {
        ;
        this.debug && this.log.debug('start', _0x580b3a, _0x4f10df);
        let _0x31dd61;
        const _0x5301dd = new Promise((_0x547259, _0x52be11) => {
            ;
            _0x31dd61 = this.createInvokeTask(_0x580b3a, _0x4f10df, _0x355578, void 0, _0x16ab97);
            this.awaiting[_0x31dd61.id] = {
                'resolve': _0x547259,
                'reject': _0x52be11,
                'taskType': _0x580b3a,
                'port': _0x54ff98
            };
            this.pushTask(_0x31dd61, _0x54ff98);
            ;
        });
        if (bt) {
            _0x5301dd.finally(() => {
                clearInterval(_0x4021e7);
            });
            const _0x4021e7 = Mi.setInterval(() => {
                ;
                this.log.error('task still has no result', _0x31dd61, _0x54ff98);
            }, 60000);
        }
        return _0x5301dd;
    }
    ['invokeExceptSource'](_0x4396ed, _0x5d7915, _0x4ae016) {
        const _0x5ac88f = this.sendPorts.slice();
        xe(_0x5ac88f, _0x4ae016);
        _0x5ac88f.forEach(_0x58378d => {
            ;
            this.invokeVoid(_0x4396ed, _0x5d7915, _0x58378d);
        });
        ;
    }
    async ['invokeExceptSourceAsync'](_0x39aece, _0x36a66d, _0x1eb81e) {
        const _0xfdd07f = this.sendPorts.slice();
        xe(_0xfdd07f, _0x1eb81e);
        await Promise.all(_0xfdd07f.map(_0x2e3761 => this.invoke(_0x39aece, _0x36a66d, void 0, _0x2e3761)));
        ;
    }
}
(_0x577dac => {
    ;
    class _0x9a7280 {
        constructor(_0x358983, _0x37f8c1) {
            ;
            this.value = _0x358983;
            this.transferables = _0x37f8c1;
            ;
        }
    }
    _0x577dac.TransferableResult = _0x9a7280;
})(zs || (zs = {}));
const Ui = zs;
class ns extends Ui {
    constructor() {
        ;
        super('MTPROTO');
        ns.INSTANCE = this;
        N && (N.mtprotoMessagePort = this);
        ;
    }
    static ['getInstance']() {
        return this.INSTANCE;
    }
}
class F1 extends je {
    constructor() {
        ;
        super();
        this.myId = Bi;
        this.connectionStatus = {};
        this.premium = false;
        this.addEventListener('user_auth', ({id: _0x307406}) => {
            ;
            this.myId = _0x307406.toPeerId();
        });
        this.addEventListener('premium_toggle_private', ({
            isNew: _0x192aa7,
            isPremium: _0x2358f4
        }) => {
            ;
            this.premium = _0x2358f4;
            _0x192aa7 || this.dispatchEventSingle('premium_toggle', _0x2358f4);
            ;
        });
        this.addEventListener('connection_status_change', _0x327a6e => {
            ;
            this.connectionStatus[_0x327a6e.name] = _0x327a6e;
        });
        this.dispatchEvent = (_0x26c0cc, ..._0x42a01b) => {
            ;
            super.dispatchEvent(_0x26c0cc, ..._0x42a01b);
            ((async () => {
                const _0x5e1623 = this.managers ? await this.managers.apiManager.getAccountNumber() : void 0, _0x5d6714 = {
                        name: _0x26c0cc,
                        args: _0x42a01b,
                        accountNumber: _0x5e1623
                    };
                ;
                ;
                ;
                ns.getInstance().invokeVoid('event', _0x5d6714);
                ;
            })());
            ;
        };
        ;
    }
    ['getConnectionStatus']() {
        ;
        return this.connectionStatus;
    }
    ['getPremium']() {
        ;
        return this.premium;
    }
    ['getMyId']() {
        ;
        return this.myId;
    }
    ['dispatchEventSingle'](_0x43ea78, ..._0x3ed239) {
        ;
        super.dispatchEvent(_0x43ea78, ..._0x3ed239);
    }
}
const I = new F1();
N.rootScope = I;
function Rf(_0x4a1eae, _0xd69bb4, _0x25e41a) {
    const _0x2aa20c = _0x25e41a && new Set(_0x25e41a), _0x45263a = _0x2e17c8 => Object.keys(_0x2e17c8).filter(_0x3b9c56 => _0x2e17c8[_0x3b9c56] !== void 0), _0x4650fd = _0x25e41a ? _0x3ad77f => _0x45263a(_0x3ad77f).filter(_0x35948a => !_0x2aa20c.has(_0x35948a)) : _0x45263a, _0x2ec190 = typeof _0x4a1eae;
    return _0x4a1eae && _0xd69bb4 && _0x2ec190 === 'object' && _0x2ec190 === typeof _0xd69bb4 ? _0x4650fd(_0x4a1eae).length === _0x4650fd(_0xd69bb4).length && _0x4650fd(_0x4a1eae).every(_0x40ef52 => Rf(_0x4a1eae[_0x40ef52], _0xd69bb4[_0x40ef52], _0x25e41a)) : _0x4a1eae === _0xd69bb4;
}
function Hn(_0x5ad831, _0x45af50) {
    if (_0x45af50) {
        for (const _0x582881 in _0x45af50)
            _0x45af50[_0x582881] !== void 0 && (_0x5ad831[_0x582881] = _0x45af50[_0x582881]);
    }
    return _0x5ad831;
}
function an(_0x54e491) {
    ;
    return _0x54e491.charAt(0).toUpperCase() + _0x54e491.slice(1);
}
const P1 = new Set(['javascript:']);
function ji(_0x107acf) {
    ;
    if (!_0x107acf) {
        return null;
    }
    try {
        const _0x23e16b = new URL(_0x107acf).protocol;
        return P1.has(_0x23e16b) ? null : _0x23e16b;
    } catch {
        return null;
    }
}
const a0_0x4ddb4f = {};
a0_0x4ddb4f.Telegram = 'tg://search_hashtag?hashtag={1}';
a0_0x4ddb4f.Twitter = 'https://twitter.com/hashtag/{1}';
a0_0x4ddb4f.Instagram = 'https://instagram.com/explore/tags/{1}/';
a0_0x4ddb4f['Google Plus'] = 'https://plus.google.com/explore/{1}';
;
const a0_0x1e7a85 = {};
a0_0x1e7a85['`'] = 'messageEntityCode';
a0_0x1e7a85['``'] = 'messageEntityPre';
a0_0x1e7a85['**'] = 'messageEntityBold';
a0_0x1e7a85['__'] = 'messageEntityItalic';
a0_0x1e7a85['~~'] = 'messageEntityStrike';
a0_0x1e7a85['_-_'] = 'messageEntityUnderline';
a0_0x1e7a85['||'] = 'messageEntitySpoiler';
;
const Xa = '((?:\uD83D\uDC68\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68|\uD83D\uDC69‍\u2764️?‍\uD83D\uDC8B‍\uFFFD[\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFB‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDEF1\uD83C\uDFFC‍\uD83E\uDEF2\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDEF1\uD83C\uDFFD‍\uD83E\uDEF2\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFE‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFF‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68‍\u2764️?‍\uD83D\uDC68|\uD83D\uDC69‍\u2764️?‍\uFFFD[\uFFFD\uFFFD]|\uD83E\uDDD1‍\uD83E\uDD1D‍\uD83E\uDDD1|\uD83D\uDC6B\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC6C\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC6D\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC8F\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC91\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDD1D\uFFFD[\uFFFD-\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83E\uDD1D)|(?:\uFFFD[\uFFFD\uFFFD]|\uD83E\uDDD1)(?:\uFFFD[\uFFFD-\uFFFD])?‍(?:\u2695️?|\u2696️?|\u2708️?|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD])|(?:\uFFFD[\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD]|\u26F9)(?:(?:\uFFFD[\uFFFD-\uFFFD]|️?)‍[\u2640\u2642]️?)|(?:\uFFFD[\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD])(?:\uFFFD[\uFFFD-\uFFFD])?‍[\u2640\u2642]️?|(?:\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC68‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83C\uDFF3️?‍\u26A7️?|\uD83C\uDFF3️?‍\uD83C\uDF08|\uD83D\uDE36‍\uD83C\uDF2B️?|\u2764️?‍\uD83D\uDD25|\u2764️?‍\uD83E\uDE79|\uD83C\uDFF4‍\u2620️?|\uD83D\uDC15‍\uD83E\uDDBA|\uD83D\uDC3B‍\u2744️?|\uD83D\uDC41‍\uD83D\uDDE8|\uD83D\uDC68‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC6F‍\u2640️?|\uD83D\uDC6F‍\u2642️?|\uD83D\uDE2E‍\uD83D\uDCA8|\uD83D\uDE35‍\uD83D\uDCAB|\uD83E\uDD3C‍\u2640️?|\uD83E\uDD3C‍\u2642️?|\uD83E\uDDDE‍\u2640️?|\uD83E\uDDDE‍\u2642️?|\uD83E\uDDDF‍\u2640️?|\uD83E\uDDDF‍\u2642️?|\uD83D\uDC08‍\u2B1B)|[#*0-9]️??\u20E3|(?:[\xA9\xAE\u2122\u265F]️?)|(?:\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|[\u203C\u2049ℹ\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F8\u26FA\u26FD\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299])(?:️?|(?!︎))|(?:(?:\uFFFD[\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD]|[\u261D\u26F7\u26F9\u270C\u270D])(?:️?|(?!︎))|(?:\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|[\u270A\u270B]))(?:\uFFFD[\uFFFD-\uFFFD])?|(?:\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F|\uD83C\uDDE6\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDE7\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDE8\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDE9\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEA\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDEB\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEC\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83C\uDDED\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEE\uFFFD[\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDEF\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF0\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF1\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD]|\uD83C\uDDF2\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDF3\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF5\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF7\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF8\uFFFD[\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDF9\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFA\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFB\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFC\uFFFD[\uFFFD\uFFFD]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFE\uFFFD[\uFFFD\uFFFD]|\uD83C\uDDFF\uFFFD[\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|[\u23E9-\u23EC\u23F0\u23F3\u267E\u26CE\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\uE50A])|️)', Ms = 'a-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u00ff\\u0100-\\u024f\\u0253\\u0254\\u0256\\u0257\\u0259\\u025b\\u0263\\u0268\\u026f\\u0272\\u0289\\u028b\\u02bb\\u0300-\\u036f\\u1e00-\\u1eff\\u0400-\\u04ff\\u0500-\\u0527\\u2de0-\\u2dff\\ua640-\\ua69f\\u0591-\\u05bf\\u05c1-\\u05c2\\u05c4-\\u05c5\\u05c7\\u05d0-\\u05ea\\u05f0-\\u05f4\\ufb1d-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufb4f\\u0610-\\u061a\\u0620-\\u065f\\u066e-\\u06d3\\u06d5-\\u06dc\\u06de-\\u06e8\\u06ea-\\u06ef\\u06fa-\\u06fc\\u06ff\\u0750-\\u077f\\u08a0\\u08a2-\\u08ac\\u08e4-\\u08fe\\ufb50-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\u200c\\u0e01-\\u0e3a\\u0e40-\\u0e4e\\u1100-\\u11ff\\u3130-\\u3185\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF\\u3003\\u3005\\u303b\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uff9f\\uffa1-\\uffdc', _1 = '0-9_' + Ms, Br = '\xB7', lf = '[' + Ms + '0-9]', T1 = '((?:https?|ftp)://|mailto:)?', Qa = T1 + '(?:' + lf + '{1,64}(?::' + lf + '{0,64})?@)?(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}|' + lf + '[' + Ms + Br + '0-9-]{0,64}(?:\\.' + lf + '[' + Ms + Br + '0-9-]{0,64}){0,10}(?:\\.(xn--[0-9a-z]{2,16}|[' + Ms + ']{2,24})))(?::\\d{2,5})?(?:/(?:\\S{0,255}[^\\s.;,(\\[\\]{}<>"\'])?)?', Za = '[a-zA-Z\\d_]{5,32}', L1 = '(?:\\s|^)((?:(\\d{1,2}):(?:[0-5]?[0-9])|(?:\\d{1,2}|\\d{3,})):(?:[0-5][0-9]))(?:\\s|$)', x1 = '\\/([a-zA-Z\\d_]{1,32})(?:@(' + Za + '))?(\\b|$)', Ur = new RegExp('(^| )(@)(' + Za + ')|(' + Qa + ')|(\\n)|(' + Xa + ')|(^|[\\s\\(\\]])(#[' + _1 + ']{2,64})|(^|\\s)' + x1 + '|' + L1, 'i'), M1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Tm = /(^|\s|\n)(````?)([\s\S]+?)(````?)([\s\n\.,:?!;]|$)|(^|\s|\x01)(`|~~|\*\*|__|_-_|\|\|)([^\n]+?)\7([\x01\s\.,:?!;]|$)|@(\d+)\s*\((.+?)\)|(\[(.+?)\]\((.+?)\))/m, I1 = a0_0x4ddb4f, Wn = a0_0x1e7a85;
new Set(Object.values(Wn));
const Of = new Set([
        'messageEntityEmoji',
        'messageEntityLinebreak',
        'messageEntityCaret'
    ]), R1 = new Set(Of);
for (const s in Wn)
    Of.add(Wn[s]);
const O1 = /^\+\d+$/;
function on(_0x354730, _0x958a6f) {
    ;
    ji(_0x354730) || (_0x354730 = 'https://' + _0x354730);
    const _0x2178eb = { url: _0x354730 };
    ;
    const _0x9abc97 = _0x2178eb;
    let _0xed2fbb, _0x364ca2, _0xc64a61;
    if (_0xed2fbb = _0x354730.match(/^(?:https?:\/\/)?(?:(.+?)\.)?(?:(?:web|k|z|a)\.)?t(?:elegram)?\.me(?:\/(.+))?/)) {
        const _0x2626d9 = new URL(_0x354730);
        let _0x4611e7 = _0xed2fbb[1];
        _0x4611e7 && p1.has(_0xed2fbb[1]) && (_0x4611e7 = void 0);
        _0x4611e7 && (_0x2626d9.pathname = _0x4611e7 + (_0x2626d9.pathname === '/' ? '' : _0x2626d9.pathname));
        ;
        const _0x12adf5 = _0x2626d9.pathname.slice(1), _0x30bd28 = _0x12adf5.split('/');
        if (_0x30bd28[0] && _0x30bd28[0][0] === '$' && _0x30bd28[0].length > 1) {
            _0xc64a61 = 'invoice';
        } else {
            if (/^\+/.test(_0x12adf5) && !O1.test(_0x12adf5)) {
                _0xc64a61 = 'joinchat';
            } else {
                if (_0x30bd28[0]) {
                    switch (_0x30bd28[0]) {
                    case 'm':
                    case 'addlist':
                    case 'joinchat':
                    case 'addstickers':
                    case 'addemoji':
                    case 'voicechat':
                    case 'invoice':
                    case 'boost':
                    case 'giftcode':
                    case 'share':
                    case 'nft':
                        if (_0x30bd28.length !== 1 && !_0x4611e7) {
                            _0xc64a61 = _0x30bd28[0];
                            break;
                        }
                    default:
                        if (_0x30bd28.length <= 2 || _0x30bd28[1]?.match(/^\d+(?:\?(?:comment|thread)=\d+)?$/) || _0x30bd28[1] === 's') {
                            _0xc64a61 = 'im';
                            break;
                        }
                        break;
                    }
                }
            }
        }
    } else {
        _0x354730.match(/^(?:https?:\/\/)?telesco\.pe\/([^/?]+)\/(\d+)/) ? _0xc64a61 = 'im' : (_0x364ca2 = _0x354730.match(/tg:(?:\/\/)?(.+?)(?:\?|$)/)) && (_0xc64a61 = 'tg_' + _0x364ca2[1]);
    }
    return window[_0xc64a61] || (_0xc64a61 = void 0), _0x9abc97.onclick = _0xc64a61, _0x9abc97;
}
N && (N.wrapUrl = on);
function N1(_0x1704ef, _0x252d64) {
    ;
    tf(_0x1704ef);
    _0x252d64 === void 0 ? _0x1704ef.replaceChildren() : typeof _0x252d64 == 'string' ? _0x252d64 ? _0x1704ef.textContent = _0x252d64 : _0x1704ef.replaceChildren() : _0x1704ef.replaceChildren(_0x252d64);
    ;
}
function tf(_0x5cad79) {
    ;
    _0x5cad79.setAttribute('dir', 'auto');
}
function Lm() {
    return 'auto';
}
function Sf(_0x218ef4) {
    ;
    return _0x218ef4.target = '_blank', _0x218ef4.rel = 'noopener noreferrer', _0x218ef4;
}
const a0_0x58cf93 = {};
a0_0x58cf93.context = void 0;
a0_0x58cf93.registry = void 0;
;
const B1 = a0_0x58cf93, eo = (_0x344ab9, _0x71674f) => _0x344ab9 === _0x71674f, ie = Symbol('solid-proxy'), Gs = Symbol('solid-track'), Nf = { 'equals': eo };
let to = ao;
const a0_0x5c657e = {};
a0_0x5c657e.owned = null;
a0_0x5c657e.cleanups = null;
a0_0x5c657e.context = null;
a0_0x5c657e.owner = null;
;
const Ne = 1, Bf = 2, so = a0_0x5c657e, kn = {};
var W = null;
let Fn = null, U1 = null, z = null, ae = null, $e = null, cn = 0;
function vt(_0x366878, _0x2dcbb8) {
    const _0x4e9532 = z, _0x36b0d3 = W, _0x5a7540 = _0x366878.length === 0, _0x31e6ee = _0x2dcbb8 === void 0 ? _0x36b0d3 : _0x2dcbb8, _0x4a3307 = _0x5a7540 ? so : {
            'owned': null,
            'cleanups': null,
            'context': _0x31e6ee ? _0x31e6ee.context : null,
            'owner': _0x31e6ee
        }, _0x51f852 = _0x5a7540 ? _0x366878 : () => _0x366878(() => he(() => dn(_0x4a3307)));
    W = _0x4a3307;
    z = null;
    ;
    try {
        return Xe(_0x51f852, true);
    } finally {
        z = _0x4e9532;
        W = _0x36b0d3;
        ;
    }
}
function ke(_0x2db3c7, _0xa805fc) {
    ;
    _0xa805fc = _0xa805fc ? Object.assign({}, Nf, _0xa805fc) : Nf;
    const _0x1625a3 = {
        value: _0x2db3c7,
        observers: null,
        observerSlots: null,
        comparator: _0xa805fc.equals || void 0
    };
    ;
    ;
    ;
    ;
    ;
    const _0x7bc00c = _0x1625a3, _0x117c8b = _0x5b4a0f => (typeof _0x5b4a0f == 'function' && (_0x5b4a0f = _0x5b4a0f(_0x7bc00c.value)), ro(_0x7bc00c, _0x5b4a0f));
    return [
        io.bind(_0x7bc00c),
        _0x117c8b
    ];
}
function jr(_0x5233cf, _0x1e0b4d, _0x524a59) {
    const _0x59086f = ys(_0x5233cf, _0x1e0b4d, true, Ne);
    Ct(_0x59086f);
}
function Tt(_0x38edf3, _0x37a547, _0xb51201) {
    const _0x1fb487 = ys(_0x38edf3, _0x37a547, false, Ne);
    Ct(_0x1fb487);
}
function rt(_0x5a0074, _0x4904a0, _0x231111) {
    ;
    to = $1;
    const _0x46b202 = ys(_0x5a0074, _0x4904a0, false, Ne);
    (!_0x231111 || !_0x231111.render) && (_0x46b202.user = true);
    $e ? $e.push(_0x46b202) : Ct(_0x46b202);
    ;
}
function xm(_0x36557a, _0x3c54b7) {
    ;
    let _0x412dc0;
    const _0x1323b0 = ys(() => {
        _0x412dc0 ? _0x412dc0() : he(_0x36557a);
        _0x412dc0 = void 0;
        ;
    }, void 0, false, 0);
    return _0x1323b0.user = true, _0x4d9bdc => {
        _0x412dc0 = _0x4d9bdc;
        Ct(_0x1323b0);
        ;
    };
}
function Be(_0x1c6320, _0x5dea7f, _0x347a84) {
    ;
    _0x347a84 = _0x347a84 ? Object.assign({}, Nf, _0x347a84) : Nf;
    const _0x1896e3 = ys(_0x1c6320, _0x5dea7f, true, 0);
    return _0x1896e3.observers = null, _0x1896e3.observerSlots = null, _0x1896e3.comparator = _0x347a84.equals || void 0, Ct(_0x1896e3), io.bind(_0x1896e3);
}
function j1(_0x2e4f32) {
    ;
    return _0x2e4f32 && typeof _0x2e4f32 == 'object' && 'then' in _0x2e4f32;
}
function Mm(_0x3c08ce, _0x22ba5b, _0x1504b6) {
    ;
    let _0x4a90cb, _0x4d6be7, _0x1e3659;
    arguments.length === 2 && typeof _0x22ba5b == 'object' || arguments.length === 1 ? (_0x4a90cb = true, _0x4d6be7 = _0x3c08ce, _0x1e3659 = _0x22ba5b || {}) : (_0x4a90cb = _0x3c08ce, _0x4d6be7 = _0x22ba5b, _0x1e3659 = {});
    let _0x4d249a = null, _0x1821c2 = kn, _0x4f0b47 = false, _0x450fc2 = 'initialValue' in _0x1e3659, _0x538d09 = typeof _0x4a90cb == 'function' && Be(_0x4a90cb);
    const _0x3152f8 = { equals: false };
    ;
    const _0x5661c5 = new Set(), [_0x25da9e, _0x42a4d6] = (_0x1e3659.storage || ke)(_0x1e3659.initialValue), [_0x3e475f, _0x32c45c] = ke(void 0), [_0x12594e, _0x2b23b0] = ke(void 0, _0x3152f8), [_0x4feac7, _0x170459] = ke(_0x450fc2 ? 'ready' : 'unresolved');
    function _0x3aee70(_0x127231, _0x298f31, _0x11f260, _0x369048) {
        ;
        return _0x4d249a === _0x127231 && (_0x4d249a = null, _0x369048 !== void 0 && (_0x450fc2 = true), (_0x127231 === _0x1821c2 || _0x298f31 === _0x1821c2) && _0x1e3659.onHydrated && queueMicrotask(() => _0x1e3659.onHydrated(_0x369048, { 'value': _0x298f31 })), _0x1821c2 = kn, _0x319291(_0x298f31, _0x11f260)), _0x298f31;
    }
    function _0x319291(_0x4f5372, _0x5a9d57) {
        ;
        Xe(() => {
            ;
            _0x5a9d57 === void 0 && _0x42a4d6(() => _0x4f5372);
            _0x170459(_0x5a9d57 !== void 0 ? 'errored' : _0x450fc2 ? 'ready' : 'unresolved');
            _0x32c45c(_0x5a9d57);
            ;
            for (const _0xb8fc1a of _0x5661c5.keys())
                _0xb8fc1a.decrement();
            _0x5661c5.clear();
        }, false);
    }
    function _0x112d0f() {
        const _0x343af6 = z1, _0x181cb3 = _0x25da9e(), _0x507dd5 = _0x3e475f();
        if (_0x507dd5 !== void 0 && !_0x4d249a) {
            throw _0x507dd5;
        }
        return z && !z.user && _0x343af6 && jr(() => {
            ;
            _0x12594e();
            _0x4d249a && (_0x343af6.resolved || _0x5661c5.has(_0x343af6) || (_0x343af6.increment(), _0x5661c5.add(_0x343af6)));
            ;
        }), _0x181cb3;
    }
    function _0x2af0da(_0x48a091 = true) {
        ;
        if (_0x48a091 !== false && _0x4f0b47) {
            return;
        }
        _0x4f0b47 = false;
        const _0x5f0b60 = _0x538d09 ? _0x538d09() : _0x4a90cb;
        if (_0x5f0b60 == null || _0x5f0b60 === false) {
            _0x3aee70(_0x4d249a, he(_0x25da9e));
            return;
        }
        const _0x27ec54 = _0x1821c2 !== kn ? _0x1821c2 : he(() => _0x4d6be7(_0x5f0b60, {
            'value': _0x25da9e(),
            'refetching': _0x48a091
        }));
        return j1(_0x27ec54) ? (_0x4d249a = _0x27ec54, 'value' in _0x27ec54 ? (_0x27ec54.status === 'success' ? _0x3aee70(_0x4d249a, _0x27ec54.value, void 0, _0x5f0b60) : _0x3aee70(_0x4d249a, void 0, void 0, _0x5f0b60), _0x27ec54) : (_0x4f0b47 = true, queueMicrotask(() => _0x4f0b47 = false), Xe(() => {
            ;
            _0x170459(_0x450fc2 ? 'refreshing' : 'pending');
            _0x2b23b0();
            ;
        }, false), _0x27ec54.then(_0x280a62 => _0x3aee70(_0x27ec54, _0x280a62, void 0, _0x5f0b60), _0x3112e4 => _0x3aee70(_0x27ec54, void 0, co(_0x3112e4), _0x5f0b60)))) : (_0x3aee70(_0x4d249a, _0x27ec54, void 0, _0x5f0b60), _0x27ec54);
    }
    return Object.defineProperties(_0x112d0f, {
        'state': { 'get': () => _0x4feac7() },
        'error': { 'get': () => _0x3e475f() },
        'loading': {
            'get'() {
                const _0x5bf2cb = _0x4feac7();
                return _0x5bf2cb === 'pending' || _0x5bf2cb === 'refreshing';
            }
        },
        'latest': {
            'get'() {
                if (!_0x450fc2) {
                    return _0x112d0f();
                }
                const _0x1dfe51 = _0x3e475f();
                if (_0x1dfe51 && !_0x4d249a) {
                    throw _0x1dfe51;
                }
                return _0x25da9e();
            }
        }
    }), _0x538d09 ? jr(() => _0x2af0da(false)) : _0x2af0da(false), [
        _0x112d0f,
        {
            'refetch': _0x2af0da,
            'mutate': _0x42a4d6
        }
    ];
}
function Im(_0x24c50e, _0x4f19fe = eo, _0x3a2969) {
    const _0x15676a = new Map(), _0xcb3471 = ys(_0xbc3f33 => {
            const _0x250819 = _0x24c50e();
            for (const [_0x19708a, _0x5e3ba8] of _0x15676a.entries())
                if (_0x4f19fe(_0x19708a, _0x250819) !== _0x4f19fe(_0x19708a, _0xbc3f33)) {
                    for (const _0x4c859e of _0x5e3ba8.values())
                        _0x4c859e.state = Ne, _0x4c859e.pure ? ae.push(_0x4c859e) : $e.push(_0x4c859e);
                }
            return _0x250819;
        }, void 0, true, Ne);
    return Ct(_0xcb3471), _0x317560 => {
        const _0x44c2af = z;
        if (_0x44c2af) {
            let _0x507ab6;
            (_0x507ab6 = _0x15676a.get(_0x317560)) ? _0x507ab6.add(_0x44c2af) : _0x15676a.set(_0x317560, _0x507ab6 = new Set([_0x44c2af]));
            is(() => {
                ;
                _0x507ab6.delete(_0x44c2af);
                !_0x507ab6.size && _0x15676a.delete(_0x317560);
                ;
            });
            ;
        }
        return _0x4f19fe(_0x317560, _0xcb3471.value);
    };
}
function Zt(_0x2efa14) {
    return Xe(_0x2efa14, false);
}
function he(_0x30759e) {
    if (z === null) {
        return _0x30759e();
    }
    const _0x3c9b67 = z;
    z = null;
    try {
        return _0x30759e();
    } finally {
        z = _0x3c9b67;
    }
}
function Is(_0x487963, _0xca26cc, _0x4ee46a) {
    const _0x1b2647 = Array.isArray(_0x487963);
    let _0x31357f, _0x3cf5c9 = _0x4ee46a && _0x4ee46a.defer;
    return _0x1c2993 => {
        let _0x266775;
        if (_0x1b2647) {
            _0x266775 = Array(_0x487963.length);
            for (let _0x8a932f = 0; _0x8a932f < _0x487963.length; _0x8a932f++) {
                _0x266775[_0x8a932f] = _0x487963[_0x8a932f]();
            }
        } else {
            _0x266775 = _0x487963();
        }
        if (_0x3cf5c9) {
            return _0x3cf5c9 = false, _0x1c2993;
        }
        const _0x226028 = he(() => _0xca26cc(_0x266775, _0x31357f, _0x1c2993));
        return _0x31357f = _0x266775, _0x226028;
    };
}
function Rm(_0x46e26d) {
    rt(() => he(_0x46e26d));
}
function is(_0x577466) {
    ;
    return W === null || (W.cleanups === null ? W.cleanups = [_0x577466] : W.cleanups.push(_0x577466)), _0x577466;
}
function qs() {
    return z;
}
function fo() {
    return W;
}
function no(_0x40e713, _0x2138fe) {
    const _0x148b36 = W, _0xe2cea2 = z;
    W = _0x40e713;
    z = null;
    ;
    try {
        return Xe(_0x2138fe, true);
    } catch (_0x572cce) {
        Wi(_0x572cce);
    } finally {
        W = _0x148b36;
        z = _0xe2cea2;
        ;
    }
}
function H1(_0x44e875) {
    const _0x1c2198 = z, _0x1d75e7 = W;
    return Promise.resolve().then(() => {
        ;
        z = _0x1c2198;
        W = _0x1d75e7;
        ;
        let _0x1d5e65;
        return Xe(_0x44e875, false), z = W = null, _0x1d5e65 ? _0x1d5e65.done : void 0;
    });
}
const [W1, Om] = ke(false);
function Nm() {
    return [
        W1,
        H1
    ];
}
function Hi(_0x7d957e, _0x40a4c1) {
    const _0x40cb97 = Symbol('context');
    return {
        'id': _0x40cb97,
        'Provider': Y1(_0x40cb97),
        'defaultValue': _0x7d957e
    };
}
function Uf(_0x21cdbe) {
    ;
    return W && W.context && W.context[_0x21cdbe.id] !== void 0 ? W.context[_0x21cdbe.id] : _0x21cdbe.defaultValue;
}
function V1(_0x3b1daf) {
    const _0x209ebf = Be(_0x3b1daf), _0x3a4778 = Be(() => Vn(_0x209ebf()));
    return _0x3a4778.toArray = () => {
        const _0x4ae683 = _0x3a4778();
        return Array.isArray(_0x4ae683) ? _0x4ae683 : _0x4ae683 != null ? [_0x4ae683] : [];
    }, _0x3a4778;
}
let z1;
function io() {
    ;
    if (this.sources && this.state) {
        if (this.state === Ne) {
            Ct(this);
        } else {
            const _0x20406d = ae;
            ae = null;
            Xe(() => Hf(this), false);
            ae = _0x20406d;
            ;
        }
    }
    if (z) {
        const _0x420221 = this.observers ? this.observers.length : 0;
        z.sources ? (z.sources.push(this), z.sourceSlots.push(_0x420221)) : (z.sources = [this], z.sourceSlots = [_0x420221]);
        this.observers ? (this.observers.push(z), this.observerSlots.push(z.sources.length - 1)) : (this.observers = [z], this.observerSlots = [z.sources.length - 1]);
        ;
    }
    return this.value;
}
function ro(_0x192d3c, _0x2a0890, _0x1b9457) {
    ;
    let _0x2764cb = _0x192d3c.value;
    return (!_0x192d3c.comparator || !_0x192d3c.comparator(_0x2764cb, _0x2a0890)) && (_0x192d3c.value = _0x2a0890, _0x192d3c.observers && _0x192d3c.observers.length && Xe(() => {
        ;
        for (let _0x31a181 = 0; _0x31a181 < _0x192d3c.observers.length; _0x31a181 += 1) {
            const _0x422ad3 = _0x192d3c.observers[_0x31a181], _0x314a58 = Fn && Fn.running;
            _0x314a58 && Fn.disposed.has(_0x422ad3);
            (_0x314a58 ? !_0x422ad3.tState : !_0x422ad3.state) && (_0x422ad3.pure ? ae.push(_0x422ad3) : $e.push(_0x422ad3), _0x422ad3.observers && oo(_0x422ad3));
            _0x314a58 || (_0x422ad3.state = Ne);
            ;
        }
        if (ae.length > 1000000) {
            throw ae = [], new Error();
        }
    }, false)), _0x2a0890;
}
function Ct(_0x45e3d7) {
    if (!_0x45e3d7.fn) {
        return;
    }
    dn(_0x45e3d7);
    const _0x15cfab = cn;
    G1(_0x45e3d7, _0x45e3d7.value, _0x15cfab);
}
function G1(_0x2417d3, _0x46d7ff, _0x3c17d9) {
    ;
    let _0x13073d;
    const _0xb2473f = W, _0x442da3 = z;
    z = W = _0x2417d3;
    try {
        _0x13073d = _0x2417d3.fn(_0x46d7ff);
    } catch (_0x2372b7) {
        return _0x2417d3.pure && (_0x2417d3.state = Ne, _0x2417d3.owned && _0x2417d3.owned.forEach(dn), _0x2417d3.owned = null), _0x2417d3.updatedAt = _0x3c17d9 + 1, Wi(_0x2372b7);
    } finally {
        z = _0x442da3;
        W = _0xb2473f;
        ;
    }
    (!_0x2417d3.updatedAt || _0x2417d3.updatedAt <= _0x3c17d9) && (_0x2417d3.updatedAt != null && 'observers' in _0x2417d3 ? ro(_0x2417d3, _0x13073d) : _0x2417d3.value = _0x13073d, _0x2417d3.updatedAt = _0x3c17d9);
}
function ys(_0x1a66f7, _0x50a543, _0x1f74a1, _0xf71c43 = Ne, _0x340f7a) {
    const _0x5c7efc = {
        fn: _0x1a66f7,
        state: _0xf71c43,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: _0x50a543,
        owner: W,
        context: W ? W.context : null,
        pure: _0x1f74a1
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x50c71c = _0x5c7efc;
    return W === null || W !== so && (W.owned ? W.owned.push(_0x50c71c) : W.owned = [_0x50c71c]), _0x50c71c;
}
function jf(_0xe7b45d) {
    ;
    if (_0xe7b45d.state === 0) {
        return;
    }
    if (_0xe7b45d.state === Bf) {
        return Hf(_0xe7b45d);
    }
    if (_0xe7b45d.suspense && he(_0xe7b45d.suspense.inFallback)) {
        return _0xe7b45d.suspense.effects.push(_0xe7b45d);
    }
    const _0x4e3ffe = [_0xe7b45d];
    for (; (_0xe7b45d = _0xe7b45d.owner) && (!_0xe7b45d.updatedAt || _0xe7b45d.updatedAt < cn);) {
        _0xe7b45d.state && _0x4e3ffe.push(_0xe7b45d);
    }
    for (let _0x350f73 = _0x4e3ffe.length - 1; _0x350f73 >= 0; _0x350f73--) {
        if (_0xe7b45d = _0x4e3ffe[_0x350f73], _0xe7b45d.state === Ne) {
            Ct(_0xe7b45d);
        } else {
            if (_0xe7b45d.state === Bf) {
                const _0x4bf051 = ae;
                ae = null;
                Xe(() => Hf(_0xe7b45d, _0x4e3ffe[0]), false);
                ae = _0x4bf051;
                ;
            }
        }
    }
}
function Xe(_0x57725f, _0x2f24ff) {
    ;
    if (ae) {
        return _0x57725f();
    }
    let _0x186c3e = false;
    _0x2f24ff || (ae = []);
    $e ? _0x186c3e = true : $e = [];
    cn++;
    ;
    try {
        const _0x30c0d6 = _0x57725f();
        return q1(_0x186c3e), _0x30c0d6;
    } catch (_0x2c629d) {
        _0x186c3e || ($e = null);
        ae = null;
        Wi(_0x2c629d);
        ;
    }
}
function q1(_0xf0ac60) {
    if (ae && (ao(ae), ae = null), _0xf0ac60) {
        return;
    }
    const _0x3f0456 = $e;
    $e = null;
    _0x3f0456.length && Xe(() => to(_0x3f0456), false);
    ;
}
function ao(_0x2823bf) {
    ;
    for (let _0x3a9a6e = 0; _0x3a9a6e < _0x2823bf.length; _0x3a9a6e++) {
        jf(_0x2823bf[_0x3a9a6e]);
    }
}
function $1(_0x5ccf01) {
    ;
    let _0x2d70e8, _0x32300c = 0;
    for (_0x2d70e8 = 0; _0x2d70e8 < _0x5ccf01.length; _0x2d70e8++) {
        const _0x4035a4 = _0x5ccf01[_0x2d70e8];
        _0x4035a4.user ? _0x5ccf01[_0x32300c++] = _0x4035a4 : jf(_0x4035a4);
    }
    for (_0x2d70e8 = 0; _0x2d70e8 < _0x32300c; _0x2d70e8++) {
        jf(_0x5ccf01[_0x2d70e8]);
    }
}
function Hf(_0x52df5d, _0x45c114) {
    ;
    _0x52df5d.state = 0;
    for (let _0x7c73f3 = 0; _0x7c73f3 < _0x52df5d.sources.length; _0x7c73f3 += 1) {
        const _0x2e2b99 = _0x52df5d.sources[_0x7c73f3];
        if (_0x2e2b99.sources) {
            const _0x17ccbe = _0x2e2b99.state;
            _0x17ccbe === Ne ? _0x2e2b99 !== _0x45c114 && (!_0x2e2b99.updatedAt || _0x2e2b99.updatedAt < cn) && jf(_0x2e2b99) : _0x17ccbe === Bf && Hf(_0x2e2b99, _0x45c114);
        }
    }
}
function oo(_0x5aff43) {
    ;
    for (let _0x507791 = 0; _0x507791 < _0x5aff43.observers.length; _0x507791 += 1) {
        const _0x2838d6 = _0x5aff43.observers[_0x507791];
        _0x2838d6.state || (_0x2838d6.state = Bf, _0x2838d6.pure ? ae.push(_0x2838d6) : $e.push(_0x2838d6), _0x2838d6.observers && oo(_0x2838d6));
    }
}
function dn(_0x2ac1d4) {
    ;
    let _0x14c4ca;
    if (_0x2ac1d4.sources) {
        for (; _0x2ac1d4.sources.length;) {
            const _0xa351fb = _0x2ac1d4.sources.pop(), _0x1aa683 = _0x2ac1d4.sourceSlots.pop(), _0x1b1d47 = _0xa351fb.observers;
            if (_0x1b1d47 && _0x1b1d47.length) {
                const _0x2afb1b = _0x1b1d47.pop(), _0x2c8b5c = _0xa351fb.observerSlots.pop();
                if (_0x1aa683 < _0x1b1d47.length) {
                    _0x2afb1b.sourceSlots[_0x2c8b5c] = _0x1aa683;
                    _0x1b1d47[_0x1aa683] = _0x2afb1b;
                    _0xa351fb.observerSlots[_0x1aa683] = _0x2c8b5c;
                }
            }
        }
    }
    if (_0x2ac1d4.owned) {
        for (_0x14c4ca = _0x2ac1d4.owned.length - 1; _0x14c4ca >= 0; _0x14c4ca--) {
            dn(_0x2ac1d4.owned[_0x14c4ca]);
        }
        _0x2ac1d4.owned = null;
    }
    if (_0x2ac1d4.cleanups) {
        for (_0x14c4ca = _0x2ac1d4.cleanups.length - 1; _0x14c4ca >= 0; _0x14c4ca--) {
            _0x2ac1d4.cleanups[_0x14c4ca]();
        }
        _0x2ac1d4.cleanups = null;
    }
    _0x2ac1d4.state = 0;
}
function co(_0x475ee0) {
    ;
    return _0x475ee0 instanceof Error ? _0x475ee0 : new Error(typeof _0x475ee0 == 'string' ? _0x475ee0 : 'Unknown error', { 'cause': _0x475ee0 });
}
function Wi(_0x2a0bce, _0x4ad445 = W) {
    const _0x3f9a98 = co(_0x2a0bce);
}
function Vn(_0x36d64b) {
    ;
    if (typeof _0x36d64b == 'function' && !_0x36d64b.length) {
        return Vn(_0x36d64b());
    }
    if (Array.isArray(_0x36d64b)) {
        const _0x1123fb = [];
        for (let _0x506595 = 0; _0x506595 < _0x36d64b.length; _0x506595++) {
            const _0x675651 = Vn(_0x36d64b[_0x506595]);
            Array.isArray(_0x675651) ? _0x1123fb.push.apply(_0x1123fb, _0x675651) : _0x1123fb.push(_0x675651);
        }
        return _0x1123fb;
    }
    return _0x36d64b;
}
function Y1(_0x47716f, _0x43ccf8) {
    return function (_0x19f572) {
        ;
        let _0x276f6c;
        return Tt(() => _0x276f6c = he(() => (W.context = {
            ...W.context,
            [_0x47716f]: _0x19f572.value
        }, V1(() => _0x19f572.children))), void 0), _0x276f6c;
    };
}
const K1 = Symbol('fallback');
function Hr(_0x340a0d) {
    ;
    for (let _0xd2afaf = 0; _0xd2afaf < _0x340a0d.length; _0xd2afaf++) {
        _0x340a0d[_0xd2afaf]();
    }
}
function J1(_0x545f91, _0x442a86, _0x4bd194 = {}) {
    ;
    let _0x37b425 = [], _0x1ff309 = [], _0x1c7542 = [], _0x2609fb = 0, _0x4aad47 = _0x442a86.length > 1 ? [] : null;
    return is(() => Hr(_0x1c7542)), () => {
        ;
        let _0x3ae5b9 = _0x545f91() || [], _0x298de6, _0x229956;
        return _0x3ae5b9[Gs], he(() => {
            ;
            let _0x474b29 = _0x3ae5b9.length, _0x5c643b, _0x24ecc8, _0x2c7b94, _0x285586, _0x38cd79, _0x47d3b7, _0xe9389c, _0x54b096, _0x23f112;
            if (_0x474b29 === 0) {
                if (_0x2609fb !== 0) {
                    Hr(_0x1c7542);
                    _0x1c7542 = [];
                    _0x37b425 = [];
                    _0x1ff309 = [];
                    _0x2609fb = 0;
                    _0x4aad47 && (_0x4aad47 = []);
                }
                _0x4bd194.fallback && (_0x37b425 = [K1], _0x1ff309[0] = vt(_0x165e9f => (_0x1c7542[0] = _0x165e9f, _0x4bd194.fallback())), _0x2609fb = 1);
                ;
            } else {
                if (_0x2609fb === 0) {
                    for (_0x1ff309 = new Array(_0x474b29), _0x229956 = 0; _0x229956 < _0x474b29; _0x229956++) {
                        _0x37b425[_0x229956] = _0x3ae5b9[_0x229956];
                        _0x1ff309[_0x229956] = vt(_0x1cfa33);
                        ;
                    }
                    _0x2609fb = _0x474b29;
                } else {
                    for (_0x2c7b94 = new Array(_0x474b29), _0x285586 = new Array(_0x474b29), _0x4aad47 && (_0x38cd79 = new Array(_0x474b29)), _0x47d3b7 = 0, _0xe9389c = Math.min(_0x2609fb, _0x474b29); _0x47d3b7 < _0xe9389c && _0x37b425[_0x47d3b7] === _0x3ae5b9[_0x47d3b7]; _0x47d3b7++) {
                        ;
                    }
                    for (_0xe9389c = _0x2609fb - 1, _0x54b096 = _0x474b29 - 1; _0xe9389c >= _0x47d3b7 && _0x54b096 >= _0x47d3b7 && _0x37b425[_0xe9389c] === _0x3ae5b9[_0x54b096]; _0xe9389c--, _0x54b096--) {
                        _0x2c7b94[_0x54b096] = _0x1ff309[_0xe9389c];
                        _0x285586[_0x54b096] = _0x1c7542[_0xe9389c];
                        _0x4aad47 && (_0x38cd79[_0x54b096] = _0x4aad47[_0xe9389c]);
                        ;
                    }
                    for (_0x5c643b = new Map(), _0x24ecc8 = new Array(_0x54b096 + 1), _0x229956 = _0x54b096; _0x229956 >= _0x47d3b7; _0x229956--) {
                        _0x23f112 = _0x3ae5b9[_0x229956];
                        _0x298de6 = _0x5c643b.get(_0x23f112);
                        _0x24ecc8[_0x229956] = _0x298de6 === void 0 ? -1 : _0x298de6;
                        _0x5c643b.set(_0x23f112, _0x229956);
                        ;
                    }
                    for (_0x298de6 = _0x47d3b7; _0x298de6 <= _0xe9389c; _0x298de6++) {
                        _0x23f112 = _0x37b425[_0x298de6];
                        _0x229956 = _0x5c643b.get(_0x23f112);
                        _0x229956 !== void 0 && _0x229956 !== -1 ? (_0x2c7b94[_0x229956] = _0x1ff309[_0x298de6], _0x285586[_0x229956] = _0x1c7542[_0x298de6], _0x4aad47 && (_0x38cd79[_0x229956] = _0x4aad47[_0x298de6]), _0x229956 = _0x24ecc8[_0x229956], _0x5c643b.set(_0x23f112, _0x229956)) : _0x1c7542[_0x298de6]();
                        ;
                    }
                    for (_0x229956 = _0x47d3b7; _0x229956 < _0x474b29; _0x229956++) {
                        _0x229956 in _0x2c7b94 ? (_0x1ff309[_0x229956] = _0x2c7b94[_0x229956], _0x1c7542[_0x229956] = _0x285586[_0x229956], _0x4aad47 && (_0x4aad47[_0x229956] = _0x38cd79[_0x229956], _0x4aad47[_0x229956](_0x229956))) : _0x1ff309[_0x229956] = vt(_0x1cfa33);
                    }
                    _0x1ff309 = _0x1ff309.slice(0, _0x2609fb = _0x474b29);
                    _0x37b425 = _0x3ae5b9.slice(0);
                    ;
                }
            }
            return _0x1ff309;
        });
        function _0x1cfa33(_0x31d0a5) {
            if (_0x1c7542[_0x229956] = _0x31d0a5, _0x4aad47) {
                const [_0x3a222f, _0x63d278] = ke(_0x229956);
                return _0x4aad47[_0x229956] = _0x63d278, _0x442a86(_0x3ae5b9[_0x229956], _0x3a222f);
            }
            return _0x442a86(_0x3ae5b9[_0x229956]);
        }
    };
}
function zn(_0x4e9301, _0x4af74f) {
    return he(() => _0x4e9301(_0x4af74f || {}));
}
function uf() {
    return true;
}
const Gn = {
    'get'(_0x1ed4f6, _0x7f8d29, _0x212058) {
        return _0x7f8d29 === ie ? _0x212058 : _0x1ed4f6.get(_0x7f8d29);
    },
    'has'(_0xa3e70d, _0x165c69) {
        ;
        return _0x165c69 === ie ? true : _0xa3e70d.has(_0x165c69);
    },
    'set': uf,
    'deleteProperty': uf,
    'getOwnPropertyDescriptor'(_0x2f33b7, _0x258b54) {
        return {
            'configurable': true,
            'enumerable': true,
            'get'() {
                ;
                return _0x2f33b7.get(_0x258b54);
            },
            'set': uf,
            'deleteProperty': uf
        };
    },
    'ownKeys'(_0x4f5bd6) {
        ;
        return _0x4f5bd6.keys();
    }
};
function Pn(_0x1449d6) {
    ;
    return (_0x1449d6 = typeof _0x1449d6 == 'function' ? _0x1449d6() : _0x1449d6) ? _0x1449d6 : {};
}
function X1() {
    ;
    for (let _0x347d7a = 0, _0x545078 = this.length; _0x347d7a < _0x545078; ++_0x347d7a) {
        const _0x28e737 = this[_0x347d7a]();
        if (_0x28e737 !== void 0) {
            return _0x28e737;
        }
    }
}
function Q1(..._0xb140bd) {
    ;
    let _0x4daa3c = false;
    for (let _0x212879 = 0; _0x212879 < _0xb140bd.length; _0x212879++) {
        const _0x4397e2 = _0xb140bd[_0x212879];
        _0x4daa3c = _0x4daa3c || !!_0x4397e2 && ie in _0x4397e2;
        _0xb140bd[_0x212879] = typeof _0x4397e2 == 'function' ? (_0x4daa3c = true, Be(_0x4397e2)) : _0x4397e2;
        ;
    }
    if (_0x4daa3c) {
        return new Proxy({
            'get'(_0x4efb76) {
                ;
                for (let _0x593b83 = _0xb140bd.length - 1; _0x593b83 >= 0; _0x593b83--) {
                    const _0x413129 = Pn(_0xb140bd[_0x593b83])[_0x4efb76];
                    if (_0x413129 !== void 0) {
                        return _0x413129;
                    }
                }
            },
            'has'(_0x178eda) {
                ;
                for (let _0x4887d3 = _0xb140bd.length - 1; _0x4887d3 >= 0; _0x4887d3--) {
                    if (_0x178eda in Pn(_0xb140bd[_0x4887d3])) {
                        return true;
                    }
                }
                return false;
            },
            'keys'() {
                const _0x4a6928 = [];
                for (let _0x1396a2 = 0; _0x1396a2 < _0xb140bd.length; _0x1396a2++) {
                    _0x4a6928.push(...Object.keys(Pn(_0xb140bd[_0x1396a2])));
                }
                return [...new Set(_0x4a6928)];
            }
        }, Gn);
    }
    const _0x2ce4b2 = {}, _0x47da8a = Object.create(null);
    for (let _0x358ab4 = _0xb140bd.length - 1; _0x358ab4 >= 0; _0x358ab4--) {
        const _0x254c4c = _0xb140bd[_0x358ab4];
        if (!_0x254c4c) {
            continue;
        }
        const _0x4c9a4e = Object.getOwnPropertyNames(_0x254c4c);
        for (let _0x42a612 = _0x4c9a4e.length - 1; _0x42a612 >= 0; _0x42a612--) {
            const _0x22da79 = _0x4c9a4e[_0x42a612];
            if (_0x22da79 === '__proto__' || _0x22da79 === 'constructor') {
                continue;
            }
            const _0x1a0853 = Object.getOwnPropertyDescriptor(_0x254c4c, _0x22da79);
            if (!_0x47da8a[_0x22da79]) {
                _0x47da8a[_0x22da79] = _0x1a0853.get ? {
                    'enumerable': true,
                    'configurable': true,
                    'get': X1.bind(_0x2ce4b2[_0x22da79] = [_0x1a0853.get.bind(_0x254c4c)])
                } : _0x1a0853.value !== void 0 ? _0x1a0853 : void 0;
            } else {
                const _0x27abdd = _0x2ce4b2[_0x22da79];
                _0x27abdd && (_0x1a0853.get ? _0x27abdd.push(_0x1a0853.get.bind(_0x254c4c)) : _0x1a0853.value !== void 0 && _0x27abdd.push(() => _0x1a0853.value));
            }
        }
    }
    const _0x49a4ff = {}, _0x3c6f22 = Object.keys(_0x47da8a);
    for (let _0x390d80 = _0x3c6f22.length - 1; _0x390d80 >= 0; _0x390d80--) {
        const _0x3d694a = _0x3c6f22[_0x390d80], _0x4bed42 = _0x47da8a[_0x3d694a];
        _0x4bed42 && _0x4bed42.get ? Object.defineProperty(_0x49a4ff, _0x3d694a, _0x4bed42) : _0x49a4ff[_0x3d694a] = _0x4bed42 ? _0x4bed42.value : void 0;
    }
    return _0x49a4ff;
}
function lo(_0x477f59, ..._0x365c5d) {
    ;
    if (ie in _0x477f59) {
        const _0x2f8261 = new Set(_0x365c5d.length > 1 ? _0x365c5d.flat() : _0x365c5d[0]), _0x1950a1 = _0x365c5d.map(_0x3a4e16 => new Proxy({
                'get'(_0x2fc0df) {
                    ;
                    return _0x3a4e16.includes(_0x2fc0df) ? _0x477f59[_0x2fc0df] : void 0;
                },
                'has'(_0x1a1639) {
                    ;
                    return _0x3a4e16.includes(_0x1a1639) && _0x1a1639 in _0x477f59;
                },
                'keys'() {
                    ;
                    return _0x3a4e16.filter(_0x4fbe14 => _0x4fbe14 in _0x477f59);
                }
            }, Gn));
        return _0x1950a1.push(new Proxy({
            'get'(_0x3e35f1) {
                ;
                return _0x2f8261.has(_0x3e35f1) ? void 0 : _0x477f59[_0x3e35f1];
            },
            'has'(_0x472f52) {
                ;
                return _0x2f8261.has(_0x472f52) ? false : _0x472f52 in _0x477f59;
            },
            'keys'() {
                ;
                return Object.keys(_0x477f59).filter(_0x1f7d54 => !_0x2f8261.has(_0x1f7d54));
            }
        }, Gn)), _0x1950a1;
    }
    const _0x1c206a = {}, _0x1729a0 = _0x365c5d.map(() => ({}));
    for (const _0x56edd1 of Object.getOwnPropertyNames(_0x477f59)) {
        const _0x4d2137 = Object.getOwnPropertyDescriptor(_0x477f59, _0x56edd1), _0x498c14 = !_0x4d2137.get && !_0x4d2137.set && _0x4d2137.enumerable && _0x4d2137.writable && _0x4d2137.configurable;
        let _0x2b1a7b = false, _0x3204d4 = 0;
        for (const _0x2861f0 of _0x365c5d)
            _0x2861f0.includes(_0x56edd1) && (_0x2b1a7b = true, _0x498c14 ? _0x1729a0[_0x3204d4][_0x56edd1] = _0x4d2137.value : Object.defineProperty(_0x1729a0[_0x3204d4], _0x56edd1, _0x4d2137)), ++_0x3204d4;
        _0x2b1a7b || (_0x498c14 ? _0x1c206a[_0x56edd1] = _0x4d2137.value : Object.defineProperty(_0x1c206a, _0x56edd1, _0x4d2137));
    }
    return [
        ..._0x1729a0,
        _0x1c206a
    ];
}
const Z1 = _0x534e72 => 'Stale read from <' + _0x534e72 + '>.';
function Bm(_0x53e7b8) {
    const _0x12f48b = 'fallback' in _0x53e7b8 && { 'fallback': () => _0x53e7b8.fallback };
    return Be(J1(() => _0x53e7b8.each, _0x53e7b8.children, _0x12f48b || void 0));
}
function Um(_0x1a7267) {
    const _0x199ff8 = _0x1a7267.keyed, _0x492658 = Be(() => _0x1a7267.when, void 0, { 'equals': (_0x2ea585, _0x12c3f5) => _0x199ff8 ? _0x2ea585 === _0x12c3f5 : !_0x2ea585 == !_0x12c3f5 });
    return Be(() => {
        const _0x42ebc4 = _0x492658();
        if (_0x42ebc4) {
            const _0x184935 = _0x1a7267.children;
            return typeof _0x184935 == 'function' && _0x184935.length > 0 ? he(() => _0x184935(_0x199ff8 ? _0x42ebc4 : () => {
                ;
                if (!he(_0x492658)) {
                    throw Z1('Show');
                }
                return _0x1a7267.when;
            })) : _0x184935;
        }
        return _0x1a7267.fallback;
    }, void 0, void 0);
}
const a0_0x856508 = {};
a0_0x856508.name = 'session';
const a0_0x553fbd = {};
a0_0x553fbd.name = 'stickerSets';
const a0_0x3945c3 = {};
a0_0x3945c3.name = 'users';
const a0_0x452147 = {};
a0_0x452147.name = 'chats';
const a0_0x22d657 = {};
a0_0x22d657.name = 'dialogs';
const a0_0x44c33e = {};
a0_0x44c33e.name = 'messages';
const a0_0x51fd2a = {};
a0_0x51fd2a.name = 'session';
const a0_0x4c77d7 = {};
a0_0x4c77d7.name = 'localStorage';
a0_0x4c77d7.encryptedName = 'localStorage__encrypted';
;
const a0_0x1cef00 = {};
a0_0x1cef00.name = 'session';
a0_0x1cef00.encryptedName = 'session__encrypted';
;
const a0_0xc2528f = {};
a0_0xc2528f.name = 'stickerSets';
a0_0xc2528f.encryptedName = 'stickerSets__encrypted';
;
const a0_0x2c6095 = {};
a0_0x2c6095.name = 'users';
a0_0x2c6095.encryptedName = 'users__encrypted';
;
const a0_0x10b79c = {};
a0_0x10b79c.name = 'chats';
a0_0x10b79c.encryptedName = 'chats__encrypted';
;
const a0_0x33bdb3 = {};
a0_0x33bdb3.name = 'dialogs';
a0_0x33bdb3.encryptedName = 'dialogs__encrypted';
;
const a0_0x2bf3e2 = {};
a0_0x2bf3e2.name = 'messages';
a0_0x2bf3e2.encryptedName = 'messages__encrypted';
;
const a0_0x1113a4 = {};
a0_0x1113a4.name = 'webapp';
a0_0x1113a4.encryptedName = 'webapp__encrypted';
;
const Vi = () => ({
        'name': 'tweb',
        'version': 7,
        'stores': [
            a0_0x856508,
            a0_0x553fbd,
            a0_0x3945c3,
            a0_0x452147,
            a0_0x22d657,
            a0_0x44c33e
        ]
    }), uo = () => ({
        'name': 'tweb-common',
        'version': 8,
        'stores': [
            a0_0x51fd2a,
            a0_0x4c77d7
        ]
    }), zi = _0xe335d4 => ({
        'name': 'tweb-account-' + _0xe335d4,
        'version': 9,
        'stores': [
            a0_0x1cef00,
            a0_0xc2528f,
            a0_0x2c6095,
            a0_0x10b79c,
            a0_0x33bdb3,
            a0_0x2bf3e2,
            a0_0x1113a4
        ]
    });
N.getDatabaseState = zi;
const ed = {
    'isFulfilled': false,
    'isRejected': false,
    'notify': () => {
    },
    'notifyAll': function (..._0x13fad0) {
        ;
        this.lastNotify = _0x13fad0;
        this.listeners?.forEach(_0x3433c8 => _0x3433c8(..._0x13fad0));
        ;
    },
    'addNotifyListener': function (_0x2e2361) {
        ;
        this.lastNotify && _0x2e2361(...this.lastNotify);
        (this.listeners ?? (this.listeners = [])).push(_0x2e2361);
        ;
    },
    'resolve': function (_0x2ed6f4) {
        ;
        this.isFulfilled || this.isRejected || (this.isFulfilled = true, this['_resolve'](_0x2ed6f4), this.onFinish());
    },
    'reject': function (..._0x3b0338) {
        ;
        this.isRejected || this.isFulfilled || (this.isRejected = true, this['_reject'](..._0x3b0338), this.onFinish());
    },
    'onFinish': function () {
        ;
        this.notify = this.notifyAll = this.lastNotify = null;
        this.listeners && (this.listeners.length = 0);
        this.cancel && (this.cancel = ve);
        ;
    }
};
function q() {
    ;
    let _0xee6030, _0x4dd78c;
    const _0x391d2c = new Promise((_0xf36c72, _0x5594c4) => {
        _0xee6030 = _0xf36c72;
        _0x4dd78c = _0x5594c4;
        ;
    });
    return Object.assign(_0x391d2c, ed), _0x391d2c['_resolve'] = _0xee6030, _0x391d2c['_reject'] = _0x4dd78c, _0x391d2c;
}
function jm(_0x57543e, _0x123278) {
    ;
    _0x57543e.then(_0x123278.resolve.bind(_0x123278), _0x123278.reject.bind(_0x123278));
}
self.deferredPromise = q;
function Af(_0x58a851, _0x2f3bd4, _0x2aba5e = false) {
    ;
    let _0x1a12b6, _0x54fb5b, _0x5d78e5;
    const _0x5b988b = (..._0x18bfa5) => {
        ;
        if (_0x1a12b6 = true, _0x5d78e5 = _0x18bfa5, _0x54fb5b) {
            return;
        }
        _0x2aba5e && (_0x1a12b6 = false, _0x2f3bd4(..._0x5d78e5));
        const _0x20344a = _0x54fb5b = Math.random();
        _0x58a851(() => {
            ;
            if (_0x54fb5b === _0x20344a) {
                _0x5b988b.clear();
                _0x1a12b6 && (_0x1a12b6 = false, _0x2f3bd4(..._0x5d78e5));
            }
        });
    };
    return _0x5b988b.clear = () => {
        _0x54fb5b = void 0;
    }, _0x5b988b;
}
const Mt = {
    'test': false,
    'debug': false,
    'http': false,
    'ssl': true,
    'asServiceWorker': false,
    'transport': 'websocket',
    'noSharedWorker': location.search.indexOf('noSharedWorker=1') > 0,
    'multipleTransports': true
};
(Mt.http = location.search.indexOf('http=1') > 0) && (Mt.multipleTransports = false);
Mt.multipleTransports && (Mt.http = true);
Mt.http && (Mt.transport = 'https');
;
const Ws = class Ws {
    constructor(_0x42c47f) {
        ;
        Hn(this, _0x42c47f);
        this.storageIsAvailable = true;
        this.log = Q([
            'IDB',
            _0x42c47f.name
        ].join('-'));
        this.log('constructor');
        this.openDatabase(true);
        Ws.INSTANCES.push(this);
        ;
    }
    ['isAvailable']() {
        ;
        return this.storageIsAvailable;
    }
    ['openDatabase'](_0x255149 = false) {
        ;
        if (this.openDbPromise && !_0x255149) {
            return this.openDbPromise;
        }
        const _0x57a5eb = (_0x5465a2, _0x4b445d) => {
                const _0x13538b = Array.from(_0x5465a2.indexNames);
                for (const _0x944dc3 of _0x13538b)
                    _0x5465a2.deleteIndex(_0x944dc3);
                if (_0x4b445d.indexes?.length) {
                    for (const _0x385f4e of _0x4b445d.indexes)
                        _0x5465a2.indexNames.contains(_0x385f4e.indexName) || _0x5465a2.createIndex(_0x385f4e.indexName, _0x385f4e.keyPath, _0x385f4e.objectParameters);
                }
            }, _0x40beff = (_0x3a8d1a, _0xb21b33) => {
                const _0x55fde7 = _0x3a8d1a.createObjectStore(_0xb21b33.name);
                _0x57a5eb(_0x55fde7, _0xb21b33);
            };
        try {
            var _0x20ec97 = indexedDB.open(this.name, this.version);
            if (!_0x20ec97) {
                return Promise.reject();
            }
        } catch (_0x5be901) {
            return this.log.error('error opening db', _0x5be901.message), this.storageIsAvailable = false, Promise.reject(_0x5be901);
        }
        let _0x3c8267 = false;
        return setTimeout(() => {
            ;
            _0x3c8267 || _0x20ec97.onerror(Ee('IDB_CREATE_TIMEOUT'));
        }, 3000), this.openDbPromise = new Promise((_0x38cc21, _0x4fe487) => {
            ;
            _0x20ec97.onsuccess = _0x22dbf9 => {
                ;
                _0x3c8267 = true;
                const _0x4774a8 = _0x20ec97.result;
                let _0x323cea = false;
                this.log('Opened');
                _0x4774a8.onerror = _0x267c08 => {
                    ;
                    this.storageIsAvailable = false;
                    this.log.error('Error creating/accessing IndexedDB database', _0x267c08);
                    _0x4fe487(_0x267c08);
                    ;
                };
                _0x4774a8.onclose = _0x40e0b3 => {
                    ;
                    this.log.error('closed:', _0x40e0b3);
                    !_0x323cea && this.openDatabase();
                    ;
                };
                _0x4774a8.onabort = _0x288e20 => {
                    ;
                    this.log.error('abort:', _0x288e20);
                    const _0x2e33b0 = _0x288e20.target;
                    this.openDatabase(_0x323cea = true);
                    _0x2e33b0.onerror && _0x2e33b0.onerror(_0x288e20);
                    _0x4774a8.close();
                    ;
                };
                _0x4774a8.onversionchange = _0x327cdc => {
                    ;
                    this.log.error('onversionchange, lol?');
                };
                _0x38cc21(this.db = _0x4774a8);
                ;
            };
            _0x20ec97.onerror = _0x2666e3 => {
                ;
                _0x3c8267 = true;
                this.storageIsAvailable = false;
                this.log.error('Error creating/accessing IndexedDB database', _0x2666e3);
                _0x4fe487(_0x2666e3);
                ;
            };
            _0x20ec97.onupgradeneeded = _0x38744a => {
                ;
                _0x3c8267 = true;
                this.log.warn('performing idb upgrade from', _0x38744a.oldVersion, 'to', _0x38744a.newVersion);
                ;
                const _0x5145a1 = _0x38744a.target, _0x17f801 = _0x5145a1.result;
                this.stores.forEach(_0x1679ec => {
                    ;
                    if (!_0x17f801.objectStoreNames.contains(_0x1679ec.name)) {
                        _0x40beff(_0x17f801, _0x1679ec);
                    } else {
                        const _0x59aed0 = _0x5145a1.transaction.objectStore(_0x1679ec.name);
                        _0x57a5eb(_0x59aed0, _0x1679ec);
                    }
                    _0x1679ec.encryptedName && !_0x17f801.objectStoreNames.contains(_0x1679ec.encryptedName) && _0x17f801.createObjectStore(_0x1679ec.encryptedName);
                });
            };
            ;
        }).then(_0x5686b2 => this.openDbPromise = _0x5686b2);
    }
    async ['closeDatabase']() {
        ;
        this.db && (this.db.onclose = () => {
        }, this.db.close());
    }
    static ['create'](_0x1c98e7) {
        ;
        return this.INSTANCES.find(_0x53a409 => _0x53a409.name === _0x1c98e7.name) ?? new Ws(_0x1c98e7);
    }
    static ['closeDatabases'](_0x1b2474) {
        ;
        this.INSTANCES.forEach(_0x18842d => {
            ;
            _0x1b2474 && _0x1b2474 === _0x18842d || _0x18842d.closeDatabase();
        });
    }
    static ['deleteDatabaseByName'](_0x547362) {
        ;
        return new Promise((_0x254e5e, _0x41be20) => {
            ;
            this.INSTANCES.forEach(_0x5ebb9d => {
                ;
                if (_0x5ebb9d.name === _0x547362) {
                    return _0x5ebb9d.closeDatabase();
                }
            });
            const _0x7a9827 = indexedDB.deleteDatabase(_0x547362);
            _0x7a9827.onerror = () => _0x41be20();
            _0x7a9827.onsuccess = () => _0x254e5e();
            ;
        });
    }
};
Ws.INSTANCES = [];
let Wf = Ws;
class Cf {
    constructor(_0x1c0a95, _0x13685e) {
        ;
        this.storeName = _0x13685e;
        this.log = Q([
            'IDB',
            _0x1c0a95.name,
            _0x13685e
        ].join('-'));
        this.idb = Wf.create(_0x1c0a95);
        ;
    }
    ['close']() {
        ;
        return this.idb.closeDatabase();
    }
    ['delete'](_0x8903ca, _0x3277ea) {
        const _0x402b80 = Array.isArray(_0x8903ca);
        return _0x402b80 || (_0x8903ca = [].concat(_0x8903ca)), this.getObjectStore('readwrite', _0x36c80e => {
            const _0x191b80 = _0x8903ca.map(_0x200cec => _0x36c80e.delete(_0x200cec));
            return _0x402b80 ? _0x191b80 : _0x191b80[0];
        }, '', _0x3277ea);
    }
    ['clear'](_0x4186c0) {
        ;
        return this.getObjectStore('readwrite', _0x3d01eb => _0x3d01eb.clear(), '', _0x4186c0);
    }
    ['save'](_0x2aba7d, _0x3b0757, _0x49e5e4) {
        const _0x5eddb0 = Array.isArray(_0x2aba7d);
        return _0x5eddb0 || (_0x2aba7d = [].concat(_0x2aba7d), _0x3b0757 = [].concat(_0x3b0757)), this.getObjectStore('readwrite', _0x312026 => {
            ;
            const _0x122134 = _0x2aba7d.map((_0x2af3ed, _0x53fd29) => _0x312026.put(_0x3b0757[_0x53fd29], _0x2af3ed));
            return _0x5eddb0 ? _0x122134 : _0x122134[0];
        }, '', _0x49e5e4);
    }
    ['get'](_0x11b1d7, _0x5f1c93) {
        const _0x268c4e = Array.isArray(_0x11b1d7);
        if (_0x268c4e) {
            if (!_0x11b1d7.length) {
                return Promise.resolve([]);
            }
        } else {
            if (!_0x11b1d7) {
                return;
            }
            _0x11b1d7 = [].concat(_0x11b1d7);
        }
        return this.getObjectStore('readonly', _0x22ff2c => {
            const _0x9547de = _0x11b1d7.map(_0x3cee61 => _0x22ff2c.get(_0x3cee61));
            return _0x268c4e ? _0x9547de : _0x9547de[0];
        }, '', _0x5f1c93);
    }
    async ['getObjectStore'](_0x42fd94, _0x30d2a5, _0x572946, _0x2e5429 = this.storeName) {
        ;
        let _0x1b93bc;
        _0x572946 && (_0x1b93bc = performance.now(), this.log(_0x572946 + ': start'));
        const _0x896e59 = setTimeout(() => {
                ;
                this.log.error('transaction not finished', _0x15348e, _0x572946);
            }, 10000), _0x762cf3 = this.idb.openDatabase(), _0x3a403d = _0x762cf3 instanceof Promise ? await _0x762cf3 : _0x762cf3;
        let _0x269173, _0x4e9d70;
        const _0x53f16d = { durability: 'relaxed' };
        ;
        const _0x405adc = new Promise((_0x20ec7e, _0x197bd9) => [_0x269173, _0x4e9d70] = [
                _0x20ec7e,
                _0x197bd9
            ]), _0x15348e = _0x3a403d.transaction([_0x2e5429], _0x42fd94, _0x53f16d), _0x2a556e = () => {
                ;
                clearTimeout(_0x896e59);
                _0x4e9d70(_0x15348e.error);
                ;
            }, _0x256d8b = () => {
                ;
                clearTimeout(_0x896e59);
                _0x572946 && this.log(_0x572946 + ': end', performance.now() - _0x1b93bc);
                ;
                const _0x39dcea = _0x38fc90.map(_0x35b746 => _0x35b746.result);
                _0x269173(_0x357926 ? _0x39dcea : _0x39dcea[0]);
                _0x572946 && this.log(_0x572946 + ': resolved', _0x357926 ? _0x39dcea : _0x39dcea[0]);
                ;
            };
        _0x15348e.onerror = _0x2a556e;
        const _0x16548e = _0x42fd94 === 'readwrite';
        _0x16548e && (_0x15348e.oncomplete = () => _0x256d8b());
        const _0x14cd96 = _0x30d2a5(_0x15348e.objectStore(_0x2e5429), _0x256d8b, _0x2a556e), _0x357926 = Array.isArray(_0x14cd96), _0x38fc90 = _0x357926 ? _0x14cd96 : [].concat(_0x14cd96);
        if (_0x16548e) {
            return _0x405adc;
        }
        const _0x246675 = _0x38fc90.length;
        let _0x5c1d80 = _0x246675;
        const _0x16975c = () => {
            ;
            _0x15348e.error || --_0x5c1d80 || _0x256d8b();
        };
        for (let _0x7b766d = 0; _0x7b766d < _0x246675; ++_0x7b766d) {
            const _0xb8ea40 = _0x38fc90[_0x7b766d];
            _0xb8ea40.onerror = _0x2a556e;
            _0xb8ea40.onsuccess = _0x16975c;
            ;
        }
        return _0x405adc;
    }
    ['getAll'](_0x376dba) {
        ;
        return this.getObjectStore('readonly', _0x498414 => _0x498414.getAll(), '', _0x376dba);
    }
    ['getAllKeys'](_0xe16e0c) {
        ;
        return this.getObjectStore('readonly', _0x129d8b => _0x129d8b.getAllKeys(), '', _0xe16e0c);
    }
    ['getAllEntries'](_0x124c3a) {
        const _0x434a0a = [];
        return new Promise((_0x1ad5fd, _0xf76469) => {
            ;
            this.getObjectStore('readonly', (_0x51d256, _0x5d7b4c, _0x1626d4) => {
                const _0x489a83 = _0x51d256.openCursor();
                return _0x489a83.onsuccess = _0x4ec27c => {
                    const _0x40778e = _0x4ec27c.target.result;
                    _0x40778e ? (_0x434a0a.push([
                        _0x40778e.key,
                        _0x40778e.value
                    ]), _0x40778e.continue()) : (_0x5d7b4c(), _0x1ad5fd(_0x434a0a));
                }, _0x489a83.onerror = _0x1626d4, [];
            }, '', _0x124c3a).catch(_0xf76469);
        });
    }
}
class ln {
    constructor() {
        ;
        throw new Error('Cannot instantiate a static utility class');
    }
}
const Pr = class Pr extends ln {
    static ['resolveDeferred'](_0x2fd6a2) {
        ;
        this.value = _0x2fd6a2;
        this.deferred?.resolve();
        this.deferred = void 0;
        ;
    }
    static async ['isUsingPasscode']() {
        ;
        if (this.deferred && await this.deferred, typeof this.value != 'boolean') {
            throw new Error('Is using passcode is not boolean WTF?');
        }
        return this.value;
    }
    static ['resetDeferred']() {
        ;
        this.value = void 0;
        this.deferred = q();
        ;
    }
};
Pr.deferred = q();
let Me = Pr;
function Lt(_0x3ad693) {
    ;
    return Array.isArray(_0x3ad693) ? _0x3ad693 : [_0x3ad693];
}
function ho(_0x2c987f) {
    ;
    return _0x2c987f instanceof Uint8Array ? _0x2c987f : typeof _0x2c987f == 'string' ? new TextEncoder().encode(_0x2c987f) : new Uint8Array(_0x2c987f);
}
function td(_0x2a6c0b, _0x52f9b3) {
    ;
    let _0x3bd284, _0x5c2c69, _0x4e412a = false;
    function _0xdc44c3() {
        ;
        _0x5c2c69 = self.setTimeout(() => {
            ;
            _0x4e412a = false;
            _0x2a6c0b(..._0x3bd284)?.then(() => {
                _0x5c2c69 = void 0;
                _0x4e412a && _0xdc44c3();
                ;
            });
            ;
        }, _0x52f9b3);
    }
    const _0x24e95d = (..._0x426116) => {
        _0x3bd284 = _0x426116;
        _0x4e412a = true;
        !_0x5c2c69 && _0xdc44c3();
        ;
    };
    return _0x24e95d.clear = () => {
        ;
        self.clearTimeout(_0x5c2c69);
        _0x3bd284 = void 0;
        _0x5c2c69 = void 0;
        _0x4e412a = false;
        ;
    }, _0x24e95d;
}
class sd extends Ui {
    constructor() {
        ;
        super('CRYPTO');
        this.lastIndex = -1;
        ;
    }
    ['invokeCryptoNew']({
        method: _0x2cbcc2,
        args: _0x56a0c8,
        transfer: _0x2be2af
    }) {
        const _0x43bd2c = {
            method: _0x2cbcc2,
            args: _0x56a0c8
        };
        ;
        ;
        ;
        const _0x111ee7 = _0x43bd2c, _0x1a31af = this.listeners.invoke;
        if (_0x1a31af?.size) {
            let _0x25a027 = _0x1a31af.values().next().value.callback(_0x111ee7);
            return !bt && !(_0x25a027 instanceof Promise) && (_0x25a027 = Promise.resolve(_0x25a027)), _0x25a027;
        }
        const _0x32e6b5 = _0x2cbcc2 === 'aes-encrypt' || _0x2cbcc2 === 'aes-decrypt' ? this.lastIndex = (this.lastIndex + 1) % this.sendPorts.length : 0;
        return this.invoke('invoke', _0x111ee7, void 0, this.sendPorts[_0x32e6b5], _0x2be2af);
    }
    ['invokeCrypto'](_0x90bf05, ..._0x5f37f3) {
        const _0x1b7b29 = {};
        return _0x1b7b29.method = _0x90bf05, _0x1b7b29.args = _0x5f37f3, this.invokeCryptoNew(_0x1b7b29);
    }
    ['sendToOnePort'](_0x47fb1a) {
        ;
        this.invokeVoid('port', void 0, this.sendPorts[0], [_0x47fb1a]);
    }
}
const it = new sd();
N && (N.cryptoMessagePort = it);
const fn = class fn extends ln {
    static async ['get']() {
        ;
        return this.deferred && await this.deferred, this.key;
    }
    static async ['getAsBase64']() {
        const _0x17f72d = await this.get();
        if (!_0x17f72d) {
            return null;
        }
        const _0x1f799e = await crypto.subtle.exportKey('raw', _0x17f72d);
        return btoa(String.fromCharCode(...new Uint8Array(_0x1f799e)));
    }
    static ['save'](_0x2cdc8c) {
        ;
        this.key = _0x2cdc8c;
        this.deferred?.resolve();
        this.deferred = void 0;
        ;
    }
    static ['resetDeferred']() {
        ;
        this.key = null;
        this.deferred = q();
        ;
    }
};
fn.key = null;
fn.deferred = q();
;
let ct = fn;
const Te = class Te {
    constructor(_0x1361d9, _0x2968d0) {
        ;
        this.db = _0x1361d9;
        this.encryptedStoreName = _0x2968d0;
        this.saveToIDB = async () => {
            ;
            await this.waitToLoad();
            performance.now();
            ;
            const _0x2efdc6 = await Te.encrypt(this.data);
            _0x2efdc6.length;
            performance.now();
            await this.storage.save(Te.STORAGE_KEY, _0x2efdc6);
            performance.now();
            ;
        };
        this.saveToIDBThrottled = td(() => this.saveToIDB(), Te.STORAGE_THROTTLE_TIME_MS);
        this.storage = new Cf(_0x1361d9, _0x2968d0);
        this.log = Q('encrypted-storage-' + _0x2968d0);
        ;
    }
    static ['getInstance'](_0x2292fa, _0xb278a6) {
        const _0x4bf40e = this.getStorageKey(_0x2292fa.name, _0xb278a6);
        if (this.instances.has(_0x4bf40e)) {
            return this.instances.get(_0x4bf40e);
        }
        const _0x34250b = new Te(_0x2292fa, _0xb278a6);
        return this.instances.set(_0x4bf40e, _0x34250b), _0x34250b;
    }
    static ['getStorageKey'](_0x4bde2c, _0x2d6a9a) {
        return _0x4bde2c + '**' + _0x2d6a9a;
    }
    static async ['encrypt'](_0x9ee95d) {
        ;
        if (!Object.keys(_0x9ee95d).length) {
            return null;
        }
        const _0x53a280 = await ct.get(), _0x3176db = ho(JSON.stringify(_0x9ee95d)), _0x5c6d09 = {
                key: _0x53a280,
                data: _0x3176db
            };
        ;
        ;
        ;
        const _0x36178b = {};
        return _0x36178b.method = 'aes-local-encrypt', _0x36178b.args = [_0x5c6d09], _0x36178b.transfer = [_0x3176db.buffer], await it.invokeCryptoNew(_0x36178b);
    }
    static async ['decrypt'](_0x144b6b) {
        const _0x4c7d1e = await ct.get(), _0x1c57eb = await it.invokeCryptoNew({
                'method': 'aes-local-decrypt',
                'args': [{
                        'key': _0x4c7d1e,
                        'encryptedData': _0x144b6b
                    }],
                'transfer': [_0x144b6b.buffer]
            }), _0x63b17e = new TextDecoder().decode(_0x1c57eb);
        return JSON.parse(_0x63b17e);
    }
    ['loadEncrypted']() {
        ;
        ((async () => (this.loadingDataPromise = this.loadFromIDB(), await this.loadingDataPromise, this.loadingDataPromise = void 0))());
    }
    async ['loadDecrypted'](_0x5bd2ac) {
        ;
        this.log('loading decrypted', _0x5bd2ac);
        this.data = _0x5bd2ac;
        await this.saveToIDB();
        ;
    }
    ['waitToLoad']() {
        ;
        if (this.loadingDataPromise) {
            return this.loadingDataPromise;
        }
    }
    async ['loadFromIDB']() {
        ;
        try {
            const _0x98f17e = await this.storage.get(Te.STORAGE_KEY);
            if (_0x98f17e === null) {
                throw null;
            }
            if (!(_0x98f17e instanceof Uint8Array)) {
                throw new Error('Stored data in encrypted store is not a Uint8Array');
            }
            const _0x27db6c = await Te.decrypt(_0x98f17e);
            this.data = _0x27db6c;
        } catch (_0x1a6276) {
            _0x1a6276 && this.log(_0x1a6276);
            this.data = {};
            ;
        }
        return this.data;
    }
    async ['reEncrypt']() {
        ;
        await this.saveToIDB();
    }
    async ['save'](_0x57732a, _0x316a4) {
        ;
        await this.waitToLoad();
        const _0x1dadcd = Lt(_0x57732a), _0x2b2e5a = Lt(_0x316a4);
        _0x1dadcd.forEach((_0x19c5df, _0x561b88) => {
            ;
            this.data[_0x19c5df] = _0x2b2e5a[_0x561b88];
        });
        this.saveToIDBThrottled();
        ;
    }
    async ['get'](_0x4da8fa) {
        ;
        return await this.waitToLoad(), _0x4da8fa.map(_0x7b4d6f => this.data[_0x7b4d6f]);
    }
    async ['getAllEntries']() {
        ;
        return await this.waitToLoad(), Object.entries(this.data);
    }
    async ['getAll']() {
        ;
        return await this.waitToLoad(), Object.values(this.data);
    }
    async ['getAllKeys']() {
        ;
        return await this.waitToLoad(), Object.keys(this.data);
    }
    async ['delete'](_0x1b449a) {
        ;
        await this.waitToLoad();
        Lt(_0x1b449a).forEach(_0x599898 => {
            ;
            delete this.data[_0x599898];
        });
        this.saveToIDBThrottled();
        ;
    }
    async ['clear']() {
        ;
        this.data = {};
        await this.storage.clear();
        ;
    }
};
Te.STORAGE_KEY = 'data';
Te.STORAGE_THROTTLE_TIME_MS = 0;
Te.instances = new Map();
;
let Le = Te;
function fd() {
}
const Qt = class Qt {
    constructor(_0x1cc1f0, _0x345e62) {
        ;
        this.db = _0x1cc1f0;
        this.storeName = _0x345e62;
        this['_save'] = async () => {
            const _0x25f34d = this.saveDeferred;
            this.saveDeferred = q();
            const _0x148d7a = this.keysToSet;
            if (_0x148d7a.size) {
                const _0x9db1da = Array.from(_0x148d7a.values());
                _0x148d7a.clear();
                const _0x1582d3 = _0x9db1da.map(_0x37db5f => this.cache[_0x37db5f]);
                try {
                    (await this.getStorage()).save(_0x9db1da, _0x1582d3);
                } catch (_0x23de9c) {
                    this.log.error('set error', _0x23de9c, _0x9db1da, _0x1582d3);
                }
            }
            _0x25f34d.resolve();
            _0x148d7a.size && this.saveThrottled();
            ;
        };
        this['_delete'] = async () => {
            const _0x45f781 = this.deleteDeferred;
            this.deleteDeferred = q();
            const _0x533231 = this.keysToDelete;
            if (_0x533231.size) {
                const _0x311a5c = Array.from(_0x533231.values());
                _0x533231.clear();
                try {
                    (await this.getStorage()).delete(_0x311a5c);
                } catch (_0x1740cf) {
                    this.log.error('delete error', _0x1740cf, _0x311a5c);
                }
            }
            _0x45f781.resolve();
            _0x533231.size && this.deleteThrottled();
            ;
        };
        this['_get'] = async () => {
            const _0x45f5c1 = Array.from(this.getPromises.keys());
            (await this.getStorage()).get(_0x45f5c1).then(_0x4fc9ab => {
                ;
                for (let _0x5abc13 = 0, _0x11b8a0 = _0x45f5c1.length; _0x5abc13 < _0x11b8a0; ++_0x5abc13) {
                    const _0x2d19e5 = _0x45f5c1[_0x5abc13], _0x516fd0 = this.getPromises.get(_0x2d19e5);
                    _0x516fd0 && (_0x516fd0.resolve(this.cache[_0x2d19e5] = _0x4fc9ab[_0x5abc13]), this.getPromises.delete(_0x2d19e5));
                }
            }, _0x254d29 => {
                ;
                new Set([
                    'NO_ENTRY_FOUND',
                    'STORAGE_OFFLINE'
                ]).has(_0x254d29.type) || (this.useStorage = false, this.log.error('get error', _0x254d29, _0x45f5c1, this.storeName));
                for (let _0x33234a = 0, _0x45e3f2 = _0x45f5c1.length; _0x33234a < _0x45e3f2; ++_0x33234a) {
                    const _0x9606 = _0x45f5c1[_0x33234a], _0x4ddead = this.getPromises.get(_0x9606);
                    _0x4ddead && (_0x4ddead.resolve(void 0), this.getPromises.delete(_0x9606));
                }
            }).finally(() => {
                ;
                this.getPromises.size && this.getThrottled();
            });
        };
        this.log = Q('AS-' + _0x1cc1f0.name + '-' + _0x345e62);
        this.cache = {};
        this.getPromises = new Map();
        this.keysToSet = new Set();
        this.saveDeferred = q();
        this.keysToDelete = new Set();
        this.deleteDeferred = q();
        ;
        const _0x485350 = _0x1cc1f0.stores.find(_0x3dfabb => _0x3dfabb.name === _0x345e62);
        this.isEncryptable = !!_0x485350?.encryptedName;
        this.encryptedStoreName = _0x485350?.encryptedName;
        Qt.STORAGES.length ? this.useStorage = Qt.STORAGES[0].useStorage : this.useStorage = true;
        this.savingFreezed = false;
        Qt.STORAGES.push(this);
        this.saveThrottled = Af(queueMicrotask, this['_save'], false);
        this.deleteThrottled = Af(queueMicrotask, this['_delete'], false);
        this.getThrottled = Af(queueMicrotask, this['_get'], false);
        ;
    }
    async ['getStorage']() {
        ;
        if (this.storage) {
            return this.storage;
        }
        const _0x581fab = this.isEncryptable ? await Me.isUsingPasscode() : false, _0x1d4cf8 = this.storage = _0x581fab ? Le.getInstance(this.db, this.encryptedStoreName) : new Cf(this.db, this.storeName);
        return _0x1d4cf8 instanceof Le && _0x1d4cf8.loadEncrypted(), _0x1d4cf8;
    }
    ['isAvailable']() {
        ;
        return this.useStorage;
    }
    ['getCache']() {
        ;
        return this.cache;
    }
    ['getFromCache'](_0x47952d) {
        return this.cache[_0x47952d];
    }
    ['setToCache'](_0x5be76e, _0x3afb89) {
        return this.cache[_0x5be76e] = _0x3afb89;
    }
    async ['get'](_0x2ad55e, _0x2bbbce = true) {
        ;
        if (this.cache.hasOwnProperty(_0x2ad55e) && _0x2bbbce) {
            return this.getFromCache(_0x2ad55e);
        }
        if (this.useStorage) {
            const _0x25d056 = this.getPromises.get(_0x2ad55e);
            if (_0x25d056) {
                return _0x25d056;
            }
            const _0x48a227 = q();
            return this.getPromises.set(_0x2ad55e, _0x48a227), this.getThrottled(), _0x48a227;
        }
    }
    async ['getAll']() {
        ;
        return (await this.getStorage()).getAll().catch(() => []);
    }
    async ['getAllKeys']() {
        ;
        return (await this.getStorage()).getAllKeys().catch(() => []);
    }
    async ['getAllEntries']() {
        ;
        return (await this.getStorage()).getAllEntries().catch(() => []);
    }
    ['warnAboutSaving']() {
    }
    ['set'](_0x4d4bca, _0x19d38d = false) {
        const _0x28f59a = this.useStorage && !_0x19d38d && !this.savingFreezed;
        this.warnAboutSaving();
        let _0x20f55c = false;
        for (const _0x3e50f7 in _0x4d4bca)
            if (_0x4d4bca.hasOwnProperty(_0x3e50f7)) {
                const _0x59205b = _0x4d4bca[_0x3e50f7];
                this.setToCache(_0x3e50f7, _0x59205b);
                _0x28f59a && (this.keysToSet.add(_0x3e50f7), this.keysToDelete.delete(_0x3e50f7), this.saveThrottled());
                _0x20f55c = true;
                ;
            }
        return _0x28f59a && _0x20f55c ? this.saveDeferred : Promise.resolve();
    }
    ['delete'](_0x4393f3, _0x248f81 = false) {
        ;
        return this.warnAboutSaving(), _0x4393f3 = '' + _0x4393f3, _0x248f81 || delete this.cache[_0x4393f3], this.useStorage && (this.keysToSet.delete(_0x4393f3), this.keysToDelete.add(_0x4393f3), this.deleteThrottled()), this.useStorage ? this.deleteDeferred : Promise.resolve();
    }
    async ['clear'](_0x64609c = false) {
        ;
        if (!_0x64609c) {
            for (const _0x337c0d in this.cache)
                delete this.cache[_0x337c0d];
        }
        try {
            const _0x1c3af8 = await this.getStorage();
            await _0x1c3af8.clear();
            _0x1c3af8 instanceof Le ? await new Cf(this.db, this.storeName).clear() : this.isEncryptable && await Le.getInstance(this.db, this.encryptedStoreName).clear();
            ;
        } catch {
        }
    }
    async ['unfreezeAsync'](_0x4fed6c) {
        const _0x3641a3 = this.savingFreezed;
        this.savingFreezed = false;
        try {
            await _0x4fed6c();
        } catch {
        }
        this.savingFreezed = _0x3641a3;
    }
    static ['toggleStorage'](_0x4e9b03, _0x47a94e) {
        ;
        return Promise.all(this.STORAGES.map(_0x2068f8 => {
            ;
            if (_0x2068f8.useStorage = _0x4e9b03, !(!bt || !_0x47a94e)) {
                if (!_0x4e9b03) {
                    _0x2068f8.keysToSet.clear();
                    _0x2068f8.keysToDelete.clear();
                    _0x2068f8.getPromises.forEach(_0x16a98f => _0x16a98f.resolve(void 0));
                    _0x2068f8.getPromises.clear();
                    ;
                } else {
                    return _0x2068f8.set(_0x2068f8.cache);
                }
            }
        })).catch(fd);
    }
    static ['freezeSaving'](_0x19e67b, _0x1556bd) {
        ;
        this.STORAGES.forEach(_0x5974c2 => _0x5974c2.savingFreezed = true);
        try {
            _0x19e67b();
        } catch {
        }
        this.STORAGES.forEach(_0x23b596 => _0x23b596.savingFreezed = false);
    }
    static async ['freezeSavingAsync'](_0x4d9b6f) {
        ;
        this.STORAGES.forEach(_0x3806bc => _0x3806bc.savingFreezed = true);
        try {
            await _0x4d9b6f();
        } catch {
        }
        this.STORAGES.forEach(_0x30643f => _0x30643f.savingFreezed = false);
    }
    async ['toggleEncrypted'](_0x3ce988) {
        ;
        if (!this.isEncryptable) {
            return;
        }
        const _0x3a1d2d = this.storage instanceof Le;
        if (_0x3ce988 === _0x3a1d2d) {
            return;
        }
        const _0x542dc9 = await this.getAllEntries();
        if (await this.storage.clear(), _0x3ce988) {
            const _0x5853e4 = this.storage = Le.getInstance(this.db, this.encryptedStoreName), _0xbbd56e = Object.fromEntries(_0x542dc9);
            await _0x5853e4.loadDecrypted(_0xbbd56e);
        } else {
            const _0x1658d0 = this.storage = new Cf(this.db, this.storeName), _0x1ffc57 = _0x542dc9.map(_0x17eb57 => _0x17eb57[0]), _0x537264 = _0x542dc9.map(_0x377508 => _0x377508[1]);
            await _0x1658d0.save(_0x1ffc57, _0x537264);
        }
    }
    async ['reEncrypt']() {
        ;
        this.storage instanceof Le && await this.storage.reEncrypt();
    }
    static async ['toggleEncryptedForAll'](_0x2e8681) {
        ;
        this.freezeSavingAsync(async () => {
            ;
            await Promise.all(this.STORAGES.map(_0x48482d => _0x48482d.toggleEncrypted(_0x2e8681)));
        });
    }
    static async ['reEncryptEncrypted']() {
        ;
        this.freezeSavingAsync(async () => {
            ;
            await Promise.all(this.STORAGES.map(_0x3daeb0 => _0x3daeb0.reEncrypt()));
        });
    }
};
Qt.STORAGES = [];
let It = Qt;
N && (N.AppStorage = It);
class nd extends It {
    constructor() {
        ;
        super(uo(), 'session');
    }
}
const rs = new nd();
rs.get('settings', false).then(_0x2b08e6 => {
    ;
    Me.resolveDeferred(_0x2b08e6?.passcode?.enabled || false);
});
N.commonStateStorage = rs;
;
const a0_0x324389 = {};
a0_0x324389.messageActionChatCreate = 'ActionCreateGroup';
a0_0x324389.messageActionChatCreateYou = 'ActionYouCreateGroup';
a0_0x324389.messageActionChatEditTitle = 'ActionChangedTitle';
a0_0x324389.messageActionChatEditPhoto = 'ActionChangedPhoto';
a0_0x324389.messageActionChatEditVideo = 'ActionChangedVideo';
a0_0x324389.messageActionChatDeletePhoto = 'ActionRemovedPhoto';
a0_0x324389.messageActionChatReturn = 'ActionAddUserSelf';
a0_0x324389.messageActionChatReturnYou = 'ActionAddUserSelfYou';
a0_0x324389.messageActionChatJoined = 'ActionAddUserSelfMega';
a0_0x324389.messageActionChatJoinedYou = 'ChannelMegaJoined';
a0_0x324389.messageActionChatAddUser = 'ActionAddUser';
a0_0x324389.messageActionChatAddUsers = 'ActionAddUser';
a0_0x324389.messageActionChatLeave = 'ActionLeftUser';
a0_0x324389.messageActionChatLeaveYou = 'YouLeft';
a0_0x324389.messageActionChatDeleteUser = 'ActionKickUser';
a0_0x324389.messageActionChatJoinedByLink = 'ActionInviteUser';
a0_0x324389.messageActionPinMessage = 'Chat.Service.Group.UpdatedPinnedMessage';
a0_0x324389.messageActionContactSignUp = 'Chat.Service.PeerJoinedTelegram';
a0_0x324389.messageActionChannelCreate = 'ActionCreateChannel';
a0_0x324389.messageActionChannelEditTitle = 'Chat.Service.Channel.UpdatedTitle';
a0_0x324389.messageActionChannelEditPhoto = 'Chat.Service.Channel.UpdatedPhoto';
a0_0x324389.messageActionChannelEditVideo = 'Chat.Service.Channel.UpdatedVideo';
a0_0x324389.messageActionChannelDeletePhoto = 'Chat.Service.Channel.RemovedPhoto';
a0_0x324389.messageActionHistoryClear = 'HistoryCleared';
a0_0x324389.messageActionDiscussionStarted = 'DiscussionStarted';
a0_0x324389.messageActionChannelJoined = 'ChannelJoined';
a0_0x324389.messageActionChannelMigrateFrom = 'ActionMigrateFromGroup';
a0_0x324389['messageActionPhoneCall.video_in_ok'] = 'ChatList.Service.VideoCall.incoming';
a0_0x324389['messageActionPhoneCall.video_out_ok'] = 'ChatList.Service.VideoCall.outgoing';
a0_0x324389['messageActionPhoneCall.video_missed'] = 'ChatList.Service.VideoCall.Missed';
a0_0x324389['messageActionPhoneCall.video_cancelled'] = 'ChatList.Service.VideoCall.Cancelled';
a0_0x324389['messageActionPhoneCall.in_ok'] = 'ChatList.Service.Call.incoming';
a0_0x324389['messageActionPhoneCall.out_ok'] = 'ChatList.Service.Call.outgoing';
a0_0x324389['messageActionPhoneCall.missed'] = 'ChatList.Service.Call.Missed';
a0_0x324389['messageActionPhoneCall.cancelled'] = 'ChatList.Service.Call.Cancelled';
a0_0x324389['messageActionGroupCall.started'] = 'Chat.Service.VoiceChatStarted.Channel';
a0_0x324389['messageActionGroupCall.started_by'] = 'Chat.Service.VoiceChatStarted';
a0_0x324389['messageActionGroupCall.started_byYou'] = 'Chat.Service.VoiceChatStartedYou';
a0_0x324389['messageActionGroupCall.ended'] = 'Chat.Service.VoiceChatFinished.Channel';
a0_0x324389['messageActionGroupCall.ended_by'] = 'Chat.Service.VoiceChatFinished';
a0_0x324389['messageActionGroupCall.ended_byYou'] = 'Chat.Service.VoiceChatFinishedYou';
a0_0x324389.messageActionBotAllowed = 'Chat.Service.BotPermissionAllowed';
;
const Hm = a0_0x324389, Wm = Re ? 'Message.Unsupported.Mobile' : 'Message.Unsupported.Desktop';
var le;
(_0x47ad7e => {
    ;
    _0x47ad7e.strings = new Map();
    _0x47ad7e.countriesList = [];
    ;
    let _0x55dd5a, _0x4a2e04;
    _0x47ad7e.isRTL = false;
    [_0x47ad7e.langCodeNormalized, _0x47ad7e.setLangCodeNormalized] = ke();
    ;
    function _0x4afa08(_0x1244f2) {
        ;
        _0x47ad7e.isRTL = _0x1244f2;
    }
    _0x47ad7e.setRTL = _0x4afa08;
    function _0x2cec23(_0x4c8848) {
        ;
        _0x47ad7e.lastRequestedLangCode = _0x4c8848;
        _0x47ad7e.lastRequestedNormalizedLangCode = _0x4c8848.split('-')[0];
        (0, _0x47ad7e.setLangCodeNormalized)(_0x47ad7e.lastRequestedNormalizedLangCode.split('-')[0]);
        ;
    }
    _0x47ad7e.setLangCode = _0x2cec23;
    function _0x5d0f41(_0xfa731d) {
        ;
        return Promise.all([
            rs.get('langPack').then(_0xc3460d => _0xc3460d || (_0xfa731d ? void 0 : _0x250718())),
            _0x47ad7e.polyfillPromise
        ]).then(([_0x2c3e35]) => _0x2c3e35);
    }
    _0x47ad7e.getCacheLangPack = _0x5d0f41;
    function _0x2e128d() {
        ;
        return _0x4a2e04 || (_0x4a2e04 = _0x5d0f41(true).then(async _0x24e3cd => (_0x24e3cd || (_0x24e3cd = await _0x250718(), _0x24e3cd = await _0x5106cb(_0x24e3cd, false)), _0x47ad7e.lastRequestedLangCode || _0x2cec23(_0x24e3cd.lang_code), _0x390d92(_0x24e3cd), _0x24e3cd)).finally(() => {
            _0x4a2e04 = void 0;
        }));
    }
    _0x47ad7e.getCacheLangPackAndApply = _0x2e128d;
    function _0x598c32() {
        ;
        if (_0x47ad7e.timeFormat === 'h12') {
            try {
                const _0x4c4e8e = {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                };
                ;
                ;
                ;
                ;
                const _0xe7fa48 = _0x8bfe5b(_0x4c4e8e), _0x3213b6 = new Date();
                _0x3213b6.setHours(0);
                const _0x3ae0ed = _0xe7fa48.format(_0x3213b6);
                _0x47ad7e.amPmCache.am = _0x3ae0ed.split(/\s/)[1];
                _0x3213b6.setHours(12);
                ;
                const _0x2830b9 = _0xe7fa48.format(_0x3213b6);
                _0x47ad7e.amPmCache.pm = _0x2830b9.split(/\s/)[1];
            } catch {
                const _0x4f186c = {
                    am: 'AM',
                    pm: 'PM'
                };
                ;
                ;
                _0x47ad7e.amPmCache = _0x4f186c;
                ;
            }
        }
    }
    function _0x1ce441(_0x46df82, _0x4963aa = !!_0x47ad7e.timeFormat && _0x47ad7e.timeFormat !== _0x46df82) {
        ;
        _0x47ad7e.timeFormat = _0x46df82;
        _0x598c32();
        _0x4963aa && (_0x4cdf60.clear(), Array.from(document.querySelectorAll('.i18n')).forEach(_0x442425 => {
            ;
            const _0x38755d = _0x47ad7e.weakMap.get(_0x442425);
            _0x38755d instanceof _0x2a9c3f && _0x38755d.update();
        }));
        ;
    }
    _0x47ad7e.setTimeFormat = _0x1ce441;
    function _0x250718() {
        const _0x59cf33 = ne.langPackCode;
        return Promise.all([
            ze(() => import('./5v0wgyn0z2e5.js'), [], import.meta.url),
            ze(() => import('./np8x603tp9c3.js'), [], import.meta.url),
            ze(() => import('./4an1p3k7ko8u.js'), [], import.meta.url)
        ]).then(([_0x4a6da1, _0x14c581, _0x302d9b]) => {
            const _0x48e63b = [];
            return _0x4f65db(_0x4a6da1.default, _0x48e63b), _0x4f65db(_0x14c581.default, _0x48e63b), {
                '_': 'langPackDifference',
                'from_version': 0,
                'lang_code': _0x59cf33,
                'strings': _0x48e63b,
                'version': ne.langPackVersion,
                'countries': _0x302d9b.default,
                'localVersion': ne.langPackLocalVersion
            };
        });
    }
    _0x47ad7e.loadLocalLangPack = _0x250718;
    function _0xf68515(_0x1bfeed, _0x22b203, _0x5766d5) {
        ;
        _0x22b203 = true;
        const _0x24b2e6 = I.managers;
        return Promise.all([
            _0x24b2e6.appLangPackManager.getLangPack(_0x1bfeed, _0x22b203 ? 'web' : ne.langPack, _0x5766d5),
            !_0x22b203 && _0x24b2e6.appLangPackManager.getLangPack(_0x1bfeed, 'android', _0x5766d5),
            ze(() => import('./5v0wgyn0z2e5.js'), [], import.meta.url),
            ze(() => import('./np8x603tp9c3.js'), [], import.meta.url),
            _0x24b2e6.appLangPackManager.getCountriesList(_0x1bfeed, _0x5766d5),
            _0x47ad7e.polyfillPromise
        ]);
    }
    _0x47ad7e.loadLangPack = _0xf68515;
    function _0x14e5fe(_0x3671a8, _0x4833c1) {
        ;
        return I.managers.appLangPackManager.getStrings(_0x3671a8, _0x4833c1);
    }
    _0x47ad7e.getStrings = _0x14e5fe;
    function _0x4f65db(_0x4d1ace, _0x582091 = []) {
        ;
        for (const _0x28d209 in _0x4d1ace) {
            const _0x4d4d24 = _0x4d1ace[_0x28d209];
            typeof _0x4d4d24 == 'string' ? _0x582091.push({
                '_': 'langPackString',
                'key': _0x28d209,
                'value': _0x4d4d24
            }) : _0x582091.push({
                '_': 'langPackStringPluralized',
                'key': _0x28d209,
                ..._0x4d4d24
            });
        }
        return _0x582091;
    }
    _0x47ad7e.formatLocalStrings = _0x4f65db;
    function _0x108fac(_0x19aac8, _0x2323de, _0x2fc26e) {
        ;
        return _0x2cec23(_0x19aac8), _0xf68515(_0x19aac8, _0x2323de, _0x2fc26e).then(([_0x47529c, _0x573501, _0x17965e, _0x3d2dca, _0x496b46, _0x5c3690]) => {
            ;
            let _0x1ea610 = [];
            return [
                _0x17965e,
                _0x3d2dca
            ].forEach(_0xa19e37 => {
                _0x4f65db(_0xa19e37.default, _0x1ea610);
            }), _0x1ea610 = _0x1ea610.concat(...[
                _0x47529c.strings,
                _0x573501.strings
            ].filter(Boolean)), _0x47529c.strings = _0x1ea610, _0x47529c.countries = _0x496b46, _0x47529c.localVersion = ne.langPackLocalVersion, _0x5106cb(_0x47529c, true);
        });
    }
    _0x47ad7e.getLangPackAndApply = _0x108fac;
    function _0x5106cb(_0x1e7778, _0x31b435) {
        ;
        return _0x1e7778.version || (_0x1e7778.version = ne.langPackVersion), _0x31b435 ? rs.set({ 'langPack': _0x1e7778 }).then(() => (_0x390d92(_0x1e7778), _0x1e7778)) : _0x1e7778;
    }
    _0x47ad7e.saveLangPack = _0x5106cb;
    _0x47ad7e.polyfillPromise = (function () {
        ;
        return typeof Intl < 'u' && typeof Intl.PluralRules < 'u' ? Promise.resolve() : ze(() => import('./nxigq4qft6ih.js'), [], import.meta.url).then(_0x33c5ba => {
            window.Intl = Object.assign(typeof Intl < 'u' ? Intl : {}, _0x33c5ba.default);
        });
    }());
    ;
    function _0x390d92(_0x43ce1e) {
        const _0x4bce5d = _0x47ad7e.lastRequestedLangCode;
        if (_0x43ce1e.lang_code !== _0x4bce5d) {
            return;
        }
        try {
            _0x55dd5a = new Intl.PluralRules(_0x47ad7e.lastRequestedNormalizedLangCode);
        } catch {
            _0x55dd5a = new Intl.PluralRules(_0x47ad7e.lastRequestedNormalizedLangCode.split('-', 1)[0]);
        }
        try {
            _0x55dd5a = new Intl.PluralRules(_0x43ce1e.lang_code);
        } catch {
            _0x55dd5a = new Intl.PluralRules(_0x43ce1e.lang_code.split('-', 1)[0]);
        }
        _0x47ad7e.strings.clear();
        for (const _0x330eb0 of _0x43ce1e.strings)
            _0x47ad7e.strings.set(_0x330eb0.key, _0x330eb0);
        _0x43ce1e.countries && (_0x47ad7e.countriesList.length = 0, _0x47ad7e.countriesList.push(..._0x43ce1e.countries.countries), _0x43ce1e.countries.countries.forEach(_0x124e53 => {
            ;
            if (_0x124e53.name) {
                const _0x5efb48 = _0x124e53.default_name;
                _0x47ad7e.strings.set(_0x5efb48, {
                    '_': 'langPackString',
                    'key': _0x5efb48,
                    'value': _0x124e53.name
                });
            }
        }));
        if (_0x47ad7e.lastAppliedLangCode !== _0x4bce5d) {
            _0x47ad7e.lastAppliedLangCode && I.myId && (I.managers.appReactionsManager.resetAvailableReactions(), I.managers.appUsersManager.indexMyself(), I.managers.dialogsStorage.indexMyDialog());
            _0x47ad7e.lastAppliedLangCode = _0x4bce5d;
            _0x4cdf60.clear();
            _0x598c32();
            I.dispatchEvent('language_change', _0x4bce5d);
        }
        Array.from(document.querySelectorAll('.i18n')).forEach(_0x3f0d03 => {
            const _0x2c42fe = _0x47ad7e.weakMap.get(_0x3f0d03);
            _0x2c42fe && _0x2c42fe.update();
        });
        I.dispatchEventSingle('language_apply');
        ;
    }
    _0x47ad7e.applyLangPack = _0x390d92;
    function _0x49e314(_0x4216b5, _0x32f035, _0xc8eabe, _0xa1ebf9) {
        const _0xb2c112 = _0x32f035[_0xa1ebf9 === void 0 ? _0xc8eabe.i++ : _0xa1ebf9];
        Array.isArray(_0xb2c112) ? _0x4216b5.push(..._0xb2c112) : _0x4216b5.push(_0xb2c112);
    }
    function _0xaf682e(_0x12f945, _0x47f53f, _0x592610) {
        ;
        if (!_0x592610) {
            const _0x4f89e0 = { i: 0 };
            ;
            _0x592610 = _0x4f89e0;
            ;
            const _0x1fd563 = _0x12f945.match(/(%|un)\d+/g);
            _0x1fd563?.length && (_0x592610.i = Math.max(..._0x1fd563.map(_0x30ffa4 => +_0x30ffa4.replace(/\D/g, ''))));
        }
        const _0x2a3b21 = [];
        let _0x26c5e0 = 0;
        return _0x12f945.replace(/(\*\*|__)(.+?)\1|(\n)|(\[.+?\]\(.*?\))|un\d|%\d\$.|%\S/g, (_0x399850, _0x58dc6f, _0x420185, _0xd9f9d, _0x5c79df, _0x55f825, _0x50c394) => {
            ;
            if (_0x55f825 > _0x26c5e0 && _0x2a3b21.push(_0x50c394.slice(_0x26c5e0, _0x55f825)), _0x58dc6f) {
                let _0xde085c;
                switch (_0x58dc6f) {
                case '**': {
                        _0xde085c = document.createElement('b');
                        break;
                    }
                case '__': {
                        _0xde085c = document.createElement('i');
                        break;
                    }
                }
                _0xde085c.append(..._0xaf682e(_0x420185, _0x47f53f, _0x592610));
                _0x2a3b21.push(_0xde085c);
                ;
            } else {
                if (_0xd9f9d) {
                    _0x2a3b21.push(document.createElement('br'));
                } else {
                    if (_0x5c79df) {
                        const _0x534fd8 = _0x5c79df.lastIndexOf(']'), _0x160d9d = _0x5c79df.slice(1, _0x534fd8), _0x246af5 = _0x5c79df.slice(_0x534fd8 + 2, _0x5c79df.length - 1);
                        let _0x5727ab;
                        if (_0x246af5 && ji(_0x246af5)) {
                            _0x5727ab = document.createElement('a');
                            const _0x5db0c3 = on(_0x246af5);
                            _0x5727ab.href = _0x5db0c3.url;
                            _0x5db0c3.onclick && _0x5727ab.setAttribute('onclick', _0x5db0c3.onclick + '(this)');
                            Sf(_0x5727ab);
                            ;
                        } else {
                            _0x5727ab = _0x47f53f[_0x592610.i++];
                            _0x5727ab instanceof DocumentFragment && (_0x5727ab = _0x5727ab.firstChild);
                            typeof _0x5727ab != 'string' && (_0x5727ab.textContent = '');
                            ;
                        }
                        const _0x4e6e61 = _0xaf682e(_0x160d9d, _0x47f53f, _0x592610);
                        typeof _0x5727ab == 'string' ? _0x2a3b21.push(..._0x4e6e61) : (_0x5727ab.append(..._0x4e6e61), _0x2a3b21.push(_0x5727ab));
                    } else {
                        if (_0x47f53f) {
                            const _0x2a473a = _0x399850.replace(/\D/g, '');
                            _0x49e314(_0x2a3b21, _0x47f53f, _0x592610, !_0x2a473a || Number.isNaN(+_0x2a473a) ? void 0 : Math.min(_0x47f53f.length - 1, +_0x2a473a - 1));
                        }
                    }
                }
            }
            return _0x26c5e0 = _0x55f825 + _0x399850.length, '';
        }), _0x26c5e0 !== _0x12f945.length && _0x2a3b21.push(_0x12f945.slice(_0x26c5e0)), _0x2a3b21;
    }
    _0x47ad7e.superFormatter = _0xaf682e;
    function _0x37a222(_0x4dc600, _0x3760b7 = false, _0x4eb4ff) {
        const _0x1021f2 = _0x47ad7e.strings.get(_0x4dc600);
        let _0x4abe86;
        if (_0x1021f2) {
            if (_0x1021f2['_'] === 'langPackStringPluralized' && _0x4eb4ff?.length) {
                let _0x42b541 = _0x4eb4ff[0];
                typeof _0x42b541 == 'string' && (_0x42b541 = +_0x42b541.replace(/\D/g, ''));
                const _0x5c7b1f = _0x55dd5a.select(_0x42b541);
                _0x4abe86 = _0x1021f2[_0x5c7b1f + '_value'] || _0x1021f2.other_value;
            } else {
                _0x1021f2['_'] === 'langPackString' ? _0x4abe86 = _0x1021f2.value : _0x4abe86 = _0x4dc600;
            }
        } else {
            _0x4abe86 = _0x4dc600;
        }
        const _0x570240 = _0xaf682e(_0x4abe86, _0x4eb4ff);
        return _0x3760b7 ? _0x570240.map(_0x124cd7 => _0x124cd7 instanceof Node ? _0x124cd7.textContent : _0x124cd7).join('') : _0x570240;
    }
    _0x47ad7e.format = _0x37a222;
    _0x47ad7e.weakMap = new WeakMap();
    ;
    class _0x47ea99 {
        constructor(_0x33052f) {
            ;
            this.element = _0x33052f?.element || document.createElement('span');
            this.element.classList.add('i18n');
            this.property = _0x33052f?.property;
            _0x47ad7e.weakMap.set(this.element, this);
            ;
        }
    }
    class _0x2f1035 extends _0x47ea99 {
        constructor(_0x2bf73a = {}) {
            ;
            super({
                ..._0x2bf73a,
                'property': _0x2bf73a.property ?? 'innerHTML'
            });
            _0x2bf73a?.key && this.update(_0x2bf73a);
            ;
        }
        ['update'](_0x2b7939) {
            ;
            if (Hn(this, _0x2b7939), !this.key) {
                this.element.replaceChildren();
                return;
            }
            if (this.property === 'innerHTML') {
                this.element.replaceChildren(..._0x37a222(this.key, false, this.args));
                this.args?.length && this.element.normalize();
                ;
            } else {
                const _0x1b2c1d = this.element[this.property], _0x20408c = _0x37a222(this.key, true, this.args);
                _0x1b2c1d === void 0 ? this.element.dataset[this.property] = _0x20408c : this.element[this.property] = _0x20408c;
            }
        }
        ['compareAndUpdateBool'](_0x1bba09) {
            ;
            return this.key === _0x1bba09.key && Rf(this.args, _0x1bba09.args) ? false : (this.update(_0x1bba09), true);
        }
        ['compareAndUpdate'](_0x429e8f) {
            ;
            if (!(this.key === _0x429e8f.key && Rf(this.args, _0x429e8f.args))) {
                return this.update(_0x429e8f);
            }
        }
    }
    _0x47ad7e.IntlElement = _0x2f1035;
    const _0x4cdf60 = new Map();
    function _0x8bfe5b(_0x3b02ac = {}) {
        const _0x1d9e60 = JSON.stringify(_0x3b02ac);
        let _0x17b102 = _0x4cdf60.get(_0x1d9e60);
        return _0x17b102 || (_0x17b102 = new Intl.DateTimeFormat(_0x47ad7e.lastRequestedNormalizedLangCode + '-u-hc-' + _0x47ad7e.timeFormat, _0x3b02ac), _0x4cdf60.set(_0x1d9e60, _0x17b102)), _0x17b102;
    }
    const _0x4ee3b1 = {
        am: 'AM',
        pm: 'PM'
    };
    ;
    ;
    _0x47ad7e.getDateTimeFormat = _0x8bfe5b;
    _0x47ad7e.amPmCache = _0x4ee3b1;
    ;
    ;
    class _0x2a9c3f extends _0x47ea99 {
        constructor(_0x459196) {
            ;
            super({
                ..._0x459196,
                'property': _0x459196.property ?? 'textContent'
            });
            tf(this.element);
            _0x459196?.date && this.update(_0x459196);
            ;
        }
        ['update'](_0x1331f7) {
            ;
            Hn(this, _0x1331f7);
            let _0x1e29c2;
            if (this.options.hour && this.options.minute && Object.keys(this.options).length === 2) {
                const _0x460ffa = this.date.getHours();
                _0x1e29c2 = ('0' + (_0x47ad7e.timeFormat === 'h12' ? _0x460ffa % 12 || 12 : _0x460ffa)).slice(-2) + ':' + ('0' + this.date.getMinutes()).slice(-2);
                _0x47ad7e.timeFormat === 'h12' && (_0x1e29c2 += ' ' + (_0x460ffa < 12 ? _0x47ad7e.amPmCache.am : _0x47ad7e.amPmCache.pm));
                ;
            } else {
                const _0x21aaba = _0x8bfe5b(this.options);
                _0x1e29c2 = an(_0x21aaba.format(this.date));
            }
            this.element[this.property] = _0x1e29c2;
        }
    }
    _0x47ad7e.IntlDateElement = _0x2a9c3f;
    function _0x249968(_0x39abbd, _0x3535e5) {
        const _0x5dd282 = {};
        return _0x5dd282.key = _0x39abbd, _0x5dd282.args = _0x3535e5, new _0x2f1035(_0x5dd282).element;
    }
    _0x47ad7e.i18n = _0x249968;
    function _0x12909c(_0x3bf5e5) {
        ;
        return new _0x2f1035(_0x3bf5e5).element;
    }
    _0x47ad7e.i18n_ = _0x12909c;
    function _0x42652f(_0x230e81, _0x1fb166, _0x169406, _0x262d06) {
        const _0x3d19a4 = {};
        return _0x3d19a4.element = _0x230e81, _0x3d19a4.key = _0x1fb166, _0x3d19a4.args = _0x169406, _0x3d19a4.property = _0x262d06, new _0x2f1035(_0x3d19a4).element;
    }
    _0x47ad7e['_i18n'] = _0x42652f;
})(le || (le = {}));
const ue = le, X = le.i18n, Vm = le.i18n_, Gi = le['_i18n'];
function id(_0x5b5dfa, _0xea5eb6) {
    const _0x1abed7 = _0x5b5dfa.slice(0, 1);
    for (let _0x2bb2c5 = 1; _0x2bb2c5 < _0x5b5dfa.length; ++_0x2bb2c5) {
        const _0x347f45 = _0x5b5dfa.length - 1 === _0x2bb2c5;
        _0x1abed7.push(typeof _0xea5eb6 == 'function' ? _0xea5eb6(_0x347f45) : _0xea5eb6);
        _0x1abed7.push(_0x5b5dfa[_0x2bb2c5]);
        ;
    }
    return _0x1abed7;
}
function zm(_0x52a3cb, _0x349dbe = true, _0x528aed) {
    const _0x4795fb = id(_0x52a3cb, _0xdd9bdb => {
        const _0x3a45b4 = _0xdd9bdb && _0x349dbe ? 'AutoDownloadSettings.LastDelimeter' : 'AutoDownloadSettings.Delimeter';
        return _0x528aed ? le.format(_0x3a45b4, true) : X(_0x3a45b4);
    });
    return _0x528aed ? _0x4795fb.join('') : _0x4795fb;
}
async function mo(_0x32c860) {
    const {difference: _0x19576f} = _0x32c860;
    if (_0x19576f.lang_code !== le.lastRequestedLangCode) {
        return;
    }
    const _0xcb2965 = await le.getCacheLangPack();
    if (!(_0xcb2965?.lang_code !== _0x19576f.lang_code || _0xcb2965.lang_code !== le.lastRequestedLangCode)) {
        if (_0xcb2965.version !== _0x19576f.from_version) {
            qi(_0x19576f);
            return;
        }
        if (_0x19576f.strings) {
            const _0x131335 = _0xcb2965.strings || (_0xcb2965.strings = []);
            for (const _0x4d06de of _0x19576f.strings) {
                const _0x33c200 = _0x131335.findIndex(_0x436a1e => _0x436a1e.key === _0x4d06de.key);
                _0x33c200 !== -1 ? _0x131335[_0x33c200] = _0x4d06de : _0x131335.push(_0x4d06de);
            }
        }
        _0xcb2965.version = _0x19576f.version;
        _0xcb2965.from_version = _0x19576f.from_version;
        await le.saveLangPack(_0xcb2965, true);
        ;
    }
}
function qi(_0x1b04a6) {
    const {lang_code: _0x5a078b} = _0x1b04a6;
    _0x5a078b === le.lastRequestedLangCode && ad();
}
function rd() {
    const _0x5af81a = { lang_code: le.lastRequestedLangCode };
    ;
    qi(_0x5af81a);
    ;
}
async function ad() {
    const _0x25e816 = await le.getCacheLangPack(), _0x3dd274 = await I.managers.appLangPackManager.getDifference(_0x25e816.lang_code, _0x25e816.version);
    if (_0x3dd274.version > _0x25e816.version) {
        return mo({ 'difference': _0x3dd274 });
    }
}
I.addEventListener('langpack_update', mo);
I.addEventListener('langpack_update_too_long', qi);
I.addEventListener('state_cleared', rd);
N && (N.I18n = le);
;
function od(_0x4e8576) {
    return +_0x4e8576 < 0;
}
function cd(_0x394812) {
    return +_0x394812 >= 0;
}
String.prototype.toUserId = function () {
    ;
    return (+this).toUserId();
};
String.prototype.toChatId = function () {
    ;
    return (+this).toChatId();
};
String.prototype.toPeerId = function (_0x3a8051) {
    ;
    return (+this).toPeerId(_0x3a8051);
};
String.prototype.isPeerId = function () {
    ;
    return /^[\d-]/.test(this.toString());
};
Number.prototype.toUserId = function () {
    return +this;
};
Number.prototype.toChatId = function () {
    ;
    return Math.abs(this);
};
Number.prototype.toPeerId = function (_0x115ed3) {
    ;
    return _0x115ed3 === void 0 ? +this : _0x115ed3 ? -Math.abs(this) : +this;
};
Number.prototype.isPeerId = function () {
    return true;
};
[
    [
        'isUser',
        cd
    ],
    [
        'isAnyChat',
        od
    ]
].forEach(_0x38fb3e => {
    const _0x14d290 = Array.isArray(_0x38fb3e) ? _0x38fb3e[0] : _0x38fb3e, _0x307187 = Array.isArray(_0x38fb3e) ? _0x38fb3e[1] : _0x38fb3e;
    String.prototype[_0x14d290] = function () {
        ;
        return _0x307187.call(null, this.toString());
    };
    Number.prototype[_0x14d290] = function () {
        ;
        return _0x307187.call(null, +this);
    };
    ;
});
;
function dd(..._0x2cd005) {
    const _0x1e3ede = _0x2cd005.reduce((_0x4e6945, _0x3e8697) => _0x4e6945 + (_0x3e8697.byteLength || _0x3e8697.length), 0), _0x52b7ed = new Uint8Array(_0x1e3ede);
    let _0x405b72 = 0;
    return _0x2cd005.forEach(_0x5e8943 => {
        ;
        _0x52b7ed.set(_0x5e8943 instanceof ArrayBuffer ? new Uint8Array(_0x5e8943) : _0x5e8943, _0x405b72);
        _0x405b72 += _0x5e8943.byteLength || _0x5e8943.length;
        ;
    }), _0x52b7ed;
}
Uint8Array.prototype.concat = function (..._0x380437) {
    return dd(this, ..._0x380437);
};
Uint8Array.prototype.toJSON = function () {
    return [...this];
};
Promise.prototype.finally = Promise.prototype.finally || function (_0x3f15c4) {
    const _0x40c84f = _0x353527 => Promise.resolve(_0x3f15c4()).then(_0x353527);
    return this.then(_0x15ac8d => _0x40c84f(() => _0x15ac8d), _0x5e6d12 => _0x40c84f(() => Promise.reject(_0x5e6d12)));
};
;
class ld {
    constructor() {
        ;
        this.convertPromises = {};
    }
    ['init']() {
        const _0x323ff3 = { type: 'module' };
        ;
        this.worker = new Worker(new URL('' + new URL('t1gvux5b1sy2.js', import.meta.url).href, import.meta.url), _0x323ff3);
        this.worker.addEventListener('message', _0x70346e => {
            const _0x5448b3 = _0x70346e.data.payload, _0x50d462 = this.convertPromises[_0x5448b3.fileName];
            _0x50d462 && (_0x5448b3.bytes ? _0x50d462.resolve(_0x5448b3.bytes) : _0x50d462.reject(), delete this.convertPromises[_0x5448b3.fileName]);
        });
        ;
        ;
    }
    ['postMessage'](_0x116fa3) {
        ;
        this.init && (this.init(), this.init = null);
        this.worker.postMessage(_0x116fa3);
        ;
    }
    ['convert'](_0xa3837f, _0x5dadc2) {
        ;
        if (this.convertPromises.hasOwnProperty(_0xa3837f)) {
            return this.convertPromises[_0xa3837f];
        }
        const _0x16f282 = q(), _0x210f17 = {
                fileName: _0xa3837f,
                bytes: _0x5dadc2
            };
        ;
        ;
        ;
        const _0x19ee11 = {};
        return _0x19ee11.type = 'convertWebp', _0x19ee11.payload = _0x210f17, (this.postMessage(_0x19ee11), this.convertPromises[_0xa3837f] = _0x16f282);
    }
}
const $i = new ld();
N.webpWorkerController = $i;
class ud {
    constructor() {
        ;
        this.prefix = '';
        this.cache = {};
        this.useStorage = true;
        ;
    }
    ['get'](_0xf4e432, _0x4e3960 = true) {
        ;
        if (this.cache.hasOwnProperty(_0xf4e432) && _0x4e3960) {
            return this.cache[_0xf4e432];
        }
        if (this.useStorage) {
            let _0x17af3a;
            try {
                _0x17af3a = localStorage.getItem(this.prefix + _0xf4e432);
            } catch {
                throw this.useStorage = false, Ee('STORAGE_OFFLINE');
            }
            if (_0x17af3a !== null) {
                try {
                    _0x17af3a = JSON.parse(_0x17af3a);
                } catch {
                }
            } else {
                _0x17af3a = void 0;
            }
            return _0x17af3a;
        } else {
            throw Ee('STORAGE_OFFLINE');
        }
    }
    ['set'](_0x49dc87, _0x4bc66c = false) {
        ;
        let _0x2e0769;
        for (const _0x4e98a5 in _0x49dc87)
            if (_0x49dc87.hasOwnProperty(_0x4e98a5)) {
                const _0x1fc027 = _0x49dc87[_0x4e98a5];
                if (this.cache[_0x4e98a5] = _0x1fc027, !_0x4bc66c) {
                    try {
                        if (!this.useStorage) {
                            throw Ee('STORAGE_OFFLINE');
                        }
                        const _0x2cc475 = JSON.stringify(_0x1fc027);
                        localStorage.setItem(this.prefix + _0x4e98a5, _0x2cc475);
                    } catch (_0x1a402e) {
                        this.useStorage = false;
                        _0x2e0769 = _0x1a402e;
                        ;
                    }
                }
            }
        if (_0x2e0769) {
            throw _0x2e0769;
        }
    }
    ['delete'](_0x4c6c21, _0x2277ad = false) {
        ;
        _0x4c6c21 = '' + _0x4c6c21;
        _0x2277ad || delete this.cache[_0x4c6c21];
        ;
        try {
            localStorage.removeItem(this.prefix + _0x4c6c21);
        } catch {
        }
    }
    ['clear'](_0x27067a = []) {
        ;
        try {
            const _0x1a4a84 = {};
            _0x27067a?.length && _0x27067a.forEach(_0x524cf3 => {
                const _0x43337c = this.get(_0x524cf3);
                _0x43337c !== void 0 && (_0x1a4a84[_0x524cf3] = _0x43337c);
            });
            localStorage.clear();
            _0x27067a?.length && this.set(_0x1a4a84);
            ;
        } catch {
        }
    }
    ['toggleStorage'](_0x1a6462, _0x205e0b) {
        ;
        if (this.useStorage = _0x1a6462, !!_0x205e0b && _0x1a6462) {
            return this.set(this.cache);
        }
    }
}
const We = class We {
    constructor(_0x1feea9 = []) {
        ;
        this.log = Q('[local-storage-controller]');
        We.STORAGES.push(this);
        this.encryptableKeys = new Set(_0x1feea9);
        bt || (this.storage = new ud());
        ;
    }
    async ['getEncryptedStorage']() {
        ;
        return this.encryptedStorage ? this.encryptedStorage : (this.encryptedStorage = Le.getInstance(We.ENCRYPTION_DB, We.ENCRYPTION_DB_STORE_NAME), this.encryptedStorage.loadEncrypted(), this.encryptedStorage);
    }
    async ['shouldUseEncryptableStorage'](_0x4b5c2f) {
        ;
        return this.encryptableKeys.has(_0x4b5c2f) === false ? false : Me.isUsingPasscode();
    }
    async ['localStorageProxy'](_0x318e38, ..._0x1d8ae2) {
        const _0x1250fa = {};
        return _0x1250fa.type = _0x318e38, _0x1250fa.args = _0x1d8ae2, bt ? ns.getInstance().invoke('localStorageProxy', _0x1250fa) : (_0x1d8ae2 = Array.prototype.slice.call(_0x1d8ae2), this.storage[_0x318e38].apply(this.storage, _0x1d8ae2));
    }
    async ['encryptedStorageProxy'](_0x3d0c04, ..._0x53706b) {
        ;
        return bt ? (await this.getEncryptedStorage())[_0x3d0c04](..._0x53706b) : ns.getInstance().invoke('localStorageEncryptedProxy', {
            'type': _0x3d0c04,
            'args': _0x53706b
        });
    }
    async ['waitEncryptionToFinish']() {
        ;
        this.encryptionDeferred && await this.encryptionDeferred;
    }
    async ['get'](_0x17e49c, _0x2ee629) {
        ;
        return await this.waitEncryptionToFinish(), await this.shouldUseEncryptableStorage(_0x17e49c) ? (await this.encryptedStorageProxy('get', [_0x17e49c]))[0] : this.localStorageProxy('get', _0x17e49c, _0x2ee629);
    }
    async ['set'](_0x329222) {
        ;
        await this.waitEncryptionToFinish();
        _0x329222 = { ..._0x329222 };
        ;
        const _0x28bf37 = Object.keys(_0x329222).filter(_0x2471f7 => this.encryptableKeys.has(_0x2471f7));
        if (_0x28bf37.length && await this.shouldUseEncryptableStorage(_0x28bf37[0])) {
            const _0x971594 = _0x28bf37.map(_0x5472ff => _0x329222[_0x5472ff]);
            await this.encryptedStorageProxy('save', _0x28bf37, _0x971594);
            _0x28bf37.forEach(_0x5edd35 => {
                delete _0x329222[_0x5edd35];
            });
            ;
        }
        if (Object.keys(_0x329222).length) {
            return this.localStorageProxy('set', _0x329222);
        }
    }
    async ['delete'](_0x3b352f) {
        ;
        return await this.waitEncryptionToFinish(), await this.shouldUseEncryptableStorage(_0x3b352f) ? this.encryptedStorageProxy('delete', _0x3b352f) : this.localStorageProxy('delete', _0x3b352f);
    }
    ['toggleStorage'](_0x107f70, _0x1f08d6) {
        ;
        return this.localStorageProxy('toggleStorage', _0x107f70, _0x1f08d6);
    }
    ['warnAboutEncrypting'](_0x362f99) {
        ;
        return bt ? false : (this.log.warn(_0x362f99 + ' should not be called in a window client, call it only in the MTProto worker'), true);
    }
    async ['encryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('encryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        const _0x432523 = Array.from(this.encryptableKeys.values()), _0x57eda5 = await Promise.all(_0x432523.map(_0x1ba00e => this.localStorageProxy('get', _0x1ba00e))), _0x5552d8 = _0x432523.map((_0x2e87d9, _0x1db82a) => [
                _0x2e87d9,
                _0x57eda5[_0x1db82a]
            ]).filter(_0x34c89c => _0x34c89c[1]), _0x300049 = Object.fromEntries(_0x5552d8);
        this.encryptedStorage = Le.getInstance(We.ENCRYPTION_DB, We.ENCRYPTION_DB_STORE_NAME);
        await this.encryptedStorage.loadDecrypted(_0x300049);
        await Promise.all(_0x5552d8.map(([_0xebe794]) => this.localStorageProxy('set', _0xebe794, true)));
        await Promise.all(_0x5552d8.map(([_0x51c8d0]) => this.localStorageProxy('delete', _0x51c8d0)));
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
    async ['reEncryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('reEncryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        await (await this.getEncryptedStorage()).reEncrypt();
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
    async ['decryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('decryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        const _0x668611 = await this.getEncryptedStorage(), _0x28faf5 = (await _0x668611.getAllEntries()).filter(_0x2027c5 => this.encryptableKeys.has(_0x2027c5[0])), _0x569e98 = Object.fromEntries(_0x28faf5);
        await this.localStorageProxy('set', _0x569e98);
        await _0x668611.clear();
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
};
We.STORAGES = [];
We.ENCRYPTION_DB = uo();
We.ENCRYPTION_DB_STORE_NAME = 'localStorage__encrypted';
;
let qn = We;
const j = new qn([
    'account1',
    'account2',
    'account3',
    'account4',
    'auth_key_fingerprint',
    'user_auth',
    'dc'
]);
N.appStorage = j;
function se(_0x50c136) {
    ;
    if (_0x50c136 || (_0x50c136 = window.event), _0x50c136) {
        _0x50c136 = _0x50c136.originalEvent || _0x50c136;
        try {
            _0x50c136.stopPropagation && _0x50c136.stopPropagation();
            _0x50c136.preventDefault && _0x50c136.preventDefault();
            _0x50c136.returnValue = false;
            _0x50c136.cancelBubble = true;
            ;
        } catch {
        }
    }
    return false;
}
function hd(_0x1700c0) {
    ;
    return bs && _0x1700c0 instanceof TouchEvent && _0x1700c0.touches[0].clientX < 30;
}
const kt = 'navigation' in window;
class md {
    constructor() {
        ;
        if (this.escapeHandlers = [], this.onPopState = _0x481f1a => {
                ;
                this['_onPopState'](window.location.hash, _0x481f1a.state);
            }, this.onKeyDown = _0x1e73ca => {
                ;
                const _0x1e0555 = this.navigations[this.navigations.length - 1];
                _0x1e0555 && _0x1e73ca.key === 'Escape' && this.canCloseOnEscape() && (!_0x1e0555.onEscape || _0x1e0555.onEscape()) && (se(_0x1e73ca), this.back(_0x1e0555.type));
            }, this.onTouchStart = _0x4415cd => {
                const _0x277074 = {
                    passive: true,
                    once: true
                };
                ;
                ;
                if (_0x4415cd.touches.length > 1) {
                    this.debug && this.log('touchstart');
                    hd(_0x4415cd) && (this.isPossibleSwipe = true, window.addEventListener('touchend', () => {
                        setTimeout(() => {
                            ;
                            this.isPossibleSwipe = false;
                        }, 100);
                    }, _0x277074));
                }
                ;
            }, this.navigations = [], this.id = Date.now(), this.manual = false, this.log = Q('NC'), this.debug = true, this.currentHash = window.location.hash, this.overriddenHash = '', this.isPossibleSwipe = false, kt) {
            this.debug && this.log('push');
            const _0x12a7a3 = location.origin + location.pathname + location.search + location.hash;
            history.pushState(this.id, '', _0x12a7a3);
        }
        const _0x278297 = {
            capture: true,
            passive: false
        };
        ;
        ;
        ;
        if (kt && navigation.addEventListener('navigate', _0x38eabf => {
                ;
                if (_0x38eabf.navigationType === 'reload' || _0x38eabf.navigationType === 'replace' || !_0x38eabf.destination.sameDocument) {
                    return;
                }
                this.debug && this.log('navigate', _0x38eabf);
                se(_0x38eabf);
                ;
                const _0x38b2ce = new URL(_0x38eabf.destination.url);
                this['_onPopState'](_0x38b2ce.hash, 0);
            }), kt || window.addEventListener('popstate', this.onPopState), window.addEventListener('keydown', this.onKeyDown, _0x278297), bs) {
            const _0xfd653b = { passive: true };
            ;
            const _0xbb263d = _0xfd653b;
            window.addEventListener('touchstart', this.onTouchStart, _0xbb263d);
        }
        history.scrollRestoration = 'manual';
        kt || this.pushState();
        ;
    }
    ['_onPopState'](_0x474f60, _0xd7b919) {
        ;
        if (this.debug && this.log('popstate', this.isPossibleSwipe, _0x474f60, _0xd7b919), _0x474f60 !== this.currentHash) {
            if (this.debug && this.log.warn('hash changed, new=' + _0x474f60 + ', current=' + this.currentHash + ', overridden=' + this.overriddenHash), (kt || _0xd7b919 === this.id) && this.overriddenHash && this.overriddenHash !== _0x474f60) {
                this.overrideHash(this.overriddenHash);
            } else {
                if (_0xd7b919 && !this.overriddenHash && _0x474f60) {
                    this.overrideHash();
                } else {
                    this.currentHash = _0x474f60;
                    this.onHashChange && this.onHashChange();
                    ;
                    return;
                }
            }
        }
        if (!kt && _0xd7b919 !== this.id && (this.pushState(), !this.navigations.length)) {
            return;
        }
        const _0x158536 = this.navigations.pop();
        if (!_0x158536) {
            this.pushState();
            return;
        }
        this.manual = !this.isPossibleSwipe;
        this.handleItem(_0x158536, this.navigations.length);
        ;
    }
    ['overrideHash'](_0x221e1a = '') {
        ;
        _0x221e1a && _0x221e1a[0] !== '#' ? _0x221e1a = '#' + _0x221e1a : _0x221e1a === '#' && (_0x221e1a = '');
        if (this.currentHash !== _0x221e1a) {
            this.overriddenHash = this.currentHash = _0x221e1a;
            this.replaceState();
            this.pushState();
        }
        ;
    }
    ['handleItem'](_0x14fdfa, _0x5adc4f = this.navigations.indexOf(_0x14fdfa)) {
        const _0x1893e1 = _0x14fdfa.onPop(this.manual ? void 0 : false);
        this.debug && this.log('popstate, navigation:', _0x14fdfa, this.navigations);
        _0x1893e1 === false ? this.spliceItems(Math.min(this.navigations.length, _0x5adc4f), 0, _0x14fdfa) : _0x14fdfa.noBlurOnPop || ja();
        this.manual = false;
        ;
    }
    ['findItemByType'](_0x7fdc5c) {
        ;
        for (let _0x7d6d1 = this.navigations.length - 1; _0x7d6d1 >= 0; --_0x7d6d1) {
            const _0x3e4cfb = this.navigations[_0x7d6d1];
            if (_0x3e4cfb.type === _0x7fdc5c) {
                return {
                    'item': _0x3e4cfb,
                    'index': _0x7d6d1
                };
            }
        }
    }
    ['back'](_0x4c947c) {
        ;
        if (_0x4c947c) {
            const _0x370a1f = this.findItemByType(_0x4c947c);
            if (_0x370a1f) {
                this.backByItem(_0x370a1f.item, _0x370a1f.index);
                return;
            }
        }
        history.back();
    }
    ['backByItem'](_0x41ce5e, _0x192f1a = this.navigations.indexOf(_0x41ce5e)) {
        ;
        if (_0x192f1a !== -1) {
            this.manual = true;
            this.navigations.splice(_0x192f1a, 1);
            this.handleItem(_0x41ce5e, _0x192f1a);
        }
    }
    ['onItemAdded'](_0x229abd) {
        ;
        this.debug && this.log('onItemAdded', _0x229abd, this.navigations);
        _0x229abd.noHistory || this.pushState();
        ;
    }
    ['pushItem'](_0x307be7) {
        ;
        this.navigations.push(_0x307be7);
        this.onItemAdded(_0x307be7);
        ;
    }
    ['unshiftItem'](_0xf34410) {
        ;
        this.navigations.unshift(_0xf34410);
        this.onItemAdded(_0xf34410);
        ;
    }
    ['spliceItems'](_0x2559f0, _0x39bee6, ..._0x4545cc) {
        ;
        this.navigations.splice(_0x2559f0, _0x39bee6, ..._0x4545cc);
        _0x4545cc.forEach(_0x53eb0e => {
            ;
            this.onItemAdded(_0x53eb0e);
        });
        ;
    }
    ['pushState']() {
        ;
        this.debug && this.log('push');
        this.manual = false;
        kt ? history.replaceState(this.id, '') : history.pushState(this.id, '');
        ;
    }
    ['replaceState']() {
        ;
        this.debug && this.log.warn('replace');
        const _0xa5f22f = location.origin + location.pathname + location.search + this.overriddenHash;
        history.replaceState(this.id, '', _0xa5f22f);
    }
    ['removeItem'](_0x4cb69d) {
        ;
        _0x4cb69d && xe(this.navigations, _0x4cb69d);
    }
    ['removeByType'](_0x13acbd, _0x13853c = false) {
        ;
        for (let _0x13ac7c = this.navigations.length - 1; _0x13ac7c >= 0 && !(this.navigations[_0x13ac7c].type === _0x13acbd && (this.navigations.splice(_0x13ac7c, 1), _0x13853c)); --_0x13ac7c) {
            ;
        }
    }
    ['canCloseOnEscape']() {
        ;
        return this.escapeHandlers.every(_0x1bf71a => _0x1bf71a());
    }
    ['registerEscapeHandler'](_0xcf432f) {
        ;
        return this.escapeHandlers.push(_0xcf432f), () => {
            ;
            this.escapeHandlers = this.escapeHandlers.filter(_0x649d86 => _0x649d86 !== _0xcf432f);
        };
    }
}
const Ie = new md();
N.appNavigationController = Ie;
class gd {
    ['reload'](_0xfb09e0 = true) {
        ;
        try {
            Ie.spliceItems(0, 1e+400);
            _0xfb09e0 && Ie.overrideHash();
            location.reload();
            ;
        } catch {
        }
    }
    ['close']() {
        ;
        try {
            window.close();
        } catch {
        }
    }
    ['focus']() {
        ;
        window.focus();
    }
}
const go = new gd();
function Ye(_0x13f2f4) {
    ;
    if (_0x13f2f4 === null || typeof _0x13f2f4 != 'object') {
        return _0x13f2f4;
    }
    if (_0x13f2f4 instanceof Date) {
        return new Date(_0x13f2f4.getTime());
    }
    if (Array.isArray(_0x13f2f4)) {
        return _0x13f2f4.map(_0x2994cc => Ye(_0x2994cc));
    }
    if (ArrayBuffer.isView(_0x13f2f4)) {
        return _0x13f2f4.slice();
    }
    const _0x5245de = new _0x13f2f4.constructor();
    for (var _0x125d68 in _0x13f2f4)
        _0x13f2f4.hasOwnProperty(_0x125d68) && (_0x5245de[_0x125d68] = Ye(_0x13f2f4[_0x125d68]));
    return _0x5245de;
}
const Vf = typeof SharedWorker < 'u' && !Mt.noSharedWorker, pd = Fe ? 'touchstart' : 'mousemove';
class bd extends je {
    constructor() {
        ;
        super();
        this['_isIdle'] = true;
        this.focusPromise = Promise.resolve();
        this.focusResolve = () => {
        };
        window.addEventListener('blur', () => {
            const _0x49d82b = { once: true };
            ;
            this.isIdle = true;
            window.addEventListener('focus', () => {
                ;
                this.isIdle = false;
            }, _0x49d82b);
            ;
            ;
        });
        window.addEventListener(pd, () => {
            ;
            this.isIdle = false;
        }, {
            'once': true,
            'passive': true
        });
        this.addEventListener('change', _0x240345 => {
            ;
            _0x240345 ? this.focusPromise = new Promise(_0x1c3775 => {
                ;
                this.focusResolve = _0x1c3775;
            }) : this.focusResolve();
        });
        ;
    }
    ['getFocusPromise']() {
        ;
        return this.focusPromise;
    }
    get ['isIdle']() {
        ;
        return this['_isIdle'];
    }
    set ['isIdle'](_0x15fa48) {
        ;
        if (this['_isIdle'] !== _0x15fa48) {
            this['_isIdle'] = _0x15fa48;
            this.dispatchEvent('change', _0x15fa48);
        }
    }
}
const as = new bd(), yd = 5000, vd = 30000, Ed = 20000, wd = Vf;
class Dd extends je {
    constructor() {
        ;
        super(false);
        this.log = Q('INSTANCE');
        this.clearInstance = () => {
            ;
            this.masterInstance && !this.deactivated && (this.log.warn('clear master instance'), j.delete('xt_instance'));
        };
        this.checkInstance = async (_0x46774c = as.isIdle) => {
            ;
            if (this.deactivated) {
                return;
            }
            const _0x251bce = Date.now(), _0x3a7639 = {
                    'id': this.instanceId,
                    'idle': _0x46774c,
                    'time': _0x251bce
                }, [_0x16de99, _0x4b78da = ne.build] = await Promise.all([
                    j.get('xt_instance', false),
                    j.get('k_build', false)
                ]);
            if (wd) {
                const _0xeee9c4 = { xt_instance: _0x3a7639 };
                ;
                j.set(_0xeee9c4);
                ;
                return;
            }
            const _0x511eaf = { xt_instance: _0x3a7639 };
            ;
            !_0x46774c || !_0x16de99 || _0x16de99.id === this.instanceId || _0x16de99.time < _0x251bce - Ed ? (j.set(_0x511eaf), this.masterInstance || (this.masterInstance = true, I.managers.networkerFactory.startAll(), this.log.warn('now master instance', _0x3a7639)), this.clearDeactivateTimeout()) : this.masterInstance && (this.masterInstance = false, I.managers.networkerFactory.stopAll(), this.log.warn('now idle instance', _0x3a7639), this.deactivateTimeout || (this.deactivateTimeout = window.setTimeout(() => this.deactivateInstance('tabs'), vd)));
            ;
        };
        this.log = Q('INSTANCE');
        this.instanceId = If;
        ;
    }
    get ['deactivatedReason']() {
        ;
        return this.deactivated;
    }
    ['start']() {
        ;
        if (this.reset(), !this.started) {
            this.started = true;
            as.addEventListener('change', this.checkInstance);
            re.setInterval(this.checkInstance, yd);
            ;
            try {
                document.documentElement.addEventListener('beforeunload', this.clearInstance);
            } catch {
            }
            return this.checkInstance();
        }
    }
    ['reset']() {
        ;
        this.masterInstance = false;
        this.clearDeactivateTimeout();
        this.deactivated = void 0;
        ;
    }
    ['activateInstance']() {
        ;
        this.deactivated && (this.reset(), this.checkInstance(false), this.dispatchEvent('activated'));
    }
    ['deactivateInstance'](_0x5760ae) {
        ;
        this.masterInstance || this.deactivated || (this.log.warn('deactivate', _0x5760ae), this.clearDeactivateTimeout(), this.deactivated = _0x5760ae, this.dispatchEvent('deactivated', _0x5760ae));
    }
    ['clearDeactivateTimeout']() {
        ;
        this.deactivateTimeout && (clearTimeout(this.deactivateTimeout), this.deactivateTimeout = 0);
    }
}
const $n = new Dd();
N && (N.singleInstance = $n);
function Sd(_0x2331a, _0x2eaad0) {
    ;
    if (_0x2331a !== void 0) {
        return _0x2331a = +_0x2331a.toFixed(0), _0x2eaad0 ? _0x2331a < Mf ? _0x2331a : _0x2331a % Mf : _0x2331a;
    }
}
function Ad(_0x2ac946) {
    return Sd(_0x2ac946, true);
}
const Cd = 10000;
class po extends je {
    constructor() {
        ;
        super(false);
        this.isAvailable = true;
        this.isPushEnabled = false;
        this.localNotificationsAvailable = true;
        this.started = false;
        this.settings = {};
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        this.userVisibleOnly = !this.isFirefox;
        this.log = Q('PUSH-API');
        this.subscribe = () => {
            ;
            this.isAvailable && navigator.serviceWorker.ready.then(_0x1f68b4 => {
                const _0x284e11 = { userVisibleOnly: this.userVisibleOnly };
                ;
                _0x1f68b4.pushManager.subscribe(_0x284e11).then(_0x1f36b3 => {
                    ;
                    this.isPushEnabled = true;
                    this.pushSubscriptionNotify('subscribe', _0x1f36b3);
                    ;
                }).catch(_0x5c140f => {
                    ;
                    Notification.permission === 'denied' ? this.log('Permission for Notifications was denied') : (this.log('Unable to subscribe to push.', _0x5c140f), this.userVisibleOnly || (this.userVisibleOnly = true, setTimeout(this.subscribe, 0)));
                });
                ;
            });
        };
        this.isAliveNotify = () => {
            ;
            if (!this.isAvailable || $n.deactivatedReason) {
                return;
            }
            this.settings.baseUrl = (location.href || '').replace(/#.*$/, '');
            const _0x56b450 = {
                push_action_mute1d: Re ? 'PushNotification.Action.Mute1d.Mobile' : 'PushNotification.Action.Mute1d',
                push_action_settings: Re ? 'PushNotification.Action.Settings.Mobile' : 'PushNotification.Action.Settings',
                push_message_nopreview: 'PushNotification.Message.NoPreview'
            };
            ;
            ;
            ;
            ;
            const _0x52bdf7 = { _0x35f7a1: ue.format(_0x375106[_0x35f7a1], true) }, _0x375106 = _0x56b450;
            for (const _0x35f7a1 in _0x375106);
            this.serviceMessagePort.invokeVoid('pushPing', {
                'localNotifications': this.localNotificationsAvailable,
                'lang': _0x52bdf7,
                'settings': this.settings
            });
            this.isAliveTO = setTimeout(this.isAliveNotify, Cd);
            ;
        };
        (!('PushManager' in window) || !('Notification' in window) || !('serviceWorker' in navigator)) && (this.log.warn('Push messaging is not supported.'), this.isAvailable = false, this.localNotificationsAvailable = false);
        this.isAvailable && Notification.permission === 'denied' && this.log.warn('The user has blocked notifications.');
        ;
    }
    ['start']() {
        ;
        this.started || (this.started = true, this.getSubscription(), this.setUpServiceWorkerChannel());
    }
    ['setLocalNotificationsDisabled']() {
        ;
        this.localNotificationsAvailable = false;
    }
    ['getSubscription']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x44433e => {
            ;
            _0x44433e.pushManager.getSubscription().then(_0x280b3b => {
                ;
                this.isPushEnabled = !!_0x280b3b;
                this.pushSubscriptionNotify('init', _0x280b3b);
                ;
            }).catch(_0x148929 => {
                ;
                this.log.error('Error during getSubscription()', _0x148929);
            });
        });
    }
    ['unsubscribe']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x5a5aa2 => {
            ;
            _0x5a5aa2.pushManager.getSubscription().then(_0xa3bc05 => {
                ;
                this.isPushEnabled = false;
                _0xa3bc05 && (this.pushSubscriptionNotify('unsubscribe', _0xa3bc05), setTimeout(() => {
                    ;
                    _0xa3bc05.unsubscribe().then(_0x5851ad => {
                        ;
                        this.isPushEnabled = false;
                    }).catch(_0x16b0d5 => {
                        ;
                        this.log.error('Unsubscription error: ', _0x16b0d5);
                    });
                }, 3000));
                ;
            }).catch(_0x2b2493 => {
                ;
                this.log.error('Error thrown while unsubscribing from push messaging.', _0x2b2493);
            });
        });
    }
    ['forceUnsubscribe']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x4b3b42 => {
            ;
            _0x4b3b42.pushManager.getSubscription().then(_0x1223c2 => {
                ;
                this.log.warn('force unsubscribe', _0x1223c2);
                _0x1223c2 && _0x1223c2.unsubscribe().then(_0x304518 => {
                    ;
                    this.log.warn('force unsubscribe successful', _0x304518);
                    this.isPushEnabled = false;
                    ;
                }).catch(_0x5e563a => {
                    ;
                    this.log.error('Unsubscription error: ', _0x5e563a);
                });
                ;
            }).catch(_0x44585c => {
                ;
                this.log.error('Error thrown while unsubscribing from push messaging.', _0x44585c);
            });
        });
    }
    ['setSettings'](_0x8431fa) {
        ;
        this.settings = Ye(_0x8431fa);
        clearTimeout(this.isAliveTO);
        this.isAliveNotify();
        ;
    }
    ['hidePushNotifications']() {
        ;
        this.isAvailable && this.serviceMessagePort.invokeVoid('notificationsClear', void 0);
    }
    ['setUpServiceWorkerChannel']() {
        ;
        this.isAvailable && (this.serviceMessagePort.addEventListener('pushClick', _0x3f5fcb => {
            ;
            if ($n.deactivatedReason) {
                go.reload();
                return;
            }
            this.dispatchEvent('push_notification_click', _0x3f5fcb);
        }), navigator.serviceWorker.ready.then(this.isAliveNotify));
    }
    ['pushSubscriptionNotify'](_0x5b33c5, _0x39bf66) {
        ;
        if (_0x39bf66) {
            const _0xf1f37 = _0x39bf66.toJSON();
            if (!_0xf1f37 || !_0xf1f37.endpoint || !_0xf1f37.keys || !_0xf1f37.keys.p256dh || !_0xf1f37.keys.auth) {
                this.log.warn('Invalid push subscription', _0xf1f37);
                this.unsubscribe();
                this.isAvailable = false;
                this.pushSubscriptionNotify(_0x5b33c5);
                ;
                return;
            }
            this.log.warn('Push', _0x5b33c5, _0xf1f37);
            this.dispatchEvent('push_' + _0x5b33c5, {
                'tokenType': 10,
                'tokenValue': JSON.stringify(_0xf1f37)
            });
            ;
        } else {
            this.log.warn('Push', _0x5b33c5, false);
            this.dispatchEvent('push_' + _0x5b33c5, false);
            ;
        }
    }
    ['ignorePushByMid'](_0x35a049, _0x4a677d) {
        ;
        this.isAvailable && this.serviceMessagePort.invokeVoid('shownNotification', _0x35a049 + '_' + Ad(_0x4a677d));
    }
}
const zf = new po();
N && (N.webPushApiManager = zf);
const a0_0xa7afeb = {};
a0_0xa7afeb['__proto__'] = null;
a0_0xa7afeb.WebPushApiManager = po;
a0_0xa7afeb.default = zf;
;
const a0_0x4a0ad1 = {};
a0_0x4a0ad1.value = 'Module';
const Gm = Object.freeze(Object.defineProperty(a0_0xa7afeb, Symbol.toStringTag, a0_0x4a0ad1));
function kd(_0x4236dd) {
    const _0x40cf5d = document.createElement('script'), _0x4cfcfa = new Promise(_0x5c5acb => {
            _0x40cf5d.onload = _0x40cf5d.onerror = () => {
                _0x5c5acb(_0x40cf5d);
            };
        });
    return _0x40cf5d.src = _0x4236dd, document.body.appendChild(_0x40cf5d), _0x4cfcfa;
}
function bo(_0x118068) {
    const _0x1b2af3 = Date.now();
    return _0x118068 ? _0x1b2af3 / 1000 | 0 : _0x1b2af3;
}
class yo {
    constructor() {
        ;
        this.disabled = !ne.domains.includes(location.hostname);
    }
    ['setAuthorized'](_0x41aa6d) {
        ;
        if (!this.disabled) {
            return j.get('tgme_sync').then(_0x445618 => {
                const _0x2e2e80 = bo(true);
                if (_0x41aa6d && _0x445618?.canRedirect === _0x41aa6d && _0x445618.ts + 86400 > _0x2e2e80) {
                    return;
                }
                const _0x9095d4 = {
                    canRedirect: _0x41aa6d,
                    ts: _0x2e2e80
                };
                ;
                ;
                ;
                const _0x19f0b1 = { tgme_sync: _0x9095d4 };
                ;
                j.set(_0x19f0b1);
                ;
                const _0x3ea55a = '_websync_?authed=' + (_0x41aa6d ? '1' : '0') + '&version=' + encodeURIComponent(ne.version + ' ' + ne.suffix), _0x32d703 = [
                        '//telegram.me/' + _0x3ea55a,
                        '//t.me/' + _0x3ea55a
                    ].map(_0x1d56c5 => kd(_0x1d56c5).then(_0x883137 => {
                        _0x883137.remove();
                    }));
                return Promise.all(_0x32d703);
            });
        }
    }
}
const Yi = new yo();
N && (N.telegramMeWebManager = Yi);
const a0_0x29df34 = {};
a0_0x29df34['__proto__'] = null;
a0_0x29df34.TelegramMeWebManager = yo;
a0_0x29df34.default = Yi;
;
const a0_0x37b590 = {};
a0_0x37b590.value = 'Module';
const qm = Object.freeze(Object.defineProperty(a0_0x29df34, Symbol.toStringTag, a0_0x37b590)), Ki = typeof RTCPeerConnection < 'u' && !wt, Fd = Ki;
let kf;
if (!be) {
    kf = true;
} else {
    try {
        kf = +navigator.userAgent.match(/Version\/(.+?) /)[1] >= 14;
    } catch {
        kf = false;
    }
}
const Ji = kf, Xi = 'filter' in (document.createElement('canvas').getContext('2d') || {}), Pd = !!navigator?.geolocation?.getCurrentPosition && false, _d = Ki, Qi = document.createElement('canvas').toDataURL('image/webp').startsWith('data:image/webp'), Zi = new Set([
        'image/jpeg',
        'image/png',
        'image/bmp'
    ]);
Qi && Zi.add('image/webp');
const a0_0x8f59 = {};
a0_0x8f59.value = 'Module';
const Td = [
        [
            'image/jxl',
            'data:image/jxl;base64,/woIAAAMABKIAgC4AF3lEgAAFSqjjBu8nOv58kOHxbSN6wxttW1hSaLIODZJJ3BIEkkaoCUzGM6qJAE='
        ],
        [
            'image/avif',
            'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
        ]
    ], Ld = Td.map(([_0x3da756, _0x5241e9]) => {
        const _0x1472db = new Image(), _0x643a48 = new Promise(_0x529793 => {
                ;
                _0x1472db.onload = _0x1472db.onerror = () => {
                    ;
                    const _0x2c4fc8 = _0x1472db.height === 2;
                    _0x529793(_0x2c4fc8 ? _0x3da756 : void 0);
                };
            });
        return _0x1472db.src = _0x5241e9, _0x643a48;
    }), $m = Promise.all(Ld).then(_0x538923 => _0x538923.filter(Boolean)), er = document.createElement('video'), tr = !!er.canPlayType('video/webm') && !be && !ps, vo = !!er.canPlayType('video/quicktime') || be || ps, xd = !!er.canPlayType('video/mp4; codecs="hev1"'), Md = !be, Id = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'IS_AV1_SUPPORTED': Md,
        'IS_H265_SUPPORTED': xd,
        'IS_MOV_SUPPORTED': vo,
        'IS_WEBM_SUPPORTED': tr
    }, Symbol.toStringTag, a0_0x8f59)), sr = new Set([
        'image/gif',
        'video/mp4',
        'video/webm'
    ]);
vo && sr.add('video/quicktime');
const Rd = [...Zi].concat([...sr]), Od = new Set(Rd), Nd = !wt && false, Bd = 'getDisplayMedia' in (navigator?.mediaDevices || {}), Eo = !!navigator?.vibrate, Wr = document.createElement('audio'), wo = !!(Wr.canPlayType && Wr.canPlayType('audio/ogg;').replace(/no/, ''));
let Do = false;
try {
    const s = document.createElement('canvas').getContext('webgl'), e = s.getExtension('WEBGL_debug_renderer_info'), t = e && s.getParameter(e.UNMASKED_RENDERER_WEBGL) || '';
    (t.match(/Apple/) && !t.match(/Apple GPU/) || s.getSupportedExtensions().indexOf('WEBGL_compressed_texture_s3tc_srgb') === -1) && (Do = true);
} catch {
}
const a0_0x345c50 = {};
a0_0x345c50.value = 'Module';
const So = Do, Ud = 'serviceWorker' in navigator, jd = localStorage.getItem('app_version'), Hd = localStorage.getItem('device_model'), Wd = localStorage.getItem('system_version'), Vd = localStorage.getItem('lang_pack'), zd = +localStorage.getItem('app_id'), Gd = localStorage.getItem('crjs'), qd = localStorage.getItem('mtproxy'), $d = localStorage.getItem('hostname'), Yd = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'APP_ID': zd,
        'APP_VERSION': jd,
        'CRJS': Gd,
        'DEVICE_MODEL': Hd,
        'HOSTNAME': $d,
        'LANG_PACK': Vd,
        'MTPROXY': qd,
        'SYSTEM_VERSION': Wd
    }, Symbol.toStringTag, a0_0x345c50)), hf = {
        'CAN_USE_TRANSFERABLES': Ji,
        'IS_APPLE_MX': So,
        'IS_CALL_SUPPORTED': Fd,
        'IS_CANVAS_FILTER_SUPPORTED': Xi,
        'IS_EMOJI_SUPPORTED': Ni,
        'IS_GEOLOCATION_SUPPORTED': Pd,
        'IS_GROUP_CALL_SUPPORTED': _d,
        'IS_PARALLAX_SUPPORTED': Nd,
        'IS_SCREEN_SHARING_SUPPORTED': Bd,
        'IS_TOUCH_SUPPORTED': Fe,
        ...Id,
        'IS_VIBRATE_SUPPORTED': Eo,
        'IS_OPUS_SUPPORTED': wo,
        'IS_SHARED_WORKER_SUPPORTED': Vf,
        'IS_WEBP_SUPPORTED': Qi,
        'IS_WEBRTC_SUPPORTED': Ki,
        'IS_LIVE_STREAM_SUPPORTED': Ud,
        'IMAGE_MIME_TYPES_SUPPORTED': Zi,
        'MEDIA_MIME_TYPES_SUPPORTED': Od,
        'VIDEO_MIME_TYPES_SUPPORTED': sr,
        ...c1,
        ...Yd
    };
function Kd() {
    const _0x53e476 = document.createElement('input');
    _0x53e476.type = 'time';
    _0x53e476.value = '15:00';
    _0x53e476.style.visibility = 'hidden';
    document.body.append(_0x53e476);
    ;
    const _0x409b14 = _0x53e476.offsetWidth;
    return _0x53e476.remove(), _0x409b14 > 110 ? 'h12' : 'h23';
}
const a0_0x2ba2f0 = {};
a0_0x2ba2f0['_'] = 'baseThemeClassic';
const a0_0x59fd1c = {};
a0_0x59fd1c.default = true;
a0_0x59fd1c.pattern = true;
;
const a0_0x4494b8 = {};
a0_0x4494b8['_'] = 'wallPaperSettings';
a0_0x4494b8.pFlags = {};
a0_0x4494b8.intensity = 50;
a0_0x4494b8.background_color = 14409147;
a0_0x4494b8.second_background_color = 7054727;
a0_0x4494b8.third_background_color = 14014605;
a0_0x4494b8.fourth_background_color = 8960132;
;
const a0_0x37606d = {};
a0_0x37606d['_'] = 'wallPaper';
a0_0x37606d.pFlags = a0_0x59fd1c;
a0_0x37606d.access_hash = '';
a0_0x37606d.document = void 0;
a0_0x37606d.id = '';
a0_0x37606d.slug = 'b8ed37d7';
a0_0x37606d.settings = a0_0x4494b8;
;
const a0_0x98baa4 = {};
a0_0x98baa4['_'] = 'themeSettings';
a0_0x98baa4.pFlags = {};
a0_0x98baa4.base_theme = a0_0x2ba2f0;
a0_0x98baa4.accent_color = 3379436;
a0_0x98baa4.message_colors = [6072403];
a0_0x98baa4.wallpaper = a0_0x37606d;
;
const a0_0x278b0e = {};
a0_0x278b0e['_'] = 'baseThemeNight';
const a0_0x25c3e9 = {};
a0_0x25c3e9.default = true;
a0_0x25c3e9.pattern = true;
a0_0x25c3e9.dark = true;
;
const a0_0x30b917 = {};
a0_0x30b917['_'] = 'wallPaperSettings';
a0_0x30b917.pFlags = {};
a0_0x30b917.intensity = -50;
a0_0x30b917.background_color = 16696470;
a0_0x30b917.second_background_color = 14511289;
a0_0x30b917.third_background_color = 9842623;
a0_0x30b917.fourth_background_color = 5200853;
;
const a0_0x2f3cd0 = {};
a0_0x2f3cd0['_'] = 'wallPaper';
a0_0x2f3cd0.pFlags = a0_0x25c3e9;
a0_0x2f3cd0.access_hash = '';
a0_0x2f3cd0.document = void 0;
a0_0x2f3cd0.id = '';
a0_0x2f3cd0.slug = 'b8ed37d7';
a0_0x2f3cd0.settings = a0_0x30b917;
;
const a0_0x38c31f = {};
a0_0x38c31f['_'] = 'themeSettings';
a0_0x38c31f.pFlags = {};
a0_0x38c31f.base_theme = a0_0x278b0e;
a0_0x38c31f.accent_color = 8877281;
a0_0x38c31f.message_colors = [8877281];
a0_0x38c31f.wallpaper = a0_0x2f3cd0;
;
const a0_0xedf4d7 = {};
a0_0xedf4d7.default = true;
const a0_0x37bfd0 = {};
a0_0x37bfd0['_'] = 'theme';
a0_0x37bfd0.access_hash = '';
a0_0x37bfd0.id = '';
a0_0x37bfd0.settings = [
    a0_0x98baa4,
    a0_0x38c31f
];
a0_0x37bfd0.slug = '';
a0_0x37bfd0.title = '';
a0_0x37bfd0.emoticon = '\uD83C\uDFE0';
a0_0x37bfd0.pFlags = a0_0xedf4d7;
;
const a0_0x38e710 = {};
a0_0x38e710.contacts = true;
a0_0x38e710.private = true;
a0_0x38e710.groups = true;
a0_0x38e710.channels = true;
;
const a0_0x38954f = {};
a0_0x38954f.contacts = true;
a0_0x38954f.private = true;
a0_0x38954f.groups = true;
a0_0x38954f.channels = true;
;
const a0_0x316aed = {};
a0_0x316aed.contacts = true;
a0_0x316aed.private = true;
a0_0x316aed.groups = true;
a0_0x316aed.channels = true;
;
const a0_0x401b55 = {};
a0_0x401b55.photo = a0_0x38e710;
a0_0x401b55.video = a0_0x38954f;
a0_0x401b55.file = a0_0x316aed;
;
const a0_0x33da18 = {};
a0_0x33da18.video_preload_large = true;
a0_0x33da18.audio_preload_next = true;
;
const a0_0x1850fd = {};
a0_0x1850fd['_'] = 'autoDownloadSettings';
a0_0x1850fd.file_size_max = 3145728;
a0_0x1850fd.pFlags = a0_0x33da18;
a0_0x1850fd.photo_size_max = 1048576;
a0_0x1850fd.video_size_max = 15728640;
a0_0x1850fd.video_upload_maxbitrate = 100;
a0_0x1850fd.small_queue_active_operations_max = 0;
a0_0x1850fd.large_queue_active_operations_max = 0;
;
const a0_0x91ee35 = {};
a0_0x91ee35.suggest = 'all';
a0_0x91ee35.dynamicPackOrder = true;
a0_0x91ee35.loop = true;
;
const a0_0x5f542c = {};
a0_0x5f542c.suggest = true;
a0_0x5f542c.big = true;
;
const a0_0x13d376 = {};
a0_0x13d376.sound = false;
const a0_0x19d9d2 = {};
a0_0x19d9d2.all = false;
a0_0x19d9d2.animations = false;
a0_0x19d9d2.chat = false;
a0_0x19d9d2.chat_background = false;
a0_0x19d9d2.chat_spoilers = false;
a0_0x19d9d2.effects = false;
a0_0x19d9d2.effects_premiumstickers = false;
a0_0x19d9d2.effects_reactions = false;
a0_0x19d9d2.effects_emoji = false;
a0_0x19d9d2.emoji = false;
a0_0x19d9d2.emoji_messages = false;
a0_0x19d9d2.emoji_panel = false;
a0_0x19d9d2.gif = false;
a0_0x19d9d2.stickers = false;
a0_0x19d9d2.stickers_chat = false;
a0_0x19d9d2.stickers_panel = false;
a0_0x19d9d2.video = false;
;
const a0_0x259390 = {};
a0_0x259390.voice = 1;
a0_0x259390.video = 1;
a0_0x259390.audio = 1;
;
const a0_0x4fa506 = {};
a0_0x4fa506.volume = 1;
a0_0x4fa506.muted = false;
a0_0x4fa506.playbackRate = 1;
a0_0x4fa506.playbackRates = a0_0x259390;
a0_0x4fa506.loop = false;
a0_0x4fa506.round = false;
;
const a0_0xfa7189 = {};
a0_0xfa7189.storySound = false;
const a0_0x4d3e9f = {};
a0_0x4d3e9f.peers = {};
a0_0x4d3e9f.enabledPeers = {};
a0_0x4d3e9f.enabled = true;
a0_0x4d3e9f.showInMenu = true;
a0_0x4d3e9f.doNotTranslate = [];
;
const a0_0x14f843 = {};
a0_0x14f843.enabled = false;
a0_0x14f843.autoLockTimeoutMins = 0;
a0_0x14f843.lockShortcutEnabled = false;
a0_0x14f843.lockShortcut = ['Alt'];
a0_0x14f843.canAttemptAgainOn = null;
;
const a0_0x429dae = {};
a0_0x429dae['_'] = Re ? 'authStateSignIn' : 'authStateSignQr';
const Jd = ne.version, Xd = ne.build, Vr = a0_0x37bfd0, zr = (_0x4934d6, _0x316d2b, _0x462e3e) => ({
        ...Vr,
        'name': _0x4934d6,
        'settings': {
            ...Vr.settings.find(_0x5b2a95 => _0x5b2a95.base_theme['_'] === _0x316d2b),
            'highlightingColor': _0x462e3e
        }
    }), Qd = {
        'messagesTextSize': 16,
        'distanceUnit': 'kilometers',
        'sendShortcut': 'enter',
        'autoDownload': a0_0x401b55,
        'autoDownloadNew': a0_0x1850fd,
        'stickers': a0_0x91ee35,
        'emoji': a0_0x5f542c,
        'themes': [
            zr('day', 'baseThemeClassic', 'hsla(86.4, 43.846153%, 45.117647%, .4)'),
            zr('night', 'baseThemeNight', 'hsla(299.142857, 44.166666%, 37.470588%, .4)')
        ],
        'theme': 'system',
        'notifications': a0_0x13d376,
        'timeFormat': Kd(),
        'liteMode': a0_0x19d9d2,
        'savedAsForum': false,
        'notifyAllAccounts': true,
        'tabsInSidebar': false,
        'playbackParams': a0_0x4fa506,
        'chatContextMenuHintWasShown': false,
        'seenTooltips': a0_0xfa7189,
        'translations': a0_0x4d3e9f,
        'passcode': a0_0x14f843
    }, Ke = {
        'allDialogsLoaded': {},
        'pinnedOrders': {},
        'contactsListCachedTime': 0,
        'updates': {},
        'filtersArr': [],
        'maxSeenMsgId': 0,
        'stateCreatedTime': Date.now(),
        'recentEmoji': [],
        'recentCustomEmoji': [],
        'topPeersCache': {},
        'recentSearch': [],
        'version': Jd,
        'build': Xd,
        'authState': a0_0x429dae,
        'hiddenPinnedMessages': {},
        'hideChatJoinRequests': {},
        'notifySettings': {},
        'confirmedWebViews': [],
        'hiddenSimilarChannels': [],
        'appConfig': {},
        'accountThemes': {},
        'dontShowPaidMessageWarningFor': []
    }, un = { 'settings': Qd };
function Zd(_0x3450fb, _0x4cc29f) {
    ;
    _0x3450fb = _0x3450fb.split(' ', 1)[0];
    _0x4cc29f = _0x4cc29f.split(' ', 1)[0];
    ;
    const _0x1f28c6 = _0x3450fb.split('.'), _0x505838 = _0x4cc29f.split('.');
    for (let _0x3f2566 = 0; _0x3f2566 < _0x1f28c6.length; ++_0x3f2566) {
        const _0x37e839 = +_0x1f28c6[_0x3f2566], _0x190f6d = +_0x505838[_0x3f2566];
        if (_0x37e839 > _0x190f6d) {
            return 1;
        }
        if (_0x37e839 < _0x190f6d) {
            return -1;
        }
    }
    return 0;
}
function Ao(_0x1765cb) {
    ;
    return typeof _0x1765cb == 'object' && _0x1765cb !== null;
}
function Co(_0x55b5b1, _0x14084f, _0x2f5052, _0x1f90c6, _0x2b1714, _0xd26a04) {
    ;
    for (const _0x2e1818 in _0x55b5b1) {
        const _0xa76d03 = _0xd26a04 ? _0xd26a04 + '.' + _0x2e1818 : _0x2e1818;
        _0x2b1714?.has(_0xa76d03) || (typeof _0x14084f[_0x2e1818] != typeof _0x55b5b1[_0x2e1818] ? (_0x14084f[_0x2e1818] = Ye(_0x55b5b1[_0x2e1818]), _0x2f5052?.(_0x1f90c6 || _0x2e1818)) : Ao(_0x55b5b1[_0x2e1818]) && Co(_0x55b5b1[_0x2e1818], _0x14084f[_0x2e1818], _0x2f5052, _0x1f90c6 || _0x2e1818, _0x2b1714, _0xa76d03));
    }
}
function el(_0x331c91, _0x1adcfe, _0x2c2a2c) {
    const _0x18a6d1 = performance.now();
    return (_0x2c2a2c || console).warn(Or(), 'start', _0x1adcfe), _0x331c91.then(() => {
        ;
        (_0x2c2a2c || console).warn(Or(), 'end', _0x1adcfe, performance.now() - _0x18a6d1);
    }), _0x331c91;
}
function tl(_0x24e0ec) {
    return (..._0x4c7771) => el(..._0x4c7771, _0x24e0ec);
}
class ko extends It {
    constructor(_0x2b0f7f) {
        const _0x285b42 = _0x2b0f7f === 'old' ? Vi() : zi(_0x2b0f7f);
        super(_0x285b42, 'session');
    }
}
class os extends ln {
    static async ['getTotalAccounts']() {
        const _0x18b056 = [
            1,
            2,
            3,
            4
        ].map(_0x6578ac => j.get('account' + _0x6578ac));
        return (await Promise.all(_0x18b056)).filter(_0x532e38 => !!_0x532e38?.userId).length;
    }
    static async ['getUnencryptedTotalAccounts']() {
        ;
        return j.get('number_of_accounts');
    }
    static async ['getUserIds']() {
        const _0x52bb69 = [
            1,
            2,
            3,
            4
        ].map(_0x56d5ba => j.get('account' + _0x56d5ba));
        return (await Promise.all(_0x52bb69)).map(_0x43f81e => _0x43f81e?.userId).filter(Boolean);
    }
    static async ['get'](_0x1f8f97) {
        const _0x472ab5 = await j.get('account' + _0x1f8f97);
        return this.fillFingerprint(_0x472ab5), _0x472ab5;
    }
    static ['fillFingerprint'](_0x384cf4) {
        ;
        if (_0x384cf4 && !_0x384cf4.auth_key_fingerprint) {
            const _0x2adec3 = 'dc' + ne.baseDcId + '_auth_key', _0x5add93 = _0x384cf4[_0x2adec3];
            _0x384cf4.auth_key_fingerprint = _0x5add93 ? _0x384cf4[_0x2adec3].slice(0, 8) : void 0;
        }
    }
    static async ['update'](_0x578e84, _0x2734f7, _0x2042d3 = false) {
        const _0x54b43b = await this.get(_0x578e84);
        this.fillFingerprint(_0x2734f7);
        const _0x418a5d = {
                ..._0x2042d3 ? {} : _0x54b43b,
                ..._0x2734f7
            }, _0x2793b2 = _0x418a5d, _0x249b1a = { ['account' + _0x578e84]: _0x2793b2 };
        return await j.set(_0x249b1a), _0x578e84 === 1 && await this.updateStorageForLegacy(_0x2793b2), ((async () => j.set({ 'number_of_accounts': await this.getTotalAccounts() }))()), _0x2793b2;
    }
    static async ['shiftAccounts'](_0x1152ad) {
        ;
        for (let _0x3751f0 = _0x1152ad; _0x3751f0 <= Rr; _0x3751f0++) {
            if (await j.delete('account' + _0x3751f0), _0x3751f0 < Rr) {
                const _0x5c0b45 = await this.get(_0x3751f0 + 1);
                _0x5c0b45?.userId && await this.update(_0x3751f0, _0x5c0b45, true);
            }
        }
    }
    static async ['updateStorageForLegacy'](_0x524d50) {
        ;
        if (_0x524d50 !== null && await Me.isUsingPasscode()) {
            return;
        }
        _0x524d50 === null && (_0x524d50 = {});
        const _0x4c4e9e = {}, _0x4cf5d9 = [], _0x29a768 = (_0x4bea0b, _0x1db053) => {
                ;
                _0x1db053 ? _0x4c4e9e[_0x4bea0b] = _0x1db053 : _0x4cf5d9.push(_0x4bea0b);
            };
        for (let _0x246a0c = 1; _0x246a0c <= 5; _0x246a0c++) {
            const _0x421555 = 'dc' + _0x246a0c + '_auth_key', _0x4bc8d4 = 'dc' + _0x246a0c + '_server_salt';
            _0x29a768(_0x421555, _0x524d50[_0x421555]);
            _0x29a768(_0x4bc8d4, _0x524d50[_0x4bc8d4]);
            ;
        }
        _0x524d50.auth_key_fingerprint && _0x29a768('auth_key_fingerprint', _0x524d50.auth_key_fingerprint);
        _0x29a768('user_auth', _0x524d50.userId && {
            'date': bo(true),
            'id': _0x524d50.userId,
            'dcID': _0x524d50.dcId || 0
        });
        _0x29a768('dc', _0x524d50.dcId);
        await Promise.all([
            j.set(_0x4c4e9e),
            Promise.all(_0x4cf5d9.map(_0xc2de10 => j.delete(_0xc2de10)))
        ]);
        ;
    }
}
N.AccountController = os;
function Gr(_0x5c23b7) {
    const _0xfb18c0 = [
            'users',
            'chats',
            'dialogs'
        ], _0x18ec79 = { _0x1e9c5c: new It(_0x5c23b7 === void 0 ? Vi() : zi(_0x5c23b7), _0x1e9c5c) };
    for (const _0x1e9c5c of _0xfb18c0);
    return _0x18ec79;
}
const sl = false, fl = 86400000, mf = Ke.version, Rs = Ke.build, Gf = Object.keys(Ke), es = Object.keys(un), nl = [
        'contactsListCachedTime',
        'stateCreatedTime',
        'maxSeenMsgId',
        'filtersArr'
    ];
function Fo(_0x48646e, _0x1592e5, _0x38d089) {
    const _0x5b5643 = new Set(), _0x342488 = (_0x6031bc, _0x2784ed) => {
            ;
            ;
            _0x5b5643.add(_0x6031bc);
            ;
        }, _0x537d0e = _0x572169 => {
            ;
            _0x5b5643.clear();
            _0x43bb49 = _0x572169;
            Object.keys(_0x43bb49).forEach(_0x317f5c => _0x5b5643.add(_0x317f5c));
            ;
        };
    let _0x43bb49 = { _0x6031bc: _0x2784ed };
    return {
        'push': _0x342488,
        'replace': _0x537d0e,
        'readFromArray': _0x15443a => {
            ;
            for (let _0x445e14 = 0, _0x266aa2 = _0x1592e5.length; _0x445e14 < _0x266aa2; ++_0x445e14) {
                const _0x4d28a4 = _0x1592e5[_0x445e14], _0x16bbc0 = _0x15443a[_0x445e14];
                _0x16bbc0 !== void 0 ? _0x43bb49[_0x4d28a4] = _0x16bbc0 : _0x342488(_0x4d28a4, Ye(_0x38d089[_0x4d28a4]));
            }
        },
        get 'state'() {
            return _0x43bb49;
        },
        set 'state'(_0x81209d) {
            _0x43bb49 = _0x81209d;
        },
        'pushedKeys': _0x5b5643,
        'log': _0x48646e
    };
}
function Po(_0x2496a9) {
    const _0x5615fe = Fo(_0x2496a9, Gf, Ke), _0x29e824 = new Map();
    return {
        ..._0x5615fe,
        get 'state'() {
            ;
            return _0x5615fe.state;
        },
        set 'state'(_0x57ffbe) {
            ;
            _0x5615fe.state = _0x57ffbe;
        },
        'resetStorages': _0x29e824,
        'reset': ({
            preserveKeys: _0x59fd2d = []
        } = {}) => {
            ;
            _0x59fd2d.push('authState');
            const _0x1f4ad1 = new Map(_0x59fd2d.map(_0x621a02 => [
                _0x621a02,
                _0x5615fe.state[_0x621a02]
            ]));
            _0x5615fe.state = Ye(Ke);
            _0x1f4ad1.forEach((_0x40cf9a, _0x2abe10) => {
                ;
                _0x5615fe.state[_0x2abe10] = _0x40cf9a;
            });
            ;
            const _0x1193ed = [
                'chats',
                'dialogs',
                'users'
            ];
            for (const _0x5a10ec of _0x1193ed)
                _0x29e824.set(_0x5a10ec, []);
            _0x5615fe.replace(_0x5615fe.state);
        }
    };
}
function _o(_0x52e351) {
    return Fo(_0x52e351, es, un);
}
const Ge = {
    'REFRESH': _0x7450ad => {
        const _0x229b00 = Date.now();
        _0x7450ad.state.stateCreatedTime + fl < _0x229b00 && nl.forEach(_0x524dde => {
            ;
            _0x7450ad.push(_0x524dde, Ye(Ke[_0x524dde]));
        });
    },
    'VALIDATE': (_0x38bdda, _0x374875) => {
        const _0x2b32aa = new Set(['settings.themes']);
        Co(_0x374875, _0x38bdda.state, _0x257a11 => {
            ;
            _0x38bdda.push(_0x257a11, _0x38bdda.state[_0x257a11]);
        }, void 0, _0x2b32aa);
    },
    'VERSION': _0x3bf5c4 => {
        ;
        let _0x866be9, _0x5e5760;
        return (_0x3bf5c4.state.version !== mf || _0x3bf5c4.state.build !== Rs) && (_0x3bf5c4.state.build < 526 ? _0x3bf5c4.reset() : _0x3bf5c4.state.build < 562 && _0x3bf5c4.push('filtersArr', Ye(Ke.filtersArr)), Zd(_0x3bf5c4.state.version, mf) !== 0 && (_0x866be9 = mf, _0x5e5760 = _0x3bf5c4.state.version), _0x3bf5c4.push('appConfig', Ye(Ke.appConfig)), _0x3bf5c4.push('version', mf), _0x3bf5c4.push('build', Rs)), {
            'newVersion': _0x866be9,
            'oldVersion': _0x5e5760
        };
    },
    'CHANGED_AUTH': async _0x23c631 => {
        const [_0x4cd713, _0x304383] = await Promise.all([
            j.get('auth_key_fingerprint'),
            j.get('dc' + ne.baseDcId + '_auth_key')
        ]);
        if (!_0x304383) {
            return;
        }
        const _0x2e74c8 = _0x304383.slice(0, 8);
        _0x4cd713 ? _0x4cd713 !== _0x2e74c8 && _0x23c631.reset() : _0x23c631.reset();
        _0x4cd713 !== _0x2e74c8 && await j.set({ 'auth_key_fingerprint': _0x2e74c8 });
        ;
    }
};
async function gf(_0x5a9167) {
    const _0x33a964 = Q('STATE-LOADER-ACCOUNT-' + _0x5a9167), _0x2624ae = new ko(_0x5a9167), [_0x3f6c2e, ..._0xca1bcf] = await Promise.all([
            os.get(_0x5a9167),
            ...es.map(_0x1575a4 => rs.get(_0x1575a4)),
            ...Gf.map(_0x5c76f1 => _0x2624ae.get(_0x5c76f1))
        ]), _0x45461c = _o(_0x33a964);
    _0x45461c.readFromArray(_0xca1bcf.splice(0, es.length));
    const _0x4ac336 = Po(_0x33a964), _0x3ad5e5 = {};
    _0x3ad5e5['_'] = 'authStateSignedIn';
    _0x4ac336.readFromArray(_0xca1bcf);
    _0x3f6c2e?.userId && (_0x4ac336.state.authState = _0x3ad5e5);
    _0x5a9167 === 1 && await Ge.CHANGED_AUTH(_0x4ac336);
    Ge.REFRESH(_0x4ac336);
    Ge.VALIDATE(_0x4ac336, Ke);
    Ge.VALIDATE(_0x45461c, un);
    ;
    ;
    const {
            newVersion: _0x125e94,
            oldVersion: _0x4f570d
        } = Ge.VERSION(_0x4ac336), _0x3695fa = {};
    return _0x3695fa.state = _0x4ac336.state, _0x3695fa.pushedKeys = _0x4ac336.pushedKeys, _0x3695fa.newVersion = _0x125e94, _0x3695fa.oldVersion = _0x4f570d, _0x3695fa.resetStorages = _0x4ac336.resetStorages, _0x3695fa.common = _0x45461c.state, _0x3695fa.userId = _0x3f6c2e?.userId, _0x3695fa;
}
async function il() {
    const _0x4f8613 = Q('STATE-LOADER'), _0x3b1d03 = new ko('old'), _0x12252e = performance.now(), _0xb7c6e = tl(_0x4f8613), _0x541ea9 = [
            'playbackParams',
            'chatContextMenuHintWasShown',
            'seenTooltips',
            'translations'
        ], _0x41b610 = _0x541ea9.concat(es), _0x24d124 = await Promise.all([
            ..._0x41b610.map(_0x4aa004 => _0x3b1d03.get(_0x4aa004)),
            ...Gf.map(_0xcb594d => _0xb7c6e(_0x3b1d03.get(_0xcb594d), 'state ' + _0xcb594d)),
            _0x3b1d03.get('langPack'),
            _0xb7c6e(j.get('user_auth'), 'auth')
        ]);
    _0x4f8613.warn('promises', performance.now() - _0x12252e);
    const _0x4e840e = _o(_0x4f8613), _0x198ae5 = _0x24d124.splice(0, _0x541ea9.length), _0x36abfe = es.indexOf('settings');
    Ao(_0x24d124[_0x36abfe]) && _0x198ae5.forEach((_0x1bd56b, _0x375f27) => {
        _0x24d124[_0x36abfe][_0x541ea9[_0x375f27]] = _0x1bd56b;
    });
    _0x4e840e.readFromArray(_0x24d124.splice(0, es.length));
    ;
    const _0x417043 = Po(_0x4f8613);
    _0x417043.readFromArray(_0x24d124.splice(0, Gf.length));
    const _0x48e25b = _0x24d124.shift(), _0x2ad8e9 = _0x24d124.shift(), _0x2a9dfb = {};
    _0x2a9dfb['_'] = 'authStateSignedIn';
    _0x2ad8e9 && (_0x417043.state.authState = _0x2a9dfb);
    await Ge.CHANGED_AUTH(_0x417043);
    Ge.REFRESH(_0x417043);
    Ge.VALIDATE(_0x417043, Ke);
    Ge.VALIDATE(_0x4e840e, un);
    ;
    ;
    const {
        newVersion: _0x190674,
        oldVersion: _0x2dfe26
    } = Ge.VERSION(_0x417043);
    _0x4f8613.warn('total', performance.now() - _0x12252e);
    for (const _0x474c9c in _0x417043.state)
        _0x417043.push(_0x474c9c, _0x417043.state[_0x474c9c]);
    const _0x2742bf = {};
    return _0x2742bf.state = _0x417043.state, _0x2742bf.pushedKeys = _0x417043.pushedKeys, _0x2742bf.newVersion = _0x190674, _0x2742bf.oldVersion = _0x2dfe26, _0x2742bf.resetStorages = _0x417043.resetStorages, _0x2742bf.common = _0x4e840e.state, _0x2742bf.userId = typeof _0x2ad8e9 == 'number' ? _0x2ad8e9 : _0x2ad8e9?.id ? +_0x2ad8e9.id : void 0, (_0x48e25b && await rs.set({ 'langPack': _0x48e25b }), _0x2742bf);
}
async function rl() {
    const _0x587942 = {
            auth_key_fingerprint: _0x500db7,
            userId: typeof _0x406b27 == 'string' || typeof _0x406b27 == 'number' ? +_0x406b27 : _0x406b27?.id ? +_0x406b27.id : void 0
        }, _0x1949c7 = ((async () => {
            const _0x1aa1e7 = [];
            for (let _0x326ece = 1; _0x326ece <= 5; _0x326ece++) {
                const _0x56c0fd = 'dc' + _0x326ece + '_auth_key', _0x27d93b = 'dc' + _0x326ece + '_server_salt';
                [_0x587942[_0x56c0fd], _0x587942[_0x27d93b]] = await Promise.all([
                    j.get(_0x56c0fd),
                    j.get(_0x27d93b)
                ]);
                _0x1aa1e7.push(() => Promise.all([
                    j.delete(_0x56c0fd),
                    j.delete(_0x27d93b)
                ]));
                ;
            }
            return () => Promise.all(_0x1aa1e7.map(_0x2d028c => _0x2d028c()));
        })()), [_0x406b27, _0x500db7, _0x4737b1] = await Promise.all([
            j.get('user_auth'),
            j.get('auth_key_fingerprint'),
            _0x1949c7
        ]);
    ;
    ;
    await os.update(1, _0x587942, true);
    ;
}
async function al() {
    const _0x199448 = Gr(void 0), _0x1fb7d3 = Gr(1), [_0x3a81e9, _0x4b599e, _0x2a1a03] = await Promise.all([
            _0x199448.users.getAll(),
            _0x199448.chats.getAll(),
            _0x199448.dialogs.getAll()
        ]), _0x11aef7 = (_0x21ab68, _0xd6294a) => _0x21ab68.reduce((_0x22383e, _0x3f0eb7) => (_0x22383e[_0x3f0eb7[_0xd6294a]] = _0x3f0eb7, _0x22383e), {});
    await Promise.all([
        _0x1fb7d3.users.set(_0x11aef7(_0x3a81e9, 'id')),
        _0x1fb7d3.chats.set(_0x11aef7(_0x4b599e, 'id')),
        _0x1fb7d3.dialogs.set(_0x11aef7(_0x2a1a03, 'peerId'))
    ]);
}
async function ol() {
    ;
    return !!await os.get(1);
}
function cl() {
    ;
    return Wf.deleteDatabaseByName(Vi().name);
}
async function dl() {
    const _0x38071c = await j.get('k_build');
    _0x38071c !== Rs && (!_0x38071c || _0x38071c < Rs) && await j.set({ 'k_build': Rs });
}
async function ll() {
    ;
    performance.now();
    const _0x3df5b0 = await ol() && !sl;
    let _0x32c999;
    const _0x4b9902 = Promise.all([
        gf(2),
        gf(3),
        gf(4)
    ]);
    _0x3df5b0 ? _0x32c999 = await gf(1) : (_0x32c999 = await il(), await Promise.all([
        rl(),
        al()
    ]), _0x32c999.refetchStorages = true, cl());
    dl();
    ;
    const [..._0x72274c] = await _0x4b9902, _0x31676a = {};
    return _0x31676a['1'] = _0x32c999, _0x31676a['2'] = _0x72274c[0], _0x31676a['3'] = _0x72274c[1], _0x31676a['4'] = _0x72274c[2], _0x31676a;
}
let ul;
function hl() {
    return ul ?? (ul = ll());
}
class ml {
    constructor() {
        ;
        this.sampleRate = 48000;
        this.tasks = [];
        this.keepAlive = false;
        this.log = Q('OPUS', ef.Error);
        ;
    }
    ['isPlaySupported']() {
        return wo;
    }
    ['loadWavWorker']() {
        ;
        this.wavWorker || (this.wavWorker = new Worker('waveWorker.min.js'), this.wavWorker.addEventListener('message', _0x449deb => {
            const _0x32c488 = _0x449deb.data;
            if (this.log('[WAV] got message:', _0x32c488), _0x32c488 && _0x32c488.page) {
                const _0x50be68 = _0x32c488.page;
                this.onTaskEnd(this.tasks.shift(), _0x50be68);
            }
        }));
    }
    ['loadWorker']() {
        ;
        this.worker || (this.worker = new Worker('decoderWorker.min.js'), this.worker.addEventListener('message', _0x5ef6d8 => {
            const _0x6bb9fe = _0x5ef6d8.data, _0x49ec4f = { command: 'done' };
            ;
            const _0x42d9f3 = {
                command: 'encode',
                buffers: _0x5ef6d8.data
            };
            ;
            ;
            this.log('[DECODER] got message', _0x6bb9fe);
            _0x6bb9fe.type === 'done' ? (this.wavWorker.postMessage(_0x49ec4f), _0x6bb9fe.waveform && (this.tasks[0].waveform = _0x6bb9fe.waveform)) : this.wavWorker.postMessage(_0x42d9f3, be ? void 0 : _0x6bb9fe.map(_0x73717f => _0x73717f.buffer));
            ;
            ;
        }));
    }
    ['setKeepAlive'](_0x3ed479) {
        ;
        this.keepAlive = _0x3ed479;
        this.keepAlive ? (this.loadWorker(), this.loadWavWorker()) : this.tasks.length || this.terminateWorkers();
        ;
    }
    ['onTaskEnd'](_0xf0eec1, _0x3f1cd3) {
        ;
        _0x3f1cd3 ? (clearTimeout(_0xf0eec1.timeout), _0xf0eec1.callback.resolve({
            'bytes': _0x3f1cd3,
            'waveform': _0xf0eec1.waveform
        })) : _0xf0eec1.callback.reject('timeout');
        this.tasks.length && this.executeNewTask(this.tasks[0]);
        this.terminateWorkers();
        ;
    }
    ['terminateWorkers'](_0x35a5e9 = false) {
        ;
        (this.keepAlive || this.tasks.length) && !_0x35a5e9 || (this.worker && (this.worker.terminate(), this.worker = null), this.wavWorker && (this.wavWorker.terminate(), this.wavWorker = null));
    }
    ['executeNewTask'](_0x5c62bf) {
        const _0x3e1d2b = {
            command: 'decode',
            pages: _0x5c62bf.pages,
            waveform: _0x5c62bf.withWaveform
        };
        ;
        ;
        ;
        this.worker.postMessage({
            'command': 'init',
            'decoderSampleRate': this.sampleRate,
            'outputBufferSampleRate': this.sampleRate
        });
        this.wavWorker.postMessage({
            'command': 'init',
            'wavBitDepth': 16,
            'wavSampleRate': this.sampleRate
        });
        this.log('[DECODER] send decode');
        this.worker.postMessage(_0x3e1d2b, be ? void 0 : [_0x5c62bf.pages.buffer]);
        _0x5c62bf.timeout = window.setTimeout(() => {
            ;
            this.log.error('decode timeout');
            this.terminateWorkers(true);
            this.tasks.length && (this.loadWorker(), this.loadWavWorker());
            this.onTaskEnd(this.tasks.shift());
            ;
        }, 10000);
        ;
        ;
    }
    ['pushDecodeTask'](_0x2a8824, _0xdfc7ff) {
        ;
        return new Promise((_0x1e9f02, _0x204727) => {
            ;
            const _0x1dde39 = {
                resolve: _0x1e9f02,
                reject: _0x204727
            };
            ;
            ;
            ;
            const _0x5ca2da = {
                pages: _0x2a8824,
                withWaveform: _0xdfc7ff,
                callback: _0x1dde39,
                timeout: 0
            };
            ;
            ;
            ;
            ;
            ;
            const _0x28c1ac = _0x5ca2da;
            this.loadWorker();
            this.loadWavWorker();
            this.tasks.push(_0x28c1ac) === 1 && this.executeNewTask(_0x28c1ac);
            ;
        });
    }
    async ['decode'](_0x48bb10, _0x38ebed = false) {
        ;
        return this.pushDecodeTask(_0x48bb10, _0x38ebed).then(async _0x55f7cc => {
            const _0x4daeb0 = { type: 'audio/wav' };
            ;
            const _0x1efa49 = new Blob([_0x55f7cc.bytes], _0x4daeb0);
            return {
                'url': await re.invoke('createObjectURL', _0x1efa49),
                'waveform': _0x55f7cc.waveform
            };
        });
    }
}
const To = new ml();
N.opusDecodeController = To;
function gl(_0x26331d) {
    ;
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'image/webp',
        'image/bmp',
        'image/avif',
        'image/jxl',
        'video/mp4',
        'video/webm',
        'video/quicktime',
        'audio/ogg',
        'audio/mpeg',
        'audio/mp4',
        'audio/wav',
        'application/json',
        'application/pdf'
    ].indexOf(_0x26331d) === -1 ? 'application/octet-stream' : _0x26331d;
}
function fr(_0x2631a6, _0x318268 = '') {
    ;
    _0x2631a6 = Lt(_0x2631a6);
    const _0x4e42a1 = gl(_0x318268), _0x3714fb = {};
    return _0x3714fb.type = _0x4e42a1, new Blob(_0x2631a6, _0x3714fb);
}
function pl(_0x471bb0, _0x3f025c) {
    ;
    return new Promise(_0x4ab4d7 => {
        ;
        const _0x4b93c5 = new FileReader();
        _0x4b93c5.addEventListener('loadend', _0x4a7ce7 => {
            ;
            _0x4ab4d7(_0x4a7ce7.target.result);
        });
        _0x4b93c5[_0x3f025c](_0x471bb0);
        ;
    });
}
function bl(_0x4b6039) {
    ;
    return pl(_0x4b6039, 'readAsArrayBuffer');
}
function qr(_0x4b6d5c) {
    return bl(_0x4b6d5c).then(_0x322fd4 => new Uint8Array(_0x322fd4));
}
class yl {
    constructor(_0x20a37e, _0x364d1e, _0x3377d0) {
        ;
        this.mimeType = _0x20a37e;
        this.size = _0x364d1e;
        this.saveFileCallback = _0x3377d0;
        this.bytes = new Uint8Array(_0x364d1e);
        ;
    }
    async ['write'](_0x260193, _0x542565) {
        const _0x2f88a4 = _0x542565 + _0x260193.byteLength;
        if (_0x2f88a4 > this.bytes.byteLength) {
            const _0x429689 = new Uint8Array(_0x2f88a4);
            _0x429689.set(this.bytes, 0);
            this.bytes = _0x429689;
            ;
        }
        this.bytes.set(_0x260193, _0x542565);
    }
    ['truncate']() {
        ;
        this.bytes = new Uint8Array();
    }
    ['trim'](_0x587bba) {
        ;
        this.bytes = this.bytes.slice(0, _0x587bba);
    }
    ['finalize'](_0x4d3f4f = true) {
        const _0x54867b = fr(this.bytes, this.mimeType);
        return _0x4d3f4f && this.saveFileCallback && this.saveFileCallback(_0x54867b), _0x54867b;
    }
    ['getParts']() {
        ;
        return this.bytes;
    }
    ['replaceParts'](_0x3444fe) {
        this.bytes = _0x3444fe;
    }
}
const a0_0x1c0d5d = {};
a0_0x1c0d5d.encryptable = false;
const a0_0x23527c = {};
a0_0x23527c.encryptable = false;
const a0_0x474121 = {};
a0_0x474121.encryptable = true;
const a0_0x3c6fe1 = {};
a0_0x3c6fe1.encryptable = true;
const a0_0x1f29b5 = {};
a0_0x1f29b5.encryptable = true;
const a0_0x5e6dfc = {};
a0_0x5e6dfc.encryptable = true;
const a0_0x35f6a7 = {};
a0_0x35f6a7.cachedAssets = a0_0x1c0d5d;
a0_0x35f6a7.cachedBackgrounds = a0_0x23527c;
a0_0x35f6a7.cachedFiles = a0_0x474121;
a0_0x35f6a7.cachedStreamChunks = a0_0x3c6fe1;
a0_0x35f6a7.cachedHlsQualityFiles = a0_0x1f29b5;
a0_0x35f6a7.cachedHlsStreamChunks = a0_0x5e6dfc;
;
const _n = a0_0x35f6a7, Ae = class Ae {
        constructor(_0x4ff60f) {
            ;
            this.dbName = _0x4ff60f;
            this.useStorage = true;
            Ae.STORAGES.length && (this.useStorage = Ae.STORAGES[0].useStorage);
            this.config = Object.entries(_n).find(([_0x56a3c3]) => _0x56a3c3 === _0x4ff60f)?.[1];
            this.openDatabase();
            Ae.STORAGES.push(this);
            ;
        }
        static async ['encrypt'](_0x37b5c8) {
            const _0xcfb02 = await ct.get(), _0x24ff45 = await qr(_0x37b5c8), _0x3ae75b = _0x37b5c8.type, _0x1e4e0f = await it.invokeCryptoNew({
                    'method': 'aes-local-encrypt',
                    'args': [{
                            'key': _0xcfb02,
                            'data': _0x24ff45
                        }],
                    'transfer': [_0x24ff45.buffer]
                }), _0x416623 = {};
            return _0x416623.type = _0x3ae75b, new Blob([_0x1e4e0f], _0x416623);
        }
        static async ['decrypt'](_0x3f63c2) {
            const _0x2eee22 = await ct.get(), _0x964094 = await qr(_0x3f63c2), _0x172e84 = _0x3f63c2.type, _0x1145a3 = await it.invokeCryptoNew({
                    'method': 'aes-local-decrypt',
                    'args': [{
                            'key': _0x2eee22,
                            'encryptedData': _0x964094
                        }],
                    'transfer': [_0x964094.buffer]
                }), _0x3465c2 = {};
            return _0x3465c2.type = _0x172e84, new Blob([_0x1145a3], _0x3465c2);
        }
        async ['waitToEnable']() {
            ;
            Ae.disabledPromise && await Ae.disabledPromise;
        }
        ['openDatabase']() {
            ;
            return this.openDbPromise ?? (this.openDbPromise = caches.open(this.dbName));
        }
        ['delete'](_0x3acf82) {
            ;
            return this.timeoutOperation(_0x17007b => _0x17007b.delete('/' + _0x3acf82));
        }
        ['deleteAll']() {
            ;
            return caches.delete(this.dbName);
        }
        async ['has'](_0xad9bbf) {
            ;
            return !!await this.timeoutOperation(_0x1e906d => _0x1e906d.match('/' + _0xad9bbf));
        }
        async ['get'](_0x3cf071) {
            ;
            await this.waitToEnable();
            const _0x2881e4 = await this.timeoutOperation(_0x2ba7c0 => _0x2ba7c0.match('/' + _0x3cf071));
            if (_0x2881e4) {
                return this.config?.encryptable && await Me.isUsingPasscode() ? new Response(await Ae.decrypt(await _0x2881e4.blob()), {
                    'headers': _0x2881e4.headers,
                    'status': _0x2881e4.status,
                    'statusText': _0x2881e4.statusText
                }) : _0x2881e4;
            }
        }
        async ['save'](_0x378fad, _0x5d4759) {
            ;
            await this.waitToEnable();
            let _0xc87cc6 = _0x5d4759;
            return this.config?.encryptable && await Me.isUsingPasscode() && (_0xc87cc6 = new Response(await Ae.encrypt(await _0x5d4759.blob()), {
                'headers': _0x5d4759.headers,
                'status': _0x5d4759.status,
                'statusText': _0x5d4759.statusText
            })), this.timeoutOperation(_0x3a5402 => _0x3a5402.put('/' + _0x378fad, _0xc87cc6));
        }
        ['getFile'](_0x18eeef, _0x1d7b72 = 'blob') {
            ;
            return this.get(_0x18eeef).then(_0x41db8e => {
                ;
                if (!_0x41db8e) {
                    throw Ee('NO_ENTRY_FOUND');
                }
                return _0x41db8e[_0x1d7b72]();
            });
        }
        ['saveFile'](_0x113680, _0x210ee0) {
            ;
            _0x210ee0 instanceof Blob || (_0x210ee0 = fr(_0x210ee0));
            const _0x14c71f = new Response(_0x210ee0, { 'headers': { 'Content-Length': '' + _0x210ee0.size } });
            return this.save(_0x113680, _0x14c71f).then(() => _0x210ee0);
        }
        ['timeoutOperation'](_0x18c0e1) {
            ;
            return this.useStorage ? new Promise(async (_0x505b5b, _0x4a2b88) => {
                ;
                let _0xc3a778 = false;
                const _0x27e2b9 = setTimeout(() => {
                    _0x4a2b88();
                    _0xc3a778 = true;
                    ;
                }, 15000);
                try {
                    const _0x53b89d = await this.openDatabase();
                    if (!_0x53b89d) {
                        throw this.useStorage = false, this.openDbPromise = void 0, 'no cache?';
                    }
                    const _0x1b2f0e = await _0x18c0e1(_0x53b89d);
                    if (_0xc3a778) {
                        return;
                    }
                    _0x505b5b(_0x1b2f0e);
                } catch (_0x3e190c) {
                    _0x4a2b88(_0x3e190c);
                }
                clearTimeout(_0x27e2b9);
            }) : Promise.reject(Ee('STORAGE_OFFLINE'));
        }
        ['prepareWriting'](_0x30a1d2, _0x32111d, _0x5260c7) {
            ;
            return {
                'deferred': q(),
                'getWriter': () => new yl(_0x5260c7, _0x32111d, _0x554407 => this.saveFile(_0x30a1d2, _0x554407).catch(() => _0x554407))
            };
        }
        static ['toggleStorage'](_0x15d119, _0x5b2ddd) {
            ;
            return this.STORAGES.forEach(_0x2a0729 => {
                ;
                _0x2a0729.useStorage = _0x15d119;
            }), Promise.resolve();
        }
        static async ['deleteAllStorages']() {
            const _0x2c21af = Object.keys(_n);
            await Promise.all(_0x2c21af.map(async _0x29c17c => {
                ;
                await new Ae(_0x29c17c).deleteAll();
            }));
        }
        static ['temporarilyToggle'](_0x31693b) {
            ;
            _0x31693b ? (this.disabledPromise?.resolve(), this.disabledPromise = void 0) : this.disabledPromise = q();
        }
        static async ['clearEncryptableStorages']() {
            const _0x48a7fe = Object.entries(_n).filter(([, {encryptable: _0x35b8f9}]) => _0x35b8f9).map(([_0x445ef9]) => _0x445ef9);
            await Promise.all(_0x48a7fe.map(async _0xf51f80 => {
                ;
                await new Ae(_0xf51f80).timeoutOperation(async _0x364b5a => {
                    const _0x366d4f = await _0x364b5a.keys();
                    await Promise.all(_0x366d4f.map(_0x4f305d => _0x364b5a.delete(_0x4f305d)));
                });
            }));
        }
    };
Ae.STORAGES = [];
let qf = Ae;
function $r(_0x4669c7, _0x291291) {
    ;
    return Promise.all([
        It.toggleStorage(_0x4669c7, _0x291291),
        qf.toggleStorage(_0x4669c7, _0x291291),
        j.toggleStorage(_0x4669c7, _0x291291)
    ]).then(ve, ve);
}
class vl extends Ui {
    constructor() {
        ;
        super('SERVICE');
        N && (N.serviceMessagePort = this);
        ;
    }
}
const El = '' + new URL('fqi8y7mrcbw3.js', import.meta.url).href, nr = '\x01';
function $f(..._0x583799) {
    return _0x583799.join(nr);
}
function wl(_0x53346a) {
    ;
    return _0x53346a.split(nr);
}
function Dl(_0x259cd6, _0x15e0b6, _0x1e9946, _0x5e7bb7) {
    const _0xfb4794 = _0x15e0b6.split(nr), _0x515d44 = _0xfb4794.length;
    let _0x46b44c = _0x259cd6;
    for (let _0x3a6b38 = 0; _0x3a6b38 < _0x515d44 - 1; ++_0x3a6b38) {
        const _0x2bbab0 = _0xfb4794[_0x3a6b38];
        _0x46b44c = _0x46b44c[_0x2bbab0] ?? (_0x46b44c[_0x2bbab0] = {});
    }
    const _0x553b18 = _0xfb4794[_0x515d44 - 1];
    _0x1e9946 === void 0 && _0x5e7bb7 ? delete _0x46b44c[_0x553b18] : _0x46b44c[_0x553b18] = _0x1e9946;
}
const Ft = '_';
function ir(_0x1ba573, _0x60481b) {
    const _0x427211 = ''[''.length - 1] || '';
    let _0x359b04;
    switch (_0x1ba573['_']) {
    case 'inputPhotoFileLocation': {
            _0x359b04 = [
                'photo',
                ''[0],
                _0x1ba573.id,
                _0x1ba573.thumb_size
            ].filter(Boolean).join(Ft);
            break;
        }
    case 'inputDocumentFileLocation': {
            _0x359b04 = [
                'document',
                ''[0],
                _0x1ba573.id,
                _0x1ba573.thumb_size
            ].filter(Boolean).join(Ft);
            break;
        }
    case 'inputPeerPhotoFileLocation':
        _0x359b04 = [
            'peerPhoto',
            _0x1ba573.photo_id,
            _0x1ba573.pFlags.big ? 'big' : 'small'
        ].join(Ft);
        break;
    case 'inputStickerSetThumb': {
            _0x359b04 = [
                'stickerSetThumb',
                _0x1ba573.stickerset.id || _0x1ba573.stickerset.short_name || _0x1ba573.stickerset.emoticon || _0x1ba573.stickerset['_'],
                _0x1ba573.thumb_version
            ].join(Ft);
            break;
        }
    case 'inputFileLocation': {
            _0x359b04 = [
                _0x1ba573.volume_id,
                _0x1ba573.local_id
            ].join(Ft);
            break;
        }
    case 'inputWebFileLocation': {
            _0x359b04 = [
                'webFile',
                _0x1ba573.url
            ].join(Ft);
            break;
        }
    case 'inputWebFileGeoPointLocation': {
            const _0x11f908 = _0x1ba573.geo_point;
            _0x359b04 = [
                'geoPoint',
                _0x11f908.lat,
                _0x11f908.long,
                _0x1ba573.w,
                _0x1ba573.h,
                _0x1ba573.zoom,
                _0x1ba573.scale
            ].join(Ft);
            break;
        }
    default: {
            _0x359b04 = '';
            break;
        }
    }
    return _0x359b04 + (_0x60481b?.downloadId ? '_download' : '') + (_0x427211 && '.' + _0x427211);
}
function Ym(_0x3ed02a, _0x3158b0) {
    const _0x1f9fab = encodeURIComponent(JSON.stringify(_0x3158b0));
    return _0x3ed02a + '/' + _0x1f9fab;
}
function rr(_0x14016b) {
    ;
    return _0x14016b?.['_'].includes('inputWebFile');
}
function Sl(_0x4f8a8a) {
    ;
    return rr(_0x4f8a8a) ? ir(_0x4f8a8a) : _0x4f8a8a['_'] + (_0x4f8a8a.id ?? _0x4f8a8a.url);
}
function Al(_0x33b165) {
    const _0xb98b9f = {};
    return _0xb98b9f.downloaded = 0, _0xb98b9f.url = '', _0xb98b9f.type = _0x33b165, _0xb98b9f;
}
function ar(_0x37f7a6, _0x2ac8ec) {
    return _0x37f7a6 + (_0x2ac8ec !== void 0 ? '-' + _0x2ac8ec : '');
}
function at(_0x56a1b0, _0x449d9b) {
    ;
    return _0x56a1b0 instanceof Promise ? _0x56a1b0.then(_0x449d9b) : _0x449d9b(_0x56a1b0);
}
function Yr(_0x298530) {
    ;
    return typeof _0x298530 == 'number' && _0x298530 < Mf;
}
const cs = Symbol('store-raw'), Je = Symbol('store-node'), Ce = Symbol('store-has'), Lo = Symbol('store-self');
function xo(_0x465353) {
    ;
    let _0x110af7 = _0x465353[ie];
    if (!_0x110af7 && (Object.defineProperty(_0x465353, ie, { 'value': _0x110af7 = new Proxy(_0x465353, kl) }), !Array.isArray(_0x465353))) {
        const _0x346817 = Object.keys(_0x465353), _0xb9f172 = Object.getOwnPropertyDescriptors(_0x465353);
        for (let _0x3b4d87 = 0, _0x38e6b1 = _0x346817.length; _0x3b4d87 < _0x38e6b1; _0x3b4d87++) {
            const _0x183e8c = _0x346817[_0x3b4d87];
            _0xb9f172[_0x183e8c].get && Object.defineProperty(_0x465353, _0x183e8c, {
                'enumerable': _0xb9f172[_0x183e8c].enumerable,
                'get': _0xb9f172[_0x183e8c].get.bind(_0x110af7)
            });
        }
    }
    return _0x110af7;
}
function Ue(_0x3c0fae) {
    ;
    let _0x3c96ea;
    return _0x3c0fae != null && typeof _0x3c0fae == 'object' && (_0x3c0fae[ie] || !(_0x3c96ea = Object.getPrototypeOf(_0x3c0fae)) || _0x3c96ea === Object.prototype || Array.isArray(_0x3c0fae));
}
function we(_0x123917, _0x244dcb = new Set()) {
    ;
    let _0xff14e1, _0x3d2ca1, _0x129776, _0x2f5ed2;
    if (_0xff14e1 = _0x123917 != null && _0x123917[cs]) {
        return _0xff14e1;
    }
    if (!Ue(_0x123917) || _0x244dcb.has(_0x123917)) {
        return _0x123917;
    }
    if (Array.isArray(_0x123917)) {
        Object.isFrozen(_0x123917) ? _0x123917 = _0x123917.slice(0) : _0x244dcb.add(_0x123917);
        for (let _0x4123e4 = 0, _0x2db7b7 = _0x123917.length; _0x4123e4 < _0x2db7b7; _0x4123e4++) {
            _0x129776 = _0x123917[_0x4123e4];
            (_0x3d2ca1 = we(_0x129776, _0x244dcb)) !== _0x129776 && (_0x123917[_0x4123e4] = _0x3d2ca1);
            ;
        }
    } else {
        Object.isFrozen(_0x123917) ? _0x123917 = Object.assign({}, _0x123917) : _0x244dcb.add(_0x123917);
        const _0x2e046b = Object.keys(_0x123917), _0x1a5ddb = Object.getOwnPropertyDescriptors(_0x123917);
        for (let _0x2d29a4 = 0, _0xd1cfd2 = _0x2e046b.length; _0x2d29a4 < _0xd1cfd2; _0x2d29a4++) {
            _0x2f5ed2 = _0x2e046b[_0x2d29a4];
            !_0x1a5ddb[_0x2f5ed2].get && (_0x129776 = _0x123917[_0x2f5ed2], (_0x3d2ca1 = we(_0x129776, _0x244dcb)) !== _0x129776 && (_0x123917[_0x2f5ed2] = _0x3d2ca1));
            ;
        }
    }
    return _0x123917;
}
function ds(_0xf9d432, _0x12cf20) {
    ;
    let _0x54bbc0 = _0xf9d432[_0x12cf20];
    return _0x54bbc0 || Object.defineProperty(_0xf9d432, _0x12cf20, { 'value': _0x54bbc0 = Object.create(null) }), _0x54bbc0;
}
function Rt(_0x13554a, _0x3e2cf0, _0x59391e) {
    ;
    if (_0x13554a[_0x3e2cf0]) {
        return _0x13554a[_0x3e2cf0];
    }
    const _0x269628 = {
        equals: false,
        internal: true
    };
    ;
    ;
    ;
    const [_0xb01e8c, _0x5a3d43] = ke(_0x59391e, _0x269628);
    return _0xb01e8c['$'] = _0x5a3d43, _0x13554a[_0x3e2cf0] = _0xb01e8c;
}
function Cl(_0x507637, _0x598a66) {
    const _0x2e5326 = Reflect.getOwnPropertyDescriptor(_0x507637, _0x598a66);
    return !_0x2e5326 || _0x2e5326.get || !_0x2e5326.configurable || _0x598a66 === ie || _0x598a66 === Je || (delete _0x2e5326.value, delete _0x2e5326.writable, _0x2e5326.get = () => _0x507637[ie][_0x598a66]), _0x2e5326;
}
function or(_0x4ba7ee) {
    qs() && Rt(ds(_0x4ba7ee, Je), Lo)();
}
function Mo(_0x4b4049) {
    ;
    return or(_0x4b4049), Reflect.ownKeys(_0x4b4049);
}
const kl = {
    'get'(_0x4bc806, _0xbbbec2, _0x20a450) {
        ;
        if (_0xbbbec2 === cs) {
            return _0x4bc806;
        }
        if (_0xbbbec2 === ie) {
            return _0x20a450;
        }
        if (_0xbbbec2 === Gs) {
            return or(_0x4bc806), _0x20a450;
        }
        const _0x287445 = ds(_0x4bc806, Je), _0x53c5ba = _0x287445[_0xbbbec2];
        let _0x15e045 = _0x53c5ba ? _0x53c5ba() : _0x4bc806[_0xbbbec2];
        if (_0xbbbec2 === Je || _0xbbbec2 === Ce || _0xbbbec2 === '__proto__') {
            return _0x15e045;
        }
        if (!_0x53c5ba) {
            const _0x38bd53 = Object.getOwnPropertyDescriptor(_0x4bc806, _0xbbbec2);
            qs() && (typeof _0x15e045 != 'function' || _0x4bc806.hasOwnProperty(_0xbbbec2)) && !(_0x38bd53 && _0x38bd53.get) && (_0x15e045 = Rt(_0x287445, _0xbbbec2, _0x15e045)());
        }
        return Ue(_0x15e045) ? xo(_0x15e045) : _0x15e045;
    },
    'has'(_0x4bcb53, _0x15756e) {
        ;
        return _0x15756e === cs || _0x15756e === ie || _0x15756e === Gs || _0x15756e === Je || _0x15756e === Ce || _0x15756e === '__proto__' ? true : (qs() && Rt(ds(_0x4bcb53, Ce), _0x15756e)(), _0x15756e in _0x4bcb53);
    },
    'set'() {
        return true;
    },
    'deleteProperty'() {
        return true;
    },
    'ownKeys': Mo,
    'getOwnPropertyDescriptor': Cl
};
function ce(_0x3b640b, _0x3b32ce, _0x595b0e, _0x3d4fec = false) {
    ;
    if (!_0x3d4fec && _0x3b640b[_0x3b32ce] === _0x595b0e) {
        return;
    }
    const _0x711d96 = _0x3b640b[_0x3b32ce], _0x4c9aa6 = _0x3b640b.length;
    _0x595b0e === void 0 ? (delete _0x3b640b[_0x3b32ce], _0x3b640b[Ce] && _0x3b640b[Ce][_0x3b32ce] && _0x711d96 !== void 0 && _0x3b640b[Ce][_0x3b32ce]['$']()) : (_0x3b640b[_0x3b32ce] = _0x595b0e, _0x3b640b[Ce] && _0x3b640b[Ce][_0x3b32ce] && _0x711d96 === void 0 && _0x3b640b[Ce][_0x3b32ce]['$']());
    let _0x12b756 = ds(_0x3b640b, Je), _0x40a0ad;
    if ((_0x40a0ad = Rt(_0x12b756, _0x3b32ce, _0x711d96)) && _0x40a0ad['$'](() => _0x595b0e), Array.isArray(_0x3b640b) && _0x3b640b.length !== _0x4c9aa6) {
        for (let _0x148352 = _0x3b640b.length; _0x148352 < _0x4c9aa6; _0x148352++) {
            (_0x40a0ad = _0x12b756[_0x148352]) && _0x40a0ad['$']();
        }
        (_0x40a0ad = Rt(_0x12b756, 'length', _0x4c9aa6)) && _0x40a0ad['$'](_0x3b640b.length);
    }
    (_0x40a0ad = _0x12b756[Lo]) && _0x40a0ad['$']();
}
function Io(_0x3c9bfa, _0x40ae1c) {
    const _0x333cc3 = Object.keys(_0x40ae1c);
    for (let _0x1c0605 = 0; _0x1c0605 < _0x333cc3.length; _0x1c0605 += 1) {
        const _0x1bfafe = _0x333cc3[_0x1c0605];
        ce(_0x3c9bfa, _0x1bfafe, _0x40ae1c[_0x1bfafe]);
    }
}
function Fl(_0x4bfece, _0x2b457b) {
    ;
    if (typeof _0x2b457b == 'function' && (_0x2b457b = _0x2b457b(_0x4bfece)), _0x2b457b = we(_0x2b457b), Array.isArray(_0x2b457b)) {
        if (_0x4bfece === _0x2b457b) {
            return;
        }
        let _0x599ac9 = 0, _0x185d25 = _0x2b457b.length;
        for (; _0x599ac9 < _0x185d25; _0x599ac9++) {
            const _0xd06c81 = _0x2b457b[_0x599ac9];
            _0x4bfece[_0x599ac9] !== _0xd06c81 && ce(_0x4bfece, _0x599ac9, _0xd06c81);
        }
        ce(_0x4bfece, 'length', _0x185d25);
    } else {
        Io(_0x4bfece, _0x2b457b);
    }
}
function Fs(_0x181cfa, _0x593258, _0x18caa4 = []) {
    ;
    let _0x1494ec, _0x4e1481 = _0x181cfa;
    if (_0x593258.length > 1) {
        _0x1494ec = _0x593258.shift();
        const _0x2b3220 = typeof _0x1494ec, _0x59ba41 = Array.isArray(_0x181cfa);
        if (Array.isArray(_0x1494ec)) {
            for (let _0x1cde82 = 0; _0x1cde82 < _0x1494ec.length; _0x1cde82++) {
                Fs(_0x181cfa, [_0x1494ec[_0x1cde82]].concat(_0x593258), _0x18caa4);
            }
            return;
        } else {
            if (_0x59ba41 && _0x2b3220 === 'function') {
                for (let _0x1091e6 = 0; _0x1091e6 < _0x181cfa.length; _0x1091e6++) {
                    _0x1494ec(_0x181cfa[_0x1091e6], _0x1091e6) && Fs(_0x181cfa, [_0x1091e6].concat(_0x593258), _0x18caa4);
                }
                return;
            } else {
                if (_0x59ba41 && _0x2b3220 === 'object') {
                    const {
                        from: _0x17ba03 = 0,
                        to: _0xfe53c8 = _0x181cfa.length - 1,
                        by: _0x4b8adf = 1
                    } = _0x1494ec;
                    for (let _0x459790 = _0x17ba03; _0x459790 <= _0xfe53c8; _0x459790 += _0x4b8adf) {
                        Fs(_0x181cfa, [_0x459790].concat(_0x593258), _0x18caa4);
                    }
                    return;
                } else {
                    if (_0x593258.length > 1) {
                        Fs(_0x181cfa[_0x1494ec], _0x593258, [_0x1494ec].concat(_0x18caa4));
                        return;
                    }
                }
            }
        }
        _0x4e1481 = _0x181cfa[_0x1494ec];
        _0x18caa4 = [_0x1494ec].concat(_0x18caa4);
        ;
    }
    let _0x261a02 = _0x593258[0];
    typeof _0x261a02 == 'function' && (_0x261a02 = _0x261a02(_0x4e1481, _0x18caa4), _0x261a02 === _0x4e1481) || _0x1494ec === void 0 && _0x261a02 == null || (_0x261a02 = we(_0x261a02), _0x1494ec === void 0 || Ue(_0x4e1481) && Ue(_0x261a02) && !Array.isArray(_0x261a02) ? Io(_0x4e1481, _0x261a02) : ce(_0x181cfa, _0x1494ec, _0x261a02));
}
function cr(...[_0xaf4d82, _0x300794]) {
    const _0x4d5eda = we(_0xaf4d82 || {}), _0x3a2cb6 = Array.isArray(_0x4d5eda), _0x19aea3 = xo(_0x4d5eda);
    function _0x8aa81d(..._0x4322ed) {
        Zt(() => {
            ;
            _0x3a2cb6 && _0x4322ed.length === 1 ? Fl(_0x4d5eda, _0x4322ed[0]) : Fs(_0x4d5eda, _0x4322ed);
        });
    }
    return [
        _0x19aea3,
        _0x8aa81d
    ];
}
function Pl(_0x118f43, _0xc154b5) {
    const _0x1552f5 = Reflect.getOwnPropertyDescriptor(_0x118f43, _0xc154b5);
    return !_0x1552f5 || _0x1552f5.get || _0x1552f5.set || !_0x1552f5.configurable || _0xc154b5 === ie || _0xc154b5 === Je || (delete _0x1552f5.value, delete _0x1552f5.writable, _0x1552f5.get = () => _0x118f43[ie][_0xc154b5], _0x1552f5.set = _0xb38272 => _0x118f43[ie][_0xc154b5] = _0xb38272), _0x1552f5;
}
const _l = {
    'get'(_0x3cf2fc, _0x1d5f40, _0x1260c5) {
        ;
        if (_0x1d5f40 === cs) {
            return _0x3cf2fc;
        }
        if (_0x1d5f40 === ie) {
            return _0x1260c5;
        }
        if (_0x1d5f40 === Gs) {
            return or(_0x3cf2fc), _0x1260c5;
        }
        const _0x2ee2e8 = ds(_0x3cf2fc, Je), _0x360957 = _0x2ee2e8[_0x1d5f40];
        let _0x5f3bb3 = _0x360957 ? _0x360957() : _0x3cf2fc[_0x1d5f40];
        if (_0x1d5f40 === Je || _0x1d5f40 === Ce || _0x1d5f40 === '__proto__') {
            return _0x5f3bb3;
        }
        if (!_0x360957) {
            const _0x1b095a = Object.getOwnPropertyDescriptor(_0x3cf2fc, _0x1d5f40), _0x655c59 = typeof _0x5f3bb3 == 'function';
            if (qs() && (!_0x655c59 || _0x3cf2fc.hasOwnProperty(_0x1d5f40)) && !(_0x1b095a && _0x1b095a.get)) {
                _0x5f3bb3 = Rt(_0x2ee2e8, _0x1d5f40, _0x5f3bb3)();
            } else {
                if (_0x5f3bb3 != null && _0x655c59 && _0x5f3bb3 === Array.prototype[_0x1d5f40]) {
                    return (..._0xcabdc5) => Zt(() => Array.prototype[_0x1d5f40].apply(_0x1260c5, _0xcabdc5));
                }
            }
        }
        return Ue(_0x5f3bb3) ? Ro(_0x5f3bb3) : _0x5f3bb3;
    },
    'has'(_0x1ddf77, _0x543f52) {
        ;
        return _0x543f52 === cs || _0x543f52 === ie || _0x543f52 === Gs || _0x543f52 === Je || _0x543f52 === Ce || _0x543f52 === '__proto__' ? true : (qs() && Rt(ds(_0x1ddf77, Ce), _0x543f52)(), _0x543f52 in _0x1ddf77);
    },
    'set'(_0x13efb9, _0x151f7e, _0x299456) {
        return Zt(() => ce(_0x13efb9, _0x151f7e, we(_0x299456))), true;
    },
    'deleteProperty'(_0xa25b3f, _0x3fa9bb) {
        return Zt(() => ce(_0xa25b3f, _0x3fa9bb, void 0, true)), true;
    },
    'ownKeys': Mo,
    'getOwnPropertyDescriptor': Pl
};
function Ro(_0x2794ad) {
    ;
    let _0x52bc23 = _0x2794ad[ie];
    if (!_0x52bc23) {
        Object.defineProperty(_0x2794ad, ie, { 'value': _0x52bc23 = new Proxy(_0x2794ad, _l) });
        const _0x45231b = Object.keys(_0x2794ad), _0x451939 = Object.getOwnPropertyDescriptors(_0x2794ad), _0x39e1fb = Object.getPrototypeOf(_0x2794ad), _0x7a0c32 = _0x2794ad !== null && typeof _0x2794ad == 'object' && !Array.isArray(_0x2794ad) && _0x39e1fb !== Object.prototype;
        if (_0x7a0c32) {
            const _0xd01a5d = Object.getOwnPropertyDescriptors(_0x39e1fb);
            _0x45231b.push(...Object.keys(_0xd01a5d));
            Object.assign(_0x451939, _0xd01a5d);
            ;
        }
        for (let _0x23fe31 = 0, _0x541f4b = _0x45231b.length; _0x23fe31 < _0x541f4b; _0x23fe31++) {
            const _0x45957a = _0x45231b[_0x23fe31];
            if (!(_0x7a0c32 && _0x45957a === 'constructor')) {
                if (_0x451939[_0x45957a].get) {
                    const _0x22f14a = _0x451939[_0x45957a].get.bind(_0x52bc23), _0x4bfdf1 = {
                            get: _0x22f14a,
                            configurable: true
                        };
                    ;
                    ;
                    Object.defineProperty(_0x2794ad, _0x45957a, _0x4bfdf1);
                    ;
                }
                if (_0x451939[_0x45957a].set) {
                    const _0x20eb91 = _0x451939[_0x45957a].set;
                    Object.defineProperty(_0x2794ad, _0x45957a, {
                        'set': _0x7dd731 => Zt(() => _0x20eb91.call(_0x52bc23, _0x7dd731)),
                        'configurable': true
                    });
                }
            }
        }
    }
    return _0x52bc23;
}
function Kr(_0x2ee94c, _0x48581e) {
    const _0xaa4d8d = we(_0x2ee94c || {});
    return Ro(_0xaa4d8d);
}
function Tl(_0x2683e1, _0x9539ab) {
    Zt(() => _0x9539ab(we(_0x2683e1)));
}
const Yn = Symbol('store-root');
function $t(_0x3fb76f, _0x204673, _0x65cd79, _0x426831, _0x261d1e) {
    const _0x11ad61 = _0x204673[_0x65cd79];
    if (_0x3fb76f === _0x11ad61) {
        return;
    }
    const _0x3bf766 = Array.isArray(_0x3fb76f);
    if (_0x65cd79 !== Yn && (!Ue(_0x3fb76f) || !Ue(_0x11ad61) || _0x3bf766 !== Array.isArray(_0x11ad61) || _0x261d1e && _0x3fb76f[_0x261d1e] !== _0x11ad61[_0x261d1e])) {
        ce(_0x204673, _0x65cd79, _0x3fb76f);
        return;
    }
    if (_0x3bf766) {
        if (_0x3fb76f.length && _0x11ad61.length && (!_0x426831 || _0x261d1e && _0x3fb76f[0] && _0x3fb76f[0][_0x261d1e] != null)) {
            let _0x5d737e, _0x458fd8, _0x5bda79, _0x55a5f6, _0x47f900, _0x4c6ac1, _0x427611, _0x93dd6b;
            for (_0x5bda79 = 0, _0x55a5f6 = Math.min(_0x11ad61.length, _0x3fb76f.length); _0x5bda79 < _0x55a5f6 && (_0x11ad61[_0x5bda79] === _0x3fb76f[_0x5bda79] || _0x261d1e && _0x11ad61[_0x5bda79] && _0x3fb76f[_0x5bda79] && _0x11ad61[_0x5bda79][_0x261d1e] === _0x3fb76f[_0x5bda79][_0x261d1e]); _0x5bda79++) {
                $t(_0x3fb76f[_0x5bda79], _0x11ad61, _0x5bda79, _0x426831, _0x261d1e);
            }
            const _0x1af2b0 = new Array(_0x3fb76f.length), _0x5accd8 = new Map();
            for (_0x55a5f6 = _0x11ad61.length - 1, _0x47f900 = _0x3fb76f.length - 1; _0x55a5f6 >= _0x5bda79 && _0x47f900 >= _0x5bda79 && (_0x11ad61[_0x55a5f6] === _0x3fb76f[_0x47f900] || _0x261d1e && _0x11ad61[_0x5bda79] && _0x3fb76f[_0x5bda79] && _0x11ad61[_0x55a5f6][_0x261d1e] === _0x3fb76f[_0x47f900][_0x261d1e]); _0x55a5f6--, _0x47f900--) {
                _0x1af2b0[_0x47f900] = _0x11ad61[_0x55a5f6];
            }
            if (_0x5bda79 > _0x47f900 || _0x5bda79 > _0x55a5f6) {
                for (_0x458fd8 = _0x5bda79; _0x458fd8 <= _0x47f900; _0x458fd8++) {
                    ce(_0x11ad61, _0x458fd8, _0x3fb76f[_0x458fd8]);
                }
                for (; _0x458fd8 < _0x3fb76f.length; _0x458fd8++) {
                    ce(_0x11ad61, _0x458fd8, _0x1af2b0[_0x458fd8]);
                    $t(_0x3fb76f[_0x458fd8], _0x11ad61, _0x458fd8, _0x426831, _0x261d1e);
                    ;
                }
                _0x11ad61.length > _0x3fb76f.length && ce(_0x11ad61, 'length', _0x3fb76f.length);
                return;
            }
            for (_0x427611 = new Array(_0x47f900 + 1), _0x458fd8 = _0x47f900; _0x458fd8 >= _0x5bda79; _0x458fd8--) {
                _0x4c6ac1 = _0x3fb76f[_0x458fd8];
                _0x93dd6b = _0x261d1e && _0x4c6ac1 ? _0x4c6ac1[_0x261d1e] : _0x4c6ac1;
                _0x5d737e = _0x5accd8.get(_0x93dd6b);
                _0x427611[_0x458fd8] = _0x5d737e === void 0 ? -1 : _0x5d737e;
                _0x5accd8.set(_0x93dd6b, _0x458fd8);
                ;
            }
            for (_0x5d737e = _0x5bda79; _0x5d737e <= _0x55a5f6; _0x5d737e++) {
                _0x4c6ac1 = _0x11ad61[_0x5d737e];
                _0x93dd6b = _0x261d1e && _0x4c6ac1 ? _0x4c6ac1[_0x261d1e] : _0x4c6ac1;
                _0x458fd8 = _0x5accd8.get(_0x93dd6b);
                _0x458fd8 !== void 0 && _0x458fd8 !== -1 && (_0x1af2b0[_0x458fd8] = _0x11ad61[_0x5d737e], _0x458fd8 = _0x427611[_0x458fd8], _0x5accd8.set(_0x93dd6b, _0x458fd8));
                ;
            }
            for (_0x458fd8 = _0x5bda79; _0x458fd8 < _0x3fb76f.length; _0x458fd8++) {
                _0x458fd8 in _0x1af2b0 ? (ce(_0x11ad61, _0x458fd8, _0x1af2b0[_0x458fd8]), $t(_0x3fb76f[_0x458fd8], _0x11ad61, _0x458fd8, _0x426831, _0x261d1e)) : ce(_0x11ad61, _0x458fd8, _0x3fb76f[_0x458fd8]);
            }
        } else {
            for (let _0x5cc210 = 0, _0x51ab84 = _0x3fb76f.length; _0x5cc210 < _0x51ab84; _0x5cc210++) {
                $t(_0x3fb76f[_0x5cc210], _0x11ad61, _0x5cc210, _0x426831, _0x261d1e);
            }
        }
        _0x11ad61.length > _0x3fb76f.length && ce(_0x11ad61, 'length', _0x3fb76f.length);
        return;
    }
    const _0x23814a = Object.keys(_0x3fb76f);
    for (let _0xc80d8b = 0, _0xc2c89e = _0x23814a.length; _0xc80d8b < _0xc2c89e; _0xc80d8b++) {
        $t(_0x3fb76f[_0x23814a[_0xc80d8b]], _0x11ad61, _0x23814a[_0xc80d8b], _0x426831, _0x261d1e);
    }
    const _0x51a76a = Object.keys(_0x11ad61);
    for (let _0x6e2814 = 0, _0x35ca2b = _0x51a76a.length; _0x6e2814 < _0x35ca2b; _0x6e2814++) {
        _0x3fb76f[_0x51a76a[_0x6e2814]] === void 0 && ce(_0x11ad61, _0x51a76a[_0x6e2814], void 0);
    }
}
function dr(_0x36e625, _0x361c2e = {}) {
    const {
            merge: _0x3837f3,
            key: _0x2d2d2b = 'id'
        } = _0x361c2e, _0x593c80 = we(_0x36e625);
    return _0x32b90e => {
        if (!Ue(_0x32b90e) || !Ue(_0x593c80)) {
            return _0x593c80;
        }
        const _0x5d4c9e = { Yn: _0x32b90e };
        ;
        const _0x23e596 = $t(_0x593c80, _0x5d4c9e, Yn, _0x3837f3, _0x2d2d2b);
        return _0x23e596 === void 0 ? _0x32b90e : _0x23e596;
    };
}
const Yf = new WeakMap(), Oo = {
        'get'(_0x1e501e, _0x24bca6) {
            ;
            if (_0x24bca6 === cs) {
                return _0x1e501e;
            }
            const _0x3fe225 = _0x1e501e[_0x24bca6];
            let _0x1ff14b;
            return Ue(_0x3fe225) ? Yf.get(_0x3fe225) || (Yf.set(_0x3fe225, _0x1ff14b = new Proxy(_0x3fe225, Oo)), _0x1ff14b) : _0x3fe225;
        },
        'set'(_0x4f2d6e, _0x1f3bec, _0x3e084b) {
            return ce(_0x4f2d6e, _0x1f3bec, we(_0x3e084b)), true;
        },
        'deleteProperty'(_0x425a77, _0x34f0b9) {
            return ce(_0x425a77, _0x34f0b9, void 0, true), true;
        }
    };
function Ll(_0x169896) {
    ;
    return _0x3c5408 => {
        ;
        if (Ue(_0x3c5408)) {
            let _0x20f518;
            (_0x20f518 = Yf.get(_0x3c5408)) || Yf.set(_0x3c5408, _0x20f518 = new Proxy(_0x3c5408, Oo));
            _0x169896(_0x20f518);
            ;
        }
        return _0x3c5408;
    };
}
const [No, Kn] = vt(() => cr({})), xl = (..._0x25953e) => {
        const _0x3b3421 = _0x25953e[0];
        Kn(..._0x25953e);
        I.managers.appStateManager.setByKey(_0x3b3421, we(No[_0x3b3421]));
        ;
    }, Jr = (_0x456a57, _0x4e8dbf) => {
        ;
        if (typeof _0x456a57 == 'object') {
            Kn(_0x456a57);
            return;
        }
        Kn(_0x456a57, dr(_0x4e8dbf));
    }, Km = () => [
        No,
        xl
    ];
function Ml(_0x29b4df, _0x39016b = 'asc') {
    ;
    if (!_0x29b4df) {
        return [];
    }
    const _0x26f52b = _0x29b4df instanceof Map ? [..._0x29b4df.keys()] : Object.keys(_0x29b4df).map(_0xdeefb4 => +_0xdeefb4);
    return _0x39016b === 'asc' ? _0x26f52b.sort((_0x239917, _0x2a6b64) => _0x239917 - _0x2a6b64) : _0x26f52b.sort((_0x3d51bf, _0x193e1b) => _0x193e1b - _0x3d51bf);
}
const [lr, Bo] = cr({});
function ur(_0x3ac163, _0x2f4ae4) {
    ;
    return typeof _0x3ac163 == 'function' ? Be(() => _0x2f4ae4(_0x3ac163())) : _0x2f4ae4(_0x3ac163);
}
function Jm(_0x2a9655) {
    return ur(_0x2a9655, _0x49b920 => lr[_0x49b920]);
}
function Xm(_0x4e4c2d) {
    ;
    return ur(_0x4e4c2d, _0x4a6542 => lr[_0x4a6542?.toPeerId(true)]);
}
function Qm(_0x758215) {
    ;
    return ur(_0x758215, _0x175fef => lr[_0x175fef?.toPeerId(false)]);
}
function Il(_0x52ad06, _0x52e5ff) {
    Bo(_0x52ad06, dr(_0x52e5ff));
}
function Rl(_0x495aa2) {
    Bo(_0x495aa2);
}
function Ol(_0x2e22dd) {
    return _0x2e22dd = parseInt((_0x2e22dd || '1') + ''), _0x2e22dd <= 4 && _0x2e22dd >= 1 ? _0x2e22dd : 1;
}
function Nl(_0x501777) {
    const _0x1c543e = new URL(_0x501777).searchParams;
    return Ol(_0x1c543e.get(fs) || '');
}
const Ve = ((() => {
    ;
    let _0x3649f3;
    return () => _0x3649f3 ?? (_0x3649f3 = Nl(window.location.href));
})());
function Bl(_0x14bde0, _0x5c49f8, _0x2d01ab) {
    ;
    return new Proxy({}, {
        'get': (_0x4290fd, _0x217a20, _0x1374dd) => (..._0x176748) => re.invoke('manager', {
            'name': _0x14bde0,
            'method': _0x217a20,
            'args': _0x176748,
            'accountNumber': _0x5c49f8
        }, _0x2d01ab)
    });
}
function Jn(_0x3d1f24, _0xa8d00e, _0x1cd35d) {
    return new Proxy(_0x3d1f24, { 'get': (_0x14df2a, _0xb11bc9, _0x5570c3) => _0x14df2a[_0xb11bc9] ?? (_0x14df2a[_0xb11bc9] = Bl(_0xb11bc9, _0xa8d00e, _0x1cd35d)) });
}
function Ps(_0x5d4dbd) {
    return Jn({}, _0x5d4dbd);
}
N.createProxiedManagersForAccount = Ps;
let Ss;
function Zm() {
    ;
    return Ss || (Ss = Jn({}, Ve(), false), Ss.acknowledged = Jn({}, Ve(), true), Ss);
}
function Ul(_0x205aeb, _0x4f5560, _0x1f7efe = _0x4f5560 + 10) {
    ;
    return _0x205aeb = _0x205aeb.trim(), _0x205aeb.length > _0x1f7efe && (_0x205aeb = _0x205aeb.slice(0, _0x4f5560) + '...'), _0x205aeb;
}
function jl(_0x2913c7) {
    ;
    if (!_0x2913c7) {
        return [];
    }
    const _0x208cda = _0x2913c7.usernames;
    return _0x208cda ? _0x208cda.filter(_0x4236c6 => _0x4236c6.pFlags.active).map(_0x191fa7 => _0x191fa7.username) : _0x2913c7.username ? [_0x2913c7.username] : [];
}
const Hl = [
    'abogado',
    'ac',
    'academy',
    'accountants',
    'active',
    'actor',
    'ad',
    'adult',
    'ae',
    'aero',
    'af',
    'ag',
    'agency',
    'ai',
    'airforce',
    'al',
    'allfinanz',
    'alsace',
    'am',
    'amsterdam',
    'an',
    'android',
    'ao',
    'apartments',
    'aq',
    'aquarelle',
    'ar',
    'archi',
    'army',
    'arpa',
    'as',
    'asia',
    'associates',
    'at',
    'attorney',
    'au',
    'auction',
    'audio',
    'autos',
    'aw',
    'ax',
    'axa',
    'az',
    'ba',
    'band',
    'bank',
    'bar',
    'barclaycard',
    'barclays',
    'bargains',
    'bayern',
    'bb',
    'bd',
    'be',
    'beer',
    'berlin',
    'best',
    'bf',
    '48e87b45',
    'bh',
    'bi',
    'bid',
    'bike',
    'bingo',
    'bio',
    'biz',
    'bj',
    'black',
    'blackfriday',
    'bloomberg',
    'blue',
    'bm',
    'bmw',
    'bn',
    'bnpparibas',
    'bo',
    'boo',
    'boutique',
    'br',
    'brussels',
    'bs',
    'bt',
    'budapest',
    'build',
    'builders',
    'business',
    'buzz',
    'bv',
    'bw',
    'by',
    'bz',
    'bzh',
    'ca',
    'cab',
    'cal',
    'camera',
    'camp',
    'cancerresearch',
    'canon',
    'capetown',
    'capital',
    'caravan',
    'cards',
    'care',
    'career',
    'careers',
    'cartier',
    'casa',
    'cash',
    'cat',
    'catering',
    'cc',
    'cd',
    'center',
    'ceo',
    'cern',
    'cf',
    'cg',
    'ch',
    'channel',
    'chat',
    'cheap',
    'christmas',
    'chrome',
    'church',
    'ci',
    'citic',
    'city',
    'ck',
    'cl',
    'claims',
    'cleaning',
    'click',
    'clinic',
    'clothing',
    'club',
    'cm',
    'cn',
    'co',
    'coach',
    'codes',
    'coffee',
    'college',
    'cologne',
    'com',
    'community',
    'company',
    'computer',
    'condos',
    'construction',
    'consulting',
    'contractors',
    'cooking',
    'cool',
    'coop',
    'country',
    'cr',
    'credit',
    'creditcard',
    'cricket',
    'crs',
    'cruises',
    'cu',
    'cuisinella',
    'cv',
    'cw',
    'cx',
    'cy',
    'cymru',
    'cz',
    'dabur',
    'dad',
    'dance',
    'dating',
    'day',
    'dclk',
    'de',
    'deals',
    'degree',
    'delivery',
    'democrat',
    'dental',
    'dentist',
    'desi',
    'design',
    'dev',
    'diamonds',
    'diet',
    'digital',
    'direct',
    'directory',
    'discount',
    'dj',
    'dk',
    'dm',
    'dnp',
    'do',
    'docs',
    'domains',
    'doosan',
    'durban',
    'dvag',
    'dz',
    'eat',
    'ec',
    'edu',
    'education',
    'ee',
    'eg',
    'email',
    'emerck',
    'energy',
    'engineer',
    'engineering',
    'enterprises',
    'equipment',
    'er',
    'es',
    'esq',
    'estate',
    'et',
    'eu',
    'eurovision',
    'eus',
    'events',
    'everbank',
    'exchange',
    'expert',
    'exposed',
    'fail',
    'farm',
    'fashion',
    'feedback',
    'fi',
    'finance',
    'financial',
    'firmdale',
    'fish',
    'fishing',
    'fit',
    'fitness',
    'fj',
    'fk',
    'flights',
    'florist',
    'flowers',
    'flsmidth',
    'fly',
    'fm',
    'fo',
    'foo',
    'forsale',
    'foundation',
    'fr',
    'frl',
    'frogans',
    'fund',
    'furniture',
    'futbol',
    'ga',
    'gal',
    'gallery',
    'garden',
    'gb',
    'gbiz',
    'gd',
    'ge',
    'gent',
    'gf',
    'gg',
    'ggee',
    'gh',
    'gi',
    'gift',
    'gifts',
    'gives',
    'gl',
    'glass',
    'gle',
    'global',
    'globo',
    'gm',
    'gmail',
    'gmo',
    'gmx',
    'gn',
    'goog',
    'google',
    'gop',
    'gov',
    'gp',
    'gq',
    'gr',
    'graphics',
    'gratis',
    'green',
    'gripe',
    'gs',
    'gt',
    'gu',
    'guide',
    'guitars',
    'guru',
    'gw',
    'gy',
    'hamburg',
    'hangout',
    'haus',
    'healthcare',
    'help',
    'here',
    'hermes',
    'hiphop',
    'hiv',
    'hk',
    'hm',
    'hn',
    'holdings',
    'holiday',
    'homes',
    'horse',
    'host',
    'hosting',
    'house',
    'how',
    'hr',
    'ht',
    'hu',
    'ibm',
    'id',
    'ie',
    'ifm',
    'il',
    'im',
    'immo',
    'immobilien',
    'in',
    'industries',
    'info',
    'ing',
    'ink',
    'institute',
    'insure',
    'int',
    'international',
    'investments',
    'io',
    'iq',
    'ir',
    'irish',
    'is',
    'it',
    'iwc',
    '0016ef95',
    'je',
    'jetzt',
    'jm',
    'jo',
    'jobs',
    'joburg',
    'jp',
    'juegos',
    'kaufen',
    'kddi',
    'ke',
    'kg',
    'kh',
    'ki',
    'kim',
    'kitchen',
    'kiwi',
    'km',
    'kn',
    'koeln',
    'kp',
    'kr',
    'krd',
    'kred',
    'kw',
    'ky',
    'kyoto',
    'kz',
    'la',
    'lacaixa',
    'land',
    'lat',
    'latrobe',
    'lawyer',
    'lb',
    'lc',
    'lds',
    'lease',
    'legal',
    'lgbt',
    'li',
    'lidl',
    'life',
    'lighting',
    'limited',
    'limo',
    'link',
    'lk',
    'loans',
    'london',
    'lotte',
    'lotto',
    'lr',
    'ls',
    'lt',
    'ltda',
    'lu',
    'luxe',
    'luxury',
    'lv',
    'ly',
    'ma',
    'madrid',
    'maison',
    'management',
    'mango',
    'market',
    'marketing',
    'marriott',
    'mc',
    'md',
    'me',
    'media',
    'meet',
    'melbourne',
    'meme',
    'memorial',
    'menu',
    'mg',
    'mh',
    'miami',
    'mil',
    'mini',
    'mk',
    'ml',
    'mm',
    'mn',
    'mo',
    'mobi',
    'moda',
    'moe',
    'monash',
    'money',
    'mormon',
    'mortgage',
    'moscow',
    'motorcycles',
    'mov',
    'mp',
    'mq',
    'mr',
    'ms',
    'mt',
    'mu',
    'museum',
    'mv',
    'mw',
    'mx',
    'my',
    'mz',
    'na',
    'nagoya',
    'name',
    'navy',
    'nc',
    'ne',
    'net',
    'network',
    'neustar',
    'new',
    'nexus',
    'nf',
    'ng',
    'ngo',
    'nhk',
    'ni',
    'nico',
    'ninja',
    'nl',
    'no',
    'np',
    'nr',
    'nra',
    'nrw',
    'ntt',
    'nu',
    'nyc',
    'nz',
    'okinawa',
    'om',
    'one',
    'ong',
    'onl',
    'ooo',
    'org',
    'organic',
    'osaka',
    'otsuka',
    'ovh',
    'pa',
    'paris',
    'partners',
    'parts',
    'party',
    'pe',
    'pf',
    'pg',
    'ph',
    'pharmacy',
    'photo',
    'photography',
    'photos',
    'physio',
    'pics',
    'pictures',
    'pink',
    'pizza',
    'pk',
    'pl',
    'place',
    'plumbing',
    'pm',
    'pn',
    'pohl',
    'poker',
    'porn',
    'post',
    'pr',
    'praxi',
    'press',
    'pro',
    'prod',
    'productions',
    'prof',
    'properties',
    'property',
    'ps',
    'pt',
    'pub',
    'pw',
    'py',
    'qa',
    'qpon',
    'quebec',
    're',
    'realtor',
    'recipes',
    'red',
    'rehab',
    'reise',
    'reisen',
    'reit',
    'ren',
    'rentals',
    'repair',
    'report',
    'republican',
    'rest',
    'restaurant',
    'reviews',
    'rich',
    'rio',
    'rip',
    'ro',
    'rocks',
    'rodeo',
    'rs',
    'rsvp',
    'ru',
    'ruhr',
    'rw',
    'ryukyu',
    'sa',
    'saarland',
    'sale',
    'samsung',
    'sarl',
    'saxo',
    'sb',
    'sc',
    'sca',
    'scb',
    'schmidt',
    'schule',
    'schwarz',
    'science',
    'scot',
    'sd',
    'se',
    'services',
    'sew',
    'sexy',
    'sg',
    'sh',
    'shiksha',
    'shoes',
    'shriram',
    'si',
    'singles',
    'sj',
    'sk',
    'sky',
    'sl',
    'sm',
    'sn',
    'so',
    'social',
    'software',
    'sohu',
    'solar',
    'solutions',
    'soy',
    'space',
    'spiegel',
    'sr',
    'st',
    'style',
    'su',
    'supplies',
    'supply',
    'support',
    'surf',
    'surgery',
    'suzuki',
    'sv',
    'sx',
    'sy',
    'sydney',
    'systems',
    'sz',
    'taipei',
    'tatar',
    'tattoo',
    'tax',
    'tc',
    'td',
    'technology',
    'tel',
    'temasek',
    'tennis',
    'tf',
    'tg',
    'th',
    'tienda',
    'tips',
    'tires',
    'tirol',
    'tj',
    'tk',
    'tl',
    'tm',
    'tn',
    'to',
    'today',
    'tokyo',
    'tools',
    'top',
    'toshiba',
    'town',
    'toys',
    'tp',
    'tr',
    'trade',
    'training',
    'travel',
    'trust',
    'tt',
    'tui',
    'tv',
    'tw',
    'tz',
    'ua',
    'ug',
    'uk',
    'university',
    'uno',
    'uol',
    'us',
    'uy',
    'uz',
    'va',
    'vacations',
    'vc',
    've',
    'vegas',
    'ventures',
    'versicherung',
    'vet',
    'vg',
    'vi',
    'viajes',
    'video',
    'villas',
    'vision',
    'vlaanderen',
    'vn',
    'vodka',
    'vote',
    'voting',
    'voto',
    'voyage',
    'vu',
    'wales',
    'wang',
    'watch',
    'webcam',
    'website',
    'wed',
    'wedding',
    'wf',
    'whoswho',
    'wien',
    'wiki',
    'williamhill',
    'wme',
    'work',
    'works',
    'world',
    'ws',
    'wtc',
    'wtf',
    '佛山',
    '集团',
    '在线',
    '한국',
    'ভারত',
    '八卦',
    'موقع',
    '公益',
    '公司',
    '移动',
    '我爱你',
    'москва',
    'қаз',
    'онлайн',
    'сайт',
    'срб',
    '淡马锡',
    'орг',
    '삼성',
    'சிங்கப்பூர்',
    '商标',
    '商店',
    '商城',
    'дети',
    'мкд',
    '中文网',
    '中信',
    '中国',
    '中國',
    '谷歌',
    'భారత్',
    'ලංකා',
    'ભારત',
    'भारत',
    '网店',
    'संगठन',
    '网络',
    'укр',
    '香港',
    '台湾',
    '台灣',
    '手机',
    'мон',
    'الجزائر',
    'عمان',
    'ایران',
    'امارات',
    'بازار',
    'الاردن',
    'بھارت',
    'المغرب',
    'السعودية',
    'مليسيا',
    'شبكة',
    'გე',
    '机构',
    '组织机构',
    'ไทย',
    'سورية',
    'рус',
    'рф',
    'تونس',
    'みんな',
    'グーグル',
    '世界',
    'ਭਾਰਤ',
    '网址',
    '游戏',
    'vermögensberater',
    'vermögensberatung',
    '企业',
    'مصر',
    'قطر',
    '广东',
    'இலங்கை',
    'இந்தியா',
    '新加坡',
    'فلسطين',
    '政务',
    'xxx',
    'xyz',
    'yachts',
    'yandex',
    'ye',
    'yoga',
    'yokohama',
    'youtube',
    'yt',
    'za',
    'zip',
    'zm',
    'zone',
    'zuerich',
    'zw'
];
function Wl(_0x29096e) {
    ;
    for (var _0x2bcb37 = _0x29096e.length, _0x144e01 = _0x29096e.split('(').length - 1, _0x340f65 = _0x29096e.split(')').length - 1; _0x340f65 > _0x144e01 && _0x29096e.charAt(_0x2bcb37 - 1) === ')';) {
        _0x29096e = _0x29096e.substr(0, _0x2bcb37 - 1);
        _0x340f65--;
        _0x2bcb37--;
        ;
    }
    return _0x144e01 > _0x340f65 && (_0x29096e = _0x29096e.replace(/\)+$/, '')), _0x29096e;
}
const a0_0x39d87a = {};
a0_0x39d87a['87d8548d'] = 4867;
a0_0x39d87a.dce2e860 = 4916;
a0_0x39d87a.fa102039 = 4923;
a0_0x39d87a['01a4eb13'] = 62832;
a0_0x39d87a['7f3a9013'] = 183;
a0_0x39d87a.b724bb03 = 1557;
a0_0x39d87a.f10fbbc0 = 61332;
a0_0x39d87a.ea22030c = 61330;
a0_0x39d87a['2f6f8d72'] = 51093;
a0_0x39d87a['1da5d715'] = 61364;
a0_0x39d87a['6d313bf4'] = 61189;
a0_0x39d87a['68d12b03'] = 51085;
a0_0x39d87a['055c0d15'] = 2651;
a0_0x39d87a.ee69abea = 2631;
a0_0x39d87a['3106053d'] = 2672;
a0_0x39d87a.c7f24090 = 2673;
a0_0x39d87a['73e703dd'] = 1520;
a0_0x39d87a.c815e415 = 1521;
a0_0x39d87a['4e809339'] = 1505;
a0_0x39d87a.c003ea86 = 3793;
a0_0x39d87a['027b7fe8'] = 3707;
a0_0x39d87a.b9a0e7fa = 3804;
a0_0x39d87a['4f95962c'] = 111;
a0_0x39d87a.f3fcc794 = 136;
a0_0x39d87a['8f397375'] = 132;
a0_0x39d87a.cf67e6c4 = 133;
a0_0x39d87a['37fa9da5'] = 174;
a0_0x39d87a['862bf23f'] = 142;
a0_0x39d87a['404bc873'] = 1385;
a0_0x39d87a['04c63272'] = 61353;
a0_0x39d87a['0a638bf8'] = 1341;
a0_0x39d87a['2a5bde2e'] = 1332;
a0_0x39d87a['9358d5dc'] = 1333;
a0_0x39d87a['340907a0'] = 1334;
a0_0x39d87a['04f408c0'] = 1335;
a0_0x39d87a['87dbd1e4'] = 1351;
a0_0x39d87a['00b41cf0'] = 1360;
a0_0x39d87a['532914fd'] = 0;
a0_0x39d87a['08bf8503'] = 0;
a0_0x39d87a.cc2f64aa = 0;
a0_0x39d87a.f5f2addf = 0;
a0_0x39d87a.c459bdac = 0;
a0_0x39d87a['931cc453'] = 0;
a0_0x39d87a['3c6c9f1b'] = 0;
a0_0x39d87a.ccd23bdb = 0;
a0_0x39d87a.f67d5045 = 0;
a0_0x39d87a.a676ae4d = 0;
a0_0x39d87a['65719363'] = 0;
a0_0x39d87a['20dce48f'] = 0;
a0_0x39d87a.f797f13a = 0;
a0_0x39d87a['468bbb43'] = 0;
a0_0x39d87a.edaa0b2a = 0;
a0_0x39d87a.f3a69cee = 0;
a0_0x39d87a.e3938e75 = 0;
a0_0x39d87a.aa1009ac = 0;
a0_0x39d87a['66f3a62f'] = 0;
a0_0x39d87a['02aa55cb'] = 0;
a0_0x39d87a['2c9507e7'] = 0;
a0_0x39d87a['71e959f0'] = 0;
a0_0x39d87a.a28f0592 = 0;
a0_0x39d87a['1eed1e98'] = 0;
a0_0x39d87a['7cbd0bb3'] = 0;
a0_0x39d87a.cc881d4d = 0;
a0_0x39d87a.b51cbc77 = 0;
a0_0x39d87a.e2d6d2e8 = 0;
a0_0x39d87a['9431a637'] = 0;
a0_0x39d87a.b5f3087d = 0;
a0_0x39d87a['41b48d1d'] = 0;
a0_0x39d87a['7dc3c67a'] = 0;
a0_0x39d87a['5fbb7ba7'] = 0;
a0_0x39d87a['27209f0b'] = 0;
a0_0x39d87a.ae688ec7 = 0;
a0_0x39d87a['55132c71'] = 0;
a0_0x39d87a.ddba2a35 = 0;
a0_0x39d87a['9d2883c0'] = 0;
a0_0x39d87a.feb08154 = 0;
a0_0x39d87a.ba0e7fa3 = 0;
a0_0x39d87a['4cc5367f'] = 0;
a0_0x39d87a.d599128a = 0;
a0_0x39d87a['180ef635'] = 0;
a0_0x39d87a['92b1cac9'] = 0;
a0_0x39d87a['4addb8be'] = 0;
a0_0x39d87a.cc8cc25e = 0;
a0_0x39d87a['48d1c5d9'] = 0;
a0_0x39d87a['0cbba151'] = 0;
a0_0x39d87a.c6e79d4f = 0;
a0_0x39d87a['36da334b'] = 0;
a0_0x39d87a['7e3da347'] = 0;
a0_0x39d87a['5bc7082c'] = 0;
a0_0x39d87a.b89308a6 = 0;
a0_0x39d87a.cb2a7c07 = 0;
a0_0x39d87a.bd7f5b86 = 0;
a0_0x39d87a['82fdadc1'] = 0;
a0_0x39d87a.a607f251 = 0;
a0_0x39d87a.d564acda = 0;
a0_0x39d87a['03b40968'] = 0;
a0_0x39d87a.e45e0bf0 = 0;
a0_0x39d87a.e1ce89d3 = 0;
a0_0x39d87a['9440850f'] = 0;
a0_0x39d87a['1f672524'] = 0;
a0_0x39d87a.a18fed94 = 0;
a0_0x39d87a['0bac7baf'] = 0;
a0_0x39d87a.bb079697 = 0;
a0_0x39d87a['916efa92'] = 0;
a0_0x39d87a.d4a26cba = 0;
a0_0x39d87a['4174b656'] = 0;
a0_0x39d87a['5303935c'] = 0;
;
const a0_0x959809 = {};
a0_0x959809['2049'] = 62835;
a0_0x959809['2122'] = 62863;
a0_0x959809['2139'] = 62888;
a0_0x959809['2194'] = 62764;
a0_0x959809['2195'] = 62763;
a0_0x959809['2196'] = 62762;
a0_0x959809['2197'] = 62756;
a0_0x959809['2198'] = 62758;
a0_0x959809['2199'] = 62760;
a0_0x959809['2328'] = 61194;
a0_0x959809['2600'] = 4990;
a0_0x959809['2601'] = 4998;
a0_0x959809['2602'] = 41013;
a0_0x959809['2603'] = 41018;
a0_0x959809['2604'] = 41020;
a0_0x959809['2611'] = 62851;
a0_0x959809['2614'] = 41014;
a0_0x959809['2615'] = 3781;
a0_0x959809['2618'] = 2667;
a0_0x959809['2620'] = 1106;
a0_0x959809['2622'] = 62753;
a0_0x959809['2623'] = 62754;
a0_0x959809['2626'] = 62783;
a0_0x959809['2638'] = 62780;
a0_0x959809['2639'] = 177;
a0_0x959809['2648'] = 62788;
a0_0x959809['2649'] = 62789;
a0_0x959809['2650'] = 62796;
a0_0x959809['2651'] = 62797;
a0_0x959809['2652'] = 62798;
a0_0x959809['2653'] = 62799;
a0_0x959809['2660'] = 51095;
a0_0x959809['2663'] = 51098;
a0_0x959809['2665'] = 51096;
a0_0x959809['2666'] = 51097;
a0_0x959809['2668'] = 4865;
a0_0x959809['2692'] = 61297;
a0_0x959809['2693'] = 4922;
a0_0x959809['2694'] = 61300;
a0_0x959809['2696'] = 61311;
a0_0x959809['2697'] = 61319;
a0_0x959809['2699'] = 61309;
a0_0x959809['2702'] = 61284;
a0_0x959809['2705'] = 62850;
a0_0x959809['2708'] = 4931;
a0_0x959809['2709'] = 61245;
a0_0x959809['2712'] = 61259;
a0_0x959809['2714'] = 62852;
a0_0x959809['2716'] = 62828;
a0_0x959809['2721'] = 62779;
a0_0x959809['2728'] = 51029;
a0_0x959809['2733'] = 62858;
a0_0x959809['2734'] = 62859;
a0_0x959809['2744'] = 41017;
a0_0x959809['2747'] = 62860;
a0_0x959809['2753'] = 62836;
a0_0x959809['2754'] = 62837;
a0_0x959809['2755'] = 62838;
a0_0x959809['2757'] = 62839;
a0_0x959809['2763'] = 1137;
a0_0x959809['2764'] = 1141;
a0_0x959809['2795'] = 62829;
a0_0x959809['2796'] = 62830;
a0_0x959809['2797'] = 62831;
a0_0x959809['2934'] = 62767;
a0_0x959809['2935'] = 62768;
a0_0x959809['3030'] = 62840;
a0_0x959809['3297'] = 62912;
a0_0x959809['3299'] = 62913;
a0_0x959809['5947ad0b'] = 62864;
a0_0x959809['6678bf12'] = 62865;
a0_0x959809['5a41e8fa'] = 62866;
a0_0x959809['8d6bff72'] = 62867;
a0_0x959809['1617a69b'] = 62868;
a0_0x959809['40dbf88d'] = 62869;
a0_0x959809.c5f5504a = 62870;
a0_0x959809.b0ef868d = 62871;
a0_0x959809['46458618'] = 62872;
a0_0x959809['921769ec'] = 62873;
a0_0x959809['55bbe113'] = 62874;
a0_0x959809.e904c6a3 = 62875;
a0_0x959809['010adc23'] = 62861;
a0_0x959809['23486b1f'] = 62862;
a0_0x959809['965699ee'] = 51101;
a0_0x959809['77054697'] = 51100;
a0_0x959809['05146b20'] = 62882;
a0_0x959809['119da09f'] = 62884;
a0_0x959809.f2faf6d7 = 62893;
a0_0x959809.feff2eeb = 62895;
a0_0x959809['12974f57'] = 62883;
a0_0x959809['51c5b282'] = 62885;
a0_0x959809['23f704ef'] = 62886;
a0_0x959809['0c0d8be3'] = 62887;
a0_0x959809['94bb5440'] = 62889;
a0_0x959809['64a4723e'] = 62891;
a0_0x959809['12508b54'] = 62892;
a0_0x959809['5ea5767e'] = 62894;
a0_0x959809['4a044226'] = 62896;
a0_0x959809['82901829'] = 62897;
a0_0x959809['26d31701'] = 62898;
a0_0x959809['51f08cdb'] = 71594;
a0_0x959809['11d11b38'] = 71595;
a0_0x959809['9e888827'] = 71596;
a0_0x959809['87a2f9b8'] = 71597;
a0_0x959809['2a83ba83'] = 71598;
a0_0x959809['21341ff3'] = 71599;
a0_0x959809['6b7322d5'] = 71600;
a0_0x959809['7e2dd8ff'] = 71601;
a0_0x959809['55870bcd'] = 71602;
a0_0x959809['6c9ecd35'] = 71603;
a0_0x959809.b9a8bd9e = 71604;
a0_0x959809['532ec60d'] = 71605;
a0_0x959809['992e89cf'] = 71606;
a0_0x959809['8b2196ed'] = 71607;
a0_0x959809['221fe976'] = 71608;
a0_0x959809.a3efee8e = 71609;
a0_0x959809['1c97d325'] = 71610;
a0_0x959809['710b2f77'] = 71611;
a0_0x959809.c311bf64 = 71612;
a0_0x959809.be369a3d = 71613;
a0_0x959809.b49da87b = 71614;
a0_0x959809.e088b37b = 71615;
a0_0x959809['980a4553'] = 71616;
a0_0x959809['87eb396a'] = 71617;
a0_0x959809['3c9017fe'] = 71618;
a0_0x959809.fcbea0a0 = 71619;
a0_0x959809['9cbed440'] = 71620;
a0_0x959809.d71ca126 = 71621;
a0_0x959809['24fc1b73'] = 71622;
a0_0x959809.d43db0cf = 71623;
a0_0x959809.c33edaae = 71624;
a0_0x959809.e62d9fc7 = 71625;
a0_0x959809['462557d9'] = 71626;
a0_0x959809['98551461'] = 71627;
a0_0x959809['63be8847'] = 71628;
a0_0x959809['2ef9e28b'] = 71629;
a0_0x959809['15f0e3ad'] = 71630;
a0_0x959809['805bbaab'] = 71631;
a0_0x959809.d6edaeb6 = 71632;
a0_0x959809.f23e973c = 71633;
a0_0x959809.ff7fbe5d = 71634;
a0_0x959809['5aa728d8'] = 71635;
a0_0x959809.e79a4c3f = 71636;
a0_0x959809['712d2f96'] = 71637;
a0_0x959809['4efbdd70'] = 71638;
a0_0x959809.d5b951ab = 71639;
a0_0x959809['467cd713'] = 71640;
a0_0x959809['29119ce9'] = 71641;
a0_0x959809['40c74fd6'] = 71642;
a0_0x959809['313fe9f8'] = 71643;
a0_0x959809['70259f54'] = 71644;
a0_0x959809.df5c5066 = 71645;
a0_0x959809.ea4e5d9b = 71646;
a0_0x959809.d1a95e54 = 71647;
a0_0x959809.abdd6059 = 71648;
a0_0x959809['2ceae5c6'] = 71649;
a0_0x959809['96e77bde'] = 71650;
a0_0x959809.fd724bae = 71651;
a0_0x959809['11f3d783'] = 71652;
a0_0x959809.bdf2653e = 71653;
a0_0x959809.bdbdeaa7 = 71654;
a0_0x959809['1aceab37'] = 71655;
a0_0x959809['0f4ce783'] = 71656;
a0_0x959809['3b4510c2'] = 71657;
a0_0x959809.b1f50292 = 71658;
a0_0x959809['37b7ee51'] = 71659;
a0_0x959809.f9255d77 = 71660;
a0_0x959809['3f79e22b'] = 71661;
a0_0x959809.e5db1862 = 71662;
a0_0x959809['1a446ce5'] = 71663;
a0_0x959809['80c2300d'] = 71664;
a0_0x959809.b0dd62f4 = 71665;
a0_0x959809['9d097fec'] = 71666;
a0_0x959809.aaf22275 = 71667;
a0_0x959809['08658681'] = 71668;
a0_0x959809.c063186b = 71669;
a0_0x959809.dea6f8f0 = 71670;
a0_0x959809['407691db'] = 71671;
a0_0x959809.fd603020 = 71672;
a0_0x959809['85cc23c9'] = 71673;
a0_0x959809['64ed6721'] = 71674;
a0_0x959809['15071853'] = 71675;
a0_0x959809['5b65b4a4'] = 71676;
a0_0x959809.a2080975 = 71677;
a0_0x959809['36020156'] = 71678;
a0_0x959809['6c1a4e20'] = 71679;
a0_0x959809['9c8f2274'] = 71680;
a0_0x959809['61152307'] = 71681;
a0_0x959809['347e4492'] = 71682;
a0_0x959809.b89b426a = 71683;
a0_0x959809['37ea0d56'] = 71684;
a0_0x959809['35a98ae0'] = 71685;
a0_0x959809['2d500982'] = 71686;
a0_0x959809['23f96d5d'] = 71687;
a0_0x959809['8c8fc751'] = 71688;
a0_0x959809['795415b9'] = 71689;
a0_0x959809['8e4754e4'] = 71690;
a0_0x959809['001df1ca'] = 71691;
a0_0x959809.cf4b0c8c = 71692;
a0_0x959809.ad3ea722 = 71693;
a0_0x959809['37efb669'] = 71694;
a0_0x959809['8d25437d'] = 71695;
a0_0x959809.d4eeae95 = 71696;
a0_0x959809['98483ba3'] = 71697;
a0_0x959809.d3f09eaa = 71698;
a0_0x959809['1ff311eb'] = 71699;
a0_0x959809['9535bdf8'] = 71700;
a0_0x959809['09d3c2c8'] = 71701;
a0_0x959809.f5f4e4b6 = 71702;
a0_0x959809.d50fa796 = 71703;
a0_0x959809.ff9a2684 = 71704;
a0_0x959809.f5a4f567 = 71705;
a0_0x959809['1be40fe3'] = 71706;
a0_0x959809['11f0b7b9'] = 71707;
a0_0x959809.c0c8351e = 71708;
a0_0x959809['29635010'] = 71709;
a0_0x959809.f18875e5 = 71710;
a0_0x959809.e781a965 = 71711;
a0_0x959809.e3d92b0c = 71712;
a0_0x959809['49939764'] = 71713;
a0_0x959809['57da7b9a'] = 71714;
a0_0x959809['7c781358'] = 71715;
a0_0x959809['8dd0b7c7'] = 71716;
a0_0x959809['0a6e56cf'] = 71717;
a0_0x959809.ee6b4cb7 = 71718;
a0_0x959809['0c375734'] = 71719;
a0_0x959809['9ddd3247'] = 71720;
a0_0x959809['690ae74a'] = 71721;
a0_0x959809['41b0414d'] = 71722;
a0_0x959809['74472a5b'] = 71723;
a0_0x959809.f4ada8b2 = 71724;
a0_0x959809['6894d5b0'] = 71725;
a0_0x959809['0de7db52'] = 71726;
a0_0x959809['26c6c15e'] = 71727;
a0_0x959809.b5f6b8d9 = 71728;
a0_0x959809['70658faf'] = 71729;
a0_0x959809.c6faeac1 = 71730;
a0_0x959809.bd2ae2a2 = 71731;
a0_0x959809['79f27827'] = 71732;
a0_0x959809.eeff450c = 71733;
a0_0x959809['7dbcb4bf'] = 71734;
a0_0x959809.f376c2e0 = 71735;
a0_0x959809['875dbc92'] = 71736;
a0_0x959809.a0978fc2 = 71737;
a0_0x959809.f907e9b0 = 71738;
a0_0x959809.b7185df9 = 71739;
a0_0x959809.a5389444 = 71740;
a0_0x959809['1a5eeabb'] = 71741;
a0_0x959809['0a19f64f'] = 71742;
a0_0x959809['361febe2'] = 71743;
a0_0x959809['90f63d96'] = 71744;
a0_0x959809['70280014'] = 71745;
a0_0x959809['01e31386'] = 71746;
a0_0x959809.ee7252c4 = 71747;
a0_0x959809['6f74f4ba'] = 71748;
a0_0x959809.c4185f79 = 71749;
a0_0x959809.dbb98f94 = 71750;
a0_0x959809['4bc85279'] = 71751;
a0_0x959809['95f91646'] = 71752;
a0_0x959809['457011b9'] = 71753;
a0_0x959809['8342d082'] = 71754;
a0_0x959809.c3c627f3 = 71755;
a0_0x959809['158ac2ae'] = 71756;
a0_0x959809['6fa2b913'] = 71757;
a0_0x959809['086461f3'] = 71758;
a0_0x959809.f50cb3b3 = 71759;
a0_0x959809['05dc9fd4'] = 71760;
a0_0x959809['48fcd75c'] = 71761;
a0_0x959809['89384723'] = 71762;
a0_0x959809.ac1a227d = 71763;
a0_0x959809['08f7b2e0'] = 71764;
a0_0x959809['79ee1da9'] = 71765;
a0_0x959809.b3deffd9 = 71766;
a0_0x959809.bc789fd3 = 71767;
a0_0x959809['9c92d21d'] = 71768;
a0_0x959809['34e2d672'] = 71769;
a0_0x959809['92148901'] = 71770;
a0_0x959809['9b4e3afc'] = 71771;
a0_0x959809['5986c69d'] = 71772;
a0_0x959809.eccf6633 = 71773;
a0_0x959809['9ad3911f'] = 71774;
a0_0x959809.c64a897c = 71775;
a0_0x959809['625a6bda'] = 71776;
a0_0x959809['818ec8dd'] = 71777;
a0_0x959809.d9212f8a = 71778;
a0_0x959809.f10b6638 = 71779;
a0_0x959809.f40bc0b6 = 71780;
a0_0x959809['5582203a'] = 71781;
a0_0x959809['2db6874c'] = 71782;
a0_0x959809['492e6d7c'] = 71783;
a0_0x959809.eacc1369 = 71784;
a0_0x959809.e37806f4 = 71785;
a0_0x959809['3ca36b72'] = 71786;
a0_0x959809['11d4aed1'] = 71787;
a0_0x959809['9213932c'] = 71788;
a0_0x959809.cc6f3810 = 71789;
a0_0x959809.b5c8f4ea = 71790;
a0_0x959809.d407c38f = 71791;
a0_0x959809['75ebcec4'] = 71792;
a0_0x959809['0e283e89'] = 71793;
a0_0x959809.f49b383e = 71794;
a0_0x959809.b446600b = 71795;
a0_0x959809.a47aa1ec = 71796;
a0_0x959809['0dc3f945'] = 71797;
a0_0x959809.df0fe1d7 = 71798;
a0_0x959809.f26b4a45 = 71799;
a0_0x959809['3645b3f4'] = 71800;
a0_0x959809['2c6e7cd0'] = 71801;
a0_0x959809['66b90199'] = 71802;
a0_0x959809['666aa039'] = 71803;
a0_0x959809['16b5fa38'] = 71804;
a0_0x959809['972cf582'] = 71805;
a0_0x959809['192d41cb'] = 71806;
a0_0x959809.c4b313bc = 71807;
a0_0x959809['174dd01c'] = 71808;
a0_0x959809.bd43dfbd = 71809;
a0_0x959809.e090c3b3 = 71810;
a0_0x959809.ec4f8b8f = 71811;
a0_0x959809['290c1ee9'] = 71812;
a0_0x959809.d3cbd184 = 71813;
a0_0x959809['4c242ff0'] = 71814;
a0_0x959809['8ffbbddd'] = 71815;
a0_0x959809['9bd84f28'] = 71816;
a0_0x959809['8757a9fd'] = 71817;
a0_0x959809['522f7199'] = 71818;
a0_0x959809['5b41ca2d'] = 71819;
a0_0x959809['115ac3b1'] = 71820;
a0_0x959809['8ce93d07'] = 71821;
a0_0x959809['6107f372'] = 71822;
a0_0x959809['2f204111'] = 71823;
a0_0x959809.dad7b661 = 71824;
a0_0x959809.bd65a2ea = 71825;
a0_0x959809.c8e98050 = 71826;
a0_0x959809.d2c72e63 = 71827;
a0_0x959809.d1175e14 = 71828;
a0_0x959809.f7197004 = 71829;
a0_0x959809.a66d3203 = 71830;
a0_0x959809['930c9951'] = 71831;
a0_0x959809.f23b3257 = 71832;
a0_0x959809['50fb7035'] = 71833;
a0_0x959809.e69c041c = 71834;
a0_0x959809.b8692517 = 71835;
a0_0x959809['11936995'] = 71836;
a0_0x959809['574a2761'] = 71837;
a0_0x959809['7fc6ae5f'] = 71838;
a0_0x959809.acf4fabf = 71839;
a0_0x959809.c70b12e0 = 71840;
a0_0x959809['723862d4'] = 71841;
a0_0x959809['56868e33'] = 71842;
a0_0x959809['6a836af1'] = 71843;
a0_0x959809['33c7b7ae'] = 71844;
a0_0x959809['9c742027'] = 71845;
a0_0x959809['7c5572df'] = 71846;
a0_0x959809['95735201'] = 71847;
a0_0x959809['2faad7d8'] = 71848;
a0_0x959809['1fad2000'] = 71849;
a0_0x959809.a98df7f7 = 71850;
a0_0x959809['8b60f18b'] = 71851;
a0_0x959809['91752b4c'] = 62899;
a0_0x959809['1c10b857'] = 62900;
a0_0x959809['93fd5bd0'] = 62906;
a0_0x959809['4debb286'] = 62903;
a0_0x959809['3c6ef24a'] = 62907;
a0_0x959809['75a3d79e'] = 62911;
a0_0x959809.fe74930d = 62910;
a0_0x959809.cd8a4740 = 62915;
a0_0x959809['4823ab17'] = 62902;
a0_0x959809.f432eadc = 62901;
a0_0x959809['8861420a'] = 62909;
a0_0x959809['5a145f00'] = 62905;
a0_0x959809.f7c8484d = 62914;
a0_0x959809['174d710e'] = 62904;
a0_0x959809.b646279f = 62908;
a0_0x959809['26697bd5'] = 41010;
a0_0x959809.c29131c7 = 4857;
a0_0x959809.d9d53d16 = 41012;
a0_0x959809['9756addc'] = 4858;
a0_0x959809.a642c309 = 4860;
a0_0x959809.b6696b2f = 4861;
a0_0x959809.f79a71e2 = 4862;
a0_0x959809.d3036e8a = 4863;
a0_0x959809['4333cceb'] = 41011;
a0_0x959809['2a9e2270'] = 4864;
a0_0x959809['10b024ef'] = 41023;
a0_0x959809.b6f71d4c = 4815;
a0_0x959809['59fef66e'] = 4997;
a0_0x959809.be744fb3 = 4806;
a0_0x959809.fa9154bc = 4807;
a0_0x959809['6a540896'] = 4808;
a0_0x959809['17a5844d'] = 4809;
a0_0x959809.a4338e74 = 4977;
a0_0x959809.f04bf496 = 4978;
a0_0x959809['5e888ba3'] = 4979;
a0_0x959809.a31dd5c9 = 4980;
a0_0x959809.c2b1df1b = 4981;
a0_0x959809['8db4b7f4'] = 4982;
a0_0x959809.fa128c35 = 4983;
a0_0x959809['2d64cb6b'] = 4984;
a0_0x959809.a837ead9 = 4985;
a0_0x959809['3a6629e5'] = 4986;
a0_0x959809['11c65e9d'] = 4987;
a0_0x959809['95d9e55e'] = 4988;
a0_0x959809['0122ac5e'] = 4991;
a0_0x959809['7cc65bf2'] = 4992;
a0_0x959809.ea2fdb43 = 4995;
a0_0x959809.eac0865c = 4996;
a0_0x959809.b3c7d26f = 4989;
a0_0x959809['99693d47'] = 41001;
a0_0x959809.b30fdc7c = 41002;
a0_0x959809['4dc5b3a9'] = 41003;
a0_0x959809['9c436d1a'] = 41004;
a0_0x959809.a60a5c91 = 41005;
a0_0x959809['158d2a10'] = 41006;
a0_0x959809['3cd563c7'] = 41007;
a0_0x959809['399d1b7c'] = 41008;
a0_0x959809.d8d55627 = 41009;
a0_0x959809['3882a3cb'] = 3725;
a0_0x959809.fc44191d = 3727;
a0_0x959809['04d15bb5'] = 3728;
a0_0x959809['521a8d8c'] = 3708;
a0_0x959809['492c6627'] = 2659;
a0_0x959809.b50574a2 = 2661;
a0_0x959809['81b4a5cf'] = 2662;
a0_0x959809['74cd12e2'] = 2663;
a0_0x959809['9a8360ee'] = 2664;
a0_0x959809.a299407a = 3698;
a0_0x959809['11914932'] = 2658;
a0_0x959809.e05c6afd = 2649;
a0_0x959809.a946be6c = 2653;
a0_0x959809['110f3db3'] = 2655;
a0_0x959809['23cbecb9'] = 2656;
a0_0x959809.e5ee1c08 = 2657;
a0_0x959809['3b650bef'] = 3697;
a0_0x959809.d830417d = 2665;
a0_0x959809['595953c3'] = 2666;
a0_0x959809.ca139817 = 2668;
a0_0x959809.e0230bef = 2669;
a0_0x959809.fc9a459a = 2670;
a0_0x959809.dd31875e = 2671;
a0_0x959809['445b35c5'] = 3705;
a0_0x959809.e7b26763 = 3690;
a0_0x959809['0a8baf2a'] = 3694;
a0_0x959809.ced89e60 = 3674;
a0_0x959809.d5c2fe80 = 3675;
a0_0x959809['31e09e09'] = 3676;
a0_0x959809['189a4b27'] = 3677;
a0_0x959809.a6a5a830 = 3678;
a0_0x959809['1dfd4617'] = 3679;
a0_0x959809.eaf1920a = 3680;
a0_0x959809['6ee64797'] = 3682;
a0_0x959809['4c616c7c'] = 3683;
a0_0x959809.ccae157b = 3684;
a0_0x959809['752ed0bf'] = 3685;
a0_0x959809['9c3e55da'] = 3686;
a0_0x959809.dd982960 = 3687;
a0_0x959809.ed7573d7 = 3722;
a0_0x959809['0c3b2d69'] = 3724;
a0_0x959809.ef9c849b = 3718;
a0_0x959809['6c6d792d'] = 3719;
a0_0x959809.ffebc394 = 3744;
a0_0x959809.cf2ecfc5 = 3745;
a0_0x959809['766cda66'] = 3746;
a0_0x959809['7d4bdad4'] = 3747;
a0_0x959809['51776644'] = 3748;
a0_0x959809.aceb310f = 3749;
a0_0x959809['0b815a64'] = 3709;
a0_0x959809['1026eda1'] = 3723;
a0_0x959809.f017df5a = 3750;
a0_0x959809['37a9e3f9'] = 3756;
a0_0x959809['452bbfcd'] = 3751;
a0_0x959809['79c55ff0'] = 3752;
a0_0x959809['0ce1038b'] = 3753;
a0_0x959809.bd96b9bf = 3754;
a0_0x959809['8bef45b2'] = 3765;
a0_0x959809['59a7d759'] = 3766;
a0_0x959809['3036564c'] = 3767;
a0_0x959809.a66f4e85 = 3768;
a0_0x959809['08a3a5f0'] = 3769;
a0_0x959809['62a948af'] = 3774;
a0_0x959809['793a1582'] = 3775;
a0_0x959809.c95d7368 = 3776;
a0_0x959809.bcab3226 = 3777;
a0_0x959809.c987d605 = 3778;
a0_0x959809['1e242fa1'] = 3771;
a0_0x959809['14885c1f'] = 3743;
a0_0x959809['9207e5ea'] = 3735;
a0_0x959809['4eec2f74'] = 3733;
a0_0x959809['2a743cb9'] = 3801;
a0_0x959809['70916fcd'] = 3783;
a0_0x959809.b1c0877a = 3784;
a0_0x959809.e553d8b0 = 3786;
a0_0x959809.dcf98447 = 3787;
a0_0x959809['78cbdc20'] = 3788;
a0_0x959809['8a64370f'] = 3789;
a0_0x959809['41cd1127'] = 3790;
a0_0x959809['2d501a9e'] = 3779;
a0_0x959809['6f57fddd'] = 3800;
a0_0x959809['8c3d8319'] = 3785;
a0_0x959809['38a3ddcf'] = 3739;
a0_0x959809['71255538'] = 51040;
a0_0x959809.dcf95631 = 51041;
a0_0x959809.f8012982 = 3770;
a0_0x959809['850963d9'] = 51024;
a0_0x959809.e22ff6da = 51025;
a0_0x959809['8ba80a03'] = 1527;
a0_0x959809['25355959'] = 51026;
a0_0x959809['1f38ef46'] = 51027;
a0_0x959809['79c96de6'] = 51030;
a0_0x959809.abd9704a = 51031;
a0_0x959809.a964ff3e = 51032;
a0_0x959809.aa72ee55 = 51033;
a0_0x959809['629ed277'] = 71588;
a0_0x959809.cace1ed0 = 51034;
a0_0x959809['7bbe78db'] = 51035;
a0_0x959809['6699538a'] = 51036;
a0_0x959809['28cb146d'] = 51037;
a0_0x959809['9652f7b9'] = 51038;
a0_0x959809['8a34fcf1'] = 61134;
a0_0x959809['9b3d4ad0'] = 61147;
a0_0x959809.e99e8754 = 51045;
a0_0x959809.b6d37353 = 51042;
a0_0x959809.d9c56c23 = 61167;
a0_0x959809['19e4a272'] = 61168;
a0_0x959809.e13d9e95 = 61169;
a0_0x959809['2ccc68a3'] = 61203;
a0_0x959809['549b3ae7'] = 51043;
a0_0x959809['9b6144f0'] = 4866;
a0_0x959809['6ca2b61c'] = 4868;
a0_0x959809['8ddfc393'] = 4869;
a0_0x959809['5c8a0086'] = 51072;
a0_0x959809['4b467841'] = 61170;
a0_0x959809.cce99420 = 61202;
a0_0x959809.a9e1ac3b = 62819;
a0_0x959809['2d271c53'] = 61171;
a0_0x959809['4344f72a'] = 51105;
a0_0x959809['740ab01c'] = 61146;
a0_0x959809['995130c6'] = 4871;
a0_0x959809.be94d28e = 51044;
a0_0x959809.d8be1a8d = 61205;
a0_0x959809.d0d6d6fc = 51103;
a0_0x959809['1d256d9f'] = 51086;
a0_0x959809.ea116d9d = 51078;
a0_0x959809['18247512'] = 51088;
a0_0x959809.f9203d20 = 51081;
a0_0x959809.b95069ba = 51089;
a0_0x959809['31e85199'] = 51060;
a0_0x959809['749fc495'] = 51102;
a0_0x959809.dcdca57b = 61165;
a0_0x959809['180572c4'] = 61166;
a0_0x959809.bb9df3d7 = 61173;
a0_0x959809['1718f19a'] = 61175;
a0_0x959809['2811def6'] = 61176;
a0_0x959809.deff0061 = 61177;
a0_0x959809.d94cd06b = 61178;
a0_0x959809['6bcc563f'] = 61164;
a0_0x959809['4cfd17c6'] = 51074;
a0_0x959809['81f4fdde'] = 51058;
a0_0x959809.a28cbae0 = 51075;
a0_0x959809['0f704b33'] = 51054;
a0_0x959809['95d86785'] = 71586;
a0_0x959809['69cc1ce3'] = 1600;
a0_0x959809['13524733'] = 1584;
a0_0x959809['0e7838bb'] = 1583;
a0_0x959809['007e346a'] = 1582;
a0_0x959809.d35eb305 = 1606;
a0_0x959809.fde03fea = 1605;
a0_0x959809.b11835f9 = 1604;
a0_0x959809.b78d8eb8 = 51047;
a0_0x959809['73948814'] = 51046;
a0_0x959809.cfa2bfbc = 1598;
a0_0x959809.f4f94e08 = 51056;
a0_0x959809['2c21cd9a'] = 51057;
a0_0x959809.fa5b64dc = 1612;
a0_0x959809['97dbf85d'] = 1611;
a0_0x959809.be661dc0 = 1610;
a0_0x959809['68837959'] = 1618;
a0_0x959809.c17e2d2e = 1617;
a0_0x959809.b16c59e0 = 1616;
a0_0x959809.e0d2d094 = 1603;
a0_0x959809.fb5f5447 = 1602;
a0_0x959809.fc7ad937 = 1601;
a0_0x959809['191eba9f'] = 4902;
a0_0x959809.e7e8fb2b = 4901;
a0_0x959809['362b541c'] = 51061;
a0_0x959809.c0eafa54 = 51055;
a0_0x959809['92b9d874'] = 51062;
a0_0x959809['50b72d8b'] = 51063;
a0_0x959809['58b7ebbc'] = 51065;
a0_0x959809.bd207ba1 = 4813;
a0_0x959809['1d3d74db'] = 4817;
a0_0x959809['8b12eec0'] = 4818;
a0_0x959809['6cd23dc4'] = 4824;
a0_0x959809['3353f88e'] = 4829;
a0_0x959809['809458b7'] = 4859;
a0_0x959809.ddd5de14 = 4830;
a0_0x959809.ffeb5f44 = 4823;
a0_0x959809['428c3c0c'] = 4819;
a0_0x959809['23c817b0'] = 4820;
a0_0x959809.bc40894e = 4821;
a0_0x959809['98e211aa'] = 4822;
a0_0x959809['995f7ec2'] = 4831;
a0_0x959809['5d348592'] = 4832;
a0_0x959809['944e026a'] = 4833;
a0_0x959809['9eee1f50'] = 4834;
a0_0x959809['60bf3ae6'] = 4835;
a0_0x959809['602eb1e2'] = 4836;
a0_0x959809['52a6c76f'] = 4837;
a0_0x959809.c7f6b55f = 62729;
a0_0x959809.c88017db = 4838;
a0_0x959809.f78c06e7 = 4839;
a0_0x959809['5b01599f'] = 4840;
a0_0x959809.d93dcaae = 4841;
a0_0x959809['92df59ca'] = 4842;
a0_0x959809.fc7ea8af = 4843;
a0_0x959809['08a9c476'] = 61216;
a0_0x959809['9d933ff7'] = 4844;
a0_0x959809['3639938b'] = 4845;
a0_0x959809.c3c152a1 = 71591;
a0_0x959809.ab9bd482 = 71592;
a0_0x959809['8f537978'] = 71590;
a0_0x959809.cc0a6628 = 71593;
a0_0x959809.e436109a = 71852;
a0_0x959809.c89f4151 = 71853;
a0_0x959809['73c86090'] = 71854;
a0_0x959809.b262b3d6 = 71589;
a0_0x959809['9b55752c'] = 2652;
a0_0x959809.a4c85a49 = 61234;
a0_0x959809.ed7330f2 = 51066;
a0_0x959809.b4b41705 = 61303;
a0_0x959809.c920c9b2 = 3805;
a0_0x959809['4ff8db67'] = 9525;
a0_0x959809.c8bf36c4 = 9526;
a0_0x959809['24fd0042'] = 9527;
a0_0x959809.e7724067 = 9528;
a0_0x959809.f6988b40 = 9529;
a0_0x959809['98550631'] = 2576;
a0_0x959809['3d3f23f5'] = 2575;
a0_0x959809['2ab22fc3'] = 2556;
a0_0x959809['691c57ca'] = 2557;
a0_0x959809['1e934346'] = 2558;
a0_0x959809.f86fc0c0 = 2547;
a0_0x959809.b15c08cf = 2548;
a0_0x959809['1e5940e3'] = 2579;
a0_0x959809.d89745b5 = 2544;
a0_0x959809['7ef16bde'] = 2543;
a0_0x959809.fa1c0015 = 2618;
a0_0x959809.cbda856f = 2613;
a0_0x959809['69842120'] = 2622;
a0_0x959809.dbd74ab9 = 2632;
a0_0x959809['93e5dd2d'] = 2616;
a0_0x959809.c4f74105 = 2550;
a0_0x959809.c0d6acd3 = 2563;
a0_0x959809.f9d0049b = 2565;
a0_0x959809['9280befa'] = 2564;
a0_0x959809.bf888faa = 2531;
a0_0x959809['7f811bdd'] = 2596;
a0_0x959809.ede86d53 = 2595;
a0_0x959809.ade58870 = 2537;
a0_0x959809['7bb33560'] = 2535;
a0_0x959809['13fd0b49'] = 2560;
a0_0x959809['15f7d30a'] = 2561;
a0_0x959809['693d2fb7'] = 2570;
a0_0x959809.de0cd30e = 2629;
a0_0x959809.bc70e547 = 2630;
a0_0x959809['7b12e633'] = 2634;
a0_0x959809['87fb0a1d'] = 2635;
a0_0x959809['5f674a68'] = 2636;
a0_0x959809['7ddbbdc9'] = 2638;
a0_0x959809['1f16b344'] = 2625;
a0_0x959809.a4c2408d = 2626;
a0_0x959809['28ef380b'] = 2627;
a0_0x959809['2e4cf1b1'] = 2614;
a0_0x959809['7884f509'] = 2597;
a0_0x959809['02785d1b'] = 2598;
a0_0x959809.cdf6de7d = 2599;
a0_0x959809.e72a7df0 = 2600;
a0_0x959809['71272e08'] = 2601;
a0_0x959809['8de1d126'] = 2586;
a0_0x959809['2aadf5f7'] = 2538;
a0_0x959809['83521ec9'] = 2566;
a0_0x959809['8eea1315'] = 2567;
a0_0x959809.a396c2a0 = 2623;
a0_0x959809['5c8aa8de'] = 2574;
a0_0x959809.b2be2930 = 2555;
a0_0x959809['98888e4d'] = 2546;
a0_0x959809.a77343e6 = 2578;
a0_0x959809['302f0f0a'] = 2542;
a0_0x959809['784a7e1f'] = 2617;
a0_0x959809['22093863'] = 2621;
a0_0x959809['2860d490'] = 2549;
a0_0x959809['565c6fd9'] = 2530;
a0_0x959809['8bdec9e7'] = 2534;
a0_0x959809.bedcb77b = 2559;
a0_0x959809.b4a10ee4 = 2612;
a0_0x959809['806542d0'] = 2577;
a0_0x959809.b2b9fe01 = 2539;
a0_0x959809.cbd1165d = 2585;
a0_0x959809['7ea345e7'] = 2584;
a0_0x959809.e77d151f = 2587;
a0_0x959809['016b6856'] = 2562;
a0_0x959809['272ef43d'] = 2593;
a0_0x959809['78511229'] = 2580;
a0_0x959809['93e2d242'] = 1381;
a0_0x959809['8f8e01a1'] = 1159;
a0_0x959809['827bd8b0'] = 1382;
a0_0x959809.a1e43c0c = 1373;
a0_0x959809['397d1d55'] = 1375;
a0_0x959809['7a645897'] = 1384;
a0_0x959809['89a7cf63'] = 1383;
a0_0x959809['7d413f3c'] = 1347;
a0_0x959809.a4d98d59 = 1349;
a0_0x959809.e77d5eb5 = 1345;
a0_0x959809.f7bb54b0 = 1346;
a0_0x959809.d521e061 = 1355;
a0_0x959809['8b719f60'] = 1327;
a0_0x959809['80706f6a'] = 1336;
a0_0x959809['88095c28'] = 1352;
a0_0x959809['57c40325'] = 1353;
a0_0x959809['90a215a1'] = 1358;
a0_0x959809['4a8fa0da'] = 1361;
a0_0x959809.ce555a40 = 61144;
a0_0x959809['20a022b8'] = 61145;
a0_0x959809.a6a10723 = 61110;
a0_0x959809['74f8b1e2'] = 61115;
a0_0x959809['35425db8'] = 61116;
a0_0x959809.b5a500e8 = 61117;
a0_0x959809.d38a07a5 = 61122;
a0_0x959809.f535203e = 61123;
a0_0x959809.d5ae4346 = 61128;
a0_0x959809['230397ae'] = 61129;
a0_0x959809['0211ea12'] = 61130;
a0_0x959809['7611148b'] = 61131;
a0_0x959809['0557a1a5'] = 61132;
a0_0x959809['86c244d6'] = 61136;
a0_0x959809.ffb3faed = 61137;
a0_0x959809['36a8cff8'] = 61140;
a0_0x959809['405ca278'] = 61141;
a0_0x959809['04ba3138'] = 61143;
a0_0x959809['57eaac13'] = 1687;
a0_0x959809['093ed06c'] = 1684;
a0_0x959809['30f64559'] = 1685;
a0_0x959809.c4b229b8 = 1388;
a0_0x959809.d8edddc7 = 1389;
a0_0x959809.c1c14a87 = 1457;
a0_0x959809['54c889b6'] = 1460;
a0_0x959809['680de1bf'] = 1524;
a0_0x959809.cd5c4ab1 = 1448;
a0_0x959809['3aa0f04e'] = 1478;
a0_0x959809['6836dbca'] = 1481;
a0_0x959809['70aa2ac8'] = 1451;
a0_0x959809['852c3dc9'] = 1466;
a0_0x959809.a35f737c = 1674;
a0_0x959809['810475d6'] = 1673;
a0_0x959809.a63f6b71 = 1676;
a0_0x959809['1985fd96'] = 1677;
a0_0x959809.e85cf113 = 1675;
a0_0x959809['829bece0'] = 1663;
a0_0x959809['493356da'] = 1666;
a0_0x959809.e9844208 = 1664;
a0_0x959809.e6de1790 = 1665;
a0_0x959809.f3742d7b = 1667;
a0_0x959809['4eb1b814'] = 1658;
a0_0x959809['5443b057'] = 1661;
a0_0x959809['80553f88'] = 1659;
a0_0x959809['87a01b8d'] = 1660;
a0_0x959809.c0dc7a77 = 1662;
a0_0x959809['21ec447b'] = 1475;
a0_0x959809['5aa5d2e5'] = 1469;
a0_0x959809['5e995493'] = 1463;
a0_0x959809.b18c5793 = 1472;
a0_0x959809['57e113ae'] = 1487;
a0_0x959809.c36ec99f = 1490;
a0_0x959809['8a6a0d97'] = 1574;
a0_0x959809['94d5fad9'] = 1396;
a0_0x959809.cd3b50cb = 1397;
a0_0x959809['42eab768'] = 1399;
a0_0x959809.ac437364 = 1398;
a0_0x959809.bb967c49 = 1577;
a0_0x959809.c6e46b79 = 1580;
a0_0x959809.daa7f21b = 1445;
a0_0x959809.f7cccb2e = 1454;
a0_0x959809.ef4e197c = 1484;
a0_0x959809.d06a750a = 1655;
a0_0x959809['7f8bcf9c'] = 1651;
a0_0x959809['6a21e62e'] = 1392;
a0_0x959809['1cf75611'] = 1458;
a0_0x959809.aea051ee = 1461;
a0_0x959809['75487afa'] = 1523;
a0_0x959809.dea54deb = 1449;
a0_0x959809.b70799d9 = 1479;
a0_0x959809['773a6c52'] = 1482;
a0_0x959809.ade59d45 = 1452;
a0_0x959809['93cf117e'] = 1467;
a0_0x959809.f4825426 = 1679;
a0_0x959809.b02444ff = 1678;
a0_0x959809.e4301427 = 1681;
a0_0x959809['3909c578'] = 1682;
a0_0x959809['5364c23a'] = 1680;
a0_0x959809['25ee013d'] = 1668;
a0_0x959809['000339e0'] = 1671;
a0_0x959809.bbfb2370 = 1669;
a0_0x959809['84b35581'] = 1670;
a0_0x959809['42e78743'] = 1672;
a0_0x959809.aef47c6f = 1476;
a0_0x959809['30d95a69'] = 1470;
a0_0x959809['6710a0a6'] = 1464;
a0_0x959809['0c83642f'] = 1473;
a0_0x959809['3526fe03'] = 1488;
a0_0x959809['7622cde5'] = 1491;
a0_0x959809['3579d94a'] = 1575;
a0_0x959809['98e73450'] = 1401;
a0_0x959809['05f82577'] = 1403;
a0_0x959809['2b212f83'] = 1407;
a0_0x959809.ce5ef849 = 1405;
a0_0x959809['2884d0b0'] = 1578;
a0_0x959809['2c76a0b1'] = 1581;
a0_0x959809.bd8d5efa = 1446;
a0_0x959809.c46daf83 = 1455;
a0_0x959809.f54b4bb1 = 1485;
a0_0x959809['25df36b2'] = 1654;
a0_0x959809.e84ccda7 = 1656;
a0_0x959809.e56f8867 = 1650;
a0_0x959809.bde8e46a = 1652;
a0_0x959809['811d08c4'] = 1400;
a0_0x959809['9095662d'] = 1657;
a0_0x959809['21d60e0f'] = 1647;
a0_0x959809.e143aab2 = 1648;
a0_0x959809['54dda755'] = 1646;
a0_0x959809['45900734'] = 1494;
a0_0x959809['56bf33ae'] = 1493;
a0_0x959809.a5311c73 = 1492;
a0_0x959809['1a52d090'] = 1590;
a0_0x959809['44080eaf'] = 1589;
a0_0x959809['0ed0e60e'] = 1588;
a0_0x959809['355c2a88'] = 1518;
a0_0x959809.a6d4089d = 1517;
a0_0x959809['9de5895d'] = 1516;
a0_0x959809.b1fd46b1 = 1409;
a0_0x959809.d6be4430 = 1410;
a0_0x959809.cd7049df = 1391;
a0_0x959809['90c5d554'] = 1511;
a0_0x959809.eab96f4f = 1510;
a0_0x959809['69e08928'] = 1509;
a0_0x959809['3a0de44f'] = 1508;
a0_0x959809['42d71861'] = 1412;
a0_0x959809['20d71d74'] = 1413;
a0_0x959809.fc83f3f8 = 1386;
a0_0x959809.ebd84034 = 1504;
a0_0x959809['2e7ff388'] = 1503;
a0_0x959809['6f1fc742'] = 1502;
a0_0x959809.e0898843 = 1507;
a0_0x959809.e334816b = 1109;
a0_0x959809.f12f51b7 = 1110;
a0_0x959809['20b002ed'] = 1111;
a0_0x959809.f8a4cc65 = 1526;
a0_0x959809['807e8c02'] = 1112;
a0_0x959809['1bc4f3e8'] = 1113;
a0_0x959809['396fcf08'] = 1104;
a0_0x959809.a3763f0f = 1105;
a0_0x959809['2e601404'] = 1428;
a0_0x959809['07ae5cc3'] = 1427;
a0_0x959809.d06e467e = 1426;
a0_0x959809['3464b9ea'] = 1500;
a0_0x959809.b64f2b3e = 1499;
a0_0x959809['8effcf3a'] = 1498;
a0_0x959809['1e55dc29'] = 1585;
a0_0x959809['10b76b0c'] = 61152;
a0_0x959809['1142a0fb'] = 1366;
a0_0x959809['7aad8a4b'] = 1560;
a0_0x959809['8748e690'] = 1559;
a0_0x959809.a7329d74 = 1558;
a0_0x959809['685cf16c'] = 1563;
a0_0x959809.a20cc642 = 1562;
a0_0x959809['89929ee4'] = 1561;
a0_0x959809['61069986'] = 4870;
a0_0x959809.a574792c = 61326;
a0_0x959809['542e11c4'] = 61328;
a0_0x959809.a076391c = 1127;
a0_0x959809.d030dd56 = 1128;
a0_0x959809['08c77bdf'] = 61153;
a0_0x959809['014e7d5f'] = 61154;
a0_0x959809.f8ac2382 = 1649;
a0_0x959809['95edbcd9'] = 2648;
a0_0x959809.a8621388 = 1653;
a0_0x959809['13a2e83d'] = 4846;
a0_0x959809['2587b3ed'] = 1133;
a0_0x959809.ffb634e8 = 1138;
a0_0x959809['0c9cb33c'] = 1135;
a0_0x959809['2ba487a2'] = 1131;
a0_0x959809['95f1623a'] = 1132;
a0_0x959809.fb5b1bf1 = 1129;
a0_0x959809.e4901008 = 1145;
a0_0x959809.ddd025af = 1144;
a0_0x959809['8a08c040'] = 1143;
a0_0x959809['4d9353f0'] = 1146;
a0_0x959809.c4d3ff7a = 1130;
a0_0x959809['31da4e78'] = 1134;
a0_0x959809['43325537'] = 1136;
a0_0x959809.f87aa46f = 62946;
a0_0x959809['42c62f3e'] = 61214;
a0_0x959809['996e352b'] = 1151;
a0_0x959809['5f6b42cf'] = 1157;
a0_0x959809['030bc844'] = 1163;
a0_0x959809['03f3c0e3'] = 1152;
a0_0x959809['420ac240'] = 1154;
a0_0x959809['59705cfd'] = 41022;
a0_0x959809.ef5c9b8d = 1155;
a0_0x959809['55f5996a'] = 1107;
a0_0x959809['37602e32'] = 1368;
a0_0x959809.a4416f8f = 1153;
a0_0x959809['34450ec1'] = 1158;
a0_0x959809['68aba129'] = 1162;
a0_0x959809['756ad728'] = 2650;
a0_0x959809.f52f6d57 = 1150;
a0_0x959809['2919cdc7'] = 61235;
a0_0x959809['890c8264'] = 62841;
a0_0x959809['50b7f701'] = 62842;
a0_0x959809['2e216599'] = 61242;
a0_0x959809['168f3f81'] = 61237;
a0_0x959809['50f60cf4'] = 61238;
a0_0x959809['7ffaee22'] = 61239;
a0_0x959809['17b64131'] = 61240;
a0_0x959809['30e414c2'] = 61241;
a0_0x959809['782ce850'] = 61244;
a0_0x959809['86f8b35c'] = 4936;
a0_0x959809['1311d46a'] = 61191;
a0_0x959809['43a0a317'] = 61265;
a0_0x959809.bd0a6d8d = 61197;
a0_0x959809.a2cf70fe = 61198;
a0_0x959809['1f913331'] = 61199;
a0_0x959809['1b9057ff'] = 61200;
a0_0x959809['43b28f7a'] = 61266;
a0_0x959809.e2f2b3e0 = 61267;
a0_0x959809['2c4f0d2d'] = 61227;
a0_0x959809.f16a7695 = 61229;
a0_0x959809['824432b0'] = 61269;
a0_0x959809['61ab3a5b'] = 61270;
a0_0x959809.be61b5ef = 61273;
a0_0x959809['08b13643'] = 61274;
a0_0x959809['7ede52c3'] = 61275;
a0_0x959809.a010c50d = 61276;
a0_0x959809.a57f6bf2 = 61277;
a0_0x959809.be0f009b = 61278;
a0_0x959809['6b217908'] = 61279;
a0_0x959809['4b241ae3'] = 61280;
a0_0x959809['59272633'] = 61282;
a0_0x959809.eb0b40ff = 61283;
a0_0x959809.a3644d09 = 61232;
a0_0x959809.eda22c95 = 61226;
a0_0x959809.c4d97de1 = 61225;
a0_0x959809['79f1a4fa'] = 61218;
a0_0x959809.f335db23 = 61219;
a0_0x959809['9c66d05b'] = 61220;
a0_0x959809.bd3402b8 = 61221;
a0_0x959809.cc7c8a6b = 61222;
a0_0x959809['1f46be16'] = 61223;
a0_0x959809.c276f97b = 61224;
a0_0x959809['2518b697'] = 62847;
a0_0x959809['6079098c'] = 61228;
a0_0x959809['3d532180'] = 61264;
a0_0x959809['546d59d4'] = 61185;
a0_0x959809.b295adb1 = 61186;
a0_0x959809['16bd09fb'] = 61187;
a0_0x959809['5479edb7'] = 61325;
a0_0x959809['28cbdea5'] = 61159;
a0_0x959809['419a7889'] = 61160;
a0_0x959809.c2179165 = 61249;
a0_0x959809['52629845'] = 61250;
a0_0x959809.dd2bf72d = 61251;
a0_0x959809['0b960d4f'] = 61246;
a0_0x959809['1e9cf38d'] = 61247;
a0_0x959809.c2db9dd6 = 61248;
a0_0x959809.d967e8be = 61253;
a0_0x959809.c38ec7fd = 61252;
a0_0x959809.d0be7685 = 61254;
a0_0x959809.b8542276 = 61255;
a0_0x959809['88f44245'] = 61256;
a0_0x959809['6f22f770'] = 61161;
a0_0x959809.c3a2966e = 61230;
a0_0x959809['80c71cbe'] = 61182;
a0_0x959809.b1828d77 = 61183;
a0_0x959809['89bae655'] = 62823;
a0_0x959809['92d8cf46'] = 62824;
a0_0x959809['991c009f'] = 62751;
a0_0x959809['64e97b03'] = 62822;
a0_0x959809['790f992b'] = 61207;
a0_0x959809['8f83284e'] = 61208;
a0_0x959809['454c55d9'] = 61209;
a0_0x959809.b69b7944 = 61206;
a0_0x959809['121c9554'] = 61172;
a0_0x959809.ccf70ede = 61210;
a0_0x959809.a148b6a9 = 61204;
a0_0x959809.bfc67e4a = 61151;
a0_0x959809.bb07393f = 62801;
a0_0x959809['7c6e64aa'] = 62802;
a0_0x959809['64f29078'] = 62803;
a0_0x959809['4abeadb1'] = 62769;
a0_0x959809['5a0fa579'] = 62770;
a0_0x959809.a5c4d058 = 62820;
a0_0x959809.f95606d2 = 62821;
a0_0x959809.daa86e1f = 61155;
a0_0x959809.aa35bd4d = 61156;
a0_0x959809.d651aca1 = 61157;
a0_0x959809.b109e303 = 61158;
a0_0x959809['9251fb87'] = 61188;
a0_0x959809.d3467450 = 61190;
a0_0x959809.c78d854d = 61211;
a0_0x959809.aae86836 = 61212;
a0_0x959809['455078c0'] = 61290;
a0_0x959809['3a6d3de6'] = 61291;
a0_0x959809.ecb52280 = 61292;
a0_0x959809['4ab7b3b9'] = 61288;
a0_0x959809['7770f057'] = 61289;
a0_0x959809.f038903c = 61162;
a0_0x959809['2a22ded3'] = 61163;
a0_0x959809.f7974697 = 61233;
a0_0x959809['34254038'] = 61313;
a0_0x959809['4138fb18'] = 62947;
a0_0x959809['997c81f9'] = 62771;
a0_0x959809['489febb5'] = 62772;
a0_0x959809.f12965b3 = 62773;
a0_0x959809.d7c5e551 = 62774;
a0_0x959809['014363a4'] = 62775;
a0_0x959809['42f650d8'] = 62752;
a0_0x959809['0d28d047'] = 62876;
a0_0x959809['6968f28e'] = 62877;
a0_0x959809['4c4e4adf'] = 62878;
a0_0x959809['42a4603c'] = 62879;
a0_0x959809['711c0781'] = 62880;
a0_0x959809.a44f8efd = 62881;
a0_0x959809['8c7d3c7c'] = 41021;
a0_0x959809['67023c3a'] = 61215;
a0_0x959809['1ef6c755'] = 61306;
a0_0x959809['55cf19fb'] = 61294;
a0_0x959809.c26de1e0 = 61308;
a0_0x959809['1800d32c'] = 3803;
a0_0x959809['90a8fc82'] = 61301;
a0_0x959809['5c63ef29'] = 61323;
a0_0x959809['3df68d44'] = 61324;
a0_0x959809.ff753a87 = 51082;
a0_0x959809.bda45820 = 62787;
a0_0x959809.e1ff8f57 = 62848;
a0_0x959809['3a5bf1c2'] = 62846;
a0_0x959809.f15dc119 = 62949;
a0_0x959809['1c404975'] = 62948;
a0_0x959809['5e77224b'] = 62916;
a0_0x959809['6aa7dbfa'] = 62920;
a0_0x959809.a3c6ac85 = 62940;
a0_0x959809.f67634e2 = 62941;
a0_0x959809.e02c781e = 62942;
a0_0x959809['8a89cfc4'] = 62943;
a0_0x959809['7a19e01d'] = 62944;
a0_0x959809['45fe479c'] = 62945;
a0_0x959809['3f0177ee'] = 62811;
a0_0x959809['503e39d6'] = 62813;
a0_0x959809['303c7be9'] = 62778;
a0_0x959809.b0689a6f = 2602;
a0_0x959809['7d581108'] = 4854;
a0_0x959809['5f187c6a'] = 4850;
a0_0x959809.cd26a1d6 = 4852;
a0_0x959809['08168473'] = 62786;
a0_0x959809['7af6e57b'] = 4955;
a0_0x959809['3f407cb4'] = 4957;
a0_0x959809.ec050d06 = 4959;
a0_0x959809['91bc6f05'] = 4961;
a0_0x959809.b70b25e1 = 4963;
a0_0x959809['8e0d3de1'] = 4965;
a0_0x959809['68dfe8e3'] = 4967;
a0_0x959809['94baaf4f'] = 4969;
a0_0x959809['8e588ebe'] = 4971;
a0_0x959809.bba51470 = 4973;
a0_0x959809.c44841cd = 4975;
a0_0x959809['5d89a6f5'] = 4953;
a0_0x959809.ed13143a = 4956;
a0_0x959809['9b39a195'] = 4958;
a0_0x959809.e07a046d = 4960;
a0_0x959809['1707ca6f'] = 4962;
a0_0x959809['8fd281de'] = 4964;
a0_0x959809['1b05bad7'] = 4966;
a0_0x959809['8ecdf3a6'] = 4968;
a0_0x959809.eb33c571 = 4970;
a0_0x959809['2e13f2cb'] = 4972;
a0_0x959809.de945768 = 4974;
a0_0x959809['70c7c502'] = 4976;
a0_0x959809['5d2a1393'] = 4954;
a0_0x959809.da279cc1 = 61213;
a0_0x959809.c33c447d = 4952;
a0_0x959809['9d357500'] = 1156;
a0_0x959809.b9cf46a5 = 1587;
a0_0x959809['24e0b652'] = 1497;
a0_0x959809['4f774167'] = 1496;
a0_0x959809.ac1a17cd = 1495;
a0_0x959809.e31ac900 = 61111;
a0_0x959809['51bf2890'] = 2641;
a0_0x959809['7c9df8c3'] = 2642;
a0_0x959809['91b7748a'] = 51087;
a0_0x959809.f8d4b743 = 1586;
a0_0x959809['713f85ae'] = 61281;
a0_0x959809.cb5d118f = 61261;
a0_0x959809.fe7fbc2b = 61260;
a0_0x959809.b79cc79f = 61262;
a0_0x959809['75edcdbc'] = 61263;
a0_0x959809['83ebed75'] = 1329;
a0_0x959809['7b47f74e'] = 1348;
a0_0x959809['78538960'] = 1331;
a0_0x959809['7eb23a1d'] = 1148;
a0_0x959809['43c3c6d9'] = 61192;
a0_0x959809['4576d340'] = 61193;
a0_0x959809.ba143292 = 61195;
a0_0x959809.cf81ac95 = 61196;
a0_0x959809['3a70de77'] = 51104;
a0_0x959809.ecdb0739 = 61268;
a0_0x959809['310e542c'] = 61285;
a0_0x959809.b8a2a740 = 61286;
a0_0x959809['58daad61'] = 61287;
a0_0x959809['20c5c700'] = 61271;
a0_0x959809['1271ef70'] = 61272;
a0_0x959809['19814eab'] = 61310;
a0_0x959809['695e315b'] = 61293;
a0_0x959809['6ca65cd6'] = 61231;
a0_0x959809.c9d4192e = 61299;
a0_0x959809['506da065'] = 1683;
a0_0x959809['04bbbf06'] = 1160;
a0_0x959809['8af4f406'] = 1161;
a0_0x959809['004453b9'] = 61257;
a0_0x959809['21106afd'] = 4810;
a0_0x959809['3edc43bf'] = 4816;
a0_0x959809.b6f9e284 = 4847;
a0_0x959809['6f37ff03'] = 4848;
a0_0x959809.b7c57537 = 4811;
a0_0x959809['715665d3'] = 61362;
a0_0x959809['4f93f468'] = 11;
a0_0x959809['269a99af'] = 14;
a0_0x959809['353fad22'] = 18;
a0_0x959809['47db7107'] = 12;
a0_0x959809['70768455'] = 13;
a0_0x959809['0c5b68fb'] = 16;
a0_0x959809['67e2f292'] = 15;
a0_0x959809['16341138'] = 114;
a0_0x959809['85955c63'] = 1103;
a0_0x959809.d0d99220 = 112;
a0_0x959809['15494676'] = 113;
a0_0x959809.c9987a5e = 124;
a0_0x959809['6f67ce4c'] = 150;
a0_0x959809['710e4938'] = 116;
a0_0x959809['159d0751'] = 170;
a0_0x959809.e89db596 = 144;
a0_0x959809['47471faa'] = 139;
a0_0x959809['19c7cf45'] = 140;
a0_0x959809['942c0a62'] = 145;
a0_0x959809['43eba24e'] = 195;
a0_0x959809.b14e89e9 = 151;
a0_0x959809.da0d41d7 = 173;
a0_0x959809['82938242'] = 192;
a0_0x959809['8863ec9e'] = 119;
a0_0x959809['22e3a498'] = 118;
a0_0x959809.d45d9ea1 = 122;
a0_0x959809.a2282b9a = 121;
a0_0x959809['06cd5917'] = 125;
a0_0x959809['2027850d'] = 126;
a0_0x959809['6f54f2b5'] = 128;
a0_0x959809.ba7f110c = 194;
a0_0x959809.b6f982b4 = 175;
a0_0x959809['47cf718f'] = 1101;
a0_0x959809['06f446e7'] = 1100;
a0_0x959809.ff9449f5 = 189;
a0_0x959809['2186bc97'] = 193;
a0_0x959809['4db289b1'] = 199;
a0_0x959809['1b1b8567'] = 188;
a0_0x959809['5678240c'] = 184;
a0_0x959809.c0fac5e7 = 185;
a0_0x959809['74ce1b34'] = 186;
a0_0x959809['57588ea0'] = 196;
a0_0x959809.ab89a4e2 = 152;
a0_0x959809['4b2c6109'] = 197;
a0_0x959809.b3853ba3 = 147;
a0_0x959809.d536937f = 190;
a0_0x959809['92c030c4'] = 148;
a0_0x959809.b56cd1b4 = 178;
a0_0x959809['1ccbf57d'] = 179;
a0_0x959809['3283ff58'] = 187;
a0_0x959809['2a05403c'] = 191;
a0_0x959809.c5a59959 = 180;
a0_0x959809['753f9d1d'] = 181;
a0_0x959809.aff89cac = 154;
a0_0x959809['20cf0577'] = 165;
a0_0x959809['2a8278b6'] = 164;
a0_0x959809['5b0292bd'] = 143;
a0_0x959809.f9198f3c = 141;
a0_0x959809['347fcfdc'] = 155;
a0_0x959809['4acbae9c'] = 1116;
a0_0x959809['3ca7478c'] = 1117;
a0_0x959809.f1d65fe8 = 1115;
a0_0x959809['596a0c3b'] = 1118;
a0_0x959809['30bbad4f'] = 1119;
a0_0x959809.e5378f97 = 1120;
a0_0x959809.cf80e191 = 1123;
a0_0x959809['8cbeedbe'] = 1122;
a0_0x959809.f43afd69 = 1121;
a0_0x959809['1dd1ba5f'] = 176;
a0_0x959809.e4241966 = 19;
a0_0x959809['8c96e750'] = 110;
a0_0x959809['6db74560'] = 146;
a0_0x959809['2445cdaa'] = 1422;
a0_0x959809.a2f3d352 = 1421;
a0_0x959809.a3d4e8da = 1420;
a0_0x959809['7a0c0d64'] = 1425;
a0_0x959809['37223a06'] = 1424;
a0_0x959809['86257b51'] = 1423;
a0_0x959809['6665a2ec'] = 1437;
a0_0x959809['0ef41d8b'] = 1436;
a0_0x959809['0cc1444b'] = 1435;
a0_0x959809['99fbe789'] = 1124;
a0_0x959809.a65b9ee9 = 1125;
a0_0x959809['7ae54014'] = 1126;
a0_0x959809['6676ea9c'] = 1431;
a0_0x959809['87651d11'] = 1430;
a0_0x959809['43b230cd'] = 1429;
a0_0x959809.fe91a219 = 1359;
a0_0x959809.dbee1f71 = 1416;
a0_0x959809['352b9572'] = 1415;
a0_0x959809.adfa191d = 1414;
a0_0x959809['861b6247'] = 1419;
a0_0x959809['4360672a'] = 1418;
a0_0x959809['78b2d99e'] = 1417;
a0_0x959809.fa467447 = 1364;
a0_0x959809['3d6dc60a'] = 4942;
a0_0x959809['297fbec7'] = 4937;
a0_0x959809['937b04e7'] = 4872;
a0_0x959809.d3847da1 = 4873;
a0_0x959809.bc968a5e = 4874;
a0_0x959809['5d4449a0'] = 4875;
a0_0x959809['1e46a1fa'] = 4876;
a0_0x959809['129d52a4'] = 4877;
a0_0x959809['8ca6dba6'] = 4878;
a0_0x959809['7a2cff81'] = 4879;
a0_0x959809.e3fc09d1 = 4880;
a0_0x959809.d7ec3201 = 4883;
a0_0x959809['3afb9600'] = 4884;
a0_0x959809['960e8a61'] = 4885;
a0_0x959809['9b455199'] = 4886;
a0_0x959809['445e163b'] = 4911;
a0_0x959809['4cfffc3f'] = 4887;
a0_0x959809.ef3e8a4e = 4888;
a0_0x959809.a5ef257c = 4889;
a0_0x959809['6ad3fcee'] = 4890;
a0_0x959809.f8ab6fd9 = 4891;
a0_0x959809['5528238f'] = 4892;
a0_0x959809['0ca62228'] = 4893;
a0_0x959809.f2eb853b = 4894;
a0_0x959809['096a1993'] = 4895;
a0_0x959809.d843f6dd = 4896;
a0_0x959809.b24bb3a6 = 4898;
a0_0x959809['41790a5a'] = 4899;
a0_0x959809['11f22c87'] = 4900;
a0_0x959809['52815b32'] = 4881;
a0_0x959809['1577717a'] = 4882;
a0_0x959809['8c8a51d7'] = 4938;
a0_0x959809.a45cebe8 = 4939;
a0_0x959809['2bcfff7d'] = 4940;
a0_0x959809.d076be64 = 4930;
a0_0x959809['4a368625'] = 1609;
a0_0x959809['05b1bea7'] = 1608;
a0_0x959809['0d2ec040'] = 1607;
a0_0x959809['859ba20d'] = 4926;
a0_0x959809.a46beccd = 4918;
a0_0x959809['19f9f7bd'] = 4919;
a0_0x959809['9c554ce9'] = 4921;
a0_0x959809['3d7cfe3f'] = 4917;
a0_0x959809.baf0163f = 71587;
a0_0x959809['479d45d0'] = 61333;
a0_0x959809['867e768e'] = 62745;
a0_0x959809['9248513e'] = 61358;
a0_0x959809['8292a960'] = 62747;
a0_0x959809.c255f1db = 62730;
a0_0x959809['99c6914b'] = 62748;
a0_0x959809['7769d092'] = 62731;
a0_0x959809['05b92c0e'] = 62749;
a0_0x959809['9d5af134'] = 4907;
a0_0x959809['5aa88032'] = 62746;
a0_0x959809.ff639eab = 1621;
a0_0x959809.b3c562c7 = 1620;
a0_0x959809.cc524e2d = 1619;
a0_0x959809.b0c6807a = 1624;
a0_0x959809.f61748c7 = 1623;
a0_0x959809['597b4f8f'] = 1622;
a0_0x959809.cb07fb76 = 1566;
a0_0x959809['881a907a'] = 1565;
a0_0x959809['5576778f'] = 1564;
a0_0x959809['3b661514'] = 62750;
a0_0x959809['64cffe27'] = 62743;
a0_0x959809['410d23db'] = 62733;
a0_0x959809['369b6859'] = 62734;
a0_0x959809.cc35ad5f = 62735;
a0_0x959809['27b46688'] = 62736;
a0_0x959809.a5262d8b = 61340;
a0_0x959809['843e8cf3'] = 62737;
a0_0x959809['9192a018'] = 61342;
a0_0x959809['5607ea04'] = 1643;
a0_0x959809['74b3b468'] = 61343;
a0_0x959809['2346dc5f'] = 62738;
a0_0x959809.d05d1a31 = 62739;
a0_0x959809.f57727ff = 62740;
a0_0x959809['6ec18432'] = 62741;
a0_0x959809.d75085da = 61338;
a0_0x959809.e5513586 = 1644;
a0_0x959809['21736dab'] = 61133;
a0_0x959809['8724a6ac'] = 4944;
a0_0x959809['00e37720'] = 61337;
a0_0x959809.a257ebb3 = 62776;
a0_0x959809.c66ef095 = 4920;
a0_0x959809.b1cf2296 = 61357;
a0_0x959809['6b0af73f'] = 4851;
a0_0x959809['4171067e'] = 4828;
a0_0x959809.fb9a5866 = 61334;
a0_0x959809['5272e23c'] = 61298;
a0_0x959809['1402b822'] = 61304;
a0_0x959809['58b59fae'] = 4914;
a0_0x959809['2e7afc7c'] = 4912;
a0_0x959809.b132c41f = 4913;
a0_0x959809['86e0bc6c'] = 4929;
a0_0x959809.a2f574c3 = 4932;
a0_0x959809.c1474a45 = 4933;
a0_0x959809.fe3d864b = 4934;
a0_0x959809['3ff9f624'] = 4941;
a0_0x959809['42a8e0e0'] = 4927;
a0_0x959809.d9308ce1 = 4908;
a0_0x959809.f05046ba = 4903;
a0_0x959809['054238bd'] = 4925;
a0_0x959809.a0de16ba = 51076;
a0_0x959809.d510f352 = 4943;
a0_0x959809['71a241ff'] = 4909;
a0_0x959809['60350147'] = 4906;
a0_0x959809['917c2a58'] = 4897;
a0_0x959809['20913737'] = 4910;
a0_0x959809.a03592c4 = 62917;
a0_0x959809['41dcc6c7'] = 62918;
a0_0x959809.e0ac6f5b = 62919;
a0_0x959809['68c4914e'] = 62921;
a0_0x959809.c1a6f709 = 62922;
a0_0x959809['8a7adae8'] = 62925;
a0_0x959809['9f8eab39'] = 62929;
a0_0x959809['26960fdf'] = 62926;
a0_0x959809['82248b35'] = 62927;
a0_0x959809.e96367c5 = 62928;
a0_0x959809['0ff4778d'] = 62930;
a0_0x959809['6acec87a'] = 62931;
a0_0x959809['2b714d84'] = 1337;
a0_0x959809['4c895efe'] = 1149;
a0_0x959809.b3930080 = 1147;
a0_0x959809['06475fef'] = 1338;
a0_0x959809['36b8bbe5'] = 137;
a0_0x959809.ccbe2a6d = 129;
a0_0x959809['8287959d'] = 156;
a0_0x959809['59d53f04'] = 171;
a0_0x959809.dbb60ebb = 135;
a0_0x959809.bb62f367 = 157;
a0_0x959809['9270407f'] = 1114;
a0_0x959809['5beb2bbe'] = 130;
a0_0x959809.a2a22528 = 1343;
a0_0x959809['770a8b82'] = 1344;
a0_0x959809['540468af'] = 1328;
a0_0x959809.b2d62adc = 1356;
a0_0x959809['48860112'] = 1357;
a0_0x959809.a9636e0b = 1363;
a0_0x959809['633d0686'] = 1340;
a0_0x959809['195e6f8d'] = 1342;
a0_0x959809['1f3faf94'] = 167;
a0_0x959809.ad0a03e4 = 1108;
a0_0x959809.b0da9044 = 158;
a0_0x959809['6314d9be'] = 17;
a0_0x959809.e356a211 = 153;
a0_0x959809.eaa2eb04 = 149;
a0_0x959809['804a2512'] = 1440;
a0_0x959809['1e774474'] = 1439;
a0_0x959809['00b0484c'] = 1438;
a0_0x959809['2f1c5853'] = 160;
a0_0x959809['96359e4a'] = 138;
a0_0x959809['5ac1f62a'] = 117;
a0_0x959809['32312a03'] = 127;
a0_0x959809['965793ce'] = 134;
a0_0x959809['9b6d8b29'] = 1102;
a0_0x959809['82e95889'] = 131;
a0_0x959809['0628913b'] = 159;
a0_0x959809['6c4b53b5'] = 166;
a0_0x959809.fe7163dd = 1519;
a0_0x959809['3358c776'] = 1522;
a0_0x959809['19786714'] = 1362;
a0_0x959809['4ced694a'] = 1367;
a0_0x959809['486fc91f'] = 1506;
a0_0x959809['1ee96789'] = 1515;
a0_0x959809['0ff69cdf'] = 1514;
a0_0x959809.ca3a41a9 = 1513;
a0_0x959809.d2e0a5d4 = 1528;
a0_0x959809['82a84270'] = 1443;
a0_0x959809.f8711eda = 1442;
a0_0x959809['16369bd9'] = 1441;
a0_0x959809['53f156e4'] = 1627;
a0_0x959809.ac7d22d6 = 1626;
a0_0x959809['68770898'] = 1625;
a0_0x959809['9b017468'] = 1639;
a0_0x959809['123c721c'] = 1638;
a0_0x959809['7fdfba24'] = 1637;
a0_0x959809.c83835eb = 1597;
a0_0x959809.fc016538 = 1630;
a0_0x959809['84c7b731'] = 1629;
a0_0x959809['4ede6f47'] = 1628;
a0_0x959809.a1715284 = 1633;
a0_0x959809['9a401ec8'] = 1632;
a0_0x959809.fbe3a20b = 1631;
a0_0x959809.b902f28e = 1636;
a0_0x959809['27ebd632'] = 1635;
a0_0x959809['65954685'] = 1634;
a0_0x959809.bfb9bb53 = 51073;
a0_0x959809.bf7f3269 = 2654;
a0_0x959809['3bcf0a4b'] = 61180;
a0_0x959809.ae362d5c = 3791;
a0_0x959809['6e220a93'] = 3792;
a0_0x959809.bcf01be1 = 3802;
a0_0x959809.c2a4ade3 = 51069;
a0_0x959809.dadff865 = 51048;
a0_0x959809['59d3d7a8'] = 51049;
a0_0x959809['27270f33'] = 51050;
a0_0x959809['5c3cb53e'] = 51067;
a0_0x959809['7327026e'] = 51068;
a0_0x959809.f73fad83 = 51077;
a0_0x959809.fe3f5e23 = 51064;
a0_0x959809['99703263'] = 51053;
a0_0x959809.cc9a76a7 = 51059;
a0_0x959809.fce155d7 = 3710;
a0_0x959809.ee6e663a = 3693;
a0_0x959809.f3e800af = 3700;
a0_0x959809.e7235864 = 3721;
a0_0x959809['8a9c32ca'] = 3695;
a0_0x959809.efb65116 = 3696;
a0_0x959809.fe910136 = 3711;
a0_0x959809.e8aa6980 = 3738;
a0_0x959809['955beeb7'] = 3734;
a0_0x959809.d434c183 = 3730;
a0_0x959809['86cec35a'] = 3732;
a0_0x959809.a25387f5 = 3780;
a0_0x959809['89c16c4f'] = 3706;
a0_0x959809.a14be45e = 3689;
a0_0x959809['8136bf17'] = 3715;
a0_0x959809.f31a747c = 3757;
a0_0x959809.df0058f3 = 3758;
a0_0x959809.c9ec7ad4 = 3759;
a0_0x959809['68d08001'] = 3799;
a0_0x959809.dca14909 = 3737;
a0_0x959809['4d12c7f1'] = 3794;
a0_0x959809.c87778f8 = 3692;
a0_0x959809.b4f518b8 = 3702;
a0_0x959809['67045b2d'] = 3773;
a0_0x959809['8eaa567d'] = 3713;
a0_0x959809['7fa87f9b'] = 3720;
a0_0x959809['495b5b87'] = 3726;
a0_0x959809['6b3d56f8'] = 3742;
a0_0x959809.f8877d70 = 3701;
a0_0x959809.c4e920e7 = 3681;
a0_0x959809['1fa01a04'] = 3755;
a0_0x959809.ff99c0f9 = 3714;
a0_0x959809['5841f318'] = 115;
a0_0x959809['5adc25c1'] = 198;
a0_0x959809['5eba6189'] = 123;
a0_0x959809['29f6808c'] = 168;
a0_0x959809['2bee55a2'] = 163;
a0_0x959809['6b28bc01'] = 161;
a0_0x959809.df20e8a1 = 162;
a0_0x959809['587c5b51'] = 1501;
a0_0x959809['61f5531e'] = 169;
a0_0x959809.d405c116 = 182;
a0_0x959809.bb14c876 = 61124;
a0_0x959809['0fa585f8'] = 61113;
a0_0x959809['373496e1'] = 61112;
a0_0x959809.bea79161 = 61138;
a0_0x959809.ea8c0bb7 = 61139;
a0_0x959809.cbad0ac9 = 3760;
a0_0x959809['0b767f4c'] = 2545;
a0_0x959809.c0ec6474 = 2643;
a0_0x959809['5415d3b7'] = 2594;
a0_0x959809.fb343cdf = 2551;
a0_0x959809['53d2959d'] = 2603;
a0_0x959809['03f6ff3f'] = 2604;
a0_0x959809['8600a380'] = 2583;
a0_0x959809['35e4c21a'] = 2628;
a0_0x959809['453f6d07'] = 2606;
a0_0x959809.ceb81c0d = 2540;
a0_0x959809['519c8ed0'] = 2633;
a0_0x959809.ac7d2963 = 2553;
a0_0x959809['1005414f'] = 2532;
a0_0x959809['535a65e0'] = 2615;
a0_0x959809['7ecd9080'] = 2572;
a0_0x959809['5927a161'] = 3762;
a0_0x959809['0aa63f2b'] = 3763;
a0_0x959809['1973e9e1'] = 2569;
a0_0x959809['4051eb8e'] = 2552;
a0_0x959809.e14c5d67 = 2582;
a0_0x959809['35966742'] = 2619;
a0_0x959809['1153f8cc'] = 2620;
a0_0x959809.c32fdf84 = 2639;
a0_0x959809['9cdf0e18'] = 2591;
a0_0x959809['9767971b'] = 2568;
a0_0x959809['6fb3c7ca'] = 2610;
a0_0x959809.d415c659 = 2573;
a0_0x959809['45ba8761'] = 2611;
a0_0x959809['9b29b600'] = 2541;
a0_0x959809['17a4eb7e'] = 3761;
a0_0x959809.ae99085d = 2644;
a0_0x959809['36b63931'] = 2647;
a0_0x959809.e53b6f0e = 2592;
a0_0x959809['87f31a48'] = 2605;
a0_0x959809['33873951'] = 2571;
a0_0x959809.c5618ac2 = 2607;
a0_0x959809.d859bcfd = 2588;
a0_0x959809.c16dc5df = 2589;
a0_0x959809['50296add'] = 2533;
a0_0x959809.af399f52 = 2590;
a0_0x959809.cb4d0e9c = 2609;
a0_0x959809.efba56dc = 3764;
a0_0x959809.dca93d5d = 2581;
a0_0x959809['6b96b923'] = 2554;
a0_0x959809['32f1302d'] = 2624;
a0_0x959809['81a99bd8'] = 2536;
a0_0x959809.daebe90a = 61312;
a0_0x959809['39c51bd0'] = 1380;
a0_0x959809['26cd44e7'] = 1371;
a0_0x959809['263bb9bd'] = 1372;
a0_0x959809.ffd49482 = 1379;
a0_0x959809.bc0ced62 = 1532;
a0_0x959809['29304f46'] = 1531;
a0_0x959809['79ec0c49'] = 1530;
a0_0x959809.f0c0b15b = 1535;
a0_0x959809['9d45e624'] = 1534;
a0_0x959809['021e0f45'] = 1533;
a0_0x959809['6c9c6c63'] = 61114;
a0_0x959809['77430a57'] = 1374;
a0_0x959809['07487da2'] = 4905;
a0_0x959809.e487ad50 = 4904;
a0_0x959809['95d880c8'] = 1369;
a0_0x959809['1415a864'] = 1370;
a0_0x959809.c108e7ab = 3717;
a0_0x959809['8b5a6636'] = 3772;
a0_0x959809['97a5eec6'] = 3741;
a0_0x959809.eae83462 = 3796;
a0_0x959809['6e446c0a'] = 3703;
a0_0x959809['8973a15a'] = 3704;
a0_0x959809.b0bc7f4a = 3731;
a0_0x959809['8f23c263'] = 3716;
a0_0x959809['7de76b82'] = 3740;
a0_0x959809['7945525f'] = 3797;
a0_0x959809['697726b8'] = 3798;
a0_0x959809.fcca5e36 = 3795;
a0_0x959809['9721d421'] = 1569;
a0_0x959809['9fafa162'] = 1568;
a0_0x959809.ffaa5be9 = 1567;
a0_0x959809['9428f237'] = 1572;
a0_0x959809['357bed07'] = 1571;
a0_0x959809['76bd943c'] = 1570;
a0_0x959809['2c3929c3'] = 1434;
a0_0x959809.d21d0e66 = 1433;
a0_0x959809.d2ca514d = 1432;
a0_0x959809.e39a5421 = 172;
a0_0x959809.ad208515 = 1456;
a0_0x959809['196d995e'] = 1459;
a0_0x959809.bc17b2c6 = 1525;
a0_0x959809['2e1d696c'] = 1529;
a0_0x959809.c432e2af = 1447;
a0_0x959809.ad6ac82a = 1477;
a0_0x959809.b3410119 = 1480;
a0_0x959809['184ca83d'] = 1450;
a0_0x959809['27f59fe5'] = 1465;
a0_0x959809['927d975a'] = 1474;
a0_0x959809['2ac7b89f'] = 1468;
a0_0x959809.ecb8af3c = 1462;
a0_0x959809.b4cfdb89 = 1471;
a0_0x959809['4193d58c'] = 1486;
a0_0x959809.ae71353f = 1489;
a0_0x959809.a7713d51 = 1645;
a0_0x959809.fef11655 = 1573;
a0_0x959809['5282dca4'] = 1402;
a0_0x959809['95810ad3'] = 1404;
a0_0x959809.f444b036 = 1408;
a0_0x959809['047bbf11'] = 1406;
a0_0x959809['9802861e'] = 1576;
a0_0x959809['2505ee46'] = 1579;
a0_0x959809.a10859fe = 1444;
a0_0x959809['2c795f16'] = 1453;
a0_0x959809['037f784d'] = 1483;
a0_0x959809.a5da0dac = 1390;
a0_0x959809['37f9136f'] = 1387;
a0_0x959809['76ca40ae'] = 1411;
a0_0x959809['69453e43'] = 1395;
a0_0x959809['4a625ceb'] = 1394;
a0_0x959809['0d739a40'] = 1393;
a0_0x959809['852a5619'] = 1512;
a0_0x959809['7d6198ac'] = 1593;
a0_0x959809['92bcd262'] = 1592;
a0_0x959809['2ce26a58'] = 1591;
a0_0x959809.c5dcac14 = 1596;
a0_0x959809['075852d7'] = 1595;
a0_0x959809['346dd123'] = 1594;
a0_0x959809['223dc9b3'] = 1642;
a0_0x959809['6816fb79'] = 1641;
a0_0x959809['93cc9dae'] = 1640;
a0_0x959809['3903b7df'] = 1538;
a0_0x959809['2efd878e'] = 1537;
a0_0x959809['2a69bcd9'] = 1536;
a0_0x959809.c6869de7 = 1541;
a0_0x959809['0b69b74a'] = 1540;
a0_0x959809['0016e670'] = 1539;
a0_0x959809['7b974257'] = 1544;
a0_0x959809['5077f1a6'] = 1543;
a0_0x959809['45a9f062'] = 1542;
a0_0x959809['84563249'] = 1547;
a0_0x959809['622c6449'] = 1546;
a0_0x959809.c055bf49 = 1545;
a0_0x959809['35f1d18c'] = 1550;
a0_0x959809.e9727118 = 1549;
a0_0x959809['257f6ea9'] = 1548;
a0_0x959809['3420d3c6'] = 1553;
a0_0x959809['6415259e'] = 1552;
a0_0x959809['929d867e'] = 1551;
a0_0x959809['14668c6e'] = 1556;
a0_0x959809['8c3018f4'] = 1555;
a0_0x959809.b4a679d5 = 1554;
a0_0x959809.fed267e1 = 1376;
a0_0x959809['1961066d'] = 1142;
a0_0x959809.bb032ff2 = 61148;
a0_0x959809['8502853b'] = 61118;
a0_0x959809['61a01ec6'] = 61119;
a0_0x959809.fbcbd977 = 61120;
a0_0x959809.a3f3c1ef = 61121;
a0_0x959809['2d0273f8'] = 51039;
a0_0x959809['8d814a5d'] = 51028;
a0_0x959809['49f503cb'] = 51090;
a0_0x959809.ad88e906 = 61320;
a0_0x959809.ed6c25f2 = 61321;
a0_0x959809['396120db'] = 61322;
a0_0x959809['6e0f3518'] = 4812;
a0_0x959809['948aefb3'] = 61201;
a0_0x959809['6e0afdb5'] = 61356;
a0_0x959809['39fcdba1'] = 61316;
a0_0x959809['8c080d86'] = 4825;
a0_0x959809.e504198e = 61317;
a0_0x959809['5b5bf862'] = 4945;
a0_0x959809.a6ae7170 = 61346;
a0_0x959809['8b7c3e8d'] = 51106;
a0_0x959809.a6e1f6ec = 51108;
a0_0x959809['175d40ec'] = 61347;
a0_0x959809['0345085e'] = 51091;
a0_0x959809['3e691ad7'] = 61348;
a0_0x959809.ddcc5e0d = 61349;
a0_0x959809.b55c6718 = 61350;
a0_0x959809['324a98f3'] = 61352;
a0_0x959809.adaaa3a7 = 61355;
a0_0x959809['56527ab2'] = 61243;
a0_0x959809['7053a019'] = 51084;
a0_0x959809.ceaeb7d1 = 61142;
a0_0x959809['3a89dab2'] = 61125;
a0_0x959809['13e4cf88'] = 61126;
a0_0x959809.d240f856 = 61127;
a0_0x959809.bbe07dba = 61135;
a0_0x959809['3890fd5d'] = 61327;
a0_0x959809['6fe87a33'] = 61329;
a0_0x959809.a2ad8bb9 = 61331;
a0_0x959809['888f4598'] = 51079;
a0_0x959809.e1fe2408 = 51080;
a0_0x959809['8761eb7e'] = 4935;
a0_0x959809.ec794d5c = 61302;
a0_0x959809['30c2dfa1'] = 51083;
a0_0x959809['24d11aab'] = 51092;
a0_0x959809['96b158f8'] = 51094;
a0_0x959809.acf062ba = 4993;
a0_0x959809['586104bf'] = 61339;
a0_0x959809.f79accbd = 61345;
a0_0x959809.ce0d0be8 = 61295;
a0_0x959809['6e9233a1'] = 61217;
a0_0x959809['2d9f03fb'] = 61179;
a0_0x959809.b0f6c81e = 61149;
a0_0x959809.d1c1ce7f = 61174;
a0_0x959809['9aafe9b6'] = 61181;
a0_0x959809['7f66095a'] = 61236;
a0_0x959809['35cdc035'] = 61305;
a0_0x959809['8e29821b'] = 61307;
a0_0x959809['17df10c3'] = 61318;
a0_0x959809.bd63b772 = 61315;
a0_0x959809['7da47806'] = 61335;
a0_0x959809['74cb72c8'] = 61336;
a0_0x959809['8c507c67'] = 61341;
a0_0x959809.a7fdb4fc = 51107;
a0_0x959809.d4d9fdeb = 51109;
a0_0x959809['0b063e19'] = 61351;
a0_0x959809.e368b9bd = 61344;
a0_0x959809['8728d7d4'] = 61354;
a0_0x959809.b62be709 = 61360;
a0_0x959809.e339e442 = 61363;
a0_0x959809['4b05df46'] = 4826;
a0_0x959809['4ae2404b'] = 2645;
a0_0x959809['3dc2a2f6'] = 2646;
a0_0x959809['476cec50'] = 2637;
a0_0x959809.f3bcdb39 = 2640;
a0_0x959809.e2f03c72 = 2660;
a0_0x959809['6884ac9d'] = 4827;
a0_0x959809['01269a7b'] = 2608;
a0_0x959809.ea52eb1c = 1377;
a0_0x959809.a1303d19 = 1378;
a0_0x959809.ccb96fb0 = 1686;
a0_0x959809['756b806b'] = 3688;
a0_0x959809['8bb4da9b'] = 3699;
a0_0x959809.ddf00d74 = 3691;
a0_0x959809['87dd8e40'] = 3712;
a0_0x959809['8f29f0b5'] = 3729;
a0_0x959809['73693ed1'] = 3736;
a0_0x959809.d40bace2 = 3782;
a0_0x959809.d121eb09 = 62834;
a0_0x959809['26cd6e9e'] = 62765;
a0_0x959809['52488876'] = 62766;
a0_0x959809['329d0077'] = 4948;
a0_0x959809.f7d9b6f1 = 4946;
a0_0x959809.f740c0e0 = 62818;
a0_0x959809.dc271d0c = 62805;
a0_0x959809.cfc308b9 = 62809;
a0_0x959809['7cbb7aba'] = 62812;
a0_0x959809['4b9eff45'] = 62814;
a0_0x959809['01287041'] = 62806;
a0_0x959809['5bc0acaa'] = 62810;
a0_0x959809['5fd00650'] = 62807;
a0_0x959809['8d6c472b'] = 4949;
a0_0x959809['4ca0e7bc'] = 4950;
a0_0x959809['5f981baf'] = 4951;
a0_0x959809['5197b0df'] = 4947;
a0_0x959809['0dfce3ef'] = 62815;
a0_0x959809['9081800a'] = 62816;
a0_0x959809['3bfcbebb'] = 62817;
a0_0x959809['1a85fce7'] = 62890;
a0_0x959809['58f5e706'] = 62938;
a0_0x959809['9f6551aa'] = 62939;
a0_0x959809.c577d410 = 62804;
a0_0x959809['0307d6ac'] = 62808;
a0_0x959809['6e6314c1'] = 62935;
a0_0x959809.f63639c3 = 62934;
a0_0x959809.c25197fa = 62937;
a0_0x959809['4454368e'] = 62936;
a0_0x959809['28288214'] = 61184;
a0_0x959809['2508f728'] = 1350;
a0_0x959809['718829fa'] = 62784;
a0_0x959809.d3f1e613 = 62785;
a0_0x959809['93f48539'] = 62781;
a0_0x959809['758b40a5'] = 120;
a0_0x959809['53d4deb5'] = 62790;
a0_0x959809['4a28e4d9'] = 62791;
a0_0x959809.e3193bcb = 62792;
a0_0x959809.c90b729c = 62793;
a0_0x959809['2742ef2f'] = 62794;
a0_0x959809.c4dee9b6 = 62795;
a0_0x959809.dbb83463 = 51099;
a0_0x959809['5003aa3c'] = 62844;
a0_0x959809.e6bc9357 = 62833;
a0_0x959809['44f13a71'] = 62732;
a0_0x959809.f2895efd = 62777;
a0_0x959809['23594dc5'] = 62845;
a0_0x959809.af14b7f3 = 62742;
a0_0x959809['7563f39b'] = 41016;
a0_0x959809.c17e7019 = 62827;
a0_0x959809['2387b1a6'] = 62924;
a0_0x959809['7248ffa7'] = 62923;
a0_0x959809.f7e46c2c = 61359;
a0_0x959809['50c2a7ed'] = 61361;
a0_0x959809['8f4a3fbd'] = 51051;
a0_0x959809.f86b1878 = 51052;
a0_0x959809.acda2336 = 41019;
a0_0x959809['2d5d8a04'] = 4999;
a0_0x959809.fa6a1f8b = 41000;
a0_0x959809['2863d4c8'] = 62800;
a0_0x959809.a0ed7b40 = 61296;
a0_0x959809['95dff3de'] = 61150;
a0_0x959809['72711aef'] = 61314;
a0_0x959809['6d5c43a2'] = 62744;
a0_0x959809['7a771700'] = 4853;
a0_0x959809['42398772'] = 4849;
a0_0x959809['709b293f'] = 4814;
a0_0x959809['9aca87ec'] = 41015;
a0_0x959809['6c717164'] = 4855;
a0_0x959809['81ed8cd6'] = 51070;
a0_0x959809.b77d9ff3 = 4928;
a0_0x959809.c20c6451 = 4924;
a0_0x959809.e1260379 = 1599;
a0_0x959809['4e5f9ead'] = 51071;
a0_0x959809.d469947f = 1615;
a0_0x959809.ceed9410 = 1614;
a0_0x959809.f4023ba0 = 1613;
a0_0x959809.d07450e5 = 4856;
a0_0x959809.fc8b08c9 = 4915;
a0_0x959809['0f5345a3'] = 1354;
a0_0x959809['2fb45822'] = 1330;
a0_0x959809['5c8d4eaa'] = 1339;
a0_0x959809.fc7ccc3f = 1365;
a0_0x959809.f6814a5d = 61258;
a0_0x959809.ed32d169 = 62782;
a0_0x959809['8191be75'] = 62853;
a0_0x959809.c45cb7ee = 62854;
a0_0x959809['93cfa426'] = 1139;
a0_0x959809.ccb79954 = 1140;
a0_0x959809['274ce980'] = 62757;
a0_0x959809['78adafc4'] = 62855;
a0_0x959809['08de4ac7'] = 62856;
a0_0x959809['23ec6d79'] = 62761;
a0_0x959809['0275bd20'] = 62755;
a0_0x959809.c57f01c4 = 62759;
a0_0x959809['764584a4'] = 62932;
a0_0x959809['75439a1c'] = 62933;
a0_0x959809['55f2e09e'] = 4994;
a0_0x959809.a7a85407 = 62849;
a0_0x959809.a80a0e56 = 62857;
a0_0x959809.db52121a = 0;
a0_0x959809['8e7aed5b'] = 0;
a0_0x959809['642a8b23'] = 0;
a0_0x959809['937c5fbb'] = 0;
a0_0x959809.f5bb7d8c = 0;
a0_0x959809['9daf5819'] = 0;
a0_0x959809.eb6e6dd4 = 0;
a0_0x959809.d355f1b4 = 0;
a0_0x959809['80b1df5e'] = 0;
a0_0x959809['2bdc15b5'] = 0;
a0_0x959809.a22a6470 = 0;
a0_0x959809.a53b3fe4 = 0;
a0_0x959809['0dc3b9d8'] = 0;
a0_0x959809.f373a263 = 0;
a0_0x959809.cdb92da9 = 0;
a0_0x959809['4f2ec550'] = 0;
a0_0x959809['5e79bcba'] = 0;
a0_0x959809.c73ebcf3 = 0;
a0_0x959809['6301f7e5'] = 0;
a0_0x959809['0c370f3e'] = 0;
a0_0x959809['9a072b1d'] = 0;
a0_0x959809['51659ef0'] = 0;
a0_0x959809['52ba3e20'] = 0;
a0_0x959809['640b0246'] = 0;
a0_0x959809['803c3163'] = 0;
a0_0x959809['7b9d5064'] = 0;
a0_0x959809['6eb6e751'] = 0;
a0_0x959809['2bdf86b5'] = 0;
a0_0x959809['426acb0b'] = 0;
a0_0x959809.be5a5117 = 0;
a0_0x959809['3f541758'] = 0;
a0_0x959809['7e1dc741'] = 0;
a0_0x959809['8b714c3b'] = 0;
a0_0x959809.b785f58a = 0;
a0_0x959809.bbee8491 = 0;
a0_0x959809['6eafe311'] = 0;
a0_0x959809['4c9adae0'] = 0;
a0_0x959809.a9afc9c6 = 0;
a0_0x959809['4207c601'] = 0;
a0_0x959809['55db733e'] = 0;
a0_0x959809.ed423b0f = 0;
a0_0x959809['0e7a4845'] = 0;
a0_0x959809['0d8c8b8b'] = 0;
a0_0x959809['6bcb209a'] = 0;
a0_0x959809['67af5ede'] = 0;
a0_0x959809.d30a3759 = 0;
a0_0x959809['0bff4ac6'] = 0;
a0_0x959809['0193d06b'] = 0;
a0_0x959809['51500a7b'] = 0;
a0_0x959809['70a850a9'] = 0;
a0_0x959809['3ba1dfcd'] = 0;
a0_0x959809['598a4ba7'] = 0;
a0_0x959809['4beeabb0'] = 0;
a0_0x959809['9449c4dd'] = 0;
a0_0x959809['929f1727'] = 0;
a0_0x959809.f8419cb5 = 0;
a0_0x959809.f6e287de = 0;
a0_0x959809['66dc1c54'] = 0;
a0_0x959809['85879b64'] = 0;
a0_0x959809['5ab27a57'] = 0;
a0_0x959809.c102fd90 = 0;
a0_0x959809.a4af254e = 0;
a0_0x959809.c28e9ba9 = 0;
a0_0x959809['6ef9d923'] = 0;
a0_0x959809.fb91ba01 = 0;
a0_0x959809.f22ab49e = 0;
a0_0x959809['1c09f05b'] = 0;
a0_0x959809['936be791'] = 0;
a0_0x959809['63bc3917'] = 0;
a0_0x959809['61f5f31c'] = 0;
a0_0x959809.e4a001d8 = 0;
a0_0x959809['0d74419d'] = 0;
a0_0x959809.a5652361 = 0;
a0_0x959809['482ac280'] = 0;
a0_0x959809.e4fa6d65 = 0;
a0_0x959809['7c4c3c37'] = 0;
a0_0x959809['1d653921'] = 0;
a0_0x959809.c02217cf = 0;
a0_0x959809.b888cbd5 = 0;
a0_0x959809.cbbc6de0 = 0;
a0_0x959809['1516d89b'] = 0;
a0_0x959809['0f585e8e'] = 0;
a0_0x959809['33cc497e'] = 0;
a0_0x959809.cd1543d8 = 0;
a0_0x959809.a8e82ff8 = 0;
a0_0x959809['9f6566d7'] = 0;
a0_0x959809['67ddfc90'] = 0;
a0_0x959809.c2830fe2 = 0;
a0_0x959809.b79387e5 = 0;
a0_0x959809['5d8acae2'] = 0;
a0_0x959809.f86e00d6 = 0;
a0_0x959809['499ecdae'] = 0;
a0_0x959809['711a4d5a'] = 0;
a0_0x959809['98e4dba0'] = 0;
a0_0x959809['48e217eb'] = 0;
a0_0x959809.c76b657b = 0;
a0_0x959809.e06e1505 = 0;
a0_0x959809.e333f921 = 0;
a0_0x959809['756d4de6'] = 0;
a0_0x959809['07e6c7e1'] = 0;
a0_0x959809.e202a755 = 0;
a0_0x959809.edd6d0f8 = 0;
a0_0x959809.db501e4e = 0;
a0_0x959809['22d9df58'] = 0;
a0_0x959809.c420814a = 0;
a0_0x959809['84c604b1'] = 0;
a0_0x959809['14ee56b2'] = 0;
a0_0x959809['80506f69'] = 0;
a0_0x959809.e57d6073 = 0;
a0_0x959809['9c956faa'] = 0;
a0_0x959809['631210c9'] = 0;
a0_0x959809['784e083e'] = 0;
a0_0x959809.f6e00dee = 0;
a0_0x959809.dbc4b843 = 0;
a0_0x959809['203823ed'] = 0;
a0_0x959809['508bc467'] = 0;
a0_0x959809.dca87699 = 0;
a0_0x959809.caa1ee9c = 0;
a0_0x959809['61f6efe2'] = 0;
a0_0x959809['450b66d4'] = 0;
a0_0x959809.a611fa98 = 0;
a0_0x959809['0c52d0b7'] = 0;
a0_0x959809.a67b5ce0 = 0;
a0_0x959809.ebbadcbc = 0;
a0_0x959809['3614dc59'] = 0;
a0_0x959809.d9c25fd0 = 0;
a0_0x959809['2a9c90d3'] = 0;
a0_0x959809['0f999b9c'] = 0;
a0_0x959809.a685e3bb = 0;
a0_0x959809['9f26a430'] = 0;
a0_0x959809.d6bd982c = 0;
a0_0x959809['093a1d49'] = 0;
a0_0x959809['075d8ba9'] = 0;
a0_0x959809['83742bb1'] = 0;
a0_0x959809.b6125693 = 0;
a0_0x959809.c55fc167 = 0;
a0_0x959809['6eb77e9f'] = 0;
a0_0x959809['32a6991b'] = 0;
a0_0x959809['97849bba'] = 0;
a0_0x959809['4cf039c3'] = 0;
a0_0x959809.bac01fc1 = 0;
a0_0x959809['00bb1fe3'] = 0;
a0_0x959809['7a2b56d0'] = 0;
a0_0x959809['638e3f8e'] = 0;
a0_0x959809.e1a7aefa = 0;
a0_0x959809['99e21c83'] = 0;
a0_0x959809['89434016'] = 0;
a0_0x959809.b65ddef5 = 0;
a0_0x959809['536be687'] = 0;
a0_0x959809.c2f8bf92 = 0;
a0_0x959809['5cc762d6'] = 0;
a0_0x959809.d79aa274 = 0;
a0_0x959809.d54f5b76 = 0;
a0_0x959809['16c17ca2'] = 0;
a0_0x959809.da3c9d2d = 0;
a0_0x959809['1ccb5dcb'] = 0;
a0_0x959809['25eaaf2b'] = 0;
a0_0x959809.d459b12e = 0;
a0_0x959809['94208091'] = 0;
a0_0x959809.b88e7caf = 0;
a0_0x959809['29dbfa5a'] = 0;
a0_0x959809.f4ba70df = 0;
a0_0x959809['7fb99a49'] = 0;
a0_0x959809['597b958e'] = 0;
a0_0x959809.a03d0888 = 0;
a0_0x959809.bd09c310 = 0;
a0_0x959809['341677f7'] = 0;
a0_0x959809['09d9578f'] = 0;
a0_0x959809.a52c9394 = 0;
a0_0x959809['52dd5d68'] = 0;
a0_0x959809['43f56efc'] = 0;
a0_0x959809.ca781a9b = 0;
a0_0x959809.ede4d3b0 = 0;
a0_0x959809.d2d3e1da = 0;
a0_0x959809.c34b9b96 = 0;
a0_0x959809.e58121f1 = 0;
a0_0x959809['864c7f6d'] = 0;
a0_0x959809.b6c8f0b9 = 0;
a0_0x959809['36069c5b'] = 0;
a0_0x959809['552cc32a'] = 0;
a0_0x959809.e7d78eb4 = 0;
a0_0x959809['5a884372'] = 0;
a0_0x959809['0851efea'] = 0;
a0_0x959809['18f24038'] = 0;
a0_0x959809['11922389'] = 0;
a0_0x959809.f8a368f1 = 0;
a0_0x959809.c5cef298 = 0;
a0_0x959809.f91cab90 = 0;
a0_0x959809.bdfe98ae = 0;
a0_0x959809['647971a2'] = 0;
a0_0x959809['4afd4b21'] = 0;
a0_0x959809.e03fef5b = 0;
a0_0x959809.ff517d0b = 0;
a0_0x959809.a877cee7 = 0;
a0_0x959809.a5cb5d5c = 0;
a0_0x959809['172c78d5'] = 0;
a0_0x959809.a412e7b0 = 0;
a0_0x959809['9b6f034e'] = 0;
a0_0x959809['7bad3c8c'] = 0;
a0_0x959809['4fd407a1'] = 0;
a0_0x959809['9a9e51db'] = 0;
a0_0x959809.cec2a2df = 0;
a0_0x959809['26ab555e'] = 0;
a0_0x959809['72c7d9c7'] = 0;
a0_0x959809['4b33edbe'] = 0;
a0_0x959809['6492df21'] = 0;
a0_0x959809.ab8c94d4 = 0;
a0_0x959809['45d9a4f4'] = 0;
a0_0x959809['6db52a38'] = 0;
a0_0x959809.b472814f = 0;
a0_0x959809['465e6c8b'] = 0;
a0_0x959809['5c005ea5'] = 0;
a0_0x959809['0f9aa5f3'] = 0;
a0_0x959809.b8797633 = 0;
a0_0x959809.cae1aba3 = 0;
a0_0x959809.ba49ea48 = 0;
a0_0x959809['217b2f26'] = 0;
a0_0x959809['3db38526'] = 0;
a0_0x959809['1f539848'] = 0;
a0_0x959809['0b25bd22'] = 0;
a0_0x959809['01139e89'] = 0;
a0_0x959809['93ca9473'] = 0;
a0_0x959809['3c0ebbe6'] = 0;
a0_0x959809.b23105be = 0;
a0_0x959809['5f508d39'] = 0;
a0_0x959809['989efdd5'] = 0;
a0_0x959809['07d848c6'] = 0;
a0_0x959809.b6f5d849 = 0;
a0_0x959809.c96f1a29 = 0;
a0_0x959809['615194d3'] = 0;
a0_0x959809.bba5a70d = 0;
a0_0x959809['59d978ec'] = 0;
a0_0x959809['2ff93700'] = 0;
a0_0x959809.d566b9f3 = 0;
a0_0x959809['473af745'] = 0;
a0_0x959809['90438e31'] = 0;
a0_0x959809.f1f2f9e0 = 0;
a0_0x959809['6cf51a00'] = 0;
a0_0x959809.cc34131c = 0;
a0_0x959809['543e16df'] = 0;
a0_0x959809.b82c71de = 0;
a0_0x959809['2a3a3ae8'] = 0;
a0_0x959809['19ce9da5'] = 0;
a0_0x959809['19993af4'] = 0;
a0_0x959809['2c19bf1d'] = 0;
a0_0x959809['0dfc295c'] = 0;
a0_0x959809.b523b21b = 0;
a0_0x959809['70765755'] = 0;
a0_0x959809['069b6ddd'] = 0;
a0_0x959809['83782e59'] = 0;
a0_0x959809.c5f5e02f = 0;
a0_0x959809.d81f3ebb = 0;
a0_0x959809['94d501c0'] = 0;
a0_0x959809['33fb35fb'] = 0;
a0_0x959809['13e77d5e'] = 0;
a0_0x959809['898161bf'] = 0;
a0_0x959809.e3c15436 = 0;
a0_0x959809.c7ab112f = 0;
a0_0x959809.a7f00b63 = 0;
a0_0x959809.c9180cd1 = 0;
a0_0x959809.e4eb26dd = 0;
a0_0x959809['2b44a293'] = 0;
a0_0x959809['490c9aec'] = 0;
a0_0x959809['5fe10473'] = 0;
a0_0x959809.aef8d047 = 0;
a0_0x959809['06e1af53'] = 0;
a0_0x959809['9cb5c924'] = 0;
a0_0x959809.ab5c9927 = 0;
a0_0x959809['795f627f'] = 0;
a0_0x959809.cfc72dbe = 0;
a0_0x959809['57049f69'] = 0;
a0_0x959809.f04cfe58 = 0;
a0_0x959809['8ac72ce2'] = 0;
a0_0x959809.c7dd7480 = 0;
a0_0x959809.e752de14 = 0;
a0_0x959809['11f9c6b9'] = 0;
a0_0x959809['980f521c'] = 0;
a0_0x959809.c0e0f4ce = 0;
a0_0x959809.f64e6e3e = 0;
a0_0x959809.fd2c9784 = 0;
a0_0x959809.eb132a4c = 0;
a0_0x959809.d248025c = 0;
a0_0x959809['29e32cfb'] = 0;
a0_0x959809.b6bc4a1d = 0;
a0_0x959809['34fcd464'] = 0;
a0_0x959809['71e9d8ca'] = 0;
a0_0x959809['65cc6946'] = 0;
a0_0x959809['155a401b'] = 0;
a0_0x959809['424a2bd4'] = 0;
a0_0x959809.da9dda56 = 0;
a0_0x959809['27bb589e'] = 0;
a0_0x959809.b981e6ab = 0;
a0_0x959809['8361cfb5'] = 0;
a0_0x959809['59656c79'] = 0;
a0_0x959809['6e69931b'] = 0;
a0_0x959809['903e35cc'] = 0;
a0_0x959809['6145b02b'] = 0;
a0_0x959809.cf025573 = 0;
a0_0x959809.e4d63818 = 0;
a0_0x959809['5747ba3f'] = 0;
a0_0x959809['9c1f3dd8'] = 0;
a0_0x959809['623f9d5a'] = 0;
a0_0x959809['25b2f3ba'] = 0;
a0_0x959809.d8b26d71 = 0;
a0_0x959809['64d77e54'] = 0;
a0_0x959809['94fc862f'] = 0;
a0_0x959809['213f7915'] = 0;
a0_0x959809.ee1a4982 = 0;
a0_0x959809['628cd2be'] = 0;
a0_0x959809['9dcd2e69'] = 0;
a0_0x959809.e194b6ae = 0;
a0_0x959809['407ea67d'] = 0;
a0_0x959809['80b7fdb8'] = 0;
a0_0x959809['8bee37df'] = 0;
a0_0x959809['4668cac0'] = 0;
a0_0x959809['3b223980'] = 0;
a0_0x959809['5f4bd737'] = 0;
a0_0x959809.afdf460b = 0;
a0_0x959809['6e7414df'] = 0;
a0_0x959809.f709603c = 0;
a0_0x959809.afb42ba5 = 0;
a0_0x959809['12b0ad03'] = 0;
a0_0x959809['3d0701df'] = 0;
a0_0x959809['0d368465'] = 0;
a0_0x959809.f09aea99 = 0;
a0_0x959809.f308c0a6 = 0;
a0_0x959809['36d5b3c9'] = 0;
a0_0x959809.eb12f123 = 0;
a0_0x959809.c7139f57 = 0;
a0_0x959809.a119607a = 0;
a0_0x959809['628d8ec4'] = 0;
a0_0x959809['6ee230f3'] = 0;
a0_0x959809.b46731c6 = 0;
a0_0x959809['80d4171d'] = 0;
a0_0x959809['87acc6cc'] = 0;
a0_0x959809['8f265c08'] = 0;
a0_0x959809['837b308a'] = 0;
a0_0x959809['299a2b69'] = 0;
a0_0x959809.f5b676fe = 0;
a0_0x959809['5e2f58c1'] = 0;
a0_0x959809.cf668c31 = 0;
a0_0x959809.a96f7b3d = 0;
a0_0x959809['8975daf6'] = 0;
a0_0x959809['0904a6bd'] = 0;
a0_0x959809['32400c2e'] = 0;
a0_0x959809['95383c59'] = 0;
a0_0x959809['28b3cfb8'] = 0;
a0_0x959809['936b346f'] = 0;
a0_0x959809['0b981c93'] = 0;
a0_0x959809['2ec7d9e8'] = 0;
a0_0x959809['8df2dc60'] = 0;
a0_0x959809['992c63a3'] = 0;
a0_0x959809['52928438'] = 0;
a0_0x959809['720436b5'] = 0;
a0_0x959809['315a6172'] = 0;
a0_0x959809.f97b5419 = 0;
a0_0x959809['5073b538'] = 0;
a0_0x959809['978539f5'] = 0;
a0_0x959809['2b9ba819'] = 0;
a0_0x959809['24db8307'] = 0;
a0_0x959809['2d6eff47'] = 0;
a0_0x959809['391002df'] = 0;
a0_0x959809.aff1f337 = 0;
a0_0x959809.b384177f = 0;
a0_0x959809['1b6d5335'] = 0;
a0_0x959809['756bc44a'] = 0;
a0_0x959809.b6031355 = 0;
a0_0x959809['49d00acc'] = 0;
a0_0x959809['9f277d25'] = 0;
a0_0x959809['7d67e310'] = 0;
a0_0x959809.a8d9ddaf = 0;
a0_0x959809['275441fb'] = 0;
a0_0x959809.b3ec08a0 = 0;
a0_0x959809['5e8b4cf2'] = 0;
a0_0x959809.d1552803 = 0;
a0_0x959809['8b02dd6e'] = 0;
a0_0x959809.b4234299 = 0;
a0_0x959809.da2f30f8 = 0;
a0_0x959809.dd7cd38e = 0;
a0_0x959809.f588ca42 = 0;
a0_0x959809['146dc4f4'] = 0;
a0_0x959809.d85ad09b = 0;
a0_0x959809['6e6aa6bd'] = 0;
a0_0x959809.cf16ed3c = 0;
a0_0x959809['914f908c'] = 0;
a0_0x959809['214652c4'] = 0;
a0_0x959809['1d679fc4'] = 0;
a0_0x959809.d02e0106 = 0;
a0_0x959809.b64bc9c9 = 0;
a0_0x959809['90ac9453'] = 0;
a0_0x959809['68013dd2'] = 0;
a0_0x959809.db3cc66f = 0;
a0_0x959809.d171a964 = 0;
a0_0x959809['7faaf303'] = 0;
a0_0x959809['7bf63f32'] = 0;
a0_0x959809.cdbf9a58 = 0;
a0_0x959809['899bc35b'] = 0;
a0_0x959809['2d60a817'] = 0;
a0_0x959809.a03fbb4c = 0;
a0_0x959809.c7ae7ce9 = 0;
a0_0x959809['0e56fe0f'] = 0;
a0_0x959809.ee5ade69 = 0;
a0_0x959809['5afff745'] = 0;
a0_0x959809.b71a9425 = 0;
a0_0x959809['8d0523f4'] = 0;
a0_0x959809.ac1d66d8 = 0;
a0_0x959809['45fff8b9'] = 0;
a0_0x959809.b3924591 = 0;
a0_0x959809['24c3d829'] = 0;
a0_0x959809['701514a4'] = 0;
a0_0x959809['4bb9b4ec'] = 0;
a0_0x959809.ca5539a5 = 0;
a0_0x959809.deb82f33 = 0;
a0_0x959809['21a761b3'] = 0;
a0_0x959809['7396cadc'] = 0;
a0_0x959809.e5f1bb96 = 0;
a0_0x959809['41c3fed0'] = 0;
a0_0x959809['0669f7b2'] = 0;
a0_0x959809.b6380f43 = 0;
a0_0x959809.c00dd30c = 0;
a0_0x959809['3a8f6932'] = 0;
a0_0x959809['067087e3'] = 0;
a0_0x959809['3c5071b9'] = 0;
a0_0x959809['0c2b0ee3'] = 0;
a0_0x959809['5cb4db99'] = 0;
a0_0x959809['6ca71878'] = 0;
a0_0x959809['7c56a2f9'] = 0;
a0_0x959809['4efd2180'] = 0;
a0_0x959809['58f7d065'] = 0;
a0_0x959809['6a17b068'] = 0;
a0_0x959809['91ec2a34'] = 0;
a0_0x959809.efc1dd05 = 0;
a0_0x959809.fac79e99 = 0;
a0_0x959809.a2d97186 = 0;
a0_0x959809.d0c67970 = 0;
a0_0x959809.cd41db75 = 0;
a0_0x959809['666c62ab'] = 0;
a0_0x959809.c35ee916 = 0;
a0_0x959809.f9e48921 = 0;
a0_0x959809['622143c5'] = 0;
a0_0x959809.dcb1ae74 = 0;
a0_0x959809['40052b2e'] = 0;
a0_0x959809.a0ab9c99 = 0;
a0_0x959809['2d95505c'] = 0;
a0_0x959809.a326be7b = 0;
a0_0x959809['157a7e4e'] = 0;
a0_0x959809['27ad9a1b'] = 0;
a0_0x959809['774ac0a5'] = 0;
a0_0x959809.fe505de9 = 0;
a0_0x959809['6392add2'] = 0;
a0_0x959809.fc8aa897 = 0;
a0_0x959809['45f5a846'] = 0;
a0_0x959809.b86b4a09 = 0;
a0_0x959809['90c64ef7'] = 0;
a0_0x959809['9bf6ad3c'] = 0;
a0_0x959809.cdd38c4f = 0;
a0_0x959809['0a2931a1'] = 0;
a0_0x959809.d66c3096 = 0;
a0_0x959809.d30a5e57 = 0;
a0_0x959809['64ea7e09'] = 0;
a0_0x959809.f39f892f = 0;
a0_0x959809['9eae0044'] = 0;
a0_0x959809.f2160122 = 0;
a0_0x959809.c2ff344f = 0;
a0_0x959809.efe130ff = 0;
a0_0x959809['4a0e6250'] = 0;
a0_0x959809['70ae6386'] = 0;
a0_0x959809['48040c14'] = 0;
a0_0x959809['84882925'] = 0;
a0_0x959809['839919de'] = 0;
a0_0x959809.eabdb612 = 0;
a0_0x959809['3d691ee1'] = 0;
a0_0x959809['06b89b2d'] = 0;
a0_0x959809.b8e15dc4 = 0;
a0_0x959809['93e82708'] = 0;
a0_0x959809['853b6dd1'] = 0;
a0_0x959809['3b88c8f6'] = 0;
a0_0x959809.db243f81 = 0;
a0_0x959809.a95c4fcb = 0;
a0_0x959809.a1ce1454 = 0;
a0_0x959809['97852271'] = 0;
a0_0x959809['47d1194e'] = 0;
a0_0x959809['12ae150d'] = 0;
a0_0x959809['6dde3da5'] = 0;
a0_0x959809['03a7099e'] = 0;
a0_0x959809.e2bcebef = 0;
a0_0x959809['0513c83e'] = 0;
a0_0x959809.d2d2dcb0 = 0;
a0_0x959809['3ff09aab'] = 0;
a0_0x959809['33df6a78'] = 0;
a0_0x959809['0d454e97'] = 0;
a0_0x959809['1c8922fb'] = 0;
a0_0x959809.b4d92297 = 0;
a0_0x959809.c94f73aa = 0;
a0_0x959809['3a683874'] = 0;
a0_0x959809['59810403'] = 0;
a0_0x959809['142778fb'] = 0;
a0_0x959809['18c63a4e'] = 0;
a0_0x959809['22679f40'] = 0;
a0_0x959809['1e2cddb0'] = 0;
a0_0x959809['5abfe333'] = 0;
a0_0x959809['1633816b'] = 0;
a0_0x959809.cb58f1f0 = 0;
a0_0x959809.f8b6a07d = 0;
a0_0x959809['88672f49'] = 0;
a0_0x959809['9cbf7e1e'] = 0;
a0_0x959809['11a4065f'] = 0;
a0_0x959809.c57f1148 = 0;
a0_0x959809['8db157ee'] = 0;
a0_0x959809.ac2add7a = 0;
a0_0x959809.a33a97ca = 0;
a0_0x959809.ba658a7a = 0;
a0_0x959809['9b03bc96'] = 0;
a0_0x959809['1284df90'] = 0;
a0_0x959809.a83961f8 = 0;
a0_0x959809['0db9f94e'] = 0;
a0_0x959809.dd846886 = 0;
a0_0x959809['8b3d0df5'] = 0;
a0_0x959809.fac360f6 = 0;
a0_0x959809['3803aa0b'] = 0;
a0_0x959809.dbd413dc = 0;
a0_0x959809['9e2ba16b'] = 0;
a0_0x959809['58654f7a'] = 0;
a0_0x959809.ba7ca859 = 0;
a0_0x959809['2c3adb06'] = 0;
a0_0x959809.b1c4ade8 = 0;
a0_0x959809['3129e11d'] = 0;
a0_0x959809['9c1803bc'] = 0;
a0_0x959809['0cac41ad'] = 0;
a0_0x959809.c17b6269 = 0;
a0_0x959809.cadefdbb = 0;
a0_0x959809.e46e99b3 = 0;
a0_0x959809['8045436e'] = 0;
a0_0x959809['20aa836c'] = 0;
a0_0x959809['161e05f0'] = 0;
a0_0x959809['6ddec2f6'] = 0;
a0_0x959809['533038f8'] = 0;
a0_0x959809['07352066'] = 0;
a0_0x959809['5a838c96'] = 0;
a0_0x959809['5cebb6ed'] = 0;
a0_0x959809['2ba4f2c4'] = 0;
a0_0x959809['14375590'] = 0;
a0_0x959809['11906380'] = 0;
a0_0x959809['433f91e9'] = 0;
a0_0x959809['9bb92b4a'] = 0;
a0_0x959809['6c09273c'] = 0;
a0_0x959809.f669bce0 = 0;
a0_0x959809['124831dd'] = 0;
a0_0x959809['9c2124e3'] = 0;
a0_0x959809['8b7ebd77'] = 0;
a0_0x959809['482c86d0'] = 0;
a0_0x959809.e4a0aab0 = 0;
a0_0x959809.d25979b5 = 0;
a0_0x959809['4ffa930f'] = 0;
a0_0x959809['8359701d'] = 0;
a0_0x959809.fe8dd248 = 0;
a0_0x959809['7d55a3e4'] = 0;
a0_0x959809['7234a802'] = 0;
a0_0x959809.a5a44043 = 0;
a0_0x959809.f1e16311 = 0;
a0_0x959809['527954bb'] = 0;
a0_0x959809['6f2fd711'] = 0;
a0_0x959809.ed0317db = 0;
a0_0x959809['9291ca1b'] = 0;
a0_0x959809.ebe56f68 = 0;
a0_0x959809.fd80164e = 0;
a0_0x959809.a110d7a0 = 0;
a0_0x959809.f630cbab = 0;
a0_0x959809['284c7021'] = 0;
a0_0x959809['6b76349e'] = 0;
a0_0x959809.d98567ab = 0;
a0_0x959809['6e7e66ef'] = 0;
a0_0x959809['0cc53046'] = 0;
a0_0x959809['98828d47'] = 0;
a0_0x959809['69bebf5f'] = 0;
a0_0x959809['98a8536c'] = 0;
a0_0x959809['12abcaf5'] = 0;
a0_0x959809.cd50b732 = 0;
a0_0x959809.a705e10c = 0;
a0_0x959809['45524038'] = 0;
a0_0x959809['42725f45'] = 0;
a0_0x959809['499ff6b6'] = 0;
a0_0x959809['10428336'] = 0;
a0_0x959809.f771936d = 0;
a0_0x959809['618e7452'] = 0;
a0_0x959809.c67a69ed = 0;
a0_0x959809['952602e4'] = 0;
a0_0x959809['155b58fa'] = 0;
a0_0x959809['78117b26'] = 0;
a0_0x959809['5163e074'] = 0;
a0_0x959809['9ab580d9'] = 0;
a0_0x959809['76190899'] = 0;
a0_0x959809['933dbdf8'] = 0;
a0_0x959809['77464096'] = 0;
a0_0x959809.ede5993c = 0;
a0_0x959809.c5cf4d42 = 0;
a0_0x959809.a808c71c = 0;
a0_0x959809['9b848716'] = 0;
a0_0x959809.cfcb5de3 = 0;
a0_0x959809['23add961'] = 0;
a0_0x959809.fd77bc36 = 0;
a0_0x959809['23756d73'] = 0;
a0_0x959809.c27e0da4 = 0;
a0_0x959809['3f0c1d2a'] = 0;
a0_0x959809['2883139c'] = 0;
a0_0x959809['1894cfbb'] = 0;
a0_0x959809['9f252b5c'] = 0;
a0_0x959809.b7959a61 = 0;
a0_0x959809.d6d13073 = 0;
a0_0x959809['0d46b6a8'] = 0;
a0_0x959809['81631bf0'] = 0;
a0_0x959809.baae292f = 0;
a0_0x959809['45b2cb52'] = 0;
a0_0x959809.b1231c71 = 0;
a0_0x959809['6c77be5d'] = 0;
a0_0x959809.be834870 = 0;
a0_0x959809['7446dad8'] = 0;
a0_0x959809['515194e4'] = 0;
a0_0x959809['591e96fd'] = 0;
a0_0x959809['8e822c59'] = 0;
a0_0x959809['48106e1b'] = 0;
a0_0x959809.b0ef001d = 0;
a0_0x959809['98cd3474'] = 0;
a0_0x959809.cc007d4c = 0;
a0_0x959809['5c87f83d'] = 0;
a0_0x959809['2bdc01a2'] = 0;
a0_0x959809.fd2bcd4f = 0;
a0_0x959809['5b886e7e'] = 0;
a0_0x959809['0e57d610'] = 0;
a0_0x959809['1abc292e'] = 0;
a0_0x959809.b4fe4362 = 0;
a0_0x959809['32996099'] = 0;
a0_0x959809.c1cb7c11 = 0;
a0_0x959809.c6fed3f9 = 0;
a0_0x959809.dd1fc792 = 0;
a0_0x959809['7c4ef7a7'] = 0;
a0_0x959809['0906c1a9'] = 0;
a0_0x959809['766cfbd5'] = 0;
a0_0x959809['4e5eaeab'] = 0;
a0_0x959809['571a6170'] = 0;
a0_0x959809['4bee5091'] = 0;
a0_0x959809.ae7c0be6 = 0;
a0_0x959809['8c205d9e'] = 0;
a0_0x959809['8fe88768'] = 0;
a0_0x959809['5d10bafd'] = 0;
a0_0x959809.c159cfd9 = 0;
a0_0x959809.eeb19b9e = 0;
a0_0x959809.b52aba50 = 0;
a0_0x959809.bfb9b7db = 0;
a0_0x959809['92bec7a2'] = 0;
a0_0x959809.a2ce7259 = 0;
a0_0x959809.d47bc77f = 0;
a0_0x959809.d987d456 = 0;
a0_0x959809.db03c8b8 = 0;
a0_0x959809['949d3a2a'] = 0;
a0_0x959809['1b70bbf8'] = 0;
a0_0x959809['6e0fdbc8'] = 0;
a0_0x959809['077eb19f'] = 0;
a0_0x959809['1fb43a28'] = 0;
a0_0x959809['62673ca0'] = 0;
a0_0x959809['37cf658a'] = 0;
a0_0x959809.e4f266fa = 0;
a0_0x959809['306e8c47'] = 0;
a0_0x959809['92546380'] = 0;
a0_0x959809.b95e93a9 = 0;
a0_0x959809['5ae574c6'] = 0;
a0_0x959809['7bbac9de'] = 0;
a0_0x959809['0f68ef6b'] = 0;
a0_0x959809.a5e1c08f = 0;
a0_0x959809.e830184f = 0;
a0_0x959809.f96f8f45 = 0;
a0_0x959809.ca3a14ea = 0;
a0_0x959809.db43211e = 0;
a0_0x959809['17d51797'] = 0;
a0_0x959809['3ffea8a4'] = 0;
a0_0x959809['04822e62'] = 0;
a0_0x959809['2987a917'] = 0;
a0_0x959809.bab7b0d2 = 0;
a0_0x959809['78916472'] = 0;
a0_0x959809['99aa4348'] = 0;
a0_0x959809['5c301bd7'] = 0;
a0_0x959809['09d6536c'] = 0;
a0_0x959809['162c5c4e'] = 0;
a0_0x959809['730cf103'] = 0;
a0_0x959809['11d178cb'] = 0;
a0_0x959809['8bd9133f'] = 0;
a0_0x959809['75d1ebfd'] = 0;
a0_0x959809['01ba92d9'] = 0;
a0_0x959809.ea9e97cb = 0;
a0_0x959809['56023ab8'] = 0;
a0_0x959809.ea6b7086 = 0;
a0_0x959809.f4f1aa35 = 0;
a0_0x959809.ca3899c6 = 0;
a0_0x959809['4253c714'] = 0;
a0_0x959809.cf6247e3 = 0;
a0_0x959809.e8376398 = 0;
a0_0x959809.a62d5f48 = 0;
a0_0x959809['959755db'] = 0;
a0_0x959809.d869e19d = 0;
a0_0x959809['68009cf9'] = 0;
a0_0x959809.fc118628 = 0;
a0_0x959809.c03c7024 = 0;
a0_0x959809.d85c0363 = 0;
a0_0x959809['0051cf5e'] = 0;
a0_0x959809.da00b009 = 0;
a0_0x959809.eb2ba992 = 0;
a0_0x959809.c9b05e11 = 0;
a0_0x959809.a0934be1 = 0;
a0_0x959809['2892eb9f'] = 0;
a0_0x959809['458a36c4'] = 0;
a0_0x959809['34be4d63'] = 0;
a0_0x959809['55a82bf4'] = 0;
a0_0x959809['9020af20'] = 0;
a0_0x959809['10243d0e'] = 0;
a0_0x959809['03a23963'] = 0;
a0_0x959809.cbe3627d = 0;
a0_0x959809.d1b89a04 = 0;
a0_0x959809.eefb2c14 = 0;
a0_0x959809.b88d642c = 0;
a0_0x959809['95fa1311'] = 0;
a0_0x959809['654ec946'] = 0;
a0_0x959809['8fa546c1'] = 0;
a0_0x959809['191d35c2'] = 0;
a0_0x959809['111f486d'] = 0;
a0_0x959809['57374e87'] = 0;
a0_0x959809.b0e56856 = 0;
a0_0x959809['53d67dea'] = 0;
a0_0x959809['908798ce'] = 0;
a0_0x959809.ceba1e86 = 0;
a0_0x959809.ded989a0 = 0;
a0_0x959809['9896e69c'] = 0;
a0_0x959809.af57861e = 0;
a0_0x959809['78e874e8'] = 0;
a0_0x959809['11957c79'] = 0;
a0_0x959809['556f91cc'] = 0;
a0_0x959809['2e058a30'] = 0;
a0_0x959809['51ea4f93'] = 0;
a0_0x959809['7f3a0c41'] = 0;
a0_0x959809['9b8f6b87'] = 0;
a0_0x959809.bf7769a9 = 0;
a0_0x959809['5b7cd55c'] = 0;
a0_0x959809.d1ba7e43 = 0;
a0_0x959809['935b29ec'] = 0;
a0_0x959809['38df960e'] = 0;
a0_0x959809['103fd07b'] = 0;
a0_0x959809['7fbb8494'] = 0;
a0_0x959809.a4736c2b = 0;
a0_0x959809['691576dd'] = 0;
a0_0x959809.b685d353 = 0;
a0_0x959809.a4a2e353 = 0;
a0_0x959809.daa2f6bf = 0;
a0_0x959809['6ac66331'] = 0;
a0_0x959809['334ba417'] = 0;
a0_0x959809['38ca24da'] = 0;
a0_0x959809['3812a3c9'] = 0;
a0_0x959809['3edd3370'] = 0;
a0_0x959809['4ad20e3b'] = 0;
a0_0x959809.ac109f00 = 0;
a0_0x959809['66fe418d'] = 0;
a0_0x959809['725c70da'] = 0;
a0_0x959809.d3f1a304 = 0;
a0_0x959809['3663a15b'] = 0;
a0_0x959809['5cb0a41d'] = 0;
a0_0x959809['1b7ac957'] = 0;
a0_0x959809['0fd3c763'] = 0;
a0_0x959809.f305ce5c = 0;
a0_0x959809['649c00e7'] = 0;
a0_0x959809['04e020f6'] = 0;
a0_0x959809['63c6da02'] = 0;
a0_0x959809['4ac396b0'] = 0;
a0_0x959809.c87ee401 = 0;
a0_0x959809['98644771'] = 0;
a0_0x959809['9629858d'] = 0;
a0_0x959809['04bc5ad0'] = 0;
a0_0x959809.e05ef341 = 0;
a0_0x959809['862ff8e5'] = 0;
a0_0x959809['7880c41e'] = 0;
a0_0x959809['0a7daf75'] = 0;
a0_0x959809['72a9783d'] = 0;
a0_0x959809.a07b6d15 = 0;
a0_0x959809['82e6a862'] = 0;
a0_0x959809['451a57c1'] = 0;
a0_0x959809.d261dec4 = 0;
a0_0x959809['0fa20869'] = 0;
a0_0x959809.a8d6b5ae = 0;
a0_0x959809.a55b4f6f = 0;
a0_0x959809.d8abace8 = 0;
a0_0x959809.b5881aae = 0;
a0_0x959809['89c9b02f'] = 0;
a0_0x959809['28e4f015'] = 0;
a0_0x959809.ba3e152e = 0;
a0_0x959809['5b5d6ade'] = 0;
a0_0x959809['9b5a8715'] = 0;
a0_0x959809.ea7251a8 = 0;
a0_0x959809['35c20d31'] = 0;
a0_0x959809['5dad9a0e'] = 0;
a0_0x959809['97d580ef'] = 0;
a0_0x959809['401693a6'] = 0;
a0_0x959809.c36d9d2e = 0;
a0_0x959809['3de6b299'] = 0;
a0_0x959809['0cc8c963'] = 0;
a0_0x959809.b83ea7ee = 0;
a0_0x959809['252310c4'] = 0;
a0_0x959809['77ffad7c'] = 0;
a0_0x959809['78dbdda7'] = 0;
a0_0x959809['5e4476c8'] = 0;
a0_0x959809['1beb5add'] = 0;
a0_0x959809['24ca411f'] = 0;
a0_0x959809['868fb2ca'] = 0;
a0_0x959809.c31a06b1 = 0;
a0_0x959809['5150fc63'] = 0;
a0_0x959809.deb585ab = 0;
a0_0x959809['80a79e9f'] = 0;
a0_0x959809['573c3f92'] = 0;
a0_0x959809.e062e6d2 = 0;
a0_0x959809['5f595949'] = 0;
a0_0x959809['1658e9ac'] = 0;
a0_0x959809['9e282d36'] = 0;
a0_0x959809['3028139b'] = 0;
a0_0x959809.bfc414ad = 0;
a0_0x959809['258cf82e'] = 0;
a0_0x959809['439fe03f'] = 0;
a0_0x959809['45d4d355'] = 0;
a0_0x959809['186136df'] = 0;
a0_0x959809['7d8a6faf'] = 0;
a0_0x959809.e8a67d11 = 0;
a0_0x959809.c416f3d0 = 0;
a0_0x959809['2794144d'] = 0;
a0_0x959809.da294dbc = 0;
a0_0x959809.ab2b0f4e = 0;
a0_0x959809.f9374c8f = 0;
a0_0x959809['77554244'] = 0;
a0_0x959809.b748557d = 0;
a0_0x959809.c861ae63 = 0;
a0_0x959809['6b8d5f46'] = 0;
a0_0x959809['59699ba0'] = 0;
a0_0x959809['646c2397'] = 0;
a0_0x959809['5411e168'] = 0;
a0_0x959809.e655ea03 = 0;
a0_0x959809['35ba1b39'] = 0;
a0_0x959809['9daec007'] = 0;
a0_0x959809['88c4b461'] = 0;
a0_0x959809.bc272dff = 0;
a0_0x959809['088fd5ce'] = 0;
a0_0x959809['24578115'] = 0;
a0_0x959809['980d49ef'] = 0;
a0_0x959809['8e15e9ad'] = 0;
a0_0x959809.de96277d = 0;
a0_0x959809['36a1cf4e'] = 0;
a0_0x959809.b2207726 = 0;
a0_0x959809['8fbb5983'] = 0;
a0_0x959809['1548b9df'] = 0;
a0_0x959809.f365b6b8 = 0;
a0_0x959809.aa4ca733 = 0;
a0_0x959809['52596f56'] = 0;
a0_0x959809['51b8bd6b'] = 0;
a0_0x959809['85b926d9'] = 0;
a0_0x959809['2e464c64'] = 0;
a0_0x959809['2c85400b'] = 0;
a0_0x959809['772945fb'] = 0;
a0_0x959809.c547b6a4 = 0;
a0_0x959809.da26ae1b = 0;
a0_0x959809['328c9bef'] = 0;
a0_0x959809['698d286e'] = 0;
a0_0x959809.f7513255 = 0;
a0_0x959809['9bacf6da'] = 0;
a0_0x959809.e4d6cc80 = 0;
a0_0x959809.dd8658e9 = 0;
a0_0x959809['371ebd83'] = 0;
a0_0x959809['5ff92c7f'] = 0;
a0_0x959809['903c31e1'] = 0;
a0_0x959809.dfffdaea = 0;
a0_0x959809.fddd523b = 0;
a0_0x959809.a219335a = 0;
a0_0x959809['5282912b'] = 0;
a0_0x959809['9a286740'] = 0;
a0_0x959809['930c8dc7'] = 0;
a0_0x959809.cc8c4cea = 0;
a0_0x959809.f981b8bf = 0;
a0_0x959809.cd08d34e = 0;
a0_0x959809.dea8ba38 = 0;
a0_0x959809.a4e899a3 = 0;
a0_0x959809['2d073d6c'] = 0;
a0_0x959809.f72fb9e2 = 0;
a0_0x959809.a7588cf0 = 0;
a0_0x959809.d8b0e7ea = 0;
a0_0x959809['35b0260e'] = 0;
a0_0x959809['2c9d825f'] = 0;
a0_0x959809['0ac04868'] = 0;
a0_0x959809['0704ac7d'] = 0;
a0_0x959809['6eddf8e2'] = 0;
a0_0x959809['251312b5'] = 0;
a0_0x959809['50faab6c'] = 0;
a0_0x959809['66e3a123'] = 0;
a0_0x959809['347c0dc4'] = 0;
a0_0x959809['2cedda0f'] = 0;
a0_0x959809['3549d1ea'] = 0;
a0_0x959809['76b259ec'] = 0;
a0_0x959809.ef080db5 = 0;
a0_0x959809.a5a62472 = 0;
a0_0x959809['0e00689a'] = 0;
a0_0x959809['3876b81e'] = 0;
a0_0x959809.b6b6b8be = 0;
a0_0x959809['3ab6f2a1'] = 0;
a0_0x959809['703a4534'] = 0;
a0_0x959809.dca8896e = 0;
a0_0x959809.c9f1b18a = 0;
a0_0x959809['4cd419e3'] = 0;
a0_0x959809['0367494a'] = 0;
a0_0x959809.dad814f1 = 0;
a0_0x959809.b149b974 = 0;
a0_0x959809.d03e3719 = 0;
a0_0x959809.f9b43425 = 0;
a0_0x959809['1dd93675'] = 0;
a0_0x959809['454680f1'] = 0;
a0_0x959809['93341542'] = 0;
a0_0x959809['57b17f6a'] = 0;
a0_0x959809.bb3e2c79 = 0;
a0_0x959809.f915679a = 0;
a0_0x959809['5d72a87b'] = 0;
a0_0x959809['53d5d06b'] = 0;
a0_0x959809['1a7ef447'] = 0;
a0_0x959809.fa78bf6e = 0;
a0_0x959809.c419ce39 = 0;
a0_0x959809['89a80a21'] = 0;
a0_0x959809['98eed79e'] = 0;
a0_0x959809['65d80757'] = 0;
a0_0x959809['39a8beda'] = 0;
a0_0x959809['1cc00366'] = 0;
a0_0x959809['04b922bb'] = 0;
a0_0x959809['4ee75bc2'] = 0;
a0_0x959809['1f06d7ac'] = 0;
a0_0x959809['47482208'] = 0;
a0_0x959809.df803c63 = 0;
a0_0x959809['4ceb488b'] = 0;
a0_0x959809['2554bc61'] = 0;
a0_0x959809.b133c422 = 0;
a0_0x959809['3318fe56'] = 0;
a0_0x959809['2dea687e'] = 0;
a0_0x959809.dfb0a7f4 = 0;
a0_0x959809['3f0e18ff'] = 0;
a0_0x959809['5a303f5c'] = 0;
a0_0x959809['18bbb260'] = 0;
a0_0x959809['138e6270'] = 0;
a0_0x959809['7de6f8f8'] = 0;
a0_0x959809['985a7ccb'] = 0;
a0_0x959809.ea48b139 = 0;
a0_0x959809['0949ef3b'] = 0;
a0_0x959809.f2cad0b7 = 0;
a0_0x959809['90db26a5'] = 0;
a0_0x959809['46272133'] = 0;
a0_0x959809['70599911'] = 0;
a0_0x959809.b130c03f = 0;
a0_0x959809['33460e54'] = 0;
a0_0x959809['56e8c775'] = 0;
a0_0x959809['3208ed6c'] = 0;
a0_0x959809.d6f3a3dd = 0;
a0_0x959809.e8ea1fa2 = 0;
a0_0x959809['42f321ea'] = 0;
a0_0x959809['60d43da3'] = 0;
a0_0x959809['4eaf1a5a'] = 0;
a0_0x959809.b0f7ec14 = 0;
a0_0x959809['6cc6c07e'] = 0;
a0_0x959809.a791a0af = 0;
a0_0x959809.b991bce6 = 0;
a0_0x959809['4d41ab1e'] = 0;
a0_0x959809['295065ba'] = 0;
a0_0x959809['4e1825b7'] = 0;
a0_0x959809['6d56fef3'] = 0;
a0_0x959809['92e8c5b2'] = 0;
a0_0x959809['15f86ed7'] = 0;
a0_0x959809['80dbf19b'] = 0;
a0_0x959809.eee0a54a = 0;
a0_0x959809['9052c1ae'] = 0;
a0_0x959809['4f85ddad'] = 0;
a0_0x959809['6149b5ea'] = 0;
a0_0x959809.e933f3e0 = 0;
a0_0x959809['558b4400'] = 0;
a0_0x959809['9e81f3b2'] = 0;
a0_0x959809['8ff31104'] = 0;
a0_0x959809['7770ca30'] = 0;
a0_0x959809['385ebbbd'] = 0;
a0_0x959809.c0089086 = 0;
a0_0x959809['4b87800e'] = 0;
a0_0x959809['08ac1ec8'] = 0;
a0_0x959809.f5da419c = 0;
a0_0x959809.ed61bf54 = 0;
a0_0x959809.a2ac767f = 0;
a0_0x959809.d94c3d62 = 0;
a0_0x959809.e8ea5c80 = 0;
a0_0x959809['65eec32d'] = 0;
a0_0x959809['51df35ea'] = 0;
a0_0x959809['9684f6a4'] = 0;
a0_0x959809['926231de'] = 0;
a0_0x959809.ede53837 = 0;
a0_0x959809['7993200f'] = 0;
a0_0x959809.ee45f22c = 0;
a0_0x959809['6ff8e117'] = 0;
a0_0x959809.c33aec94 = 0;
a0_0x959809.e4c77d94 = 0;
a0_0x959809['49f59ac1'] = 0;
a0_0x959809['98fbbfae'] = 0;
a0_0x959809['3b8d49f0'] = 0;
a0_0x959809['26c62766'] = 0;
a0_0x959809['2832e31a'] = 0;
a0_0x959809['0bbd1121'] = 0;
a0_0x959809.a1f95263 = 0;
a0_0x959809['4ce64432'] = 0;
a0_0x959809['32430f45'] = 0;
a0_0x959809['2fc1e8c8'] = 0;
a0_0x959809['559c993c'] = 0;
a0_0x959809.a2f8dd5b = 0;
a0_0x959809['8aac8dce'] = 0;
a0_0x959809['51fc7a5f'] = 0;
a0_0x959809.df39f9ea = 0;
a0_0x959809.e3103c89 = 0;
a0_0x959809.fbaed09c = 0;
a0_0x959809['2e32c9a7'] = 0;
a0_0x959809['9d5f0e24'] = 0;
a0_0x959809['2184f356'] = 0;
a0_0x959809['63c37bbd'] = 0;
a0_0x959809['7068581c'] = 0;
a0_0x959809['45969e34'] = 0;
a0_0x959809.d03c32d8 = 0;
a0_0x959809['9119c593'] = 0;
a0_0x959809['5f3b0181'] = 0;
a0_0x959809.fc4ed888 = 0;
a0_0x959809['3dfee624'] = 0;
a0_0x959809.c61a4aaa = 0;
a0_0x959809['17444e50'] = 0;
a0_0x959809['5d98f3dd'] = 0;
a0_0x959809['4a779142'] = 0;
a0_0x959809['8c149619'] = 0;
a0_0x959809['995df856'] = 0;
a0_0x959809.a492ea1c = 0;
a0_0x959809.eb656309 = 0;
a0_0x959809['097a089e'] = 0;
a0_0x959809['2166a97d'] = 0;
a0_0x959809['88d71bf1'] = 0;
a0_0x959809['5e6829d3'] = 0;
a0_0x959809.d7998334 = 0;
a0_0x959809['7611327b'] = 0;
a0_0x959809['7ad8548c'] = 0;
a0_0x959809.b9df1205 = 0;
a0_0x959809['43f8b9d6'] = 0;
a0_0x959809['100fd03b'] = 0;
a0_0x959809['601f1ae3'] = 0;
a0_0x959809.c5d9a7c4 = 0;
a0_0x959809['083cb3bc'] = 0;
a0_0x959809['953d6645'] = 0;
a0_0x959809['84ee1c38'] = 0;
a0_0x959809['921275b0'] = 0;
a0_0x959809['8c57fce8'] = 0;
a0_0x959809['6f4f367b'] = 0;
a0_0x959809.f50f65dd = 0;
a0_0x959809['980378d5'] = 0;
a0_0x959809['424c631b'] = 0;
a0_0x959809.a19fd6a5 = 0;
a0_0x959809.fd4b769c = 0;
a0_0x959809['962e666f'] = 0;
a0_0x959809.ae5711b4 = 0;
a0_0x959809['2b47cd10'] = 0;
a0_0x959809['40e318fe'] = 0;
a0_0x959809.b13605d2 = 0;
a0_0x959809['8cff8e1e'] = 0;
a0_0x959809['163949cd'] = 0;
a0_0x959809['14e5d761'] = 0;
a0_0x959809.b835247a = 0;
a0_0x959809['9ce1668c'] = 0;
a0_0x959809['88fd87aa'] = 0;
a0_0x959809['167f860e'] = 0;
a0_0x959809.f4928bfe = 0;
a0_0x959809['7fdf84fd'] = 0;
a0_0x959809.fa631e44 = 0;
a0_0x959809.f0c2af23 = 0;
a0_0x959809['04073110'] = 0;
a0_0x959809.ff267a14 = 0;
a0_0x959809.d70dcbc4 = 0;
a0_0x959809.feb26a64 = 0;
a0_0x959809['355d95a2'] = 0;
a0_0x959809['029c6962'] = 0;
a0_0x959809.d8537309 = 0;
a0_0x959809.aab8ae96 = 0;
a0_0x959809['5cc588e5'] = 0;
a0_0x959809['14de3f1f'] = 0;
a0_0x959809['2a1a186a'] = 0;
a0_0x959809.adbf7456 = 0;
a0_0x959809['3543a9ae'] = 0;
a0_0x959809['14288222'] = 0;
a0_0x959809.ab2ac43a = 0;
a0_0x959809.d50aee02 = 0;
a0_0x959809.a9eaab8c = 0;
a0_0x959809.d61340a4 = 0;
a0_0x959809.f969fd84 = 0;
a0_0x959809['451031ef'] = 0;
a0_0x959809.a80c4d99 = 0;
a0_0x959809['64564f0c'] = 0;
a0_0x959809['9f608733'] = 0;
a0_0x959809['1ed977fd'] = 0;
a0_0x959809.f928b61c = 0;
a0_0x959809['2efc39cd'] = 0;
a0_0x959809.eb3f2c8e = 0;
a0_0x959809['829fd14a'] = 0;
a0_0x959809['60295eed'] = 0;
a0_0x959809['8f11d76a'] = 0;
a0_0x959809.b18c04a4 = 0;
a0_0x959809.cfd892f6 = 0;
a0_0x959809['01b23bb2'] = 0;
a0_0x959809['3b6df6e5'] = 0;
a0_0x959809.d1208a6c = 0;
a0_0x959809['8a7918c4'] = 0;
a0_0x959809['38c79b1d'] = 0;
a0_0x959809['84f967c1'] = 0;
a0_0x959809['24ad1902'] = 0;
a0_0x959809['27bba596'] = 0;
a0_0x959809['5354dd45'] = 0;
a0_0x959809['1d0ca2cb'] = 0;
a0_0x959809.cdb27def = 0;
a0_0x959809['34b76c15'] = 0;
a0_0x959809['4175e5ac'] = 0;
a0_0x959809.f3936eae = 0;
a0_0x959809.a5ba9d5e = 0;
a0_0x959809['7d8be76b'] = 0;
a0_0x959809['0018911a'] = 0;
a0_0x959809['3be34cc7'] = 0;
a0_0x959809.f55bbfde = 0;
a0_0x959809.a36e8bc3 = 0;
a0_0x959809['94c0e73b'] = 0;
a0_0x959809.a305c7fd = 0;
a0_0x959809.e74d1487 = 0;
a0_0x959809.e12a9a29 = 0;
a0_0x959809.c7e4d316 = 0;
a0_0x959809['930cafb5'] = 0;
a0_0x959809['11a09c6a'] = 0;
a0_0x959809['9d3426e4'] = 0;
a0_0x959809['9c0dd48b'] = 0;
a0_0x959809['46f1ca67'] = 0;
a0_0x959809['3c10a71a'] = 0;
a0_0x959809['510285a5'] = 0;
a0_0x959809.b657f3eb = 0;
a0_0x959809.d7fd9cb7 = 0;
a0_0x959809['785d733a'] = 0;
a0_0x959809['5622b5ca'] = 0;
a0_0x959809.d000d9b5 = 0;
a0_0x959809['281a97e8'] = 0;
a0_0x959809['325a4144'] = 0;
a0_0x959809['8824adc4'] = 0;
a0_0x959809.b3af3235 = 0;
a0_0x959809['929a43b7'] = 0;
a0_0x959809.f83aaebe = 0;
a0_0x959809['057661ea'] = 0;
a0_0x959809.bb79d679 = 0;
a0_0x959809['71b876f8'] = 0;
a0_0x959809.def1dd71 = 0;
a0_0x959809['444c4915'] = 0;
a0_0x959809.c01b7657 = 0;
a0_0x959809.b02d50d8 = 0;
a0_0x959809['21df3df7'] = 0;
a0_0x959809['05c55ac3'] = 0;
a0_0x959809['3dc7f6d2'] = 0;
a0_0x959809['52fef701'] = 0;
a0_0x959809['5d66ad28'] = 0;
a0_0x959809.a531490c = 0;
a0_0x959809['5883ad81'] = 0;
a0_0x959809['15f10ec4'] = 0;
a0_0x959809['57019ba4'] = 0;
a0_0x959809['6ccce224'] = 0;
a0_0x959809.c765107f = 0;
a0_0x959809['33c3473a'] = 0;
a0_0x959809.d88641fd = 0;
a0_0x959809.d6e90436 = 0;
a0_0x959809.f250fe88 = 0;
a0_0x959809['4b38cb9f'] = 0;
a0_0x959809.c7a0c81b = 0;
a0_0x959809['62a64667'] = 0;
a0_0x959809['8daaa507'] = 0;
a0_0x959809['9ded91ec'] = 0;
a0_0x959809['769f8e05'] = 0;
a0_0x959809['4b9aadf5'] = 0;
a0_0x959809.fd190efa = 0;
a0_0x959809['91e9be96'] = 0;
a0_0x959809['0f433a45'] = 0;
a0_0x959809.ad70e6ae = 0;
a0_0x959809['71c5eb85'] = 0;
a0_0x959809['354c8a90'] = 0;
a0_0x959809['1a84b3b1'] = 0;
a0_0x959809.c335089f = 0;
a0_0x959809.b2e44fc6 = 0;
a0_0x959809['203e3033'] = 0;
a0_0x959809.f707e1a7 = 0;
a0_0x959809.ec0cf89f = 0;
a0_0x959809['1aacaa71'] = 0;
a0_0x959809['7846da28'] = 0;
a0_0x959809['1b2c96d6'] = 0;
a0_0x959809['6814f90c'] = 0;
a0_0x959809['58b91364'] = 0;
a0_0x959809.accb1897 = 0;
a0_0x959809['94bf7d9c'] = 0;
a0_0x959809.d9390adf = 0;
a0_0x959809.b9b478cf = 0;
a0_0x959809.ba85106b = 0;
a0_0x959809.def65240 = 0;
a0_0x959809.f38f3591 = 0;
a0_0x959809.a441e56c = 0;
a0_0x959809['67470472'] = 0;
a0_0x959809.f0391520 = 0;
a0_0x959809['709efc76'] = 0;
a0_0x959809['4ad554ec'] = 0;
a0_0x959809.a9ede7b9 = 0;
a0_0x959809['108f7da5'] = 0;
a0_0x959809['517315da'] = 0;
a0_0x959809['345860fc'] = 0;
a0_0x959809.cffc4faa = 0;
a0_0x959809['6bfadbba'] = 0;
a0_0x959809.dccbaf37 = 0;
a0_0x959809['78d7847f'] = 0;
a0_0x959809['9bacaa28'] = 0;
a0_0x959809.e5c5d0d8 = 0;
a0_0x959809.cfae8ad2 = 0;
a0_0x959809['4ebc6d33'] = 0;
a0_0x959809.b4aaae64 = 0;
a0_0x959809.e1f8aec6 = 0;
a0_0x959809['7bcc5563'] = 0;
a0_0x959809['49450846'] = 0;
a0_0x959809.b2613ae1 = 0;
a0_0x959809['808c37d8'] = 0;
a0_0x959809['174e0cae'] = 0;
a0_0x959809.c9a2a80f = 0;
a0_0x959809.d9c0bc1f = 0;
a0_0x959809['60a8bfea'] = 0;
a0_0x959809.b73aedea = 0;
a0_0x959809['4aa63b00'] = 0;
a0_0x959809['4bd8cd84'] = 0;
a0_0x959809.f14342fb = 0;
a0_0x959809.ac7079f5 = 0;
a0_0x959809.f0ca57c7 = 0;
a0_0x959809.fde7036c = 0;
a0_0x959809['0fdfeb86'] = 0;
a0_0x959809.ea007210 = 0;
a0_0x959809['4f6404de'] = 0;
a0_0x959809['8d537a15'] = 0;
a0_0x959809.e1f6b9e0 = 0;
a0_0x959809['099669e8'] = 0;
a0_0x959809['1b269338'] = 0;
a0_0x959809['7851eb42'] = 0;
a0_0x959809.dcb3fb29 = 0;
a0_0x959809['05af9b18'] = 0;
a0_0x959809.e2dd3358 = 0;
a0_0x959809.b3c12e8a = 0;
a0_0x959809['15e37624'] = 0;
a0_0x959809.a8f4bf5c = 0;
a0_0x959809['8dfb22a6'] = 0;
a0_0x959809['418466d7'] = 0;
a0_0x959809.a4b61088 = 0;
a0_0x959809.a23897f5 = 0;
a0_0x959809['4c954b82'] = 0;
a0_0x959809.dc3e47bb = 0;
a0_0x959809['0b7a28ba'] = 0;
a0_0x959809['8c67ff98'] = 0;
a0_0x959809['92202d8b'] = 0;
a0_0x959809.e2a03723 = 0;
a0_0x959809.eab1e968 = 0;
a0_0x959809['0ab8e6e5'] = 0;
a0_0x959809['419ec826'] = 0;
a0_0x959809.c7d38f98 = 0;
a0_0x959809['7306087d'] = 0;
a0_0x959809.a2ac0176 = 0;
a0_0x959809.bdaa1d24 = 0;
a0_0x959809.fd638f94 = 0;
a0_0x959809.d7b4ea60 = 0;
a0_0x959809.d9ee4903 = 0;
a0_0x959809['7fc33d52'] = 0;
a0_0x959809.ae83fa9e = 0;
a0_0x959809.ba13074e = 0;
a0_0x959809['30dd822c'] = 0;
a0_0x959809['1be6b5a9'] = 0;
a0_0x959809['85019a69'] = 0;
a0_0x959809.cd92f8cb = 0;
a0_0x959809.d130b1b2 = 0;
a0_0x959809.c32b994d = 0;
a0_0x959809.ed207cc7 = 0;
a0_0x959809['88471288'] = 0;
a0_0x959809['2017fb01'] = 0;
a0_0x959809['49476f87'] = 0;
a0_0x959809['102dc357'] = 0;
a0_0x959809['8ae09853'] = 0;
a0_0x959809.c8261284 = 0;
a0_0x959809['6c192694'] = 0;
a0_0x959809['11b1ed40'] = 0;
a0_0x959809['3b3eb2e8'] = 0;
a0_0x959809.a5112fbf = 0;
a0_0x959809['898220ca'] = 0;
a0_0x959809.e5f418b0 = 0;
a0_0x959809.d472b825 = 0;
a0_0x959809['9925dde4'] = 0;
a0_0x959809['21dd096b'] = 0;
a0_0x959809['72ab884f'] = 0;
a0_0x959809['9f23feb5'] = 0;
a0_0x959809.d05580c1 = 0;
a0_0x959809.dc5d233c = 0;
a0_0x959809['7e8439ba'] = 0;
a0_0x959809.a67c8cae = 0;
a0_0x959809.ce0f18dd = 0;
a0_0x959809.c559fb44 = 0;
a0_0x959809['37427f36'] = 0;
a0_0x959809.aff98ee9 = 0;
a0_0x959809.f10391e9 = 0;
a0_0x959809['41ff925b'] = 0;
a0_0x959809.ea7d1fd3 = 0;
a0_0x959809['4f785c38'] = 0;
a0_0x959809.a088fdbc = 0;
a0_0x959809.a133ad4c = 0;
a0_0x959809['3e90d79f'] = 0;
a0_0x959809['9c5e20f5'] = 0;
a0_0x959809.d7046235 = 0;
a0_0x959809['68fa125f'] = 0;
a0_0x959809['16c50b00'] = 0;
a0_0x959809['007a2fad'] = 0;
a0_0x959809['386a9939'] = 0;
a0_0x959809.accde4c5 = 0;
a0_0x959809['6063a9ad'] = 0;
a0_0x959809.d8610839 = 0;
a0_0x959809['24597158'] = 0;
a0_0x959809.f00d101f = 0;
a0_0x959809.debd06bd = 0;
a0_0x959809['2ebb64c2'] = 0;
a0_0x959809.dc4871a8 = 0;
a0_0x959809.b0303f96 = 0;
a0_0x959809['5b81f954'] = 0;
a0_0x959809.f34f833d = 0;
a0_0x959809['937493d3'] = 0;
a0_0x959809.e4f769b3 = 0;
a0_0x959809['61099caa'] = 0;
a0_0x959809['9f9ff3ca'] = 0;
a0_0x959809['0854d5bb'] = 0;
a0_0x959809['5a93f308'] = 0;
a0_0x959809['4cb56c80'] = 0;
a0_0x959809.e325bf7e = 0;
a0_0x959809.b801851f = 0;
a0_0x959809.ba0db1ed = 0;
a0_0x959809['25f6167a'] = 0;
a0_0x959809.e5108fe6 = 0;
a0_0x959809['85c9a008'] = 0;
a0_0x959809.cf22dcae = 0;
a0_0x959809['52709979'] = 0;
a0_0x959809['050d85d2'] = 0;
a0_0x959809.bc3af3a5 = 0;
a0_0x959809['642a05b2'] = 0;
a0_0x959809['4ae56ee2'] = 0;
a0_0x959809['34135c86'] = 0;
a0_0x959809.b3a5ff4a = 0;
a0_0x959809['5a8fdc66'] = 0;
a0_0x959809['6365826a'] = 0;
a0_0x959809['8e36f4aa'] = 0;
a0_0x959809.fb0f9501 = 0;
a0_0x959809.eba0fd05 = 0;
a0_0x959809.f686eda6 = 0;
a0_0x959809.a44a3d9b = 0;
a0_0x959809.bf963771 = 0;
a0_0x959809.e50bb029 = 0;
a0_0x959809.b91b4d83 = 0;
a0_0x959809.c400f202 = 0;
a0_0x959809['136a4edd'] = 0;
a0_0x959809['124b1fa3'] = 0;
a0_0x959809.f16d81ca = 0;
a0_0x959809['92ef592b'] = 0;
a0_0x959809['0f9fd9de'] = 0;
a0_0x959809['40dfa32f'] = 0;
a0_0x959809.a2644bd3 = 0;
a0_0x959809.f65c9ca7 = 0;
a0_0x959809.ea673293 = 0;
a0_0x959809.e3c3a7d0 = 0;
a0_0x959809['33071c67'] = 0;
a0_0x959809.defea21a = 0;
a0_0x959809.efce13c1 = 0;
a0_0x959809.bb01de63 = 0;
a0_0x959809['7b7cfeec'] = 0;
a0_0x959809['9982a2a8'] = 0;
a0_0x959809.dd0f1a04 = 0;
a0_0x959809.a17f1da7 = 0;
a0_0x959809['9eee1766'] = 0;
a0_0x959809['52fa2fb0'] = 0;
a0_0x959809.a8558084 = 0;
a0_0x959809.cfdbc95a = 0;
a0_0x959809['874dbde2'] = 0;
a0_0x959809['2e8c2db6'] = 0;
a0_0x959809['0ab01d19'] = 0;
a0_0x959809.ff0cc073 = 0;
a0_0x959809['88a411e6'] = 0;
a0_0x959809.d7c40768 = 0;
a0_0x959809.be177dcd = 0;
a0_0x959809.f307379c = 0;
a0_0x959809['88e19811'] = 0;
a0_0x959809['7f90ba9a'] = 0;
a0_0x959809['50ef1e2d'] = 0;
a0_0x959809['7744f22d'] = 0;
a0_0x959809.e20a9398 = 0;
a0_0x959809.b43c1181 = 0;
a0_0x959809.ac5f2861 = 0;
a0_0x959809['224de0de'] = 0;
a0_0x959809['3978b6da'] = 0;
a0_0x959809['4932cd7d'] = 0;
a0_0x959809.eb113c47 = 0;
a0_0x959809.c27a79c9 = 0;
a0_0x959809['342fd989'] = 0;
a0_0x959809['0105f68b'] = 0;
a0_0x959809['87b1415a'] = 0;
a0_0x959809['19325c25'] = 0;
a0_0x959809.f80fd2d0 = 0;
a0_0x959809['00b8a6d3'] = 0;
a0_0x959809['0849239c'] = 0;
a0_0x959809.a2189678 = 0;
a0_0x959809['17c0ddd8'] = 0;
a0_0x959809.eeacf5ec = 0;
a0_0x959809.cc7dbe4d = 0;
a0_0x959809.ecad7c00 = 0;
a0_0x959809['0d633f5f'] = 0;
a0_0x959809['2df1bc51'] = 0;
a0_0x959809['410a6f74'] = 0;
a0_0x959809.dfc2f0a5 = 0;
a0_0x959809['18613760'] = 0;
a0_0x959809.adfa7c60 = 0;
a0_0x959809['4ccf7f97'] = 0;
a0_0x959809.e7f50eb7 = 0;
a0_0x959809.b404a150 = 0;
a0_0x959809.c471e8fc = 0;
a0_0x959809['6257d003'] = 0;
a0_0x959809['8051c694'] = 0;
a0_0x959809['5cc3e5f2'] = 0;
a0_0x959809['0c7947d3'] = 0;
a0_0x959809['190f2b01'] = 0;
a0_0x959809['799ec428'] = 0;
a0_0x959809.e51a57c5 = 0;
a0_0x959809['11b2636b'] = 0;
a0_0x959809.c5d482a3 = 0;
a0_0x959809.e88144f4 = 0;
a0_0x959809.fe07a53e = 0;
a0_0x959809['182dea26'] = 0;
a0_0x959809['5fa51e32'] = 0;
a0_0x959809['8b2d33ae'] = 0;
a0_0x959809['583d7dd7'] = 0;
a0_0x959809['1a71df13'] = 0;
a0_0x959809.d1a82a6f = 0;
a0_0x959809.db578a09 = 0;
a0_0x959809['8966191f'] = 0;
a0_0x959809['3be721db'] = 0;
a0_0x959809['82285e3a'] = 0;
a0_0x959809.d04ffaaa = 0;
a0_0x959809.ef8294a4 = 0;
a0_0x959809['7c373ccc'] = 0;
a0_0x959809['09c1739c'] = 0;
a0_0x959809.a3ac6f0d = 0;
a0_0x959809['7a03d89a'] = 0;
a0_0x959809['0fcd8031'] = 0;
a0_0x959809['60eb6b21'] = 0;
a0_0x959809['77b9aaab'] = 0;
a0_0x959809['2e0455f0'] = 0;
a0_0x959809['3c1473fb'] = 0;
a0_0x959809['5e0ff998'] = 0;
a0_0x959809['04fa75d0'] = 0;
a0_0x959809.a09660f0 = 0;
a0_0x959809.a845b333 = 0;
a0_0x959809['040d4cb6'] = 0;
a0_0x959809['2e00321a'] = 0;
a0_0x959809['29026d33'] = 0;
a0_0x959809['9f65ff0a'] = 0;
a0_0x959809.cc3214a5 = 0;
a0_0x959809['7cdf4fd1'] = 0;
a0_0x959809['42a91b88'] = 0;
a0_0x959809['38398433'] = 0;
a0_0x959809.b1ea0594 = 0;
a0_0x959809.cc10cac7 = 0;
a0_0x959809['963c0270'] = 0;
a0_0x959809['6944619e'] = 0;
a0_0x959809.a4f3170c = 0;
a0_0x959809['82355d9a'] = 0;
a0_0x959809.ce78e923 = 0;
a0_0x959809.fefd8b44 = 0;
a0_0x959809.fb045346 = 0;
a0_0x959809['73b480ba'] = 0;
a0_0x959809.c4ad625f = 0;
a0_0x959809.f3801ee1 = 0;
a0_0x959809.bd8c4b06 = 0;
a0_0x959809['319e4fa8'] = 0;
a0_0x959809.b234a2d8 = 0;
a0_0x959809['77fb7c16'] = 0;
a0_0x959809['82e8e70e'] = 0;
a0_0x959809.d6637ff3 = 0;
a0_0x959809['37d98c76'] = 0;
a0_0x959809['764d4ba1'] = 0;
a0_0x959809['4dcd9d8b'] = 0;
a0_0x959809.e8cd813e = 0;
a0_0x959809.fe5fba13 = 0;
a0_0x959809['3fa3d037'] = 0;
a0_0x959809.e34890ad = 0;
a0_0x959809['7ba0058e'] = 0;
a0_0x959809.dfe1d804 = 0;
a0_0x959809.adb7b0bf = 0;
a0_0x959809['40b19da7'] = 0;
a0_0x959809['012013ea'] = 0;
a0_0x959809['2254d7ea'] = 0;
a0_0x959809['4c89222f'] = 0;
a0_0x959809.c60f0cbe = 0;
a0_0x959809['80e5e3f1'] = 0;
a0_0x959809['0a976453'] = 0;
a0_0x959809['2bca4091'] = 0;
a0_0x959809.e7d875b7 = 0;
a0_0x959809['0a76515d'] = 0;
a0_0x959809['42b940ca'] = 0;
a0_0x959809.e6625a22 = 0;
a0_0x959809.b1d7040a = 0;
a0_0x959809['808ff639'] = 0;
a0_0x959809.d569c6c5 = 0;
a0_0x959809['9be9883b'] = 0;
a0_0x959809['24723576'] = 0;
a0_0x959809['343941d8'] = 0;
a0_0x959809['42a07001'] = 0;
a0_0x959809.b7e056dd = 0;
a0_0x959809.cd6a01b0 = 0;
a0_0x959809['84a11a0e'] = 0;
a0_0x959809.a7fdec65 = 0;
a0_0x959809.e514385a = 0;
a0_0x959809['718e9822'] = 0;
a0_0x959809.fe9929f5 = 0;
a0_0x959809['67cbf863'] = 0;
a0_0x959809['5450f963'] = 0;
a0_0x959809['620e3854'] = 0;
a0_0x959809['815bb0c9'] = 0;
a0_0x959809.c0f6468e = 0;
a0_0x959809['437ff964'] = 0;
a0_0x959809['625c40aa'] = 0;
a0_0x959809.ef328fb1 = 0;
a0_0x959809['0d0094b9'] = 0;
a0_0x959809.fcf08353 = 0;
a0_0x959809['284bbc65'] = 0;
a0_0x959809.d0616e47 = 0;
a0_0x959809['78dced69'] = 0;
a0_0x959809['93fe5fc9'] = 0;
a0_0x959809['412845be'] = 0;
a0_0x959809.a5fe9da7 = 0;
a0_0x959809['9a6c9fd6'] = 0;
a0_0x959809['28033d0f'] = 0;
a0_0x959809.acca3bfd = 0;
a0_0x959809.bdbf7249 = 0;
a0_0x959809['13e33cff'] = 0;
a0_0x959809['1fd06a69'] = 0;
a0_0x959809.d3aaa1b3 = 0;
a0_0x959809.aa0e448a = 0;
a0_0x959809['30838400'] = 0;
a0_0x959809['4717a771'] = 0;
a0_0x959809.e5aeddb6 = 0;
a0_0x959809['7dbd994a'] = 0;
a0_0x959809['996f7da6'] = 0;
a0_0x959809['475227b6'] = 0;
a0_0x959809.a3f8151f = 0;
a0_0x959809.c464a17e = 0;
a0_0x959809['97354906'] = 0;
a0_0x959809['62c864b3'] = 0;
a0_0x959809.c3fcb4fb = 0;
a0_0x959809['61f5a8f2'] = 0;
a0_0x959809.fa8a92b3 = 0;
a0_0x959809['7636b38a'] = 0;
a0_0x959809['89dc48d1'] = 0;
a0_0x959809.c3c7774a = 0;
a0_0x959809.c9515d37 = 0;
a0_0x959809.f46fcbda = 0;
a0_0x959809['76b2b2c9'] = 0;
a0_0x959809.a86d15ed = 0;
a0_0x959809['620a772b'] = 0;
a0_0x959809.d96e1d0d = 0;
a0_0x959809.aa6ba006 = 0;
a0_0x959809.b146ebbf = 0;
a0_0x959809['39bb37b2'] = 0;
a0_0x959809.b59df918 = 0;
a0_0x959809.a9e058ed = 0;
a0_0x959809.c233b1ce = 0;
a0_0x959809['465eebc8'] = 0;
a0_0x959809['9b338359'] = 0;
a0_0x959809['926fa153'] = 0;
a0_0x959809.b7e2be23 = 0;
a0_0x959809['0baabaf2'] = 0;
a0_0x959809['853c2255'] = 0;
a0_0x959809.c726c7ad = 0;
a0_0x959809['7667ed85'] = 0;
a0_0x959809['86bdde7f'] = 0;
a0_0x959809['25d1e507'] = 0;
a0_0x959809['1ac8aa86'] = 0;
a0_0x959809.d9186bfc = 0;
a0_0x959809.eae4cf84 = 0;
a0_0x959809.cb76e551 = 0;
a0_0x959809.adccca4d = 0;
a0_0x959809['89bbbff6'] = 0;
a0_0x959809['6844f010'] = 0;
a0_0x959809['7fa72c24'] = 0;
a0_0x959809.c240d138 = 0;
a0_0x959809.ef5fe9b5 = 0;
a0_0x959809.c2e1ca9c = 0;
a0_0x959809['66420100'] = 0;
a0_0x959809.ba92e075 = 0;
a0_0x959809['244f23cd'] = 0;
a0_0x959809['0f6f825a'] = 0;
a0_0x959809['3cd1b51d'] = 0;
a0_0x959809.ba6fd5c6 = 0;
a0_0x959809['91b0ebe3'] = 0;
a0_0x959809.dd4c3269 = 0;
a0_0x959809['30b331d9'] = 0;
a0_0x959809.f6c62614 = 0;
a0_0x959809['8fa6580b'] = 0;
a0_0x959809['80c5079a'] = 0;
a0_0x959809['40657758'] = 0;
a0_0x959809['41f4e009'] = 0;
a0_0x959809.e57135b7 = 0;
a0_0x959809.a78a3c7c = 0;
a0_0x959809['7e332642'] = 0;
a0_0x959809.a37b8f10 = 0;
a0_0x959809['3bb971e3'] = 0;
a0_0x959809['504a1714'] = 0;
a0_0x959809['288ce8b7'] = 0;
a0_0x959809['544cb018'] = 0;
a0_0x959809.df63e870 = 0;
a0_0x959809['2809b730'] = 0;
a0_0x959809['7ab4f3c6'] = 0;
a0_0x959809['5a74623c'] = 0;
a0_0x959809.d5bbd157 = 0;
a0_0x959809['2b3cea8f'] = 0;
a0_0x959809['269d1050'] = 0;
a0_0x959809['4ececa91'] = 0;
a0_0x959809.e1f99fc4 = 0;
a0_0x959809['25194aaf'] = 0;
a0_0x959809.fe143c52 = 0;
a0_0x959809.d6e4c951 = 0;
a0_0x959809['19fd5d4a'] = 0;
a0_0x959809.c4dee271 = 0;
a0_0x959809.b4c6c9d4 = 0;
a0_0x959809.b3b32310 = 0;
a0_0x959809['8c51670c'] = 0;
a0_0x959809['8b8e88ec'] = 0;
a0_0x959809['33397ef8'] = 0;
a0_0x959809['75a1586b'] = 0;
a0_0x959809.dee1f9fb = 0;
a0_0x959809['10d071ce'] = 0;
a0_0x959809.e1041084 = 0;
a0_0x959809['716cde4e'] = 0;
a0_0x959809['509944ef'] = 0;
a0_0x959809.ab7f346c = 0;
a0_0x959809.cb288f88 = 0;
a0_0x959809.c0abcd98 = 0;
a0_0x959809['6072656c'] = 0;
a0_0x959809['386725b3'] = 0;
a0_0x959809.f247c003 = 0;
a0_0x959809['3042413d'] = 0;
a0_0x959809.f56e8056 = 0;
a0_0x959809['805367ed'] = 0;
a0_0x959809['860cd4cb'] = 0;
a0_0x959809['07977786'] = 0;
a0_0x959809.dcc64992 = 0;
a0_0x959809.aaae8b29 = 0;
a0_0x959809['804f983b'] = 0;
a0_0x959809.ede55012 = 0;
a0_0x959809.ead17053 = 0;
a0_0x959809['46e7be3f'] = 0;
a0_0x959809['7812e6f4'] = 0;
a0_0x959809.fd53fedc = 0;
a0_0x959809['2cd8fdc2'] = 0;
a0_0x959809.cbfbcd18 = 0;
a0_0x959809['8d8d790f'] = 0;
a0_0x959809['2ac51960'] = 0;
a0_0x959809.bee3156e = 0;
a0_0x959809['67685dbc'] = 0;
a0_0x959809.c1bdd657 = 0;
a0_0x959809['7343b67c'] = 0;
a0_0x959809['948fd414'] = 0;
a0_0x959809['679d49fe'] = 0;
a0_0x959809['5435f6ef'] = 0;
a0_0x959809.f60fbdfb = 0;
a0_0x959809['88a19930'] = 0;
a0_0x959809['218dc815'] = 0;
a0_0x959809.d566c264 = 0;
a0_0x959809['2c9bf941'] = 0;
a0_0x959809['99446574'] = 0;
a0_0x959809.e9fb6867 = 0;
a0_0x959809.a208c333 = 0;
a0_0x959809.d649d1b1 = 0;
a0_0x959809.ac55dc30 = 0;
a0_0x959809.fca23604 = 0;
a0_0x959809.a2704b25 = 0;
a0_0x959809['801963e4'] = 0;
a0_0x959809['1dfa13f6'] = 0;
a0_0x959809['03550bb6'] = 0;
a0_0x959809.db94e5a3 = 0;
a0_0x959809.b40e3ac3 = 0;
a0_0x959809.dbbfc3a8 = 0;
a0_0x959809['85809570'] = 0;
a0_0x959809['086293cf'] = 0;
a0_0x959809['68ce4f5a'] = 0;
a0_0x959809['8a614579'] = 0;
a0_0x959809.d0977588 = 0;
a0_0x959809.af9aab79 = 0;
a0_0x959809['98001d68'] = 0;
a0_0x959809['7528589b'] = 0;
a0_0x959809['5ba20272'] = 0;
a0_0x959809.cacc44c0 = 0;
a0_0x959809['26295792'] = 0;
a0_0x959809['35be65c2'] = 0;
a0_0x959809['9074715e'] = 0;
;
const a0_0x4179de = { '': a0_0x959809 };
a0_0x4179de['14'] = a0_0x39d87a;
const $s = a0_0x4179de, Uo = $s[''];
for (const s in $s)
    s && Object.assign(Uo, $s[s]);
function Vl(_0x29c5d3) {
    ;
    return jo(ql(_0x29c5d3)).join('-');
}
const zl = /\uFE0F/g, Gl = '‍', ql = _0x147fb0 => _0x147fb0.indexOf(Gl) < 0 ? _0x147fb0.replace(zl, '') : _0x147fb0;
function jo(_0x4388c2) {
    const _0x4fa041 = [];
    let _0x25a150 = 0, _0x260897 = 0, _0x32ad98 = 0;
    for (; _0x32ad98 < _0x4388c2.length;) {
        _0x25a150 = _0x4388c2.charCodeAt(_0x32ad98++);
        _0x260897 ? (_0x4fa041.push((65536 + (_0x260897 - 55296 << 10) + (_0x25a150 - 56320)).toString(16)), _0x260897 = 0) : _0x25a150 > 55296 && _0x25a150 <= 56319 ? _0x260897 = _0x25a150 : _0x4fa041.push(_0x25a150.toString(16));
        ;
    }
    return _0x4fa041.length && _0x4fa041[0].length === 2 && (_0x4fa041[0] = '00' + _0x4fa041[0]), _0x4fa041;
}
function $l(_0x4470d5) {
    const _0x20add5 = _0x4470d5.match(/[\uDFFB-\uDFFF]/);
    return _0x20add5 ? 5 - (57343 - _0x20add5[0].charCodeAt(0)) : 0;
}
const Yl = new Map([[
        'FT',
        '\uD83C\uDFF4‍\u2620'
    ]]);
function e3(_0x4822e4) {
    ;
    return Yl.get(_0x4822e4) ?? String.fromCharCode(55356, 56741 + _0x4822e4.charCodeAt(0), 55356, 56741 + _0x4822e4.charCodeAt(1));
}
function t3(_0x153736) {
    ;
    return _0x153736.split('-').reduce((_0x48832f, _0x38f857) => _0x48832f + String.fromCodePoint(parseInt(_0x38f857, 16)), '');
}
function Kl(_0x340667) {
    const _0x4a9633 = Vl(_0x340667).replace(/-?fe0f/g, '');
    if (Uo.hasOwnProperty(_0x4a9633)) {
        return _0x4a9633;
    }
}
function Kf(_0x34fdf5) {
    ;
    let _0x4a108c, _0x34228d = _0x34fdf5;
    const _0x3e581b = [];
    let _0x5e25c1, _0x299baa = 0;
    for (Ur.lastIndex = 0; _0x4a108c = _0x34228d.match(Ur);) {
        if (_0x5e25c1 = _0x299baa + _0x4a108c.index, _0x4a108c[3]) {
            _0x3e581b.push({
                '_': 'messageEntityMention',
                'offset': _0x5e25c1 + _0x4a108c[1].length,
                'length': _0x4a108c[2].length + _0x4a108c[3].length
            });
        } else {
            if (_0x4a108c[4]) {
                if (M1.test(_0x4a108c[4])) {
                    _0x3e581b.push({
                        '_': 'messageEntityEmail',
                        'offset': _0x5e25c1,
                        'length': _0x4a108c[4].length
                    });
                } else {
                    let _0x3f8dea, _0x173f69 = _0x4a108c[5];
                    const _0x44ac5d = _0x4a108c[6];
                    if (_0x44ac5d) {
                        if (!_0x173f69 && (_0x44ac5d.substr(0, 4) === 'xn--' || Hl.indexOf(_0x44ac5d.toLowerCase()) !== -1) && (_0x173f69 = 'http://'), _0x173f69) {
                            const _0x25a05c = Wl(_0x4a108c[4]);
                            _0x25a05c.length !== _0x4a108c[4].length && (_0x4a108c[4] = _0x25a05c);
                            _0x3f8dea = (_0x4a108c[5] ? '' : _0x173f69) + _0x4a108c[4];
                            ;
                        }
                    } else {
                        _0x3f8dea = (_0x4a108c[5] ? '' : 'http://') + _0x4a108c[4];
                    }
                    const _0x73b495 = {
                        offset: _0x5e25c1,
                        length: _0x4a108c[4].length
                    };
                    _0x73b495['_'] = 'messageEntityUrl';
                    ;
                    ;
                    _0x3f8dea && _0x3e581b.push(_0x73b495);
                    ;
                }
            } else {
                if (_0x4a108c[7]) {
                    _0x3e581b.push({
                        '_': 'messageEntityLinebreak',
                        'offset': _0x5e25c1,
                        'length': 1
                    });
                } else {
                    if (_0x4a108c[8]) {
                        const _0x19093d = Kl(_0x4a108c[8]);
                        _0x19093d && _0x3e581b.push({
                            '_': 'messageEntityEmoji',
                            'offset': _0x5e25c1,
                            'length': _0x4a108c[8].length,
                            'unicode': _0x19093d
                        });
                    } else {
                        if (_0x4a108c[11]) {
                            _0x3e581b.push({
                                '_': 'messageEntityHashtag',
                                'offset': _0x5e25c1 + (_0x4a108c[10] ? _0x4a108c[10].length : 0),
                                'length': _0x4a108c[11].length
                            });
                        } else {
                            if (_0x4a108c[13]) {
                                _0x3e581b.push({
                                    '_': 'messageEntityBotCommand',
                                    'offset': _0x5e25c1 + (_0x4a108c[11] ? _0x4a108c[11].length : 0) + (_0x4a108c[12] ? _0x4a108c[12].length : 0),
                                    'length': 1 + _0x4a108c[13].length + (_0x4a108c[14] ? 1 + _0x4a108c[14].length : 0),
                                    'unsafe': true
                                });
                            } else {
                                if (_0x4a108c[16]) {
                                    const _0x5e9863 = _0x4a108c[16], _0x5902a2 = _0x5e9863.split(':'), _0x915949 = _0x5902a2.length, _0x10384e = _0x915949 === 3 ? +_0x5902a2[0] : 0, _0x41ea6 = +_0x5902a2[_0x915949 === 3 ? 1 : 0], _0x46b3b7 = +_0x5902a2[_0x915949 - 1];
                                    _0x3e581b.push({
                                        '_': 'messageEntityTimestamp',
                                        'offset': _0x5e25c1 + (/\D/.test(_0x4a108c[0][0]) ? 1 : 0),
                                        'length': _0x5e9863.length,
                                        'raw': _0x5e9863,
                                        'time': _0x10384e * 3600 + _0x41ea6 * 60 + _0x46b3b7
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        _0x34228d = _0x34228d.substr(_0x4a108c.index + _0x4a108c[0].length);
        _0x299baa += _0x4a108c.index + _0x4a108c[0].length;
        ;
    }
    return _0x3e581b;
}
function Jl(_0x3add40) {
    return '#' + encodeURIComponent(_0x3add40);
}
function Xn(_0x19bea2) {
    ;
    return _0x19bea2.replace(/&/g, '&amp;').replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _0x29714c => {
        const _0x16ae9f = _0x29714c.charCodeAt(0), _0x28f551 = _0x29714c.charCodeAt(1);
        return '&#' + ((_0x16ae9f - 55296) * 1024 + (_0x28f551 - 56320) + 65536) + ';';
    }).replace(/([^\#-~| |!])/g, _0xce92e1 => '&#' + _0xce92e1.charCodeAt(0) + ';').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function Xl(_0x5c7044) {
    const _0x4235a1 = '\u2801\u2802\u2804\u2808\u2810\u2820\u2840\u2880\u2803\u2805\u2806\u2809\u280A\u280C\u2811\u2812\u2814\u2818\u2821\u2822\u2824\u2828\u2830\u2841\u2842\u2844\u2848\u2850\u2860\u2881\u2882\u2884\u2888\u2890\u28A0\u28C0\u2807\u280B\u280D\u280E\u2813\u2815\u2816\u2819\u281A\u281C\u2823\u2825\u2826\u2829\u282A\u282C\u2831\u2832\u2834\u2838\u2843\u2845\u2846\u2849\u284A\u284C\u2851\u2852\u2854\u2858\u2861\u2862\u2864\u2868\u2870\u2883\u2885\u2886\u2889\u288A\u288C\u2891\u2892\u2894\u2898\u28A1\u28A2\u28A4\u28A8\u28B0\u28C1\u28C2\u28C4\u28C8\u28D0\u28E0\u280F\u2817\u281B\u281D\u281E\u2827\u282B\u282D\u282E\u2833\u2835\u2836\u2839\u283A\u283C\u2847\u284B\u284D\u284E\u2853\u2855\u2856\u2859\u285A\u285C\u2863\u2865\u2866\u2869\u286A\u286C\u2871\u2872\u2874\u2878\u2887\u288B\u288D\u288E\u2893\u2895\u2896\u2899\u289A\u289C\u28A3\u28A5\u28A6\u28A9\u28AA\u28AC\u28B1\u28B2\u28B4\u28B8\u28C3\u28C5\u28C6\u28C9\u28CA\u28CC\u28D1\u28D2\u28D4\u28D8\u28E1\u28E2\u28E4\u28E8\u28F0\u281F\u282F\u2837\u283B\u283D\u283E\u284F\u2857\u285B\u285D\u285E\u2867\u286B\u286D\u286E\u2873\u2875\u2876\u2879\u287A\u287C\u288F\u2897\u289B\u289D\u289E\u28A7\u28AB\u28AD\u28AE\u28B3\u28B5\u28B6\u28B9\u28BA\u28BC\u28C7\u28CB\u28CD\u28CE\u28D3\u28D5\u28D6\u28D9\u28DA\u28DC\u28E3\u28E5\u28E6\u28E9\u28EA\u28EC\u28F1\u28F2\u28F4\u28F8\u283F\u285F\u286F\u2877\u287B\u287D\u287E\u289F\u28AF\u28B7\u28BB\u28BD\u28BE\u28CF\u28D7\u28DB\u28DD\u28DE\u28E7\u28EB\u28ED\u28EE\u28F3\u28F5\u28F6\u28F9\u28FA\u28FC\u287F\u28BF\u28DF\u28EF\u28F7\u28FB\u28FD\u28FE\u28FF', _0x1ac51a = _0x4235a1.length, _0x4b82e3 = [];
    for (let _0x46cb07 = 0; _0x46cb07 < _0x5c7044.length; ++_0x46cb07) {
        _0x4b82e3.push(_0x4235a1[(Math.random() * 1000 | 0) % _0x1ac51a]);
    }
    return _0x4b82e3.join('');
}
function Ql(_0xa61f8d, _0x8004a3) {
    const _0x530d8c = _0xa61f8d.slice(0, _0x8004a3.offset), _0x3db59e = _0xa61f8d.slice(_0x8004a3.offset, _0x8004a3.offset + _0x8004a3.length), _0x164951 = Xl(_0x3db59e), _0x4646bd = _0xa61f8d.slice(_0x8004a3.offset + _0x8004a3.length);
    return _0xa61f8d = _0x530d8c + _0x164951 + _0x4646bd, {
        'text': _0xa61f8d,
        'entityText': _0x164951
    };
}
const Qn = {};
function Zl(_0xf5f29c) {
    const _0x30d8c7 = document.createElement('span');
    _0x30d8c7.classList.add('emoji');
    document.body.appendChild(_0x30d8c7);
    _0x30d8c7.innerText = _0xf5f29c;
    ;
    const _0x1e7800 = _0x30d8c7.offsetWidth;
    _0x30d8c7.innerText = '\u2764️';
    const _0x13e454 = _0x30d8c7.offsetWidth;
    return document.body.removeChild(_0x30d8c7), Math.abs(_0x1e7800 - _0x13e454) < 5;
}
Ni && (Qn[''] = true, [[
        '14',
        '\uD83E\uDEF1\uD83C\uDFFB'
    ]].forEach(([_0x2ec7b5, _0x191ea1]) => {
    Qn[_0x2ec7b5] = Zl(_0x191ea1);
}));
function hn(_0x573718, _0xd32ca5) {
    const _0x404f23 = {
        bubbles: true,
        cancelable: true
    };
    ;
    ;
    ;
    const _0x41a4e4 = new Event(_0xd32ca5, _0x404f23);
    _0x573718.dispatchEvent(_0x41a4e4);
}
let Zn;
document.addEventListener('mousedown', _0x207dc9 => {
    ;
    Zn = _0x207dc9.target;
    Zn?.closest('[cancel-mouse-down]') && _0x207dc9.preventDefault();
    ;
});
function e0(_0x5c4aa6) {
    ;
    if (_0x5c4aa6.isTrusted && _0x5c4aa6.type === 'click' && _0x5c4aa6.target !== Zn) {
        return true;
    }
}
const Os = Fe ? 'mousedown' : 'click';
function Ns(_0x28f00e, _0x476773, _0x384fbf = {}) {
    const _0x5ecb56 = _0x384fbf.listenerSetter ? _0x384fbf.listenerSetter.add(_0x28f00e) : _0x28f00e.addEventListener.bind(_0x28f00e), _0x14bdff = _0x384fbf.listenerSetter ? _0x384fbf.listenerSetter.removeManual.bind(_0x384fbf.listenerSetter, _0x28f00e) : _0x28f00e.removeEventListener.bind(_0x28f00e);
    if (_0x384fbf.touchMouseDown = true, _0x384fbf.cancelMouseDown && _0x28f00e.setAttribute('cancel-mouse-down', ''), Os === 'click' && !_0x384fbf.ignoreMove) {
        const _0x258aca = _0x476773;
        _0x476773 = _0x18a266 => {
            e0(_0x18a266) || _0x258aca(_0x18a266);
        };
    }
    return _0x5ecb56(Os, _0x476773, _0x384fbf), () => _0x14bdff(Os, _0x476773, _0x384fbf);
}
function t0(_0x42d7a3) {
    hn(_0x42d7a3, Os);
}
const V = '\uFEFF';
function s0(_0x327bd6) {
    const {
            url: _0xc3c67c,
            onclick: _0xa041aa
        } = on(_0x327bd6), _0x3bdeed = document.createElement('a');
    return _0x3bdeed.href = _0xc3c67c, _0xa041aa && _0x3bdeed.setAttribute('onclick', _0xa041aa + '(this)'), _0x3bdeed;
}
function Ys(_0x336ed7) {
    ;
    return !!_0x336ed7?.isConnected;
}
function f0(_0xf42dbf, _0x32263d) {
    ;
    for (let _0x4191d7 = _0xf42dbf.length, _0x5e8a8f = _0x4191d7 - 1; _0x5e8a8f >= 0; --_0x5e8a8f) {
        _0x32263d(_0xf42dbf[_0x5e8a8f], _0x5e8a8f, _0xf42dbf);
    }
}
function hr(_0xebe7be) {
    ;
    try {
        const _0x4e25d2 = _0xebe7be.play();
        _0x4e25d2 instanceof Promise && _0x4e25d2.catch(ve);
    } catch {
    }
}
class n0 {
    constructor() {
        ;
        this.observer = new IntersectionObserver(_0x430768 => {
            ;
            for (const _0x3d4e3f of _0x430768) {
                const _0x1b7160 = _0x3d4e3f.target;
                for (const _0x2b4b97 in this.byGroups) {
                    if (this.intersectionLockedGroups[_0x2b4b97]) {
                        continue;
                    }
                    const _0x659789 = this.byGroups[_0x2b4b97].find(_0x4a01b1 => _0x4a01b1.el === _0x1b7160);
                    if (_0x659789) {
                        if (_0x3d4e3f.isIntersecting) {
                            this.visible.add(_0x659789);
                            this.checkAnimation(_0x659789, false);
                            ;
                        } else {
                            this.visible.delete(_0x659789);
                            this.checkAnimation(_0x659789, true);
                            ;
                            const _0x114ebf = _0x659789.animation;
                            _0x659789.type === 'lottie' && _0x114ebf.clearCache();
                        }
                        break;
                    }
                }
            }
        });
        this.visible = new Set();
        this.overrideIdleGroups = new Set();
        this.byGroups = {};
        this.byPlayer = new Map();
        this.lockedGroups = {};
        this.onlyOnePlayableGroup = '';
        this.intersectionLockedGroups = {};
        this.videosLocked = false;
        as.addEventListener('change', _0x4dd44e => {
            ;
            this.checkAnimations2(_0x4dd44e);
        });
        ;
    }
    ['toggleMediaPause'](_0x75e9fd) {
        ;
        _0x75e9fd ? this.videosLocked && (this.videosLocked = false, this.checkAnimations2()) : (this.videosLocked = true, this.checkAnimations2());
    }
    ['setOverrideIdleGroup'](_0xb3937f, _0x256409) {
        ;
        _0x256409 ? this.overrideIdleGroups.add(_0xb3937f) : this.overrideIdleGroups.delete(_0xb3937f);
    }
    ['getAnimations'](_0x1a34ee) {
        const _0x5aa3ee = [];
        for (const _0xc01d83 in this.byGroups)
            for (const _0x41957a of this.byGroups[_0xc01d83])
                _0x41957a.el === _0x1a34ee && _0x5aa3ee.push(_0x41957a);
        return _0x5aa3ee;
    }
    ['removeAnimation'](_0x312edc) {
        const {
            el: _0x1e4093,
            animation: _0x2a43b3
        } = _0x312edc;
        _0x312edc.controlled !== true && _0x312edc.type !== 'video' && _0x2a43b3.remove();
        const _0x363b34 = this.byGroups[_0x312edc.group];
        _0x363b34 && (xe(_0x363b34, _0x312edc), _0x363b34.length || delete this.byGroups[_0x312edc.group]);
        this.observer.unobserve(_0x1e4093);
        this.visible.delete(_0x312edc);
        this.byPlayer.delete(_0x2a43b3);
        ;
    }
    ['removeAnimationByPlayer'](_0x371912) {
        const _0x175206 = this.byPlayer.get(_0x371912);
        _0x175206 && this.removeAnimation(_0x175206);
    }
    ['addAnimation'](_0x512d46) {
        ;
        var _0x10a093;
        const {
            animation: _0xf5e77c,
            group: _0x38c0ce = '',
            observeElement: _0x340698,
            controlled: _0x2f00db,
            liteModeKey: _0x5cc981,
            type: _0x709eb,
            locked: _0x400b9e
        } = _0x512d46;
        if (_0x38c0ce === 'none' || this.byPlayer.has(_0xf5e77c)) {
            return;
        }
        const _0x54d0e1 = {
            el: _0x340698,
            animation: _0xf5e77c,
            group: _0x38c0ce,
            controlled: _0x2f00db,
            liteModeKey: _0x5cc981,
            type: _0x709eb,
            locked: _0x400b9e
        };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        const _0x53c9f4 = _0x54d0e1;
        _0x2f00db && typeof _0x2f00db != 'boolean' && _0x2f00db.onClean(() => {
            ;
            this.removeAnimationByPlayer(_0xf5e77c);
        });
        _0x53c9f4.type === 'lottie' && !I.settings.stickers.loop && _0xf5e77c.loop && (_0xf5e77c.loop = I.settings.stickers.loop);
        ((_0x10a093 = this.byGroups)[_0x38c0ce] ?? (_0x10a093[_0x38c0ce] = [])).push(_0x53c9f4);
        this.observer.observe(_0x53c9f4.el);
        this.byPlayer.set(_0xf5e77c, _0x53c9f4);
        ;
    }
    ['checkAnimations'](_0x309f21, _0x1c4384, _0x19050a, _0x3beb53) {
        ;
        if (_0x1c4384 !== void 0 && !this.byGroups[_0x1c4384]) {
            return;
        }
        const _0x543a30 = _0x1c4384 !== void 0 ? [_0x1c4384] : Object.keys(this.byGroups);
        for (const _0x4e34ad of _0x543a30) {
            if (_0x3beb53 && this.intersectionLockedGroups[_0x4e34ad]) {
                continue;
            }
            const _0x468865 = this.byGroups[_0x4e34ad];
            f0(_0x468865, _0x198689 => {
                ;
                this.checkAnimation(_0x198689, _0x309f21, _0x19050a);
            });
        }
    }
    ['checkAnimations2'](_0x500821) {
        ;
        this.checkAnimations(_0x500821, void 0, void 0, true);
    }
    ['checkAnimation'](_0x41b7bf, _0x5d9639, _0x4be4eb) {
        const {
            el: _0x2fb329,
            animation: _0x28918a,
            group: _0x415d97,
            locked: _0x1c8a85
        } = _0x41b7bf;
        if (!_0x1c8a85) {
            if (_0x4be4eb || !this.lockedGroups[_0x415d97] && !Ys(_0x2fb329)) {
                (!_0x41b7bf.controlled || _0x4be4eb) && this.removeAnimation(_0x41b7bf);
                return;
            }
            _0x5d9639 || this.onlyOnePlayableGroup && this.onlyOnePlayableGroup !== _0x415d97 || _0x41b7bf.type === 'video' && this.videosLocked ? _0x28918a.paused || _0x28918a.pause() : _0x28918a.paused && this.visible.has(_0x41b7bf) && _0x28918a.autoplay && (!this.onlyOnePlayableGroup || this.onlyOnePlayableGroup === _0x415d97) && (!as.isIdle || this.overrideIdleGroups.has(_0x41b7bf.group)) && hr(_0x28918a);
        }
    }
    ['getOnlyOnePlayableGroup']() {
        ;
        return this.onlyOnePlayableGroup;
    }
    ['setOnlyOnePlayableGroup'](_0x2aaf48 = '') {
        ;
        this.onlyOnePlayableGroup = _0x2aaf48;
    }
    ['lockGroup'](_0x21e0fa) {
        ;
        this.lockedGroups[_0x21e0fa] = true;
    }
    ['unlockGroup'](_0x3515ec) {
        ;
        delete this.lockedGroups[_0x3515ec];
        this.checkAnimations(void 0, _0x3515ec);
        ;
    }
    ['refreshGroup'](_0x5b236f) {
        const _0x92080c = this.byGroups[_0x5b236f];
        _0x92080c?.length && (_0x92080c.forEach(_0x1324d3 => {
            ;
            this.observer.unobserve(_0x1324d3.el);
        }), Oe(() => {
            _0x92080c.forEach(_0x30913d => {
                ;
                this.observer.observe(_0x30913d.el);
            });
        }));
    }
    ['lockIntersectionGroup'](_0x204001) {
        ;
        this.intersectionLockedGroups[_0x204001] = true;
    }
    ['unlockIntersectionGroup'](_0x434d07) {
        ;
        delete this.intersectionLockedGroups[_0x434d07];
        this.refreshGroup(_0x434d07);
        ;
    }
    ['toggleIntersectionGroup'](_0x48bc14, _0x34e54b) {
        ;
        _0x34e54b ? this.lockIntersectionGroup(_0x48bc14) : this.unlockIntersectionGroup(_0x48bc14);
    }
    ['setAutoplay'](_0x24a304, _0x596108) {
        ;
        let _0x5f2309 = false;
        return this.byPlayer.forEach((_0x215951, _0x35d12b) => {
            ;
            if (_0x215951.liteModeKey === _0x596108) {
                _0x5f2309 = true;
                _0x35d12b.autoplay = _0x24a304 ? _0x35d12b['_autoplay'] : false;
                _0x35d12b.loop = _0x24a304 ? I.settings.stickers.loop && _0x35d12b['_loop'] : false;
            }
        }), _0x5f2309;
    }
    ['setLoop'](_0xd3f604) {
        ;
        let _0x58410c = false;
        return this.byPlayer.forEach((_0x3545ea, _0x266eeb) => {
            ;
            _0x266eeb['_loop'] && _0x266eeb.loop !== _0xd3f604 && (_0x3545ea.type === 'lottie' || _0x3545ea.type === 'video') && (_0x58410c = true, _0x266eeb.loop = _0xd3f604, _0x266eeb.autoplay = _0x266eeb['_autoplay']);
        }), _0x58410c;
    }
    ['toggleItemLock'](_0x5ae381, _0x316e26) {
        ;
        _0x5ae381.locked = _0x316e26;
    }
}
const pe = new n0();
N && (N.animationIntersector = pe);
class i0 {
    constructor(_0x24a901, _0x479552) {
        ;
        this.items = new Map();
        this.locked = false;
        this.observer = new IntersectionObserver(_0x1d9569 => {
            ;
            if (this.locked) {
                return;
            }
            const _0xe8c720 = [];
            _0x1d9569.forEach((_0x2499bf, _0x146949) => {
                const _0x4393ac = _0x2499bf.target;
                if (this.items.get(_0x4393ac) === _0x2499bf.isIntersecting) {
                    return;
                }
                this.items.set(_0x4393ac, _0x2499bf.isIntersecting);
                const _0x34f540 = {
                    target: _0x4393ac,
                    visible: _0x2499bf.isIntersecting,
                    entry: _0x2499bf,
                    index: _0x146949
                };
                ;
                ;
                ;
                ;
                ;
                const _0x17b694 = _0x34f540;
                _0xe8c720.push(_0x17b694);
            });
            _0xe8c720.forEach(_0x3be6f5 => {
                _0x24a901(_0x3be6f5);
            });
            ;
        }, _0x479552);
        ;
    }
    ['getVisible']() {
        const _0x25096d = [];
        return this.items.forEach((_0xe724de, _0x179478) => {
            _0xe724de && _0x25096d.push(_0x179478);
        }), _0x25096d;
    }
    ['clearVisible']() {
        const _0x5ad4c2 = this.getVisible();
        for (const _0x537646 of _0x5ad4c2)
            this.items.set(_0x537646, false);
    }
    ['isVisible'](_0x391c74) {
        ;
        return !!this.items.get(_0x391c74);
    }
    ['disconnect']() {
        ;
        this.observer.disconnect();
        this.items.clear();
        ;
    }
    ['refresh']() {
        ;
        this.observer.disconnect();
        const _0xa22ffa = [...this.items.keys()];
        for (const _0x34e687 of _0xa22ffa)
            this.observer.observe(_0x34e687);
    }
    ['refreshVisible']() {
        const _0x10fe45 = this.getVisible();
        for (const _0x2d3a82 of _0x10fe45)
            this.observer.unobserve(_0x2d3a82);
        for (const _0x35cea4 of _0x10fe45)
            this.observer.observe(_0x35cea4);
    }
    ['observe'](_0x22b59b) {
        ;
        this.items.set(_0x22b59b, false);
        this.observer.observe(_0x22b59b);
        ;
    }
    ['unobserve'](_0x600803) {
        ;
        this.observer.unobserve(_0x600803);
        this.items.delete(_0x600803);
        ;
    }
    ['unlock']() {
        ;
        this.locked = false;
    }
    ['unlockAndRefresh']() {
        ;
        this.unlock();
        this.refresh();
        ;
    }
    ['lock']() {
        ;
        this.locked = true;
    }
}
function Ho(_0x915c6d, _0x4cbb07) {
    const _0x79905b = [];
    let _0x6fb926 = -1;
    for (; (_0x6fb926 = _0x915c6d.findIndex(_0x4cbb07)) !== -1;) {
        _0x79905b.push(_0x915c6d.splice(_0x6fb926, 1)[0]);
    }
    return _0x79905b;
}
function r0(_0x12d461, _0x575919) {
    const _0x4405ee = _0x12d461.findIndex(_0x575919);
    return _0x4405ee !== -1 ? _0x12d461.splice(_0x4405ee, 1)[0] : void 0;
}
function Wo(_0x4dcf05, _0x360e77, _0x3ae9b3 = true) {
    let _0x166baa = null, _0x8914a4, _0x1644ca;
    const _0x3b26c2 = () => {
            clearInterval(_0x166baa);
            _0x166baa = null;
            ;
        }, _0x48e2d8 = (..._0x2c76f4) => {
            ;
            _0x8914a4 = true;
            _0x1644ca = _0x2c76f4;
            _0x166baa || (_0x3ae9b3 && (_0x8914a4 = false, _0x4dcf05(..._0x1644ca)), _0x166baa = setInterval(() => {
                ;
                if (!_0x8914a4) {
                    _0x3b26c2();
                    return;
                }
                _0x8914a4 = false;
                _0x4dcf05(..._0x1644ca);
                ;
            }, _0x360e77));
            ;
        };
    return _0x48e2d8.clear = _0x3b26c2, _0x48e2d8;
}
const a0 = 8, o0 = new Set([
        'NO_ENTRY_FOUND',
        'STORAGE_OFFLINE',
        'MIDDLEWARE',
        'NO_AUTO_DOWNLOAD'
    ]);
class c0 {
    constructor(_0x2c69ad = a0) {
        ;
        this.parallelLimit = _0x2c69ad;
        this.queueId = 0;
        this.queue = [];
        this.inProcess = new Set();
        this.lockPromise = null;
        this.unlockResolve = null;
        this.log = Q('LL', ef.Error);
        this.processQueue = Wo(() => this['_processQueue'](), 8, false);
        ;
    }
    ['clear']() {
        ;
        this.inProcess.clear();
        this.queue.length = 0;
        ;
    }
    ['lock']() {
        ;
        this.lockPromise || (this.lockPromise = new Promise((_0x34bcbe, _0x339165) => {
            ;
            this.unlockResolve = _0x34bcbe;
        }));
    }
    ['unlock']() {
        ;
        this.unlockResolve && (this.unlockResolve(), this.unlockResolve = this.lockPromise = null, this.processQueue());
    }
    async ['processItem'](_0x4a3931) {
        ;
        if (!this.lockPromise) {
            this.inProcess.add(_0x4a3931);
            try {
                await this.loadItem(_0x4a3931);
            } catch (_0x2e243e) {
                o0.has(_0x2e243e?.type) || this.log.error('loadMediaQueue error:', _0x2e243e);
            }
            this.inProcess.delete(_0x4a3931);
            this.processQueue();
            ;
        }
    }
    ['loadItem'](_0x4f0e45) {
        return _0x4f0e45.load();
    }
    ['getItem']() {
        ;
        return this.queue.shift();
    }
    ['addElement'](_0x2606fc, _0x56e491) {
        ;
        this.queue[_0x2606fc](_0x56e491);
        this.processQueue();
        ;
    }
    ['_processQueue'](_0x272c8c) {
        ;
        if (!(!this.queue.length || this.lockPromise || this.parallelLimit > 0 && this.inProcess.size >= this.parallelLimit)) {
            do {
                if (_0x272c8c ? xe(this.queue, _0x272c8c) : _0x272c8c = this.getItem(), _0x272c8c) {
                    this.processItem(_0x272c8c);
                } else {
                    break;
                }
                _0x272c8c = null;
            } while (this.inProcess.size < this.parallelLimit && this.queue.length);
        }
    }
    ['push'](_0x396c47) {
        ;
        this.addElement('push', _0x396c47);
    }
    ['unshift'](_0x120daa) {
        ;
        this.addElement('unshift', _0x120daa);
    }
}
class d0 extends c0 {
    constructor(_0x5a0eac) {
        ;
        super(_0x5a0eac);
        this.queue = [];
        this.inProcess = new Set();
        ;
    }
    ['lock']() {
        ;
        super.lock();
        this.intersector.lock();
        ;
    }
    ['unlock']() {
        ;
        super.unlock();
        this.intersector.unlock();
        ;
    }
    ['unlockAndRefresh']() {
        ;
        super.unlock();
        this.intersector.unlockAndRefresh();
        ;
    }
    ['clear']() {
        ;
        super.clear();
        this.intersector.disconnect();
        ;
    }
    ['refresh']() {
        ;
        this.intersector.refresh();
    }
    ['loadItem'](_0x2bda77) {
        ;
        return _0x2bda77.load(_0x2bda77.div);
    }
    ['addElement'](_0x49d425, _0xb788eb) {
        ;
        if (this.queue.find(_0x43c930 => _0x43c930.div === _0xb788eb.div && _0x43c930.load === _0xb788eb.load)) {
            return false;
        }
        for (const _0xf909f6 of this.inProcess)
            if (_0xf909f6.div === _0xb788eb.div && _0xf909f6.load === _0xb788eb.load) {
                return false;
            }
        return this.queue[_0x49d425](_0xb788eb), true;
    }
    ['setProcessQueueTimeout']() {
        ;
        this.intersectorTimeout ?? (this.intersectorTimeout = window.setTimeout(() => {
            ;
            this.intersectorTimeout = void 0;
            this.processQueue();
            ;
        }, 0));
    }
    ['push'](_0x4a3de3) {
        ;
        super.push(_0x4a3de3);
    }
    ['unshift'](_0x3fbe56) {
        ;
        super.unshift(_0x3fbe56);
    }
    ['delete'](_0x5d3849) {
        ;
        Ho(this.queue, _0x7d2fbb => _0x7d2fbb.div === _0x5d3849.div);
        this.unobserve(_0x5d3849);
        ;
    }
    ['observe'](_0x1dda4b) {
        ;
        this.intersector.observe(_0x1dda4b.div);
    }
    ['unobserve'](_0x3c80bd) {
        ;
        this.intersector.unobserve(_0x3c80bd.div);
    }
}
const lt = new je(), ei = 'start', ti = 'end';
let Jf = false, nt = q(), Ff = 0;
nt.resolve();
function Vo(_0x9a555a, _0x32eab0) {
    ;
    Jf || (nt = q(), lt.dispatchEvent(ei), Jf = true);
    ++Ff;
    ;
    const _0x1b378c = [
        _0x32eab0 !== void 0 ? ft(_0x32eab0) : void 0,
        _0x9a555a.finally(() => {
        })
    ].filter(Boolean);
    performance.now();
    const _0x11ff60 = nt;
    return Promise.race(_0x1b378c).then(() => {
        ;
        nt !== _0x11ff60 || nt.isFulfilled || (--Ff, Ff <= 0 && zo());
    }), nt;
}
window.dispatchHeavyAnimationEvent = Vo;
function zo() {
    ;
    nt.isFulfilled || (Jf = false, Ff = 0, lt.dispatchEvent(ti), nt.resolve());
}
function s3() {
    zo();
}
function Go() {
    return nt;
}
function qo(_0x320a5d, _0x246aa9, _0x52cd05) {
    ;
    Jf && _0x320a5d();
    const _0x3207d4 = _0x52cd05 ? _0x52cd05.add(lt) : lt.addEventListener.bind(lt), _0x186c12 = _0x52cd05 ? _0x52cd05.removeManual.bind(_0x52cd05, lt) : lt.removeEventListener.bind(lt);
    return _0x3207d4(ei, _0x320a5d), _0x3207d4(ti, _0x246aa9), () => {
        _0x186c12(ti, _0x246aa9);
        _0x186c12(ei, _0x320a5d);
        ;
    };
}
class l0 extends d0 {
    constructor(_0x51470a, _0x221132) {
        ;
        super(_0x51470a);
        this.onVisibilityChange = ({
            target: _0x17a7cd,
            visible: _0x408f4c
        }) => {
            ;
            Ho(this.queue, _0x362f3a => _0x362f3a.div === _0x17a7cd).forEach(_0x68de9a => {
                ;
                _0x408f4c && (_0x68de9a.wasSeen = true);
                _0x68de9a.visible = _0x408f4c;
                ;
                const _0x4932dd = this.queue.findIndex(_0x412f38 => !_0x412f38.visible);
                this.queue.splice(Math.max(0, _0x4932dd), 0, _0x68de9a);
            });
            this.setProcessQueueTimeout();
            ;
        };
        this.intersector = new i0(this.onVisibilityChange);
        !_0x221132 && qo(() => {
            ;
            this.lock();
        }, () => {
            ;
            this.unlockAndRefresh();
        });
        ;
    }
    ['getItem']() {
        ;
        return r0(this.queue, _0x325e81 => _0x325e81.wasSeen);
    }
    async ['processItem'](_0x4cac90) {
        ;
        await super.processItem(_0x4cac90);
        this.intersector.unobserve(_0x4cac90.div);
        ;
    }
    ['addElement'](_0x1b7557, _0x3ead2b) {
        ;
        return super.addElement(_0x1b7557, _0x3ead2b) ? (this.observe(_0x3ead2b), _0x3ead2b.wasSeen ?? (_0x3ead2b.wasSeen = false), true) : false;
    }
    ['setAllSeen']() {
        ;
        this.queue.forEach(_0x677b5e => {
            ;
            _0x677b5e.wasSeen = true;
        });
        this.setProcessQueueTimeout();
        ;
    }
}
function u0(_0xa0efea) {
    const _0x704e6b = 'AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,';
    let _0x265f48 = 'M';
    for (let _0x57453c = 0, _0x59b3d7 = _0xa0efea.length; _0x57453c < _0x59b3d7; ++_0x57453c) {
        const _0x3fb752 = _0xa0efea[_0x57453c];
        _0x3fb752 >= 192 ? _0x265f48 += _0x704e6b[_0x3fb752 - 128 - 64] : (_0x3fb752 >= 128 ? _0x265f48 += ',' : _0x3fb752 >= 64 && (_0x265f48 += '-'), _0x265f48 += '' + (_0x3fb752 & 63));
    }
    return _0x265f48 += 'z', _0x265f48;
}
function h0(_0x349766, _0x274860 = 512, _0x3d2771 = 512) {
    const _0xebbc6 = u0(_0x349766), _0x136438 = 'http://www.w3.org/2000/svg', _0x2517f2 = document.createElementNS(_0x136438, 'svg');
    _0x2517f2.setAttributeNS(null, 'viewBox', '0 0 ' + _0x274860 + ' ' + _0x3d2771);
    const _0x4769dd = document.createElementNS(_0x136438, 'path');
    return _0x4769dd.setAttributeNS(null, 'd', _0xebbc6), _0x2517f2.append(_0x4769dd), {
        'svg': _0x2517f2,
        'path': _0x4769dd
    };
}
let Vt, As;
function m0(_0x118b76) {
    ;
    Vt || (Vt = document.createElement('canvas'), As = Vt.getContext('2d'));
    const _0x311ac0 = _0x118b76.getContext('2d'), _0x84472c = 20 * (_0x118b76.dpr ?? 1), _0x494b9e = _0x84472c, _0x231f95 = _0x84472c, _0x345cb4 = (_0x118b76.width - _0x494b9e) / 2, _0x1b958b = _0x118b76.height - _0x231f95 - 0, _0x4d5861 = _0x311ac0.getImageData(_0x345cb4, _0x1b958b, _0x494b9e, _0x231f95).data;
    let _0x25d403 = 0, _0x4380d9 = 0, _0x35e29d = 0, _0x3c481e = 0;
    for (let _0x399fc4 = 0; _0x399fc4 < _0x4d5861.length; _0x399fc4 += 4) {
        _0x25d403 += _0x4d5861[_0x399fc4];
        _0x4380d9 += _0x4d5861[_0x399fc4 + 1];
        _0x35e29d += _0x4d5861[_0x399fc4 + 2];
        _0x3c481e += _0x4d5861[_0x399fc4 + 3];
        ;
    }
    Vt.width = Vt.height = _0x84472c;
    const _0x1a7516 = new Uint8ClampedArray([
            _0x25d403 * 255 / _0x3c481e,
            _0x4380d9 * 255 / _0x3c481e,
            _0x35e29d * 255 / _0x3c481e,
            255
        ]), _0x5eb521 = 'rgba(' + _0x1a7516[0] + ', ' + _0x1a7516[1] + ', ' + _0x1a7516[2] + ', ' + _0x1a7516[3] + ')';
    return As.fillStyle = _0x5eb521, As.fillRect(0, 0, _0x84472c, _0x84472c), As.fillStyle = 'rgba(112, 117, 121, 0.3)', As.fillRect(0, 0, _0x84472c, _0x84472c), Vt.toDataURL('image/jpeg');
}
const g0 = 'application/x-mpegurl';
Q('HLS');
Q('SW-HLS');
;
function f3(_0x21ee95) {
    ;
    return _0x21ee95?.mime_type === g0;
}
const p0 = new WeakMap();
async function b0({
    video: _0x4fe20f,
    src: _0x547d35,
    middleware: _0x3015b2
}) {
    const _0x10fab6 = {
        debug: qa,
        startLevel: 0,
        testBandwidth: false,
        backBufferLength: 30,
        maxBufferLength: 60,
        maxMaxBufferLength: 60,
        maxFragLookUpTolerance: 0.001,
        maxBufferHole: 1,
        nudgeMaxRetry: 10000
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const {default: _0x4fd06a} = await ze(() => import('./i025q2489gvg.js'), [], import.meta.url), _0x229473 = new _0x4fd06a(_0x10fab6);
    p0.set(_0x4fe20f, _0x229473);
    _0x229473.loadSource(_0x547d35);
    _0x229473.attachMedia(_0x4fe20f);
    _0x3015b2?.onDestroy(() => {
        ;
        _0x229473.destroy();
    });
    ;
}
function Xr(_0x390801, _0x1e4d05) {
    ;
    _0x390801.includes('stream/') && re.serviceMessagePort.invokeVoid('toggleStreamInUse', {
        'url': _0x390801,
        'inUse': _0x1e4d05,
        'accountNumber': Ve()
    });
}
function y0({
    pip: _0x2aa7a8,
    middleware: _0x573d4e
}) {
    const _0xbaf319 = document.createElement('video');
    _0x2aa7a8 || (_0xbaf319.disablePictureInPicture = true);
    _0xbaf319.setAttribute('playsinline', 'true');
    _0x573d4e?.onDestroy(async () => {
        ;
        await Go();
        _0xbaf319.src = '';
        _0xbaf319.load();
        ;
    });
    ;
    let _0x5fb198 = _0xbaf319.src;
    return Object.defineProperty(_0xbaf319, 'src', {
        'get': () => _0x5fb198,
        'set': _0x239ab5 => {
            ;
            Xr(_0x5fb198, false);
            Xr(_0x239ab5, true);
            _0x5fb198 = _0x239ab5;
            _0x239ab5.startsWith('hls/') ? b0({
                'video': _0xbaf319,
                'src': _0x239ab5,
                'middleware': _0x573d4e
            }) : _0xbaf319.setAttribute('src', _0x239ab5);
            ;
        }
    }), _0xbaf319;
}
const v0 = 'DECODER_ERROR_NOT_SUPPORTED: Audio configuration specified 2 channels, but FFmpeg thinks the file contains 1 channels';
function E0(_0x21f850) {
    return _0x21f850.code === 4 && _0x21f850.message === v0;
}
function w0(_0x1bbf79) {
    ;
    try {
        const _0x21ee68 = _0x1bbf79.target, _0x519a37 = _0x21ee68.error;
        if (!_0x519a37 || _0x519a37.message.includes('URL safety check')) {
            return true;
        }
        const _0x3df1bf = E0(_0x519a37);
        if (_0x3df1bf && !_0x21ee68.triedFixingChromeBug) {
            let _0x20c0a7;
            const _0x344db0 = _0x21ee68.src;
            return _0x344db0.includes('stream/') ? _0x20c0a7 = _0x344db0 + '?_crbug1250841' : _0x20c0a7 = I.managers.appDocsManager.fixChromiumMp4(_0x344db0), at(_0x20c0a7, _0x2c64ac => {
                ;
                _0x21ee68.triedFixingChromeBug = true;
                if (_0x21ee68.src !== _0x2c64ac) {
                    _0x21ee68.src = _0x2c64ac;
                    _0x21ee68.load();
                }
                ;
            }), true;
        }
    } catch {
    }
    return false;
}
function $o(_0x1bcb76, _0x279355 = _0x1bcb76.HAVE_METADATA, _0x4bfa2a) {
    ;
    return new Promise((_0x70ff8a, _0x31c330) => {
        ;
        if (_0x1bcb76.readyState >= _0x279355) {
            _0x70ff8a();
            return;
        }
        const _0xfbe2e8 = ps && !_0x4bfa2a ? 'loadeddata' : 'canplay', _0x4feebe = () => {
                ;
                _0x1bcb76.removeEventListener('error', _0x5e09f8);
                _0x70ff8a();
                ;
            }, _0x5e09f8 = _0x43364d => {
                ;
                w0(_0x43364d) || (_0x1bcb76.removeEventListener(_0xfbe2e8, _0x4feebe), _0x1bcb76.removeEventListener('error', _0x5e09f8), _0x31c330(_0x1bcb76.error));
            }, _0x3bc498 = { once: true };
        ;
        _0x1bcb76.addEventListener(_0xfbe2e8, _0x4feebe, _0x3bc498);
        _0x1bcb76.addEventListener('error', _0x5e09f8);
        ;
        ;
    });
}
const Qr = {}, Zr = (_0x55b732, _0x43d5ef) => {
        ;
        _0x55b732 instanceof HTMLImageElement || _0x55b732 instanceof HTMLVideoElement ? _0x55b732.src = _0x43d5ef : _0x55b732 instanceof SVGImageElement ? _0x55b732.setAttributeNS(null, 'href', _0x43d5ef) : _0x55b732.style.backgroundImage = 'url(' + _0x43d5ef + ')';
    };
function Pf(_0x48aa73, _0x4e13f6, _0x3799f4, _0xd40bdf, _0x408d23) {
    ;
    if (_0x408d23 && (_0xd40bdf = false), _0xd40bdf ?? (_0xd40bdf = _0x408d23 === void 0), !_0x4e13f6) {
        _0x3799f4?.();
        return;
    }
    const _0x4875a1 = _0x48aa73 instanceof HTMLVideoElement;
    if (Qr[_0x4e13f6] && _0xd40bdf || _0x4875a1) {
        if (_0x48aa73 && Zr(_0x48aa73, _0x4e13f6), _0x3799f4) {
            if (_0x4875a1) {
                return $o(_0x48aa73).then(_0x3799f4);
            }
            _0x3799f4?.();
        }
    } else {
        const _0x540b51 = _0x48aa73 instanceof HTMLImageElement, _0x217fd7 = _0x540b51 ? _0x48aa73 : new Image(), _0x3c8bb3 = () => {
                !_0x540b51 && _0x48aa73 && Zr(_0x48aa73, _0x4e13f6);
                Qr[_0x4e13f6] = true;
                _0x408d23?.(_0x217fd7);
                _0x3799f4?.();
                ;
            }, _0x27c724 = _0x572666 => {
                ;
                _0x572666.message.includes('cannot be decoded');
                _0x3799f4?.();
                ;
            };
        return _0x217fd7.decoding = 'async', _0x217fd7.src = _0x4e13f6, _0x217fd7.decode().then(_0x3c8bb3, _0x27c724);
    }
}
function Yo(_0x50ddc5, _0x9baa9, _0x708b5d, _0x191b69) {
    return new Promise(_0x4c0984 => {
        Pf(_0x50ddc5, _0x9baa9, _0x4c0984, _0x708b5d, _0x191b69);
    });
}
function Ko(_0x1bf3f0) {
    const _0x36c047 = _0x1bf3f0.length, _0xa34007 = new Uint8Array(Math.ceil(_0x36c047 / 2));
    let _0x29112f = 0;
    _0x36c047 % 2 && (_0xa34007[_0x29112f++] = parseInt(_0x1bf3f0.charAt(0), 16));
    for (let _0x45bf1f = _0x29112f; _0x45bf1f < _0x36c047; _0x45bf1f += 2) {
        _0xa34007[_0x29112f++] = parseInt(_0x1bf3f0.substr(_0x45bf1f, 2), 16);
    }
    return _0xa34007;
}
function D0(_0xff18dc, _0x58ddea = 'image/jpeg') {
    ;
    return 'data:' + _0x58ddea + ';base64,' + btoa(String.fromCharCode(..._0xff18dc));
}
const S0 = 'ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00', A0 = Ko(S0), C0 = Ko('ffd9');
function n3(_0x3d002b) {
    const _0x4cb0f0 = 'base64,', _0x444082 = _0x3d002b.slice(_0x3d002b.indexOf(_0x4cb0f0) + _0x4cb0f0.length), _0x1b34d8 = [...atob(_0x444082)].map(_0x340c45 => _0x340c45.charCodeAt(0));
    return new Uint8Array(_0x1b34d8);
}
function k0(_0xa8cce2, _0x27fd61 = false) {
    ;
    let _0xe91fd2;
    !_0x27fd61 && _0xa8cce2[0] === 1 ? (_0xe91fd2 = new Uint8Array(A0.concat(Array.from(_0xa8cce2.slice(3)), C0)), _0xe91fd2[164] = _0xa8cce2[1], _0xe91fd2[166] = _0xa8cce2[2]) : _0xe91fd2 = ho(_0xa8cce2);
    let _0x2a0edc;
    return _0x27fd61 ? _0x2a0edc = be ? 'image/png' : 'image/webp' : _0x2a0edc = 'image/jpeg', D0(_0xe91fd2, _0x2a0edc);
}
function Jo(_0x2072ee, _0x3458d2, _0xecdfb4 = false) {
    ;
    return k0(_0x3458d2.bytes, _0xecdfb4);
}
const si = [];
let ea = false;
function F0(_0x346720, _0x679dcd = 'push') {
    ;
    if (!_0x346720.items.length) {
        return Promise.resolve([]);
    }
    const _0x62b69d = _0x346720.promise = q();
    return si[_0x679dcd](_0x346720), Xo(), _0x62b69d;
}
function Xo() {
    ;
    if (!ea) {
        const _0x81f215 = si.shift();
        P0(_0x81f215).finally(() => {
            ;
            ea = false;
            si.length && Xo();
            ;
        });
    }
}
function P0(_0x58739a) {
    ;
    if (!_0x58739a.items.length) {
        return _0x58739a.promise.resolve([]), Promise.resolve([]);
    }
    const _0x36b364 = _0x58739a.items.slice(), _0x5e1a99 = [];
    return new Promise((_0x4a7fc7, _0x152855) => {
        const _0x1fd8d1 = async () => {
            ;
            const _0xcafaf5 = performance.now();
            do {
                await Go();
                const _0x1a5290 = _0x58739a.process.apply(_0x58739a.context, _0x36b364.shift());
                let _0x1fd754;
                if (_0x1a5290 instanceof Promise) {
                    try {
                        _0x1fd754 = await _0x1a5290;
                    } catch (_0xb459e5) {
                        _0x152855(_0xb459e5);
                        return;
                    }
                } else {
                    _0x1fd754 = _0x1a5290;
                }
                _0x5e1a99.push(_0x1fd754);
            } while (_0x36b364.length > 0 && performance.now() - _0xcafaf5 < 6);
            _0x36b364.length > 0 ? Oe(_0x1fd8d1) : _0x4a7fc7(_0x5e1a99);
        };
        Oe(_0x1fd8d1);
    }).then(_0x58739a.promise.resolve.bind(_0x58739a.promise), _0x58739a.promise.reject.bind(_0x58739a.promise));
}
const _0 = 2, T0 = 2;
let fi, Qo;
Xi ? fi = Promise.resolve() : fi = ze(() => import('./9nf76u1kf9f1.js'), [], import.meta.url).then(_0x27bb1a => {
    ;
    Qo = _0x27bb1a.default;
});
;
function L0(_0x786916, _0x247a9d, _0xbfbb44, _0x597fdd = document.createElement('canvas')) {
    ;
    _0x597fdd.width = _0x786916.width;
    _0x597fdd.height = _0x786916.height;
    ;
    ;
    ;
    const _0x14e4af = _0x597fdd.getContext('2d', _0x3d66ab);
    return Xi ? (_0x14e4af.filter = 'blur(' + _0x247a9d + 'px)', _0x14e4af.drawImage(_0x786916, -_0x247a9d * 2, -_0x247a9d * 2, _0x597fdd.width + _0x247a9d * 4, _0x597fdd.height + _0x247a9d * 4)) : (_0x14e4af.drawImage(_0x786916, 0, 0), Qo(_0x14e4af, 0, 0, _0x597fdd.width, _0x597fdd.height, _0x247a9d, _0xbfbb44)), _0x597fdd;
}
const pf = new Map(), x0 = 150;
function M0(_0x4b03ea, _0x1a9fe7 = _0, _0x51c987 = T0) {
    ;
    if (!_0x4b03ea) {
        throw 'no dataUri for blur: ' + _0x4b03ea;
    }
    pf.size > x0 && pf.clear();
    const _0xd34881 = document.createElement('canvas');
    _0xd34881.className = 'canvas-thumbnail';
    let _0x433faf = pf.get(_0x4b03ea);
    if (_0x433faf) {
        _0xd34881.width = _0x433faf.canvas.width;
        _0xd34881.height = _0x433faf.canvas.height;
        _0x433faf.promise.then(() => {
            ;
            _0xd34881.getContext('2d').drawImage(_0x433faf.canvas, 0, 0, _0xd34881.width, _0xd34881.height);
        });
        ;
    } else {
        const _0x18b6c9 = new Promise(_0x44a0ba => {
                ;
                fi.then(() => {
                    const _0x572b86 = new Image();
                    _0x572b86.onload = () => {
                        const _0x207096 = {
                            items: [[
                                    _0x572b86,
                                    _0x1a9fe7,
                                    _0x51c987,
                                    _0xd34881
                                ]],
                            context: null,
                            process: L0
                        };
                        ;
                        ;
                        ;
                        F0(_0x207096, 'unshift').then(() => {
                            _0x44a0ba();
                        });
                        ;
                    };
                    _0x572b86.src = _0x4b03ea;
                    ;
                });
            }), _0x58a51e = {
                canvas: _0xd34881,
                promise: _0x18b6c9
            };
        ;
        ;
        pf.set(_0x4b03ea, _0x433faf = _0x58a51e);
        ;
    }
    const _0x266821 = { ..._0x433faf };
    return _0x266821.canvas = _0xd34881, _0x266821;
}
function I0(_0x470d0e, _0x423e6f, _0x590e95, _0x9f48f8 = Jo(_0x470d0e, _0x423e6f, false)) {
    ;
    let _0x2901bc, _0x14f91a;
    if (!_0x590e95) {
        _0x2901bc = new Image();
        _0x14f91a = Yo(_0x2901bc, _0x9f48f8);
        ;
    } else {
        const _0x5f2841 = M0(_0x9f48f8, typeof _0x590e95 == 'number' ? _0x590e95 : void 0);
        _0x2901bc = _0x5f2841.canvas;
        _0x14f91a = _0x5f2841.promise;
        ;
    }
    return _0x2901bc.classList.add('thumbnail'), {
        'image': _0x2901bc,
        'loadPromise': _0x14f91a
    };
}
function mr(_0x588e60, _0x5ceec2, _0x379ade, _0x1a3975, _0x3f0364 = true) {
    if (_0x588e60 < _0x379ade && _0x5ceec2 < _0x1a3975 && _0x3f0364) {
        return H(_0x588e60, _0x5ceec2);
    }
    let _0x184fc0 = _0x379ade, _0x5e3dfe = _0x1a3975;
    return _0x588e60 / _0x5ceec2 > _0x379ade / _0x1a3975 ? _0x5e3dfe = _0x5ceec2 * _0x379ade / _0x588e60 | 0 : (_0x184fc0 = _0x588e60 * _0x1a3975 / _0x5ceec2 | 0, _0x184fc0 > _0x379ade && (_0x5e3dfe = _0x5e3dfe * _0x379ade / _0x184fc0 | 0, _0x184fc0 = _0x379ade)), _0x3f0364 && _0x184fc0 >= _0x588e60 && _0x5e3dfe >= _0x5ceec2 && (_0x184fc0 = _0x588e60, _0x5e3dfe = _0x5ceec2), H(_0x184fc0, _0x5e3dfe);
}
N.calcImageInBox = mr;
class R0 {
    constructor(_0x5497fd = 0, _0x421e53 = _0x5497fd) {
        ;
        this.width = _0x5497fd;
        this.height = _0x421e53;
        ;
    }
    ['aspect'](_0xcc193b, _0x1cda19) {
        ;
        return mr(this.width, this.height, _0xcc193b.width, _0xcc193b.height, _0x1cda19);
    }
    ['aspectFitted'](_0x49b054) {
        ;
        return this.aspect(_0x49b054, true);
    }
    ['aspectCovered'](_0x2762c0) {
        ;
        return this.aspect(_0x2762c0, false);
    }
}
function H(_0x249559, _0x48134f) {
    return new R0(_0x249559, _0x48134f);
}
var O0 = (_0x529b6f => (_0x529b6f[_0x529b6f.mobile = 0] = 'mobile', _0x529b6f[_0x529b6f.medium = 1] = 'medium', _0x529b6f[_0x529b6f.large = 2] = 'large', _0x529b6f))(O0 || {});
const N0 = 600, B0 = 925, U0 = 1275, j0 = 1680, ta = H(20, 20), sa = H(36, 36), fa = H(18, 18);
class H0 extends je {
    constructor() {
        ;
        super();
        this.screenSizes = [
            {
                'key': 0,
                'value': N0
            },
            {
                'key': 1,
                'value': U0
            },
            {
                'key': 2,
                'value': j0
            }
        ];
        this.sizes = {
            'handhelds': {
                'regular': H(340, 340),
                'webpage': H(340, 200),
                'album': H(340, 0),
                'esgSticker': H(68, 68),
                'animatedSticker': H(180, 180),
                'staticSticker': H(180, 180),
                'emojiSticker': H(112, 112),
                'poll': H(240, 0),
                'round': H(240, 240),
                'documentName': H(200, 0),
                'invoice': H(340, 340),
                'extendedInvoice': H(340, 340),
                'customEmoji': ta,
                'esgCustomEmoji': sa,
                'emojiStatus': fa,
                'popupSticker': H(68, 68)
            },
            'desktop': {
                'regular': H(420, 400),
                'webpage': H(420, 380),
                'album': H(420, 0),
                'esgSticker': H(72, 72),
                'animatedSticker': H(200, 200),
                'staticSticker': H(200, 200),
                'emojiSticker': H(112, 112),
                'poll': H(330, 0),
                'round': H(280, 280),
                'documentName': H(240, 0),
                'invoice': H(320, 320),
                'extendedInvoice': H(420, 400),
                'customEmoji': ta,
                'esgCustomEmoji': sa,
                'emojiStatus': fa,
                'popupSticker': H(80, 80)
            }
        };
        this.isMobile = false;
        this.isFloatingLeftSidebar = false;
        this.isLessThanFloatingLeftSidebar = false;
        this.handleResize = () => {
            const _0x2124f7 = window.innerWidth;
            let _0x403371 = this.screenSizes[0].key;
            for (let _0x36fe21 = this.screenSizes.length - 1; _0x36fe21 >= 0; --_0x36fe21) {
                if (this.screenSizes[_0x36fe21].value < _0x2124f7) {
                    _0x403371 = (this.screenSizes[_0x36fe21 + 1] || this.screenSizes[_0x36fe21]).key;
                    break;
                }
            }
            const _0x425df0 = this.activeScreen;
            this.activeScreen = _0x403371;
            this.isMobile = this.activeScreen === 0;
            this.isLessThanFloatingLeftSidebar = _0x2124f7 <= B0;
            this.isFloatingLeftSidebar = this.activeScreen === 1 && this.isLessThanFloatingLeftSidebar;
            this.active = this.isMobile ? this.sizes.handhelds : this.sizes.desktop;
            _0x425df0 !== _0x403371 && _0x425df0 !== void 0 && this.dispatchEvent('changeScreen', _0x425df0, _0x403371);
            _0x425df0 !== void 0 && this.dispatchEvent('resize');
            ;
        };
        window.addEventListener('resize', () => {
            ;
            this.rAF && window.cancelAnimationFrame(this.rAF);
            this.rAF = window.requestAnimationFrame(() => {
                ;
                this.handleResize();
                this.rAF = 0;
                ;
            });
            ;
        });
        this.handleResize();
        ;
    }
}
const sf = new H0();
N.mediaSizes = sf;
function Dt(_0x56cc72, _0x129185, _0x24417d) {
    ;
    return Math.min(_0x24417d, Math.max(_0x129185, _0x56cc72));
}
const na = typeof ImageBitmap < 'u';
class mn {
    constructor() {
        ;
        this.cache = new Map();
    }
    static ['createCache']() {
        const _0x5d05d0 = {
            'frames': new Map(),
            'framesNew': new Map(),
            'framesURLs': new Map(),
            'clearCache': () => {
                ;
                _0x5d05d0.framesNew.forEach(_0x231b47 => {
                    ;
                    _0x231b47.close?.();
                });
                _0x5d05d0.frames.clear();
                _0x5d05d0.framesNew.clear();
                _0x5d05d0.framesURLs.clear();
                ;
            },
            'counter': 0
        };
        return _0x5d05d0;
    }
    ['getCache'](_0x121895) {
        ;
        let _0x2ce677 = this.cache.get(_0x121895);
        return _0x2ce677 || this.cache.set(_0x121895, _0x2ce677 = mn.createCache()), ++_0x2ce677.counter, _0x2ce677;
    }
    ['releaseCache'](_0xba5a4c) {
        const _0x17d4c6 = this.cache.get(_0xba5a4c);
        _0x17d4c6 && !--_0x17d4c6.counter && this.cache.delete(_0xba5a4c);
    }
    ['getCacheCounter'](_0x2bd331) {
        ;
        return this.cache.get(_0x2bd331)?.counter;
    }
    ['generateName'](_0x39d533, _0x549f9f, _0x3268ff, _0x29ef60, _0x7cd4d9) {
        ;
        return [
            _0x39d533,
            _0x549f9f,
            _0x3268ff,
            _0x7cd4d9 || ''
        ].filter(Boolean).join('-');
    }
}
const gr = new mn();
class W0 {
    constructor() {
        ;
        this.resetCache = () => {
            ;
            this.computedStyle = void 0;
            const _0x3f1d6e = this.cache;
            this.cache = {};
            for (const _0x54aea0 in _0x3f1d6e)
                this.getProperty(_0x54aea0);
        };
        this.cache = {};
        this.nightElement = document.createElement('div');
        this.nightElement.className = 'night';
        this.nightElement.style.display = 'none';
        document.body.append(this.nightElement);
        I.addEventListener('theme_changed', this.resetCache);
        sf.addEventListener('resize', this.resetCache);
        ;
    }
    ['getProperty'](_0x3fe629, _0xbeb01f) {
        const _0x1ecf11 = this.cache[_0x3fe629], _0x3c2dea = _0xbeb01f ? 1 : 0;
        if (_0x1ecf11?.[_0x3c2dea]) {
            return _0x1ecf11[_0x3c2dea];
        }
        this.computedStyle ?? (this.computedStyle = window.getComputedStyle(document.documentElement));
        this.nightComputedStyle ?? (this.nightComputedStyle = window.getComputedStyle(this.nightElement));
        ;
        const _0x1d5770 = (_0xbeb01f ? this.nightComputedStyle : this.computedStyle).getPropertyValue('--' + _0x3fe629).trim();
        return this.setPropertyCache(_0x3fe629, _0x1d5770, _0xbeb01f);
    }
    ['getPropertyAsColor'](_0x3a6b40) {
        const _0xce371a = this.getProperty(_0x3a6b40);
        return _0xce371a[0] === '#' ? _0xce371a : 'rgb(' + _0xce371a + ')';
    }
    ['getPropertyAsSize'](_0x11fa9e) {
        const _0x23a92e = this.getProperty(_0x11fa9e);
        let _0x2cad6a;
        return _0x23a92e[_0x23a92e.length - 1] === '%' || (_0x23a92e.indexOf('rem') ? _0x2cad6a = +_0x23a92e.replace('rem', '') * 16 : _0x2cad6a = +_0x23a92e.replace('px', '')), _0x2cad6a;
    }
    ['setPropertyCache'](_0x3b1e75, _0x172a80, _0x530b46) {
        ;
        var _0x188791;
        return ((_0x188791 = this.cache)[_0x3b1e75] ?? (_0x188791[_0x3b1e75] = []))[_0x530b46 ? 1 : 0] = _0x172a80;
    }
}
const St = new W0();
N && (N.customProperties = St);
function Zo(_0x470e66, _0x2399d5, _0xf7183d) {
    ;
    let _0x3f125e = Dt(window.devicePixelRatio, 1, 2);
    return _0x3f125e > 1 && !_0xf7183d && (_0x470e66 > 90 && _0x2399d5 > 90 ? !Et && sf.isMobile && (_0x3f125e = 1) : (_0x470e66 > 60 && _0x2399d5 > 60 || Ii) && (_0x3f125e = Math.max(1.5, _0x3f125e - 1.5))), _0x3f125e;
}
function gn(_0x5b3cad, _0xefca4b, _0x4cbc30, _0x729fac, _0x2cb60c, _0x34e29b) {
    ;
    _0x5b3cad.globalCompositeOperation = 'source-atop';
    _0x5b3cad.fillStyle = typeof _0xefca4b == 'string' ? _0xefca4b : 'rgb(' + _0xefca4b[0] + ', ' + _0xefca4b[1] + ', ' + _0xefca4b[2] + ')';
    _0x5b3cad.fillRect(_0x4cbc30, _0x729fac, _0x2cb60c, _0x34e29b);
    _0x5b3cad.globalCompositeOperation = 'source-over';
    ;
}
const ht = class ht extends je {
    constructor({
        el: _0x11c04b,
        worker: _0x3390e4,
        options: _0x25afb0
    }) {
        ;
        super(true);
        this.reqId = 0;
        this.width = 0;
        this.height = 0;
        this.paused = true;
        this.direction = 1;
        this.speed = 1;
        this.autoplay = true;
        this.loop = true;
        this.group = '';
        this.cachingDelta = 0;
        this.playedTimes = 0;
        this.reqId = ++ht.reqId;
        this.el = _0x11c04b;
        this.worker = _0x3390e4;
        ;
        for (const _0x14d8c6 in _0x25afb0)
            this.hasOwnProperty(_0x14d8c6) && (this[_0x14d8c6] = _0x25afb0[_0x14d8c6]);
        this['_loop'] = this.loop;
        this['_autoplay'] = this.autoplay;
        this.initFrame = _0x25afb0.initFrame;
        this.color = _0x25afb0.color;
        this.textColor = _0x25afb0.textColor;
        this.name = _0x25afb0.name;
        this.skipFirstFrameRendering = _0x25afb0.skipFirstFrameRendering;
        this.toneIndex = _0x25afb0.toneIndex;
        this.raw = false;
        this.liteModeKey = _0x25afb0.liteModeKey;
        this.name && (this.cacheName = ht.CACHE.generateName(this.name, this.width, this.height, this.color, this.toneIndex));
        ;
        let _0x35a01e;
        _0x25afb0.skipRatio !== void 0 ? _0x35a01e = _0x25afb0.skipRatio : (Ii || ps || Et && !be && !So) && this.width < 100 && this.height < 100 && !_0x25afb0.needUpscale && (_0x35a01e = 0.5);
        this.skipDelta = _0x35a01e !== void 0 ? 1 / _0x35a01e | 0 : 1;
        ;
        const _0x5315db = Zo(this.width, this.height, _0x25afb0.needUpscale);
        this.width = Math.round(this.width * _0x5315db);
        this.height = Math.round(this.height * _0x5315db);
        _0x25afb0.noCache || (Et && this.width > 100 && this.height > 100 ? this.cachingDelta = 2 : this.width < 100 && this.height < 100 ? this.cachingDelta = 1e+400 : this.cachingDelta = 4);
        this.canvas || (this.canvas = this.el.map(() => {
            ;
            const _0x259686 = document.createElement('canvas');
            return _0x259686.classList.add('rlottie'), _0x259686.width = this.width, _0x259686.height = this.height, _0x259686.dpr = _0x5315db, _0x259686;
        }));
        this.contexts = this.canvas.map(_0x377c8a => _0x377c8a.getContext('2d'));
        (!na || this.raw) && (this.imageData = new ImageData(this.width, this.height), Ji && (this.clamped = new Uint8ClampedArray(this.width * this.height * 4)));
        this.name ? this.cache = ht.CACHE.getCache(this.cacheName) : this.cache = mn.createCache();
        ;
    }
    ['setSize'](_0x2c68e4, _0x300bab) {
        ;
        this.width = _0x2c68e4;
        this.height = _0x300bab;
        this.canvas.forEach(_0x481041 => {
            ;
            _0x481041.width = _0x2c68e4;
            _0x481041.height = _0x300bab;
            ;
        });
        ;
    }
    ['clearCache']() {
        ;
        this.cachingDelta !== 1e+400 && (this.cacheName && this.cache.counter > 1 || this.cache.clearCache());
    }
    ['sendQuery'](_0x3cf004, _0x3bf3b8) {
        ;
        this.worker.sendQuery([
            _0x3cf004.shift(),
            this.reqId,
            ..._0x3cf004
        ], _0x3bf3b8);
    }
    ['loadFromData'](_0x2a1740) {
        ;
        this.sendQuery([
            'loadFromData',
            _0x2a1740,
            this.width,
            this.height,
            this.toneIndex,
            this.raw
        ]);
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.setMainLoop());
    }
    ['pause'](_0x3c4f73 = true) {
        ;
        this.paused || (this.paused = true, _0x3c4f73 && (clearTimeout(this.rafId), this.rafId = void 0));
    }
    ['resetCurrentFrame']() {
        ;
        return this.curFrame = this.initFrame ?? (this.direction === 1 ? this.minFrame : this.maxFrame);
    }
    ['stop'](_0x55641c = true) {
        ;
        this.pause();
        const _0x15b7a0 = this.resetCurrentFrame();
        _0x55641c && this.requestFrame(_0x15b7a0);
    }
    ['restart']() {
        this.stop(false);
        this.play();
        ;
    }
    ['playOrRestart']() {
        ;
        this.paused && (this.curFrame === this.maxFrame ? this.restart() : this.play());
    }
    ['setSpeed'](_0x16fbeb) {
        ;
        if (this.speed !== _0x16fbeb) {
            this.speed = _0x16fbeb;
            this.paused || this.setMainLoop();
        }
    }
    ['setDirection'](_0x2da176) {
        ;
        if (this.direction !== _0x2da176) {
            this.direction = _0x2da176;
            this.paused || this.setMainLoop();
        }
    }
    ['remove']() {
        ;
        this.pause();
        this.sendQuery(['destroy']);
        this.cacheName && ht.CACHE.releaseCache(this.cacheName);
        this.dispatchEvent('destroy');
        this.cleanup();
        ;
    }
    ['applyColor'](_0x417930) {
        ;
        gn(_0x417930, this.color || St.getPropertyAsColor(this.textColor), 0, 0, this.width, this.height);
    }
    ['applyColorForAllContexts']() {
        ;
        !this.color && !this.textColor || this.contexts.forEach(_0x4d81a6 => {
            ;
            this.applyColor(_0x4d81a6);
        });
    }
    ['renderFrame2'](_0xbf2a5a, _0xb0db32) {
        ;
        try {
            _0xbf2a5a instanceof Uint8ClampedArray && this.imageData.data.set(_0xbf2a5a);
            this.contexts.forEach((_0x56fbdd, _0x59cc7c) => {
                ;
                let _0x4e294d = this.cache.framesNew.get(_0xb0db32);
                if (_0xbf2a5a instanceof Uint8ClampedArray ? _0x59cc7c > 0 && (_0x4e294d = this.canvas[0]) : _0x4e294d = _0xbf2a5a, !_0x4e294d) {
                    const _0x59eca5 = document.createElement('canvas');
                    _0x59eca5.width = _0x56fbdd.canvas.width;
                    _0x59eca5.height = _0x56fbdd.canvas.height;
                    _0x59eca5.getContext('2d').putImageData(this.imageData, 0, 0);
                    this.cache.framesNew.set(_0xb0db32, _0x59eca5);
                    _0x4e294d = _0x59eca5;
                    ;
                }
                this.overrideRender && this.renderedFirstFrame ? this.overrideRender(_0x4e294d || this.imageData) : _0x4e294d ? (_0x56fbdd.clearRect(0, 0, _0x4e294d.width, _0x4e294d.height), _0x56fbdd.drawImage(_0x4e294d, 0, 0)) : _0x56fbdd.putImageData(this.imageData, 0, 0);
                (this.color || this.textColor) && this.applyColor(_0x56fbdd);
                this.renderedFirstFrame || (this.renderedFirstFrame = true);
                ;
            });
            this.dispatchEvent('enterFrame', _0xb0db32);
            ;
        } catch {
            this.autoplay = false;
            this.pause();
            ;
        }
    }
    ['renderFrame'](_0x2c0373, _0x4058d2) {
        ;
        if (this.cachingDelta && (_0x4058d2 % this.cachingDelta || !_0x4058d2) && (_0x2c0373 instanceof Uint8ClampedArray && !this.cache.frames.has(_0x4058d2) ? this.cache.frames.set(_0x4058d2, new Uint8ClampedArray(_0x2c0373)) : na && _0x2c0373 instanceof ImageBitmap && !this.cache.framesNew.has(_0x4058d2) && this.cache.framesNew.set(_0x4058d2, _0x2c0373)), this.frInterval) {
            const _0x358fc8 = Date.now(), _0x894433 = _0x358fc8 - this.frThen;
            if (_0x894433 < 0) {
                const _0x28146a = this.frInterval > -_0x894433 ? -_0x894433 % this.frInterval : this.frInterval;
                this.rafId && clearTimeout(this.rafId);
                this.rafId = window.setTimeout(() => {
                    ;
                    this.renderFrame2(_0x2c0373, _0x4058d2);
                }, _0x28146a);
                ;
                return;
            }
        }
        this.renderFrame2(_0x2c0373, _0x4058d2);
    }
    ['requestFrame'](_0x2c79d6) {
        const _0x141eee = this.cache.frames.get(_0x2c79d6), _0x3f2aca = this.cache.framesNew.get(_0x2c79d6);
        _0x3f2aca ? this.renderFrame(_0x3f2aca, _0x2c79d6) : _0x141eee ? this.renderFrame(_0x141eee, _0x2c79d6) : (this.clamped && !this.clamped.length && (this.clamped = new Uint8ClampedArray(this.width * this.height * 4)), this.sendQuery([
            'renderFrame',
            _0x2c79d6
        ], this.clamped ? [this.clamped.buffer] : void 0));
    }
    ['onLap']() {
        ;
        return ++this.playedTimes, typeof this.loop == 'number' && this.playedTimes >= this.loop && (this.loop = this.autoplay = this['_loop'] = this['_autoplay'] = false), this.loop ? true : (this.clearCache(), this.pause(false), false);
    }
    ['mainLoopForwards']() {
        const {
                skipDelta: _0x47fe27,
                maxFrame: _0x4e52d7
            } = this, _0x4c45a2 = this.curFrame + _0x47fe27 > _0x4e52d7 ? this.curFrame = this.loop ? this.minFrame : this.maxFrame : this.curFrame += _0x47fe27;
        return this.requestFrame(_0x4c45a2), _0x4c45a2 + _0x47fe27 > _0x4e52d7 ? this.onLap() : true;
    }
    ['mainLoopBackwards']() {
        const {
                skipDelta: _0x3d85be,
                minFrame: _0x413ccf
            } = this, _0x2bd81a = this.curFrame - _0x3d85be < _0x413ccf ? this.curFrame = this.loop ? this.maxFrame : this.minFrame : this.curFrame -= _0x3d85be;
        return this.requestFrame(_0x2bd81a), _0x2bd81a - _0x3d85be < _0x413ccf ? this.onLap() : true;
    }
    ['setMainLoop']() {
        ;
        clearTimeout(this.rafId);
        this.rafId = void 0;
        this.frInterval = 1000 / this.fps / this.speed * this.skipDelta;
        this.frThen = Date.now() - this.frInterval;
        ;
        const _0x1c3c5e = (this.direction === 1 ? this.mainLoopForwards : this.mainLoopBackwards).bind(this);
        this.currentMethod = _0x1c3c5e;
        this.frameListener && this.listenerResults.enterFrame !== void 0 && this.frameListener(this.curFrame);
        ;
    }
    ['playPart'](_0x123359) {
        ;
        this.pause();
        const {
            from: _0x4383f8,
            to: _0x4ac52f,
            callback: _0x5d7cae
        } = _0x123359;
        return this.curFrame = _0x4383f8 - 1, this.playToFrame({
            'frame': _0x4ac52f,
            'direction': _0x4ac52f > _0x4383f8 ? 1 : -1,
            'callback': _0x5d7cae
        });
    }
    ['playToFrame'](_0x1e70af) {
        ;
        this.pause();
        const {
            frame: _0x5eeb25,
            speed: _0x1f697f,
            callback: _0x118055,
            direction: _0x11920a
        } = _0x1e70af;
        this.setDirection(_0x11920a === void 0 ? this.curFrame > _0x5eeb25 ? -1 : 1 : _0x11920a);
        _0x1f697f !== void 0 && this.setSpeed(_0x1f697f);
        ;
        const _0x5dd904 = [
            this.curFrame,
            _0x5eeb25
        ];
        this.direction === -1 && _0x5dd904.reverse();
        this.loop = false;
        this.setMinMax(_0x5dd904[0], _0x5dd904[1]);
        this.playToFrameOnFrameCallback && this.removeEventListener('enterFrame', this.playToFrameOnFrameCallback);
        _0x118055 && (this.playToFrameOnFrameCallback = _0x274899 => {
            ;
            if (_0x274899 === _0x5eeb25) {
                this.removeEventListener('enterFrame', this.playToFrameOnFrameCallback);
                _0x118055();
            }
        }, this.addEventListener('enterFrame', this.playToFrameOnFrameCallback));
        this.play();
        ;
    }
    ['setColor'](_0x37523a, _0xabfd3) {
        ;
        typeof _0x37523a == 'string' ? this.textColor = _0x37523a : this.color = _0x37523a;
        _0xabfd3 && this.paused && this.applyColorForAllContexts();
        ;
    }
    ['setMinMax'](_0x46cd32 = 0, _0x599c3c = this.frameCount - 1) {
        ;
        this.minFrame = _0x46cd32;
        this.maxFrame = _0x599c3c;
        ;
    }
    async ['onLoad'](_0x3dd1de, _0x3b23bb) {
        ;
        this.frameCount = _0x3dd1de;
        this.fps = _0x3b23bb;
        this.setMinMax();
        this.initFrame !== void 0 && (this.initFrame = Dt(this.initFrame, this.minFrame, this.maxFrame));
        ;
        const _0x480b7f = this.resetCurrentFrame();
        if (this.fps < 60 && this.skipDelta !== 1) {
            const _0x4bd30a = 60 / _0x3b23bb;
            this.skipDelta = this.skipDelta / _0x4bd30a | 0;
        }
        const _0x11cba5 = { once: true };
        ;
        this.frInterval = 1000 / this.fps / this.speed * this.skipDelta;
        this.frThen = Date.now() - this.frInterval;
        !this.skipFirstFrameRendering && this.requestFrame(_0x480b7f);
        this.dispatchEvent('ready');
        this.addEventListener('enterFrame', () => {
            ;
            this.dispatchEvent('firstFrame');
            !this.canvas[0].parentNode && this.el?.[0] && !this.overrideRender && this.el.forEach((_0x44c446, _0x38c9b5) => _0x44c446.append(this.canvas[_0x38c9b5]));
            this.frameListener = () => {
                ;
                if (this.paused || !this.currentMethod) {
                    return;
                }
                const _0xe7c5c = Date.now();
                this.frThen = _0xe7c5c + this.frInterval;
                !this.currentMethod() && !this.loop && this.autoplay && (this.autoplay = false);
                ;
            };
            this.addEventListener('enterFrame', this.frameListener);
            this.group === 'none' && this.autoplay && this.play();
            ;
        }, _0x11cba5);
        ;
        ;
    }
};
ht.CACHE = gr;
ht.reqId = 0;
;
let xt = ht;
const ts = {};
function ec(_0x105c49, _0x31b9db, _0x2d4d4e, _0x3e0a93) {
    const _0x4ebed5 = ar(_0x105c49.id, _0x31b9db), _0x253377 = ts[_0x4ebed5];
    return _0x253377 && _0x253377.width >= _0x2d4d4e && _0x253377.height >= _0x3e0a93;
}
let Kt, ni;
const V0 = () => {
    ;
    I.addEventListener('theme_changed', () => {
        ;
        I.managers.thumbsStorage.clearColoredStickerThumbs();
        for (const _0x13ec38 in ts) {
            const [, _0x33eadd] = _0x13ec38.split('-');
            _0x33eadd && isNaN(+_0x33eadd) && delete ts[_0x13ec38];
        }
    });
    Kt = document.createElement('canvas');
    ni = Kt.getContext('2d');
    ;
};
async function ia(_0xfbebc, _0x19b5c5, _0x24f587) {
    const _0x3a7d62 = ar(_0xfbebc.id, _0x24f587), {
            width: _0x68c7a9,
            height: _0x33048a
        } = _0x19b5c5;
    if (ec(_0xfbebc, _0x24f587, _0x68c7a9, _0x33048a)) {
        return;
    }
    const _0x5155a0 = {
        width: _0x68c7a9,
        height: _0x33048a
    };
    ;
    ;
    ;
    const _0x3ae903 = ts[_0x3a7d62] = _0x5155a0, _0x1e4aa2 = await I.managers.thumbsStorage.getStickerCachedThumb(_0xfbebc.id, _0x24f587);
    if (ts[_0x3a7d62] !== _0x3ae903 || _0x1e4aa2 && _0x1e4aa2.w >= _0x68c7a9 && _0x1e4aa2.h >= _0x33048a) {
        return;
    }
    if (typeof _0x24f587 == 'string') {
        Kt || V0();
        Kt.width = _0x68c7a9;
        Kt.height = _0x33048a;
        ni.drawImage(_0x19b5c5, 0, 0, _0x68c7a9, _0x33048a);
        gn(ni, St.getProperty(_0x24f587), 0, 0, _0x68c7a9, _0x33048a);
        _0x19b5c5 = Kt;
    }
    const _0xd9aec0 = await new Promise(_0x135d84 => {
        ;
        _0x19b5c5.toBlob(_0x37f524 => _0x135d84(_0x37f524));
    });
    ts[_0x3a7d62] === _0x3ae903 && _0xd9aec0 && I.managers.thumbsStorage.saveStickerPreview(_0xfbebc.id, _0xd9aec0, _0x68c7a9, _0x33048a, _0x24f587);
}
class z0 {
    constructor() {
        ;
        this.promises = {};
        this.raf = Oe.bind(null);
        this.scheduled = false;
        ;
    }
    ['do'](_0x541ebd, _0x1aa60a) {
        ;
        let _0x47bf63 = this.promises[_0x541ebd];
        return _0x47bf63 || (this.scheduleFlush(), _0x47bf63 = this.promises[_0x541ebd] = q()), _0x1aa60a !== void 0 && _0x47bf63.then(() => _0x1aa60a()), _0x47bf63;
    }
    ['measure'](_0x2a036a) {
        ;
        return this.do('read', _0x2a036a);
    }
    ['mutate'](_0x2b746b) {
        ;
        return this.do('write', _0x2b746b);
    }
    ['mutateElement'](_0x255af4, _0x28b938) {
        const _0x5ec18e = Ys(_0x255af4), _0x28864f = _0x5ec18e ? this.mutate() : Promise.resolve();
        return _0x28b938 !== void 0 && (_0x5ec18e ? _0x28864f.then(() => _0x28b938()) : _0x28b938()), _0x28864f;
    }
    ['scheduleFlush']() {
        ;
        this.scheduled || (this.scheduled = true, this.raf(() => {
            ;
            this.promises.read && this.promises.read.resolve();
            this.promises.write && this.promises.write.resolve();
            this.scheduled = false;
            this.promises = {};
            ;
        }));
    }
}
const ut = new z0();
N && (N.sequentialDom = ut);
let ra = 0;
function G0(_0x25fde1) {
    ;
    let _0x44720a;
    const _0x473fc3 = _0x25fde1?.type;
    if (_0x473fc3) {
        const _0x44d032 = If + '_' + ra++ + '.' + _0x473fc3.split('/')[1];
        [
            'image/jpeg',
            'image/png',
            'image/bmp'
        ].indexOf(_0x473fc3) >= 0 ? _0x44720a = 'photo' + _0x44d032 : _0x473fc3.indexOf('audio/') === 0 || ['video/ogg'].indexOf(_0x473fc3) >= 0 ? _0x44720a = 'audio' + _0x44d032 : _0x473fc3.indexOf('video/') === 0 ? _0x44720a = 'video' + _0x44d032 : _0x44720a = 'document' + _0x44d032;
    } else {
        _0x44720a = 'upload-' + If + '_' + ra++;
    }
    return _0x44720a;
}
function q0(_0x3bfee8, _0x5d10fe) {
    const _0x24a058 = {};
    return _0x24a058['_'] = 'inputDocumentFileLocation', _0x24a058.id = _0x3bfee8.id, _0x24a058.access_hash = _0x3bfee8.access_hash, _0x24a058.file_reference = _0x3bfee8.file_reference, _0x24a058.thumb_size = _0x5d10fe, _0x24a058;
}
function tc(_0x3e35c6, {
    thumb: _0x46bd95,
    queueId: _0x1b41e0,
    onlyCache: _0x2bbc31
} = {}) {
    const _0x1efd8d = q0(_0x3e35c6, _0x46bd95?.type);
    let _0x21f6f5;
    return _0x46bd95?.['_'] === 'photoSize' ? _0x21f6f5 = _0x3e35c6.sticker ? 'image/webp' : _0x3e35c6.mime_type.startsWith('image/') ? _0x3e35c6.mime_type : 'image/jpeg' : _0x21f6f5 = _0x3e35c6.mime_type || 'application/octet-stream', {
        'dcId': _0x3e35c6.dc_id,
        'location': _0x1efd8d,
        'size': _0x46bd95 ? _0x46bd95.size : _0x3e35c6.size,
        'mimeType': _0x21f6f5,
        'fileName': _0x3e35c6.file_name,
        'queueId': _0x1b41e0,
        'onlyCache': _0x2bbc31
    };
}
function sc(_0x5eb843, _0x7b66cc, _0x50fcd7, _0x4656b5) {
    const _0x18b31d = _0x5eb843['_'] === 'document';
    if (!_0x7b66cc || _0x7b66cc['_'] === 'photoSizeEmpty') {
        throw new Error('photoSizeEmpty!');
    }
    const _0x973238 = !!((_0x7b66cc['_'] === 'photoSize' || _0x7b66cc['_'] === 'photoSizeProgressive') && _0x5eb843.access_hash && _0x5eb843.file_reference), _0x2ff53f = {
            '_': _0x18b31d ? 'inputDocumentFileLocation' : 'inputPhotoFileLocation',
            'id': _0x5eb843.id,
            'access_hash': _0x5eb843.access_hash,
            'file_reference': _0x5eb843.file_reference,
            'thumb_size': _0x7b66cc.type
        }, _0x3add46 = {};
    return _0x3add46.dcId = _0x5eb843.dc_id, _0x3add46.location = _0x2ff53f, _0x3add46.size = _0x973238 ? _0x7b66cc.size : void 0, _0x3add46.mimeType = 'image/jpeg', _0x3add46.queueId = _0x50fcd7, _0x3add46.onlyCache = _0x4656b5, _0x3add46;
}
function fc(_0x131f6e) {
    const _0x3616eb = {};
    return _0x3616eb.dcId = 0, _0x3616eb.location = _0x131f6e, _0x3616eb.size = 0, _0x3616eb.mimeType = 'image/jpeg', _0x3616eb;
}
function $0(_0x180ffe) {
    const _0x212b92 = {
        access_hash: _0x180ffe.access_hash,
        url: _0x180ffe.url
    };
    _0x212b92['_'] = 'inputWebFileLocation';
    ;
    ;
    ;
    const _0x3ae704 = fc(_0x212b92);
    return _0x3ae704.size = _0x180ffe.size, _0x3ae704.mimeType = _0x180ffe.mime_type, _0x3ae704;
}
function Y0(_0x2c7589) {
    ;
    return !!(_0x2c7589 && (_0x2c7589['_'] === 'webDocument' || _0x2c7589['_'] === 'webDocumentNoProxy'));
}
function nc(_0x4b5308) {
    ;
    return ir(_0x4b5308.location, _0x4b5308);
}
function K0(_0xed7772) {
    const {
        media: _0x27e3c0,
        thumb: _0x13946b,
        queueId: _0x2c659c,
        onlyCache: _0x3c62c1
    } = _0xed7772;
    let _0x2048bd;
    const _0x353c61 = {};
    return _0x353c61.thumb = _0x13946b, _0x353c61.queueId = _0x2c659c, _0x353c61.onlyCache = _0x3c62c1, (_0x27e3c0['_'] === 'document' ? _0x2048bd = tc(_0x27e3c0, _0x353c61) : _0x27e3c0['_'] === 'photo' ? _0x2048bd = sc(_0x27e3c0, _0x13946b, _0x2c659c, _0x3c62c1) : Y0(_0x27e3c0) ? _0x2048bd = $0(_0x27e3c0) : rr(_0x27e3c0) && (_0x2048bd = fc(_0x27e3c0), _0xed7772.fileName && (_0x2048bd.fileName = _0xed7772.fileName)), _0x2048bd.downloadId = _0xed7772.downloadId, {
        'fileName': nc(_0x2048bd),
        'downloadOptions': _0x2048bd
    });
}
function J0(_0x2960a3, _0x28b4b2, _0x5e5c8d) {
    const _0x14f46f = document.createElement('a');
    _0x14f46f.href = _0x2960a3;
    _0x14f46f.download = _0x28b4b2;
    _0x14f46f.target = '_blank';
    _0x14f46f.style.position = 'absolute';
    _0x14f46f.style.top = '1px';
    _0x14f46f.style.left = '1px';
    document.body.append(_0x14f46f);
    ;
    try {
        const _0xdc046b = document.createEvent('MouseEvents');
        _0xdc046b.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        _0x14f46f.dispatchEvent(_0xdc046b);
        ;
    } catch {
        try {
            _0x14f46f.click();
        } catch {
            window.open(_0x2960a3, '_blank');
        }
    }
    setTimeout(() => {
        _0x14f46f.remove();
        _0x5e5c8d && _0x5e5c8d();
        ;
    }, 100);
}
class X0 {
    constructor() {
        ;
        this.downloads = {};
        this.progress = {};
        ;
    }
    ['construct'](_0xe383f4) {
        ;
        this.managers = _0xe383f4;
        I.addEventListener('download_progress', _0x13155e => {
            const _0x2b0cd3 = this.downloads[_0x13155e.fileName];
            _0x2b0cd3?.main?.notifyAll && (this.progress[_0x13155e.fileName] = _0x13155e, _0x2b0cd3.main.notifyAll(_0x13155e));
        });
        ;
    }
    ['getNewDeferred'](_0x1211b1, _0x1debee) {
        const _0xee2e20 = q();
        let _0x349f1d = this.downloads[_0x1211b1];
        const _0x30fd06 = { main: _0xee2e20 };
        ;
        if (!_0x349f1d) {
            _0x349f1d = this.downloads[_0x1211b1] = _0x30fd06;
            _0xee2e20.cancel = () => {
                const _0x8ab3da = Ee('DOWNLOAD_CANCELED');
                this.managers.apiFileManager.cancelDownload(_0x1211b1);
                _0xee2e20.reject(_0x8ab3da);
                _0xee2e20.cancel = ve;
                ;
            };
            _0xee2e20.catch(() => {
                ;
                this.clearDownload(_0x1211b1, _0x1debee);
            }).finally(() => {
                ;
                delete this.progress[_0x1211b1];
            });
            ;
        } else {
            const _0x2bc3dd = _0x349f1d.main;
            [
                'cancel',
                'addNotifyListener',
                'notify',
                'notifyAll'
            ].forEach(_0x4400f5 => {
                ;
                _0x2bc3dd[_0x4400f5] && (_0xee2e20[_0x4400f5] = _0x2bc3dd[_0x4400f5].bind(_0x2bc3dd));
            });
        }
        return _0x1debee === 'disc' && _0xee2e20.catch(ve).finally(() => {
            ;
            this.clearDownload(_0x1211b1, _0x1debee);
        }), _0x349f1d[_0x1debee] = _0xee2e20;
    }
    ['getNewDeferredForUpload'](_0x1f5925, _0x24423f) {
        const _0x24c947 = this.getNewDeferred(_0x1f5925);
        return _0x24423f.then(_0x24c947.resolve.bind(_0x24c947), _0x24c947.reject.bind(_0x24c947)), _0x24c947.finally(() => {
            ;
            this.clearDownload(_0x1f5925);
        }), _0x24c947;
    }
    ['clearDownload'](_0x40a6a8, _0x67359f) {
        const _0x3ffc93 = this.downloads[_0x40a6a8];
        if (!_0x3ffc93) {
            return;
        }
        delete _0x3ffc93[_0x67359f];
        const _0x46eb08 = Object.keys(_0x3ffc93).length;
        (!_0x46eb08 || _0x3ffc93.main && _0x46eb08 === 1) && delete this.downloads[_0x40a6a8];
    }
    ['getUpload'](_0x129bc3) {
        ;
        let _0x39dc86 = this.getDownload(_0x129bc3);
        return _0x39dc86 || (_0x39dc86 = this.getNewDeferred(_0x129bc3), this.managers.appMessagesManager.getUploadPromise(_0x129bc3).then(_0x39dc86.resolve.bind(_0x39dc86), _0x39dc86.reject.bind(_0x39dc86)), _0x39dc86);
    }
    ['d'](_0x5e5dea, _0x44b5f2, _0x187f29) {
        ;
        let _0x58579d = this.getDownload(_0x5e5dea, _0x187f29);
        return _0x58579d || (_0x58579d = this.getNewDeferred(_0x5e5dea, _0x187f29), _0x44b5f2().then(_0x58579d.resolve.bind(_0x58579d), _0x58579d.reject.bind(_0x58579d)), _0x58579d);
    }
    ['download'](_0x4a912f) {
        const _0x270bdd = nc(_0x4a912f);
        return this.d(_0x270bdd, () => this.managers.apiFileManager.download(_0x4a912f), 'blob');
    }
    ['downloadMedia'](_0xc07b94, _0x22c58a = 'blob', _0x3a2bfb) {
        const {
            downloadOptions: _0x593aff,
            fileName: _0x24124e
        } = K0(_0xc07b94);
        return this.d(_0x24124e, () => {
            ;
            let _0x5ebc0e;
            return _0x22c58a === 'url' ? _0x5ebc0e = this.managers.apiFileManager.downloadMediaURL : _0x22c58a === 'void' ? _0x5ebc0e = this.managers.apiFileManager.downloadMediaVoid : _0x5ebc0e = this.managers.apiFileManager.downloadMedia, _0x3a2bfb ? _0x3a2bfb.then(() => _0x5ebc0e(_0xc07b94), () => (delete _0xc07b94.downloadId, _0x5ebc0e(_0xc07b94))) : _0x5ebc0e(_0xc07b94);
        }, _0x22c58a);
    }
    ['downloadMediaURL'](_0x34fc7f) {
        ;
        return this.downloadMedia(_0x34fc7f, 'url');
    }
    ['downloadMediaVoid'](_0x11574a) {
        ;
        return this.downloadMedia(_0x11574a, 'void');
    }
    ['upload'](_0x112e19, _0x5d900d, _0x33253e) {
        ;
        return _0x5d900d || (_0x5d900d = G0(_0x112e19)), _0x33253e || (_0x33253e = this.managers.apiFileManager.upload({
            'file': _0x112e19,
            'fileName': _0x5d900d
        })), this.getNewDeferredForUpload(_0x5d900d, _0x33253e);
    }
    ['getDownload'](_0x147a47, _0x2ff489) {
        const _0xd3ce73 = this.downloads[_0x147a47];
        return _0xd3ce73 && _0xd3ce73[_0x2ff489];
    }
    ['downloadToDisc'](_0x128d5c, _0x1ed3b7) {
        const _0x27495a = _0x128d5c.media, _0xea6bcb = _0x27495a['_'] === 'document', _0x496386 = rr(_0x27495a);
        !_0xea6bcb && !_0x496386 && !_0x128d5c.thumb && (_0x128d5c.thumb = _0x27495a.sizes.slice().pop());
        const _0xab4a39 = !bs && !!re.serviceMessagePort, _0x2b6107 = () => {
                ;
                if (_0x128d5c.fileName) {
                    return _0x128d5c.fileName;
                }
                const _0x1970eb = _0xea6bcb ? tc(_0x27495a) : sc(_0x27495a, _0x128d5c.thumb);
                return _0x128d5c.media.file_name || ir(_0x1970eb.location);
            };
        let _0x543de4, _0x4d88ec, _0x20f54d;
        if (_0xab4a39) {
            const _0x36a53b = '' + (Math.random() * 2147483647 | 0);
            if (_0x543de4 = 'd/' + _0x36a53b, _0x128d5c.downloadId = _0x36a53b, _0x4d88ec = re.pingServiceWorkerWithIframe(), !_0x1ed3b7) {
                const {
                    iframe: _0x50ce80,
                    onSuccess: _0xf44861,
                    onError: _0x33e8df
                } = this.createDownloadIframe(_0x543de4);
                _0x20f54d = _0x50ce80;
                _0x4d88ec = _0x4d88ec.then(() => {
                    const _0x2ec8a1 = q(), _0x5c3050 = _0x569156 => {
                            ;
                            clearTimeout(_0x4ea2aa);
                            re.serviceMessagePort.removeEventListener('downloadRequestReceived', _0x4d4951);
                            _0x569156 ? _0x2ec8a1.resolve() : _0x2ec8a1.reject();
                            ;
                        }, _0x4d4951 = _0x1d61be => {
                            _0x1d61be === _0x36a53b && _0x5c3050(true);
                        };
                    re.serviceMessagePort.addEventListener('downloadRequestReceived', _0x4d4951);
                    const _0x4ea2aa = window.setTimeout(() => {
                        _0x5c3050(false);
                    }, 1500);
                    return _0xf44861(), _0x2ec8a1;
                }, _0x434632 => {
                    throw _0x33e8df(), _0x434632;
                });
                ;
            }
        }
        const _0x18e440 = this.downloadMedia(_0x128d5c, 'disc', _0x4d88ec);
        if (_0x1ed3b7) {
            return _0x18e440;
        }
        let _0x237320, _0x2460a9 = false;
        const _0x248634 = () => {
            _0x2460a9 || (_0x2460a9 = true, _0x237320 = _0x20f54d, xe(_0x18e440.listeners, _0x248634));
        };
        return _0x18e440.addNotifyListener(_0x248634), _0x18e440.then(_0x2c4687 => {
            ;
            if (!_0x2c4687) {
                return;
            }
            const _0x3ce14f = URL.createObjectURL(_0x2c4687);
            J0(_0x3ce14f, _0x2b6107(), () => {
                ;
                URL.revokeObjectURL(_0x3ce14f);
            });
        }).catch(ve).finally(() => {
            _0x2460a9 || _0x248634();
            setTimeout(() => {
                ;
                _0x237320?.remove();
            }, 1000);
            ;
        }), _0x18e440;
    }
    ['createDownloadIframe'](_0x45ff8e) {
        const _0x5630aa = document.createElement('iframe');
        return _0x5630aa.hidden = true, {
            'iframe': _0x5630aa,
            'onSuccess': () => {
                ;
                _0x5630aa.src = _0x45ff8e;
                document.body.append(_0x5630aa);
                ;
            },
            'onError': () => {
            }
        };
    }
}
const _s = new X0();
N && (N.appDownloadManager = _s);
function aa(_0x3cb5a0, _0x2d8b03 = 0, _0x4384ec = 0, _0x2759e5 = false, _0x575a99 = false) {
    ;
    if (window.devicePixelRatio > 1) {
        _0x2d8b03 *= 2;
        _0x4384ec *= 2;
    }
    const _0x138d5d = { type: jn };
    _0x138d5d['_'] = 'photoSizeEmpty';
    ;
    ;
    let _0x308d9a = _0x3cb5a0.sizes || _0x3cb5a0.thumbs, _0x4b2475 = _0x138d5d;
    if (_0x575a99 && _0x308d9a && _0x3cb5a0['_'] !== 'photo' && (_0x308d9a = _0x308d9a.concat({
            '_': 'photoSize',
            'w': _0x3cb5a0.w,
            'h': _0x3cb5a0.h,
            'size': _0x3cb5a0.size,
            'type': jn
        })), _0x308d9a?.length) {
        for (let _0x489dc3 = 0, _0x4412f4 = _0x308d9a.length; _0x489dc3 < _0x4412f4; ++_0x489dc3) {
            const _0x54727f = _0x308d9a[_0x489dc3];
            if (!('w' in _0x54727f) && !('h' in _0x54727f)) {
                continue;
            }
            _0x4b2475 = _0x54727f;
            const _0x20dd3d = mr(_0x54727f.w, _0x54727f.h, _0x2d8b03, _0x4384ec);
            if (_0x20dd3d.width >= _0x2d8b03 || _0x20dd3d.height >= _0x4384ec) {
                break;
            }
        }
        _0x2759e5 && _0x4b2475['_'] === 'photoSizeEmpty' && _0x308d9a[0]['_'] === 'photoStrippedSize' && (_0x4b2475 = _0x308d9a[0]);
    }
    return _0x4b2475;
}
function ic(_0x2367f5) {
    ;
    return _0x2367f5.video_thumbs?.[0];
}
class Q0 extends je {
    constructor(_0x549f04) {
        ;
        super();
        this.worker = _0x549f04;
        this.worker.onerror = _0x20d316 => {
            ;
            try {
                this.dispatchEvent('workerError', _0x20d316);
                this.cleanup();
                this.terminate();
                ;
            } catch {
            }
        };
        this.worker.onmessage = _0x263deb => {
            ;
            this.dispatchEvent(_0x263deb.data.queryMethodListener, ..._0x263deb.data.queryMethodArguments);
        };
        ;
    }
    ['postMessage'](_0x4ecfa8) {
        ;
        this.worker.postMessage(_0x4ecfa8);
    }
    ['terminate']() {
        ;
        this.worker.terminate();
    }
    ['sendQuery'](_0x24dc17, _0xb5cc6f) {
        ;
        this.worker.postMessage({
            'queryMethod': _0x24dc17.shift(),
            'queryMethodArguments': _0x24dc17
        }, Ji ? _0xb5cc6f : void 0);
    }
}
const bf = typeof WebAssembly < 'u';
class Z0 {
    constructor() {
        ;
        this.loadPromise = bf ? void 0 : Promise.reject(Ee('NO_WASM'));
        this.loaded = false;
        this.workersLimit = ne.threads;
        this.players = {};
        this.playersByCacheName = {};
        this.workers = [];
        this.curWorkerNum = 0;
        this.log = Q('LOTTIE', ef.Error);
        this.onPlayerLoaded = (_0x7f541e, _0x38d2e6, _0x2ffbd5) => {
            const _0x1d9f1c = this.players[_0x7f541e];
            if (!_0x1d9f1c) {
                this.log.warn('onPlayerLoaded on destroyed player:', _0x7f541e, _0x38d2e6);
                return;
            }
            this.log.debug('onPlayerLoaded');
            _0x1d9f1c.onLoad(_0x38d2e6, _0x2ffbd5);
            ;
        };
        this.onFrame = (_0x19ec87, _0x20e929, _0x2eb14d) => {
            const _0x360756 = this.players[_0x19ec87];
            if (!_0x360756) {
                this.log.warn('onFrame on destroyed player:', _0x19ec87, _0x20e929);
                return;
            }
            _0x360756.clamped !== void 0 && _0x2eb14d instanceof Uint8ClampedArray && (_0x360756.clamped = _0x2eb14d);
            _0x360756.renderFrame(_0x2eb14d, _0x20e929);
            ;
        };
        this.onPlayerError = (_0x486e9e, _0x1c1ba0) => {
            const _0x1dca22 = this.players[_0x486e9e];
            if (!_0x1dca22) {
                return;
            }
            pe.getAnimations(_0x1dca22.el[0]).forEach(_0x4c18a6 => {
                ;
                pe.removeAnimation(_0x4c18a6);
            });
        };
        I.addEventListener('theme_changed', () => {
            ;
            for (const _0x10d4ba in this.players)
                this.players[_0x10d4ba].applyColorForAllContexts();
        });
        ;
    }
    ['getAnimation'](_0x1ec8ca) {
        ;
        for (const _0xa82841 in this.players)
            if (this.players[_0xa82841].el.includes(_0x1ec8ca)) {
                return this.players[_0xa82841];
            }
        return null;
    }
    ['loadLottieWorkers']() {
        ;
        return this.loadPromise ? this.loadPromise : this.loadPromise = new Promise((_0x515040, _0x2b35e3) => {
            ;
            let _0x4f33fa = this.workersLimit;
            for (let _0x47d352 = 0; _0x47d352 < this.workersLimit; ++_0x47d352) {
                const _0x9f6306 = { type: 'module' };
                ;
                const _0x31a501 = new Worker(new URL('' + new URL('87mszp80d1xj.js', import.meta.url).href, import.meta.url), _0x9f6306), _0x5b6033 = this.workers[_0x47d352] = new Q0(_0x31a501), _0x371b08 = { once: true };
                ;
                const _0x435f50 = { once: true };
                ;
                _0x5b6033.addEventListener('ready', () => {
                    ;
                    this.log('worker #' + _0x47d352 + ' ready');
                    _0x5b6033.addEventListener('frame', this.onFrame);
                    _0x5b6033.addEventListener('loaded', this.onPlayerLoaded);
                    _0x5b6033.addEventListener('error', this.onPlayerError);
                    --_0x4f33fa;
                    _0x4f33fa || (this.log('workers ready'), _0x515040(), this.loaded = true);
                    ;
                }, _0x371b08);
                _0x5b6033.addEventListener('workerError', _0x22a4ed => {
                    ;
                    _0x2b35e3('rlottie load error: ' + _0x22a4ed.message);
                    this.loaded = false;
                    ;
                }, _0x435f50);
                ;
                ;
            }
        });
    }
    ['makeAssetUrl'](_0x595414) {
        ;
        return 'assets/tgs/' + _0x595414 + '.json';
    }
    ['loadAnimationAsAsset'](_0x4f6d2a, _0x177893) {
        ;
        return this.loadAnimationFromURL(_0x4f6d2a, this.makeAssetUrl(_0x177893));
    }
    ['loadAnimationDataFromURL'](_0x49f3c0, _0x5a5c13 = 'blob') {
        ;
        return bf ? (this.loadLottieWorkers(), fetch(_0x49f3c0).then(_0x43c630 => !_0x43c630.headers || _0x43c630.headers.get('content-type') === 'application/octet-stream' ? _0x43c630.arrayBuffer().then(_0x24ba2b => re.invokeCrypto('gzipUncompress', _0x24ba2b)).then(_0x4730c0 => fr(_0x4730c0, '')) : _0x43c630[_0x5a5c13]())) : this.loadPromise;
    }
    ['loadAnimationFromURLManually'](_0x250f6b) {
        const _0x3d2012 = this.makeAssetUrl(_0x250f6b);
        return this.loadAnimationDataFromURL(_0x3d2012).then(_0x443ab7 => _0x1ed52e => this.loadAnimationFromURLNext(_0x443ab7, _0x1ed52e, _0x3d2012));
    }
    ['loadAnimationFromURL'](_0xdf1a54, _0x557a73) {
        ;
        return this.loadAnimationDataFromURL(_0x557a73).then(_0x3333ae => this.loadAnimationFromURLNext(_0x3333ae, _0xdf1a54, _0x557a73));
    }
    ['loadAnimationFromURLNext'](_0x4ced47, _0x3c4ede, _0x3381dd) {
        const _0x1405e5 = {
            animationData: _0x4ced47,
            needUpscale: true
        };
        ;
        ;
        ;
        const _0x3e94ac = Object.assign(_0x3c4ede, _0x1405e5);
        return _0x3e94ac.name || (_0x3e94ac.name = _0x3381dd), this.loadAnimationWorker(_0x3e94ac);
    }
    ['waitForFirstFrame'](_0x5964e8) {
        ;
        return Promise.race([
            new Promise(_0x317a06 => {
                const _0x5bd479 = { once: true };
                ;
                _0x5964e8.addEventListener('firstFrame', _0x317a06, _0x5bd479);
                ;
            }),
            ft(2500)
        ]).then(() => _0x5964e8);
    }
    async ['loadAnimationWorker'](_0x2eb211) {
        ;
        if (!bf) {
            return this.loadPromise;
        }
        this.loaded || await this.loadLottieWorkers();
        const {
            middleware: _0x201ed5,
            group: _0x1a870b = ''
        } = _0x2eb211;
        if (_0x201ed5 && !_0x201ed5()) {
            throw Ee('MIDDLEWARE');
        }
        if (_0x2eb211.sync) {
            const _0x66e777 = xt.CACHE.generateName(_0x2eb211.name, _0x2eb211.width, _0x2eb211.height, _0x2eb211.color, _0x2eb211.toneIndex), _0x5054e8 = this.playersByCacheName[_0x66e777];
            if (_0x5054e8?.size) {
                return Promise.resolve(_0x5054e8.entries().next().value[0]);
            }
        }
        const _0x4baf80 = Lt(_0x2eb211.container);
        if ((!_0x2eb211.width || !_0x2eb211.height) && (_0x2eb211.width = parseInt(_0x4baf80[0].style.width), _0x2eb211.height = parseInt(_0x4baf80[0].style.height)), !_0x2eb211.width || !_0x2eb211.height) {
            throw new Error('No size for sticker!');
        }
        _0x2eb211.group = _0x1a870b;
        const _0x125b56 = this.initPlayer(_0x4baf80, _0x2eb211), _0x643ec6 = {};
        return _0x643ec6.animation = _0x125b56, _0x643ec6.group = _0x1a870b, _0x643ec6.observeElement = _0x125b56.el[0], _0x643ec6.controlled = _0x201ed5, _0x643ec6.liteModeKey = _0x2eb211.liteModeKey, _0x643ec6.type = 'lottie', (pe.addAnimation(_0x643ec6), _0x2eb211.sync || _0x201ed5?.onClean(() => {
            _0x125b56.remove();
        }), _0x125b56);
    }
    ['onDestroy'](_0x5e30fe) {
        ;
        delete this.players[_0x5e30fe];
    }
    ['destroyWorkers']() {
        ;
        bf && (this.workers.forEach((_0xde113e, _0x17d1dc) => {
            ;
            _0xde113e.terminate();
            this.log('worker #' + _0x17d1dc + ' terminated');
            ;
        }), this.log('workers destroyed'), this.workers.length = 0, this.curWorkerNum = 0, this.loaded = false, this.loadPromise = void 0);
    }
    ['initPlayer'](_0x484664, _0x577944) {
        ;
        var _0x16b1cc;
        const _0x322c07 = {
            el: _0x484664,
            worker: this.workers[this.curWorkerNum++],
            options: _0x577944
        };
        ;
        ;
        ;
        ;
        const _0x2b8c5a = new xt(_0x322c07), {
                reqId: _0x214649,
                cacheName: _0x536799
            } = _0x2b8c5a;
        this.players[_0x214649] = _0x2b8c5a;
        const _0x32fc38 = _0x536799 ? (_0x16b1cc = this.playersByCacheName)[_0x536799] ?? (_0x16b1cc[_0x536799] = new Set()) : void 0;
        return _0x536799 && _0x32fc38.add(_0x2b8c5a), this.curWorkerNum >= this.workers.length && (this.curWorkerNum = 0), _0x2b8c5a.addEventListener('destroy', () => {
            ;
            this.onDestroy(_0x214649);
            _0x32fc38.delete(_0x2b8c5a) && !_0x32fc38.size && delete this.playersByCacheName[_0x536799];
            ;
        }), _0x2b8c5a.loadFromData(_0x577944.animationData), _0x2b8c5a;
    }
}
const ls = new Z0();
N.lottieLoader = ls;
const oa = () => ({
        'cleaned': false,
        'inner': [],
        'onCleanCallbacks': []
    }), eu = Ee('MIDDLEWARE');
class tu {
    constructor() {
        ;
        this.details = oa();
        this.onDestroyCallbacks = [];
        this.onDestroy = _0x558a72 => {
            ;
            if (this.destroyed) {
                return _0x558a72();
            }
            this.onDestroyCallbacks.push(_0x558a72);
        };
        ;
    }
    ['clean']() {
        const _0x4c4720 = this.details;
        _0x4c4720.cleaned = true;
        _0x4c4720.inner.splice(0, _0x4c4720.inner.length).forEach(_0x546448 => _0x546448.destroy());
        _0x4c4720.onCleanCallbacks.splice(0, _0x4c4720.onCleanCallbacks.length).forEach(_0x434285 => _0x434285());
        _0x4c4720.middleware = void 0;
        this.details = oa();
        ;
    }
    ['destroy']() {
        ;
        this.destroyed = true;
        this.clean();
        this.onDestroyCallbacks.splice(0, this.onDestroyCallbacks.length).forEach(_0x49ba4d => _0x49ba4d());
        this.parent && (xe(this.parent.details.inner, this), this.parent = void 0);
        ;
    }
    ['createMiddlewareForDetails'](_0x57b91c, _0x4edb7a) {
        const _0x1d90f6 = () => !_0x57b91c.cleaned && (!_0x4edb7a || _0x4edb7a());
        return _0x1d90f6.create = () => {
            ;
            if (!_0x1d90f6()) {
                throw eu;
            }
            const _0x2d89ca = us();
            return _0x2d89ca.parent = this, _0x57b91c.inner.push(_0x2d89ca), _0x2d89ca;
        }, _0x1d90f6.onClean = _0x400712 => {
            ;
            if (!_0x1d90f6()) {
                return _0x400712();
            }
            _0x57b91c.onCleanCallbacks.push(_0x400712);
        }, _0x1d90f6.onDestroy = this.onDestroy, _0x1d90f6;
    }
    ['get'](_0x9b3874) {
        const _0x40ba3e = this.details;
        return _0x40ba3e.cleaned ? this.createMiddlewareForDetails(_0x40ba3e) : _0x9b3874 ? this.createMiddlewareForDetails(_0x40ba3e, _0x9b3874) : _0x40ba3e.middleware ?? (_0x40ba3e.middleware = this.createMiddlewareForDetails(_0x40ba3e));
    }
}
function us() {
    return new tu();
}
function su(_0x3c2d09) {
    return Af(Oe, _0x3c2d09);
}
function ca(..._0x4c97fa) {
    const [_0x39f549, _0x33e87c] = ke(..._0x4c97fa);
    return (..._0x3973f4) => _0x3973f4.length === 0 ? _0x39f549() : _0x33e87c(..._0x3973f4);
}
class fu {
    constructor() {
        ;
        if (bt) {
            return;
        }
        this['_width'] = ca();
        this['_height'] = ca();
        this.viewport = window;
        ;
        const _0x311949 = () => {
            ;
            this.setDimensions();
        };
        this.viewport.addEventListener('resize', _0x311949);
        _0x311949();
        ;
    }
    ['setDimensions']() {
        const _0x31ea7f = this.viewport;
        this['_width'](_0x31ea7f.width || _0x31ea7f.innerWidth);
        this['_height'](_0x31ea7f.height || _0x31ea7f.innerHeight);
        ;
    }
    get ['width']() {
        return this['_width']();
    }
    get ['height']() {
        ;
        return this['_height']();
    }
}
const hs = new fu();
N && (N.windowSize = hs);
const rc = document.createElement('div');
rc.classList.add('emoji-animation-container');
function nu({
    size: _0x4590eb,
    stickerSize: _0x19ef4e,
    doc: _0x2e015f,
    middleware: _0x52539f,
    target: _0x2e0f11,
    side: _0x210f9f,
    skipRatio: _0x576eba,
    play: _0x41312c,
    managers: _0x30994f,
    fullThumb: _0x368b45,
    withRandomOffset: _0xbe5239,
    relativeEffect: _0x59ed66,
    loopEffect: _0x1cd621,
    onUnmount: _0xff7650,
    scrollable: _0x15c119,
    textColor: _0x1c57c3,
    addOffsetX: _0x72db4d = 0,
    addOffsetY: _0x446a0f = 0
}) {
    const _0xc223d5 = document.createElement('div');
    _0xc223d5.classList.add('emoji-animation');
    _0xc223d5.style.width = _0x4590eb + 'px';
    _0xc223d5.style.height = _0x4590eb + 'px';
    ;
    let _0x2e44d0;
    const _0x546434 = () => {
            ;
            _0x336e63.destroy();
            const _0x2c462a = _0x2e44d0;
            _0x2e44d0 = void 0;
            _0x2c462a?.remove();
            _0xc223d5.remove();
            _0xf64739 && _0x15c119.container.removeEventListener('scroll', _0xf64739);
            _0x2c462a && _0xff7650?.();
            ;
        }, _0x336e63 = _0x52539f?.create() ?? us();
    _0x52539f = _0x336e63.get();
    const _0x2d1993 = {
        div: _0xc223d5,
        doc: _0x2e015f,
        middleware: _0x52539f,
        withThumb: false,
        needFadeIn: false,
        loop: !!_0x1cd621,
        width: _0x19ef4e || _0x4590eb,
        height: _0x19ef4e || _0x4590eb,
        play: _0x41312c,
        group: 'none',
        skipRatio: _0x576eba,
        managers: _0x30994f,
        fullThumb: _0x368b45,
        isEffect: true,
        textColor: _0x1c57c3
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0xdd6692 = pn(_0x2d1993).then(({render: _0x2125fa}) => _0x2125fa).then(_0x598170 => {
            ;
            if (!_0x52539f()) {
                throw _0x598170.remove(), Ee('MIDDLEWARE');
            }
            const _0x464791 = { once: true };
            ;
            const _0x175bd7 = {};
            return _0x175bd7.once = true, (_0x2e44d0 = _0x598170, _0x2e44d0.addEventListener('enterFrame', _0x4bc764 => {
                ;
                (!_0x1cd621 && _0x4bc764 === _0x2e44d0.maxFrame || !Ys(_0x2e0f11)) && _0x546434();
            }), _0x2e44d0.addEventListener('destroy', _0x546434), Eo && _0x2e44d0.addEventListener('firstFrame', () => {
                ;
                navigator.vibrate(100);
            }, _0x464791), _0x2e44d0.addEventListener('firstFrame', () => {
                _0xb0372f();
            }, _0x175bd7), _0x2e44d0);
        }), _0x1647bd = _0x10cf2f => {
            const _0x5e01bf = Math.random() * _0x10cf2f * 2;
            return _0x5e01bf > _0x10cf2f ? -_0x5e01bf % _0x10cf2f : _0x5e01bf;
        }, _0x2e661a = _0xbe5239 ? _0x1647bd(16) : 0, _0x5e388f = _0xbe5239 ? _0x1647bd(4) : 0, _0xb0372f = () => {
            ;
            if (!Ys(_0x2e0f11)) {
                _0x546434();
                return;
            }
            const _0x534e53 = _0x2e0f11.getBoundingClientRect(), _0x303727 = _0x534e53.width / 200, _0x5cbad8 = _0x210f9f === 'center' ? 0 : 16 * (_0x210f9f === 'right' ? 1 : -1) * _0x303727, _0x13d134 = _0x210f9f === 'center' ? 0 : 0 * _0x303727, _0x3a229b = _0x210f9f === 'right' ? _0x534e53.right : _0x534e53.left, _0x13fc03 = _0x534e53.top, _0x387986 = (_0x210f9f === 'center' ? (_0x534e53.width - _0x4590eb) / 2 : _0x210f9f === 'right' ? -_0x4590eb : 0) + _0x5cbad8 + _0x2e661a + _0x72db4d * (_0x210f9f === 'right' ? 1 : -1), _0x198f2f = (_0x534e53.height - _0x4590eb) / 2 + _0x13d134 + _0x5e388f + _0x446a0f, _0x52c64b = _0x3a229b + _0x387986, _0x4ad444 = _0x13fc03 + _0x198f2f;
            if (_0x4ad444 <= -_0x4590eb || _0x4ad444 >= hs.height) {
                _0x546434();
                return;
            }
            _0x59ed66 ? (_0x210f9f !== 'center' ? _0xc223d5.style[_0x210f9f] = Math.abs(_0x5cbad8) * -1 + 'px' : _0xc223d5.style.left = _0x387986 + 'px', _0xc223d5.style.top = _0x198f2f + 'px') : (_0xc223d5.style.top = _0x4ad444 + 'px', _0xc223d5.style.left = _0x52c64b + 'px');
        };
    let _0xf64739;
    return _0x15c119 && (_0xf64739 = su(_0xb0372f), _0x15c119.container.addEventListener('scroll', _0xf64739)), _0x59ed66 ? (_0xc223d5.classList.add('is-relative'), _0x2e0f11.parentElement.append(_0xc223d5)) : rc.append(_0xc223d5), {
        'animationDiv': _0xc223d5,
        'stickerPromise': _0xdd6692
    };
}
class iu {
    ['isEnabled']() {
        ;
        return !!(I.settings && I.settings.liteMode.all);
    }
    ['isAvailable'](_0x158520) {
        ;
        return !!(I.settings && !I.settings.liteMode.all && !I.settings.liteMode[_0x158520]);
    }
}
const ot = new iu();
N && (N.liteMode = ot);
const a0_0x13beaf = {};
a0_0x13beaf.check = 'e900';
a0_0x13beaf.checks = 'e901';
a0_0x13beaf.activesessions = 'e902';
a0_0x13beaf.add = 'e903';
a0_0x13beaf.add_reaction = 'e904';
a0_0x13beaf.addboost = 'e905';
a0_0x13beaf.addmember_filled = 'e906';
a0_0x13beaf.adduser = 'e907';
a0_0x13beaf.admin = 'e908';
a0_0x13beaf.ads = 'e909';
a0_0x13beaf.align_center = 'e90a';
a0_0x13beaf.align_left = 'e90b';
a0_0x13beaf.align_right = 'e90c';
a0_0x13beaf.animals = 'e90d';
a0_0x13beaf.animations = 'e90e';
a0_0x13beaf.app_expand = 'e90f';
a0_0x13beaf.app_shrink = 'e910';
a0_0x13beaf.archive = 'e911';
a0_0x13beaf.arrow_down = 'e912';
a0_0x13beaf.arrow_next = 'e913';
a0_0x13beaf.arrow_prev = 'e914';
a0_0x13beaf.arrowcircle = 'e915';
a0_0x13beaf.arrowhead = 'e916';
a0_0x13beaf.attach = 'e917';
a0_0x13beaf.audio_repeat = 'e918';
a0_0x13beaf.audio_repeat_single = 'e919';
a0_0x13beaf.author_hidden = 'e91a';
a0_0x13beaf.avatarnext = 'e91b';
a0_0x13beaf.avatarprevious = 'e91c';
a0_0x13beaf.aversion = 'e91d';
a0_0x13beaf.back = 'e91e';
a0_0x13beaf.binfilled = 'e91f';
a0_0x13beaf.bold = 'e920';
a0_0x13beaf.bomb = 'e921';
a0_0x13beaf.boost = 'e922';
a0_0x13beaf.boostcircle = 'e923';
a0_0x13beaf.bot_filled = 'e924';
a0_0x13beaf.botcom = 'e925';
a0_0x13beaf.bots = 'e926';
a0_0x13beaf.brightness = 'e927';
a0_0x13beaf.brush = 'e928';
a0_0x13beaf.bubblereply = 'e929';
a0_0x13beaf.bug = 'e92a';
a0_0x13beaf.calendar = 'e92b';
a0_0x13beaf.calendarfilter = 'e92c';
a0_0x13beaf.camera = 'e92d';
a0_0x13beaf.cameraadd = 'e92e';
a0_0x13beaf.captiondown = 'e92f';
a0_0x13beaf.captionup = 'e930';
a0_0x13beaf.car = 'e931';
a0_0x13beaf.card = 'e932';
a0_0x13beaf.card_outline = 'e933';
a0_0x13beaf.cash_circle = 'e934';
a0_0x13beaf.channel = 'e935';
a0_0x13beaf.channel_filled = 'e936';
a0_0x13beaf.channelviews = 'e937';
a0_0x13beaf.chatspinned = 'e938';
a0_0x13beaf.chatsplaceholder = 'e939';
a0_0x13beaf.check1 = 'e93a';
a0_0x13beaf.checkbox = 'e93b';
a0_0x13beaf.checkboxblock = 'e93c';
a0_0x13beaf.checkboxempty = 'e93d';
a0_0x13beaf.checkboxon = 'e93e';
a0_0x13beaf.checklist_add = 'e93f';
a0_0x13beaf.checklist_done = 'e940';
a0_0x13beaf.checklist_undone = 'e941';
a0_0x13beaf.checkretract = 'e942';
a0_0x13beaf.checkround = 'e943';
a0_0x13beaf.checkround_filled = 'e944';
a0_0x13beaf.clock = 'e945';
a0_0x13beaf.close = 'e946';
a0_0x13beaf.clouddownload = 'e947';
a0_0x13beaf.collapse = 'e948';
a0_0x13beaf.colorize = 'e949';
a0_0x13beaf.comments = 'e94a';
a0_0x13beaf.commentssticker = 'e94b';
a0_0x13beaf.contrast = 'e94c';
a0_0x13beaf.copy = 'e94d';
a0_0x13beaf.crop = 'e94e';
a0_0x13beaf.cross = 'e94f';
a0_0x13beaf.crossgif = 'e950';
a0_0x13beaf.crossround = 'e951';
a0_0x13beaf.crossstar = 'e952';
a0_0x13beaf.crown = 'e953';
a0_0x13beaf.darkmode = 'e954';
a0_0x13beaf.data = 'e955';
a0_0x13beaf.delete = 'e956';
a0_0x13beaf.delete_filled = 'e957';
a0_0x13beaf.deletedaccount = 'e958';
a0_0x13beaf.deleteleft = 'e959';
a0_0x13beaf.deleteuser = 'e95a';
a0_0x13beaf.devices = 'e95b';
a0_0x13beaf.document = 'e95c';
a0_0x13beaf.down = 'e95d';
a0_0x13beaf.download = 'e95e';
a0_0x13beaf.dragfiles = 'e95f';
a0_0x13beaf.dragmedia = 'e960';
a0_0x13beaf.eats = 'e961';
a0_0x13beaf.edit = 'e962';
a0_0x13beaf.email = 'e963';
a0_0x13beaf.endcall_filled = 'e964';
a0_0x13beaf.enhance = 'e965';
a0_0x13beaf.enter = 'e966';
a0_0x13beaf.equalizer = 'e967';
a0_0x13beaf.expand = 'e968';
a0_0x13beaf.eye = 'e969';
a0_0x13beaf.eye1 = 'e96a';
a0_0x13beaf.eye2 = 'e96b';
a0_0x13beaf.eyecross_outline = 'e96c';
a0_0x13beaf.factcheck = 'e96d';
a0_0x13beaf.fade = 'e96e';
a0_0x13beaf.fast_forward = 'e96f';
a0_0x13beaf.fast_rewind = 'e970';
a0_0x13beaf.favourites = 'e971';
a0_0x13beaf.flag = 'e972';
a0_0x13beaf.flip = 'e973';
a0_0x13beaf.flip_image_horizontal = 'e974';
a0_0x13beaf.folder = 'e975';
a0_0x13beaf.fontframe = 'e976';
a0_0x13beaf.fontframe_bg = 'e977';
a0_0x13beaf.fontframe_outline = 'e978';
a0_0x13beaf.fontsize = 'e979';
a0_0x13beaf.forward = 'e97a';
a0_0x13beaf.forward_filled = 'e97b';
a0_0x13beaf.free_transform = 'e97c';
a0_0x13beaf.fullscreen = 'e97d';
a0_0x13beaf.gc_microphone = 'e97e';
a0_0x13beaf.gc_microphoneoff = 'e97f';
a0_0x13beaf.gem = 'e980';
a0_0x13beaf.gem_exchange = 'e981';
a0_0x13beaf.gem_transfer = 'e982';
a0_0x13beaf.geometric_digit_0 = 'e983';
a0_0x13beaf.geometric_digit_1 = 'e984';
a0_0x13beaf.geometric_digit_2 = 'e985';
a0_0x13beaf.geometric_digit_3 = 'e986';
a0_0x13beaf.geometric_digit_4 = 'e987';
a0_0x13beaf.geometric_digit_5 = 'e988';
a0_0x13beaf.geometric_digit_6 = 'e989';
a0_0x13beaf.geometric_digit_7 = 'e98a';
a0_0x13beaf.geometric_digit_8 = 'e98b';
a0_0x13beaf.geometric_digit_9 = 'e98c';
a0_0x13beaf.geometric_dot = 'e98d';
a0_0x13beaf.geometric_letter_x = 'e98e';
a0_0x13beaf.gifs = 'e98f';
a0_0x13beaf.gift = 'e990';
a0_0x13beaf.gift_premium = 'e991';
a0_0x13beaf.grain = 'e992';
a0_0x13beaf.group = 'e993';
a0_0x13beaf.group_filled = 'e994';
a0_0x13beaf.groupmedia = 'e995';
a0_0x13beaf.groupmediaoff = 'e996';
a0_0x13beaf.hand = 'e997';
a0_0x13beaf.help = 'e998';
a0_0x13beaf.hide = 'e999';
a0_0x13beaf.highlights = 'e99a';
a0_0x13beaf.image = 'e99b';
a0_0x13beaf.image_original = 'e99c';
a0_0x13beaf.info = 'e99d';
a0_0x13beaf.info2 = 'e99e';
a0_0x13beaf.italic = 'e99f';
a0_0x13beaf.key = 'e9a0';
a0_0x13beaf.keyboard = 'e9a1';
a0_0x13beaf.lamp = 'e9a2';
a0_0x13beaf.language = 'e9a3';
a0_0x13beaf.largepause = 'e9a4';
a0_0x13beaf.largeplay = 'e9a5';
a0_0x13beaf.left = 'e9a6';
a0_0x13beaf.limit_chat = 'e9a7';
a0_0x13beaf.limit_chats = 'e9a8';
a0_0x13beaf.limit_file = 'e9a9';
a0_0x13beaf.limit_folders = 'e9aa';
a0_0x13beaf.limit_link = 'e9ab';
a0_0x13beaf.limit_pin = 'e9ac';
a0_0x13beaf.link = 'e9ad';
a0_0x13beaf.link_paid = 'e9ae';
a0_0x13beaf.list = 'e9af';
a0_0x13beaf.listscreenshare = 'e9b0';
a0_0x13beaf.livelocation = 'e9b1';
a0_0x13beaf.location = 'e9b2';
a0_0x13beaf.lock = 'e9b3';
a0_0x13beaf.lockoff = 'e9b4';
a0_0x13beaf.loginlogodesktop = 'e9b5';
a0_0x13beaf.loginlogomobile = 'e9b6';
a0_0x13beaf.logout = 'e9b7';
a0_0x13beaf.mac_command_key = 'e9b8';
a0_0x13beaf.mediaspeed_empty = 'e9b9';
a0_0x13beaf.mediaspoiler = 'e9ba';
a0_0x13beaf.mediaspoileroff = 'e9bb';
a0_0x13beaf.mention = 'e9bc';
a0_0x13beaf.menu = 'e9bd';
a0_0x13beaf.message = 'e9be';
a0_0x13beaf.message_jump = 'e9bf';
a0_0x13beaf.message_quote = 'e9c0';
a0_0x13beaf.messageunread = 'e9c1';
a0_0x13beaf.microphone = 'e9c2';
a0_0x13beaf.microphone_crossed = 'e9c3';
a0_0x13beaf.microphone_crossed_filled = 'e9c4';
a0_0x13beaf.microphone_filled = 'e9c5';
a0_0x13beaf.minus = 'e9c6';
a0_0x13beaf.monospace = 'e9c7';
a0_0x13beaf.more = 'e9c8';
a0_0x13beaf.multistories = 'e9c9';
a0_0x13beaf.mute = 'e9ca';
a0_0x13beaf.muted = 'e9cb';
a0_0x13beaf.mynotes = 'e9cc';
a0_0x13beaf.newchannel = 'e9cd';
a0_0x13beaf.newchannel_filled = 'e9ce';
a0_0x13beaf.newchat_filled = 'e9cf';
a0_0x13beaf.newgroup = 'e9d0';
a0_0x13beaf.newgroup_filled = 'e9d1';
a0_0x13beaf.newprivate = 'e9d2';
a0_0x13beaf.newprivate_filled = 'e9d3';
a0_0x13beaf.newtab = 'e9d4';
a0_0x13beaf.next = 'e9d5';
a0_0x13beaf.nochannel = 'e9d6';
a0_0x13beaf.noncontacts = 'e9d7';
a0_0x13beaf.nosound = 'e9d8';
a0_0x13beaf.online = 'e9d9';
a0_0x13beaf.passwordoff = 'e9da';
a0_0x13beaf.pause = 'e9db';
a0_0x13beaf.permissions = 'e9dc';
a0_0x13beaf.person = 'e9dd';
a0_0x13beaf.phone = 'e9de';
a0_0x13beaf.phone_filled = 'e9df';
a0_0x13beaf.pin = 'e9e0';
a0_0x13beaf.pin2 = 'e9e1';
a0_0x13beaf.pinlist = 'e9e2';
a0_0x13beaf.pinned_filled = 'e9e3';
a0_0x13beaf.pinnedchat = 'e9e4';
a0_0x13beaf.pip = 'e9e5';
a0_0x13beaf.play = 'e9e6';
a0_0x13beaf.playback_05 = 'e9e7';
a0_0x13beaf.playback_15 = 'e9e8';
a0_0x13beaf.playback_1x = 'e9e9';
a0_0x13beaf.playback_2x = 'e9ea';
a0_0x13beaf.plus = 'e9eb';
a0_0x13beaf.plusround = 'e9ec';
a0_0x13beaf.poll = 'e9ed';
a0_0x13beaf.premium_addone = 'e9ee';
a0_0x13beaf.premium_avatars = 'e9ef';
a0_0x13beaf.premium_badge = 'e9f0';
a0_0x13beaf.premium_colors = 'e9f1';
a0_0x13beaf.premium_double = 'e9f2';
a0_0x13beaf.premium_emoji = 'e9f3';
a0_0x13beaf.premium_filesize = 'e9f4';
a0_0x13beaf.premium_lastseen = 'e9f5';
a0_0x13beaf.premium_limits = 'e9f6';
a0_0x13beaf.premium_lock = 'e9f7';
a0_0x13beaf.premium_management = 'e9f8';
a0_0x13beaf.premium_noads = 'e9f9';
a0_0x13beaf.premium_privacy = 'e9fa';
a0_0x13beaf.premium_reactions = 'e9fb';
a0_0x13beaf.premium_restrict = 'e9fc';
a0_0x13beaf.premium_speed = 'e9fd';
a0_0x13beaf.premium_status = 'e9fe';
a0_0x13beaf.premium_stickers = 'e9ff';
a0_0x13beaf.premium_tags = 'ea00';
a0_0x13beaf.premium_transcription = 'ea01';
a0_0x13beaf.premium_translate = 'ea02';
a0_0x13beaf.premium_unlock = 'ea03';
a0_0x13beaf.premium_wallpaper = 'ea04';
a0_0x13beaf.previous = 'ea05';
a0_0x13beaf.promote = 'ea06';
a0_0x13beaf.quote = 'ea07';
a0_0x13beaf.quote_outline = 'ea08';
a0_0x13beaf.radiooff = 'ea09';
a0_0x13beaf.radioon = 'ea0a';
a0_0x13beaf.reactions = 'ea0b';
a0_0x13beaf.reactions_filled = 'ea0c';
a0_0x13beaf.readchats = 'ea0d';
a0_0x13beaf.recent = 'ea0e';
a0_0x13beaf.redo = 'ea0f';
a0_0x13beaf.replace = 'ea10';
a0_0x13beaf.reply = 'ea11';
a0_0x13beaf.reply_filled = 'ea12';
a0_0x13beaf.restrict = 'ea13';
a0_0x13beaf.revenue = 'ea14';
a0_0x13beaf.rightpanel = 'ea15';
a0_0x13beaf.rotate = 'ea16';
a0_0x13beaf.rotate_left = 'ea17';
a0_0x13beaf.rotate_right = 'ea18';
a0_0x13beaf.round_chats_filled = 'ea19';
a0_0x13beaf.saturation = 'ea1a';
a0_0x13beaf.saved = 'ea1b';
a0_0x13beaf.savedmessages = 'ea1c';
a0_0x13beaf.schedule = 'ea1d';
a0_0x13beaf.scheduled = 'ea1e';
a0_0x13beaf.search = 'ea1f';
a0_0x13beaf.select = 'ea20';
a0_0x13beaf.send = 'ea21';
a0_0x13beaf.send2 = 'ea22';
a0_0x13beaf.sending = 'ea23';
a0_0x13beaf.sendingerror = 'ea24';
a0_0x13beaf.settings = 'ea25';
a0_0x13beaf.settings_clipped_corner = 'ea26';
a0_0x13beaf.settings_filled = 'ea27';
a0_0x13beaf.shadows = 'ea28';
a0_0x13beaf.sharescreen_filled = 'ea29';
a0_0x13beaf.sharpen = 'ea2a';
a0_0x13beaf.shipping = 'ea2b';
a0_0x13beaf.shuffle = 'ea2c';
a0_0x13beaf.smallscreen = 'ea2d';
a0_0x13beaf.smile = 'ea2e';
a0_0x13beaf.speaker = 'ea2f';
a0_0x13beaf.speakerfilled = 'ea30';
a0_0x13beaf.speakeroff = 'ea31';
a0_0x13beaf.speakerofffilled = 'ea32';
a0_0x13beaf.spoiler = 'ea33';
a0_0x13beaf.sport = 'ea34';
a0_0x13beaf.star = 'ea35';
a0_0x13beaf.star_filled = 'ea36';
a0_0x13beaf.statistics = 'ea37';
a0_0x13beaf.stickers = 'ea38';
a0_0x13beaf.stickers_face = 'ea39';
a0_0x13beaf.stop = 'ea3a';
a0_0x13beaf.stories = 'ea3b';
a0_0x13beaf.storyreply = 'ea3c';
a0_0x13beaf.storyrepost = 'ea3d';
a0_0x13beaf.strikethrough = 'ea3e';
a0_0x13beaf.tag = 'ea3f';
a0_0x13beaf.tag_add = 'ea40';
a0_0x13beaf.tag_alt = 'ea41';
a0_0x13beaf.tag_crossed = 'ea42';
a0_0x13beaf.tag_filter = 'ea43';
a0_0x13beaf.tag_name = 'ea44';
a0_0x13beaf.text = 'ea45';
a0_0x13beaf.textedit = 'ea46';
a0_0x13beaf.timer = 'ea47';
a0_0x13beaf.tip = 'ea48';
a0_0x13beaf.tools = 'ea49';
a0_0x13beaf.topics = 'ea4a';
a0_0x13beaf.trade = 'ea4b';
a0_0x13beaf.transcribe = 'ea4c';
a0_0x13beaf.unarchive = 'ea4d';
a0_0x13beaf.unclaimed = 'ea4e';
a0_0x13beaf.underline = 'ea4f';
a0_0x13beaf.undo = 'ea50';
a0_0x13beaf.unmute = 'ea51';
a0_0x13beaf.unpack = 'ea52';
a0_0x13beaf.unpin = 'ea53';
a0_0x13beaf.unread = 'ea54';
a0_0x13beaf.up = 'ea55';
a0_0x13beaf.user = 'ea56';
a0_0x13beaf.username = 'ea57';
a0_0x13beaf.videocamera = 'ea58';
a0_0x13beaf.videocamera_crossed_filled = 'ea59';
a0_0x13beaf.videocamera_filled = 'ea5a';
a0_0x13beaf.videochat = 'ea5b';
a0_0x13beaf.vignette = 'ea5c';
a0_0x13beaf.volume_down = 'ea5d';
a0_0x13beaf.volume_mute = 'ea5e';
a0_0x13beaf.volume_off = 'ea5f';
a0_0x13beaf.volume_up = 'ea60';
a0_0x13beaf.warmth = 'ea61';
a0_0x13beaf.webview = 'ea62';
a0_0x13beaf.win_key = 'ea63';
a0_0x13beaf.zoomin = 'ea64';
a0_0x13beaf.zoomout = 'ea65';
;
const ru = a0_0x13beaf, au = new Set([
        'avatarnext',
        'avatarprevious',
        'arrow_next',
        'channel',
        'chatspinned',
        'fast_forward',
        'fast_rewind',
        'forward',
        'forward_filled',
        'group',
        'group_filled',
        'left',
        'listscreenshare',
        'logout',
        'muted',
        'newchannel_filled',
        'newchannel',
        'newgroup',
        'newgroup_filled',
        'next',
        'nosound',
        'previous',
        'send',
        'send2',
        'reply',
        'reply_filled',
        'sharescreen_filled',
        'transcribe',
        'storyreply',
        'premium_noads',
        'topics',
        'pinlist',
        'deleteleft'
    ]);
function ou(_0x395633) {
    ;
    return String.fromCharCode(parseInt(ru[_0x395633], 16));
}
function At(_0x544f1e, ..._0x10cab5) {
    const _0x2a91d8 = document.createElement('span');
    return ue.isRTL && au.has(_0x544f1e) && _0x10cab5.push('icon-reflect'), _0x2a91d8.classList.add(Oi, ..._0x10cab5), _0x2a91d8.textContent = ou(_0x544f1e), _0x2a91d8;
}
function cu(_0x249cda, _0x2b8ad4) {
    ;
    _0x249cda.isSeeking = true;
    _0x249cda.currentTime = _0x2b8ad4;
    ;
}
const pr = Ri, du = pr;
async function br(_0x1ab002) {
    const _0x5eaac8 = _0x1ab002.firstElementChild;
    if (!_0x5eaac8) {
        throw _0x1ab002.src = '', _0x1ab002.load(), new Error('leak');
    }
    const _0x57d78a = _0x1ab002.paused;
    if (_0x5eaac8.remove(), _0x1ab002.load(), !_0x1ab002.childElementCount && !_0x1ab002.src) {
        throw new Error('leak');
    }
    return _0x57d78a ? cu(_0x1ab002, 0.0001) : hr(_0x1ab002), uu(_0x1ab002, $o(_0x1ab002));
}
async function lu(_0xbcfb2, _0x3caf7a = !_0xbcfb2.getVideoPlaybackQuality().totalVideoFrames) {
    if (_0x3caf7a) {
        return br(_0xbcfb2);
    }
}
async function uu(_0x418319, _0x1a0b1d) {
    ;
    if (!pr) {
        return _0x1a0b1d;
    }
    const _0x4b1b72 = _0x120f4b => {
            ;
            _0x120f4b.then(_0x81c830.resolve.bind(_0x81c830), _0x81c830.reject.bind(_0x81c830));
        }, _0x21bc14 = () => _0x4b1b72(lu(_0x418319)), _0x81c830 = q();
    try {
        await _0x1a0b1d;
    } catch {
        _0x21bc14();
        return;
    }
    if (_0x418319.getVideoPlaybackQuality().totalVideoFrames || _0x418319.readyState > _0x418319.HAVE_METADATA) {
        _0x81c830.resolve();
        return;
    }
    const _0x16e81d = {};
    return _0x16e81d.once = true, (_0x418319.addEventListener('timeupdate', _0x21bc14, _0x16e81d), _0x81c830);
}
const Bs = [
        'seeked',
        'canplay',
        'canplaythrough',
        'seeking'
    ], hu = Bs.length, da = new WeakMap(), ii = new WeakMap();
function la(_0x460d9a) {
    const {
        type: _0x2aaf07,
        target: _0x4d9aab
    } = _0x460d9a;
    if (!(_0x4d9aab instanceof HTMLVideoElement) || _0x4d9aab.readyState > _0x4d9aab.HAVE_METADATA || _0x4d9aab.isSeeking || _0x4d9aab.ignoreLeak) {
        return;
    }
    let _0x13098f = da.get(_0x4d9aab);
    if (_0x13098f || da.set(_0x4d9aab, _0x13098f = { 'events': new Set() }), !_0x13098f.events.has(_0x2aaf07) && (_0x13098f.events.add(_0x2aaf07), _0x13098f.events.size === hu)) {
        const _0x39297e = Array.from(_0x13098f.events), _0x135736 = Bs.indexOf(_0x39297e[0]), _0x500dca = Bs.slice(_0x135736).concat(Bs.slice(0, _0x135736));
        if (!Rf(_0x39297e, _0x500dca)) {
            return;
        }
        const _0x604135 = ii.get(_0x4d9aab);
        _0x604135 ? (_0x604135(), ii.delete(_0x4d9aab)) : br(_0x4d9aab).catch(ve);
    }
}
function mu(_0xdfc927, _0x58060b) {
    ;
    return _0xdfc927.addEventListener(_0x58060b, la, true), () => _0xdfc927.removeEventListener(_0x58060b, la, true);
}
function ac(_0x13f913) {
    ;
    if (!pr) {
        return;
    }
    const _0x38498a = Bs.map(_0x39d87d => mu(_0x13f913, _0x39d87d));
    return () => {
        ;
        _0x38498a.forEach(_0x260f80 => _0x260f80());
    };
}
ac(document);
function gu() {
    const _0x51d0c8 = us();
    return is(() => _0x51d0c8.destroy()), _0x51d0c8;
}
const pu = 1.49, yf = {}, _f = {}, ua = (_0x44cf87, _0x2e2a3a, _0x4b8d1b) => {
        const _0x4892dd = () => {
            ;
            _0x44cf87.removeEventListener('animationend', _0x4892dd);
            _0x2e2a3a();
            clearTimeout(_0x463fbb);
            ;
        };
        _0x44cf87.addEventListener('animationend', _0x4892dd);
        const _0x463fbb = setTimeout(_0x4892dd, _0x4b8d1b);
    }, zt = _0x1380ed => {
        const _0x399534 = _0x1380ed.childElementCount;
        return _0x399534 ? _0x1380ed.firstElementChild.classList.contains('premium-sticker-lock') && _0x399534 === 1 : true;
    }, ha = _0x52e7d8 => {
        ;
        let _0x1e8945 = _0x52e7d8.firstElementChild;
        return _0x1e8945 && _0x1e8945.classList.contains('premium-sticker-lock') && (_0x1e8945 = _0x1e8945.nextElementSibling), _0x1e8945;
    };
async function pn({
    doc: _0x1463a0,
    div: _0x34c3ee,
    middleware: _0x597804,
    loadStickerMiddleware: _0x2e906c,
    lazyLoadQueue: _0x2e041e,
    exportLoad: _0x212ef7,
    group: _0x4b2f3f,
    play: _0x74bc8f,
    onlyThumb: _0x1baae9,
    emoji: _0xa3263d,
    width: _0x22a12e,
    height: _0x3e8f81,
    withThumb: _0x1ce272,
    loop: _0x1366d2,
    loadPromises: _0x44f200,
    needFadeIn: _0x45275c,
    needUpscale: _0x458c95,
    skipRatio: _0x155857,
    static: _0x37b4c6,
    managers: _0x193773 = I.managers,
    fullThumb: _0x53b8a2,
    isOut: _0x558ae8,
    noPremium: _0x47d08d,
    withLock: _0x18e99e,
    relativeEffect: _0x5c6dc8,
    loopEffect: _0x3c43fb,
    isCustomEmoji: _0x59890e,
    syncedVideo: _0x5658d6,
    liteModeKey: _0xf2400c,
    isEffect: _0x1aaef7,
    textColor: _0x134717,
    scrollable: _0x45cc70,
    showPremiumInfo: _0x253a22,
    useCache: _0x299083
}) {
    const _0x8db02a = arguments[0];
    _0x34c3ee = Lt(_0x34c3ee);
    _0xf2400c ?? (_0xf2400c = 'stickers_panel');
    _0x59890e && (_0xa3263d = _0x1463a0.stickerEmojiRaw);
    ;
    const _0x307d2c = _0x1463a0.sticker;
    if ((_0x307d2c === 1 || _0x307d2c === 3 && !tr) && (_0x37b4c6 = true), !_0x22a12e && !_0x3e8f81) {
        const _0xd68fc = sf.active, _0x39a086 = _0xa3263d ? _0xd68fc.emojiSticker : _0x1463a0.animated ? _0xd68fc.animatedSticker : _0xd68fc.staticSticker, _0x568060 = H(_0x1463a0.w, _0x1463a0.h).aspectFitted(_0x39a086);
        _0x22a12e = _0x568060.width;
        _0x3e8f81 = _0x568060.height;
        ;
    }
    _0x307d2c === 2 && ls.loadLottieWorkers();
    _0x1366d2 = !!(!_0xa3263d || _0x59890e) && _0x1366d2;
    _0x34c3ee.forEach(_0x384281 => {
        ;
        _0x384281.dataset.docId = '' + _0x1463a0.id;
        _0xa3263d && (_0x384281.dataset.stickerEmoji = _0xa3263d);
        _0x384281.classList.add('media-sticker-wrapper');
        ;
    });
    _0x74bc8f && _0xf2400c && !ot.isAvailable(_0xf2400c) && !_0x59890e && !_0x1aaef7 && (_0x74bc8f = false, _0x1366d2 = false);
    ;
    let _0x3fc79b;
    const _0x1cecc4 = (_0x50a60b = _0x3fc79b?.type) => _0x3fc79b = re.getCacheContext(_0x1463a0, _0x50a60b), _0x3eedba = !_0x37b4c6 && (_0x307d2c === 2 || _0x307d2c === 3), _0x3cbedc = ic(_0x1463a0);
    _0x558ae8 !== void 0 && _0x3cbedc && !_0x558ae8 && _0x34c3ee.forEach(_0x199455 => _0x199455.classList.add('reflect-x'));
    const _0x25ac8c = _0x3cbedc && _0x18e99e;
    if (_0x25ac8c) {
        const _0x404bdb = yf[_0x1463a0.id];
        _0x34c3ee.forEach(_0x5cf358 => {
            ;
            _0x5cf358.classList.add('is-premium-sticker');
            _0x5cf358.append(At('premium_lock', 'premium-sticker-lock'));
            _0x404bdb && _0x5cf358.style.setProperty('--lock-url', 'url(' + _0x404bdb + ')');
            ;
        });
    }
    if (_0x37b4c6 && _0x307d2c !== 1) {
        const _0x2adbd1 = aa(_0x1463a0, _0x22a12e, _0x3e8f81, false);
        _0x1cecc4(_0x2adbd1.type);
    } else {
        _0x1cecc4(_0x53b8a2?.type);
    }
    const _0x391e29 = _0x1463a0.attributes.find(_0x1c1779 => _0x1c1779['_'] === 'documentAttributeCustomEmoji');
    !_0x391e29 || !_0x391e29.pFlags.text_color ? _0x134717 = void 0 : _0x134717 || (_0x134717 = 'primary-text-color');
    const _0x57bba4 = _0xa3263d && !_0x59890e ? $l(_0xa3263d) : -1, _0x40acb4 = _0x57bba4 === -1 ? _0x134717 ?? _0x57bba4 : _0x57bba4, _0x2e83f4 = _0x3fc79b.downloaded && !_0x45275c, _0x389a9d = _0x3eedba, _0x53fce7 = _0x307d2c === 2 || _0x307d2c === 3 ? re.getStickerCachedThumb(_0x1463a0.id, _0x40acb4) : void 0, _0x21e3b5 = {
            'render': void 0,
            'load': void 0,
            'width': _0x22a12e,
            'height': _0x3e8f81,
            'downloaded': _0x2e83f4
        };
    let _0x4c7ac4 = q(), _0x206425 = false;
    if ((_0x1463a0.thumbs?.length || _0x53fce7) && zt(_0x34c3ee[0]) && (!_0x2e83f4 || _0x389a9d || _0x1baae9) && _0x1ce272 !== false) {
        let _0x312258 = _0x53fce7 || _0x1463a0.thumbs[0];
        const _0x5cd740 = (_0xd82243, _0x141303) => {
            ;
            zt(_0xd82243) ? ut.mutateElement(_0xd82243, () => {
                ;
                zt(_0xd82243) && (_0x141303.classList.add('media-sticker', 'thumbnail'), _0xd82243.append(_0x141303));
                _0x4c7ac4.resolve();
                ;
            }) : _0x4c7ac4.resolve();
        };
        if ('url' in _0x312258) {
            _0x206425 = true;
            _0x34c3ee.forEach(_0xe925c8 => {
                const _0x3ee0c3 = new Image();
                Pf(_0x3ee0c3, _0x312258.url, () => _0x5cd740(_0xe925c8, _0x3ee0c3));
            });
            ;
        } else {
            if ('bytes' in _0x312258) {
                if (_0x312258['_'] === 'photoPathSize') {
                    _0x312258.bytes.length || (_0x312258 = _0x1463a0.thumbs.find(_0x4a871b => _0x4a871b.bytes?.length) || _0x312258);
                    const {svg: _0x2cec70} = h0(_0x312258.bytes, _0x1463a0.w, _0x1463a0.h);
                    _0x2cec70.classList.add('rlottie-vector', 'media-sticker', 'thumbnail');
                    _0x34c3ee.forEach((_0x3cebcb, _0x46cf24) => _0x3cebcb.append(_0x46cf24 > 0 ? _0x2cec70.cloneNode(true) : _0x2cec70));
                    _0x206425 = true;
                    _0x4c7ac4.resolve();
                    ;
                } else {
                    if (_0x57bba4 <= 0) {
                        const _0x3ad836 = () => {
                            ;
                            _0x34c3ee.forEach(_0x3ee4b5 => {
                                const _0x44e094 = new Image(), _0x5b870a = Jo(_0x1463a0, _0x312258, true);
                                Pf(_0x44e094, _0x5b870a, () => _0x5cd740(_0x3ee4b5, _0x44e094), _0x299083);
                            });
                        };
                        Qi || _0x1463a0.pFlags.stickerThumbConverted || _0x3fc79b.url ? (_0x206425 = true, _0x3ad836()) : (_0x206425 = true, $i.convert('main-' + _0x1463a0.id, _0x312258.bytes).then(_0x583e2e => {
                            ;
                            if (_0x193773.appDocsManager.saveWebPConvertedStrippedThumb(_0x1463a0.id, _0x583e2e), _0x312258.bytes = _0x583e2e, _0x1463a0.pFlags.stickerThumbConverted = true, _0x597804 && !_0x597804() || !zt(_0x34c3ee[0])) {
                                _0x4c7ac4.resolve();
                                return;
                            }
                            _0x3ad836();
                        }).catch(() => _0x4c7ac4.resolve()));
                    }
                }
            } else {
                if ((_0x307d2c === 2 && _0x57bba4 <= 0 || _0x307d2c === 3) && (_0x1ce272 || _0x1baae9)) {
                    const _0x5d7b05 = async () => {
                            ;
                            if (!zt(_0x34c3ee[0]) || _0x597804 && !_0x597804()) {
                                _0x4c7ac4.resolve();
                                return;
                            }
                            const _0x40f7a6 = (_0x56c28e, _0x58251e, _0x533f16) => {
                                ;
                                if (!zt(_0x56c28e) || _0x597804 && !_0x597804()) {
                                    _0x4c7ac4.resolve();
                                    return;
                                }
                                _0x533f16 ? Pf(_0x58251e, _0x533f16, () => _0x5cd740(_0x56c28e, _0x58251e), _0x299083) : _0x5cd740(_0x56c28e, _0x58251e);
                            };
                            _0x1cecc4();
                            _0x34c3ee.forEach(_0x27eee6 => {
                                ;
                                if (_0x3fc79b.url) {
                                    _0x40f7a6(_0x27eee6, new Image(), _0x3fc79b.url);
                                } else {
                                    if ('bytes' in _0x312258) {
                                        const _0x49b79e = I0(_0x1463a0, _0x312258, true);
                                        _0x49b79e.loadPromise.then(() => _0x40f7a6(_0x27eee6, _0x49b79e.image, ''));
                                    } else {
                                        _s.downloadMediaURL({
                                            'media': _0x1463a0,
                                            'thumb': _0x312258
                                        }).then(async _0x576961 => _0x40f7a6(_0x27eee6, new Image(), _0x576961));
                                    }
                                }
                            });
                            ;
                        }, _0x64ed12 = {
                            div: _0x34c3ee[0],
                            load: _0x5d7b05
                        };
                    ;
                    ;
                    ;
                    if (_0x2e041e && _0x1baae9) {
                        return _0x2e041e.push(_0x64ed12), _0x4c7ac4.resolve(), _0x21e3b5;
                    }
                    _0x5d7b05();
                    _0x312258.url && (_0x206425 = true);
                    ;
                }
            }
        }
    }
    if (_0x44f200 && _0x206425 && _0x44f200.push(_0x4c7ac4), _0x1baae9) {
        return _0x21e3b5;
    }
    const _0x5b9ec0 = Ee('MIDDLEWARE'), _0x196bbd = async () => {
            ;
            if (_0x597804 && !_0x597804()) {
                throw _0x5b9ec0;
            }
            if (_0x307d2c === 2 && !_0x37b4c6) {
                const _0x31e273 = {
                    media: _0x1463a0,
                    queueId: _0x2e041e?.queueId,
                    thumb: _0x53b8a2
                };
                ;
                ;
                ;
                ;
                const _0x1e9e86 = await _s.downloadMedia(_0x31e273);
                if (_0x597804 && !_0x597804()) {
                    throw _0x5b9ec0;
                }
                const _0x17c926 = {
                    container: _0x34c3ee[0],
                    loop: _0x1366d2,
                    autoplay: _0x74bc8f,
                    animationData: _0x1e9e86,
                    width: _0x22a12e,
                    height: _0x3e8f81,
                    name: 'doc' + _0x1463a0.id,
                    needUpscale: _0x458c95,
                    skipRatio: _0x155857,
                    toneIndex: _0x57bba4,
                    sync: _0x59890e,
                    middleware: _0x2e906c ?? _0x597804,
                    group: _0x4b2f3f,
                    liteModeKey: _0xf2400c || void 0,
                    textColor: _0x59890e ? void 0 : _0x134717
                };
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                const _0x465da6 = await ls.loadAnimationWorker(_0x17c926), _0x4cf156 = _0x25ac8c ? () => {
                        ;
                        var _0x25ff9f;
                        const _0x423d4f = yf[_0x25ff9f = _0x1463a0.id] ?? (yf[_0x25ff9f] = m0(_0x465da6.canvas[0]));
                        _0x34c3ee.forEach(_0x176c0a => _0x176c0a.style.setProperty('--lock-url', 'url(' + _0x423d4f + ')'));
                    } : void 0, _0x58cd63 = (_0x56d9fa, _0x1fd265) => {
                        ;
                        let _0x47ebb9 = ha(_0x56d9fa);
                        _0x47ebb9 = _0x47ebb9 !== _0x1fd265 && _0x47ebb9;
                        _0x45275c !== false && (_0x45275c = (_0x45275c || !_0x47ebb9 || _0x47ebb9.tagName === 'svg') && ot.isAvailable('animations'));
                        ;
                        const _0x310f65 = () => {
                            ;
                            _0x47ebb9 && _0x47ebb9 !== _0x1fd265 && _0x47ebb9.tagName !== 'DIV' && _0x47ebb9.remove();
                        };
                        _0x45275c ? ut.mutate(() => {
                            ;
                            _0x1fd265 && _0x1fd265.classList.add('fade-in');
                            _0x47ebb9 && _0x47ebb9.classList.add('fade-out');
                            ua(_0x1fd265 || _0x47ebb9, () => {
                                ;
                                ut.mutate(() => {
                                    ;
                                    _0x1fd265 && _0x1fd265.classList.remove('fade-in');
                                    _0x310f65();
                                    ;
                                });
                            }, 400);
                            ;
                        }) : _0x47ebb9 && ut.mutate(_0x310f65);
                    }, _0x52cbaa = {};
                return _0x52cbaa.once = true, (_0x465da6.addEventListener('firstFrame', () => {
                    const _0x246cef = _0x465da6.canvas[0];
                    (_0x1ce272 !== false || _0x59890e) && ia(_0x1463a0, _0x246cef, _0x40acb4);
                    _0x25ac8c && _0x4cf156();
                    _0x59890e || _0x34c3ee.forEach((_0x5c27c4, _0x1679fa) => {
                        ;
                        _0x58cd63(_0x5c27c4, _0x465da6.canvas[_0x1679fa]);
                    });
                    ;
                }, _0x52cbaa), _0xa3263d && _0x193773.appStickersManager.preloadAnimatedEmojiStickerAnimation(_0xa3263d), _0x465da6);
            } else {
                if (_0x37b4c6 || _0x307d2c === 3) {
                    const _0x54ead7 = _0x3eedba && _0x5658d6, _0x592c24 = _0x54ead7 ? gr.generateName('' + _0x1463a0.id, 0, 0, void 0, void 0) : void 0, _0x5ec46e = _f[_0x592c24];
                    if (_0x5ec46e) {
                        return _0x5ec46e;
                    }
                    const _0x5a54d8 = (_0x54ead7 ? _0x34c3ee.slice(0, 1) : _0x34c3ee).map(() => {
                            ;
                            let _0x5b3209;
                            if (_0x37b4c6) {
                                _0x5b3209 = new Image();
                            } else {
                                const _0xbc3141 = { middleware: _0x597804 };
                                ;
                                const _0x5c5ea6 = _0x5b3209 = y0(_0xbc3141);
                                if (_0x5c5ea6.muted = true, _0x74bc8f && (_0x5c5ea6.autoplay = true), _0x1366d2 && (_0x5c5ea6.loop = true), _0x5c5ea6['_autoplay'] = _0x74bc8f || false, _0x5c5ea6['_loop'] = _0x1366d2 || false, _0x1366d2 && typeof _0x1366d2 == 'number') {
                                    let _0xb8575e = function () {
                                            ;
                                            _0x566910 > this.currentTime && ++_0x261bb9 === _0x1366d2 && (this.autoplay = false, this.loop = false, this.pause(), _0x5c5ea6.removeEventListener('timeupdate', _0xb8575e));
                                            this.timeUpdatedTimes = (this.timeUpdatedTimes || 0) + 1;
                                            _0x566910 = this.currentTime;
                                            ;
                                        }, _0x566910 = 0, _0x261bb9 = 0;
                                    _0x5c5ea6.addEventListener('timeupdate', _0xb8575e);
                                    _0x597804.onClean(() => {
                                        ;
                                        _0x5c5ea6.removeEventListener('timeupdate', _0xb8575e);
                                    });
                                    ;
                                }
                            }
                            return _0x5b3209.classList.add('media-sticker'), _0x5b3209;
                        }), _0x27d083 = _0x34c3ee.map((_0x2985bc, _0x20cdcd) => {
                            const _0x4278c5 = ha(_0x2985bc);
                            return _0x4278c5 !== _0x5a54d8[_0x20cdcd] && _0x4278c5;
                        });
                    _0x45275c !== false && (_0x45275c = (_0x45275c || !_0x2e83f4 || (_0x37b4c6 ? _0x27d083[0] : !_0x27d083[0] || _0x27d083[0].tagName === 'svg')) && ot.isAvailable('animations'));
                    _0x45275c && _0x5a54d8.forEach(_0x36d4fa => _0x36d4fa.classList.add('fade-in'));
                    ;
                    const _0x35a00b = new Promise(async (_0x557629, _0x1e42df) => {
                        const _0x4796c0 = async () => {
                            ;
                            if (_0x597804 && !_0x597804()) {
                                _0x1e42df(_0x5b9ec0);
                                return;
                            }
                            const _0x5a01c9 = _0x5a54d8.length, _0x1f4356 = [], _0x32d31a = (_0x2aeb13, _0x100cc9, _0x1a42f5) => {
                                    ;
                                    ut.mutateElement(_0x2aeb13, () => {
                                        ;
                                        if (_0x597804 && !_0x597804()) {
                                            _0x1e42df(_0x5b9ec0);
                                            return;
                                        }
                                        if (!_0x100cc9) {
                                            (!_0x54ead7 || !_0x3eedba) && _0x1a42f5?.remove();
                                            return;
                                        }
                                        const _0x3c4607 = _0x100cc9 instanceof HTMLVideoElement;
                                        if (_0x3c4607) {
                                            const {
                                                    videoWidth: _0x13f246,
                                                    videoHeight: _0x2e708f
                                                } = _0x100cc9, _0x252394 = _0x13f246 / _0x2e708f;
                                            let _0x1a7583 = _0x22a12e * window.devicePixelRatio, _0x5aa748 = _0x3e8f81 * window.devicePixelRatio;
                                            if (_0x252394 < 1 ? _0x1a7583 = _0x5aa748 * _0x252394 : _0x5aa748 = _0x1a7583 / _0x252394, !ec(_0x1463a0, _0x57bba4, _0x1a7583, _0x5aa748)) {
                                                const _0x457e5d = document.createElement('canvas');
                                                _0x457e5d.width = _0x1a7583;
                                                _0x457e5d.height = _0x5aa748;
                                                _0x457e5d.getContext('2d').drawImage(_0x100cc9, 0, 0, _0x457e5d.width, _0x457e5d.height);
                                                ia(_0x1463a0, _0x457e5d, _0x57bba4);
                                                ;
                                            }
                                        }
                                        if (_0x54ead7) {
                                            _0x557629(_0x100cc9);
                                            return;
                                        }
                                        if (_0x3c4607 && du && (ii.set(_0x100cc9, () => {
                                                const _0x264b58 = () => {
                                                    ;
                                                    br(_0x100cc9).catch(ve);
                                                };
                                                if (!_0x1a42f5 || !(_0x1a42f5 instanceof HTMLImageElement)) {
                                                    const _0x42487e = document.createElement('div'), _0x5d8205 = { ..._0x8db02a };
                                                    _0x5d8205.div = _0x42487e;
                                                    _0x5d8205.static = true;
                                                    _0x5d8205.exportLoad = void 0;
                                                    _0x5d8205.needFadeIn = false;
                                                    _0x5d8205.lazyLoadQueue = void 0;
                                                    pn(_0x5d8205).then(({render: _0x50a6dd}) => _0x50a6dd).finally(() => {
                                                        ;
                                                        ut.mutateElement(_0x100cc9, () => {
                                                            ;
                                                            _0x597804() && _0x2aeb13.append(...Array.from(_0x42487e.children));
                                                            _0x100cc9.remove();
                                                            _0x264b58();
                                                            ;
                                                        });
                                                    });
                                                    ;
                                                } else {
                                                    _0x100cc9.replaceWith(_0x1a42f5);
                                                    _0x264b58();
                                                    ;
                                                }
                                            }), _0x100cc9.duration < 1 || _0x100cc9.getVideoPlaybackQuality().totalVideoFrames < 10)) {
                                            const _0x1cf616 = ac(_0x100cc9);
                                            _0x597804?.onClean(_0x1cf616);
                                        }
                                        _0x2aeb13.append(_0x100cc9);
                                        _0x45275c ? (_0x1a42f5 && _0x1a42f5.classList.add('fade-out'), ua(_0x100cc9, () => {
                                            ;
                                            _0x100cc9.classList.remove('fade-in');
                                            _0x1a42f5?.remove();
                                            ;
                                        }, 400)) : _0x1a42f5?.remove();
                                        _0x3eedba && pe.addAnimation({
                                            'animation': _0x100cc9,
                                            'observeElement': _0x2aeb13,
                                            'group': _0x4b2f3f,
                                            'controlled': _0x597804,
                                            'liteModeKey': _0xf2400c || void 0,
                                            'type': 'video'
                                        });
                                        _0x1f4356.push(_0x100cc9) === _0x5a01c9 && _0x557629(_0x1f4356);
                                        ;
                                    });
                                };
                            _0x1cecc4();
                            let _0xcf4b4b;
                            _0x34c3ee.forEach((_0x5d447e, _0x226ae5) => {
                                const _0x282812 = _0x5a54d8[_0x226ae5], _0x3ab51f = () => _0x32d31a(_0x5d447e, _0x282812, _0x27d083[_0x226ae5]);
                                _0x282812 && (_0xcf4b4b = Yo(_0x282812, _0x3fc79b.url, _0x299083));
                                _0xcf4b4b.then(_0x3ab51f);
                                ;
                            });
                        };
                        if (_0x1cecc4(), _0x3fc79b.url) {
                            _0x4796c0();
                        } else {
                            let _0xe998e7;
                            if (_0x307d2c !== 1 && _0x37b4c6) {
                                const _0x5c5e7c = aa(_0x1463a0, _0x22a12e, _0x3e8f81, false), _0x20e64b = {
                                        media: _0x1463a0,
                                        thumb: _0x5c5e7c,
                                        queueId: _0x2e041e?.queueId
                                    };
                                ;
                                ;
                                ;
                                _0xe998e7 = _s.downloadMediaURL(_0x20e64b);
                                ;
                            } else {
                                _0xe998e7 = _s.downloadMediaURL({
                                    'media': _0x1463a0,
                                    'queueId': _0x2e041e?.queueId
                                });
                            }
                            _0xe998e7.then(_0x4796c0, _0x1e42df);
                        }
                    });
                    return _0x592c24 && (_f[_0x592c24] = _0x35a00b, _0x2e906c && _0x35a00b.finally(() => {
                        _0x2e906c() || delete _f[_0x592c24];
                    })), _0x35a00b;
                }
            }
        };
    if (_0x212ef7 && (_0x212ef7 === 1 && (!_0x2e83f4 || _0x3eedba) || _0x212ef7 === 2)) {
        return _0x21e3b5.load = _0x196bbd, _0x21e3b5;
    }
    const _0x36a80b = {
        div: _0x34c3ee[0],
        load: _0x196bbd
    };
    ;
    ;
    ;
    const _0x9bf7a6 = _0x2e041e && (!_0x2e83f4 || _0x3eedba) ? (_0x2e041e.push(_0x36a80b), Promise.resolve()) : _0x196bbd();
    return _0x2e83f4 && _0x37b4c6 && (_0x4c7ac4 = _0x9bf7a6, _0x44f200?.push(_0x4c7ac4)), _0x307d2c === 2 && _0x3cbedc && _0x558ae8 !== void 0 && !_0x47d08d && yu({
        'container': _0x34c3ee[0],
        'doc': _0x1463a0,
        'managers': _0x193773,
        'middleware': _0x597804,
        'isOut': _0x558ae8,
        'width': _0x22a12e,
        'loadPromise': _0x9bf7a6,
        'relativeEffect': _0x5c6dc8,
        'loopEffect': _0x3c43fb,
        'scrollable': _0x45cc70,
        'showPremiumInfo': _0x253a22
    }), _0x21e3b5.render = _0x9bf7a6, _0x21e3b5;
}
async function bu({
    e: _0x4b1aa8,
    container: _0x46a5cd,
    doc: _0x3d2a41,
    managers: _0x1c7472,
    middleware: _0x205f98,
    isOut: _0x2e6ab2,
    width: _0x41ebfe,
    loadPromise: _0x2ee4fb,
    relativeEffect: _0x2f5297,
    loopEffect: _0x4bdb03,
    scrollable: _0x126cf8,
    showPremiumInfo: _0x2dca18
}) {
    const _0x2ad768 = ot.isAvailable('effects_premiumstickers') || _0x2f5297;
    if (se(_0x4b1aa8), !_0x4b1aa8.isTrusted && !_0x2ad768) {
        return;
    }
    if (_0x46a5cd.dataset.playing || !_0x2ad768) {
        _0x2dca18?.();
        return;
    }
    _0x46a5cd.dataset.playing = '1';
    await _0x2ee4fb;
    ;
    const {
        animationDiv: _0x24613f,
        stickerPromise: _0x1b8100
    } = nu({
        'doc': _0x3d2a41,
        'middleware': _0x205f98,
        'side': _0x2e6ab2 ? 'right' : 'left',
        'size': _0x41ebfe * pu,
        'target': _0x46a5cd,
        'play': true,
        'fullThumb': ic(_0x3d2a41),
        'relativeEffect': _0x2f5297,
        'loopEffect': _0x4bdb03,
        'scrollable': _0x126cf8
    });
    _0x2e6ab2 !== void 0 && !_0x2e6ab2 && _0x24613f.classList.add('reflect-x');
    _0x1b8100.then(_0x41a4e6 => {
        ;
        _0x41a4e6.addEventListener('destroy', () => {
            ;
            delete _0x46a5cd.dataset.playing;
        });
    });
    ;
}
function yu(_0x4c3103) {
    ;
    _0x4c3103.managers.appStickersManager.preloadSticker(_0x4c3103.doc.id, true);
    const _0xbc8b7e = Ns(_0x4c3103.container, _0x30429d => {
        const _0x435ed1 = { ..._0x4c3103 };
        _0x435ed1.e = _0x30429d;
        bu(_0x435ed1);
        ;
    });
    _0x4c3103.middleware.onDestroy(_0xbc8b7e);
}
function i3(_0x286e34) {
    const _0x4d64bf = document.createElement('div');
    _0x286e34.class && _0x4d64bf.classList.add(_0x286e34.class);
    const _0x3567c6 = gu();
    _0x286e34.autoStyle && (_0x4d64bf.style.width = _0x286e34.width + 'px', _0x4d64bf.style.height = _0x286e34.height + 'px', _0x4d64bf.style.position = 'relative');
    let _0x2424b6 = Promise.resolve();
    return rt(Is(() => _0x286e34.sticker, async _0x5cb4db => {
        ;
        await _0x2424b6;
        _0x5cb4db === _0x286e34.sticker && (_0x2424b6 = pn({
            'middleware': _0x3567c6.get(),
            ..._0x286e34.extraOptions,
            'width': _0x286e34.width,
            'height': _0x286e34.height,
            'div': _0x4d64bf,
            'doc': _0x5cb4db
        }).then(_0x589120 => _0x589120.render).then(_0x33921d => {
            ;
            _0x33921d && _0x286e34.onRender?.(_0x33921d);
        }));
        ;
    })), is(() => _0x3567c6.destroy()), typeof _0x286e34.ref == 'function' && _0x286e34.ref(_0x4d64bf), _0x4d64bf;
}
function yr(_0x4748c3, _0x3bb8dc, _0x23afab, _0x107710 = _0x4748c3.getBoundingClientRect(), _0x4e6c57 = _0x3bb8dc.getBoundingClientRect()) {
    ;
    let {
        top: _0x27d42c,
        right: _0x2c3ca5,
        bottom: _0x218b4a,
        left: _0x522a15
    } = _0x4e6c57;
    if (_0x23afab) {
        const _0x342cdd = _0x3bb8dc.querySelector('.sticky');
        _0x342cdd && (_0x27d42c = _0x342cdd.getBoundingClientRect().bottom);
    }
    if (_0x107710.top >= _0x218b4a || _0x107710.bottom <= _0x27d42c || _0x107710.right <= _0x522a15 || _0x107710.left >= _0x2c3ca5) {
        return null;
    }
    const _0x4fb3ca = {
        top: false,
        right: false,
        bottom: false,
        left: false,
        vertical: 0,
        horizontal: 0
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x31300f = _0x4fb3ca, _0x274626 = hs.width, _0x4dc66e = hs.height, _0x15f7c3 = {
            top: _0x107710.top < _0x27d42c && _0x27d42c !== 0 ? (_0x31300f.top = true, ++_0x31300f.vertical, _0x27d42c) : _0x107710.top,
            right: _0x107710.right > _0x2c3ca5 && _0x2c3ca5 !== _0x274626 ? (_0x31300f.right = true, ++_0x31300f.horizontal, _0x2c3ca5) : _0x107710.right,
            bottom: _0x107710.bottom > _0x218b4a && _0x218b4a !== _0x4dc66e ? (_0x31300f.bottom = true, ++_0x31300f.vertical, _0x218b4a) : _0x107710.bottom,
            left: _0x107710.left < _0x522a15 && _0x522a15 !== 0 ? (_0x31300f.left = true, ++_0x31300f.horizontal, _0x522a15) : _0x107710.left
        };
    ;
    ;
    ;
    ;
    ;
    const _0x4c0fe4 = {};
    return _0x4c0fe4.rect = _0x15f7c3, _0x4c0fe4.overflow = _0x31300f, _0x4c0fe4;
}
window.getVisibleRect = yr;
function vu({
    overflowElement: _0x294440,
    overflowRect: _0x237351,
    selector: _0x1251de,
    extraSize: _0x2e0ed1,
    extraMinLength: _0x3a22c3,
    elements: _0x5b23e2
}) {
    ;
    _0x237351 ?? (_0x237351 = _0x294440.getBoundingClientRect());
    _0x5b23e2 ?? (_0x5b23e2 = Array.from(_0x294440.querySelectorAll(_0x1251de)));
    _0x2e0ed1 && (_0x237351 = {
        'top': _0x237351.top - _0x2e0ed1,
        'right': _0x237351.right + _0x2e0ed1,
        'bottom': _0x237351.bottom + _0x2e0ed1,
        'left': _0x237351.left - _0x2e0ed1
    });
    ;
    const _0x46cacb = [], _0x1cb808 = [], _0x5743a1 = [];
    let _0x4a2d51 = false;
    for (const _0x31b44a of _0x5b23e2) {
        const _0xcf468a = _0x31b44a.getBoundingClientRect(), _0x5d04fb = yr(_0x31b44a, _0x294440, false, _0xcf468a, _0x237351), _0x12e226 = !!_0x5d04fb;
        let _0x59f37d;
        const _0x3ddcb5 = {
            element: _0x31b44a,
            rect: _0xcf468a,
            visibleRect: _0x5d04fb
        };
        ;
        ;
        ;
        _0x12e226 ? (_0x4a2d51 = true, _0x59f37d = _0x1cb808) : _0x4a2d51 ? _0x59f37d = _0x5743a1 : _0x59f37d = _0x46cacb;
        _0x59f37d.push(_0x3ddcb5);
        ;
        ;
    }
    return _0x3a22c3 && (_0x1cb808.unshift(..._0x46cacb.splice(Math.max(0, _0x46cacb.length - _0x3a22c3), _0x3a22c3)), _0x1cb808.push(..._0x5743a1.splice(0, _0x3a22c3))), {
        'invisibleTop': _0x46cacb,
        'visible': _0x1cb808,
        'invisibleBottom': _0x5743a1
    };
}
function oc(_0xd40acd, _0x1ec35d) {
    ;
    if (typeof _0x1ec35d == 'string') {
        _0xd40acd.textContent = _0x1ec35d;
        return;
    }
    const _0x1f7bd0 = _0xd40acd.firstChild;
    _0x1f7bd0 ? _0xd40acd.lastChild === _0x1f7bd0 ? _0x1f7bd0.replaceWith(_0x1ec35d) : (_0xd40acd.textContent = '', _0xd40acd.append(_0x1ec35d)) : _0xd40acd.append(_0x1ec35d);
}
const vr = new WeakMap(), cc = new ResizeObserver(_0x31c7fc => {
        ;
        for (const _0x1ced39 of _0x31c7fc)
            vr.get(_0x1ced39.target)(_0x1ced39);
    });
function dc(_0x3e7757, _0x2df150) {
    ;
    return vr.set(_0x3e7757, _0x2df150), cc.observe(_0x3e7757), () => {
        lc(_0x3e7757);
    };
}
function lc(_0x2f7837) {
    ;
    vr.delete(_0x2f7837);
    cc.unobserve(_0x2f7837);
    ;
}
const Eu = '__PAID_REACTION_EMOJI__', vf = new l0(), nn = class nn extends HTMLElement {
        constructor() {
            ;
            super();
            this.onResizeEntry = _0x29d72d => {
                ;
                this.setDimensionsFromRect(_0x29d72d.contentRect);
            };
            this.onElementCleanup = (_0x105daa, _0xccbca0, _0x1cfc95) => {
                ;
                if (_0x105daa.clear(), _0xccbca0.middlewares.delete(_0x1cfc95), !_0xccbca0.middlewares.size) {
                    if (_0xccbca0.player) {
                        const _0x1a16e0 = Gt.get(_0xccbca0.player);
                        if (_0x1a16e0 && (_0x1a16e0.close?.(), Gt.delete(_0xccbca0.player)), Gt.delete(_0xccbca0.player), _0xccbca0.player instanceof xt) {
                            _0xccbca0.player.overrideRender = ve;
                            _0xccbca0.player.remove();
                            ;
                        } else {
                            if (_0xccbca0.player instanceof HTMLVideoElement) {
                                const _0x563e47 = gr.generateName('' + _0x105daa.docId, 0, 0, void 0, void 0);
                                delete _f[_0x563e47];
                            }
                        }
                        _0xccbca0.player = void 0;
                    }
                    Yt.get(_0xccbca0.key) === _0xccbca0 && Yt.delete(_0xccbca0.key) && !Yt.size && Au();
                }
            };
            this.classList.add('custom-emoji-renderer');
            this.canvas = document.createElement('canvas');
            this.canvas.classList.add('custom-emoji-canvas');
            this.context = this.canvas.getContext('2d');
            this.append(this.canvas);
            this.playersSynced = new Map();
            this.textColored = new Set();
            this.clearedElements = new WeakSet();
            this.customEmojis = new Map();
            this.animationGroup = 'EMOJI';
            this.isCanvasClean = false;
            ;
        }
        ['connectedCallback']() {
            ;
            if (js.has(this)) {
                return;
            }
            const _0x2834a6 = this.observeResizeElement ?? this.canvas;
            _0x2834a6 && dc(_0x2834a6, this.onResizeEntry);
            js.add(this);
            this.connectedCallback = void 0;
            ;
        }
        ['disconnectedCallback']() {
            ;
            this.isConnected || !this.auto || (this.destroy?.(), this.disconnectedCallback = void 0);
        }
        ['destroy']() {
            const _0x25596f = this.observeResizeElement ?? this.canvas;
            _0x25596f && lc(_0x25596f);
            this.customEmojis.forEach(_0x1da163 => {
                ;
                _0x1da163.forEach(_0x356a6a => {
                    ;
                    _0x356a6a.clear();
                });
            });
            js.delete(this);
            this.playersSynced.clear();
            this.middlewareHelper?.clean();
            this.customEmojis.clear();
            this.textColored.clear();
            this.destroy = this.lastPausedVideo = void 0;
            ;
        }
        ['getOffsets'](_0x1686f4 = new Map()) {
            ;
            if (!this.playersSynced.size) {
                return _0x1686f4;
            }
            const _0x55130f = yt(this, 'scrollable') || this.offsetParent;
            if (!_0x55130f) {
                return _0x1686f4;
            }
            const _0x3766dd = _0x55130f.getBoundingClientRect(), _0x4b4cc6 = this.getBoundingClientRect();
            for (const _0x47333e of this.playersSynced.keys()) {
                const _0x48eecb = Array.from(_0x47333e), _0x4a89dc = this.isSelectable ? _0x48eecb.map(_0x41a262 => _0x41a262.placeholder) : _0x48eecb, {visible: _0x299d57} = vu({
                        'overflowElement': _0x55130f,
                        'overflowRect': _0x3766dd,
                        'elements': _0x4a89dc,
                        'extraSize': this.size.height * 2.5
                    }), _0x5a3ed5 = _0x299d57.map(({rect: _0x57cd9e}) => {
                        const _0x11f9d9 = _0x57cd9e.top - _0x4b4cc6.top, _0x1e8c23 = _0x57cd9e.left - _0x4b4cc6.left, _0x32203c = {};
                        return _0x32203c.top = _0x11f9d9, _0x32203c.left = _0x1e8c23, _0x32203c.width = _0x57cd9e.width, _0x32203c;
                    });
                _0x5a3ed5.length && _0x1686f4.set(_0x47333e, _0x5a3ed5);
            }
            return _0x1686f4;
        }
        ['clearCanvas']() {
            ;
            if (this.isCanvasClean) {
                return;
            }
            const {
                context: _0x204e93,
                canvas: _0x5058fd
            } = this;
            _0x204e93.clearRect(0, 0, _0x5058fd.width, _0x5058fd.height);
            this.isCanvasClean = true;
            ;
        }
        ['render'](_0x518b00) {
            const {
                context: _0x24eab9,
                canvas: _0xe53ec5,
                isDimensionsSet: _0x1cae60
            } = this;
            _0x1cae60 || this.setDimensionsFromRect(void 0, false);
            this.isCanvasClean = false;
            ;
            const {
                width: _0xfd9790,
                height: _0x2b2ae4,
                dpr: _0x129a8b
            } = _0xe53ec5;
            for (const [_0x572f5b, _0x63e82e] of _0x518b00) {
                const _0x558d70 = this.playersSynced.get(_0x572f5b), _0x2089be = Gt.get(_0x558d70) || (_0x558d70 instanceof HTMLVideoElement ? _0x558d70 : void 0);
                if (!_0x2089be) {
                    continue;
                }
                const _0x2861c5 = _0x2089be instanceof ImageData;
                let _0x1daba9, _0x4e0379;
                _0x558d70 instanceof HTMLVideoElement ? (_0x1daba9 = this.size.width * _0x129a8b, _0x4e0379 = this.size.height * _0x129a8b) : (_0x1daba9 = _0x2089be.width, _0x4e0379 = _0x2089be.height);
                const _0x7559a = Math.round(_0x63e82e[0].width * _0x129a8b);
                if (_0x7559a !== _0x1daba9) {
                    _0x1daba9 = _0x7559a;
                    _0x4e0379 = _0x7559a;
                }
                const _0x47a646 = _0xfd9790 - _0x1daba9, _0x21e71a = this.textColored.has(_0x572f5b) ? St.getProperty(this.textColor) : void 0;
                !this.clearedElements.has(_0x572f5b) && !this.isSelectable && (this.isSelectable ? _0x572f5b.forEach(_0x1ac285 => {
                    ;
                    _0x1ac285.lastChildWas ?? (_0x1ac285.lastChildWas = _0x1ac285.lastChild);
                    oc(_0x1ac285, _0x1ac285.firstChild);
                    ;
                }) : _0x572f5b.forEach(_0x449ec8 => {
                    ;
                    _0x449ec8.replaceChildren();
                }), this.clearedElements.add(_0x572f5b));
                _0x63e82e.forEach(({
                    top: _0x2cf16f,
                    left: _0x540a28
                }) => {
                    ;
                    _0x2cf16f = Math.round(_0x2cf16f * _0x129a8b);
                    _0x540a28 = Math.round(_0x540a28 * _0x129a8b);
                    !(_0x540a28 < 0 || _0x540a28 > _0x47a646) && (_0x2861c5 ? _0x24eab9.putImageData(_0x2089be, _0x540a28, _0x2cf16f) : _0x24eab9.drawImage(_0x2089be, _0x540a28, _0x2cf16f, _0x1daba9, _0x4e0379), _0x21e71a && gn(_0x24eab9, _0x21e71a, _0x540a28, _0x2cf16f, _0x1daba9, _0x4e0379));
                    ;
                });
                ;
            }
        }
        ['checkForAnyFrame']() {
            ;
            for (const _0x2005c4 of this.playersSynced.values())
                if (Gt.has(_0x2005c4) || _0x2005c4 instanceof HTMLVideoElement) {
                    return true;
                }
            return false;
        }
        ['remove']() {
            ;
            super.remove();
        }
        ['setDimensionsFromRect'](_0x25c33b = this.lastRect, _0x3af2fc = true) {
            const {canvas: _0x4f5a8c} = this, {dpr: _0x33e746} = _0x4f5a8c;
            if (this.lastRect !== _0x25c33b && (this.lastRect = _0x25c33b), !_0x25c33b || !_0x33e746 || this.ignoreSettingDimensions) {
                return;
            }
            const {
                    width: _0x1f55ed,
                    height: _0x420d5a
                } = _0x25c33b, _0x33646d = Math.floor(Math.round(_0x1f55ed * _0x33e746)), _0x18dd34 = Math.floor(Math.round(_0x420d5a * _0x33e746));
            _0x4f5a8c.width === _0x33646d && _0x4f5a8c.height === _0x18dd34 || (_0x4f5a8c.width = _0x33646d, _0x4f5a8c.height = _0x18dd34, this.isDimensionsSet = true, this.isCanvasClean = true, (this.observeResizeElement || this.observeResizeElement === false) && (this.canvas.style.setProperty('width', _0x1f55ed + 'px', 'important'), this.canvas.style.setProperty('height', _0x420d5a + 'px', 'important')), (this.forceRenderAfterSize || this.isSelectable && _0x3af2fc) && (this.forceRenderAfterSize = void 0, this.forceRender()));
        }
        ['forceRender']() {
            ;
            this.isDimensionsSet && (ri(new Set([this])) || this.clearCanvas());
        }
        async ['wrapPaidReactionEmoji'](_0x4d7787) {
            const _0x27a07e = this.size, _0x4a216a = await ls.loadAnimationAsAsset({
                    'container': _0x4d7787,
                    'width': _0x27a07e.width,
                    'height': _0x27a07e.height,
                    'loop': true,
                    'autoplay': ma,
                    'sync': true
                }, '2b23d70b');
            return {
                'width': _0x27a07e.width,
                'height': _0x27a07e.height,
                'downloaded': true,
                'load': () => Promise.resolve(_0x4a216a),
                'render': void 0
            };
        }
        ['wrap']({
            doc: _0x50461f,
            isPaidReactionEmoji: _0x92d550,
            addCustomEmojis: _0xb7cfc2,
            usingOwnQueue: _0x41ec3b,
            lazyLoadQueue: _0x329380,
            onlyThumb: _0x3f168e,
            withThumb: _0x428012,
            loadPromises: _0x52e79c
        }) {
            const _0x17a5a1 = this, _0x385fe5 = this.size, _0x14d24e = I.managers, _0x2a0a93 = this.middlewareHelper.get(), _0x59ba33 = _0x50461f.id, _0xe62ca9 = _0xb7cfc2.get(_0x59ba33), _0x4cc1e5 = _0x17a5a1.customEmojis.get(_0x59ba33), _0x36380b = Array.from(_0xe62ca9), _0x480106 = _0x50461f.sticker === 2, _0x3c1c76 = _0x36380b[0].static || _0x50461f.mime_type === 'video/webm' && !tr, _0x3e2ffe = (_0x480106 || _0x50461f.sticker === 3 && this.isSelectable) && !_0x3f168e && !_0x3c1c76, _0xb40e8f = _0x50461f.attributes.find(_0x725bec => _0x725bec['_'] === 'documentAttributeCustomEmoji');
            _0xb40e8f && _0xb40e8f.pFlags.text_color && _0x17a5a1.textColored.add(_0x4cc1e5);
            const _0x3f1e88 = _0x3e2ffe ? _0x2a0a93.create().get(() => !!_0x46c47a.middlewares.size) : void 0, _0x1bd930 = [], _0xcc170a = _0x92d550 ? this.wrapPaidReactionEmoji(_0x36380b[0]) : pn({
                    'div': _0x36380b,
                    'doc': _0x50461f,
                    'width': _0x385fe5.width,
                    'height': _0x385fe5.height,
                    'loop': true,
                    'play': ma,
                    'managers': _0x14d24e,
                    'isCustomEmoji': true,
                    'group': 'none',
                    'loadPromises': _0x1bd930,
                    'middleware': _0x2a0a93,
                    'exportLoad': _0x41ec3b || _0x329380 === false ? 2 : 1,
                    'needFadeIn': false,
                    'loadStickerMiddleware': _0x3f1e88,
                    'static': _0x3c1c76,
                    'onlyThumb': _0x3f168e,
                    'withThumb': _0x428012 ?? (_0x17a5a1.clearedElements.has(_0x4cc1e5) ? false : void 0),
                    'syncedVideo': this.isSelectable,
                    'textColor': _0x17a5a1.textColor
                });
            _0x52e79c && _0xcc170a.then(() => _0x52e79c.push(..._0x1bd930));
            const _0x187890 = { elements: _0xe62ca9 };
            ;
            const _0x413245 = _0x187890, _0x32823e = _0x36380b[0].readyPromise;
            if (_0x32823e && _0xcc170a.then(({render: _0x459d03}) => {
                    ;
                    if (!_0x459d03) {
                        _0x32823e.resolve();
                        return;
                    }
                    _0x459d03.then(() => _0x32823e.resolve(), _0x32823e.reject.bind(_0x32823e));
                }), _0x50461f.sticker === 1 || _0x3f168e || _0x3c1c76) {
                return this.isSelectable && (_0x413245.onRender = () => Promise.all(_0x1bd930).then(() => {
                    ;
                    _0x2a0a93() && _0x36380b.forEach(_0x589164 => {
                        const {placeholder: _0x502f41} = _0x589164;
                        _0x502f41.src = _0x589164.firstElementChild.src;
                    });
                })), _0xcc170a.then(_0x32c3dc => ({
                    ..._0x32c3dc,
                    ..._0x413245
                }));
            }
            _0x413245.onRender = _0x4333e3 => Promise.all(_0x1bd930).then(() => {
                ;
                if (!_0x2a0a93() || !_0x50461f.animated) {
                    return;
                }
                const _0x4967cc = Array.isArray(_0x4333e3) ? _0x4333e3 : [_0x4333e3], _0x148cf5 = Array.isArray(_0x4967cc) ? _0x4967cc[0] : _0x4967cc;
                if (_0x36380b.forEach((_0x38818d, _0x3b7f6a) => {
                        const _0x370f38 = _0x4967cc[_0x3b7f6a] || _0x4967cc[0];
                        _0x38818d.player = _0x370f38;
                        _0x46c47a && (_0x38818d.syncedPlayer = _0x46c47a, _0x38818d.paused ? _0x38818d.syncedPlayer.pausedElements.add(_0x38818d) : _0x370f38.paused && _0x370f38.play());
                        (_0x38818d.isConnected || _0x2a0a93()) && pe.addAnimation({
                            'animation': _0x38818d,
                            'group': _0x38818d.renderer.animationGroup,
                            'observeElement': _0x38818d.placeholder ?? _0x38818d,
                            'controlled': true,
                            'type': 'emoji'
                        });
                        ;
                    }), (_0x148cf5 instanceof xt || _0x148cf5 instanceof HTMLVideoElement && this.isSelectable) && (_0x46c47a.player = _0x148cf5, _0x17a5a1.playersSynced.set(_0x4cc1e5, _0x148cf5)), _0x148cf5 instanceof xt && (_0x148cf5.group = _0x17a5a1.animationGroup, _0x148cf5.overrideRender ?? (_0x148cf5.overrideRender = _0x486cd6 => {
                        ;
                        Gt.set(_0x148cf5, _0x486cd6);
                    })), _0x3e2ffe) {
                    const _0x46a2ba = Zo(this.size.width, this.size.height);
                    _0x17a5a1.canvas.dpr = _0x46a2ba;
                    Su();
                    ;
                }
            });
            let _0x46c47a;
            const _0x54c680 = [
                _0x59ba33,
                _0x385fe5.width,
                _0x385fe5.height
            ].join('-');
            if (_0x3e2ffe) {
                _0x46c47a = Yt.get(_0x54c680);
                _0x46c47a || (_0x46c47a = {
                    'player': void 0,
                    'middlewares': new Set(),
                    'pausedElements': new Set(),
                    'key': _0x54c680
                }, Yt.set(_0x54c680, _0x46c47a));
                ;
                for (const _0x399005 of _0xe62ca9) {
                    const _0x2d4970 = _0x399005.middlewareHelper.get();
                    _0x46c47a.middlewares.add(_0x2d4970);
                    _0x2d4970.onClean(this.onElementCleanup.bind(this, _0x399005, _0x46c47a, _0x2d4970));
                    ;
                }
            }
            return _0xcc170a.then(_0x52b7d0 => ({
                ..._0x52b7d0,
                ..._0x413245
            }));
        }
        ['add']({
            addCustomEmojis: _0x3cbda2,
            lazyLoadQueue: _0x46e0d8,
            onlyThumb: _0x3c6fa4,
            withThumb: _0x5b2989
        }) {
            const _0x53fd0b = this, _0x565455 = this.middlewareHelper.get();
            if (_0x3cbda2.forEach((_0x5cf337, _0x27eb8a) => {
                    ;
                    let _0x129672 = this.customEmojis.get(_0x27eb8a);
                    _0x129672 ? this.clearedElements.delete(_0x129672) : this.customEmojis.set(_0x27eb8a, _0x129672 = new Set());
                    for (const _0x37685b of _0x5cf337)
                        _0x129672.has(_0x37685b) ? _0x5cf337.delete(_0x37685b) : (_0x37685b.clean = false, _0x37685b.renderer = _0x53fd0b, _0x37685b.elements = _0x129672, _0x37685b.middlewareHelper = _0x565455.create(), _0x129672.add(_0x37685b), _0x37685b.lastChildWas && !_0x37685b.lastChildWas.parentNode && _0x37685b.append(_0x37685b.lastChildWas));
                    _0x5cf337.size || _0x3cbda2.delete(_0x27eb8a);
                }), !_0x3cbda2.size) {
                return;
            }
            const _0x55fb96 = !!(!_0x46e0d8 && _0x46e0d8 !== false && vf), _0x3aea28 = Array.from(_0x3cbda2.keys()), _0x3602ff = I.managers;
            return _0x3602ff.appEmojiManager.getCachedCustomEmojiDocuments(_0x3aea28).then(_0x39ab2e => {
                ;
                if (!_0x565455()) {
                    return;
                }
                const _0x50b100 = {
                    addCustomEmojis: _0x3cbda2,
                    usingOwnQueue: _0x55fb96,
                    lazyLoadQueue: _0x46e0d8,
                    onlyThumb: _0x3c6fa4,
                    withThumb: _0x5b2989
                };
                ;
                ;
                ;
                ;
                ;
                ;
                const _0x6bb067 = _0x50b100, _0x115e89 = [], _0x57097b = [], _0x6e019f = _0x39ab2e.map((_0xd6c403, _0x2f97da) => {
                        ;
                        if (!_0xd6c403) {
                            const _0x2890d2 = _0x3aea28[_0x2f97da];
                            if (_0x2890d2 === Eu) {
                                return this.wrap({
                                    ..._0x6bb067,
                                    'doc': {
                                        '_': 'document',
                                        'id': _0x2890d2,
                                        'attributes': []
                                    },
                                    'isPaidReactionEmoji': true,
                                    'loadPromises': _0x115e89
                                });
                            }
                            _0x57097b.push(_0x2890d2);
                            return;
                        }
                        const _0x29634d = { ..._0x6bb067 };
                        return _0x29634d.doc = _0xd6c403, _0x29634d.loadPromises = _0x115e89, this.wrap(_0x29634d);
                    }).filter(Boolean), _0x30bd46 = _0x57097b.length ? _0x3602ff.appEmojiManager.getCustomEmojiDocuments(_0x57097b).then(_0x56ac86 => _0x565455() ? _0x56ac86.filter(Boolean).map(_0x24974f => this.wrap({
                        ..._0x6bb067,
                        'doc': _0x24974f
                    })) : []) : Promise.resolve([]), _0x627b02 = async _0xdd495c => {
                        const _0x357e5c = (await Promise.all(_0xdd495c)).map(({
                            load: _0xb47e56,
                            onRender: _0x225494,
                            elements: _0x2c2665
                        }) => {
                            ;
                            if (!_0xb47e56) {
                                return;
                            }
                            const _0x5be9a4 = () => _0xb47e56().then(_0x225494);
                            if (!_0x55fb96) {
                                return _0x5be9a4();
                            }
                            _0x2c2665.forEach(_0x345b3d => {
                                ;
                                vf.push({
                                    'div': _0x345b3d,
                                    'load': () => (_0x2c2665.forEach(_0x3de3c1 => {
                                        const _0x484ae3 = { div: _0x3de3c1 };
                                        ;
                                        vf.delete(_0x484ae3);
                                        ;
                                    }), _0x5be9a4())
                                });
                            });
                        });
                        return Promise.all(_0x357e5c.filter(Boolean));
                    }, _0x1d930f = () => {
                        ;
                        if (!_0x565455()) {
                            return;
                        }
                        const _0x4638ce = _0x627b02(_0x6e019f), _0x112bf0 = _0x30bd46.then(_0x459a98 => _0x627b02(_0x459a98));
                        return Promise.all([
                            _0x4638ce,
                            _0x112bf0
                        ]);
                    }, _0xd735c7 = {};
                return _0xd735c7.div = _0x53fd0b.canvas, _0xd735c7.load = _0x1d930f, (_0x46e0d8 ? _0x46e0d8.push(_0xd735c7) : _0x1d930f(), Promise.all(_0x6e019f).then(() => Promise.all(_0x115e89)).then(() => {
                }));
            });
        }
        ['setTextColor'](_0x27da09) {
            ;
            this.textColor = _0x27da09;
        }
        static ['create'](_0x51bc0f) {
            const _0x2748ef = new nn();
            _0x2748ef.animationGroup = _0x51bc0f.animationGroup;
            _0x2748ef.size = _0x51bc0f.customEmojiSize || sf.active.customEmoji;
            _0x2748ef.isSelectable = _0x51bc0f.isSelectable;
            _0x2748ef.textColor = _0x51bc0f.textColor;
            _0x2748ef.observeResizeElement = _0x51bc0f.observeResizeElement;
            _0x51bc0f.wrappingDraft && (_0x2748ef.contentEditable = 'false', _0x2748ef.style.height = 'inherit');
            ;
            const _0x34c503 = _0x51bc0f.middleware;
            return _0x34c503 ? (_0x2748ef.middlewareHelper = _0x34c503.create(), _0x2748ef.middlewareHelper.get().onDestroy(() => {
                ;
                _0x2748ef.destroy?.();
            })) : (_0x2748ef.auto = true, _0x2748ef.middlewareHelper = us()), _0x2748ef;
        }
    };
nn.globalLazyLoadQueue = vf;
let ms = nn;
const ma = true;
let Us;
const js = new Set(), Yt = new Map(), Gt = new Map(), ri = (_0x540a87 = js) => {
        const _0x5169c8 = Array.from(_0x540a87).filter(_0xa64e7d => _0xa64e7d.isConnected && _0xa64e7d.checkForAnyFrame() && !_0xa64e7d.ignoreSettingDimensions);
        if (!_0x5169c8.length) {
            return false;
        }
        const _0x290131 = _0x5169c8.map(_0xed772e => {
            const _0x16c4c6 = [..._0xed772e.playersSynced.values()].reduce((_0x131c51, _0x417192) => _0x131c51 + +!!_0x417192.paused, 0);
            if (_0xed772e.playersSynced.size === _0x16c4c6) {
                return;
            }
            const _0x4680d7 = _0xed772e.getOffsets();
            if (_0x4680d7.size) {
                return [
                    _0xed772e,
                    _0x4680d7
                ];
            }
        }).filter(Boolean);
        for (const [_0x7c7829] of _0x290131)
            _0x7c7829.clearCanvas();
        for (const [_0x1692be, _0x195626] of _0x290131)
            _0x1692be.render(_0x195626);
        return true;
    }, wu = 60, Du = 1000 / wu, Su = () => {
        ;
        Us || (Us = window.setInterval(ri, Du), ri());
    }, Au = () => {
        Us && (clearInterval(Us), Us = void 0);
    };
window.syncedPlayers = Yt;
window.emojiRenderers = js;
customElements.define('custom-emoji-renderer-element', ms);
;
class bn extends HTMLElement {
    constructor() {
        ;
        super();
        this.paused = true;
        this.classList.add('custom-emoji');
        ;
    }
    get ['docId']() {
        ;
        return this.dataset.docId;
    }
    set ['docId'](_0xd266d0) {
        this.dataset.docId = '' + _0xd266d0;
    }
    static ['create'](_0x3d3131) {
        const _0x4e59a5 = new bn();
        return _0x3d3131 && (_0x4e59a5.docId = _0x3d3131), _0x4e59a5;
    }
    get ['isConnected']() {
        ;
        return this.placeholder?.isConnected ?? super.isConnected;
    }
    ['connectedCallback']() {
        ;
        this.player && pe.addAnimation({
            'animation': this,
            'group': this.renderer.animationGroup,
            'observeElement': this.placeholder ?? this,
            'controlled': true,
            'type': 'emoji'
        });
    }
    ['disconnectedCallback']() {
        ;
        this.isConnected || !this.renderer?.isSelectable || this.clear();
    }
    ['destroy']() {
        ;
        this.clear();
    }
    ['clear'](_0x5b7572 = true) {
        ;
        if (this.clean) {
            return;
        }
        this.clean = true;
        this.pause();
        ;
        const {syncedPlayer: _0x50af27} = this;
        if (_0x50af27 && _0x50af27.pausedElements.delete(this), this.middlewareHelper?.clean(), this.readyPromise?.reject(), this.renderer) {
            const _0x54dc19 = this.renderer.customEmojis.get(this.docId);
            _0x54dc19?.delete(this) && !_0x54dc19.size && (this.renderer.customEmojis.delete(this.docId), this.renderer.textColored.delete(_0x54dc19), this.renderer.playersSynced.delete(_0x54dc19));
            _0x5b7572 && (this.renderer.isSelectable ? this.replaceChildren(yn(true)) : this.replaceChildren());
            ;
        }
        this.player && pe.removeAnimationByPlayer(this);
        ms.globalLazyLoadQueue?.delete({ 'div': this });
        this.elements = this.renderer = this.player = this.syncedPlayer = void 0;
        ;
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, this.player instanceof HTMLVideoElement && !this.syncedPlayer && (this.renderer.lastPausedVideo = this.player, this.player.pause()), this.syncedPlayer && !this.syncedPlayer.pausedElements.has(this) && (this.syncedPlayer.pausedElements.add(this), this.syncedPlayer.player && this.syncedPlayer.pausedElements.size === this.syncedPlayer.middlewares.size && this.syncedPlayer.player.pause()));
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.player instanceof HTMLVideoElement && (this.player.currentTime = this.renderer.lastPausedVideo?.currentTime ?? this.player.currentTime, hr(this.player)), this.syncedPlayer && this.syncedPlayer.pausedElements.has(this) && (this.syncedPlayer.pausedElements.delete(this), this.syncedPlayer.pausedElements.size !== this.syncedPlayer.middlewares.size && this.player.play()));
    }
    ['remove']() {
        super.remove();
        this.clear();
        ;
    }
    get ['autoplay']() {
        return true;
    }
    get ['loop']() {
        return true;
    }
}
customElements.define('custom-emoji-element', bn);
const a0_0x3d96ad = {};
a0_0x3d96ad.Markup = [
    'markup',
    'html',
    'xml',
    'svg',
    'mathml',
    'ssml',
    'atom',
    'rss'
];
a0_0x3d96ad.CSS = ['css'];
a0_0x3d96ad['C-like'] = ['clike'];
a0_0x3d96ad.Regex = ['regex'];
a0_0x3d96ad.JavaScript = [
    'javascript',
    'js'
];
a0_0x3d96ad.ABAP = ['abap'];
a0_0x3d96ad.ABNF = ['abnf'];
a0_0x3d96ad.ActionScript = ['actionscript'];
a0_0x3d96ad.Ada = ['ada'];
a0_0x3d96ad.Agda = ['agda'];
a0_0x3d96ad.AL = ['al'];
a0_0x3d96ad.ANTLR4 = [
    'antlr4',
    'g4'
];
a0_0x3d96ad['Apache Configuration'] = ['apacheconf'];
a0_0x3d96ad.SQL = ['sql'];
a0_0x3d96ad.Apex = ['apex'];
a0_0x3d96ad.APL = ['apl'];
a0_0x3d96ad.AppleScript = ['applescript'];
a0_0x3d96ad.AQL = ['aql'];
a0_0x3d96ad.C = ['c'];
a0_0x3d96ad['C++'] = ['cpp'];
a0_0x3d96ad.Arduino = [
    'arduino',
    'ino'
];
a0_0x3d96ad.ARFF = ['arff'];
a0_0x3d96ad['ARM Assembly'] = [
    'armasm',
    'arm-asm'
];
a0_0x3d96ad.Bash = [
    'bash',
    'sh',
    'shell'
];
a0_0x3d96ad.YAML = [
    'yaml',
    'yml'
];
a0_0x3d96ad.Markdown = [
    'markdown',
    'md'
];
a0_0x3d96ad.Arturo = [
    'arturo',
    'art'
];
a0_0x3d96ad.AsciiDoc = [
    'asciidoc',
    'adoc'
];
a0_0x3d96ad['C#'] = [
    'csharp',
    'cs',
    'dotnet'
];
a0_0x3d96ad['ASP.NET (C#)'] = ['aspnet'];
a0_0x3d96ad['6502 Assembly'] = ['asm6502'];
a0_0x3d96ad['Atmel AVR Assembly'] = ['asmatmel'];
a0_0x3d96ad.AutoHotkey = ['autohotkey'];
a0_0x3d96ad.AutoIt = ['autoit'];
a0_0x3d96ad.AviSynth = [
    'avisynth',
    'avs'
];
a0_0x3d96ad['Avro IDL'] = [
    'avro-idl',
    'avdl'
];
a0_0x3d96ad.AWK = [
    'awk',
    'gawk'
];
a0_0x3d96ad.BASIC = ['basic'];
a0_0x3d96ad.Batch = ['batch'];
a0_0x3d96ad.BBcode = [
    'bbcode',
    'shortcode'
];
a0_0x3d96ad.BBj = ['bbj'];
a0_0x3d96ad.Bicep = ['bicep'];
a0_0x3d96ad.Birb = ['birb'];
a0_0x3d96ad.Bison = ['bison'];
a0_0x3d96ad.BNF = [
    'bnf',
    'rbnf'
];
a0_0x3d96ad.BQN = ['bqn'];
a0_0x3d96ad.Brainfuck = ['brainfuck'];
a0_0x3d96ad.BrightScript = ['brightscript'];
a0_0x3d96ad.Bro = ['bro'];
a0_0x3d96ad.CFScript = [
    'cfscript',
    'cfc'
];
a0_0x3d96ad.ChaiScript = ['chaiscript'];
a0_0x3d96ad.CIL = ['cil'];
a0_0x3d96ad['Cilk/C'] = [
    'cilkc',
    'cilk-c'
];
a0_0x3d96ad['Cilk/C++'] = [
    'cilkcpp',
    'cilk-cpp',
    'cilk'
];
a0_0x3d96ad.Clojure = ['clojure'];
a0_0x3d96ad.CMake = ['cmake'];
a0_0x3d96ad.COBOL = ['cobol'];
a0_0x3d96ad.CoffeeScript = [
    'coffeescript',
    'coffee'
];
a0_0x3d96ad.Concurnas = [
    'concurnas',
    'conc'
];
a0_0x3d96ad['Content-Security-Policy'] = ['csp'];
a0_0x3d96ad.Cooklang = ['cooklang'];
a0_0x3d96ad.Ruby = [
    'ruby',
    'rb'
];
a0_0x3d96ad.Crystal = ['crystal'];
a0_0x3d96ad.CSV = ['csv'];
a0_0x3d96ad.CUE = ['cue'];
a0_0x3d96ad.Cypher = ['cypher'];
a0_0x3d96ad.D = ['d'];
a0_0x3d96ad.Dart = ['dart'];
a0_0x3d96ad.DataWeave = ['dataweave'];
a0_0x3d96ad.DAX = ['dax'];
a0_0x3d96ad.Dhall = ['dhall'];
a0_0x3d96ad.Diff = ['diff'];
a0_0x3d96ad['Markup templating'] = ['markup-templating'];
a0_0x3d96ad['Django/Jinja2'] = [
    'django',
    'jinja2'
];
a0_0x3d96ad['DNS zone file'] = [
    'dns-zone-file',
    'dns-zone'
];
a0_0x3d96ad.Docker = [
    'docker',
    'dockerfile'
];
a0_0x3d96ad['DOT (Graphviz)'] = [
    'dot',
    'gv'
];
a0_0x3d96ad.EBNF = ['ebnf'];
a0_0x3d96ad.EditorConfig = ['editorconfig'];
a0_0x3d96ad.Eiffel = ['eiffel'];
a0_0x3d96ad.EJS = [
    'ejs',
    'eta'
];
a0_0x3d96ad.Elixir = ['elixir'];
a0_0x3d96ad.Elm = ['elm'];
a0_0x3d96ad.Lua = ['lua'];
a0_0x3d96ad['Embedded Lua templating'] = ['etlua'];
a0_0x3d96ad.ERB = ['erb'];
a0_0x3d96ad.Erlang = ['erlang'];
a0_0x3d96ad['Excel Formula'] = [
    'excel-formula',
    'xlsx',
    'xls'
];
a0_0x3d96ad['F#'] = ['fsharp'];
a0_0x3d96ad.Factor = ['factor'];
a0_0x3d96ad.False = ['false'];
a0_0x3d96ad['Firestore security rules'] = ['firestore-security-rules'];
a0_0x3d96ad.Flow = ['flow'];
a0_0x3d96ad.Fortran = ['fortran'];
a0_0x3d96ad['FreeMarker Template Language'] = ['ftl'];
a0_0x3d96ad['GameMaker Language'] = [
    'gml',
    'gamemakerlanguage'
];
a0_0x3d96ad['GAP (CAS)'] = ['gap'];
a0_0x3d96ad['G-code'] = ['gcode'];
a0_0x3d96ad.GDScript = ['gdscript'];
a0_0x3d96ad.GEDCOM = ['gedcom'];
a0_0x3d96ad.gettext = [
    'gettext',
    'po'
];
a0_0x3d96ad.Git = ['git'];
a0_0x3d96ad.GLSL = ['glsl'];
a0_0x3d96ad.GN = [
    'gn',
    'gni'
];
a0_0x3d96ad['GNU Linker Script'] = [
    'linker-script',
    'ld'
];
a0_0x3d96ad.Go = ['go'];
a0_0x3d96ad['Go module'] = [
    'go-module',
    'go-mod'
];
a0_0x3d96ad.Gradle = ['gradle'];
a0_0x3d96ad.GraphQL = ['graphql'];
a0_0x3d96ad.Groovy = ['groovy'];
a0_0x3d96ad.Less = ['less'];
a0_0x3d96ad['Sass (SCSS)'] = ['scss'];
a0_0x3d96ad.Textile = ['textile'];
a0_0x3d96ad.Haml = ['haml'];
a0_0x3d96ad.Handlebars = [
    'handlebars',
    'hbs',
    'mustache'
];
a0_0x3d96ad.Haskell = [
    'haskell',
    'hs'
];
a0_0x3d96ad.Haxe = ['haxe'];
a0_0x3d96ad.HCL = ['hcl'];
a0_0x3d96ad.HLSL = ['hlsl'];
a0_0x3d96ad.Hoon = ['hoon'];
a0_0x3d96ad['HTTP Public-Key-Pins'] = ['hpkp'];
a0_0x3d96ad['HTTP Strict-Transport-Security'] = ['hsts'];
a0_0x3d96ad.JSON = [
    'json',
    'webmanifest'
];
a0_0x3d96ad.URI = [
    'uri',
    'url'
];
a0_0x3d96ad.HTTP = ['http'];
a0_0x3d96ad.IchigoJam = ['ichigojam'];
a0_0x3d96ad.Icon = ['icon'];
a0_0x3d96ad['ICU Message Format'] = ['icu-message-format'];
a0_0x3d96ad.Idris = [
    'idris',
    'idr'
];
a0_0x3d96ad['.ignore'] = [
    'ignore',
    'gitignore',
    'hgignore',
    'npmignore'
];
a0_0x3d96ad['Inform 7'] = ['inform7'];
a0_0x3d96ad.Ini = ['ini'];
a0_0x3d96ad.Io = ['io'];
a0_0x3d96ad.J = ['j'];
a0_0x3d96ad.Java = ['java'];
a0_0x3d96ad.Scala = ['scala'];
a0_0x3d96ad.PHP = ['php'];
a0_0x3d96ad['JavaDoc-like'] = ['javadoclike'];
a0_0x3d96ad.JavaDoc = ['javadoc'];
a0_0x3d96ad['Java stack trace'] = ['javastacktrace'];
a0_0x3d96ad.Jolie = ['jolie'];
a0_0x3d96ad.JQ = ['jq'];
a0_0x3d96ad.TypeScript = [
    'typescript',
    'ts'
];
a0_0x3d96ad.JSDoc = ['jsdoc'];
a0_0x3d96ad.N4JS = [
    'n4js',
    'n4jsd'
];
a0_0x3d96ad.JSON5 = ['json5'];
a0_0x3d96ad.JSONP = ['jsonp'];
a0_0x3d96ad['JS stack trace'] = ['jsstacktrace'];
a0_0x3d96ad.Julia = ['julia'];
a0_0x3d96ad['Keepalived Configure'] = ['keepalived'];
a0_0x3d96ad.Keyman = ['keyman'];
a0_0x3d96ad.Kotlin = [
    'kotlin',
    'kt',
    'kts'
];
a0_0x3d96ad.Kusto = ['kusto'];
a0_0x3d96ad.LaTeX = [
    'latex',
    'tex',
    'context'
];
a0_0x3d96ad.Latte = ['latte'];
a0_0x3d96ad.Scheme = ['scheme'];
a0_0x3d96ad.LilyPond = [
    'lilypond',
    'ly'
];
a0_0x3d96ad.Liquid = ['liquid'];
a0_0x3d96ad.Lisp = [
    'lisp',
    'emacs',
    'elisp',
    'emacs-lisp'
];
a0_0x3d96ad.LiveScript = ['livescript'];
a0_0x3d96ad['LLVM IR'] = ['llvm'];
a0_0x3d96ad['Log file'] = ['log'];
a0_0x3d96ad.LOLCODE = ['lolcode'];
a0_0x3d96ad['Magma (CAS)'] = ['magma'];
a0_0x3d96ad.Makefile = ['makefile'];
a0_0x3d96ad.Mata = ['mata'];
a0_0x3d96ad.MATLAB = ['matlab'];
a0_0x3d96ad.MAXScript = ['maxscript'];
a0_0x3d96ad.MEL = ['mel'];
a0_0x3d96ad.Mermaid = ['mermaid'];
a0_0x3d96ad.METAFONT = ['metafont'];
a0_0x3d96ad.Mizar = ['mizar'];
a0_0x3d96ad.MongoDB = ['mongodb'];
a0_0x3d96ad.Monkey = ['monkey'];
a0_0x3d96ad.MoonScript = [
    'moonscript',
    'moon'
];
a0_0x3d96ad.N1QL = ['n1ql'];
a0_0x3d96ad['Nand To Tetris HDL'] = ['nand2tetris-hdl'];
a0_0x3d96ad['Naninovel Script'] = [
    'naniscript',
    'nani'
];
a0_0x3d96ad.NASM = ['nasm'];
a0_0x3d96ad.NEON = ['neon'];
a0_0x3d96ad.Nevod = ['nevod'];
a0_0x3d96ad.nginx = ['nginx'];
a0_0x3d96ad.Nim = ['nim'];
a0_0x3d96ad.Nix = ['nix'];
a0_0x3d96ad.NSIS = ['nsis'];
a0_0x3d96ad['Objective-C'] = [
    'objectivec',
    'objc'
];
a0_0x3d96ad.OCaml = ['ocaml'];
a0_0x3d96ad.Odin = ['odin'];
a0_0x3d96ad.OpenCL = ['opencl'];
a0_0x3d96ad.OpenQasm = [
    'openqasm',
    'qasm'
];
a0_0x3d96ad.Oz = ['oz'];
a0_0x3d96ad['PARI/GP'] = ['parigp'];
a0_0x3d96ad.Parser = ['parser'];
a0_0x3d96ad.Pascal = [
    'pascal',
    'objectpascal'
];
a0_0x3d96ad.Pascaligo = ['pascaligo'];
a0_0x3d96ad['PATROL Scripting Language'] = ['psl'];
a0_0x3d96ad['PC-Axis'] = [
    'pcaxis',
    'px'
];
a0_0x3d96ad.PeopleCode = [
    'peoplecode',
    'pcode'
];
a0_0x3d96ad.Perl = ['perl'];
a0_0x3d96ad.PHPDoc = ['phpdoc'];
a0_0x3d96ad.PlantUML = [
    'plant-uml',
    'plantuml'
];
a0_0x3d96ad['PL/SQL'] = ['plsql'];
a0_0x3d96ad.PowerQuery = [
    'powerquery',
    'pq',
    'mscript'
];
a0_0x3d96ad.PowerShell = ['powershell'];
a0_0x3d96ad.Processing = ['processing'];
a0_0x3d96ad.Prolog = ['prolog'];
a0_0x3d96ad.PromQL = ['promql'];
a0_0x3d96ad['.properties'] = ['properties'];
a0_0x3d96ad['Protocol Buffers'] = ['protobuf'];
a0_0x3d96ad.Stylus = ['stylus'];
a0_0x3d96ad.Twig = ['twig'];
a0_0x3d96ad.Pug = ['pug'];
a0_0x3d96ad.Puppet = ['puppet'];
a0_0x3d96ad.PureBasic = [
    'purebasic',
    'pbfasm'
];
a0_0x3d96ad.Python = [
    'python',
    'py'
];
a0_0x3d96ad['Q#'] = [
    'qsharp',
    'qs'
];
a0_0x3d96ad['Q (kdb+ database)'] = ['q'];
a0_0x3d96ad.QML = ['qml'];
a0_0x3d96ad.Qore = ['qore'];
a0_0x3d96ad.R = ['r'];
a0_0x3d96ad.Racket = [
    'racket',
    'rkt'
];
a0_0x3d96ad['Razor C#'] = [
    'cshtml',
    'razor'
];
a0_0x3d96ad['React JSX'] = ['jsx'];
a0_0x3d96ad['React TSX'] = ['tsx'];
a0_0x3d96ad.Reason = ['reason'];
a0_0x3d96ad.Rego = ['rego'];
a0_0x3d96ad['Ren\'py'] = [
    'renpy',
    'rpy'
];
a0_0x3d96ad.ReScript = [
    'rescript',
    'res'
];
a0_0x3d96ad['reST (reStructuredText)'] = ['rest'];
a0_0x3d96ad.Rip = ['rip'];
a0_0x3d96ad.Roboconf = ['roboconf'];
a0_0x3d96ad['Robot Framework'] = [
    'robotframework',
    'robot'
];
a0_0x3d96ad.Rust = ['rust'];
a0_0x3d96ad.SAS = ['sas'];
a0_0x3d96ad['Sass (Sass)'] = ['sass'];
a0_0x3d96ad['Shell session'] = [
    'shell-session',
    'sh-session',
    'shellsession'
];
a0_0x3d96ad.Smali = ['smali'];
a0_0x3d96ad.Smalltalk = ['smalltalk'];
a0_0x3d96ad.Smarty = ['smarty'];
a0_0x3d96ad.SML = [
    'sml',
    'smlnj'
];
a0_0x3d96ad['Solidity (Ethereum)'] = [
    'solidity',
    'sol'
];
a0_0x3d96ad['Solution file'] = [
    'solution-file',
    'sln'
];
a0_0x3d96ad['Soy (Closure Template)'] = ['soy'];
a0_0x3d96ad['Splunk SPL'] = ['splunk-spl'];
a0_0x3d96ad['SQF: Status Quo Function (Arma 3)'] = ['sqf'];
a0_0x3d96ad.Squirrel = ['squirrel'];
a0_0x3d96ad.Stan = ['stan'];
a0_0x3d96ad['Stata Ado'] = ['stata'];
a0_0x3d96ad['Structured Text (IEC 61131-3)'] = ['iecst'];
a0_0x3d96ad.SuperCollider = [
    'supercollider',
    'sclang'
];
a0_0x3d96ad.Swift = ['swift'];
a0_0x3d96ad['Systemd configuration file'] = ['systemd'];
a0_0x3d96ad['T4 templating'] = ['t4-templating'];
a0_0x3d96ad['T4 Text Templates (C#)'] = [
    't4-cs',
    't4'
];
a0_0x3d96ad['VB.Net'] = ['vbnet'];
a0_0x3d96ad['T4 Text Templates (VB)'] = ['t4-vb'];
a0_0x3d96ad.TAP = ['tap'];
a0_0x3d96ad.Tcl = ['tcl'];
a0_0x3d96ad['Template Toolkit 2'] = ['tt2'];
a0_0x3d96ad.TOML = ['toml'];
a0_0x3d96ad.Tremor = [
    'tremor',
    'trickle',
    'troy'
];
a0_0x3d96ad.TypoScript = [
    'typoscript',
    'tsconfig'
];
a0_0x3d96ad.UnrealScript = [
    'unrealscript',
    'uscript',
    'uc'
];
a0_0x3d96ad['UO Razor Script'] = ['uorazor'];
a0_0x3d96ad.V = ['v'];
a0_0x3d96ad.Vala = ['vala'];
a0_0x3d96ad.Velocity = ['velocity'];
a0_0x3d96ad.Verilog = ['verilog'];
a0_0x3d96ad.VHDL = ['vhdl'];
a0_0x3d96ad.vim = ['vim'];
a0_0x3d96ad['Visual Basic'] = [
    'visual-basic',
    'vb',
    'vba'
];
a0_0x3d96ad.WarpScript = ['warpscript'];
a0_0x3d96ad.WebAssembly = ['wasm'];
a0_0x3d96ad['Web IDL'] = [
    'web-idl',
    'webidl'
];
a0_0x3d96ad.WGSL = ['wgsl'];
a0_0x3d96ad['Wiki markup'] = ['wiki'];
a0_0x3d96ad['Wolfram language'] = [
    'wolfram',
    'mathematica',
    'nb',
    'wl'
];
a0_0x3d96ad.Wren = ['wren'];
a0_0x3d96ad.Xeora = [
    'xeora',
    'xeoracube'
];
a0_0x3d96ad['Xojo (REALbasic)'] = ['xojo'];
a0_0x3d96ad.XQuery = ['xquery'];
a0_0x3d96ad.YANG = ['yang'];
a0_0x3d96ad.Zig = ['zig'];
;
const ai = a0_0x3d96ad, Er = {};
for (const s in ai) {
    const e = ai[s];
    e.unshift(s.toLowerCase());
    for (let t = 0, f = e.length; t < f; ++t) {
        Er[e[t]] = s;
    }
}
function ga(_0x3dc010) {
    const _0x1ce8c1 = _0x3dc010.toLowerCase(), _0x41e272 = ai[Er[_0x1ce8c1]] || [];
    for (const _0x1d5730 of _0x41e272)
        if (Jt.languages[_0x1d5730]) {
            return {
                'language': _0x1d5730,
                'prism': Jt
            };
        }
}
let Jt;
function Cu(_0x4e71cb) {
    ;
    if (Jt) {
        return at(Jt, () => ga(_0x4e71cb));
    }
    const _0x256519 = !!window.Prism;
    return _0x256519 || (window.Prism = window.Prism || {}, window.Prism.manual = true), Jt = ze(() => import('./prvon93zgq5x.js'), [], import.meta.url).then(_0x544cda => {
        const _0x17d176 = _0x544cda.default;
        return _0x256519 || _0x17d176.hooks.add('wrap', _0x49a47c => {
            ;
            _0x49a47c.classes.forEach((_0x3ed9dd, _0x33dad1, _0x387c76) => {
                ;
                _0x387c76[_0x33dad1] = 'prism-' + _0x3ed9dd;
            });
        }), Jt = _0x17d176, ga(_0x4e71cb);
    });
}
function ku(_0x93600a, _0x2de0f2) {
    ;
    return at(Cu(_0x2de0f2), _0x5bd3d4 => {
        ;
        if (!_0x5bd3d4) {
            return;
        }
        const {
            prism: _0x286f36,
            language: _0x250c04
        } = _0x5bd3d4;
        return _0x286f36.highlight(_0x93600a, _0x286f36.languages[_0x250c04], _0x250c04);
    });
}
function Fu(_0x426c4f, _0x3bf826, _0x3dc07d = 0) {
    ;
    for (let _0x476abd = _0x426c4f.length; _0x3dc07d < _0x476abd; ++_0x3dc07d) {
        if (_0x3bf826(_0x426c4f[_0x3dc07d], _0x3dc07d, _0x426c4f)) {
            return _0x3dc07d;
        }
    }
    return -1;
}
function uc(_0x574894) {
    const _0x4b6bdd = document.createElement('div');
    return _0x4b6bdd.innerHTML = _0x574894.trim(), _0x4b6bdd.firstElementChild;
}
N.createElementFromMarkup = uc;
const oi = new Map();
function Pu(_0x7334c7) {
    ;
    Tf(_0x7334c7);
    const _0x4b7c5d = {
        'isCancelled': false,
        'deferred': q()
    };
    return oi.set(_0x7334c7, _0x4b7c5d), _0x4b7c5d.deferred.then(() => {
        ;
        hc(_0x7334c7) === _0x4b7c5d && oi.delete(_0x7334c7);
    }), _0x4b7c5d;
}
function hc(_0x4b3d38) {
    return oi.get(_0x4b3d38);
}
function Tf(_0x24da66) {
    const _0x17d754 = hc(_0x24da66);
    _0x17d754 && (_0x17d754.isCancelled = true, _0x17d754.deferred.resolve());
}
function mc(_0x2a56e4, _0x36c2bc, _0x5aa6ab) {
    ;
    return _0x5aa6ab || (_0x5aa6ab = Pu(_0x36c2bc)), Oe(() => {
        ;
        _0x5aa6ab.isCancelled || (_0x2a56e4() ? mc(_0x2a56e4, _0x36c2bc, _0x5aa6ab) : _0x5aa6ab.deferred.resolve());
    }), _0x5aa6ab.deferred;
}
function gc(_0x4db9c2) {
    Oe(() => {
        _0x4db9c2() && gc(_0x4db9c2);
    });
}
function _u(_0x4f986d, _0x28c103) {
    ;
    return _0x4f986d.some(_0x1b25ff => _0x1b25ff instanceof Promise) ? Promise.all(_0x4f986d).then(_0x28c103) : _0x28c103(_0x4f986d);
}
function pa(_0xd72fae, _0x267cf3) {
    ;
    return _0xd72fae = Math.ceil(_0xd72fae), _0x267cf3 = Math.floor(_0x267cf3), Math.floor(Math.random() * (_0x267cf3 - _0xd72fae + 1)) + _0xd72fae;
}
const tt = class tt {
    static ['getStyleSheet']() {
        ;
        return this.style ? this.style : (this.log('Creating style element'), this.style = document.createElement('style'), document.head.appendChild(this.style), this.style);
    }
    static ['draw'](_0x1e257e) {
        ;
        if (this.lastDrawTime + this.DRAW_INTERVAL > performance.now()) {
            return;
        }
        this.lastDrawTime = performance.now();
        const _0x5712de = this.getStyleSheet(), _0x30ccea = _0x1e257e.toDataURL();
        _0x5712de.textContent = '\n      .bluff-spoiler {\n        mask-image: url(' + _0x30ccea + ');\n        opacity: 1;\n      }\n    ';
    }
    static ['observeReconnection'](_0x3eca17, _0x3bde3b) {
        const _0x3a0840 = new WeakRef(_0x3eca17);
        this.allWeakRefs.find(_0x324321 => _0x324321.deref() === _0x3eca17) || this.allWeakRefs.push(_0x3a0840);
        this.reconnectCallbacks.set(_0x3eca17, _0x3bde3b);
        this.initReconnectionInterval();
        ;
    }
    static ['initReconnectionInterval']() {
        ;
        this.reconnectIntervalId || (this.log('Initializing reconnection interval'), this.reconnectIntervalId = window.setInterval(() => {
            ;
            this.allWeakRefs = this.allWeakRefs.filter(_0x1b94ee => {
                ;
                const _0x5cd81c = _0x1b94ee.deref();
                if (!_0x5cd81c) {
                    return false;
                }
                const _0x5012e1 = pe.getAnimations(_0x5cd81c), _0x3a8223 = this.reconnectCallbacks.get(_0x5cd81c);
                return !_0x5012e1?.length && _0x5cd81c.isConnected && (_0x3a8223(_0x5cd81c), this.log('Reconnected element')), true;
            });
            this.allWeakRefs.length || (window.clearInterval(this.reconnectIntervalId), this.reconnectIntervalId = void 0, this.log('Removing reconnection interval'));
            ;
        }, this.RECONNECT_INTERVAL));
    }
    static ['destroy']() {
        ;
        this.style?.remove();
        this.style = void 0;
        this.log('Destroying style element');
        ;
    }
};
tt.log = Q('bluff-spoiler');
tt.lastDrawTime = 0;
tt.DRAW_INTERVAL = 66.66666666666667;
tt.allWeakRefs = [];
tt.reconnectCallbacks = new WeakMap();
tt.RECONNECT_INTERVAL = 250;
tt.instancesCount = 0;
;
let gt = tt;
N.BluffSpoilerController = gt;
var Tu = 4, Lu = 0.001, xu = 1e-7, Mu = 10, Ts = 11, Ef = 1 / (Ts - 1), Iu = typeof Float32Array == 'function';
function pc(_0x421971, _0xbb8d1a) {
    return 1 - 3 * _0xbb8d1a + 3 * _0x421971;
}
function bc(_0x527781, _0x1b95e4) {
    return 3 * _0x1b95e4 - 6 * _0x527781;
}
function yc(_0x523238) {
    return 3 * _0x523238;
}
function Xf(_0x5cd85d, _0x7c4b66, _0x4100ad) {
    return ((pc(_0x7c4b66, _0x4100ad) * _0x5cd85d + bc(_0x7c4b66, _0x4100ad)) * _0x5cd85d + yc(_0x7c4b66)) * _0x5cd85d;
}
function vc(_0x2d6aff, _0x4086b, _0x555c46) {
    return 3 * pc(_0x4086b, _0x555c46) * _0x2d6aff * _0x2d6aff + 2 * bc(_0x4086b, _0x555c46) * _0x2d6aff + yc(_0x4086b);
}
function Ru(_0x4f7df8, _0x5ac77a, _0x449088, _0x24d701, _0x5d726b) {
    ;
    var _0x4fd7ba, _0x2e3e90, _0xee7478 = 0;
    do
        _0x2e3e90 = _0x5ac77a + (_0x449088 - _0x5ac77a) / 2, _0x4fd7ba = Xf(_0x2e3e90, _0x24d701, _0x5d726b) - _0x4f7df8, _0x4fd7ba > 0 ? _0x449088 = _0x2e3e90 : _0x5ac77a = _0x2e3e90;
    while (Math.abs(_0x4fd7ba) > xu && ++_0xee7478 < Mu);
    return _0x2e3e90;
}
function Ou(_0x57ec41, _0x231db6, _0x1bfdcd, _0x358aa8) {
    for (var _0xe74f7d = 0; _0xe74f7d < Tu; ++_0xe74f7d) {
        var _0x4f178d = vc(_0x231db6, _0x1bfdcd, _0x358aa8);
        if (_0x4f178d === 0) {
            return _0x231db6;
        }
        var _0x32044c = Xf(_0x231db6, _0x1bfdcd, _0x358aa8) - _0x57ec41;
        _0x231db6 -= _0x32044c / _0x4f178d;
    }
    return _0x231db6;
}
function Nu(_0x5a3a9d) {
    return _0x5a3a9d;
}
function Ec(_0x9f80d2, _0x34b517, _0x205869, _0x37058b) {
    ;
    if (!(0 <= _0x9f80d2 && _0x9f80d2 <= 1 && 0 <= _0x205869 && _0x205869 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (_0x9f80d2 === _0x34b517 && _0x205869 === _0x37058b) {
        return Nu;
    }
    for (var _0x5a1953 = Iu ? new Float32Array(Ts) : new Array(Ts), _0x1c8178 = 0; _0x1c8178 < Ts; ++_0x1c8178) {
        _0x5a1953[_0x1c8178] = Xf(_0x1c8178 * Ef, _0x9f80d2, _0x205869);
    }
    function _0x49e64d(_0x3ab97a) {
        for (var _0x4f4ad4 = 0, _0x127d4d = 1, _0x26deaf = Ts - 1; _0x127d4d !== _0x26deaf && _0x5a1953[_0x127d4d] <= _0x3ab97a; ++_0x127d4d) {
            _0x4f4ad4 += Ef;
        }
        --_0x127d4d;
        var _0x5bf547 = (_0x3ab97a - _0x5a1953[_0x127d4d]) / (_0x5a1953[_0x127d4d + 1] - _0x5a1953[_0x127d4d]), _0x792c14 = _0x4f4ad4 + _0x5bf547 * Ef, _0x4b84a4 = vc(_0x792c14, _0x9f80d2, _0x205869);
        return _0x4b84a4 >= Lu ? Ou(_0x3ab97a, _0x792c14, _0x9f80d2, _0x205869) : _0x4b84a4 === 0 ? _0x792c14 : Ru(_0x3ab97a, _0x4f4ad4, _0x4f4ad4 + Ef, _0x9f80d2, _0x205869);
    }
    return function (_0xf15bf0) {
        return _0xf15bf0 === 0 || _0xf15bf0 === 1 ? _0xf15bf0 : Xf(_0x49e64d(_0xf15bf0), _0x34b517, _0x37058b);
    };
}
function pt(_0x1e9451, _0xbec235, _0x678c62) {
    ;
    _0x1e9451 /= 255;
    _0xbec235 /= 255;
    _0x678c62 /= 255;
    ;
    const _0x132eec = Math.max(_0x1e9451, _0xbec235, _0x678c62), _0x44d4a3 = _0x132eec - Math.min(_0x1e9451, _0xbec235, _0x678c62), _0x1fbe8e = _0x44d4a3 && (_0x132eec === _0x1e9451 ? (_0xbec235 - _0x678c62) / _0x44d4a3 : _0x132eec == _0xbec235 ? 2 + (_0x678c62 - _0x1e9451) / _0x44d4a3 : 4 + (_0x1e9451 - _0xbec235) / _0x44d4a3);
    return [
        60 * (_0x1fbe8e < 0 ? _0x1fbe8e + 6 : _0x1fbe8e),
        _0x132eec && _0x44d4a3 / _0x132eec,
        _0x132eec
    ];
}
function wr(_0x3e9ef3, _0x54033e, _0xe27cff) {
    const _0x3f876b = (_0x322214, _0x3bb544 = (_0x322214 + _0x3e9ef3 / 60) % 6) => Math.round((_0xe27cff - _0xe27cff * _0x54033e * Math.max(Math.min(_0x3bb544, 4 - _0x3bb544, 1), 0)) * 255);
    return [
        _0x3f876b(5),
        _0x3f876b(3),
        _0x3f876b(1)
    ];
}
function ci(_0x5e9e29, _0x57e767, _0x201d86, _0x174c47 = 1) {
    ;
    _0x5e9e29 /= 255;
    _0x57e767 /= 255;
    _0x201d86 /= 255;
    ;
    const _0x38a034 = Math.max(_0x5e9e29, _0x57e767, _0x201d86), _0x380834 = Math.min(_0x5e9e29, _0x57e767, _0x201d86);
    let _0x560c2f, _0x22e518;
    const _0x4dea4c = (_0x38a034 + _0x380834) / 2;
    if (_0x38a034 === _0x380834) {
        _0x560c2f = _0x22e518 = 0;
    } else {
        const _0x578672 = _0x38a034 - _0x380834;
        switch (_0x22e518 = _0x4dea4c > 0.5 ? _0x578672 / (2 - _0x38a034 - _0x380834) : _0x578672 / (_0x38a034 + _0x380834), _0x38a034) {
        case _0x5e9e29:
            _0x560c2f = (_0x57e767 - _0x201d86) / _0x578672 + (_0x57e767 < _0x201d86 ? 6 : 0);
            break;
        case _0x57e767:
            _0x560c2f = (_0x201d86 - _0x5e9e29) / _0x578672 + 2;
            break;
        case _0x201d86:
            _0x560c2f = (_0x5e9e29 - _0x57e767) / _0x578672 + 4;
            break;
        }
        _0x560c2f /= 6;
    }
    const _0x32850b = {};
    return _0x32850b.h = _0x560c2f * 360, _0x32850b.s = _0x22e518 * 100, _0x32850b.l = _0x4dea4c * 100, _0x32850b.a = _0x174c47, _0x32850b;
}
function r3(_0x1697c4) {
    ;
    return 'hsla(' + _0x1697c4.h + ', ' + _0x1697c4.s + '%, ' + _0x1697c4.l + '%, ' + _0x1697c4.a + ')';
}
function wc(_0x5a0148, _0x369113, _0xbe82d1, _0x208251) {
    ;
    _0x5a0148 /= 360;
    _0x369113 /= 100;
    _0xbe82d1 /= 100;
    ;
    let _0x8832fe, _0x5b614d, _0x4b0e8b;
    if (_0x369113 === 0) {
        _0x8832fe = _0x5b614d = _0x4b0e8b = _0xbe82d1;
    } else {
        const _0x1ad6f9 = function (_0x718467, _0x5ed2f8, _0x2b815b) {
                return _0x2b815b < 0 && (_0x2b815b += 1), _0x2b815b > 1 && (_0x2b815b -= 1), _0x2b815b < 0.16666666666666666 ? _0x718467 + (_0x5ed2f8 - _0x718467) * 6 * _0x2b815b : _0x2b815b < 0.5 ? _0x5ed2f8 : _0x2b815b < 0.6666666666666666 ? _0x718467 + (_0x5ed2f8 - _0x718467) * (0.6666666666666666 - _0x2b815b) * 6 : _0x718467;
            }, _0xe5cf0 = _0xbe82d1 < 0.5 ? _0xbe82d1 * (1 + _0x369113) : _0xbe82d1 + _0x369113 - _0xbe82d1 * _0x369113, _0x3abdc1 = 2 * _0xbe82d1 - _0xe5cf0;
        _0x8832fe = _0x1ad6f9(_0x3abdc1, _0xe5cf0, _0x5a0148 + 0.3333333333333333);
        _0x5b614d = _0x1ad6f9(_0x3abdc1, _0xe5cf0, _0x5a0148);
        _0x4b0e8b = _0x1ad6f9(_0x3abdc1, _0xe5cf0, _0x5a0148 - 0.3333333333333333);
        ;
    }
    return [
        _0x8832fe,
        _0x5b614d,
        _0x4b0e8b,
        _0x208251
    ].map(_0x3f157b => Math.round(_0x3f157b * 255));
}
function Dc(_0x36b5ad) {
    const _0x56f447 = _0x36b5ad.slice(5, -1).split(', '), _0x1977c1 = +_0x56f447.pop(), _0xce817c = _0x56f447.map(_0x14d459 => _0x14d459.endsWith('%') ? +_0x14d459.slice(0, -1) : +_0x14d459);
    return wc(_0xce817c[0], _0xce817c[1], _0xce817c[2], _0x1977c1);
}
function Sc(_0xa684a) {
    const _0x4e55c1 = [], _0x3fb313 = _0xa684a[0] === '#' ? 1 : 0;
    if (_0xa684a.length === 5 + _0x3fb313 && (_0xa684a = (_0x3fb313 ? '#' : '') + '0' + _0xa684a.slice(_0x3fb313)), _0xa684a.length === 3 + _0x3fb313) {
        for (let _0x2edd0c = _0x3fb313; _0x2edd0c < _0xa684a.length; ++_0x2edd0c) {
            _0x4e55c1.push(parseInt(_0xa684a[_0x2edd0c] + _0xa684a[_0x2edd0c], 16));
        }
    } else {
        if (_0xa684a.length === 4 + _0x3fb313) {
            for (let _0x240dc2 = _0x3fb313; _0x240dc2 < _0xa684a.length - 1; ++_0x240dc2) {
                _0x4e55c1.push(parseInt(_0xa684a[_0x240dc2] + _0xa684a[_0x240dc2], 16));
            }
            _0x4e55c1.push(parseInt(_0xa684a[_0xa684a.length - 1], 16));
        } else {
            for (let _0x5a0725 = _0x3fb313; _0x5a0725 < _0xa684a.length; _0x5a0725 += 2) {
                _0x4e55c1.push(parseInt(_0xa684a.slice(_0x5a0725, _0x5a0725 + 2), 16));
            }
        }
    }
    return _0x4e55c1;
}
function et(_0x54f547) {
    return Sc(_0x54f547.slice(0, 7));
}
function a3(_0x534497, _0x28285c) {
    ;
    let _0x22a01a = '#' + _0x534497.toString(16).padStart(6, '0');
    return _0x28285c !== void 0 && (_0x22a01a += '' + Math.floor(_0x28285c * 255).toString(16).padStart(2, '0')), _0x22a01a;
}
function Ac(_0x287013) {
    const _0x1149a2 = Sc(_0x287013);
    return ci(_0x1149a2[0], _0x1149a2[1], _0x1149a2[2], _0x1149a2[3]);
}
function Ls(_0x3d32ac) {
    ;
    return '#' + _0x3d32ac.map(_0x55b903 => ('0' + _0x55b903.toString(16)).slice(-2)).join('');
}
function Bu(_0x474a54) {
    return Ls(Dc(_0x474a54));
}
function Uu(_0x597715) {
    ;
    return Bu(_0x597715).slice(0, -2);
}
function Tn(_0x51c2d7, _0x4c68ab, _0x37335b) {
    const _0x48b1f6 = new Array(3);
    for (let _0x213ffe = 0; _0x213ffe < 3; ++_0x213ffe) {
        const _0x2dd1ea = _0x51c2d7[_0x213ffe], _0x5da5c5 = _0x4c68ab[_0x213ffe];
        _0x48b1f6[_0x213ffe] = Math.floor(_0x5da5c5 + (_0x2dd1ea - _0x5da5c5) * _0x37335b);
    }
    return _0x48b1f6;
}
function ba(_0xbb96ab) {
    return (_0xbb96ab[0] * 0.2126 + _0xbb96ab[1] * 0.7152 + _0xbb96ab[2] * 0.0722) / 255;
}
function ju(_0x415767, _0xa1fa58) {
    ;
    return _0x415767.map((_0x4c6383, _0x506d04) => Math.round((_0x4c6383 + _0xa1fa58[_0x506d04]) / 2));
}
function Hu(_0x464236, _0x5f271f, _0x3e3338) {
    const _0x4bd2a6 = pt(..._0x5f271f), _0x1b4ba7 = pt(..._0x3e3338), _0x55586e = Math.min(1.5 * _0x4bd2a6[1] / _0x464236[1], 1);
    return _0x4bd2a6[0] = Math.min(360, _0x1b4ba7[0] - _0x4bd2a6[0] + _0x464236[0]), _0x4bd2a6[1] = Math.min(1, _0x1b4ba7[1] * _0x464236[1] / _0x4bd2a6[1]), _0x4bd2a6[2] = Math.min(1, (_0x1b4ba7[2] / _0x4bd2a6[2] + _0x55586e - 1) * _0x464236[2] / _0x55586e), _0x4bd2a6[2] < 0.3 ? _0x3e3338 : wr(..._0x4bd2a6);
}
function Wu(_0x28c2ae, _0x89c4fe, _0x2c7496, _0x59d4ea) {
    const _0x3eee3f = pt(..._0x2c7496);
    if (Math.min(Math.abs(_0x3eee3f[0] - _0x28c2ae[0]), Math.abs(_0x3eee3f[0] - _0x28c2ae[0] - 360)) > 30) {
        return _0x2c7496;
    }
    const _0x50b360 = _0x28c2ae[1] ? Math.min(1.5 * _0x3eee3f[1] / _0x28c2ae[1], 1) : 0;
    _0x3eee3f[0] = Math.min(360, _0x3eee3f[0] + _0x89c4fe[0] - _0x28c2ae[0]);
    _0x3eee3f[1] = _0x28c2ae[1] ? Math.min(1, _0x3eee3f[1] * _0x89c4fe[1] / _0x28c2ae[1]) : 0;
    _0x3eee3f[2] = _0x28c2ae[2] ? Math.min(1, _0x3eee3f[2] * (1 - _0x50b360 + _0x50b360 * _0x89c4fe[2] / _0x28c2ae[2])) : 0;
    ;
    let _0x9c6471 = wr(..._0x3eee3f);
    const _0x205747 = ba(_0x2c7496), _0x552fa2 = ba(_0x9c6471);
    if (_0x59d4ea ? _0x205747 > _0x552fa2 : _0x205747 < _0x552fa2) {
        const _0x13029b = 0.4 * _0x205747 / _0x552fa2 + 0.6;
        _0x9c6471 = Vu(_0x9c6471, _0x13029b);
    }
    return _0x9c6471;
}
function Vu(_0xa2ad66, _0x2e5d7a) {
    ;
    return _0xa2ad66.map(_0xeae239 => Dt(Math.round(_0xeae239 * _0x2e5d7a), 0, 255));
}
function Dr(_0x4240b4) {
    const _0x5ccf2a = (_0x4240b4 < 0 ? 16777215 + _0x4240b4 : _0x4240b4).toString(16);
    return '#' + (_0x5ccf2a.length >= 6 ? _0x5ccf2a : '0'.repeat(6 - _0x5ccf2a.length) + _0x5ccf2a);
}
function wf(_0x520f01) {
    return et(Dr(_0x520f01));
}
function o3(_0x5b7b1a) {
    ;
    return _0x5b7b1a.settings ? [
        _0x5b7b1a.settings.background_color,
        _0x5b7b1a.settings.second_background_color,
        _0x5b7b1a.settings.third_background_color,
        _0x5b7b1a.settings.fourth_background_color
    ].filter(Boolean).map(Dr).join(',') : '';
}
function c3(_0x376345, _0x4d698a) {
    const _0x53c3e0 = _0x376345[3];
    return _0x376345.slice(0, 3).map((_0x236afe, _0x3350c4) => Dt(Math.round((_0x53c3e0 * (_0x236afe / 255) + _0x53c3e0 * (_0x4d698a[_0x3350c4] / 255)) * 255), 0, 255));
}
function d3(_0x1de6c0) {
    const [_0x2bff53, _0xe6c163, _0x896a21] = _0x1de6c0;
    return 0.2126 * _0x2bff53 / 255 + 0.7152 * _0xe6c163 / 255 + 0.0722 * _0x896a21 / 255;
}
function l3(_0x2c9b6b) {
    return _0x2c9b6b > 0.5 ? [
        0,
        0,
        0
    ] : [
        255,
        255,
        255
    ];
}
function u3(_0x4100eb, _0x136c01) {
    const _0x3c73d1 = _0x4100eb > 0.5 ? 0 : 1, _0x28bee7 = (_0x4100eb - _0x3c73d1 + _0x136c01) / _0x136c01;
    return +Math.max(0.5, Math.min(0.64, _0x28bee7)).toFixed(2);
}
function Ln(_0x49bcd9, _0x408426) {
    const _0x367318 = new Set(_0x408426), _0xb49541 = {};
    return Object.keys(_0x49bcd9).forEach(_0x5784ca => {
        _0x367318.has(_0x5784ca) || (_0xb49541[_0x5784ca] = _0x49bcd9[_0x5784ca]);
    }), _0xb49541;
}
const zu = [
    {
        'key': 'enhance',
        'uniform': 'uEnhance',
        'label': () => X('MediaEditor.Adjustments.Enhance'),
        'to100': true
    },
    {
        'key': 'brightness',
        'uniform': 'uBrightness',
        'label': () => X('MediaEditor.Adjustments.Brightness'),
        'to100': false
    },
    {
        'key': 'contrast',
        'uniform': 'uContrast',
        'label': () => X('MediaEditor.Adjustments.Contrast'),
        'to100': false
    },
    {
        'key': 'saturation',
        'uniform': 'uSaturation',
        'label': () => X('MediaEditor.Adjustments.Saturation'),
        'to100': false
    },
    {
        'key': 'warmth',
        'uniform': 'uWarmth',
        'label': () => X('MediaEditor.Adjustments.Warmth'),
        'to100': false
    },
    {
        'key': 'fade',
        'uniform': 'uFade',
        'label': () => X('MediaEditor.Adjustments.Fade'),
        'to100': true
    },
    {
        'key': 'highlights',
        'uniform': 'uHighlights',
        'label': () => X('MediaEditor.Adjustments.Highlights'),
        'to100': false
    },
    {
        'key': 'shadows',
        'uniform': 'uShadows',
        'label': () => X('MediaEditor.Adjustments.Shadows'),
        'to100': false
    },
    {
        'key': 'vignette',
        'uniform': 'uVignette',
        'label': () => X('MediaEditor.Adjustments.Vignette'),
        'to100': true
    },
    {
        'key': 'grain',
        'uniform': 'uGrain',
        'label': () => X('MediaEditor.Adjustments.Grain'),
        'to100': true
    },
    {
        'key': 'sharpen',
        'uniform': 'uSharpen',
        'label': () => X('MediaEditor.Adjustments.Sharpen'),
        'to100': true
    }
];
var Qf;
(_0x1dc5bb => {
    ;
    _0x1dc5bb.RemoveArrayItem = 'SSBiZWxpZXZlIEkgY2FuIGZseSwgSSBiZWxpZXZlIEkgY2FuIHRvdWNoIHRoZSBza3kh';
})(Qf || (Qf = {}));
var Gu = (_0x2670de => (_0x2670de[_0x2670de.Redraw = 1] = 'Redraw', _0x2670de[_0x2670de.UpdateCursor = 2] = 'UpdateCursor', _0x2670de[_0x2670de.UpdateVideo = 4] = 'UpdateVideo', _0x2670de))(Gu || {});
const a0_0x43b06f = {};
a0_0x43b06f.flip = [
    1,
    1
];
a0_0x43b06f.rotation = 0;
a0_0x43b06f.scale = 1;
a0_0x43b06f.translation = [
    0,
    0
];
;
const a0_0x3079fc = {};
a0_0x3079fc.alignment = 'left';
a0_0x3079fc.style = 'outline';
a0_0x3079fc.color = '#ffffff';
a0_0x3079fc.font = 'roboto';
a0_0x3079fc.size = 40;
;
const a0_0x3052df = {};
a0_0x3052df.brush = 'pen';
a0_0x3052df.color = '#fe4438';
a0_0x3052df.size = 18;
;
const qu = _0x148fe6 => ({
        'scale': 1,
        'rotation': 0,
        'translation': [
            0,
            0
        ],
        'flip': [
            1,
            1
        ],
        'currentImageRatio': 0,
        'currentVideoTime': 0,
        'videoCropStart': 0,
        'videoCropLength': 1,
        'videoThumbnailPosition': 0,
        'videoMuted': false,
        'videoQuality': Zu(_0x148fe6.mediaSize[1]),
        'adjustments': Object.fromEntries(zu.map(_0x4f1252 => [
            _0x4f1252.key,
            0
        ])),
        'resizableLayers': [],
        'brushDrawnLines': [],
        'history': [],
        'redoHistory': []
    }), $u = () => ({
        'isReady': false,
        'pixelRatio': window.devicePixelRatio,
        'renderingPayload': void 0,
        'currentTab': 'adjustments',
        'imageSize': void 0,
        'canvasSize': void 0,
        'fixedImageRatioKey': void 0,
        'finalTransform': a0_0x43b06f,
        'currentTextLayerInfo': a0_0x3079fc,
        'selectedResizableLayer': void 0,
        'stickersLayersInfo': {},
        'currentBrush': a0_0x3052df,
        'previewBrushSize': void 0,
        'resizeHandlesContainer': void 0,
        'isAdjusting': false,
        'isMoving': false,
        'isPlaying': false
    }), Yu = Hi();
function h3(_0x5ea111) {
    const _0x8e3061 = _0x5ea111.editingMediaState ? structuredClone(_0x5ea111.editingMediaState) : qu(_0x5ea111), _0x2e9794 = structuredClone(_0x8e3061), _0x124c98 = Kr(_0x8e3061), _0x5bbc9c = Kr($u()), _0xe962b3 = {
            'pushToHistory': _0x4b381a => {
                Tl(_0x124c98, Ll(({
                    history: _0x15ed69,
                    redoHistory: _0xdd3b17
                }) => {
                    ;
                    _0x15ed69.push(_0x4b381a);
                    _0xdd3b17.length && _0xdd3b17.splice(0, 1e+400);
                    ;
                }));
            },
            'setInitialImageRatio': _0x300215 => {
                ;
                _0x2e9794.currentImageRatio = _0x300215;
            },
            'redrawBrushes': () => {
            },
            'abortDrawerSlide': () => {
            },
            'resetRotationWheel': () => {
            },
            'setVideoTime': () => {
            }
        }, [_0x55b438, _0x3f9155] = ke(false), _0x508ad9 = [
            'history',
            'redoHistory',
            'currentVideoTime'
        ], _0x4753a9 = Wo(() => {
            _0x3f9155(!di(Ln(_0x2e9794, _0x508ad9), Ln(_0x124c98, _0x508ad9)));
        }, 200, false);
    return rt(Is(() => li(Ln(_0x124c98, _0x508ad9)), () => {
        _0x4753a9();
    })), {
        'managers': _0x5ea111.managers,
        'mediaSrc': _0x5ea111.mediaSrc,
        'mediaType': _0x5ea111.mediaType,
        'mediaBlob': _0x5ea111.mediaBlob,
        'mediaSize': _0x5ea111.mediaSize,
        'mediaState': _0x124c98,
        'editorState': _0x5bbc9c,
        'actions': _0xe962b3,
        'hasModifications': _0x55b438,
        'imageRatio': _0x5ea111.mediaSize[0] / _0x5ea111.mediaSize[1],
        'resizableLayersSeed': Math.random()
    };
}
const m3 = () => Uf(Yu), g3 = Q('Media editor'), p3 = _0x424cfe => new Promise(_0x2f8bc8 => setTimeout(_0x2f8bc8, _0x424cfe));
function b3(_0x1002fd) {
    const _0x517de0 = fo();
    return (..._0x5b063a) => no(_0x517de0, () => _0x1002fd(..._0x5b063a));
}
function y3(_0x1af092, _0x3b7498) {
    ;
    return Math.hypot(_0x1af092[0] - _0x3b7498[0], _0x1af092[1] - _0x3b7498[1]);
}
function ya(_0x3bce71, _0x1e2180, _0x196eae) {
    return _0x1e2180 / _0x3bce71 > _0x196eae ? _0x1e2180 = _0x196eae * _0x3bce71 : _0x196eae = _0x1e2180 / _0x3bce71, [
        _0x1e2180,
        _0x196eae
    ];
}
function v3(_0x1ecc16, _0x29f2d2, _0x32bb60, _0x1e37d2, _0x5ca907) {
    ;
    return [_0x29f2d2, _0x32bb60] = ya(_0x1ecc16, _0x29f2d2, _0x32bb60), [_0x1e37d2, _0x5ca907] = ya(_0x1ecc16, _0x1e37d2, _0x5ca907), Math.max(_0x29f2d2 / _0x1e37d2, _0x32bb60 / _0x5ca907);
}
function E3(_0x1f61aa) {
    ;
    return Ac(_0x1f61aa).l < 80 ? '#ffffff' : '#000000';
}
function va(_0x11d8d4, _0x1f2fc4, _0x424298) {
    return _0x11d8d4 + (_0x1f2fc4 - _0x11d8d4) * _0x424298;
}
function w3(_0x36acc2, _0x41a48e, _0x8bd037) {
    return _0x36acc2.map((_0x1df440, _0x4e5793) => _0x1df440 + (_0x41a48e[_0x4e5793] - _0x1df440) * _0x8bd037);
}
const Ea = _0x571f04 => _0x571f04 instanceof Object, Ku = 0.001;
function di(_0x56f259, _0x1035f0) {
    ;
    return typeof _0x56f259 == 'number' && typeof _0x1035f0 == 'number' ? Math.abs(_0x56f259 - _0x1035f0) < Ku : _0x56f259 === _0x1035f0 ? true : _0x56f259 instanceof Array && _0x1035f0 instanceof Array ? _0x56f259.length === _0x1035f0.length && _0x56f259.every((_0x1fd163, _0xeb276b) => di(_0x1fd163, _0x1035f0[_0xeb276b])) : Ea(_0x56f259) && Ea(_0x1035f0) ? Array.from(new Set([
        ...Object.keys(_0x56f259),
        ...Object.keys(_0x1035f0)
    ])).every(_0x22308a => di(_0x56f259[_0x22308a], _0x1035f0[_0x22308a])) : false;
}
const Ju = Ec(0.42, 0, 0.58, 1), Xu = Ec(0.25, 0.1, 0.25, 1);
function Qu(_0x595e64, _0x52f844, _0xdca9d6, _0x62fecd, {
    easing: _0x51f133 = Ju,
    onEnd: _0x59c817 = () => {
    }
} = {}) {
    let _0x480a8d, _0xcb6956 = false;
    function _0x5af5a0(_0x22fd0e) {
        ;
        if (_0xcb6956) {
            return;
        }
        _0x480a8d || (_0x480a8d = _0x22fd0e);
        const _0x54606a = _0x22fd0e - _0x480a8d, _0x180d0c = Math.min(_0x54606a / _0xdca9d6, 1), _0x39114d = _0x51f133(_0x180d0c);
        if (_0x595e64 instanceof Array && _0x52f844 instanceof Array) {
            const _0x592e75 = _0x595e64.map((_0xa9adc1, _0x31db5e) => va(_0xa9adc1, _0x52f844[_0x31db5e], _0x39114d));
            _0x62fecd(_0x592e75);
        } else {
            _0x62fecd(va(_0x595e64, _0x52f844, _0x39114d));
        }
        _0x180d0c < 1 ? requestAnimationFrame(_0x5af5a0) : _0x59c817();
    }
    return requestAnimationFrame(_0x5af5a0), () => {
        _0xcb6956 = true;
    };
}
function D3(_0x1999e1, _0xfa0ad0) {
    const _0x1eac9d = [..._0x1999e1.path].reverse();
    if (!_0x1eac9d?.length) {
        return;
    }
    let _0x5e8473 = _0xfa0ad0;
    for (; _0x1eac9d.length > 1;) {
        _0x5e8473 = _0x5e8473[_0x1eac9d.pop()];
    }
    let _0x2791c0 = _0x1eac9d.pop();
    _0x5e8473 instanceof Array ? (_0x2791c0 = _0x2791c0, _0x1999e1.findBy && (_0x2791c0 = _0x5e8473.findIndex(_0x2fb706 => _0x2fb706?.id === _0x1999e1.findBy.id)), _0x2791c0 === -1 && (_0x2791c0 = _0x5e8473.length), _0x1999e1.newValue === Qf.RemoveArrayItem ? _0x5e8473.splice(_0x2791c0, 0, _0x1999e1.oldValue) : _0x1999e1.oldValue === Qf.RemoveArrayItem ? _0x5e8473.splice(_0x2791c0, 1) : _0x5e8473[_0x2791c0] = _0x1999e1.oldValue) : _0x5e8473[_0x2791c0] = _0x1999e1.oldValue;
}
function li(_0x3f8fa6) {
    ;
    _0x3f8fa6 instanceof Array ? _0x3f8fa6.forEach(_0x441062 => li(_0x441062)) : _0x3f8fa6 instanceof Object && Object.values(_0x3f8fa6).forEach(_0x45ae56 => li(_0x45ae56));
}
function S3(_0x10feec) {
    ;
    _0x10feec.getExtension('WEBGL_lose_context')?.loseContext();
}
const Df = [
    240,
    360,
    480,
    600,
    720,
    1080
];
function Zu(_0x308527) {
    ;
    for (let _0x3c6347 = Df.length - 1; _0x3c6347 > 0; _0x3c6347--) {
        const _0x1a0bfd = Df[_0x3c6347], _0x16ff9b = Df[_0x3c6347 - 1], _0x5b9e0c = _0x1a0bfd - _0x16ff9b;
        if (_0x308527 > _0x16ff9b + _0x5b9e0c * 0.8) {
            return _0x1a0bfd;
        }
    }
    return Df[0];
}
;
function A3(_0x2b0c9b) {
    ;
    return !!_0x2b0c9b.find(_0x3ae954 => {
        const _0x34e792 = _0x3ae954.sticker?.sticker;
        return _0x34e792 === 2 || !wt && _0x34e792 === 3;
    });
}
const a0_0x55f8c4 = {};
a0_0x55f8c4.fontFamily = '\'Roboto\'';
a0_0x55f8c4.fontWeight = 500;
a0_0x55f8c4.baseline = 0.75;
;
const a0_0xfc84f1 = {};
a0_0xfc84f1.fontFamily = '\'Suez One\'';
a0_0xfc84f1.fontWeight = 400;
a0_0xfc84f1.baseline = 0.75;
;
const a0_0x322bca = {};
a0_0x322bca.fontFamily = '\'Rubik Bubbles\'';
a0_0x322bca.fontWeight = 400;
a0_0x322bca.baseline = 0.75;
;
const a0_0x1f4eaa = {};
a0_0x1f4eaa.fontFamily = '\'Playwrite BE VLG\'';
a0_0x1f4eaa.fontWeight = 400;
a0_0x1f4eaa.baseline = 0.85;
;
const a0_0x32d894 = {};
a0_0x32d894.fontFamily = '\'Chewy\'';
a0_0x32d894.fontWeight = 400;
a0_0x32d894.baseline = 0.75;
;
const a0_0x3a3ed6 = {};
a0_0x3a3ed6.fontFamily = '\'Courier Prime\'';
a0_0x3a3ed6.fontWeight = 700;
a0_0x3a3ed6.baseline = 0.65;
;
const a0_0x5bde6b = {};
a0_0x5bde6b.fontFamily = '\'Fugaz One\'';
a0_0x5bde6b.fontWeight = 400;
a0_0x5bde6b.baseline = 0.75;
;
const a0_0x28f6df = {};
a0_0x28f6df.fontFamily = '\'Sedan\'';
a0_0x28f6df.fontWeight = 400;
a0_0x28f6df.baseline = 0.75;
;
const a0_0x2eb4f8 = {};
a0_0x2eb4f8.roboto = a0_0x55f8c4;
a0_0x2eb4f8.suez = a0_0xfc84f1;
a0_0x2eb4f8.bubbles = a0_0x322bca;
a0_0x2eb4f8.playwrite = a0_0x1f4eaa;
a0_0x2eb4f8.chewy = a0_0x32d894;
a0_0x2eb4f8.courier = a0_0x3a3ed6;
a0_0x2eb4f8.fugaz = a0_0x5bde6b;
a0_0x2eb4f8.sedan = a0_0x28f6df;
;
const C3 = a0_0x2eb4f8;
class xn {
    constructor(_0x1b35dc) {
        ;
        this.options = _0x1b35dc;
        this.autoplay = true;
        this.loop = true;
        this.paused = true;
        ;
    }
    ['remove']() {
        ;
        this.pause();
        this.options.onDestroy?.();
        ;
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.options.onPlay());
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, this.options.onPause());
    }
}
function wa(_0x3c4b08, _0x3ffa5c) {
    return Dt(_0x3c4b08 * _0x3ffa5c / 250000 * 1000 * (Re ? 5 : 10), 500, 10000);
}
const st = class st {
    constructor() {
        ;
        this.drawCallbacks = new Map();
        this.targetCanvasesCount = 0;
        this.reset = true;
        this.loop = true;
        ;
        const _0x53abb3 = this.canvas = document.createElement('canvas');
        this.dpr = window.devicePixelRatio;
        _0x53abb3.classList.add('canvas-thumbnail', 'canvas-dots');
        this.paused = true;
        this.autoplay = true;
        this.tempId = 0;
        this.time = 0;
        this.bufferIndex = 0;
        this.context = _0x53abb3.getContext('webgl2');
        ;
    }
    ['resize'](_0x469b19, _0x283d8e, _0xd253cc, _0x228842 = {}) {
        ;
        this.width = _0x469b19;
        this.height = _0x283d8e;
        this.multiply = _0xd253cc;
        this.canvas.width = _0x469b19 * this.dpr;
        this.canvas.height = _0x283d8e * this.dpr;
        this.config = {
            'particlesCount': wa(_0x469b19, _0x283d8e),
            'radius': this.dpr * 1.6,
            'seed': Math.random() * 10,
            'noiseScale': 6,
            'noiseSpeed': 0.6,
            'forceMult': 0.6,
            'velocityMult': 1,
            'dampingMult': 0.9999,
            'maxVelocity': 6,
            'longevity': 1.4,
            'noiseMovement': 4,
            'timeScale': 0.65,
            'color': 16777215,
            ..._0x228842
        };
        this.inited && this.draw();
        ;
    }
    ['genBuffer']() {
        ;
        this.buffer && (this.context.deleteBuffer(this.buffer[0]), this.context.deleteBuffer(this.buffer[1]));
        this.buffer = [];
        ;
        for (let _0x3c1dc6 = 0; _0x3c1dc6 < 2; ++_0x3c1dc6) {
            this.buffer[_0x3c1dc6] = this.context.createBuffer();
            this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer[_0x3c1dc6]);
            this.context.bufferData(this.context.ARRAY_BUFFER, (this.bufferParticlesCount = Math.ceil(this.config.particlesCount)) * 6 * 4, this.context.DYNAMIC_DRAW);
            ;
        }
    }
    ['compileShader'](_0x3c04fb, _0x29de56) {
        ;
        var _0x5e1e4b;
        const _0x30ec26 = this.context.createShader(_0x3c04fb), _0x19b062 = (_0x5e1e4b = st.shaderTexts)[_0x29de56] ?? (_0x5e1e4b[_0x29de56] = fetch(_0x29de56).then(_0x571e0f => _0x571e0f.text()).then(_0x532e40 => st.shaderTexts[_0x29de56] = _0x532e40 + '\n//' + Math.random()));
        return at(_0x19b062, _0x597085 => {
            ;
            if (this.context.shaderSource(_0x30ec26, _0x597085), this.context.compileShader(_0x30ec26), !this.context.getShaderParameter(_0x30ec26, this.context.COMPILE_STATUS)) {
                throw 'compile shader error:\n' + this.context.getShaderInfoLog(_0x30ec26);
            }
            return _0x30ec26;
        });
    }
    ['compileShaders']() {
        ;
        return _u([
            this.compileShader(this.context.VERTEX_SHADER, 'assets/img/7254c244.glsl'),
            this.compileShader(this.context.FRAGMENT_SHADER, 'assets/img/534b9fdf.glsl')
        ], _0x2cca84 => _0x2cca84);
    }
    ['draw']() {
        ;
        if (!this.inited) {
            return;
        }
        const _0x4eede4 = this.context, _0x5e760c = this.config, _0x5ed57b = Date.now(), _0x56972d = Math.min((_0x5ed57b - this.lastDrawTime) / 1000, 1) * _0x5e760c.timeScale;
        this.lastDrawTime = _0x5ed57b;
        this.time += _0x56972d;
        if (this.bufferParticlesCount < _0x5e760c.particlesCount) {
            this.genBuffer();
            this.reset = true;
        }
        _0x4eede4.viewport(0, 0, this.canvas.width, this.canvas.height);
        _0x4eede4.clear(_0x4eede4.COLOR_BUFFER_BIT);
        _0x4eede4.useProgram(this.program);
        _0x4eede4.uniform1f(this.resetHandle, this.reset ? 1 : 0);
        this.reset && (this.time = 0, this.reset = false);
        _0x4eede4.uniform1f(this.timeHandle, this.time);
        _0x4eede4.uniform1f(this.deltaTimeHandle, _0x56972d);
        _0x4eede4.uniform2f(this.sizeHandle, this.canvas.width, this.canvas.height);
        _0x4eede4.uniform1f(this.seedHandle, _0x5e760c.seed);
        _0x4eede4.uniform1f(this.radiusHandle, _0x5e760c.radius);
        _0x4eede4.uniform1f(this.noiseScaleHandle, _0x5e760c.noiseScale);
        _0x4eede4.uniform1f(this.noiseSpeedHandle, _0x5e760c.noiseSpeed);
        _0x4eede4.uniform1f(this.dampingMultHandle, _0x5e760c.dampingMult);
        _0x4eede4.uniform1f(this.velocityMultHandle, _0x5e760c.velocityMult);
        _0x4eede4.uniform1f(this.forceMultHandle, _0x5e760c.forceMult);
        _0x4eede4.uniform1f(this.longevityHandle, _0x5e760c.longevity);
        _0x4eede4.uniform1f(this.maxVelocityHandle, _0x5e760c.maxVelocity);
        _0x4eede4.uniform1f(this.noiseMovementHandle, _0x5e760c.noiseMovement);
        _0x4eede4.uniform3f(this.colorHandle, (_0x5e760c.color >> 16 & 255) / 255, (_0x5e760c.color >> 8 & 255) / 255, (_0x5e760c.color & 255) / 255);
        _0x4eede4.bindBuffer(_0x4eede4.ARRAY_BUFFER, this.buffer[this.bufferIndex]);
        _0x4eede4.vertexAttribPointer(0, 2, _0x4eede4.FLOAT, false, 24, 0);
        _0x4eede4.enableVertexAttribArray(0);
        _0x4eede4.vertexAttribPointer(1, 2, _0x4eede4.FLOAT, false, 24, 8);
        _0x4eede4.enableVertexAttribArray(1);
        _0x4eede4.vertexAttribPointer(2, 1, _0x4eede4.FLOAT, false, 24, 16);
        _0x4eede4.enableVertexAttribArray(2);
        _0x4eede4.vertexAttribPointer(3, 1, _0x4eede4.FLOAT, false, 24, 20);
        _0x4eede4.enableVertexAttribArray(3);
        _0x4eede4.bindBufferBase(_0x4eede4.TRANSFORM_FEEDBACK_BUFFER, 0, this.buffer[1 - this.bufferIndex]);
        _0x4eede4.vertexAttribPointer(0, 2, _0x4eede4.FLOAT, false, 24, 0);
        _0x4eede4.enableVertexAttribArray(0);
        _0x4eede4.vertexAttribPointer(1, 2, _0x4eede4.FLOAT, false, 24, 8);
        _0x4eede4.enableVertexAttribArray(1);
        _0x4eede4.vertexAttribPointer(2, 1, _0x4eede4.FLOAT, false, 24, 16);
        _0x4eede4.enableVertexAttribArray(2);
        _0x4eede4.vertexAttribPointer(3, 1, _0x4eede4.FLOAT, false, 24, 20);
        _0x4eede4.enableVertexAttribArray(3);
        _0x4eede4.beginTransformFeedback(_0x4eede4.POINTS);
        _0x4eede4.drawArrays(_0x4eede4.POINTS, 0, _0x5e760c.particlesCount);
        _0x4eede4.endTransformFeedback();
        _0x4eede4.bindBuffer(_0x4eede4.ARRAY_BUFFER, null);
        _0x4eede4.bindBufferBase(_0x4eede4.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        this.bufferIndex = 1 - this.bufferIndex;
        this.drawCallbacks.forEach(_0x4929b2 => _0x4929b2());
        ;
    }
    ['remove']() {
        ;
        this.pause();
        this.destroy();
        ;
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, ++this.tempId);
    }
    ['play']() {
        ;
        if (!this.paused) {
            return;
        }
        this.paused = false;
        const _0x5308b8 = ++this.tempId;
        this.lastDrawTime = Date.now();
        gc(() => this.tempId !== _0x5308b8 || this.paused ? false : (this.draw(), true));
        ;
    }
    ['_init'](_0x26d9a0, _0x549432) {
        ;
        this.genBuffer();
        const _0x761b2e = this.context, _0x24bae6 = this.program = _0x761b2e.createProgram();
        if (_0x761b2e.attachShader(_0x24bae6, _0x26d9a0), _0x761b2e.attachShader(_0x24bae6, _0x549432), _0x761b2e.transformFeedbackVaryings(_0x24bae6, [
                'outPosition',
                'outVelocity',
                'outTime',
                'outDuration'
            ], _0x761b2e.INTERLEAVED_ATTRIBS), _0x761b2e.linkProgram(_0x24bae6), !_0x761b2e.getProgramParameter(_0x24bae6, _0x761b2e.LINK_STATUS)) {
            throw 'program link error:\n' + _0x761b2e.getProgramInfoLog(_0x24bae6);
        }
        _0x761b2e.deleteShader(_0x26d9a0);
        _0x761b2e.deleteShader(_0x549432);
        this.timeHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'time');
        this.deltaTimeHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'deltaTime');
        this.sizeHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'size');
        this.resetHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'reset');
        this.radiusHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'r');
        this.seedHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'seed');
        this.noiseScaleHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'noiseScale');
        this.noiseSpeedHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'noiseSpeed');
        this.dampingMultHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'dampingMult');
        this.velocityMultHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'velocityMult');
        this.forceMultHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'forceMult');
        this.longevityHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'longevity');
        this.maxVelocityHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'maxVelocity');
        this.noiseMovementHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'noiseMovement');
        this.colorHandle = _0x761b2e.getUniformLocation(_0x24bae6, 'color');
        _0x761b2e.clearColor(0, 0, 0, 0);
        _0x761b2e.viewport(0, 0, this.canvas.width, this.canvas.height);
        _0x761b2e.enable(_0x761b2e.BLEND);
        _0x761b2e.blendFunc(_0x761b2e.SRC_ALPHA, _0x761b2e.ONE_MINUS_SRC_ALPHA);
        this.inited = true;
        this.lastDrawTime = Date.now();
        ;
    }
    ['init']() {
        ;
        return this.initPromise ?? (this.initPromise = at(this.compileShaders(), _0x11e3d2 => (this['_init'](..._0x11e3d2), this.draw(), true)));
    }
    ['destroy']() {
        ;
        this.buffer && (this.context.deleteBuffer(this.buffer[0]), this.context.deleteBuffer(this.buffer[1]));
        this.buffer = null;
        this.context.deleteProgram(this.program);
        this.program = null;
        ;
    }
    static ['create']({
        width: _0x48331e,
        height: _0x4564bf,
        middleware: _0x331d56,
        animationGroup: _0x3b34b3,
        multiply: _0x4db76a,
        config: _0x35657f
    }) {
        const _0x5cc7de = ++this.createdIndex;
        let {imageSpoilerInstance: _0x19e9dc} = this;
        _0x19e9dc || (_0x19e9dc = this.imageSpoilerInstance = new st(), _0x19e9dc.resize(480, 480), window.dotRenderer = _0x19e9dc);
        const _0x557d0e = document.createElement('canvas');
        _0x557d0e.classList.add('canvas-thumbnail', 'canvas-dots');
        const _0x46fc08 = window.devicePixelRatio;
        _0x48331e && (_0x557d0e.width = _0x48331e * _0x46fc08, _0x557d0e.height = _0x4564bf * _0x46fc08);
        const _0x2c799 = _0x557d0e.getContext('2d'), _0xe44750 = _0x5cc7de % 4 === 1, _0x1f9334 = _0x5cc7de % 4 === 2, _0x3bd207 = _0x5cc7de % 4 === 3, _0x1b9d6f = [
                _0xe44750 && 'rotate(180deg)',
                _0x1f9334 && 'scaleX(-1)',
                _0x3bd207 && 'scaleY(-1)'
            ].filter(Boolean);
        _0x1b9d6f.length && (_0x557d0e.style.transform = _0x1b9d6f.join(' '));
        let _0xbcd5e3;
        const _0x4dae27 = pa(0, _0x19e9dc.canvas.width - _0x557d0e.width), _0x4b0a73 = pa(0, _0x19e9dc.canvas.height - _0x557d0e.height);
        function _0x569cc2(_0x4261c5, _0x29906d, _0x130042, _0x518257) {
            ;
            _0x4261c5.save();
            _0x4261c5.globalCompositeOperation = 'destination-out';
            _0x4261c5.fillStyle = 'white';
            _0x4261c5.shadowBlur = _0x518257 / 3.5 * _0x19e9dc.dpr * _0x29906d;
            _0x4261c5.shadowColor = 'white';
            _0x4261c5.beginPath();
            _0x4261c5.arc(_0x130042.x, _0x130042.y, _0x518257 * _0x29906d, 0, 2 * Math.PI);
            _0x4261c5.fill();
            _0x4261c5.globalCompositeOperation = 'source-over';
            _0x4261c5.restore();
            ;
        }
        const _0x4a7ddf = () => {
            const {
                width: _0x1681a8,
                height: _0x57f92d
            } = _0x557d0e;
            if (!(_0xbcd5e3?.progress >= 1)) {
                if (_0x2c799.clearRect(0, 0, _0x1681a8, _0x57f92d), !_0xbcd5e3) {
                    _0x2c799.drawImage(_0x19e9dc.canvas, _0x4dae27, _0x4b0a73, _0x1681a8, _0x57f92d, 0, 0, _0x1681a8, _0x57f92d);
                } else {
                    const {
                            progress: _0x387828,
                            transformedCoords: _0x56f5fa,
                            underLyingCtx: _0x2bfa7c,
                            maxDist: _0x328ad6,
                            maxDistUnderlyingCanvas: _0x854c6c,
                            underlyingCanvasClickCoords: _0x43c8fa
                        } = _0xbcd5e3, _0xafbc51 = _0x387828 ** 2 * 0.5;
                    _0x2c799.drawImage(_0x19e9dc.canvas, _0x4dae27 + _0x56f5fa.x * _0xafbc51, _0x4b0a73 + _0x56f5fa.y * _0xafbc51, _0x1681a8 * (1 - _0xafbc51), _0x57f92d * (1 - _0xafbc51), 0, 0, _0x1681a8, _0x57f92d);
                    _0x569cc2(_0x2c799, _0x387828, _0x56f5fa, _0x328ad6);
                    _0x569cc2(_0x2bfa7c, _0x387828, _0x43c8fa, _0x854c6c);
                    ;
                }
                _0x35657f?.color && gn(_0x2c799, '#' + _0x35657f.color.toString(16), 0, 0, _0x1681a8, _0x57f92d);
            }
        };
        ++_0x19e9dc.targetCanvasesCount;
        const _0x3d845a = new xn({
                'onPlay': () => {
                    ;
                    _0x19e9dc.drawCallbacks.set(_0x557d0e, _0x4a7ddf);
                    _0x19e9dc.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0x19e9dc.drawCallbacks.delete(_0x557d0e);
                    _0x19e9dc.drawCallbacks.size || _0x19e9dc.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0x19e9dc.targetCanvasesCount || (_0x19e9dc.remove(), this.imageSpoilerInstance = void 0);
                }
            }), _0x2c9fe1 = {
                animation: _0x3d845a,
                group: _0x3b34b3,
                observeElement: _0x557d0e,
                controlled: _0x331d56,
                type: 'dots'
            };
        ;
        ;
        ;
        ;
        ;
        pe.addAnimation(_0x2c9fe1);
        ;
        function _0x2962d9(_0x4d8ab0, _0x47e866) {
            ;
            if (!('clientX' in _0x4d8ab0 && 'clientY' in _0x4d8ab0)) {
                return false;
            }
            const _0xfed813 = _0x557d0e.getBoundingClientRect(), _0x2d48b9 = _0x4d8ab0.clientX - _0xfed813.left, _0x2c0849 = _0x4d8ab0.clientY - _0xfed813.top;
            let _0x5490fb = _0x2d48b9, _0x4ebbe0 = _0x2c0849;
            Number(_0xe44750) + Number(_0x1f9334) === 1 && (_0x5490fb = _0xfed813.width - _0x2d48b9);
            Number(_0xe44750) + Number(_0x3bd207) === 1 && (_0x4ebbe0 = _0xfed813.height - _0x2c0849);
            ;
            const _0x17759a = Math.max(Math.hypot(_0x2d48b9, _0x2c0849), Math.hypot(_0xfed813.width - _0x2d48b9, _0x2c0849), Math.hypot(_0x2d48b9, _0xfed813.height - _0x2c0849), Math.hypot(_0xfed813.width - _0x2d48b9, _0xfed813.height - _0x2c0849)), _0x27b346 = _0x17759a * _0x19e9dc.dpr + 50, _0x728d6c = {
                    x: _0x2d48b9 * _0x47e866.width / _0xfed813.width,
                    y: _0x2c0849 * _0x47e866.height / _0xfed813.height
                };
            ;
            ;
            ;
            const _0x1b42d1 = {
                x: _0x5490fb * _0x19e9dc.dpr,
                y: _0x4ebbe0 * _0x19e9dc.dpr
            };
            ;
            ;
            _0xbcd5e3 = {
                'underlyingCanvasClickCoords': _0x728d6c,
                'transformedCoords': _0x1b42d1,
                'maxDist': _0x27b346,
                'maxDistUnderlyingCanvas': _0x27b346 / _0x557d0e.width * _0x47e866.width,
                'underLyingCtx': _0x47e866.getContext('2d'),
                'progress': 0
            };
            ;
            const _0x2eb10f = q();
            return Qu(0, 1, 800 + (400 - _0x17759a), _0xdc0b46 => {
                _0xbcd5e3.progress = _0xdc0b46;
                _0x4a7ddf();
                ;
            }, {
                'onEnd': () => void _0x2eb10f.resolve(),
                'easing': Xu
            }), _0x2eb10f;
        }
        const _0x22df55 = {
            'canvas': _0x557d0e,
            'readyResult': _0x48331e && _0x19e9dc.init(),
            'revealWithAnimation': _0x2962d9
        };
        return this.createdImageSpoilers.set(_0x557d0e, _0x22df55), _0x22df55;
    }
    static ['getImageSpoilerByElement'](_0x2b13fe) {
        ;
        return this.createdImageSpoilers.get(_0x2b13fe);
    }
    static ['getTextSpoilerInstance']() {
        ;
        if (this.textSpoilerInstance) {
            return this.textSpoilerInstance;
        }
        const _0x280111 = this.textSpoilerInstance = new st();
        return _0x280111.dpr = Math.min(2, window.devicePixelRatio), _0x280111.resize(240, 120, void 0, {
            'particlesCount': 4 * wa(240, 120),
            'noiseSpeed': 5,
            'maxVelocity': 10,
            'timeScale': 1.2,
            'radius': 1.8 * _0x280111.dpr,
            'forceMult': 0.2,
            'velocityMult': 0.4,
            'dampingMult': 2.2,
            'longevity': 5
        }), N.textSpoilerRenderer = _0x280111, _0x280111;
    }
    static ['attachTextSpoilerTarget']({
        middleware: _0xf50913,
        animationGroup: _0x496aab,
        canvas: _0x418537,
        draw: _0x569f17
    }) {
        const _0x406978 = this.getTextSpoilerInstance();
        ++_0x406978.targetCanvasesCount;
        const _0x170f9c = new xn({
                'onPlay': () => {
                    ;
                    _0x406978.drawCallbacks.set(_0x418537, _0x569f17);
                    _0x406978.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0x406978.drawCallbacks.delete(_0x418537);
                    _0x406978.drawCallbacks.size || _0x406978.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0x406978.targetCanvasesCount || (_0x406978.remove(), this.textSpoilerInstance = void 0);
                }
            }), _0x44ffe3 = {};
        return _0x44ffe3.animation = _0x170f9c, _0x44ffe3.group = _0x496aab, _0x44ffe3.observeElement = _0x418537, _0x44ffe3.controlled = _0xf50913, _0x44ffe3.type = 'dots', (pe.addAnimation(_0x44ffe3), {
            'animation': _0x170f9c,
            'sourceCanvas': _0x406978.canvas,
            'dpr': _0x406978.dpr,
            'readyResult': _0x406978.init()
        });
    }
    static ['attachBluffTextSpoilerTarget'](_0x1fb8f4) {
        const _0x2fe65d = this.getTextSpoilerInstance();
        gt.observeReconnection(_0x1fb8f4, _0x2b641f => this.attachBluffTextSpoilerTarget(_0x2b641f));
        ++_0x2fe65d.targetCanvasesCount;
        ++gt.instancesCount;
        ;
        const _0x33b394 = new xn({
                'onPlay': () => {
                    ;
                    _0x2fe65d.drawCallbacks.set(_0x1fb8f4, () => gt.draw(_0x2fe65d.canvas));
                    _0x2fe65d.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0x2fe65d.drawCallbacks.delete(_0x1fb8f4);
                    _0x2fe65d.drawCallbacks.size || _0x2fe65d.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0x2fe65d.targetCanvasesCount || (_0x2fe65d.remove(), this.textSpoilerInstance = void 0);
                    --gt.instancesCount || gt.destroy();
                    ;
                }
            }), _0x47ce42 = {
                animation: _0x33b394,
                group: 'BLUFF-SPOILER',
                observeElement: _0x1fb8f4,
                type: 'dots'
            };
        ;
        ;
        ;
        ;
        pe.addAnimation(_0x47ce42);
        _0x2fe65d.init();
        ;
        ;
    }
};
st.shaderTexts = {};
st.createdIndex = -1;
st.createdImageSpoilers = new WeakMap();
;
let ui = st;
const eh = {
        'decode': _0xc86c => {
            const _0x2de52d = [];
            let _0x12865a = 0;
            const _0x27ce71 = _0xc86c.length;
            let _0x1f884b, _0x1e5bab;
            for (; _0x12865a < _0x27ce71;) {
                if (_0x1f884b = _0xc86c.charCodeAt(_0x12865a++), (_0x1f884b & 63488) === 55296) {
                    if (_0x1e5bab = _0xc86c.charCodeAt(_0x12865a++), (_0x1f884b & 64512) !== 55296 || (_0x1e5bab & 64512) !== 56320) {
                        throw new RangeError('UTF-16(decode): Illegal UTF-16 sequence');
                    }
                    _0x1f884b = ((_0x1f884b & 1023) << 10) + (_0x1e5bab & 1023) + 65536;
                }
                _0x2de52d.push(_0x1f884b);
            }
            return _0x2de52d;
        },
        'encode': _0x135cb3 => {
            const _0x3cf8fd = [];
            let _0x400a82 = 0;
            const _0xf5d778 = _0x135cb3.length;
            let _0x352b71;
            for (; _0x400a82 < _0xf5d778;) {
                if (_0x352b71 = _0x135cb3[_0x400a82++], (_0x352b71 & 63488) === 55296) {
                    throw new RangeError('UTF-16(encode): Illegal UTF-16 value');
                }
                if (_0x352b71 > 65535) {
                    _0x352b71 -= 65536;
                    _0x3cf8fd.push(String.fromCharCode(_0x352b71 >>> 10 & 1023 | 55296));
                    _0x352b71 = 56320 | _0x352b71 & 1023;
                }
                _0x3cf8fd.push(String.fromCharCode(_0x352b71));
                ;
            }
            return _0x3cf8fd.join('');
        }
    }, th = 128, sh = 72, fh = '-', qe = 36, nh = 700, Lf = 1, hi = 26, ih = 38, Mn = 2147483647;
function rh(_0x117620) {
    return _0x117620 - 48 < 10 ? _0x117620 - 22 : _0x117620 - 65 < 26 ? _0x117620 - 65 : _0x117620 - 97 < 26 ? _0x117620 - 97 : qe;
}
function ah(_0x1b6943, _0x577c1d, _0x361e96) {
    ;
    let _0xf8231e;
    for (_0x1b6943 = _0x361e96 ? Math.floor(_0x1b6943 / nh) : _0x1b6943 >> 1, _0x1b6943 += Math.floor(_0x1b6943 / _0x577c1d), _0xf8231e = 0; _0x1b6943 > (qe - Lf) * hi >> 1; _0xf8231e += qe) {
        _0x1b6943 = Math.floor(_0x1b6943 / (qe - Lf));
    }
    return Math.floor(_0xf8231e + (qe - Lf + 1) * _0x1b6943 / (_0x1b6943 + ih));
}
function oh(_0x576870, _0x137c60) {
    const _0x12c900 = [], _0x542fef = _0x576870.length;
    let _0x354649, _0x44b306, _0x241906, _0x3c4b7f, _0x42c856, _0x2597b4, _0x1f27fa, _0x5bdbf2, _0x506165, _0x576ded, _0x8298c0, _0x37d266;
    for (_0x354649 = th, _0x241906 = 0, _0x3c4b7f = sh, _0x42c856 = _0x576870.lastIndexOf(fh), _0x42c856 < 0 && (_0x42c856 = 0), _0x2597b4 = 0; _0x2597b4 < _0x42c856; ++_0x2597b4) {
        if (_0x576870.charCodeAt(_0x2597b4) >= 128) {
            throw new RangeError('Illegal input >= 0x80');
        }
        _0x12c900.push(_0x576870.charCodeAt(_0x2597b4));
    }
    for (_0x1f27fa = _0x42c856 > 0 ? _0x42c856 + 1 : 0; _0x1f27fa < _0x542fef;) {
        for (_0x5bdbf2 = _0x241906, _0x506165 = 1, _0x576ded = qe;; _0x576ded += qe) {
            if (_0x1f27fa >= _0x542fef) {
                throw RangeError('punycode_bad_input(1)');
            }
            if (_0x8298c0 = rh(_0x576870.charCodeAt(_0x1f27fa++)), _0x8298c0 >= qe) {
                throw RangeError('punycode_bad_input(2)');
            }
            if (_0x8298c0 > Math.floor((Mn - _0x241906) / _0x506165)) {
                throw RangeError('punycode_overflow(1)');
            }
            if (_0x241906 += _0x8298c0 * _0x506165, _0x37d266 = _0x576ded <= _0x3c4b7f ? Lf : _0x576ded >= _0x3c4b7f + hi ? hi : _0x576ded - _0x3c4b7f, _0x8298c0 < _0x37d266) {
                break;
            }
            if (_0x506165 > Math.floor(Mn / (qe - _0x37d266))) {
                throw RangeError('punycode_overflow(2)');
            }
            _0x506165 *= qe - _0x37d266;
        }
        if (_0x44b306 = _0x12c900.length + 1, _0x3c4b7f = ah(_0x241906 - _0x5bdbf2, _0x44b306, _0x5bdbf2 === 0), Math.floor(_0x241906 / _0x44b306) > Mn - _0x354649) {
            throw RangeError('punycode_overflow(3)');
        }
        _0x354649 += Math.floor(_0x241906 / _0x44b306);
        _0x241906 %= _0x44b306;
        _0x12c900.splice(_0x241906, 0, _0x354649);
        _0x241906++;
        ;
    }
    return eh.encode(_0x12c900);
}
function ch(_0xbf44b8) {
    const _0x9112a6 = _0xbf44b8.split('.'), _0x2785fa = [];
    for (let _0x16ce78 = 0; _0x16ce78 < _0x9112a6.length; ++_0x16ce78) {
        const _0x12e832 = _0x9112a6[_0x16ce78];
        _0x2785fa.push(_0x12e832.match(/^xn--/) ? oh(_0x12e832.slice(4)) : _0x12e832);
    }
    return _0x2785fa.join('.');
}
function dh(_0x3a7f6e) {
    ;
    let _0x4e4f52;
    try {
        _0x4e4f52 = ch(new URL(_0x3a7f6e).hostname);
    } catch {
        return true;
    }
    let _0x21f965 = false, _0x4a2b9e = false;
    for (const _0x164b3d of Array.from(_0x4e4f52))
        if (/\p{L}/u.test(_0x164b3d) && (/\p{Script=Latin}/u.test(_0x164b3d) ? _0x21f965 = true : _0x4a2b9e = true, _0x21f965 && _0x4a2b9e)) {
            return true;
        }
    return false;
}
var lh = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function k3(_0x207db7) {
    ;
    return _0x207db7 && _0x207db7['__esModule'] && Object.prototype.hasOwnProperty.call(_0x207db7, 'default') ? _0x207db7.default : _0x207db7;
}
function uh(_0xa13b0a) {
    ;
    if (_0xa13b0a['__esModule']) {
        return _0xa13b0a;
    }
    var _0x44942c = _0xa13b0a.default;
    if (typeof _0x44942c == 'function') {
        var _0x219fa9 = function _0x19fee1() {
            ;
            return this instanceof _0x19fee1 ? Reflect.construct(_0x44942c, arguments, this.constructor) : _0x44942c.apply(this, arguments);
        };
        _0x219fa9.prototype = _0x44942c.prototype;
    } else {
        _0x219fa9 = {};
    }
    const _0x377f25 = {};
    return _0x377f25.value = true, (Object.defineProperty(_0x219fa9, '__esModule', _0x377f25), Object.keys(_0xa13b0a).forEach(function (_0x5a4e4f) {
        ;
        var _0x3aa3f8 = Object.getOwnPropertyDescriptor(_0xa13b0a, _0x5a4e4f);
        Object.defineProperty(_0x219fa9, _0x5a4e4f, _0x3aa3f8.get ? _0x3aa3f8 : {
            'enumerable': true,
            'get': function () {
                return _0xa13b0a[_0x5a4e4f];
            }
        });
    }), _0x219fa9);
}
const a0_0x104490 = {};
a0_0x104490.exports = {};
var Cc = a0_0x104490;
const a0_0x677763 = {};
a0_0x677763.value = 'Module';
const hh = {}, mh = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'default': hh
    }, Symbol.toStringTag, a0_0x677763)), Da = uh(mh);
(function (_0x2bc579) {
    ;
    (function () {
        ;
        var _0x28788a = 'input is invalid type', _0x544454 = 'finalize already called', _0x5ae3d4 = typeof window == 'object', _0x1c7da2 = _0x5ae3d4 ? window : {};
        _0x1c7da2.JS_MD5_NO_WINDOW && (_0x5ae3d4 = false);
        var _0x1a5eb4 = !_0x5ae3d4 && typeof self == 'object', _0x503750 = !_0x1c7da2.JS_MD5_NO_NODE_JS && typeof process == 'object' && process.versions && process.versions.node;
        _0x503750 ? _0x1c7da2 = lh : _0x1a5eb4 && (_0x1c7da2 = self);
        var _0x70f66d = !_0x1c7da2.JS_MD5_NO_COMMON_JS && true && _0x2bc579.exports, _0x47bf78 = !_0x1c7da2.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u', _0x2e615c = '0123456789abcdef'.split(''), _0x31e2f8 = [
                128,
                32768,
                8388608,
                -2147483648
            ], _0x3a97f7 = [
                0,
                8,
                16,
                24
            ], _0xc3936d = [
                'hex',
                'array',
                'digest',
                'buffer',
                'arrayBuffer',
                'base64'
            ], _0x615161 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''), _0x44dfbc = [], _0x6edec3;
        if (_0x47bf78) {
            var _0xe1501d = new ArrayBuffer(68);
            _0x6edec3 = new Uint8Array(_0xe1501d);
            _0x44dfbc = new Uint32Array(_0xe1501d);
            ;
        }
        var _0xd0ba43 = Array.isArray;
        (_0x1c7da2.JS_MD5_NO_NODE_JS || !_0xd0ba43) && (_0xd0ba43 = function (_0xfe61d0) {
            ;
            return Object.prototype.toString.call(_0xfe61d0) === '[object Array]';
        });
        var _0x37f211 = ArrayBuffer.isView;
        _0x47bf78 && (_0x1c7da2.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !_0x37f211) && (_0x37f211 = function (_0x9583ef) {
            ;
            return typeof _0x9583ef == 'object' && _0x9583ef.buffer && _0x9583ef.buffer.constructor === ArrayBuffer;
        });
        var _0x5e24cc = function (_0x3fdf59) {
                ;
                var _0x4d2c8f = typeof _0x3fdf59;
                if (_0x4d2c8f === 'string') {
                    return [
                        _0x3fdf59,
                        true
                    ];
                }
                if (_0x4d2c8f !== 'object' || _0x3fdf59 === null) {
                    throw new Error(_0x28788a);
                }
                if (_0x47bf78 && _0x3fdf59.constructor === ArrayBuffer) {
                    return [
                        new Uint8Array(_0x3fdf59),
                        false
                    ];
                }
                if (!_0xd0ba43(_0x3fdf59) && !_0x37f211(_0x3fdf59)) {
                    throw new Error(_0x28788a);
                }
                return [
                    _0x3fdf59,
                    false
                ];
            }, _0x8db79a = function (_0x3fa4af) {
                return function (_0x365f1e) {
                    return new _0x560d49(true).update(_0x365f1e)[_0x3fa4af]();
                };
            }, _0x2b287c = function () {
                ;
                var _0x78409a = _0x8db79a('hex');
                _0x503750 && (_0x78409a = _0x476cd4(_0x78409a));
                _0x78409a.create = function () {
                    ;
                    return new _0x560d49();
                };
                _0x78409a.update = function (_0x5c1214) {
                    ;
                    return _0x78409a.create().update(_0x5c1214);
                };
                ;
                for (var _0x1ee621 = 0; _0x1ee621 < _0xc3936d.length; ++_0x1ee621) {
                    var _0x1397a2 = _0xc3936d[_0x1ee621];
                    _0x78409a[_0x1397a2] = _0x8db79a(_0x1397a2);
                }
                return _0x78409a;
            }, _0x476cd4 = function (_0x58b6b5) {
                ;
                var _0x5df201 = Da, _0x25b6ec = Da.Buffer, _0x10df39;
                _0x25b6ec.from && !_0x1c7da2.JS_MD5_NO_BUFFER_FROM ? _0x10df39 = _0x25b6ec.from : _0x10df39 = function (_0x446bfb) {
                    return new _0x25b6ec(_0x446bfb);
                };
                var _0x55aa06 = function (_0x5827d7) {
                    ;
                    if (typeof _0x5827d7 == 'string') {
                        return _0x5df201.createHash('md5').update(_0x5827d7, 'utf8').digest('hex');
                    }
                    if (_0x5827d7 == null) {
                        throw new Error(_0x28788a);
                    }
                    return _0x5827d7.constructor === ArrayBuffer && (_0x5827d7 = new Uint8Array(_0x5827d7)), _0xd0ba43(_0x5827d7) || _0x37f211(_0x5827d7) || _0x5827d7.constructor === _0x25b6ec ? _0x5df201.createHash('md5').update(_0x10df39(_0x5827d7)).digest('hex') : _0x58b6b5(_0x5827d7);
                };
                return _0x55aa06;
            }, _0x115a2e = function (_0x4c9374) {
                return function (_0x12064f, _0x593b97) {
                    ;
                    return new _0x109ac6(_0x12064f, true).update(_0x593b97)[_0x4c9374]();
                };
            }, _0x7682a = function () {
                ;
                var _0x1030fd = _0x115a2e('hex');
                _0x1030fd.create = function (_0x53121e) {
                    return new _0x109ac6(_0x53121e);
                };
                _0x1030fd.update = function (_0x34c61f, _0xfa7a1f) {
                    ;
                    return _0x1030fd.create(_0x34c61f).update(_0xfa7a1f);
                };
                ;
                for (var _0x563d7f = 0; _0x563d7f < _0xc3936d.length; ++_0x563d7f) {
                    var _0x4859e3 = _0xc3936d[_0x563d7f];
                    _0x1030fd[_0x4859e3] = _0x115a2e(_0x4859e3);
                }
                return _0x1030fd;
            };
        function _0x560d49(_0x132040) {
            ;
            if (_0x132040) {
                _0x44dfbc[0] = _0x44dfbc[16] = _0x44dfbc[1] = _0x44dfbc[2] = _0x44dfbc[3] = _0x44dfbc[4] = _0x44dfbc[5] = _0x44dfbc[6] = _0x44dfbc[7] = _0x44dfbc[8] = _0x44dfbc[9] = _0x44dfbc[10] = _0x44dfbc[11] = _0x44dfbc[12] = _0x44dfbc[13] = _0x44dfbc[14] = _0x44dfbc[15] = 0;
                this.blocks = _0x44dfbc;
                this.buffer8 = _0x6edec3;
                ;
            } else {
                if (_0x47bf78) {
                    var _0x4a041f = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(_0x4a041f);
                    this.blocks = new Uint32Array(_0x4a041f);
                    ;
                } else {
                    this.blocks = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                }
            }
            this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
            this.finalized = this.hashed = false;
            this.first = true;
            ;
        }
        _0x560d49.prototype.update = function (_0x5d5e7) {
            ;
            if (this.finalized) {
                throw new Error(_0x544454);
            }
            var _0x1ec2bb = _0x5e24cc(_0x5d5e7);
            _0x5d5e7 = _0x1ec2bb[0];
            for (var _0x27e3c1 = _0x1ec2bb[1], _0xc1e196, _0x3944cd = 0, _0x58fae8, _0x67bc36 = _0x5d5e7.length, _0x30a5d5 = this.blocks, _0x469fdd = this.buffer8; _0x3944cd < _0x67bc36;) {
                if (this.hashed && (this.hashed = false, _0x30a5d5[0] = _0x30a5d5[16], _0x30a5d5[16] = _0x30a5d5[1] = _0x30a5d5[2] = _0x30a5d5[3] = _0x30a5d5[4] = _0x30a5d5[5] = _0x30a5d5[6] = _0x30a5d5[7] = _0x30a5d5[8] = _0x30a5d5[9] = _0x30a5d5[10] = _0x30a5d5[11] = _0x30a5d5[12] = _0x30a5d5[13] = _0x30a5d5[14] = _0x30a5d5[15] = 0), _0x27e3c1) {
                    if (_0x47bf78) {
                        for (_0x58fae8 = this.start; _0x3944cd < _0x67bc36 && _0x58fae8 < 64; ++_0x3944cd) {
                            _0xc1e196 = _0x5d5e7.charCodeAt(_0x3944cd);
                            _0xc1e196 < 128 ? _0x469fdd[_0x58fae8++] = _0xc1e196 : _0xc1e196 < 2048 ? (_0x469fdd[_0x58fae8++] = 192 | _0xc1e196 >>> 6, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 & 63) : _0xc1e196 < 55296 || _0xc1e196 >= 57344 ? (_0x469fdd[_0x58fae8++] = 224 | _0xc1e196 >>> 12, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 >>> 6 & 63, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 & 63) : (_0xc1e196 = 65536 + ((_0xc1e196 & 1023) << 10 | _0x5d5e7.charCodeAt(++_0x3944cd) & 1023), _0x469fdd[_0x58fae8++] = 240 | _0xc1e196 >>> 18, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 >>> 12 & 63, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 >>> 6 & 63, _0x469fdd[_0x58fae8++] = 128 | _0xc1e196 & 63);
                            ;
                        }
                    } else {
                        for (_0x58fae8 = this.start; _0x3944cd < _0x67bc36 && _0x58fae8 < 64; ++_0x3944cd) {
                            _0xc1e196 = _0x5d5e7.charCodeAt(_0x3944cd);
                            _0xc1e196 < 128 ? _0x30a5d5[_0x58fae8 >>> 2] |= _0xc1e196 << _0x3a97f7[_0x58fae8++ & 3] : _0xc1e196 < 2048 ? (_0x30a5d5[_0x58fae8 >>> 2] |= (192 | _0xc1e196 >>> 6) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 & 63) << _0x3a97f7[_0x58fae8++ & 3]) : _0xc1e196 < 55296 || _0xc1e196 >= 57344 ? (_0x30a5d5[_0x58fae8 >>> 2] |= (224 | _0xc1e196 >>> 12) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 >>> 6 & 63) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 & 63) << _0x3a97f7[_0x58fae8++ & 3]) : (_0xc1e196 = 65536 + ((_0xc1e196 & 1023) << 10 | _0x5d5e7.charCodeAt(++_0x3944cd) & 1023), _0x30a5d5[_0x58fae8 >>> 2] |= (240 | _0xc1e196 >>> 18) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 >>> 12 & 63) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 >>> 6 & 63) << _0x3a97f7[_0x58fae8++ & 3], _0x30a5d5[_0x58fae8 >>> 2] |= (128 | _0xc1e196 & 63) << _0x3a97f7[_0x58fae8++ & 3]);
                            ;
                        }
                    }
                } else {
                    if (_0x47bf78) {
                        for (_0x58fae8 = this.start; _0x3944cd < _0x67bc36 && _0x58fae8 < 64; ++_0x3944cd) {
                            _0x469fdd[_0x58fae8++] = _0x5d5e7[_0x3944cd];
                        }
                    } else {
                        for (_0x58fae8 = this.start; _0x3944cd < _0x67bc36 && _0x58fae8 < 64; ++_0x3944cd) {
                            _0x30a5d5[_0x58fae8 >>> 2] |= _0x5d5e7[_0x3944cd] << _0x3a97f7[_0x58fae8++ & 3];
                        }
                    }
                }
                this.lastByteIndex = _0x58fae8;
                this.bytes += _0x58fae8 - this.start;
                _0x58fae8 >= 64 ? (this.start = _0x58fae8 - 64, this.hash(), this.hashed = true) : this.start = _0x58fae8;
                ;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        };
        _0x560d49.prototype.finalize = function () {
            ;
            if (!this.finalized) {
                this.finalized = true;
                var _0x5b97e7 = this.blocks, _0x15ebd2 = this.lastByteIndex;
                _0x5b97e7[_0x15ebd2 >>> 2] |= _0x31e2f8[_0x15ebd2 & 3];
                if (_0x15ebd2 >= 56) {
                    this.hashed || this.hash();
                    _0x5b97e7[0] = _0x5b97e7[16];
                    _0x5b97e7[16] = _0x5b97e7[1] = _0x5b97e7[2] = _0x5b97e7[3] = _0x5b97e7[4] = _0x5b97e7[5] = _0x5b97e7[6] = _0x5b97e7[7] = _0x5b97e7[8] = _0x5b97e7[9] = _0x5b97e7[10] = _0x5b97e7[11] = _0x5b97e7[12] = _0x5b97e7[13] = _0x5b97e7[14] = _0x5b97e7[15] = 0;
                }
                _0x5b97e7[14] = this.bytes << 3;
                _0x5b97e7[15] = this.hBytes << 3 | this.bytes >>> 29;
                this.hash();
                ;
            }
        };
        _0x560d49.prototype.hash = function () {
            ;
            var _0x2ad3a4, _0x3ae243, _0x104844, _0xf58969, _0x4fad3e, _0x121408, _0x356db8 = this.blocks;
            this.first ? (_0x2ad3a4 = _0x356db8[0] - 680876937, _0x2ad3a4 = (_0x2ad3a4 << 7 | _0x2ad3a4 >>> 25) - 271733879 << 0, _0xf58969 = (-1732584194 ^ _0x2ad3a4 & 2004318071) + _0x356db8[1] - 117830708, _0xf58969 = (_0xf58969 << 12 | _0xf58969 >>> 20) + _0x2ad3a4 << 0, _0x104844 = (-271733879 ^ _0xf58969 & (_0x2ad3a4 ^ -271733879)) + _0x356db8[2] - 1126478375, _0x104844 = (_0x104844 << 17 | _0x104844 >>> 15) + _0xf58969 << 0, _0x3ae243 = (_0x2ad3a4 ^ _0x104844 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[3] - 1316259209, _0x3ae243 = (_0x3ae243 << 22 | _0x3ae243 >>> 10) + _0x104844 << 0) : (_0x2ad3a4 = this.h0, _0x3ae243 = this.h1, _0x104844 = this.h2, _0xf58969 = this.h3, _0x2ad3a4 += (_0xf58969 ^ _0x3ae243 & (_0x104844 ^ _0xf58969)) + _0x356db8[0] - 680876936, _0x2ad3a4 = (_0x2ad3a4 << 7 | _0x2ad3a4 >>> 25) + _0x3ae243 << 0, _0xf58969 += (_0x104844 ^ _0x2ad3a4 & (_0x3ae243 ^ _0x104844)) + _0x356db8[1] - 389564586, _0xf58969 = (_0xf58969 << 12 | _0xf58969 >>> 20) + _0x2ad3a4 << 0, _0x104844 += (_0x3ae243 ^ _0xf58969 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[2] + 606105819, _0x104844 = (_0x104844 << 17 | _0x104844 >>> 15) + _0xf58969 << 0, _0x3ae243 += (_0x2ad3a4 ^ _0x104844 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[3] - 1044525330, _0x3ae243 = (_0x3ae243 << 22 | _0x3ae243 >>> 10) + _0x104844 << 0);
            _0x2ad3a4 += (_0xf58969 ^ _0x3ae243 & (_0x104844 ^ _0xf58969)) + _0x356db8[4] - 176418897;
            _0x2ad3a4 = (_0x2ad3a4 << 7 | _0x2ad3a4 >>> 25) + _0x3ae243 << 0;
            _0xf58969 += (_0x104844 ^ _0x2ad3a4 & (_0x3ae243 ^ _0x104844)) + _0x356db8[5] + 1200080426;
            _0xf58969 = (_0xf58969 << 12 | _0xf58969 >>> 20) + _0x2ad3a4 << 0;
            _0x104844 += (_0x3ae243 ^ _0xf58969 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[6] - 1473231341;
            _0x104844 = (_0x104844 << 17 | _0x104844 >>> 15) + _0xf58969 << 0;
            _0x3ae243 += (_0x2ad3a4 ^ _0x104844 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[7] - 45705983;
            _0x3ae243 = (_0x3ae243 << 22 | _0x3ae243 >>> 10) + _0x104844 << 0;
            _0x2ad3a4 += (_0xf58969 ^ _0x3ae243 & (_0x104844 ^ _0xf58969)) + _0x356db8[8] + 1770035416;
            _0x2ad3a4 = (_0x2ad3a4 << 7 | _0x2ad3a4 >>> 25) + _0x3ae243 << 0;
            _0xf58969 += (_0x104844 ^ _0x2ad3a4 & (_0x3ae243 ^ _0x104844)) + _0x356db8[9] - 1958414417;
            _0xf58969 = (_0xf58969 << 12 | _0xf58969 >>> 20) + _0x2ad3a4 << 0;
            _0x104844 += (_0x3ae243 ^ _0xf58969 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[10] - 42063;
            _0x104844 = (_0x104844 << 17 | _0x104844 >>> 15) + _0xf58969 << 0;
            _0x3ae243 += (_0x2ad3a4 ^ _0x104844 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[11] - 1990404162;
            _0x3ae243 = (_0x3ae243 << 22 | _0x3ae243 >>> 10) + _0x104844 << 0;
            _0x2ad3a4 += (_0xf58969 ^ _0x3ae243 & (_0x104844 ^ _0xf58969)) + _0x356db8[12] + 1804603682;
            _0x2ad3a4 = (_0x2ad3a4 << 7 | _0x2ad3a4 >>> 25) + _0x3ae243 << 0;
            _0xf58969 += (_0x104844 ^ _0x2ad3a4 & (_0x3ae243 ^ _0x104844)) + _0x356db8[13] - 40341101;
            _0xf58969 = (_0xf58969 << 12 | _0xf58969 >>> 20) + _0x2ad3a4 << 0;
            _0x104844 += (_0x3ae243 ^ _0xf58969 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[14] - 1502002290;
            _0x104844 = (_0x104844 << 17 | _0x104844 >>> 15) + _0xf58969 << 0;
            _0x3ae243 += (_0x2ad3a4 ^ _0x104844 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[15] + 1236535329;
            _0x3ae243 = (_0x3ae243 << 22 | _0x3ae243 >>> 10) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ _0xf58969 & (_0x3ae243 ^ _0x104844)) + _0x356db8[1] - 165796510;
            _0x2ad3a4 = (_0x2ad3a4 << 5 | _0x2ad3a4 >>> 27) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ _0x104844 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[6] - 1069501632;
            _0xf58969 = (_0xf58969 << 9 | _0xf58969 >>> 23) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ _0x3ae243 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[11] + 643717713;
            _0x104844 = (_0x104844 << 14 | _0x104844 >>> 18) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ _0x2ad3a4 & (_0x104844 ^ _0xf58969)) + _0x356db8[0] - 373897302;
            _0x3ae243 = (_0x3ae243 << 20 | _0x3ae243 >>> 12) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ _0xf58969 & (_0x3ae243 ^ _0x104844)) + _0x356db8[5] - 701558691;
            _0x2ad3a4 = (_0x2ad3a4 << 5 | _0x2ad3a4 >>> 27) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ _0x104844 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[10] + 38016083;
            _0xf58969 = (_0xf58969 << 9 | _0xf58969 >>> 23) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ _0x3ae243 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[15] - 660478335;
            _0x104844 = (_0x104844 << 14 | _0x104844 >>> 18) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ _0x2ad3a4 & (_0x104844 ^ _0xf58969)) + _0x356db8[4] - 405537848;
            _0x3ae243 = (_0x3ae243 << 20 | _0x3ae243 >>> 12) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ _0xf58969 & (_0x3ae243 ^ _0x104844)) + _0x356db8[9] + 568446438;
            _0x2ad3a4 = (_0x2ad3a4 << 5 | _0x2ad3a4 >>> 27) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ _0x104844 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[14] - 1019803690;
            _0xf58969 = (_0xf58969 << 9 | _0xf58969 >>> 23) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ _0x3ae243 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[3] - 187363961;
            _0x104844 = (_0x104844 << 14 | _0x104844 >>> 18) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ _0x2ad3a4 & (_0x104844 ^ _0xf58969)) + _0x356db8[8] + 1163531501;
            _0x3ae243 = (_0x3ae243 << 20 | _0x3ae243 >>> 12) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ _0xf58969 & (_0x3ae243 ^ _0x104844)) + _0x356db8[13] - 1444681467;
            _0x2ad3a4 = (_0x2ad3a4 << 5 | _0x2ad3a4 >>> 27) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ _0x104844 & (_0x2ad3a4 ^ _0x3ae243)) + _0x356db8[2] - 51403784;
            _0xf58969 = (_0xf58969 << 9 | _0xf58969 >>> 23) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ _0x3ae243 & (_0xf58969 ^ _0x2ad3a4)) + _0x356db8[7] + 1735328473;
            _0x104844 = (_0x104844 << 14 | _0x104844 >>> 18) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ _0x2ad3a4 & (_0x104844 ^ _0xf58969)) + _0x356db8[12] - 1926607734;
            _0x3ae243 = (_0x3ae243 << 20 | _0x3ae243 >>> 12) + _0x104844 << 0;
            _0x4fad3e = _0x3ae243 ^ _0x104844;
            _0x2ad3a4 += (_0x4fad3e ^ _0xf58969) + _0x356db8[5] - 378558;
            _0x2ad3a4 = (_0x2ad3a4 << 4 | _0x2ad3a4 >>> 28) + _0x3ae243 << 0;
            _0xf58969 += (_0x4fad3e ^ _0x2ad3a4) + _0x356db8[8] - 2022574463;
            _0xf58969 = (_0xf58969 << 11 | _0xf58969 >>> 21) + _0x2ad3a4 << 0;
            _0x121408 = _0xf58969 ^ _0x2ad3a4;
            _0x104844 += (_0x121408 ^ _0x3ae243) + _0x356db8[11] + 1839030562;
            _0x104844 = (_0x104844 << 16 | _0x104844 >>> 16) + _0xf58969 << 0;
            _0x3ae243 += (_0x121408 ^ _0x104844) + _0x356db8[14] - 35309556;
            _0x3ae243 = (_0x3ae243 << 23 | _0x3ae243 >>> 9) + _0x104844 << 0;
            _0x4fad3e = _0x3ae243 ^ _0x104844;
            _0x2ad3a4 += (_0x4fad3e ^ _0xf58969) + _0x356db8[1] - 1530992060;
            _0x2ad3a4 = (_0x2ad3a4 << 4 | _0x2ad3a4 >>> 28) + _0x3ae243 << 0;
            _0xf58969 += (_0x4fad3e ^ _0x2ad3a4) + _0x356db8[4] + 1272893353;
            _0xf58969 = (_0xf58969 << 11 | _0xf58969 >>> 21) + _0x2ad3a4 << 0;
            _0x121408 = _0xf58969 ^ _0x2ad3a4;
            _0x104844 += (_0x121408 ^ _0x3ae243) + _0x356db8[7] - 155497632;
            _0x104844 = (_0x104844 << 16 | _0x104844 >>> 16) + _0xf58969 << 0;
            _0x3ae243 += (_0x121408 ^ _0x104844) + _0x356db8[10] - 1094730640;
            _0x3ae243 = (_0x3ae243 << 23 | _0x3ae243 >>> 9) + _0x104844 << 0;
            _0x4fad3e = _0x3ae243 ^ _0x104844;
            _0x2ad3a4 += (_0x4fad3e ^ _0xf58969) + _0x356db8[13] + 681279174;
            _0x2ad3a4 = (_0x2ad3a4 << 4 | _0x2ad3a4 >>> 28) + _0x3ae243 << 0;
            _0xf58969 += (_0x4fad3e ^ _0x2ad3a4) + _0x356db8[0] - 358537222;
            _0xf58969 = (_0xf58969 << 11 | _0xf58969 >>> 21) + _0x2ad3a4 << 0;
            _0x121408 = _0xf58969 ^ _0x2ad3a4;
            _0x104844 += (_0x121408 ^ _0x3ae243) + _0x356db8[3] - 722521979;
            _0x104844 = (_0x104844 << 16 | _0x104844 >>> 16) + _0xf58969 << 0;
            _0x3ae243 += (_0x121408 ^ _0x104844) + _0x356db8[6] + 76029189;
            _0x3ae243 = (_0x3ae243 << 23 | _0x3ae243 >>> 9) + _0x104844 << 0;
            _0x4fad3e = _0x3ae243 ^ _0x104844;
            _0x2ad3a4 += (_0x4fad3e ^ _0xf58969) + _0x356db8[9] - 640364487;
            _0x2ad3a4 = (_0x2ad3a4 << 4 | _0x2ad3a4 >>> 28) + _0x3ae243 << 0;
            _0xf58969 += (_0x4fad3e ^ _0x2ad3a4) + _0x356db8[12] - 421815835;
            _0xf58969 = (_0xf58969 << 11 | _0xf58969 >>> 21) + _0x2ad3a4 << 0;
            _0x121408 = _0xf58969 ^ _0x2ad3a4;
            _0x104844 += (_0x121408 ^ _0x3ae243) + _0x356db8[15] + 530742520;
            _0x104844 = (_0x104844 << 16 | _0x104844 >>> 16) + _0xf58969 << 0;
            _0x3ae243 += (_0x121408 ^ _0x104844) + _0x356db8[2] - 995338651;
            _0x3ae243 = (_0x3ae243 << 23 | _0x3ae243 >>> 9) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ (_0x3ae243 | ~_0xf58969)) + _0x356db8[0] - 198630844;
            _0x2ad3a4 = (_0x2ad3a4 << 6 | _0x2ad3a4 >>> 26) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ (_0x2ad3a4 | ~_0x104844)) + _0x356db8[7] + 1126891415;
            _0xf58969 = (_0xf58969 << 10 | _0xf58969 >>> 22) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ (_0xf58969 | ~_0x3ae243)) + _0x356db8[14] - 1416354905;
            _0x104844 = (_0x104844 << 15 | _0x104844 >>> 17) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ (_0x104844 | ~_0x2ad3a4)) + _0x356db8[5] - 57434055;
            _0x3ae243 = (_0x3ae243 << 21 | _0x3ae243 >>> 11) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ (_0x3ae243 | ~_0xf58969)) + _0x356db8[12] + 1700485571;
            _0x2ad3a4 = (_0x2ad3a4 << 6 | _0x2ad3a4 >>> 26) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ (_0x2ad3a4 | ~_0x104844)) + _0x356db8[3] - 1894986606;
            _0xf58969 = (_0xf58969 << 10 | _0xf58969 >>> 22) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ (_0xf58969 | ~_0x3ae243)) + _0x356db8[10] - 1051523;
            _0x104844 = (_0x104844 << 15 | _0x104844 >>> 17) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ (_0x104844 | ~_0x2ad3a4)) + _0x356db8[1] - 2054922799;
            _0x3ae243 = (_0x3ae243 << 21 | _0x3ae243 >>> 11) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ (_0x3ae243 | ~_0xf58969)) + _0x356db8[8] + 1873313359;
            _0x2ad3a4 = (_0x2ad3a4 << 6 | _0x2ad3a4 >>> 26) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ (_0x2ad3a4 | ~_0x104844)) + _0x356db8[15] - 30611744;
            _0xf58969 = (_0xf58969 << 10 | _0xf58969 >>> 22) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ (_0xf58969 | ~_0x3ae243)) + _0x356db8[6] - 1560198380;
            _0x104844 = (_0x104844 << 15 | _0x104844 >>> 17) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ (_0x104844 | ~_0x2ad3a4)) + _0x356db8[13] + 1309151649;
            _0x3ae243 = (_0x3ae243 << 21 | _0x3ae243 >>> 11) + _0x104844 << 0;
            _0x2ad3a4 += (_0x104844 ^ (_0x3ae243 | ~_0xf58969)) + _0x356db8[4] - 145523070;
            _0x2ad3a4 = (_0x2ad3a4 << 6 | _0x2ad3a4 >>> 26) + _0x3ae243 << 0;
            _0xf58969 += (_0x3ae243 ^ (_0x2ad3a4 | ~_0x104844)) + _0x356db8[11] - 1120210379;
            _0xf58969 = (_0xf58969 << 10 | _0xf58969 >>> 22) + _0x2ad3a4 << 0;
            _0x104844 += (_0x2ad3a4 ^ (_0xf58969 | ~_0x3ae243)) + _0x356db8[2] + 718787259;
            _0x104844 = (_0x104844 << 15 | _0x104844 >>> 17) + _0xf58969 << 0;
            _0x3ae243 += (_0xf58969 ^ (_0x104844 | ~_0x2ad3a4)) + _0x356db8[9] - 343485551;
            _0x3ae243 = (_0x3ae243 << 21 | _0x3ae243 >>> 11) + _0x104844 << 0;
            this.first ? (this.h0 = _0x2ad3a4 + 1732584193 << 0, this.h1 = _0x3ae243 - 271733879 << 0, this.h2 = _0x104844 - 1732584194 << 0, this.h3 = _0xf58969 + 271733878 << 0, this.first = false) : (this.h0 = this.h0 + _0x2ad3a4 << 0, this.h1 = this.h1 + _0x3ae243 << 0, this.h2 = this.h2 + _0x104844 << 0, this.h3 = this.h3 + _0xf58969 << 0);
            ;
        };
        _0x560d49.prototype.hex = function () {
            ;
            this.finalize();
            var _0x4b6cb3 = this.h0, _0x790940 = this.h1, _0x40c45c = this.h2, _0x3d6b75 = this.h3;
            return _0x2e615c[_0x4b6cb3 >>> 4 & 15] + _0x2e615c[_0x4b6cb3 & 15] + _0x2e615c[_0x4b6cb3 >>> 12 & 15] + _0x2e615c[_0x4b6cb3 >>> 8 & 15] + _0x2e615c[_0x4b6cb3 >>> 20 & 15] + _0x2e615c[_0x4b6cb3 >>> 16 & 15] + _0x2e615c[_0x4b6cb3 >>> 28 & 15] + _0x2e615c[_0x4b6cb3 >>> 24 & 15] + _0x2e615c[_0x790940 >>> 4 & 15] + _0x2e615c[_0x790940 & 15] + _0x2e615c[_0x790940 >>> 12 & 15] + _0x2e615c[_0x790940 >>> 8 & 15] + _0x2e615c[_0x790940 >>> 20 & 15] + _0x2e615c[_0x790940 >>> 16 & 15] + _0x2e615c[_0x790940 >>> 28 & 15] + _0x2e615c[_0x790940 >>> 24 & 15] + _0x2e615c[_0x40c45c >>> 4 & 15] + _0x2e615c[_0x40c45c & 15] + _0x2e615c[_0x40c45c >>> 12 & 15] + _0x2e615c[_0x40c45c >>> 8 & 15] + _0x2e615c[_0x40c45c >>> 20 & 15] + _0x2e615c[_0x40c45c >>> 16 & 15] + _0x2e615c[_0x40c45c >>> 28 & 15] + _0x2e615c[_0x40c45c >>> 24 & 15] + _0x2e615c[_0x3d6b75 >>> 4 & 15] + _0x2e615c[_0x3d6b75 & 15] + _0x2e615c[_0x3d6b75 >>> 12 & 15] + _0x2e615c[_0x3d6b75 >>> 8 & 15] + _0x2e615c[_0x3d6b75 >>> 20 & 15] + _0x2e615c[_0x3d6b75 >>> 16 & 15] + _0x2e615c[_0x3d6b75 >>> 28 & 15] + _0x2e615c[_0x3d6b75 >>> 24 & 15];
        };
        _0x560d49.prototype.toString = _0x560d49.prototype.hex;
        _0x560d49.prototype.digest = function () {
            ;
            this.finalize();
            var _0xa96677 = this.h0, _0x219943 = this.h1, _0x548eb1 = this.h2, _0x153e0e = this.h3;
            return [
                _0xa96677 & 255,
                _0xa96677 >>> 8 & 255,
                _0xa96677 >>> 16 & 255,
                _0xa96677 >>> 24 & 255,
                _0x219943 & 255,
                _0x219943 >>> 8 & 255,
                _0x219943 >>> 16 & 255,
                _0x219943 >>> 24 & 255,
                _0x548eb1 & 255,
                _0x548eb1 >>> 8 & 255,
                _0x548eb1 >>> 16 & 255,
                _0x548eb1 >>> 24 & 255,
                _0x153e0e & 255,
                _0x153e0e >>> 8 & 255,
                _0x153e0e >>> 16 & 255,
                _0x153e0e >>> 24 & 255
            ];
        };
        _0x560d49.prototype.array = _0x560d49.prototype.digest;
        _0x560d49.prototype.arrayBuffer = function () {
            ;
            this.finalize();
            var _0x3a9d96 = new ArrayBuffer(16), _0x2a2d16 = new Uint32Array(_0x3a9d96);
            return _0x2a2d16[0] = this.h0, _0x2a2d16[1] = this.h1, _0x2a2d16[2] = this.h2, _0x2a2d16[3] = this.h3, _0x3a9d96;
        };
        _0x560d49.prototype.buffer = _0x560d49.prototype.arrayBuffer;
        _0x560d49.prototype.base64 = function () {
            ;
            for (var _0x1a01e6, _0x4b95ba, _0x515e51, _0x23be38 = '', _0x5c708a = this.array(), _0x21b68a = 0; _0x21b68a < 15;) {
                _0x1a01e6 = _0x5c708a[_0x21b68a++];
                _0x4b95ba = _0x5c708a[_0x21b68a++];
                _0x515e51 = _0x5c708a[_0x21b68a++];
                _0x23be38 += _0x615161[_0x1a01e6 >>> 2] + _0x615161[(_0x1a01e6 << 4 | _0x4b95ba >>> 4) & 63] + _0x615161[(_0x4b95ba << 2 | _0x515e51 >>> 6) & 63] + _0x615161[_0x515e51 & 63];
                ;
            }
            return _0x1a01e6 = _0x5c708a[_0x21b68a], _0x23be38 += _0x615161[_0x1a01e6 >>> 2] + _0x615161[_0x1a01e6 << 4 & 63] + '==', _0x23be38;
        };
        ;
        function _0x109ac6(_0x5f0abb, _0x1c9c2a) {
            ;
            var _0x7e5853, _0x2acc0b = _0x5e24cc(_0x5f0abb);
            if (_0x5f0abb = _0x2acc0b[0], _0x2acc0b[1]) {
                var _0x11db84 = [], _0x2a53c6 = _0x5f0abb.length, _0x551fbb = 0, _0x5f017a;
                for (_0x7e5853 = 0; _0x7e5853 < _0x2a53c6; ++_0x7e5853) {
                    _0x5f017a = _0x5f0abb.charCodeAt(_0x7e5853);
                    _0x5f017a < 128 ? _0x11db84[_0x551fbb++] = _0x5f017a : _0x5f017a < 2048 ? (_0x11db84[_0x551fbb++] = 192 | _0x5f017a >>> 6, _0x11db84[_0x551fbb++] = 128 | _0x5f017a & 63) : _0x5f017a < 55296 || _0x5f017a >= 57344 ? (_0x11db84[_0x551fbb++] = 224 | _0x5f017a >>> 12, _0x11db84[_0x551fbb++] = 128 | _0x5f017a >>> 6 & 63, _0x11db84[_0x551fbb++] = 128 | _0x5f017a & 63) : (_0x5f017a = 65536 + ((_0x5f017a & 1023) << 10 | _0x5f0abb.charCodeAt(++_0x7e5853) & 1023), _0x11db84[_0x551fbb++] = 240 | _0x5f017a >>> 18, _0x11db84[_0x551fbb++] = 128 | _0x5f017a >>> 12 & 63, _0x11db84[_0x551fbb++] = 128 | _0x5f017a >>> 6 & 63, _0x11db84[_0x551fbb++] = 128 | _0x5f017a & 63);
                    ;
                }
                _0x5f0abb = _0x11db84;
            }
            _0x5f0abb.length > 64 && (_0x5f0abb = new _0x560d49(true).update(_0x5f0abb).array());
            var _0x5b0882 = [], _0x5e74f0 = [];
            for (_0x7e5853 = 0; _0x7e5853 < 64; ++_0x7e5853) {
                var _0x588838 = _0x5f0abb[_0x7e5853] || 0;
                _0x5b0882[_0x7e5853] = 92 ^ _0x588838;
                _0x5e74f0[_0x7e5853] = 54 ^ _0x588838;
                ;
            }
            _0x560d49.call(this, _0x1c9c2a);
            this.update(_0x5e74f0);
            this.oKeyPad = _0x5b0882;
            this.inner = true;
            this.sharedMemory = _0x1c9c2a;
            ;
        }
        _0x109ac6.prototype = new _0x560d49();
        _0x109ac6.prototype.finalize = function () {
            ;
            if (_0x560d49.prototype.finalize.call(this), this.inner) {
                this.inner = false;
                var _0x190267 = this.array();
                _0x560d49.call(this, this.sharedMemory);
                this.update(this.oKeyPad);
                this.update(_0x190267);
                _0x560d49.prototype.finalize.call(this);
                ;
            }
        };
        ;
        var _0x3fe8e4 = _0x2b287c();
        _0x3fe8e4.md5 = _0x3fe8e4;
        _0x3fe8e4.md5.hmac = _0x7682a();
        _0x70f66d ? _0x2bc579.exports = _0x3fe8e4 : _0x1c7da2.md5 = _0x3fe8e4;
        ;
    }());
}(Cc));
var gh = Cc.exports;
function Pt(_0x4a51f7) {
    const _0x4c2ac6 = document.createElement('span');
    return _0x4c2ac6.style.fontFamily = 'markup-' + _0x4a51f7, _0x4c2ac6.classList.add('is-markup'), _0x4c2ac6.dataset.markup = _0x4a51f7, _0x4c2ac6;
}
function ph(_0x2b92f8) {
    const _0x4c9024 = _0x2b92f8.target;
    if (_0x4c9024.ignoreQuoteResize) {
        if (Date.now() < _0x4c9024.ignoreQuoteResize) {
            return;
        }
        delete _0x4c9024.ignoreQuoteResize;
    }
    const _0x37e3a8 = _0x4c9024.scrollHeight;
    if (!_0x37e3a8) {
        return;
    }
    const _0x4db6b7 = _0x2b92f8.contentRect.bottom - _0x2b92f8.contentRect.height + _0x2b92f8.contentRect.top, _0x5a0329 = _0x37e3a8 - _0x4db6b7 - 0 - Math.floor(_0x2b92f8.contentRect.height) <= 1;
    _0x4c9024.style.setProperty('--quote-max-height', _0x37e3a8 + 'px');
    _0x4c9024.classList.toggle('is-truncated', !_0x5a0329);
    ;
}
function bh(_0x3e9e36) {
    ;
    _0x3e9e36.classList.add('quote-like-collapsable');
    const _0x42ed69 = document.createElement('span');
    return _0x42ed69.classList.add('quote-like-icon', 'quote-like-collapse'), _0x3e9e36.append(_0x42ed69), dc(_0x3e9e36, ph);
}
function gs(_0x41ba98, _0x158f41 = {}) {
    const _0x3686bb = document.createDocumentFragment();
    if (!_0x41ba98) {
        return _0x3686bb;
    }
    const _0x4f3c1b = {
        i: 0,
        usedLength: 0,
        text: _0x41ba98
    };
    ;
    ;
    ;
    ;
    const _0x1ace25 = _0x158f41.nasty ?? (_0x158f41.nasty = _0x4f3c1b), _0x26563b = (_0x11294e, _0x5092a9) => {
            const _0x3563e4 = document.createElement('span');
            return _0x158f41.wrappingDraft && (_0x3563e4.contentEditable = 'false'), _0x3563e4.classList.add('input-something'), _0x3563e4.append(_0x11294e), (_0x487641 || _0x3686bb).append(_0x3563e4), _0x11294e.classList.add('input-selectable'), !_0x5092a9 && _0x11294e.append(yn(true)), _0x51000a.add(_0x3563e4), _0x3563e4;
        };
    _0x158f41.isSelectable || (_0x158f41.isSelectable = _0x158f41.wrappingDraft);
    const _0x3ffa4a = _0x158f41.customEmojis ?? (_0x158f41.customEmojis = new Map()), _0x51000a = _0x158f41.customWraps ?? (_0x158f41.customWraps = new Set()), _0x3520dd = _0x158f41.entities ?? (_0x158f41.entities = Kf(_0x1ace25.text)), _0x5c6ec5 = _0x158f41.passEntities ?? (_0x158f41.passEntities = {}), _0x9b1eab = _0x158f41.contextSite ?? (_0x158f41.contextSite = 'Telegram'), _0xce9f70 = _0x9b1eab !== 'Telegram', _0x35b967 = _0x1ace25.text.length, _0x1cc48b = _0x3520dd.length;
    let _0x487641;
    for (; _0x1ace25.i < _0x1cc48b; ++_0x1ace25.i) {
        let _0x151f8a = _0x3520dd[_0x1ace25.i];
        if (_0x151f8a.offset >= _0x35b967) {
            if (_0x151f8a['_'] !== 'messageEntityCaret') {
                continue;
            }
        } else {
            if (_0x151f8a.offset + _0x151f8a.length > _0x35b967) {
                _0x151f8a = Ye(_0x151f8a);
                _0x151f8a.length = _0x35b967 - _0x151f8a.offset;
            }
        }
        _0x151f8a.length && (_0x1ace25.lastEntity = _0x151f8a);
        let _0x1bc5a0 = _0x3520dd[_0x1ace25.i + 1];
        const _0xd694b5 = _0x151f8a.offset, _0x353c67 = _0xd694b5 + _0x151f8a.length, _0x325314 = Math.min(_0x353c67, _0x1bc5a0?.offset ?? 65535), _0x4b6a7d = _0x1ace25.text.slice(_0xd694b5, _0x353c67);
        let _0x348579 = _0x1ace25.text.slice(_0xd694b5, _0x325314);
        _0x1ace25.usedLength < _0xd694b5 && (_0x487641 || _0x3686bb).append(_0x1ace25.text.slice(_0x1ace25.usedLength, _0xd694b5));
        _0x487641 && (_0x487641 = _0x3686bb);
        _0x1ace25.usedLength = _0x325314;
        ;
        let _0x4be2e2, _0x7712b8, _0xc930f6 = false, _0x287dc9 = false;
        switch (_0x151f8a['_']) {
        case 'messageEntityBold': {
                _0x158f41.noTextFormat || (_0x158f41.wrappingDraft ? _0x4be2e2 = Pt('bold') : _0x4be2e2 = document.createElement('strong'));
                break;
            }
        case 'messageEntityItalic': {
                _0x158f41.noTextFormat || (_0x158f41.wrappingDraft ? _0x4be2e2 = Pt('italic') : _0x4be2e2 = document.createElement('em'));
                break;
            }
        case 'messageEntityStrike': {
                _0x158f41.wrappingDraft ? _0x4be2e2 = Pt('strikethrough') : _0x4be2e2 = document.createElement('del');
                break;
            }
        case 'messageEntityUnderline': {
                _0x158f41.wrappingDraft ? _0x4be2e2 = Pt('underline') : _0x158f41.noTextFormat || (_0x4be2e2 = document.createElement('u'));
                break;
            }
        case 'messageEntityPre':
        case 'messageEntityCode': {
                const _0x562772 = _0x151f8a.language;
                if (_0x158f41.wrappingDraft) {
                    _0x4be2e2 = Pt('monospace');
                    _0x562772 && (_0x4be2e2.dataset.language = _0x562772);
                    ;
                } else {
                    if (_0x151f8a['_'] === 'messageEntityPre' && !_0x158f41.noTextFormat) {
                        const _0x50348b = document.createElement('pre'), _0x5cfb3e = document.createElement('div');
                        _0x5cfb3e.classList.add('code-content');
                        _0x4be2e2 = document.createElement('code');
                        _0x4be2e2.classList.add('code-code');
                        _0x3686bb.append(_0x50348b);
                        _0x5cfb3e.append(_0x4be2e2);
                        _0x50348b.classList.add('quote-like', 'quote-like-border', 'code');
                        ;
                        const _0x1c985f = Er[_0x562772.toLowerCase()], _0x52413a = document.createElement('div');
                        _0x52413a.classList.add('code-header');
                        const _0xcf4070 = document.createElement('span');
                        _0xcf4070.classList.add('code-header-name');
                        _0xcf4070.append(_0x1c985f || X('CopyCode'));
                        ;
                        const _0xff2857 = At('menu', 'code-header-button', 'code-header-toggle-wrap');
                        _0x52413a.append(_0xcf4070, _0xff2857, At('copy', 'code-header-button', 'code-header-copy'));
                        _0x50348b.append(_0x52413a, _0x5cfb3e);
                        ;
                        const _0x39652f = _0x1c985f && ku(_0x4b6a7d, _0x1c985f);
                        _0x39652f && at(_0x39652f, _0xea4575 => {
                            ;
                            _0xea4575 && (_0x4be2e2.innerHTML = _0xea4575);
                        });
                        _0xc930f6 = true;
                        (!_0x39652f || _0x39652f instanceof Promise) && (_0x4be2e2.textContent = _0x4b6a7d);
                        ;
                        let _0x3f14d8 = Fu(_0x3520dd, _0x5bcd51 => _0x5bcd51.offset >= _0x353c67, _0x1ace25.i + 1);
                        _0x3f14d8 === -1 ? _0x3f14d8 = _0x3520dd.length - 1 : _0x3f14d8 -= 1;
                        _0x1ace25.i = _0x3f14d8;
                        _0x1ace25.usedLength = _0x353c67;
                        _0x1ace25.lastEntity = _0x3520dd[_0x3f14d8];
                        _0x1bc5a0 = void 0;
                        _0x287dc9 = true;
                        ;
                    } else {
                        _0x158f41.noTextFormat || (_0x4be2e2 = document.createElement('code'), _0x4be2e2.classList.add('monospace-text'));
                    }
                }
                break;
            }
        case 'messageEntityHighlight': {
                _0x4be2e2 = document.createElement('i');
                _0x4be2e2.className = 'text-highlight';
                ;
                break;
            }
        case 'messageEntityBotCommand': {
                if (!_0x158f41.noLinks && _0x5c6ec5[_0x151f8a['_']]) {
                    let _0x2616af = _0x4b6a7d.slice(1), _0x3bcc87, _0x43267f;
                    (_0x43267f = _0x2616af.indexOf('@')) !== -1 ? (_0x3bcc87 = _0x2616af.slice(_0x43267f + 1), _0x2616af = _0x2616af.slice(0, _0x43267f)) : _0x3bcc87 = _0x158f41.fromBot;
                    _0x4be2e2 = document.createElement('a');
                    _0x4be2e2.href = Xn('tg://bot_command?command=' + encodeURIComponent(_0x2616af) + (_0x3bcc87 ? '&bot=' + encodeURIComponent(_0x3bcc87) : ''));
                    _0xce9f70 || _0x4be2e2.setAttribute('onclick', 'execBotCommand(this)');
                    ;
                }
                break;
            }
        case 'messageEntityCustomEmoji': {
                for (; _0x1bc5a0?.['_'] === 'messageEntityEmoji' && _0x1bc5a0.offset < _0x353c67;) {
                    ++_0x1ace25.i;
                    _0x1ace25.lastEntity = _0x1bc5a0;
                    _0x1ace25.usedLength += _0x1bc5a0.length;
                    _0x1bc5a0 = _0x3520dd[_0x1ace25.i + 1];
                    ;
                }
                const _0x399aab = _0x4be2e2 = bn.create(_0x151f8a.document_id), {docId: _0x350e6b} = _0x399aab;
                let _0x32f4b1 = _0x3ffa4a.get(_0x350e6b);
                if (_0x32f4b1 || _0x3ffa4a.set(_0x350e6b, _0x32f4b1 = new Set()), _0x32f4b1.add(_0x399aab), _0x399aab.dataset.stickerEmoji = _0x4b6a7d, _0x158f41.wrappingDraft) {
                    _0x4be2e2 = document.createElement('img');
                    _0x4be2e2.alt = _0x4b6a7d;
                    ;
                    for (const _0x4eeab1 in _0x399aab.dataset)
                        _0x4be2e2.dataset[_0x4eeab1] = _0x399aab.dataset[_0x4eeab1];
                    _0x4be2e2.customEmojiElement = _0x399aab;
                    _0x399aab.placeholder = _0x4be2e2;
                    _0x4be2e2.classList.add('custom-emoji-placeholder');
                    _0x4be2e2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC';
                    _0x7712b8 = 'alt';
                    ;
                    break;
                }
                _0x158f41.isSelectable && (_0x4be2e2 = _0x26563b(_0x4be2e2, !!_0x158f41.customEmojiRenderer));
                _0x7712b8 = 'alt';
                ;
                break;
            }
        case 'messageEntityEmoji': {
                let _0xbb360f = Ni;
                if (_0xbb360f) {
                    for (const _0x10065c in $s)
                        if (_0x10065c && $s[_0x10065c].hasOwnProperty(_0x151f8a.unicode) && !Qn[_0x10065c]) {
                            _0xbb360f = false;
                            break;
                        }
                }
                if (_0xbb360f) {
                    _0x158f41.wrappingDraft || (_0x4be2e2 = document.createElement('span'), _0x4be2e2.className = 'emoji emoji-native');
                } else {
                    const _0x357744 = gh.md5(_0x151f8a.unicode + 'n1zyzidyd053').substring(0, 8);
                    _0x4be2e2 = document.createElement('img');
                    _0x4be2e2.src = 'assets/img/emoji/' + _0x357744 + '.png';
                    _0x7712b8 = 'alt';
                    _0x4be2e2.className = 'emoji emoji-image';
                    ;
                }
                break;
            }
        case 'messageEntityCaret': {
                _0x4be2e2 = document.createElement('span');
                _0x4be2e2.className = 'composer-sel';
                ;
                break;
            }
        case 'messageEntityLinebreak': {
                _0x158f41.ignoreNextIndex === _0x1ace25.i || _0x158f41.wrappingDraft && _0x1bc5a0?.['_'] === 'messageEntityBlockquote' && _0x1bc5a0.offset === _0x353c67 ? _0xc930f6 = true : _0x158f41.wrappingDraft && wt && (_0x4be2e2 = document.createElement('br'), _0xc930f6 = true);
                if (_0x158f41.doubleLinebreak === _0x1ace25.i) {
                    _0x158f41.doubleLinebreak = void 0;
                    (_0x4be2e2 || _0x3686bb).append('\n\n');
                    _0xc930f6 = true;
                }
                ;
                break;
            }
        case 'messageEntityUrl':
        case 'messageEntityTextUrl': {
                if (!(_0x158f41.noLinks && !_0x5c6ec5[_0x151f8a['_']])) {
                    let _0x2eca61 = _0x151f8a.url || _0x4b6a7d, _0x1a9f4a = false, _0x507498;
                    const _0xb257a4 = on(_0x2eca61);
                    if (_0x2eca61 = _0xb257a4.url, _0x507498 = _0xb257a4.onclick, _0x158f41.whitelistedDomains) {
                        try {
                            const _0x1ea98a = new URL(_0x2eca61).hostname;
                            if (!_0x158f41.whitelistedDomains.includes(_0x1ea98a)) {
                                break;
                            }
                        } catch {
                            break;
                        }
                    }
                    _0x151f8a['_'] === 'messageEntityTextUrl' ? (_0x1bc5a0?.['_'] === 'messageEntityUrl' && _0x1bc5a0.length === _0x151f8a.length && _0x1bc5a0.offset === _0x151f8a.offset && (_0x1ace25.lastEntity = _0x1bc5a0, ++_0x1ace25.i), _0x2eca61 !== _0x4b6a7d && (_0x1a9f4a = true)) : _0x1a9f4a = dh(_0x2eca61);
                    const _0x29d098 = !!_0x507498;
                    !_0x507498 && _0x1a9f4a && !_0x29d098 && !_0x158f41.passMaskedLinks && (_0x507498 = 'showMaskedAlert');
                    _0x158f41.wrappingDraft && (_0x507498 = void 0);
                    ;
                    const _0x142709 = _0x29d098 || typeof electronHelpers > 'u' ? _0x2eca61 : 'javascript:electronHelpers.openExternal(\'' + _0x2eca61 + '\');';
                    _0x4be2e2 = document.createElement('a');
                    _0x4be2e2.className = 'anchor-url';
                    _0x4be2e2.href = _0x142709;
                    _0x29d098 || typeof electronHelpers < 'u' || Sf(_0x4be2e2);
                    _0x507498 && _0x4be2e2.setAttribute('onclick', _0x507498 + '(this)');
                    ;
                }
                break;
            }
        case 'messageEntityEmail': {
                _0x158f41.noLinks || (_0x4be2e2 = document.createElement('a'), _0x4be2e2.href = Xn('mailto:' + _0x4b6a7d), Sf(_0x4be2e2));
                break;
            }
        case 'messageEntityHashtag': {
                const _0x2d97a2 = !_0x158f41.noLinks && I1[_0x9b1eab];
                if (_0x2d97a2) {
                    const _0x38711c = _0x4b6a7d.slice(1);
                    _0x4be2e2 = document.createElement('a');
                    _0x4be2e2.className = 'anchor-hashtag';
                    _0x4be2e2.href = _0x2d97a2.replace('{1}', encodeURIComponent(_0x38711c));
                    _0xce9f70 ? Sf(_0x4be2e2) : _0x4be2e2.setAttribute('onclick', 'searchByHashtag(this)');
                    ;
                }
                break;
            }
        case 'messageEntityMentionName': {
                _0x158f41.noLinks && !_0x5c6ec5[_0x151f8a['_']] || (_0x4be2e2 = document.createElement('a'), _0x4be2e2.href = Jl('' + _0x151f8a.user_id), _0x4be2e2.className = 'follow', _0x4be2e2.dataset.follow = '' + _0x151f8a.user_id);
                break;
            }
        case 'messageEntityMention': {
                if (!_0x158f41.noLinks) {
                    const _0x2c8324 = _0x4b6a7d.slice(1);
                    _0x4be2e2 = s0('t.me/' + _0x2c8324);
                    _0x4be2e2.className = 'mention';
                    ;
                }
                break;
            }
        case 'messageEntitySpoiler': {
                if (_0x158f41.noTextFormat) {
                    const _0x40e5a1 = Ql(_0x1ace25.text, _0x151f8a);
                    _0x1ace25.text = _0x40e5a1.text;
                    _0x348579 = _0x40e5a1.entityText;
                    _0x325314 !== _0x353c67 && (_0x1ace25.usedLength += _0x353c67 - _0x325314);
                    ;
                    let _0x1eeb81;
                    for (; _0x1eeb81 = _0x3520dd[_0x1ace25.i + 1], _0x1eeb81 && _0x1eeb81.offset < _0x353c67;) {
                        ++_0x1ace25.i;
                        _0x1ace25.lastEntity = _0x1eeb81;
                        _0x1bc5a0 = _0x3520dd[_0x1ace25.i + 1];
                        ;
                    }
                    wt || (_0x4be2e2 = document.createElement('span'), _0x4be2e2.append(..._0x348579.split('').map((_0x349d75, _0x1fdabe) => uc('<span class="bluff-spoiler" style="--index:' + _0x1fdabe + '">' + _0x349d75 + '</span>'))), _0x3686bb.append(_0x4be2e2), ui.attachBluffTextSpoilerTarget(_0x4be2e2), _0xc930f6 = true);
                } else {
                    if (_0x158f41.wrappingDraft) {
                        _0x4be2e2 = Pt('spoiler');
                    } else {
                        const _0x1dd25c = document.createElement('span');
                        _0x1dd25c.className = 'spoiler';
                        _0x4be2e2 = document.createElement('span');
                        _0x4be2e2.className = 'spoiler-text';
                        _0x4be2e2.textContent = _0x348579;
                        _0xc930f6 = true;
                        _0x1dd25c.append(_0x4be2e2);
                        _0x3686bb.append(_0x1dd25c);
                        _0x1dd25c['on' + Os] = window.onSpoilerClick;
                        ;
                    }
                }
                break;
            }
        case 'messageEntityTimestamp': {
                if (!_0x158f41.maxMediaTimestamp || _0x151f8a.time > _0x158f41.maxMediaTimestamp) {
                    break;
                }
                _0x4be2e2 = document.createElement('a');
                _0x4be2e2.classList.add('timestamp');
                _0x4be2e2.dataset.timestamp = '' + _0x151f8a.time;
                _0x4be2e2.href = '#';
                _0x4be2e2.setAttribute('onclick', 'setMediaTimestamp(this)');
                _0x158f41.maxMediaTimestamp === 1e+400 && _0x4be2e2.classList.add('is-disabled');
                ;
                break;
            }
        case 'messageEntityBlockquote': {
                if (_0x158f41.noTextFormat) {
                    break;
                }
                if (_0x158f41.wrappingDraft) {
                    _0x4be2e2 = Pt('quote');
                    _0x151f8a.pFlags?.collapsed && (_0x4be2e2.dataset.collapsed = '1');
                    ;
                } else {
                    if (_0x4be2e2 = document.createElement('blockquote'), _0x4be2e2.classList.add('quote'), _0x151f8a.pFlags?.collapsed) {
                        const _0x24bfd9 = bh(_0x4be2e2);
                        _0x158f41.middleware.onClean(_0x24bfd9);
                    }
                }
                _0x4be2e2.classList.add('quote-like', 'quote-like-border', 'quote-like-icon');
                tf(_0x4be2e2);
                _0x287dc9 = true;
                ;
                break;
            }
        }
        if (_0x287dc9) {
            let _0x43907b = -1;
            for (let _0x2b5ccd = _0x1ace25.i; _0x2b5ccd < _0x1cc48b; ++_0x2b5ccd) {
                const _0x399df2 = _0x3520dd[_0x2b5ccd];
                if (_0x399df2['_'] === 'messageEntityLinebreak' && _0x399df2.offset >= _0x353c67) {
                    _0x43907b = _0x2b5ccd;
                    break;
                }
            }
            if (_0x43907b !== -1 && _0x1ace25.text.slice(_0x353c67, _0x3520dd[_0x43907b].offset).trim() && (_0x43907b = -1), !_0x158f41.wrappingDraft && _0x353c67 < _0x1ace25.text.length) {
                if (!_0x4be2e2.parentElement) {
                    const _0x26ede6 = document.createElement('div');
                    _0x26ede6.append(_0x4be2e2);
                    _0x3686bb.append(_0x26ede6);
                    ;
                }
                if (_0x1ace25.text[_0x353c67 - 1] === '\n') {
                    let _0x492138 = -1;
                    for (let _0x49d0c2 = _0x1ace25.i; _0x49d0c2 < _0x1cc48b; ++_0x49d0c2) {
                        const _0x1ea4a0 = _0x3520dd[_0x49d0c2];
                        if (_0x1ea4a0.offset >= _0x353c67) {
                            break;
                        }
                        _0x1ea4a0['_'] === 'messageEntityLinebreak' && (_0x492138 = _0x49d0c2);
                    }
                    _0x492138 !== -1 && (_0x158f41.ignoreNextIndex = _0x492138);
                } else {
                    _0x43907b !== -1 && (_0x158f41.ignoreNextIndex = _0x43907b);
                }
            }
            _0x158f41.wrappingDraft && _0x43907b !== -1 && (_0x158f41.ignoreNextIndex = _0x43907b);
        }
        const _0x4e3582 = { ..._0x158f41 };
        _0x4e3582.voodoo = true;
        for (!_0xc930f6 && _0x348579 && (_0x4be2e2 ? _0x7712b8 ? _0x4be2e2[_0x7712b8] = _0x348579 : _0x4be2e2.append(_0x348579) : (_0x4be2e2 || _0x3686bb).append(_0x348579)), _0x4be2e2 && !_0x4be2e2.parentNode && (_0x487641 || _0x3686bb).append(_0x4be2e2); _0x1bc5a0 && _0x1bc5a0.offset < _0x353c67;) {
            ++_0x1ace25.i;
            (_0x4be2e2 || _0x3686bb).append(gs(_0x1ace25.text, _0x4e3582));
            _0x1bc5a0 = _0x3520dd[_0x1ace25.i + 1];
            ;
        }
        if (_0x1ace25.usedLength <= _0x353c67 ? (_0x1ace25.usedLength < _0x353c67 && ((_0x4be2e2 || _0x3686bb).append(_0x1ace25.text.slice(_0x1ace25.usedLength, _0x353c67)), _0x1ace25.usedLength = _0x353c67), _0x487641 = _0x3686bb, _0x1ace25.lastEntity = void 0) : _0x151f8a.length > _0x348579.length && _0x4be2e2 ? _0x487641 = _0x4be2e2 : _0x487641 = _0x3686bb, _0x158f41.voodoo) {
            return _0x3686bb;
        }
    }
    if (_0x1ace25.lastEntity && (_0x1ace25.usedLength = _0x1ace25.lastEntity.offset + _0x1ace25.lastEntity.length), _0x1ace25.usedLength < _0x35b967 && (_0x487641 || _0x3686bb).append(_0x1ace25.text.slice(_0x1ace25.usedLength)), (!_0x158f41.wrappingDraft || _0x158f41.customEmojiRenderer) && _0x3ffa4a.size) {
        let _0x1cb7b0 = _0x158f41.customEmojiRenderer;
        _0x1cb7b0 || (_0x1cb7b0 = ms.create(_0x158f41), _0x3686bb.prepend(_0x1cb7b0));
        const _0x42d221 = {
            addCustomEmojis: _0x3ffa4a,
            lazyLoadQueue: _0x158f41.lazyLoadQueue,
            onlyThumb: _0x158f41.wrappingDraft
        };
        ;
        ;
        ;
        ;
        const _0xfcda76 = _0x1cb7b0.add(_0x42d221);
        _0x158f41.loadPromises?.push(_0xfcda76);
    }
    return _0x51000a.size && Fc(_0x51000a), _0x3686bb.normalize(), _0x3686bb;
}
const yn = _0x578d75 => {
    const _0x2dd227 = document.createElement('span');
    return _0x2dd227.classList.add(_0x578d75 ? 'input-filler2' : 'input-filler'), _0x2dd227.textContent = V, _0x2dd227;
};
function kc(_0x5c9fae) {
    ;
    if (_0x5c9fae?.textContent !== V || _0x5c9fae?.getAttribute?.('contenteditable') === 'false') {
        if (!_0x5c9fae || _0x5c9fae.textContent !== V || _0x5c9fae.firstElementChild) {
            return 2;
        }
        if (_0x5c9fae.nodeType === _0x5c9fae.ELEMENT_NODE) {
            return 1;
        }
    }
    return 0;
}
function Fc(_0x44495c) {
    const _0x5799f3 = (_0x3c2cc6, _0x1628cb, _0x589fb6) => {
        const _0x5d5be9 = kc(_0x1628cb);
        _0x5d5be9 === 2 ? _0x3c2cc6[_0x589fb6](yn()) : _0x5d5be9 === 1 && _0x1628cb.appendChild(document.createTextNode(V));
    };
    for (const _0x2cb186 of _0x44495c) {
        const {
            previousSibling: _0xd12e38,
            nextSibling: _0x11889b
        } = _0x2cb186;
        _0x5799f3(_0x2cb186, _0xd12e38, 'before');
        _0x5799f3(_0x2cb186, _0x11889b, 'after');
        ;
    }
}
window.wrapRichText = gs;
function Sr(_0x4d9030, _0x36b00f = false, _0x55e0f7) {
    ;
    return _0x4d9030 ? (_0x55e0f7 ?? (_0x55e0f7 = Kf(_0x4d9030).filter(_0x508251 => _0x508251['_'] === 'messageEntityEmoji')), gs(_0x4d9030, {
        'entities': _0x55e0f7,
        'wrappingDraft': _0x36b00f
    })) : gs('');
}
function F3(_0x43e646, _0x2da013 = false) {
    ;
    return Sr(_0x43e646.text, _0x2da013, _0x43e646.entities);
}
function P3(_0x5a704a) {
    const _0x493dc2 = document.createElement('span');
    return rt(() => {
        ;
        _0x493dc2.replaceChildren(Sr(_0x5a704a.text, _0x5a704a.isDraft, _0x5a704a.entities));
    }), _0x493dc2;
}
async function yh(_0x5383f0) {
    const {
        peerId: _0x5d878c = I.myId,
        plainText: _0x2b3866,
        onlyFirstName: _0x1789b3,
        limitSymbols: _0x58556d,
        managers: _0x24adcd = I.managers,
        useManagers: _0x207e43,
        threadId: _0x535c01
    } = _0x5383f0;
    let _0x632fa4 = '';
    if (_0x5d878c.isUser()) {
        const _0x572d77 = _0x207e43 ? await _0x24adcd.appUsersManager.getUser(_0x5d878c.toUserId()) : re.getUser(_0x5d878c.toUserId());
        _0x572d77 && (_0x572d77.first_name && (_0x632fa4 += _0x572d77.first_name), _0x572d77.last_name && (!_0x1789b3 || !_0x632fa4) && (_0x632fa4 += ' ' + _0x572d77.last_name));
        _0x632fa4 ? _0x632fa4 = _0x632fa4.trim() : _0x632fa4 = !_0x572d77 || _0x572d77.pFlags.deleted ? ue.format(_0x1789b3 ? 'Deleted' : 'HiddenName', true) : jl(_0x572d77)[0] || '';
        ;
    } else {
        _0x535c01 && (_0x632fa4 = (await _0x24adcd.dialogsStorage.getForumTopic(_0x5d878c, _0x535c01))?.title || '');
        _0x632fa4 || (_0x632fa4 = (_0x207e43 ? await _0x24adcd.appChatsManager.getChat(_0x5d878c.toChatId()) : re.getChat(_0x5d878c.toChatId()))?.title || '');
        _0x1789b3 && (_0x632fa4 = _0x632fa4.split(' ')[0]);
        ;
    }
    return _0x58556d !== void 0 && (_0x632fa4 = Ul(_0x632fa4, _0x58556d, _0x58556d)), _0x2b3866 ? _0x632fa4 : Sr(_0x632fa4);
}
const _3 = 'assets/img/5e1b3a81.png', vh = 'assets/img/fa01fcb9.svg';
function In(_0x357335, _0x40a298, _0x46c5d2 = false) {
    const _0x4ee92e = new URL(location.href), _0x4d16ee = Object.entries(_0x40a298 || {}).filter(_0x52c77c => _0x52c77c[1]), _0x240a49 = Object.fromEntries(_0x4d16ee);
    if (_0x4d16ee.length) {
        const _0x3c8852 = new URLSearchParams();
        for (const _0x506b6c in _0x240a49)
            _0x3c8852.set(_0x506b6c, _0x240a49[_0x506b6c]);
        _0x4ee92e.hash = '#/im?' + _0x3c8852.toString();
    } else {
        _0x46c5d2 || (_0x4ee92e.hash = '');
    }
    return _0x357335 === 1 ? _0x4ee92e.searchParams.delete(fs) : _0x4ee92e.searchParams.set(fs, _0x357335 + ''), _0x4ee92e;
}
const a0_0x996240 = {};
a0_0x996240.rgb = true;
a0_0x996240.light = true;
a0_0x996240.lightFilled = true;
a0_0x996240.dark = true;
a0_0x996240.darkRgb = true;
;
const a0_0x4c0814 = {};
a0_0x4c0814.lightFilled = true;
a0_0x4c0814.rgb = true;
;
const a0_0x16b5e5 = {};
a0_0x16b5e5.rgb = true;
const a0_0x5dc721 = {};
a0_0x5dc721.rgb = true;
a0_0x5dc721.light = true;
a0_0x5dc721.dark = true;
;
const a0_0x1e3115 = {};
a0_0x1e3115.rgb = true;
const a0_0x4c9414 = {};
a0_0x4c9414.light = true;
a0_0x4c9414.lightFilled = true;
a0_0x4c9414.rgb = true;
;
const a0_0x44eb98 = {};
a0_0x44eb98.light = true;
a0_0x44eb98.lightFilled = true;
a0_0x44eb98.dark = true;
a0_0x44eb98.darkFilled = true;
;
const a0_0xeb5c4c = {};
a0_0xeb5c4c.light = true;
a0_0xeb5c4c.lightFilled = true;
a0_0xeb5c4c.dark = true;
a0_0xeb5c4c.darkFilled = true;
a0_0xeb5c4c.rgb = true;
;
const a0_0x30848f = {};
a0_0x30848f.lightFilled = true;
const a0_0x14bd40 = {};
a0_0x14bd40['primary-color'] = a0_0x996240;
a0_0x14bd40['message-out-primary-color'] = a0_0x4c0814;
a0_0x14bd40['surface-color'] = a0_0x16b5e5;
a0_0x14bd40['danger-color'] = a0_0x5dc721;
a0_0x14bd40['primary-text-color'] = a0_0x1e3115;
a0_0x14bd40['secondary-text-color'] = a0_0x4c9414;
a0_0x14bd40['message-background-color'] = a0_0x44eb98;
a0_0x14bd40['message-out-background-color'] = a0_0xeb5c4c;
a0_0x14bd40['saved-color'] = a0_0x30848f;
a0_0x14bd40['green-color'] = {};
;
const a0_0x3eec47 = {};
a0_0x3eec47['primary-color'] = '#3390ec';
a0_0x3eec47['message-out-primary-color'] = '#5CA853';
a0_0x3eec47['message-background-color'] = '#ffffff';
a0_0x3eec47['surface-color'] = '#ffffff';
a0_0x3eec47['danger-color'] = '#df3f40';
a0_0x3eec47['primary-text-color'] = '#000000';
a0_0x3eec47['secondary-text-color'] = '#707579';
a0_0x3eec47['saved-color'] = '#359AD4';
a0_0x3eec47['green-color'] = '#70b768';
;
const a0_0x3ec54c = {};
a0_0x3ec54c['primary-color'] = '#8774E1';
a0_0x3ec54c['message-out-primary-color'] = '#8774E1';
a0_0x3ec54c['message-background-color'] = '#212121';
a0_0x3ec54c['surface-color'] = '#212121';
a0_0x3ec54c['danger-color'] = '#ff595a';
a0_0x3ec54c['primary-text-color'] = '#ffffff';
a0_0x3ec54c['secondary-text-color'] = '#aaaaaa';
a0_0x3ec54c['saved-color'] = '#8774E1';
a0_0x3ec54c['green-color'] = '#5CC85E';
;
const a0_0x432a1c = {};
a0_0x432a1c.day = a0_0x3eec47;
a0_0x432a1c.night = a0_0x3ec54c;
;
const [Ar, mi] = vt(() => cr({})), Eh = (..._0x31b581) => {
        const _0x1d9d5a = _0x31b581[0];
        mi(..._0x31b581);
        I.managers.appStateManager.setByKey($f('settings', _0x1d9d5a), we(Ar[_0x1d9d5a]));
        ;
    }, Sa = (_0x30ff8b, _0x20f293) => {
        ;
        if (typeof _0x30ff8b == 'object') {
            mi(_0x30ff8b);
            return;
        }
        mi(_0x30ff8b, dr(_0x20f293));
    }, T3 = () => [
        Ar,
        Eh
    ], Aa = a0_0x14bd40, Rn = a0_0x432a1c;
class wh {
    constructor() {
        ;
        I.addEventListener('theme_change', _0x36b124 => {
            ;
            this.setTheme(typeof _0x36b124 == 'object' ? _0x36b124 : void 0);
        });
        I.addEventListener('theme_changed', () => {
            ;
            this.setWorkerThemeParams();
        });
        ;
    }
    ['setWorkerThemeParams']() {
        ;
        I.managers.apiManager.setThemeParams({
            '_': 'dataJSON',
            'data': JSON.stringify(this.getThemeParamsForWebView())
        });
    }
    get ['themeColorElem']() {
        ;
        return this['_themeColorElem'] !== void 0 ? this['_themeColorElem'] : this['_themeColorElem'] = document.head.querySelector('[name="theme-color"]') || null;
    }
    ['setThemeColor'](_0x2b296d = this.themeColor) {
        ;
        _0x2b296d || (_0x2b296d = this.isNight() ? '#212121' : '#ffffff');
        const _0x41ae91 = this.themeColorElem;
        _0x41ae91 && _0x41ae91.setAttribute('content', _0x2b296d);
    }
    ['setThemeListener']() {
        ;
        try {
            const _0x544750 = window.matchMedia('(prefers-color-scheme: dark)'), _0x1ee227 = () => {
                    ;
                    this.systemTheme = _0x544750.matches ? 'night' : 'day';
                    I.myId ? I.dispatchEvent('theme_change') : this.setTheme();
                    ;
                };
            'addEventListener' in _0x544750 ? _0x544750.addEventListener('change', _0x1ee227) : 'addListener' in _0x544750 && _0x544750.addListener(_0x1ee227);
            _0x1ee227();
            ;
        } catch {
        }
    }
    ['applyHighlightingColor']({
        hsla: _0x418077,
        element: _0x1a6b38 = document.documentElement
    } = {}) {
        ;
        if (!_0x418077) {
            _0x418077 = 'hsla(85.5319, 36.9171%, 40.402%, .4)';
            const _0x35c942 = this.getTheme();
            _0x35c942.settings?.highlightingColor && (_0x418077 = _0x35c942.settings.highlightingColor);
        }
        const _0x55a067 = Dc(_0x418077);
        _0x1a6b38.style.setProperty('--message-highlighting-color', _0x418077);
        _0x1a6b38.style.setProperty('--message-highlighting-color-rgb', _0x55a067.slice(0, 3).join(','));
        _0x1a6b38.style.setProperty('--message-highlighting-alpha', '' + _0x55a067[3] / 255);
        !Fe && _0x418077 && (this.themeColor = Uu(_0x418077));
        ;
    }
    ['_setTheme'](_0x2aabc2) {
        const _0x49decd = this.isNight();
        document.head.querySelector('[name="color-scheme"]')?.setAttribute('content', _0x49decd ? 'dark' : 'light');
        document.documentElement.classList.toggle('night', _0x49decd);
        this.setThemeColor();
        ;
        const _0x15157c = this.getTheme();
        this.applyTheme(_0x15157c);
        let _0x157b3b = this.styleElement;
        _0x157b3b || (_0x157b3b = this.styleElement = document.createElement('style'), document.head.append(_0x157b3b));
        const _0x24df90 = document.createElement('div');
        this.applyTheme(I.settings.themes.find(_0x503b01 => _0x503b01.name === 'night'), _0x24df90, true);
        _0x157b3b.textContent = '.night {' + _0x24df90.style.cssText + '}';
        this.applyHighlightingColor();
        !_0x2aabc2 && I.dispatchEventSingle('theme_changed');
        ;
    }
    ['setTheme'](_0x591db5) {
        ;
        if (!('startViewTransition' in document) || !this.applied) {
            const _0x355521 = !this.applied, _0x50f843 = this.applied;
            this.applied = true;
            this['_setTheme'](_0x355521);
            _0x50f843 || this.setWorkerThemeParams();
            ;
            return;
        }
        ot.isAvailable('animations') || (_0x591db5 = void 0);
        const _0x2b96cd = !this.isNight();
        _0x591db5 && (document.documentElement.classList.add('no-view-transition'), document.documentElement.classList.toggle('reverse', _0x2b96cd), document.documentElement.offsetLeft);
        const _0x27fbc9 = document.startViewTransition(() => {
            ;
            this['_setTheme']();
        });
        if (!_0x591db5) {
            return;
        }
        const {
                x: _0x535d6f,
                y: _0x5013fd
            } = _0x591db5, _0x1817eb = Math.hypot(Math.max(_0x535d6f, hs.width - _0x535d6f), Math.max(_0x5013fd, hs.height - _0x5013fd));
        _0x27fbc9.ready.then(() => {
            ;
            const _0x59d082 = {
                clipPath: [
                    'circle(0 at ' + _0x535d6f + 'px ' + _0x5013fd + 'px)',
                    'circle(' + _0x1817eb + 'px at ' + _0x535d6f + 'px ' + _0x5013fd + 'px)'
                ]
            };
            ;
            const _0x32ef4b = {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-' + (_0x2b96cd ? 'old' : 'new') + '(root)',
                direction: _0x2b96cd ? 'reverse' : 'normal'
            };
            ;
            ;
            ;
            ;
            document.documentElement.animate(_0x59d082, _0x32ef4b);
            ;
        });
        _0x27fbc9.finished.finally(() => {
            ;
            document.documentElement.classList.remove('no-view-transition', 'reverse');
        });
        ;
    }
    async ['switchTheme'](_0x49a945, _0x410296) {
        ;
        await I.managers.appStateManager.setByKey($f('settings', 'theme'), _0x49a945);
        I.dispatchEvent('theme_change', _0x410296);
        ;
    }
    ['isNight']() {
        ;
        return this.getTheme().name === 'night';
    }
    ['getTheme'](_0x266ace = I.settings.theme === 'system' ? this.systemTheme : I.settings.theme) {
        ;
        return I.settings.themes.find(_0x15ee23 => _0x15ee23.name === _0x266ace);
    }
    ['bindColorApplier'](_0x462637) {
        const _0x43aaeb = new Set();
        return {
            'applyAppColor': _0x427fc9 => (_0x43aaeb.add(_0x427fc9.name), this.applyAppColor({
                ..._0x427fc9,
                ..._0x462637
            })),
            'finalize': () => {
                const _0x5c6bbf = _0x462637.isNight;
                for (const _0x1c56e0 in Aa)
                    _0x43aaeb.has(_0x1c56e0) || this.applyAppColor({
                        'name': _0x1c56e0,
                        'hex': Rn[_0x5c6bbf ? 'night' : 'day'][_0x1c56e0],
                        ..._0x462637
                    });
            }
        };
    }
    ['applyAppColor']({
        name: _0x434131,
        hex: _0x238695,
        element: _0x15d108,
        lightenAlpha: _0x2bfdf1 = 0.08,
        darkenAlpha: _0x436e14 = _0x2bfdf1,
        mixColor: _0x48c401,
        isNight: _0x2f809b = this.isNight(),
        saveToCache: _0x61edb2
    }) {
        const _0x20a5b6 = Aa[_0x434131], _0x57d55e = et(_0x238695), _0x372bd0 = ci(..._0x57d55e);
        _0x48c401 ?? (_0x48c401 = et(Rn[_0x2f809b ? 'night' : 'day']['surface-color']));
        const _0x2f0b74 = { ..._0x372bd0 };
        _0x2f0b74.l = _0x372bd0.l - _0x436e14 * 100;
        const _0x4f3265 = Tn(_0x57d55e, _0x48c401, _0x2bfdf1), _0x23c332 = _0x2f0b74, _0x2b8985 = [
                [
                    _0x434131,
                    _0x238695
                ],
                _0x20a5b6.rgb && [
                    _0x434131 + '-rgb',
                    _0x57d55e.join(',')
                ],
                _0x20a5b6.light && [
                    'light-' + _0x434131,
                    'rgba(' + _0x57d55e[0] + ', ' + _0x57d55e[1] + ', ' + _0x57d55e[2] + ', ' + _0x2bfdf1 + ')'
                ],
                _0x20a5b6.lightFilled && [
                    'light-filled-' + _0x434131,
                    Ls(_0x4f3265)
                ],
                _0x20a5b6.dark && [
                    'dark-' + _0x434131,
                    'hsl(' + _0x23c332.h + ', ' + _0x23c332.s + '%, ' + _0x23c332.l + '%)'
                ]
            ];
        _0x61edb2 ?? (_0x61edb2 = _0x15d108 === document.documentElement);
        _0x2b8985.filter(Boolean).forEach(([_0x4b69a9, _0x25d85a]) => {
            ;
            _0x15d108.style.setProperty('--' + _0x4b69a9, _0x25d85a);
            _0x61edb2 && St.setPropertyCache(_0x4b69a9, _0x25d85a, _0x2f809b);
            ;
        });
        ;
    }
    async ['applyNewTheme'](_0x482f6e) {
        const _0x51e05d = this.isNightTheme(_0x482f6e), _0x150e9e = this.getTheme(), _0x487df3 = I.settings.themes, _0x50ea86 = _0x482f6e.settings.find(_0x28003f => _0x28003f.base_theme['_'] === (_0x51e05d ? 'baseThemeNight' : 'baseThemeClassic')), _0x3d1511 = {
                ..._0x482f6e,
                'name': _0x150e9e.name,
                'settings': {
                    ..._0x50ea86,
                    'highlightingColor': ''
                }
            };
        await this.AppBackgroundTab.setBackgroundDocument(_0x50ea86.wallpaper, _0x3d1511.settings);
        _0x487df3[_0x487df3.indexOf(_0x150e9e)] = _0x3d1511;
        await I.managers.appStateManager.setByKey($f('settings', 'themes'), I.settings.themes);
        I.dispatchEvent('theme_change');
        ;
    }
    ['isNightTheme'](_0x40c966) {
        ;
        return _0x40c966.name === 'night' || this.isNight();
    }
    ['getThemeSettings'](_0x47f6b0, _0x3beb21) {
        ;
        return _0x3beb21 ?? (_0x3beb21 = this.isNightTheme(_0x47f6b0)), Array.isArray(_0x47f6b0.settings) ? _0x47f6b0.settings.find(_0x3df7e1 => _0x3df7e1.base_theme['_'] === (_0x3beb21 ? 'baseThemeNight' : 'baseThemeClassic')) : _0x47f6b0.settings;
    }
    ['applyTheme'](_0x2b1db0, _0x21b999 = document.documentElement, _0x1517de) {
        const _0xba5415 = this.isNightTheme(_0x2b1db0), _0x261a75 = this.getThemeSettings(_0x2b1db0, _0xba5415), _0x42a3d0 = Rn[_0xba5415 ? 'night' : 'day'];
        let _0x224752 = pt(...et(_0x42a3d0['primary-color'])), _0x37caf2 = pt(...wf(_0x261a75.accent_color));
        const _0x148069 = Wu(_0x224752, _0x37caf2, et(_0x42a3d0['primary-color']), !_0xba5415), _0x5ecfa4 = Ls(_0x148069), {
                applyAppColor: _0x4a74e6,
                finalize: _0x3df202
            } = this.bindColorApplier({
                'element': _0x21b999,
                'isNight': _0xba5415,
                'saveToCache': _0x1517de
            }), _0x1d6da1 = {
                name: 'primary-color',
                hex: _0x5ecfa4,
                darkenAlpha: 0.04
            };
        ;
        ;
        ;
        ;
        const _0x3ab51b = {
            name: 'saved-color',
            hex: _0x5ecfa4,
            lightenAlpha: 0.64,
            mixColor: [
                255,
                255,
                255
            ]
        };
        ;
        ;
        ;
        ;
        ;
        if (_0x4a74e6(_0x1d6da1), _0x4a74e6(_0x3ab51b), !_0x261a75.message_colors?.length) {
            return;
        }
        const _0x35d9b9 = _0xba5415 ? 1 : 0.12, _0x4ef468 = et(_0x42a3d0['message-out-primary-color']);
        _0x224752 = pt(..._0x4ef468);
        const _0x35d2ea = Tn(_0x4ef468, et(_0x42a3d0['surface-color']), _0x35d9b9);
        let _0x37865f = wf(_0x261a75.message_colors[0]);
        if (_0x261a75.message_colors.length > 1) {
            _0x261a75.message_colors.slice(1).forEach(_0x480b80 => {
                _0x37865f = ju(_0x37865f, wf(_0x480b80));
            });
            _0x37865f = Hu(_0x224752, _0x35d2ea, _0x37865f);
        }
        _0x37caf2 = pt(..._0x37865f);
        ;
        const _0x431e25 = _0x261a75.outbox_accent_color !== void 0 && pt(...wf(_0x261a75.outbox_accent_color));
        let _0x15f9a0 = Tn(_0x37865f, et(_0x42a3d0['surface-color']), _0x35d9b9);
        if (!_0xba5415) {
            const _0xdd234f = ci(..._0x15f9a0);
            _0xdd234f.s = Math.min(_0xdd234f.s + (_0xba5415 ? 8 : 63), 100);
            _0x15f9a0 = wc(_0xdd234f.h, _0xdd234f.s, _0xdd234f.l, _0xdd234f.a).slice(0, 3);
            ;
        }
        _0x4a74e6({
            'name': 'message-out-background-color',
            'hex': Ls(_0x15f9a0),
            'lightenAlpha': _0x35d9b9
        });
        _0x4a74e6({
            'name': 'message-out-primary-color',
            'hex': _0xba5415 ? '#ffffff' : Ls(_0x431e25 ? wr(..._0x431e25) : _0x37865f),
            'mixColor': _0x15f9a0
        });
        _0x3df202();
        ;
    }
    ['getThemeParamsForWebView']() {
        const _0x329b5a = {
            bg_color: 'surface-color',
            button_color: 'primary-color',
            button_text_color: '#ffffff',
            hint_color: 'secondary-text-color',
            link_color: 'link-color',
            secondary_bg_color: 'background-color-true',
            text_color: 'primary-text-color',
            header_bg_color: 'surface-color',
            accent_text_color: 'primary-color',
            section_bg_color: 'surface-color',
            section_header_text_color: 'primary-color',
            subtitle_text_color: 'secondary-text-color',
            destructive_text_color: 'danger-color'
        };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        const _0x5ac634 = _0x329b5a, _0x3f0bab = { _0x255797: _0x55d531[0] === '#' ? _0x55d531 : St.getProperty(_0x55d531) };
        for (const _0x255797 in _0x5ac634) {
            const _0x55d531 = _0x5ac634[_0x255797];
            ;
        }
        return _0x3f0bab;
    }
}
const Cr = new wh();
N && (N.themeController = Cr);
const Ks = [
        ['#CC5049'],
        ['#D67722'],
        ['#955CDB'],
        ['#40A920'],
        ['#309EBA'],
        ['#368AD1'],
        ['#C7508B']
    ], On = [
        'red',
        'orange',
        'violet',
        'green',
        'cyan',
        'blue',
        'pink'
    ], Dh = Ks;
function Pc(_0x2927a0) {
    ;
    return Math.abs(+_0x2927a0) % 7;
}
function Sh(_0x21c9a2) {
    let _0x181efe = _c(_0x21c9a2);
    if (_0x181efe === -1) {
        return;
    }
    let _0x1f12b9 = On[_0x181efe];
    if (!_0x1f12b9) {
        const _0x77f58e = Ks[_0x181efe];
        if (!_0x77f58e) {
            return On[Pc(_0x21c9a2.id)];
        }
        const _0x3e6fd3 = Ac(_0x77f58e[0]).h;
        _0x3e6fd3 >= 345 || _0x3e6fd3 < 29 ? _0x181efe = 0 : _0x3e6fd3 < 67 ? _0x181efe = 1 : _0x3e6fd3 < 140 ? _0x181efe = 3 : _0x3e6fd3 < 199 ? _0x181efe = 4 : _0x3e6fd3 < 234 ? _0x181efe = 5 : _0x3e6fd3 < 301 ? _0x181efe = 2 : _0x181efe = 6;
        _0x1f12b9 = On[_0x181efe];
        ;
    }
    return _0x1f12b9;
}
function _c(_0x27bf13) {
    ;
    return _0x27bf13 ? _0x27bf13.color?.color ?? Pc(_0x27bf13.id) : -1;
}
function Ah(_0x4c99b9) {
    const _0x40df19 = _c(_0x4c99b9);
    return Ks[_0x40df19] ?? [];
}
function Ca(_0xaaa488, _0x515512, _0x49666c) {
    ;
    for (const _0x15c61c of _0x515512) {
        const _0x18269c = (_0x49666c ? _0x15c61c.dark_colors : _0x15c61c.colors)?.colors;
        if (!_0x18269c?.length) {
            continue;
        }
        const _0x2a71b9 = _0x18269c.map(_0x44db63 => Dr(_0x44db63));
        _0xaaa488[_0x15c61c.color_id] = _0x2a71b9;
    }
    return _0xaaa488;
}
function ka(_0x27874f, _0x3d67c5) {
    const _0x214ee8 = _0x27874f.length;
    return _0x3d67c5 || (_0x3d67c5 = 5), _0x214ee8 !== 3 && (_0x27874f = _0x27874f.slice().reverse()), 'repeating-linear-gradient(-45deg, ' + _0x27874f.map((_0x59731d, _0x184dcf, _0x36515b) => {
        const _0x8f7f6c = _0x184dcf * _0x3d67c5 + 'px', _0x5b9da2 = (_0x184dcf + 1) * _0x3d67c5 + 'px';
        return [
            _0x59731d + ' ' + _0x8f7f6c,
            _0x59731d + ' ' + _0x5b9da2
        ].join(', ');
    }).join(', ') + ')';
}
function L3(_0x2cd854, _0x44e93b) {
    ;
    let _0x51c839 = Ca(Dh.slice(), _0x2cd854);
    Cr.isNight() && (_0x51c839 = Ca(_0x51c839, _0x2cd854, true));
    Ks.splice(0, Ks.length, ..._0x51c839);
    _0x51c839.forEach((_0x5883f1, _0x276d10) => {
        ;
        const _0xe11e2b = '--peer-' + _0x276d10, _0x5cad93 = _0xe11e2b + '-border-background', _0x13992e = _0xe11e2b + '-color-rgb';
        if (document.documentElement.style.setProperty(_0x13992e, et(_0x5883f1[0]).join(',')), _0x5883f1.length > 1) {
            const _0x1e662a = ka(_0x5883f1);
            document.documentElement.style.setProperty(_0x5cad93, _0x1e662a);
        } else {
            document.documentElement.style.removeProperty(_0x5cad93);
        }
    });
    ;
    const _0x3fa638 = Ah(_0x44e93b);
    [
        [
            '--peer-border-background',
            '--primary-color',
            _0x3fa638.length
        ],
        [
            '--message-out-peer-border-background',
            '--message-out-primary-color',
            _0x3fa638.length
        ],
        [
            '--message-out-peer-1-border-background',
            '--message-out-primary-color',
            1
        ],
        [
            '--message-out-peer-2-border-background',
            '--message-out-primary-color',
            2
        ],
        [
            '--message-out-peer-3-border-background',
            '--message-out-primary-color',
            3
        ],
        [
            '--message-empty-peer-1-border-background',
            '--message-empty-primary-color',
            1
        ],
        [
            '--message-empty-peer-2-border-background',
            '--message-empty-primary-color',
            2
        ],
        [
            '--message-empty-peer-3-border-background',
            '--message-empty-primary-color',
            3
        ]
    ].forEach(([_0x1c5ec0, _0x4062f4, _0x262932]) => {
        ;
        let _0x22ff4a;
        if (_0x262932 > 1) {
            const _0x2743ed = [
                'rgba(var(' + _0x4062f4 + '-rgb), .4)',
                'rgba(var(' + _0x4062f4 + '-rgb), .2)',
                'var(' + _0x4062f4 + ')'
            ];
            _0x262932 === 2 && _0x2743ed.shift();
            _0x22ff4a = ka(_0x2743ed);
            ;
        } else {
            _0x22ff4a = 'var(' + _0x4062f4 + ')';
        }
        document.documentElement.style.setProperty(_0x1c5ec0, _0x22ff4a);
    });
}
function Fa(_0x6985e7) {
    ;
    return {
        '_': 'messageEntityEmoji',
        'offset': 0,
        'length': _0x6985e7.length,
        'unicode': jo(_0x6985e7).join('-').replace(/-?fe0f/g, '')
    };
}
const Pa = new RegExp('(^' + Xa + ')');
function Ch(_0x18be13, _0x284cda = false) {
    const _0x156019 = (_0x18be13 || '').trim().split(' '), _0x430cd7 = {
            text: '',
            entities: []
        };
    ;
    ;
    ;
    if (!_0x156019[0]) {
        return _0x430cd7;
    }
    const _0x5e50bd = [], _0x4a2144 = _0x156019[0].match(Pa), _0x487d7c = _0x4a2144?.[0] || _0x156019[0][0];
    _0x4a2144 && _0x5e50bd.push(Fa(_0x487d7c));
    const _0x3bb9b8 = _0x156019.length, _0x951c21 = {
            text: _0x487d7c,
            entities: _0x5e50bd
        };
    ;
    ;
    ;
    if (_0x284cda || _0x3bb9b8 === 1) {
        return _0x951c21;
    }
    const _0xbd1813 = _0x156019[_0x3bb9b8 - 1].match(Pa), _0x23bc44 = _0xbd1813?.[0] || _0x156019[_0x3bb9b8 - 1][0];
    return _0xbd1813 && _0x5e50bd.push({
        ...Fa(_0x23bc44),
        'offset': _0x487d7c.length
    }), {
        'text': _0x487d7c + _0x23bc44,
        'entities': _0x5e50bd
    };
}
function Tc(_0x453e76, _0x305ae, _0x100482, _0x40da53, _0x55bb27, _0x4a80d7) {
    const _0x31756a = _0x453e76.canvas.dpr;
    _0x31756a && (_0x305ae *= _0x31756a, _0x100482 *= _0x31756a, _0x40da53 *= _0x31756a);
    _0x453e76.beginPath();
    _0x453e76.arc(_0x305ae, _0x100482, _0x40da53, 0, 2 * Math.PI, false);
    _0x453e76.closePath();
    _0x55bb27 && _0x453e76.fill();
    ;
}
function x3(_0x4e5adc, _0x13a3ab, _0xcba567, _0x17fed2, _0x3c626a, _0x17768b) {
    return Tc(_0x4e5adc, _0x13a3ab + _0x17fed2, _0xcba567 + _0x17fed2, _0x17fed2, _0x3c626a);
}
let fe, _e, Nn;
async function kh(_0x402547, _0x2a3421, _0xfe9a82) {
    const _0x4bf831 = await _0x402547.appPeersManager.getPeerPhoto(_0x2a3421);
    if (_0x4bf831) {
        return await _0x402547.appAvatarsManager.loadAvatar(_0x2a3421, _0x4bf831, 'photo_small');
    }
    if (fe) {
        _e.clearRect(0, 0, fe.width, fe.height);
    } else {
        fe = document.createElement('canvas');
        _e = fe.getContext('2d');
        ;
        ;
        fe.dpr = 1;
        fe.width = fe.height = 54;
        Nn = {};
        ;
    }
    const _0x16c6d3 = await _0x402547.appPeersManager.getPeer(_0x2a3421), _0x2a573e = Sh(_0x16c6d3);
    let _0xd6beb0 = Nn[_0x2a573e];
    if (!_0xd6beb0) {
        _0xd6beb0 = Nn[_0x2a573e] = _e.createLinearGradient(fe.width / 2, 0, fe.width / 2, fe.height);
        const _0x4f7968 = St.getProperty('peer-avatar-' + _0x2a573e + '-top'), _0x32f35e = St.getProperty('peer-avatar-' + _0x2a573e + '-bottom');
        _0xd6beb0.addColorStop(0, _0x4f7968);
        _0xd6beb0.addColorStop(1, _0x32f35e);
        ;
    }
    _e.fillStyle = _0xd6beb0;
    Tc(_e, fe.width / 2, fe.height / 2, fe.width / 2);
    _e.fill();
    ;
    const _0x3a7945 = 20 * fe.dpr, _0x1e7756 = Ch(_0xfe9a82);
    return _e.font = '700 ' + _0x3a7945 + 'px ' + za, _e.textBaseline = 'middle', _e.textAlign = 'center', _e.fillStyle = 'white', _e.fillText(_0x1e7756.text, fe.width / 2, fe.height * (window.devicePixelRatio > 1, 0.5625)), fe.toDataURL();
}
const a0_0x4ab5ee = {};
a0_0x4ab5ee.className = 'class';
a0_0x4ab5ee.htmlFor = 'for';
;
const a0_0x3d3190 = {};
a0_0x3d3190['$'] = 'formNoValidate';
a0_0x3d3190.BUTTON = 1;
a0_0x3d3190.INPUT = 1;
;
const a0_0x1517d6 = {};
a0_0x1517d6['$'] = 'isMap';
a0_0x1517d6.IMG = 1;
;
const a0_0x37c684 = {};
a0_0x37c684['$'] = 'noModule';
a0_0x37c684.SCRIPT = 1;
;
const a0_0x14ff4f = {};
a0_0x14ff4f['$'] = 'playsInline';
a0_0x14ff4f.VIDEO = 1;
;
const a0_0x2511b3 = {};
a0_0x2511b3['$'] = 'readOnly';
a0_0x2511b3.INPUT = 1;
a0_0x2511b3.TEXTAREA = 1;
;
const a0_0x387d2e = {};
a0_0x387d2e.class = 'className';
a0_0x387d2e.formnovalidate = a0_0x3d3190;
a0_0x387d2e.ismap = a0_0x1517d6;
a0_0x387d2e.nomodule = a0_0x37c684;
a0_0x387d2e.playsinline = a0_0x14ff4f;
a0_0x387d2e.readonly = a0_0x2511b3;
;
const Fh = [
        'allowfullscreen',
        'async',
        'autofocus',
        'autoplay',
        'checked',
        'controls',
        'default',
        'disabled',
        'formnovalidate',
        'hidden',
        'indeterminate',
        'ismap',
        'loop',
        'multiple',
        'muted',
        'nomodule',
        'novalidate',
        'open',
        'playsinline',
        'readonly',
        'required',
        'reversed',
        'seamless',
        'selected'
    ], Ph = new Set([
        'className',
        'value',
        'readOnly',
        'formNoValidate',
        'isMap',
        'noModule',
        'playsInline',
        ...Fh
    ]), _h = new Set([
        'innerHTML',
        'textContent',
        'innerText',
        'children'
    ]), Th = Object.assign(Object.create(null), a0_0x4ab5ee), Lh = Object.assign(Object.create(null), a0_0x387d2e);
function xh(_0x34461d, _0x216c2c) {
    const _0x556f71 = Lh[_0x34461d];
    return typeof _0x556f71 == 'object' ? _0x556f71[_0x216c2c] ? _0x556f71['$'] : void 0 : _0x556f71;
}
const a0_0x2b63e1 = {};
a0_0x2b63e1.xlink = 'http://www.w3.org/1999/xlink';
a0_0x2b63e1.xml = 'http://www.w3.org/XML/1998/namespace';
;
const Mh = new Set([
        'beforeinput',
        'click',
        'dblclick',
        'contextmenu',
        'focusin',
        'focusout',
        'input',
        'keydown',
        'keyup',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'pointerdown',
        'pointermove',
        'pointerout',
        'pointerover',
        'pointerup',
        'touchend',
        'touchmove',
        'touchstart'
    ]), Ih = new Set([
        'altGlyph',
        'altGlyphDef',
        'altGlyphItem',
        'animate',
        'animateColor',
        'animateMotion',
        'animateTransform',
        'circle',
        'clipPath',
        'color-profile',
        'cursor',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'font',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-src',
        'font-face-uri',
        'foreignObject',
        'g',
        'glyph',
        'glyphRef',
        'hkern',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'metadata',
        'missing-glyph',
        'mpath',
        'path',
        'b8ed37d7',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'set',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'tref',
        'tspan',
        'use',
        'view',
        'vkern'
    ]), Rh = a0_0x2b63e1;
function Oh(_0x57fc2f, _0x2b828f, _0x43017e) {
    ;
    let _0x1392f0 = _0x43017e.length, _0x419c5f = _0x2b828f.length, _0x429de0 = _0x1392f0, _0xeb4c9f = 0, _0x2c35db = 0, _0x42bcd5 = _0x2b828f[_0x419c5f - 1].nextSibling, _0x2821cf = null;
    for (; _0xeb4c9f < _0x419c5f || _0x2c35db < _0x429de0;) {
        if (_0x2b828f[_0xeb4c9f] === _0x43017e[_0x2c35db]) {
            _0xeb4c9f++;
            _0x2c35db++;
            ;
            continue;
        }
        for (; _0x2b828f[_0x419c5f - 1] === _0x43017e[_0x429de0 - 1];) {
            _0x419c5f--;
            _0x429de0--;
            ;
        }
        if (_0x419c5f === _0xeb4c9f) {
            const _0x209f51 = _0x429de0 < _0x1392f0 ? _0x2c35db ? _0x43017e[_0x2c35db - 1].nextSibling : _0x43017e[_0x429de0 - _0x2c35db] : _0x42bcd5;
            for (; _0x2c35db < _0x429de0;) {
                _0x57fc2f.insertBefore(_0x43017e[_0x2c35db++], _0x209f51);
            }
        } else {
            if (_0x429de0 === _0x2c35db) {
                for (; _0xeb4c9f < _0x419c5f;) {
                    (!_0x2821cf || !_0x2821cf.has(_0x2b828f[_0xeb4c9f])) && _0x2b828f[_0xeb4c9f].remove();
                    _0xeb4c9f++;
                    ;
                }
            } else {
                if (_0x2b828f[_0xeb4c9f] === _0x43017e[_0x429de0 - 1] && _0x43017e[_0x2c35db] === _0x2b828f[_0x419c5f - 1]) {
                    const _0x5446b1 = _0x2b828f[--_0x419c5f].nextSibling;
                    _0x57fc2f.insertBefore(_0x43017e[_0x2c35db++], _0x2b828f[_0xeb4c9f++].nextSibling);
                    _0x57fc2f.insertBefore(_0x43017e[--_0x429de0], _0x5446b1);
                    _0x2b828f[_0x419c5f] = _0x43017e[_0x429de0];
                    ;
                } else {
                    if (!_0x2821cf) {
                        _0x2821cf = new Map();
                        let _0x3aa355 = _0x2c35db;
                        for (; _0x3aa355 < _0x429de0;) {
                            _0x2821cf.set(_0x43017e[_0x3aa355], _0x3aa355++);
                        }
                    }
                    const _0x24f47d = _0x2821cf.get(_0x2b828f[_0xeb4c9f]);
                    if (_0x24f47d != null) {
                        if (_0x2c35db < _0x24f47d && _0x24f47d < _0x429de0) {
                            let _0x4b5233 = _0xeb4c9f, _0x3aabf8 = 1, _0x34a640;
                            for (; ++_0x4b5233 < _0x419c5f && _0x4b5233 < _0x429de0 && !((_0x34a640 = _0x2821cf.get(_0x2b828f[_0x4b5233])) == null || _0x34a640 !== _0x24f47d + _0x3aabf8);) {
                                _0x3aabf8++;
                            }
                            if (_0x3aabf8 > _0x24f47d - _0x2c35db) {
                                const _0xa3611a = _0x2b828f[_0xeb4c9f];
                                for (; _0x2c35db < _0x24f47d;) {
                                    _0x57fc2f.insertBefore(_0x43017e[_0x2c35db++], _0xa3611a);
                                }
                            } else {
                                _0x57fc2f.replaceChild(_0x43017e[_0x2c35db++], _0x2b828f[_0xeb4c9f++]);
                            }
                        } else {
                            _0xeb4c9f++;
                        }
                    } else {
                        _0x2b828f[_0xeb4c9f++].remove();
                    }
                }
            }
        }
    }
}
const _a = '_$DX_DELEGATE';
function gi(_0xad0230, _0x476e3e, _0x3192a6, _0x2050a2 = {}) {
    ;
    let _0xd2ee8c;
    return vt(_0x1e32ef => {
        ;
        _0xd2ee8c = _0x1e32ef;
        _0x476e3e === document ? _0xad0230() : bi(_0x476e3e, _0xad0230(), _0x476e3e.firstChild ? null : void 0, _0x3192a6);
        ;
    }, _0x2050a2.owner), () => {
        ;
        _0xd2ee8c();
        _0x476e3e.textContent = '';
        ;
    };
}
function M3(_0x2bd60e, _0x1a8443, _0x3dd0ba) {
    ;
    let _0x5b7e20;
    const _0x5c665b = () => {
            ;
            const _0x31a021 = document.createElement('template');
            return _0x31a021.innerHTML = _0x2bd60e, _0x3dd0ba ? _0x31a021.content.firstChild.firstChild : _0x31a021.content.firstChild;
        }, _0x1ffd47 = _0x1a8443 ? () => he(() => document.importNode(_0x5b7e20 || (_0x5b7e20 = _0x5c665b()), true)) : () => (_0x5b7e20 || (_0x5b7e20 = _0x5c665b())).cloneNode(true);
    return _0x1ffd47.cloneNode = _0x1ffd47, _0x1ffd47;
}
function Nh(_0x5a89b0, _0x18c051 = window.document) {
    const _0xb26ed8 = _0x18c051[_a] || (_0x18c051[_a] = new Set());
    for (let _0x2a52e3 = 0, _0x29244e = _0x5a89b0.length; _0x2a52e3 < _0x29244e; _0x2a52e3++) {
        const _0x1f5ca6 = _0x5a89b0[_0x2a52e3];
        _0xb26ed8.has(_0x1f5ca6) || (_0xb26ed8.add(_0x1f5ca6), _0x18c051.addEventListener(_0x1f5ca6, qh));
    }
}
function pi(_0xa0dcbb, _0x186f85, _0x32f0b1) {
    ;
    _0x32f0b1 == null ? _0xa0dcbb.removeAttribute(_0x186f85) : _0xa0dcbb.setAttribute(_0x186f85, _0x32f0b1);
}
function Bh(_0x180680, _0x3b30a2, _0x55568c, _0x97d959) {
    ;
    _0x97d959 == null ? _0x180680.removeAttributeNS(_0x3b30a2, _0x55568c) : _0x180680.setAttributeNS(_0x3b30a2, _0x55568c, _0x97d959);
}
function Uh(_0x55c160, _0x10fd5b) {
    ;
    _0x10fd5b == null ? _0x55c160.removeAttribute('class') : _0x55c160.className = _0x10fd5b;
}
function jh(_0x293769, _0xe5875, _0x2564c6, _0x14fc5c) {
    ;
    if (_0x14fc5c) {
        Array.isArray(_0x2564c6) ? (_0x293769['$$' + _0xe5875] = _0x2564c6[0], _0x293769['$$' + _0xe5875 + 'Data'] = _0x2564c6[1]) : _0x293769['$$' + _0xe5875] = _0x2564c6;
    } else {
        if (Array.isArray(_0x2564c6)) {
            const _0x49526b = _0x2564c6[0];
            _0x293769.addEventListener(_0xe5875, _0x2564c6[0] = _0x58aca4 => _0x49526b.call(_0x293769, _0x2564c6[1], _0x58aca4));
        } else {
            _0x293769.addEventListener(_0xe5875, _0x2564c6);
        }
    }
}
function Hh(_0x50eb52, _0x500865, _0x34e095 = {}) {
    const _0x38470f = Object.keys(_0x500865 || {}), _0x43276e = Object.keys(_0x34e095);
    let _0x44051c, _0x1e02be;
    for (_0x44051c = 0, _0x1e02be = _0x43276e.length; _0x44051c < _0x1e02be; _0x44051c++) {
        const _0x5215b2 = _0x43276e[_0x44051c];
        !_0x5215b2 || _0x5215b2 === 'undefined' || _0x500865[_0x5215b2] || (Ta(_0x50eb52, _0x5215b2, false), delete _0x34e095[_0x5215b2]);
    }
    for (_0x44051c = 0, _0x1e02be = _0x38470f.length; _0x44051c < _0x1e02be; _0x44051c++) {
        const _0x32e0f6 = _0x38470f[_0x44051c], _0x33b1e7 = !!_0x500865[_0x32e0f6];
        !_0x32e0f6 || _0x32e0f6 === 'undefined' || _0x34e095[_0x32e0f6] === _0x33b1e7 || !_0x33b1e7 || (Ta(_0x50eb52, _0x32e0f6, true), _0x34e095[_0x32e0f6] = _0x33b1e7);
    }
    return _0x34e095;
}
function Wh(_0x1cb70d, _0x5549bf, _0x20efdc) {
    ;
    if (!_0x5549bf) {
        return _0x20efdc ? pi(_0x1cb70d, 'style') : _0x5549bf;
    }
    const _0x28512a = _0x1cb70d.style;
    if (typeof _0x5549bf == 'string') {
        return _0x28512a.cssText = _0x5549bf;
    }
    typeof _0x20efdc == 'string' && (_0x28512a.cssText = _0x20efdc = void 0);
    _0x20efdc || (_0x20efdc = {});
    _0x5549bf || (_0x5549bf = {});
    ;
    let _0x7c09e7, _0x4cc878;
    for (_0x4cc878 in _0x20efdc)
        _0x5549bf[_0x4cc878] == null && _0x28512a.removeProperty(_0x4cc878), delete _0x20efdc[_0x4cc878];
    for (_0x4cc878 in _0x5549bf)
        _0x7c09e7 = _0x5549bf[_0x4cc878], _0x7c09e7 !== _0x20efdc[_0x4cc878] && (_0x28512a.setProperty(_0x4cc878, _0x7c09e7), _0x20efdc[_0x4cc878] = _0x7c09e7);
    return _0x20efdc;
}
function Vh(_0xf5b6ea, _0x1a02df = {}, _0x3b60ab, _0x466667) {
    const _0x3eeffe = {};
    return _0x466667 || Tt(() => _0x3eeffe.children = Js(_0xf5b6ea, _0x1a02df.children, _0x3eeffe.children)), Tt(() => _0x1a02df.ref && _0x1a02df.ref(_0xf5b6ea)), Tt(() => zh(_0xf5b6ea, _0x1a02df, _0x3b60ab, true, _0x3eeffe, true)), _0x3eeffe;
}
function I3(_0x571e39, _0x4a7061, _0x2bf942) {
    return he(() => _0x571e39(_0x4a7061, _0x2bf942));
}
function bi(_0x5e030a, _0x2e0ef2, _0x80496c, _0x150038) {
    ;
    if (_0x80496c !== void 0 && !_0x150038 && (_0x150038 = []), typeof _0x2e0ef2 != 'function') {
        return Js(_0x5e030a, _0x2e0ef2, _0x150038, _0x80496c);
    }
    Tt(_0x51df44 => Js(_0x5e030a, _0x2e0ef2(), _0x51df44, _0x80496c), _0x150038);
}
function zh(_0x509df6, _0x1c25f8, _0x473f98, _0x994e1a, _0x311cec = {}, _0x22506d = false) {
    ;
    _0x1c25f8 || (_0x1c25f8 = {});
    for (const _0x88f84d in _0x311cec)
        if (!(_0x88f84d in _0x1c25f8)) {
            if (_0x88f84d === 'children') {
                continue;
            }
            _0x311cec[_0x88f84d] = La(_0x509df6, _0x88f84d, null, _0x311cec[_0x88f84d], _0x473f98, _0x22506d);
        }
    for (const _0x23e0c4 in _0x1c25f8) {
        if (_0x23e0c4 === 'children') {
            continue;
        }
        const _0x2c4a71 = _0x1c25f8[_0x23e0c4];
        _0x311cec[_0x23e0c4] = La(_0x509df6, _0x23e0c4, _0x2c4a71, _0x311cec[_0x23e0c4], _0x473f98, _0x22506d);
    }
}
function Gh(_0x159a01) {
    ;
    return _0x159a01.toLowerCase().replace(/-([a-z])/g, (_0x40aac5, _0x4cf760) => _0x4cf760.toUpperCase());
}
function Ta(_0x4e0c1b, _0x4bbb2f, _0x4cf9b2) {
    const _0x5f05b1 = _0x4bbb2f.trim().split(/\s+/);
    for (let _0x699902 = 0, _0x3dbc7c = _0x5f05b1.length; _0x699902 < _0x3dbc7c; _0x699902++) {
        _0x4e0c1b.classList.toggle(_0x5f05b1[_0x699902], _0x4cf9b2);
    }
}
function La(_0x334422, _0x52cb7d, _0x3904c7, _0x1d3ae2, _0x2e4967, _0x43f604) {
    ;
    let _0x5e2b1c, _0x1779ca, _0x161ecb, _0x168ab1, _0x325f72;
    if (_0x52cb7d === 'style') {
        return Wh(_0x334422, _0x3904c7, _0x1d3ae2);
    }
    if (_0x52cb7d === 'classList') {
        return Hh(_0x334422, _0x3904c7, _0x1d3ae2);
    }
    if (_0x3904c7 === _0x1d3ae2) {
        return _0x1d3ae2;
    }
    if (_0x52cb7d === 'ref') {
        _0x43f604 || _0x3904c7(_0x334422);
    } else {
        if (_0x52cb7d.slice(0, 3) === 'on:') {
            const _0x35f2ef = _0x52cb7d.slice(3);
            _0x1d3ae2 && _0x334422.removeEventListener(_0x35f2ef, _0x1d3ae2);
            _0x3904c7 && _0x334422.addEventListener(_0x35f2ef, _0x3904c7);
            ;
        } else {
            if (_0x52cb7d.slice(0, 10) === 'oncapture:') {
                const _0x229387 = _0x52cb7d.slice(10);
                _0x1d3ae2 && _0x334422.removeEventListener(_0x229387, _0x1d3ae2, true);
                _0x3904c7 && _0x334422.addEventListener(_0x229387, _0x3904c7, true);
                ;
            } else {
                if (_0x52cb7d.slice(0, 2) === 'on') {
                    const _0x5ea662 = _0x52cb7d.slice(2).toLowerCase(), _0x2390f5 = Mh.has(_0x5ea662);
                    if (!_0x2390f5 && _0x1d3ae2) {
                        const _0xa12e32 = Array.isArray(_0x1d3ae2) ? _0x1d3ae2[0] : _0x1d3ae2;
                        _0x334422.removeEventListener(_0x5ea662, _0xa12e32);
                    }
                    (_0x2390f5 || _0x3904c7) && (jh(_0x334422, _0x5ea662, _0x3904c7, _0x2390f5), _0x2390f5 && Nh([_0x5ea662]));
                } else {
                    if (_0x52cb7d.slice(0, 5) === 'attr:') {
                        pi(_0x334422, _0x52cb7d.slice(5), _0x3904c7);
                    } else {
                        if ((_0x325f72 = _0x52cb7d.slice(0, 5) === 'prop:') || (_0x161ecb = _h.has(_0x52cb7d)) || !_0x2e4967 && ((_0x168ab1 = xh(_0x52cb7d, _0x334422.tagName)) || (_0x1779ca = Ph.has(_0x52cb7d))) || (_0x5e2b1c = _0x334422.nodeName.includes('-'))) {
                            _0x325f72 && (_0x52cb7d = _0x52cb7d.slice(5), _0x1779ca = true);
                            _0x52cb7d === 'class' || _0x52cb7d === 'className' ? Uh(_0x334422, _0x3904c7) : _0x5e2b1c && !_0x1779ca && !_0x161ecb ? _0x334422[Gh(_0x52cb7d)] = _0x3904c7 : _0x334422[_0x168ab1 || _0x52cb7d] = _0x3904c7;
                            ;
                        } else {
                            const _0x1cf210 = _0x2e4967 && _0x52cb7d.indexOf(':') > -1 && Rh[_0x52cb7d.split(':')[0]];
                            _0x1cf210 ? Bh(_0x334422, _0x1cf210, _0x52cb7d, _0x3904c7) : pi(_0x334422, Th[_0x52cb7d] || _0x52cb7d, _0x3904c7);
                        }
                    }
                }
            }
        }
    }
    return _0x3904c7;
}
function qh(_0x229e49) {
    const _0x104868 = '$$' + _0x229e49.type;
    let _0x3ff282 = _0x229e49.composedPath && _0x229e49.composedPath()[0] || _0x229e49.target;
    for (_0x229e49.target !== _0x3ff282 && Object.defineProperty(_0x229e49, 'target', {
            'configurable': true,
            'value': _0x3ff282
        }), Object.defineProperty(_0x229e49, 'currentTarget', {
            'configurable': true,
            'get'() {
                return _0x3ff282 || document;
            }
        }); _0x3ff282;) {
        const _0x381beb = _0x3ff282[_0x104868];
        if (_0x381beb && !_0x3ff282.disabled) {
            const _0x18c09c = _0x3ff282[_0x104868 + 'Data'];
            if (_0x18c09c !== void 0 ? _0x381beb.call(_0x3ff282, _0x18c09c, _0x229e49) : _0x381beb.call(_0x3ff282, _0x229e49), _0x229e49.cancelBubble) {
                return;
            }
        }
        _0x3ff282 = _0x3ff282['_$host'] || _0x3ff282.parentNode || _0x3ff282.host;
    }
}
function Js(_0x241dfa, _0x270a2f, _0x15ba16, _0x43ab3f, _0x2f766b) {
    ;
    for (; typeof _0x15ba16 == 'function';) {
        _0x15ba16 = _0x15ba16();
    }
    if (_0x270a2f === _0x15ba16) {
        return _0x15ba16;
    }
    const _0x1785e2 = typeof _0x270a2f, _0x249787 = _0x43ab3f !== void 0;
    if (_0x241dfa = _0x249787 && _0x15ba16[0] && _0x15ba16[0].parentNode || _0x241dfa, _0x1785e2 === 'string' || _0x1785e2 === 'number') {
        if (_0x1785e2 === 'number' && (_0x270a2f = _0x270a2f.toString()), _0x249787) {
            let _0x1183f1 = _0x15ba16[0];
            _0x1183f1 && _0x1183f1.nodeType === 3 ? _0x1183f1.data = _0x270a2f : _0x1183f1 = document.createTextNode(_0x270a2f);
            _0x15ba16 = qt(_0x241dfa, _0x15ba16, _0x43ab3f, _0x1183f1);
            ;
        } else {
            _0x15ba16 !== '' && typeof _0x15ba16 == 'string' ? _0x15ba16 = _0x241dfa.firstChild.data = _0x270a2f : _0x15ba16 = _0x241dfa.textContent = _0x270a2f;
        }
    } else {
        if (_0x270a2f == null || _0x1785e2 === 'boolean') {
            _0x15ba16 = qt(_0x241dfa, _0x15ba16, _0x43ab3f);
        } else {
            if (_0x1785e2 === 'function') {
                return Tt(() => {
                    ;
                    let _0x1b38d7 = _0x270a2f();
                    for (; typeof _0x1b38d7 == 'function';) {
                        _0x1b38d7 = _0x1b38d7();
                    }
                    _0x15ba16 = Js(_0x241dfa, _0x1b38d7, _0x15ba16, _0x43ab3f);
                }), () => _0x15ba16;
            }
            if (Array.isArray(_0x270a2f)) {
                const _0x1e3a08 = [], _0x29130b = _0x15ba16 && Array.isArray(_0x15ba16);
                if (yi(_0x1e3a08, _0x270a2f, _0x15ba16, _0x2f766b)) {
                    return Tt(() => _0x15ba16 = Js(_0x241dfa, _0x1e3a08, _0x15ba16, _0x43ab3f, true)), () => _0x15ba16;
                }
                if (_0x1e3a08.length === 0) {
                    if (_0x15ba16 = qt(_0x241dfa, _0x15ba16, _0x43ab3f), _0x249787) {
                        return _0x15ba16;
                    }
                } else {
                    _0x29130b ? _0x15ba16.length === 0 ? xa(_0x241dfa, _0x1e3a08, _0x43ab3f) : Oh(_0x241dfa, _0x15ba16, _0x1e3a08) : (_0x15ba16 && qt(_0x241dfa), xa(_0x241dfa, _0x1e3a08));
                }
                _0x15ba16 = _0x1e3a08;
            } else {
                if (_0x270a2f.nodeType) {
                    if (Array.isArray(_0x15ba16)) {
                        if (_0x249787) {
                            return _0x15ba16 = qt(_0x241dfa, _0x15ba16, _0x43ab3f, _0x270a2f);
                        }
                        qt(_0x241dfa, _0x15ba16, null, _0x270a2f);
                    } else {
                        _0x15ba16 == null || _0x15ba16 === '' || !_0x241dfa.firstChild ? _0x241dfa.appendChild(_0x270a2f) : _0x241dfa.replaceChild(_0x270a2f, _0x241dfa.firstChild);
                    }
                    _0x15ba16 = _0x270a2f;
                }
            }
        }
    }
    return _0x15ba16;
}
function yi(_0x4c6825, _0x43b737, _0xa1ee81, _0x1d544c) {
    ;
    let _0x7c5e16 = false;
    for (let _0x144b39 = 0, _0x179800 = _0x43b737.length; _0x144b39 < _0x179800; _0x144b39++) {
        let _0x280341 = _0x43b737[_0x144b39], _0x236f1e = _0xa1ee81 && _0xa1ee81[_0x144b39], _0xe91e44;
        if (!(_0x280341 == null || _0x280341 === true || _0x280341 === false)) {
            if ((_0xe91e44 = typeof _0x280341) == 'object' && _0x280341.nodeType) {
                _0x4c6825.push(_0x280341);
            } else {
                if (Array.isArray(_0x280341)) {
                    _0x7c5e16 = yi(_0x4c6825, _0x280341, _0x236f1e) || _0x7c5e16;
                } else {
                    if (_0xe91e44 === 'function') {
                        if (_0x1d544c) {
                            for (; typeof _0x280341 == 'function';) {
                                _0x280341 = _0x280341();
                            }
                            _0x7c5e16 = yi(_0x4c6825, Array.isArray(_0x280341) ? _0x280341 : [_0x280341], Array.isArray(_0x236f1e) ? _0x236f1e : [_0x236f1e]) || _0x7c5e16;
                        } else {
                            _0x4c6825.push(_0x280341);
                            _0x7c5e16 = true;
                            ;
                        }
                    } else {
                        const _0x1fd583 = String(_0x280341);
                        _0x236f1e && _0x236f1e.nodeType === 3 && _0x236f1e.data === _0x1fd583 ? _0x4c6825.push(_0x236f1e) : _0x4c6825.push(document.createTextNode(_0x1fd583));
                    }
                }
            }
        }
    }
    return _0x7c5e16;
}
function xa(_0x1a1e0d, _0x418277, _0x55a95b = null) {
    ;
    for (let _0x428849 = 0, _0x5d7cd1 = _0x418277.length; _0x428849 < _0x5d7cd1; _0x428849++) {
        _0x1a1e0d.insertBefore(_0x418277[_0x428849], _0x55a95b);
    }
}
function qt(_0x4be587, _0x938853, _0x50aa4e, _0x3b1411) {
    ;
    if (_0x50aa4e === void 0) {
        return _0x4be587.textContent = '';
    }
    const _0x3a4430 = _0x3b1411 || document.createTextNode('');
    if (_0x938853.length) {
        let _0x52ed4d = false;
        for (let _0x11c804 = _0x938853.length - 1; _0x11c804 >= 0; _0x11c804--) {
            const _0x50d33a = _0x938853[_0x11c804];
            if (_0x3a4430 !== _0x50d33a) {
                const _0x471434 = _0x50d33a.parentNode === _0x4be587;
                !_0x52ed4d && !_0x11c804 ? _0x471434 ? _0x4be587.replaceChild(_0x3a4430, _0x50d33a) : _0x4be587.insertBefore(_0x3a4430, _0x50aa4e) : _0x471434 && _0x50d33a.remove();
            } else {
                _0x52ed4d = true;
            }
        }
    } else {
        _0x4be587.insertBefore(_0x3a4430, _0x50aa4e);
    }
    return [_0x3a4430];
}
const $h = 'http://www.w3.org/2000/svg';
function Lc(_0x160b42, _0x23a71b = false) {
    ;
    return _0x23a71b ? document.createElementNS($h, _0x160b42) : document.createElement(_0x160b42);
}
function R3(_0xf9c78a) {
    const {useShadow: _0x36b3f1} = _0xf9c78a, _0xd92e54 = document.createTextNode(''), _0x2122c5 = () => _0xf9c78a.mount || document.body, _0x200557 = fo();
    let _0xdbbae1, _0x412994 = !!B1.context;
    const _0x394a16 = {};
    return _0x394a16.render = !_0x412994, (rt(() => {
        ;
        _0xdbbae1 || (_0xdbbae1 = no(_0x200557, () => Be(() => _0xf9c78a.children)));
        const _0x42e0e8 = _0x2122c5();
        if (_0x42e0e8 instanceof HTMLHeadElement) {
            const [_0x6dca91, _0x42c716] = ke(false), _0x3ffa48 = () => _0x42c716(true);
            vt(_0x1f425b => bi(_0x42e0e8, () => _0x6dca91() ? _0x1f425b() : _0xdbbae1(), null));
            is(_0x3ffa48);
            ;
        } else {
            const _0x3f68d6 = { mode: 'open' };
            ;
            const _0xa4ef35 = Lc(_0xf9c78a.isSVG ? 'g' : 'div', _0xf9c78a.isSVG), _0x248322 = _0x36b3f1 && _0xa4ef35.attachShadow ? _0xa4ef35.attachShadow(_0x3f68d6) : _0xa4ef35, _0x466c15 = {
                    get: function () {
                        ;
                        return _0xd92e54.parentNode;
                    },
                    configurable: true
                };
            ;
            ;
            Object.defineProperty(_0xa4ef35, '_$host', _0x466c15);
            bi(_0x248322, _0xdbbae1);
            _0x42e0e8.appendChild(_0xa4ef35);
            _0xf9c78a.ref && _0xf9c78a.ref(_0xa4ef35);
            is(() => _0x42e0e8.removeChild(_0xa4ef35));
            ;
            ;
        }
    }, void 0, _0x394a16), _0xd92e54);
}
function O3(_0x212b8f) {
    const [_0x39f634, _0x3d52f6] = lo(_0x212b8f, ['component']), _0x3e9538 = Be(() => _0x39f634.component);
    return Be(() => {
        ;
        const _0x4988c6 = _0x3e9538();
        switch (typeof _0x4988c6) {
        case 'function':
            return he(() => _0x4988c6(_0x3d52f6));
        case 'string':
            const _0x9b3853 = Ih.has(_0x4988c6), _0x5d67bf = Lc(_0x4988c6, _0x9b3853);
            return Vh(_0x5d67bf, _0x3d52f6, _0x9b3853), _0x5d67bf;
        }
    });
}
function Yh(_0x387185) {
    ;
    return Array.from(_0x387185.childNodes).map(_0x3cda66 => _0x3cda66.nodeType === _0x3cda66.TEXT_NODE ? Xn(_0x3cda66.textContent) : _0x3cda66.outerHTML).join('');
}
function Kh(_0x2da6bd, _0x315688) {
    ;
    return _0x2da6bd.closest('[' + _0x315688 + ']');
}
function Jh(_0x243d14, _0x509d21) {
    return _0x243d14.closest(_0x509d21);
}
function Zf(_0x4f822f, _0x55f365) {
    ;
    if (!_0x4f822f) {
        return null;
    }
    if (_0x4f822f.parentElement === _0x55f365) {
        return _0x4f822f;
    }
    for (; _0x4f822f.parentElement;) {
        if (_0x4f822f = _0x4f822f.parentElement, _0x4f822f.parentElement === _0x55f365) {
            return _0x4f822f;
        }
    }
    return null;
}
function xc(_0x3622e5, _0x3cd478) {
    const _0x52dbbe = document.getSelection(), _0x140fd1 = _0x52dbbe.focusNode, _0x209946 = _0x52dbbe.focusOffset, _0x58efa5 = {};
    return _0x58efa5.selection = _0x52dbbe, !Zf(_0x140fd1, _0x3622e5) && _0x140fd1 !== _0x3622e5 ? _0x58efa5 : {
        ...Xh(_0x3622e5, _0x140fd1, _0x209946),
        'selection': _0x52dbbe
    };
}
function Xh(_0x590c49, _0x479b01, _0x36cb94) {
    ;
    if (_0x479b01 === _0x590c49) {
        const _0x2d89d5 = _0x590c49.childNodes, _0x385e11 = _0x2d89d5.length;
        _0x385e11 && _0x36cb94 >= _0x385e11 ? (_0x479b01 = _0x2d89d5[_0x385e11 - 1], _0x36cb94 = (_0x479b01.textContent || _0x479b01.alt || '').length) : (_0x479b01 = _0x2d89d5[_0x36cb94], _0x36cb94 = 0);
    }
    const _0x5b58e2 = {};
    return _0x5b58e2.node = _0x479b01, _0x5b58e2.offset = _0x36cb94, _0x5b58e2;
}
const Qh = new Set([
    'messageEntityBold',
    'messageEntityItalic',
    'messageEntityCode',
    'messageEntityPre',
    'messageEntityUnderline',
    'messageEntityStrike',
    'messageEntityBlockquote',
    'messageEntitySpoiler'
]);
function Zh(_0x15e7fe) {
    ;
    for (let _0x23831a = 0; _0x23831a < _0x15e7fe.length; ++_0x23831a) {
        const _0x3a6e91 = _0x15e7fe[_0x23831a];
        let _0x26dd56 = -1;
        do
            if (_0x26dd56 = _0x15e7fe.findIndex((_0x36c8f1, _0x2c2928) => Qh.has(_0x36c8f1['_']) && _0x2c2928 !== _0x23831a && _0x36c8f1['_'] === _0x3a6e91['_'] && _0x36c8f1.offset - _0x3a6e91.length === _0x3a6e91.offset), _0x26dd56 !== -1) {
                const _0x503d6d = _0x15e7fe[_0x26dd56];
                _0x3a6e91.length += _0x503d6d.length;
                _0x15e7fe.splice(_0x26dd56, 1);
                ;
            }
        while (_0x26dd56 !== -1);
    }
}
function Mc(_0x2994f8) {
    ;
    _0x2994f8.sort((_0x37f190, _0x566f28) => _0x37f190.offset - _0x566f28.offset || _0x566f28.length - _0x37f190.length);
}
const a0_0x2db8a6 = {};
a0_0x2db8a6.match = '[style*="bold"], [style*="font-weight: 700"], [style*="font-weight: 600"], [style*="font-weight:700"], [style*="font-weight:600"], b, strong';
a0_0x2db8a6.entityName = 'messageEntityBold';
;
const a0_0x324de2 = {};
a0_0x324de2.match = '[style*="underline"], u, ins';
a0_0x324de2.entityName = 'messageEntityUnderline';
;
const a0_0x41c538 = {};
a0_0x41c538.match = '[style*="italic"], i, em';
a0_0x41c538.entityName = 'messageEntityItalic';
;
const a0_0x3b68d9 = {};
a0_0x3b68d9.match = '[style*="monospace"], [face*="monospace"], pre';
a0_0x3b68d9.entityName = 'messageEntityCode';
;
const a0_0x48cefe = {};
a0_0x48cefe.match = '[style*="line-through"], [style*="strikethrough"], strike, del, s';
a0_0x48cefe.entityName = 'messageEntityStrike';
;
const a0_0x3771e2 = {};
a0_0x3771e2.match = 'A:not(.follow)';
a0_0x3771e2.entityName = 'messageEntityTextUrl';
;
const a0_0x212f06 = {};
a0_0x212f06.match = 'A.follow';
a0_0x212f06.entityName = 'messageEntityMentionName';
;
const a0_0x5d32df = {};
a0_0x5d32df.match = '[style*="spoiler"]';
a0_0x5d32df.entityName = 'messageEntitySpoiler';
;
const a0_0x4fae24 = {};
a0_0x4fae24.match = '[style*="quote"], .quote';
a0_0x4fae24.entityName = 'messageEntityBlockquote';
;
const a0_0x5f3ee0 = {};
a0_0x5f3ee0.bold = a0_0x2db8a6;
a0_0x5f3ee0.underline = a0_0x324de2;
a0_0x5f3ee0.italic = a0_0x41c538;
a0_0x5f3ee0.monospace = a0_0x3b68d9;
a0_0x5f3ee0.strikethrough = a0_0x48cefe;
a0_0x5f3ee0.link = a0_0x3771e2;
a0_0x5f3ee0.mentionName = a0_0x212f06;
a0_0x5f3ee0.spoiler = a0_0x5d32df;
a0_0x5f3ee0.quote = a0_0x4fae24;
;
const en = a0_0x5f3ee0, e2 = '[style*="table-cell"], th, td', t2 = new Set([
        'DIV',
        'P',
        'BR',
        'LI',
        'SECTION',
        'H6',
        'H5',
        'H4',
        'H3',
        'H2',
        'H1',
        'TR',
        'OL',
        'UL',
        'BLOCKQUOTE'
    ]), s2 = new RegExp(V, 'g'), _t = '\x01';
function Ma(_0x11d22b, _0xbd40db, _0x3314e7, _0x2441d3) {
    const _0xc010f7 = _0x11d22b.parentElement;
    for (const _0x3a6b1c in en) {
        const _0x502366 = en[_0x3a6b1c], _0x26d7ef = _0xc010f7.closest(_0x502366.match + ', [contenteditable="true"]');
        if (_0x26d7ef?.getAttribute('contenteditable') !== null) {
            continue;
        }
        let _0x35640e;
        _0x502366.entityName === 'messageEntityCode' && (_0x35640e = _0xc010f7.closest('[data-language]')) ? _0x3314e7.push({
            '_': 'messageEntityPre',
            'language': _0x35640e.dataset.language || '',
            'offset': _0x2441d3.offset,
            'length': _0xbd40db.length
        }) : _0x502366.entityName === 'messageEntityTextUrl' ? _0x3314e7.push({
            '_': _0x502366.entityName,
            'url': _0x26d7ef.href,
            'offset': _0x2441d3.offset,
            'length': _0xbd40db.length
        }) : _0x502366.entityName === 'messageEntityMentionName' ? _0x3314e7.push({
            '_': _0x502366.entityName,
            'offset': _0x2441d3.offset,
            'length': _0xbd40db.length,
            'user_id': _0x26d7ef.dataset.follow.toUserId()
        }) : _0x502366.entityName === 'messageEntityBlockquote' ? _0x3314e7.push({
            '_': _0x502366.entityName,
            'pFlags': { 'collapsed': !!_0x26d7ef.dataset.collapsed || void 0 },
            'offset': _0x2441d3.offset,
            'length': _0xbd40db.length
        }) : _0x3314e7.push({
            '_': _0x502366.entityName,
            'offset': _0x2441d3.offset,
            'length': _0xbd40db.length
        });
    }
}
function Ia(_0x206c38) {
    const {length: _0x1bc987} = _0x206c38;
    return !_0x1bc987 || _0x206c38[_0x1bc987 - 1] === _t && _0x1bc987 === _t.length;
}
const a0_0x18face = {};
a0_0x18face.offset = 0;
function vi(_0x4bd9d7, _0x24dda3, _0x25a65b, _0x3c4071, _0x4a5bd5, _0x1deec4, _0x58deb0 = a0_0x18face) {
    ;
    if (_0x4bd9d7.nodeType === _0x4bd9d7.TEXT_NODE) {
        let _0x385876 = _0x4bd9d7.nodeValue;
        _0x385876 = _0x385876.replace(s2, '');
        _0x385876 ? _0x3c4071 === _0x4bd9d7 ? _0x25a65b.push(_0x385876.substr(0, _0x4a5bd5) + _t + _0x385876.substr(_0x4a5bd5)) : _0x25a65b.push(_0x385876) : _0x3c4071 === _0x4bd9d7 && _0x25a65b.push(_t);
        _0x1deec4 && _0x385876.length && _0x4bd9d7.parentNode && Ma(_0x4bd9d7, _0x385876, _0x1deec4, _0x58deb0);
        _0x58deb0.offset += _0x385876.length;
        ;
        return;
    }
    if (_0x4bd9d7.nodeType !== _0x4bd9d7.ELEMENT_NODE) {
        return;
    }
    const _0x44f4da = () => {
            ;
            _0x24dda3.push(_0x25a65b.join(''));
            _0x25a65b.length = 0;
            ++_0x58deb0.offset;
            ;
        }, _0x4a8d33 = _0x3c4071 === _0x4bd9d7, _0x786591 = _0x4bd9d7.matches(en.quote.match), _0x4c4d2d = t2.has(_0x4bd9d7.tagName) || _0x786591;
    if (_0x4c4d2d && (_0x25a65b.length && _0x25a65b[_0x25a65b.length - 1].slice(-1) !== '\n' || _0x4bd9d7.tagName === 'BR')) {
        _0x44f4da();
    } else {
        const _0x706d50 = _0x4bd9d7.dataset.stickerEmoji || _0x4bd9d7.alt, _0x168a0a = _0x4bd9d7.dataset.stickerEmoji;
        _0x706d50 && _0x1deec4 && Ma(_0x4bd9d7, _0x706d50, _0x1deec4, _0x58deb0);
        _0x168a0a && _0x1deec4 && _0x1deec4.push({
            '_': 'messageEntityCustomEmoji',
            'document_id': _0x4bd9d7.dataset.docId,
            'offset': _0x58deb0.offset,
            'length': _0x706d50.length
        });
        _0x706d50 && (_0x25a65b.push(_0x706d50), _0x58deb0.offset += _0x706d50.length);
        ;
    }
    _0x4a8d33 && !_0x4a5bd5 && _0x25a65b.push(_t);
    const _0x1c14b5 = _0x4bd9d7.matches(e2), _0x335079 = _0x1deec4?.length;
    let _0x413622 = true;
    _0x786591 && (_0x58deb0.isInQuote = true);
    let _0x26c68b = _0x4bd9d7.firstChild;
    for (; _0x26c68b;) {
        vi(_0x26c68b, _0x24dda3, _0x25a65b, _0x3c4071, _0x4a5bd5, _0x1deec4, _0x58deb0);
        _0x26c68b = _0x26c68b.nextSibling;
        Ia(_0x25a65b) || (_0x413622 = false);
        ;
    }
    if (_0x786591) {
        const _0x594ad9 = _0x25a65b[_0x25a65b.length - 1];
        _0x594ad9?.endsWith('\n') && (_0x25a65b[_0x25a65b.length - 1] = _0x594ad9.slice(0, -1), _0x58deb0.offset -= 1);
        _0x58deb0.isInQuote = false;
        ;
    }
    if (_0x413622 && _0x4bd9d7.textContent?.replace(/[\r\n]/g, '') && (_0x413622 = false), _0x4a8d33 && _0x4a5bd5 && _0x25a65b.push(_t), _0x1c14b5 && _0x4bd9d7.nextSibling && !Ia(_0x25a65b) && (_0x25a65b.push(' '), ++_0x58deb0.offset, _0x335079 !== void 0)) {
        for (let _0x1ad8fd = _0x335079, _0xeeab21 = _0x1deec4.length; _0x1ad8fd < _0xeeab21; ++_0x1ad8fd) {
            ++_0x1deec4[_0x1ad8fd].length;
        }
    }
    _0x4c4d2d && !_0x413622 && _0x44f4da();
    !_0x413622 && _0x4bd9d7.tagName === 'P' && _0x4bd9d7.nextSibling && (_0x24dda3.push(''), ++_0x58deb0.offset);
    ;
}
function Ic(_0x45e455) {
    const _0x4242e1 = window.getSelection();
    let _0x2a4936, _0x41e592;
    if (_0x4242e1?.rangeCount) {
        const _0x504f43 = _0x4242e1.getRangeAt(0), _0x7c8337 = _0x504f43.startOffset;
        if (_0x504f43.startContainer && _0x504f43.startContainer == _0x504f43.endContainer && _0x7c8337 == _0x504f43.endOffset) {
            const _0xda9dec = _0x7c8337 - 1, _0x3fce62 = _0x45e455.childNodes;
            if (_0x504f43.startContainer === _0x45e455 && _0x3fce62[_0xda9dec]) {
                _0x2a4936 = _0x3fce62[_0xda9dec];
                _0x41e592 = 0;
                ;
                for (let _0x4bed85 = 0; _0x4bed85 < _0x504f43.endOffset; ++_0x4bed85) {
                    const _0x15d87c = _0x3fce62[_0x4bed85], _0x5bfba5 = _0x15d87c.nodeValue || _0x15d87c.alt;
                    _0x5bfba5 && (_0x41e592 += _0x5bfba5.length);
                }
            } else {
                _0x2a4936 = _0x504f43.startContainer;
                _0x41e592 = _0x7c8337;
                ;
            }
        }
    }
    const _0x2b4625 = {};
    return _0x2b4625.node = _0x2a4936, _0x2b4625.offset = _0x41e592, _0x2b4625;
}
function tn(_0x221a52, _0x1bc294 = true, _0x292a1b = true) {
    const _0x1be791 = { offset: 0 };
    ;
    const _0xc1c5aa = [], _0x3bfa4e = [], {
            node: _0x2fb558,
            offset: _0xf5009
        } = !(_0x221a52 instanceof DocumentFragment) && _0x292a1b && Ic(_0x221a52), _0x3f6a7f = _0x1bc294 ? [] : void 0, _0x1cc5e4 = _0x1be791;
    if (_0x221a52 instanceof DocumentFragment) {
        let _0x1f97f4 = _0x221a52.firstChild;
        for (; _0x1f97f4;) {
            vi(_0x1f97f4, _0xc1c5aa, _0x3bfa4e, _0x2fb558, _0xf5009, _0x3f6a7f, _0x1cc5e4);
            _0x1f97f4 = _0x1f97f4.nextSibling;
            ;
        }
    } else {
        vi(_0x221a52, _0xc1c5aa, _0x3bfa4e, _0x2fb558, _0xf5009, _0x3f6a7f, _0x1cc5e4);
    }
    _0x3bfa4e.length && _0xc1c5aa.push(_0x3bfa4e.join(''));
    let _0x838a75 = _0xc1c5aa.join('\n');
    const _0x4013db = _0x838a75.indexOf(_t);
    return _0x4013db !== -1 && (_0x838a75 = _0x838a75.substr(0, _0x4013db) + _0x838a75.substr(_0x4013db + 1)), _0x838a75 = _0x838a75.replace(/\u00A0/g, ' '), _0x3f6a7f?.length && (Zh(_0x3f6a7f), Mc(_0x3f6a7f)), {
        'value': _0x838a75,
        'entities': _0x3f6a7f,
        'caretPos': _0x4013db
    };
}
N.getCaretPos = Ic;
N.getRichValueWithCaret = tn;
;
function f2(_0xf857e0, _0x1b96cf) {
    ;
    let _0x57a351;
    if (_0xf857e0.isContentEditable || _0xf857e0.tagName !== 'INPUT') {
        if (_0xf857e0.querySelector('.emoji, .custom-emoji, .custom-emoji-placeholder')) {
            return false;
        }
        _0x57a351 = _0xf857e0.textContent;
    } else {
        _0x57a351 = _0xf857e0.value;
    }
    return _0x1b96cf ? !_0x57a351 : !_0x57a351.trim();
}
class Rc {
    constructor() {
        ;
        this.listeners = new Set();
    }
    ['add'](_0x5aabf8) {
        ;
        return (_0x5984c7, _0x54f0d8, _0x334d38) => {
            const _0x261e1a = {
                element: _0x5aabf8,
                event: _0x5984c7,
                callback: _0x54f0d8,
                options: _0x334d38
            };
            ;
            ;
            ;
            ;
            ;
            const _0x4f38bb = _0x261e1a;
            return this.addManual(_0x4f38bb), _0x4f38bb;
        };
    }
    ['addManual'](_0x1030a4) {
        ;
        _0x1030a4.element.addEventListener(_0x1030a4.event, _0x1030a4.callback, _0x1030a4.options);
        _0x1030a4.options?.once && (_0x1030a4.onceCallback = () => {
            ;
            this.remove(_0x1030a4);
            _0x1030a4.onceFired = true;
            ;
        }, _0x1030a4.element.addEventListener(_0x1030a4.event, _0x1030a4.onceCallback, _0x1030a4.options));
        this.listeners.add(_0x1030a4);
        ;
    }
    ['remove'](_0x2759b4) {
        ;
        _0x2759b4.onceFired || (_0x2759b4.element.removeEventListener(_0x2759b4.event, _0x2759b4.callback, _0x2759b4.options), _0x2759b4.onceCallback && _0x2759b4.element.removeEventListener(_0x2759b4.event, _0x2759b4.onceCallback, _0x2759b4.options));
        this.listeners.delete(_0x2759b4);
        ;
    }
    ['removeManual'](_0x335ab6, _0x337ff9, _0x55b865, _0x40484b) {
        ;
        let _0x470d0c;
        for (const _0x23265e of this.listeners)
            if (_0x23265e.element === _0x335ab6 && _0x23265e.event === _0x337ff9 && _0x23265e.callback === _0x55b865 && _0x23265e.options === _0x40484b) {
                _0x470d0c = _0x23265e;
                break;
            }
        _0x470d0c && this.remove(_0x470d0c);
    }
    ['removeAll']() {
        ;
        this.listeners.forEach(_0x55755b => {
            ;
            this.remove(_0x55755b);
        });
    }
}
function Xt(_0x22e04f, _0x4eb951) {
    ;
    if (!_0x22e04f?.parentNode) {
        return -1;
    }
    if (_0x4eb951) {
        return Array.from(_0x22e04f.parentNode.childNodes).indexOf(_0x22e04f);
    }
    let _0x5c50f0 = 0;
    for (; (_0x22e04f = _0x22e04f.previousElementSibling) !== null;) {
        ++_0x5c50f0;
    }
    return _0x5c50f0;
}
function Ei(_0x5241a3, _0x44c8ee, _0x346d8c, _0x96e26) {
    ;
    let _0x513821;
    if (_0x5241a3 === _0x346d8c) {
        _0x513821 = _0x44c8ee - _0x96e26;
    } else {
        if (_0x5241a3.parentElement === _0x346d8c.parentElement) {
            _0x513821 = Xt(_0x5241a3, true) - Xt(_0x346d8c, true);
        } else {
            const _0xf59bd5 = [];
            let _0x4cbbb4 = _0x5241a3.parentElement;
            do
                _0xf59bd5.push(_0x4cbbb4);
            while (_0x4cbbb4 = _0x4cbbb4.parentElement);
            _0x4cbbb4 = _0x346d8c.parentElement;
            do
                if (_0xf59bd5.includes(_0x4cbbb4)) {
                    break;
                }
            while (_0x4cbbb4 = _0x4cbbb4.parentElement);
            const _0x2fccc2 = _0x4cbbb4;
            _0x5241a3 = Zf(_0x5241a3, _0x2fccc2);
            _0x346d8c = Zf(_0x346d8c, _0x2fccc2);
            _0x513821 = Xt(_0x5241a3, true) - Xt(_0x346d8c, true);
            ;
        }
    }
    return Dt(_0x513821, -1, 1);
}
window.compareNodes = Ei;
function Oc(_0x1d310b, _0x10858d = false, _0x4ece3b = true) {
    ;
    if (!(Fe && (!_0x10858d || document.activeElement.tagName !== 'INPUT' && !document.activeElement.isContentEditable))) {
        if (_0x4ece3b && _0x1d310b.focus(), _0x1d310b instanceof HTMLInputElement) {
            const _0x152f03 = _0x1d310b.value.length;
            _0x1d310b.selectionStart = _0x152f03;
            _0x1d310b.selectionEnd = _0x152f03;
            ;
        } else {
            const _0x13e603 = document.createRange();
            _0x13e603.selectNodeContents(_0x1d310b);
            _0x13e603.collapse(false);
            ;
            const _0x42a8d2 = window.getSelection();
            _0x42a8d2.removeAllRanges();
            _0x42a8d2.addRange(_0x13e603);
            ;
        }
    }
}
window.placeCaretAtEnd = Oc;
const Ra = new RegExp('[^' + V + ']');
class vn {
    constructor() {
        ;
        this.saveSelectionOnChange = _0x1d58ff => {
            const _0x7b8ec2 = document.activeElement;
            this.saveRangeForElement(_0x7b8ec2);
        };
        this.onFocusOut = _0x13cebc => {
            ;
            this.lastNode = this.lastOffset = void 0;
        };
        this.onSelectionChange = _0x3927b2 => {
            const {input: _0x4056a8} = this;
            if (!_0x4056a8) {
                this.setSelectionClassName(document.getSelection());
                return;
            }
            let _0x7cc3a1 = this.getCaretPosN();
            do {
                const {
                    node: _0x28b9a3,
                    offset: _0x1f6425,
                    selection: _0x2a4a71,
                    move: _0xd2f5e0
                } = _0x7cc3a1;
                if (_0x28b9a3?.nodeValue !== V || !this.lastNode) {
                    break;
                }
                const _0x518cf4 = Ei(_0x28b9a3, _0x1f6425, this.lastNode, this.lastOffset) < 0;
                _0x518cf4 !== void 0 && (_0x2a4a71.isCollapsed ? this.superMove(_0x4056a8, _0x7cc3a1, _0x518cf4, true) : _0x2a4a71.modify(_0x2a4a71.isCollapsed ? 'move' : 'extend', _0x518cf4 ? 'backward' : 'forward', 'character'));
                this.log('selectionchange', _0x28b9a3, _0x1f6425, this.lastNode, this.lastOffset, _0x28b9a3 === this.lastNode, Xt(this.getFiller(_0x28b9a3)), Xt(this.getFiller(this.lastNode)), _0x518cf4, _0x2a4a71, document.getSelection(), document.getSelection().getRangeAt(0), _0x28b9a3?.parentNode, this.lastNode?.parentNode);
                _0x7cc3a1 = this.getCaretPosN();
                this.lastNode = _0x28b9a3;
                this.lastOffset = _0x1f6425;
                ;
                break;
            } while (true);
            this.lastNode = this.lastOffset = void 0;
            this.setSelectionClassName(_0x7cc3a1.selection, _0x4056a8);
            ;
        };
        this.onBeforeInput = _0x561fe8 => {
            const {
                input: _0x1f46f1,
                log: _0x5ec411
            } = this;
            if (!_0x1f46f1) {
                return;
            }
            const _0x5a7f9c = this.addInputCallback.bind(this, _0x1f46f1), _0x3bb25f = this.getCaretPosN();
            let {
                node: _0x4a1bb1,
                offset: _0x423653,
                selection: _0x1aaaaa,
                move: _0x774a3b
            } = _0x3bb25f;
            if (_0x5ec411('beforeinput', _0x561fe8, _0x4a1bb1, _0x423653, _0x1aaaaa, _0x3bb25f), this.lastNode = this.lastOffset = void 0, _0x561fe8.inputType.startsWith('delete')) {
                if (_0x5a7f9c(() => {
                        ;
                        this.processEmptiedFillers(_0x1f46f1);
                        this.removeExtraBOMs(_0x1f46f1);
                        this.fixInsertedLineBreaks(_0x1f46f1);
                        ;
                    }), _0x4a1bb1?.nodeValue === V && _0x1aaaaa.isCollapsed && _0x561fe8.inputType.includes('deleteContent')) {
                    const _0x17978b = _0x561fe8.inputType.includes('Backward'), _0xdb35bc = _0x423653 === V.length && _0x17978b || !_0x423653 && !_0x17978b;
                    this.superMove(_0x1f46f1, _0x3bb25f, _0x17978b, _0xdb35bc);
                }
            } else {
                if (_0x561fe8.inputType.startsWith('insert')) {
                    if (_0x4a1bb1?.classList?.contains('input-something')) {
                        _0x4a1bb1 = _0x4a1bb1.previousSibling.firstChild;
                        const _0xf80148 = _0x1aaaaa.getRangeAt(0);
                        _0xf80148.setStart(_0x4a1bb1, 0);
                        _0xf80148.setEnd(_0x4a1bb1, 0);
                        _0xf80148.collapse(true);
                        ;
                        const _0x47da59 = this.getCaretPosN();
                        _0x4a1bb1 = _0x47da59.node;
                        _0x1aaaaa = _0x47da59.selection;
                        _0x423653 = _0x47da59.offset;
                        ;
                    }
                    if (_0x4a1bb1 && _0x4a1bb1.textContent === V && _0x423653 === V.length) {
                        _0x1aaaaa.modify('move', 'backward', 'character');
                        const _0x39099f = this.getCaretPosN();
                        _0x4a1bb1 = _0x39099f.node;
                        _0x1aaaaa = _0x39099f.selection;
                        _0x423653 = _0x39099f.offset;
                        ;
                    }
                    _0x561fe8.inputType;
                    {
                        _0x4a1bb1 && _0x4a1bb1.nodeType === _0x4a1bb1.ELEMENT_NODE && (_0x4a1bb1 = _0x4a1bb1.firstChild, _0x5ec411.warn('fixing focus on span'));
                        const _0x3a80f0 = _0x4a1bb1?.nodeValue === V;
                        if (_0x5ec411('inserting line break', _0x3a80f0, _0x4a1bb1, '"' + _0x4a1bb1?.nodeValue + '"', _0x4a1bb1?.parentElement ? Array.from(_0x4a1bb1.parentElement.childNodes).slice() : []), _0x3a80f0) {
                            const _0xfb835a = _0x4a1bb1.parentElement;
                            _0xfb835a.classList.replace('input-filler', 'input-filler-text');
                            _0xfb835a.childNodes.length;
                            _0x5a7f9c(() => {
                                ;
                                _0xfb835a.childNodes.length > 1 ? (_0x5ec411('inserting line break, remove'), _0x4a1bb1 = Array.from(_0xfb835a.childNodes).find(_0x27ca51 => _0x27ca51.nodeValue === V), _0xfb835a.t = _0x4a1bb1) : _0x4a1bb1.nodeValue !== V && (_0x5ec411('inserting line break, deleteData'), _0x4a1bb1.deleteData(_0x4a1bb1.nodeValue.indexOf(V), V.length));
                                this.fixInsertedLineBreaks(_0x1f46f1);
                                ;
                            });
                            ;
                        } else {
                            _0x561fe8.inputType === 'insertLineBreak' && _0x5a7f9c(() => {
                                ;
                                this.fixInsertedLineBreaks(_0x1f46f1);
                            });
                        }
                    }
                    return;
                } else {
                    _0x561fe8.inputType === 'historyUndo' ? _0x5a7f9c(() => {
                        ;
                        this.processFilledFillers(_0x1f46f1);
                        this.processEmptiedFillers(_0x1f46f1);
                        this.removeExtraBOMs(_0x1f46f1);
                        this.removeEmptyTextNodes(_0x1f46f1);
                        this.fixBuggedCaret();
                        ;
                    }) : _0x561fe8.inputType === 'historyRedo' && _0x5a7f9c(() => {
                        ;
                        this.processFilledFillers(_0x1f46f1);
                        this.processEmptiedFillers(_0x1f46f1);
                        _0x1f46f1.querySelectorAll('.input-something:not([contenteditable])').forEach(_0x326311 => {
                            ;
                            _0x326311.contentEditable = 'false';
                        });
                        this.removeExtraBOMs(_0x1f46f1);
                        this.fixBuggedCaret();
                        ;
                    });
                }
            }
        };
        this.onKeyDown = _0x7e23b9 => {
            const _0x5424c3 = _0x7e23b9.key;
            if (_0x5424c3 === 'ArrowDown' || _0x5424c3 === 'ArrowUp') {
                this.lastNode = this.lastOffset = void 0;
            } else {
                const {
                    node: _0x1fee02,
                    offset: _0x3cb40a
                } = this.getCaretPosN();
                this.lastNode = _0x1fee02;
                this.lastOffset = _0x3cb40a;
                this.lastNode === this.input && (this.lastNode = this.lastOffset = void 0);
                ;
            }
            this.log('keydown', this.lastNode, this.lastNode?.parentNode, this.lastOffset, this.getCaretPosN(), _0x7e23b9);
        };
        this.log = Q('RICH-INPUT');
        this.listenerSetter = new Rc();
        this.savedRanges = new WeakMap();
        this.listenerSetter.add(document)('selectionchange', this.saveSelectionOnChange);
        ;
    }
    get ['input']() {
        const _0x4be521 = document.getSelection(), {anchorNode: _0x39dedc} = _0x4be521;
        if (_0x39dedc) {
            return (_0x39dedc.closest ? _0x39dedc : _0x39dedc.parentElement).closest('[contenteditable="true"]');
        }
    }
    ['saveRangeForElement'](_0x570368) {
        ;
        _0x570368 && (_0x570368.isContentEditable || _0x570368.tagName === 'INPUT') && document.getSelection().rangeCount && this.savedRanges.set(_0x570368, document.getSelection().getRangeAt(0));
    }
    ['findPreviousSmthIndex'](_0x5cdcd8, _0x91fa71, _0x3a89bd) {
        const _0x56e7c5 = Array.from(_0x3a89bd ?? _0x5cdcd8.querySelectorAll('.input-something')), _0x3b627f = _0x56e7c5.findIndex(_0x284e35 => Ei(_0x284e35, 0, _0x91fa71, 0) >= 0);
        return _0x3b627f === -1 ? _0x56e7c5.length - 1 : Math.max(0, _0x3b627f - 1);
    }
    ['superMove'](_0x32102b, _0x2cecd3, _0xd6f025, _0x322948) {
        const {
                node: _0x4eeeef,
                offset: _0x5196d9,
                move: _0x315b7b
            } = _0x2cecd3, _0x4da176 = _0x32102b.querySelectorAll('.input-something'), _0x51ce80 = this.findPreviousSmthIndex(_0x32102b, _0x4eeeef, _0x4da176), _0x15fca1 = document.createRange();
        _0x15fca1[_0xd6f025 ? 'setEnd' : 'setStart'](_0x4eeeef, _0x5196d9);
        _0x322948 && _0x315b7b(_0xd6f025);
        ;
        const _0x3b3236 = this.getCaretPosN();
        if (_0x3b3236.node?.nodeValue === V && (!_0x322948 || _0x4eeeef === this.lastNode)) {
            const _0x541d81 = this.findPreviousSmthIndex(_0x32102b, _0x3b3236.node, _0x4da176);
            let _0x9cde28 = !_0x322948;
            do {
                const _0x17e67b = this.getCaretPosN(), _0x45c105 = this.findPreviousSmthIndex(_0x32102b, _0x17e67b.node, _0x4da176);
                _0x15fca1[_0xd6f025 ? 'setStart' : 'setEnd'](_0x17e67b.node, _0x17e67b.offset);
                const _0x18ead1 = _0x15fca1.toString(), _0x1ee71d = !Ra.test(_0x18ead1);
                if (this.log('test cursor', _0x18ead1, _0x1ee71d, _0x541d81, _0x45c105), _0x1ee71d && _0x17e67b.node?.nodeValue === V && _0x45c105 === _0x541d81 && (_0x45c105 || _0x17e67b.offset) && (_0x45c105 < _0x4da176.length - 1 || _0x17e67b.offset < V.length)) {
                    _0x315b7b(_0xd6f025);
                    _0x9cde28 = true;
                    ;
                } else {
                    if (_0x9cde28) {
                        (!this.getFiller(_0x4eeeef).classList.contains('input-filler-text') && _0x541d81 !== _0x51ce80 || _0x17e67b.offset === V.length) && _0x315b7b(!_0xd6f025);
                        break;
                    } else {
                        break;
                    }
                }
            } while (true);
        }
    }
    ['restoreSavedRange'](_0x47461d) {
        const _0x4df899 = this.getSavedRange(_0x47461d);
        if (!_0x4df899) {
            return false;
        }
        const _0xee4147 = window.getSelection();
        return _0xee4147.removeAllRanges(), _0xee4147.addRange(_0x4df899), true;
    }
    ['getSavedRange'](_0x131469) {
        ;
        return this.savedRanges.get(_0x131469);
    }
    ['makeFocused'](_0x170722) {
        ;
        document.activeElement !== _0x170722 && !this.restoreSavedRange(_0x170722) && Oc(_0x170722, false, false);
    }
    ['fixInsertedLineBreaks'](_0x354d1f) {
        ;
        _0x354d1f.querySelectorAll('br').forEach(_0x3558ee => {
            ;
            _0x3558ee.classList.add('br-not-br');
        });
    }
    ['fixBuggedCaret']() {
        const _0x1a834c = document.getSelection(), _0x204157 = _0x1a834c.getRangeAt(0);
        _0x1a834c.removeAllRanges();
        _0x1a834c.addRange(_0x204157);
        ;
    }
    ['addInputCallback'](_0x21740c, _0x5b692b, _0x13f421 = true) {
        const _0x129e44 = () => {
            ;
            this.log('input modify callback');
            _0x5b692b();
            ;
        };
        _0x13f421 && wt ? this.inputCaptureCallbacks.push(_0x129e44) : this.listenerSetter.add(_0x21740c)('input', _0x129e44, {
            'once': true,
            'capture': _0x13f421
        });
    }
    ['removeExtraBOMs'](_0x270c0d) {
        const _0x332a40 = _0x3b1f20 => _0x3b1f20?.classList?.contains('input-something');
        _0x270c0d.querySelectorAll('.input-filler').forEach(_0x3c06f5 => {
            const {
                previousSibling: _0x17ab6b,
                nextSibling: _0x469870
            } = _0x3c06f5;
            let _0x29af58 = false;
            !_0x469870?.classList?.contains('input-filler') && kc(_0x469870) && (_0x29af58 = _0x332a40(_0x17ab6b) || _0x332a40(_0x469870));
            _0x29af58 || (this.log.warn('removing empty bom node', _0x3c06f5), _0x3c06f5.remove());
            ;
        });
    }
    ['getFiller'](_0x126b36) {
        ;
        return _0x126b36 && _0x126b36.nodeType === _0x126b36.TEXT_NODE && _0x126b36.parentElement !== this.input ? _0x126b36.parentElement : _0x126b36;
    }
    ['getCaretPosN']() {
        const _0x2f7a08 = xc(this.input);
        return {
            ..._0x2f7a08,
            'move': this.move.bind(this, _0x2f7a08.selection)
        };
    }
    ['removeEmptyTextNodes'](_0xccc203) {
        const {log: _0x1a2022} = this, _0x26da09 = document.createTreeWalker(_0xccc203, NodeFilter.SHOW_TEXT, { 'acceptNode': _0x391755 => _0x391755.parentElement === _0xccc203 && !_0x391755.nodeValue ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
        let _0x3d34f8;
        for (; _0x3d34f8 = _0x26da09.nextNode();) {
            _0x1a2022.warn('removing empty text node', _0x3d34f8);
            _0x3d34f8.remove();
            ;
        }
    }
    ['removePossibleBOMSiblings'](_0x6f7053, _0x5d6e8b) {
        ;
        [
            _0x6f7053,
            _0x5d6e8b
        ].forEach(_0x59a1bd => {
            ;
            _0x59a1bd?.classList?.contains('input-filler') && _0x59a1bd.remove();
        });
    }
    ['removePossibleBOMSiblingsByNode'](_0x176bb6) {
        const {
            previousSibling: _0xfc30d0,
            nextSibling: _0x1e6ab9
        } = _0x176bb6;
        this.removePossibleBOMSiblings(_0xfc30d0, _0x1e6ab9);
    }
    ['processEmptiedFillers'](_0x555822) {
        ;
        _0x555822.querySelectorAll('.input-filler-text').forEach(_0x37b0c3 => {
            ;
            this.removeExtraBOMs(_0x37b0c3);
            let _0x2470d6 = true;
            if (_0x37b0c3.textContent) {
                !Ra.test(_0x37b0c3.textContent) && !_0x37b0c3.querySelector('.input-something') ? _0x37b0c3.classList.replace('input-filler-text', 'input-filler') : _0x2470d6 = false;
            } else {
                _0x37b0c3.classList.replace('input-filler-text', 'input-filler');
                const _0x5a78e9 = Array.from(_0x37b0c3.childNodes).find(_0x2b3da3 => _0x2b3da3.nodeType === _0x2b3da3.TEXT_NODE);
                _0x5a78e9 ? _0x5a78e9.insertData(0, V) : _0x37b0c3.t?.nodeValue ? _0x37b0c3.append(_0x37b0c3.t) : _0x37b0c3.append(document.createTextNode(V));
            }
            _0x2470d6 && this.removePossibleBOMSiblingsByNode(_0x37b0c3);
        });
    }
    ['processFilledFillers'](_0x3623d7) {
        ;
        _0x3623d7.querySelectorAll('.input-filler').forEach(_0x23ca06 => {
            ;
            if (_0x23ca06.textContent !== V) {
                _0x23ca06.classList.replace('input-filler', 'input-filler-text');
                const _0x2b7992 = _0x23ca06.t, _0x246687 = Array.from(_0x23ca06.childNodes).find(_0x4958e8 => _0x4958e8.nodeType === _0x4958e8.TEXT_NODE && _0x4958e8.nodeValue.includes(V));
                if (_0x246687 && !_0x2b7992?.nodeValue) {
                    const _0x390548 = _0x246687.nodeValue.indexOf(V);
                    _0x390548 !== -1 && _0x246687.deleteData(_0x390548, V.length);
                }
            }
        });
    }
    ['setSelectionClassName'](_0x4c3358, _0xb63293) {
        ;
        if (_0x4c3358.rangeCount) {
            const _0x17605f = _0x4c3358.getRangeAt(0);
            _0xb63293 ? Array.from(_0xb63293.querySelectorAll('.input-selectable')).forEach(_0x2b28fe => {
                ;
                _0x2b28fe.classList.toggle('selection', !_0x17605f.collapsed && _0x17605f.intersectsNode(_0x2b28fe));
            }) : Array.from(document.querySelectorAll('.input-selectable.selection')).forEach(_0x5c2bb4 => _0x5c2bb4.classList.remove('selection'));
        }
    }
    ['move'](_0x316848, _0x2adbcd) {
        const {
            focusNode: _0x38f7ad,
            focusOffset: _0x445e74
        } = _0x316848;
        _0x316848.modify('extend', _0x2adbcd ? 'backward' : 'forward', 'character');
        _0x2adbcd ? _0x316848.collapseToStart() : _0x316848.collapseToEnd();
        ;
        const {
            focusNode: _0x47a60f,
            focusOffset: _0x8f5af5
        } = _0x316848;
        this.log('moving cursor', _0x2adbcd, _0x38f7ad, _0x38f7ad.nodeType === _0x38f7ad.ELEMENT_NODE ? _0x38f7ad : _0x38f7ad.parentElement, _0x445e74, _0x47a60f, _0x47a60f.nodeType === _0x47a60f.ELEMENT_NODE ? _0x47a60f : _0x47a60f.parentElement, _0x8f5af5);
    }
    ['prepareApplyingMarkdown']() {
        const {input: _0x2558df} = this, _0x14c81e = _0x2558df.querySelectorAll('.input-filler'), _0x598ff7 = _0x2558df.querySelectorAll('.input-something');
        return _0x598ff7.forEach(_0x338d33 => {
            ;
            _0x338d33.contentEditable = 'inherit';
        }), () => {
            ;
            _0x14c81e.forEach(_0x59bb4b => {
                ;
                _0x59bb4b.contentEditable = 'inherit';
            });
            _0x598ff7.forEach(_0x4abfaa => {
                ;
                _0x4abfaa.contentEditable = 'false';
            });
            this.removeExtraBOMs(_0x2558df);
            ;
        };
    }
    static ['getInstance']() {
        ;
        return this.INSTANCE ?? (this.INSTANCE = new vn());
    }
}
function n2(_0x956bc) {
    const _0x500f06 = document.createRange();
    _0x500f06.selectNodeContents(_0x956bc);
    const _0x3bc93d = window.getSelection();
    _0x3bc93d.removeAllRanges();
    _0x3bc93d.addRange(_0x500f06);
    ;
}
const i2 = new Set([
    'messageEntityPre',
    'messageEntityCode'
]);
function r2(_0x1f4f18, _0x1266ee) {
    ;
    let _0x451cc1 = -1, _0x5f4c4e = -1;
    return _0x1f4f18.find(_0x212130 => {
        const {
            offset: _0x16b956,
            length: _0x2b07b2
        } = _0x212130;
        return i2.has(_0x212130['_']) && (_0x451cc1 = _0x16b956, _0x5f4c4e = _0x451cc1 + _0x2b07b2), _0x451cc1 !== -1 && _0x1266ee.offset >= _0x451cc1 && _0x1266ee.offset < _0x5f4c4e && !R1.has(_0x1266ee['_']) ? true : _0x1266ee['_'] === _0x212130['_'] || !Of.has(_0x1266ee['_']) && !Of.has(_0x212130['_']) ? _0x1266ee.offset >= _0x16b956 && _0x1266ee.length + _0x1266ee.offset <= _0x2b07b2 + _0x16b956 : false;
    });
}
function a2(_0x5b7473, _0x168be) {
    ;
    _0x5b7473 = _0x5b7473.slice();
    const _0x503b24 = _0x168be.filter(_0x534cc2 => !r2(_0x5b7473, _0x534cc2));
    _0x5b7473.push(..._0x503b24);
    Mc(_0x5b7473);
    ;
    for (let _0x13910b = 0; _0x13910b < _0x5b7473.length; ++_0x13910b) {
        let _0x27ab3e = _0x5b7473[_0x13910b];
        if (_0x27ab3e['_'] === 'messageEntityEmoji') {
            const _0xb1142 = _0x5b7473[_0x13910b + 1];
            _0xb1142 && _0xb1142.offset < _0x27ab3e.offset + _0x27ab3e.length && (_0x27ab3e = _0x5b7473[_0x13910b] = { ..._0x27ab3e }, _0x27ab3e.length = _0xb1142.offset - _0x27ab3e.offset);
        }
    }
    return _0x5b7473;
}
function Nc(_0x1f5af6, _0x2f0f62 = {}) {
    ;
    if (!_0x1f5af6) {
        return gs('');
    }
    let _0x53c698 = _0x2f0f62.entities;
    const _0x159182 = {};
    return _0x159182.messageEntityTextUrl = true, _0x159182.messageEntityMentionName = true, (_0x53c698 && !I.premium && _0x2f0f62.wrappingForPeerId !== I.myId && (_0x53c698 = _0x53c698.filter(_0x336492 => _0x336492['_'] !== 'messageEntityCustomEmoji')), gs(_0x1f5af6, {
        ..._0x2f0f62,
        'entities': _0x53c698,
        'noLinks': true,
        'wrappingDraft': true,
        'passEntities': _0x159182
    }));
}
async function o2(_0x235816, _0x2ec98c, _0x9548a6, _0x1a1e17) {
    const _0x127f74 = [], _0x37f663 = _0x9548a6?.some(_0x9607a7 => _0x9607a7['_'] === 'messageEntityCustomEmoji') ? Uc() : void 0, _0x401f13 = Nc(_0x2ec98c, {
            'entities': _0x9548a6,
            'wrappingForPeerId': _0x1a1e17,
            'loadPromises': _0x127f74,
            'customEmojiRenderer': _0x37f663
        });
    _0x401f13.querySelectorAll('[contenteditable="false"]').forEach(_0x6e74d2 => {
        ;
        _0x6e74d2.contentEditable = 'inherit';
        _0x6e74d2.classList.add('pc');
        ;
    });
    _0x127f74.length && await Promise.all(_0x127f74);
    _0x401f13.querySelectorAll('.input-selectable').forEach(_0x3ff637 => {
        ;
        _0x3ff637.prepend(yn(true));
    });
    ;
    const _0x4df145 = Array.from(_0x401f13.querySelectorAll('.custom-emoji-placeholder')).map(_0x5ad6f6 => (_0x5ad6f6.dataset.ces = '1', _0x5ad6f6.customEmojiElement)), _0x4d99e2 = Yh(_0x401f13);
    _0x37f663?.destroy();
    const _0x3c8fd7 = xc(_0x235816);
    if (!_0x3c8fd7.node) {
        const _0xcf4000 = document.createRange();
        let _0x49437d = _0x235816.lastChild;
        _0x49437d || _0x235816.append(_0x49437d = document.createTextNode(''));
        _0xcf4000.setStartAfter(_0x49437d);
        _0xcf4000.collapse(true);
        _0x3c8fd7.selection.removeAllRanges();
        _0x3c8fd7.selection.addRange(_0xcf4000);
        ;
    }
    const _0x5e2016 = {
        capture: true,
        once: true,
        passive: false
    };
    ;
    ;
    ;
    _0x235816.addEventListener('input', se, _0x5e2016);
    window.document.execCommand('insertHTML', false, _0x4d99e2);
    Array.from(_0x235816.querySelectorAll('[data-ces]')).forEach((_0x3db3f8, _0x488222) => {
        ;
        delete _0x3db3f8.dataset.ces;
        const _0x2075b6 = _0x4df145[_0x488222];
        _0x3db3f8.customEmojiElement = _0x2075b6;
        _0x2075b6.placeholder = _0x3db3f8;
        ;
    });
    _0x235816.querySelectorAll('.pc').forEach(_0x1b2060 => {
        ;
        _0x1b2060.contentEditable = 'false';
    });
    hn(_0x235816, 'input');
    ;
    ;
}
let wi = () => {
    ;
    document.addEventListener('paste', _0x2a1bfb => {
        const _0x3d275 = Kh(_0x2a1bfb.target, 'contenteditable="true"');
        if (!_0x3d275) {
            return;
        }
        const _0x260257 = !!_0x3d275.dataset.noLinebreaks;
        _0x2a1bfb.preventDefault();
        let _0xf0ea44, _0x4a407a, _0x170a60 = (_0x2a1bfb.originalEvent || _0x2a1bfb).clipboardData.getData('text/plain').replace(/\r/g, ''), _0x43e753 = true, _0x5a14db = (_0x2a1bfb.originalEvent || _0x2a1bfb).clipboardData.getData('text/html') || _0x170a60;
        const _0x3abfd2 = _0x3c84cc => _0x3c84cc['_'] === 'messageEntityEmoji' || _0x3c84cc['_'] === 'messageEntityLinebreak' && !_0x260257;
        if (_0x260257) {
            ;
            _0x170a60 = _0x170a60.replace(/[\r\n]/g, '');
            _0x5a14db = _0x5a14db.replace(/[\r\n]/g, '');
            ;
        }
        const _0x407f74 = (_0x3d275.dataset.peerId || Bi).toPeerId();
        if (_0x5a14db.trim()) {
            _0x5a14db = _0x5a14db.replace(/<style([\s\S]*)<\/style>/, '');
            _0x5a14db = _0x5a14db.replace(/<!--([\s\S]*?)-->/g, '');
            _0x5a14db = _0x5a14db.replace('<br class="Apple-interchange-newline">', '');
            _0x5a14db = _0x5a14db.replace(/\r/g, '');
            ;
            const _0x52b01a = _0x5a14db.match(/<body>([\s\S]*)<\/body>/);
            _0x52b01a && (_0x5a14db = _0x52b01a[1].trim());
            const _0x11b871 = new DOMParser().parseFromString(_0x5a14db, 'text/html').body || document.createElement('body');
            let _0x5adb6f = _0x11b871.firstChild;
            for (; _0x5adb6f;) {
                const _0x41382a = _0x5adb6f.nextSibling;
                _0x5adb6f.nodeType === _0x5adb6f.TEXT_NODE && (_0x5adb6f.nodeValue.trim() || _0x5adb6f.remove());
                _0x5adb6f = _0x41382a;
                ;
            }
            const _0x8a5b5a = tn(_0x11b871, true, false);
            !!_0x3d275.dataset.canWrapCustomEmojis || !!_0x407f74 || (_0x8a5b5a.entities = _0x8a5b5a.entities.filter(_0xc28970 => _0xc28970['_'] !== 'messageEntityCustomEmoji'));
            {
                const _0x514bf5 = _0x8a5b5a.value.split('\n');
                let _0xb775d5 = 0;
                for (let _0x5a742a = 0; _0x5a742a < _0x514bf5.length; ++_0x5a742a) {
                    const _0x82c4be = _0x514bf5[_0x5a742a];
                    _0xb775d5 += _0x82c4be.length;
                    const _0xd87b76 = _0xb775d5;
                    if (_0x170a60[_0xd87b76] !== '\n' && _0x5a742a !== _0x514bf5.length - 1) {
                        const _0x1890d9 = _0x514bf5.splice(_0x5a742a + 1, 1)[0];
                        _0x514bf5[_0x5a742a] = _0x82c4be + _0x1890d9;
                        _0x8a5b5a.entities.forEach(_0x57f8c8 => {
                            ;
                            _0x57f8c8.offset >= _0xd87b76 && (_0x57f8c8.offset -= 1);
                        });
                        _0xb775d5 += _0x1890d9.length;
                        ;
                    }
                    _0xb775d5 += 1;
                }
                const _0x49861a = _0x514bf5.join('\n');
                _0x8a5b5a.value = _0x49861a;
            }
            const _0x16b300 = _0x8a5b5a.value.replace(/\s/g, '').length, _0x16744b = _0x170a60.replace(/\s/g, '').length;
            if (_0x16b300 === _0x16744b || _0x8a5b5a.entities.find(_0x1dbe93 => _0x1dbe93['_'] === 'messageEntityCustomEmoji')) {
                _0xf0ea44 = _0x8a5b5a.value;
                _0x4a407a = _0x8a5b5a.entities;
                _0x43e753 = false;
                ;
                let _0x363d5a = Kf(_0xf0ea44);
                _0x363d5a = _0x363d5a.filter(_0x3abfd2);
                _0x4a407a = a2(_0x4a407a, _0x363d5a);
                ;
            }
        }
        _0x43e753 && (_0xf0ea44 = _0x170a60, _0x4a407a = Kf(_0xf0ea44), _0x4a407a = _0x4a407a.filter(_0x3abfd2));
        o2(_0x3d275, _0xf0ea44, _0x4a407a, _0x407f74);
        ;
    });
    wi = null;
    ;
};
var Bc = (_0x19f730 => (_0x19f730[_0x19f730.Neutral = 0] = 'Neutral', _0x19f730[_0x19f730.Valid = 1] = 'Valid', _0x19f730[_0x19f730.Error = 2] = 'Error', _0x19f730))(Bc || {});
function Uc(_0x4ef992, _0x11bd7f) {
    const _0xe4db02 = {};
    return _0xe4db02.wrappingDraft = true, _0xe4db02.isSelectable = true, _0xe4db02.textColor = _0x4ef992 || 'primary-text-color', _0xe4db02.animationGroup = _0x11bd7f, ms.create(_0xe4db02);
}
function Oa(_0x4cbb65) {
    const _0x3f0b3f = Array.from(_0x4cbb65.querySelectorAll('.custom-emoji, .custom-emoji-placeholder'));
    let _0x439581 = _0x4cbb65.querySelector('.custom-emoji-renderer');
    if (!_0x439581 && _0x3f0b3f.length) {
        _0x439581 = Uc(_0x4cbb65.dataset.textColor, _0x4cbb65.dataset.animationGroup);
        _0x4cbb65.prepend(_0x439581);
        ;
    } else {
        if (_0x439581 && !_0x3f0b3f.length) {
            _0x439581.remove();
            return;
        }
    }
    if (!_0x439581) {
        return;
    }
    const _0x4d7902 = new Map();
    _0x3f0b3f.forEach(_0x27ec37 => {
        const _0x1ac28a = _0x27ec37.loop !== void 0 ? _0x27ec37 : _0x27ec37.customEmojiElement, {docId: _0x376cf4} = _0x1ac28a;
        let _0x591836 = _0x4d7902.get(_0x376cf4);
        _0x591836 || _0x4d7902.set(_0x376cf4, _0x591836 = new Set());
        _0x591836.add(_0x1ac28a);
        ;
    });
    for (const [_0x236d8f, _0x11029d] of _0x4d7902) {
        let _0xe1a766 = _0x439581.customEmojis.get(_0x236d8f);
        if (_0xe1a766) {
            for (const _0x138f05 of _0xe1a766)
                _0x11029d.has(_0x138f05) || _0x138f05.destroy();
        } else {
            _0xe1a766 = new Set();
        }
        for (const _0x46a7da of _0x11029d)
            _0xe1a766.has(_0x46a7da) || _0x46a7da.connectedCallback();
    }
    const _0x222bb2 = {
        addCustomEmojis: _0x4d7902,
        lazyLoadQueue: false
    };
    ;
    ;
    _0x439581.add(_0x222bb2);
    _0x439581.forceRender();
    ;
    ;
}
class jc {
    constructor(_0x4c93ff = {}) {
        ;
        this.options = _0x4c93ff;
        this.setEmpty = (_0x409d78 = this.isEmpty()) => {
            ;
            [
                this.input,
                this.placeholder
            ].filter(Boolean).forEach(_0x2e036f => {
                ;
                _0x2e036f.classList.toggle('is-empty', _0x409d78);
            });
        };
        this.container = document.createElement('div');
        this.container.classList.add('input-field');
        this.required = _0x4c93ff.required;
        this.validate = _0x4c93ff.validate;
        _0x4c93ff.maxLength !== void 0 && _0x4c93ff.showLengthOn === void 0 && (_0x4c93ff.showLengthOn = Math.min(40, Math.round(_0x4c93ff.maxLength / 3)));
        ;
        const {
                placeholder: _0x328886,
                maxLength: _0x31e93f,
                showLengthOn: _0xf6170c,
                name: _0x4cb588,
                plainText: _0xd7f85d,
                canBeEdited: _0x43b9e6 = true,
                autocomplete: _0x4454bb,
                withBorder: _0x20653f,
                allowStartingSpace: _0x17848a,
                canHaveFormatting: _0x514543,
                canWrapCustomEmojis: _0x37eb54
            } = _0x4c93ff, _0x37e965 = _0x4c93ff.label || _0x4c93ff.labelText;
        this.allowStartingSpace = _0x17848a;
        const _0x1ad5ec = [];
        let _0x40ed2a;
        if (_0xd7f85d ? (this.container.innerHTML = '\n      <input type="text" ' + (_0x4cb588 ? 'name="' + _0x4cb588 + '"' : '') + ' autocomplete="' + (_0x4454bb ?? 'off') + '" ' + (_0x37e965 ? 'required=""' : '') + ' class="input-field-input">\n      ', _0x40ed2a = this.container.firstElementChild, _0x1ad5ec.push(() => {
                const _0x76cccb = this.isEmpty();
                _0x76cccb && (_0x40ed2a.value = '');
                this.setEmpty(_0x76cccb);
                ;
            })) : (wi && wi(), this.container.innerHTML = '<div class="input-field-input"></div>', _0x40ed2a = this.container.firstElementChild, _0x40ed2a.contentEditable = '' + !!_0x43b9e6, vn.getInstance(), _0x40ed2a.addEventListener('mousedown', _0x47bc03 => {
                const _0x4e674a = document.getSelection();
                if (!_0x4e674a.isCollapsed) {
                    return;
                }
                const _0x3f9473 = Jh(_0x47bc03.target, 'IMG');
                if (!_0x3f9473) {
                    return;
                }
                const _0x1e0f7d = _0x3f9473.getBoundingClientRect(), _0x464e97 = _0x1e0f7d.left + _0x1e0f7d.width / 2, _0x3f6c31 = _0x47bc03.clientX >= _0x464e97, _0x1f2aa5 = document.createRange();
                _0x1f2aa5.setStartAfter(_0x3f6c31 ? _0x3f9473 : _0x3f9473.previousSibling ?? _0x3f9473);
                _0x4e674a.removeAllRanges();
                _0x4e674a.addRange(_0x1f2aa5);
                ;
            }), _0x514543 && _0x40ed2a.setAttribute('can-format', _0x514543.join(',')), _0x1ad5ec.push(() => {
                ;
                const _0x222d83 = this.isEmpty();
                _0x222d83 && _0x40ed2a.replaceChildren();
                this.setEmpty(_0x222d83);
                Fc(Array.from(_0x40ed2a.querySelectorAll('.input-something')));
                Oa(_0x40ed2a);
                ;
            })), tf(_0x40ed2a), _0x4c93ff.inputMode && (_0x40ed2a.inputMode = _0x4c93ff.inputMode), _0x328886 && (this.placeholder = document.createElement('span'), this.placeholder.classList.add('input-field-placeholder'), this.container.append(this.placeholder), Gi(this.placeholder, _0x328886, void 0)), _0x20653f !== false && _0x20653f || _0x37e965 || _0x328886) {
            const _0x293ced = document.createElement('div');
            _0x293ced.classList.add('input-field-border');
            this.container.append(_0x293ced);
            ;
        }
        if (_0x37e965 != null && (this.label = document.createElement('label'), this.setLabel(), this.container.append(this.label)), _0x31e93f) {
            const _0x169a47 = this.container.lastElementChild;
            let _0xb92737 = false;
            const _0x433c2e = () => {
                const _0x1ad3bc = _0x40ed2a.classList.contains('error'), _0x582eb8 = _0xd7f85d ? _0x40ed2a.value.length : [...tn(_0x40ed2a, false, false).value].length, _0x2f57d8 = _0x31e93f - _0x582eb8, _0x3c91d6 = _0x2f57d8 < 0;
                _0x40ed2a.classList.toggle('error', _0x3c91d6);
                _0x3c91d6 || _0x2f57d8 <= _0xf6170c ? (this.setLabel(), _0x169a47.append(' (' + (_0x31e93f - _0x582eb8) + ')'), _0xb92737 || (_0xb92737 = true)) : (_0x1ad3bc && !_0x3c91d6 || _0xb92737) && (this.setLabel(), _0xb92737 = false);
                ;
            };
            _0x1ad5ec.push(_0x433c2e);
        }
        !_0x4c93ff.withLinebreaks && !_0xd7f85d && (_0x40ed2a.dataset.noLinebreaks = '1', _0x40ed2a.addEventListener('keypress', _0x40eb88 => {
            ;
            if (_0x40eb88.key === 'Enter') {
                return _0x40eb88.preventDefault(), false;
            }
        }));
        _0x4c93ff.onRawInput && _0x1ad5ec.push(() => {
            ;
            _0x4c93ff.onRawInput(this.value);
        });
        _0x1ad5ec.length && _0x40ed2a.addEventListener('input', () => {
            _0x1ad5ec.forEach(_0x222944 => _0x222944());
        });
        _0x37eb54 && (_0x40ed2a.dataset.canWrapCustomEmojis = '1');
        this.input = _0x40ed2a;
        this.setEmpty(true);
        ;
    }
    ['select']() {
        ;
        this.value && (this.options.plainText ? this.input.select() : n2(this.input));
    }
    ['setLabel']() {
        ;
        this.label.textContent = '';
        this.options.labelText ? N1(this.label, this.options.labelText) : this.label.append(X(this.options.label, this.options.labelOptions));
        this.label.style.visibility = this.label.textContent ? 'visible' : 'hidden';
        ;
    }
    get ['value']() {
        ;
        return this.options.plainText ? this.input.value : tn(this.input, false, false).value;
    }
    set ['value'](_0x23be6d) {
        ;
        this.setValueSilently(_0x23be6d, true);
        this.simulateInputEvent();
        ;
    }
    ['simulateInputEvent']() {
        ;
        hn(this.input, 'input');
    }
    ['setValueSilently'](_0x64effc, _0x1050fb) {
        ;
        this.options.plainText ? this.input.value = _0x64effc : (oc(this.input, _0x64effc), Oa(this.input));
        this.setEmpty();
        ;
    }
    ['isEmpty']() {
        ;
        return f2(this.input, this.allowStartingSpace);
    }
    ['isChanged']() {
        ;
        return this.value !== this.originalValue;
    }
    ['isValid']() {
        ;
        return !this.input.classList.contains('error') && (!this.validate || this.validate()) && (!this.required || !this.isEmpty());
    }
    ['isValidToChange']() {
        ;
        return this.isValid() && this.isChanged();
    }
    ['setDraftValue'](_0x27a67f = '', _0x1bc2a5) {
        ;
        let _0x4d41d2 = _0x27a67f;
        this.options.plainText || (_0x4d41d2 = Nc(_0x27a67f));
        _0x1bc2a5 ? this.setValueSilently(_0x4d41d2, false) : this.value = _0x4d41d2;
        ;
    }
    ['setOriginalValue'](_0x21e51d = '', _0x1acc12) {
        ;
        this.originalValue = _0x21e51d;
        this.setDraftValue(_0x21e51d, _0x1acc12);
        ;
    }
    ['setState'](_0x45c38e, _0x16ab38) {
        ;
        _0x16ab38 ? (this.label.textContent = '', this.label.append(X(_0x16ab38, this.options.labelOptions)), this.label.style.visibility = 'visible') : this.setLabel();
        this.input.classList.toggle('error', !!(_0x45c38e & 2));
        this.input.classList.toggle('valid', !!(_0x45c38e & 1));
        ;
    }
    ['setError'](_0x48c297) {
        this.setState(2, _0x48c297);
    }
    ['toggleForceFocus'](_0x53fbe2) {
        ;
        this.input.classList.toggle('force-focus', _0x53fbe2);
    }
}
class c2 {
    constructor(_0x104226, _0x1dc2e1) {
        ;
        this.container = _0x104226;
        this.input = _0x1dc2e1;
        this.passwordVisible = false;
        this.onVisibilityClick = _0x4295a1 => {
            ;
            se(_0x4295a1);
            this.passwordVisible = !this.passwordVisible;
            this.toggleVisible.replaceChildren(At(this.passwordVisible ? 'eye2' : 'eye1'));
            this.input.type = this.passwordVisible ? 'text' : 'password';
            this.onVisibilityClickAdditional?.();
            ;
        };
        _0x1dc2e1.type = 'password';
        _0x1dc2e1.setAttribute('required', '');
        _0x1dc2e1.name = 'notsearch_password';
        _0x1dc2e1.autocomplete = 'off';
        ;
        const _0x5cd9f4 = document.createElement('input');
        _0x5cd9f4.classList.add('stealthy');
        _0x5cd9f4.tabIndex = -1;
        _0x5cd9f4.type = 'password';
        _0x1dc2e1.parentElement.prepend(_0x5cd9f4);
        _0x1dc2e1.parentElement.insertBefore(_0x5cd9f4.cloneNode(), _0x1dc2e1.nextSibling);
        ;
        const _0x311fc1 = this.toggleVisible = document.createElement('span');
        _0x311fc1.classList.add('toggle-visible');
        _0x311fc1.append(At('eye1'));
        _0x104226.classList.add('input-field-password');
        _0x104226.append(_0x311fc1);
        _0x311fc1.addEventListener('click', this.onVisibilityClick);
        _0x311fc1.addEventListener('touchend', this.onVisibilityClick);
        ;
    }
}
class d2 extends jc {
    constructor(_0x462aae = {}) {
        ;
        super({
            'plainText': true,
            'allowStartingSpace': true,
            ..._0x462aae
        });
        this.helpers = new c2(this.container, this.input);
        ;
    }
}
class l2 {
    constructor(_0x38d51a, _0x25fd7d) {
        ;
        this.passwordInputField = _0x38d51a;
        this.size = _0x25fd7d;
        this.needFrame = 0;
        this.container = document.createElement('div');
        this.container.classList.add('media-sticker-wrapper');
        ;
    }
    ['load']() {
        ;
        return this.loadPromise ? this.loadPromise : this.loadPromise = ls.loadAnimationAsAsset({
            'container': this.container,
            'loop': false,
            'autoplay': false,
            'width': this.size,
            'height': this.size,
            'noCache': true
        }, '7cfbb962').then(_0xc1fca => (this.animation = _0xc1fca, this.animation.addEventListener('enterFrame', _0x26d599 => {
            ;
            (this.animation.direction === 1 && _0x26d599 >= this.needFrame || this.animation.direction === -1 && _0x26d599 <= this.needFrame) && (this.animation.setSpeed(1), this.animation.pause());
        }), this.passwordInputField.helpers.onVisibilityClickAdditional = () => {
            ;
            this.passwordInputField.helpers.passwordVisible ? (this.animation.setDirection(1), this.animation.curFrame = 0, this.needFrame = 16, this.animation.play()) : (this.animation.setDirection(-1), this.animation.curFrame = 16, this.needFrame = 0, this.animation.play());
        }, ls.waitForFirstFrame(_0xc1fca)));
    }
    ['remove']() {
        ;
        this.animation && this.animation.remove();
    }
}
const u2 = _0x222377 => {
        const _0x200664 = { InputFieldClass: jc };
        ;
        const _0x5ee084 = Q1(_0x200664, _0x222377), [, _0x284216] = lo(_0x5ee084, [
                'class',
                'value',
                'InputFieldClass',
                'errorLabel'
            ]), _0xeee15c = new _0x5ee084.InputFieldClass(_0x284216);
        return _0x5ee084.instanceRef?.(_0xeee15c), rt(Is(() => _0x5ee084.class, (_0x38363c, _0x2c150f) => {
            ;
            _0x2c150f && _0xeee15c.container.classList.remove(_0x2c150f);
            _0x38363c && _0xeee15c.container.classList.add(_0x38363c);
            ;
        })), rt(Is(() => _0x5ee084.errorLabel, (_0x395bff, _0x5a5ba6) => {
            ;
            !_0x395bff && !_0x5a5ba6 || (_0x395bff ? _0xeee15c.setError(_0x395bff) : _0xeee15c.setState(Bc.Neutral));
        })), rt(Is(() => _0x5ee084.value, _0x424a54 => {
            ;
            _0x424a54 !== _0xeee15c.value && _0x424a54 !== void 0 && (_0xeee15c.value = _0x424a54);
        })), _0xeee15c.container;
    }, Hc = Hi(null), Wc = Hi(null);
function N3() {
    const _0x5088cd = Uf(Hc);
    if (!_0x5088cd) {
        throw new Error('useHotReloadGuard should not be used outside a <SolidJSHotReloadGuardProvider />');
    }
    return _0x5088cd;
}
function B3() {
    const _0x375f71 = Uf(Wc) || Uf(Hc);
    if (!_0x375f71) {
        throw new Error('useLockScreenHotReloadGuard should not be used outside a <LockScreenHotReloadGuardProvider />');
    }
    return _0x375f71;
}
function h2(_0x18da88) {
    const _0x51f1ea = {
        rootScope: I,
        themeController: Cr,
        apiManagerProxy: re,
        InputFieldTsx: u2,
        PasswordInputField: d2,
        PasswordMonkey: l2
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x330c05 = {
        get 'children'() {
            ;
            return _0x18da88.children;
        }
    };
    return _0x330c05.value = _0x51f1ea, zn(Wc.Provider, _0x330c05);
}
class Xs extends ln {
    static ['getIsLocked']() {
        ;
        return this.isLocked;
    }
    static async ['tryGetStoredEncryptionHash']() {
        const _0x3c7588 = await j.get('encryption_key');
        if (_0x3c7588) {
            if (j.delete('encryption_key'), !(typeof _0x3c7588 == 'string')) {
                return false;
            }
            const _0xb5b72b = { name: 'AES-GCM' };
            ;
            const _0x1c6194 = new Uint8Array(atob(_0x3c7588).split('').map(_0x51984a => _0x51984a.charCodeAt(0))), _0x3b04c2 = await crypto.subtle.importKey('raw', _0x1c6194, _0xb5b72b, true, [
                    'encrypt',
                    'decrypt'
                ]);
            return await re.invoke('saveEncryptionKey', _0x3b04c2), ct.save(_0x3b04c2), true;
        }
        return false;
    }
    static async ['checkLockState'](_0x51ca9f) {
        const _0x125f0b = await this.tryGetStoredEncryptionHash() ? false : await re.invoke('isLocked', void 0);
        this.isLocked = _0x125f0b;
        _0x125f0b ? (await _0x51ca9f(), await this.lock()) : (this.appStartupDeferred.resolve(), this.appStartupDeferred = void 0);
        ;
    }
    static async ['waitForUnlock'](_0x2b133f) {
        ;
        this.checkLockState(_0x2b133f);
        await this.appStartupDeferred;
        this.isLocked = false;
        ;
    }
    static async ['lockOtherTabs']() {
        ;
        await re.invoke('toggleLockOthers', true);
    }
    static async ['lock'](_0x297d0c, _0x241774) {
        ;
        if (this.mountedElement) {
            return;
        }
        this.isLocked = true;
        this.appStartupDeferred && (this.savedHash = window.location.hash, window.location.hash = '');
        ;
        const _0x5f2e3d = !!_0x297d0c, _0x617947 = () => ze(() => import('./ex5wh64xjoki.js'), __vite__mapDeps([
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ]), import.meta.url);
        await Promise.race([
            ft(100),
            _0x617947()
        ]);
        this.mountedElement = document.createElement('div');
        this.mountedElement.classList.add('passcode-lock-screen');
        ;
        const _0x3c9d35 = _0x297d0c instanceof HTMLElement ? this.cloneLockIcon(_0x297d0c) : void 0;
        _0x3c9d35 && this.mountedElement.append(_0x3c9d35);
        _0x5f2e3d && this.mountedElement.classList.add('passcode-lock-screen--hidden');
        document.body.append(this.mountedElement);
        ;
        const {default: _0x38462e} = await _0x617947();
        this.dispose = gi(() => {
            const _0x2e8579 = this;
            return zn(h2, {
                get 'children'() {
                    ;
                    return zn(_0x38462e, {
                        'onUnlock': () => _0x2e8579.unlock(),
                        'fromLockIcon': _0x3c9d35,
                        'onAnimationEnd': _0x241774
                    });
                }
            });
        }, this.mountedElement);
        _0x5f2e3d && Wa().then(async () => {
            ;
            this.mountedElement.classList.remove('passcode-lock-screen--hidden');
            _0x3c9d35 || ft(200).then(() => {
                ;
                _0x241774();
            });
            ;
        });
        ;
    }
    static ['cloneLockIcon'](_0x44bd54) {
        const _0x3e51d8 = _0x44bd54.cloneNode(true);
        _0x3e51d8.classList.add('passcode-lock-screen__animated-lock-icon');
        const _0x3345ed = _0x44bd54.getBoundingClientRect();
        return _0x3e51d8.style.setProperty('--x', _0x3345ed.left + _0x3345ed.width / 2 + 'px'), _0x3e51d8.style.setProperty('--y', _0x3345ed.top + _0x3345ed.height / 2 + 'px'), _0x3e51d8;
    }
    static ['unlock']() {
        const _0x1dd5be = this.mountedElement;
        this.mountedElement = void 0;
        this.isLocked = false;
        this.savedHash && (Ie.overrideHash(this.savedHash), Ie.replaceState());
        _0x1dd5be && ((async () => {
            ;
            _0x1dd5be.style.setProperty('transition-time', '.12s');
            await ft(120);
            ;
            const _0x5deae3 = async () => {
                ;
                await ft(250);
                _0x1dd5be.classList.add('passcode-lock-screen--hidden');
                await ft(120);
                this.dispose?.();
                _0x1dd5be?.remove();
                ;
            };
            document.startViewTransition ? document.startViewTransition(_0x5deae3) : _0x5deae3();
        })());
        this.appStartupDeferred?.resolve();
        this.appStartupDeferred = void 0;
        ;
    }
}
Dn(Xs, 'appStartupDeferred', q());
Dn(Xs, 'savedHash', '');
N.PasscodeLockScreenControler = Xs;
;
class m2 extends ns {
    constructor() {
        ;
        super();
        this.closeMTProtoWorker = ve;
        this.onMirrorTask = _0x2f2013 => {
            ;
            var _0x12363d;
            const {
                name: _0x27851d,
                key: _0x6257e0,
                value: _0x5ed603,
                accountNumber: _0x120693
            } = _0x2f2013;
            if (!(_0x27851d === 'state' && _0x6257e0 === 'settings') && _0x120693 !== Ve()) {
                return;
            }
            if (this.processMirrorTaskMap[_0x27851d]?.(_0x2f2013), !_0x2f2013.hasOwnProperty('key')) {
                this.mirrors[_0x27851d] = _0x5ed603;
                return;
            }
            const _0x26ff57 = (_0x12363d = this.mirrors)[_0x27851d] ?? (_0x12363d[_0x27851d] = {});
            Dl(_0x26ff57, _0x6257e0, _0x5ed603, true);
        };
        this.mirrors = {
            'state': void 0,
            'thumbs': {},
            'stickerThumbs': {},
            'availableReactions': void 0,
            'messages': {},
            'groupedMessages': {},
            'peers': {},
            'avatars': {}
        };
        this.processMirrorTaskMap = {
            'messages': _0x378ff7 => {
                ;
                var _0x3bb1a1;
                if (!_0x378ff7.key) {
                    for (const _0x1aaac9 in _0x378ff7.value)
                        for (const _0x120547 in _0x378ff7.value[_0x1aaac9])
                            this.processMirrorTaskMap.messages({
                                'name': _0x378ff7.name,
                                'accountNumber': _0x378ff7.accountNumber,
                                'key': $f(_0x1aaac9, _0x120547),
                                'value': _0x378ff7.value[_0x1aaac9][_0x120547]
                            });
                    return;
                }
                const _0x3b8a7c = _0x378ff7.value;
                let _0x1c9e05, _0x56f483;
                if (_0x3b8a7c) {
                    _0x1c9e05 = _0x3b8a7c.mid;
                    _0x56f483 = _0x3b8a7c.grouped_id;
                    ;
                } else {
                    const [_0xfa66eb, _0x2ea4f7] = wl(_0x378ff7.key);
                    _0x1c9e05 = +_0x2ea4f7;
                    const _0x438349 = this.mirrors.messages[_0xfa66eb]?.[_0x1c9e05];
                    if (!_0x438349) {
                        return;
                    }
                    _0x56f483 = _0x438349.grouped_id;
                }
                if (!_0x56f483) {
                    return;
                }
                const _0x248b24 = (_0x3bb1a1 = this.mirrors.groupedMessages)[_0x56f483] ?? (_0x3bb1a1[_0x56f483] = new Map());
                _0x3b8a7c ? _0x248b24.set(_0x1c9e05, _0x3b8a7c) : (_0x248b24.delete(_0x1c9e05), _0x248b24.size || delete this.mirrors.groupedMessages[_0x56f483]);
            },
            'state': _0x33c3ec => {
                ;
                _0x33c3ec.key && Jr(_0x33c3ec.key, _0x33c3ec.value);
            },
            'peers': _0x15deb6 => {
                ;
                _0x15deb6.key ? Il(_0x15deb6.key.toPeerId(), _0x15deb6.value) : Rl(_0x15deb6.value);
            }
        };
        this.tabState = {
            'accountNumber': Ve(),
            'chatPeerIds': [],
            'idleStartTime': 0
        };
        this.intervals = new Map();
        this.log('constructor');
        this.registerWorker();
        this.registerServiceWorker();
        this.registerCryptoWorker();
        ;
        const _0x9e261c = new Set([
            'language_change',
            'settings_updated',
            'theme_changed',
            'theme_change',
            'background_change',
            'logging_out',
            'notification_count_update',
            'account_logged_in',
            'notification_cancel',
            'toggle_using_passcode',
            'toggle_locked'
        ]);
        this.addMultipleEventsListeners({
            'convertWebp': ({
                fileName: _0x3e9f3e,
                bytes: _0x49d939
            }) => $i.convert(_0x3e9f3e, _0x49d939),
            'convertOpus': ({
                fileName: _0x128ce9,
                bytes: _0x126c7d
            }) => To.pushDecodeTask(_0x126c7d, false).then(_0x1e7073 => _0x1e7073.bytes),
            'event': ({
                name: _0x3ddae5,
                args: _0x30feb9,
                accountNumber: _0x31e239
            }) => {
                const _0x456f97 = _0x31e239 && _0x31e239 !== Ve();
                !_0x9e261c.has(_0x3ddae5) && _0x456f97 || I.dispatchEventSingle(_0x3ddae5, ..._0x30feb9);
            },
            'localStorageProxy': _0x22991e => j.localStorageProxy(_0x22991e.type, ..._0x22991e.args),
            'mirror': this.onMirrorTask,
            'receivedServiceMessagePort': () => {
                ;
                this.log.warn('mtproto worker received service message port');
            },
            'tabsUpdated': _0x444100 => {
                ;
                this.allTabStates = _0x444100;
                I.dispatchEvent('notification_count_update');
                ;
            },
            'callNotification': async _0x1cfd08 => {
                const {accountNumber: _0x383300} = _0x1cfd08, _0x1db68b = Ps(_0x383300), _0x3d81d5 = _0x1cfd08.callerId.toPeerId(), _0x511e3b = await _0x1db68b.appPeersManager.getPeer(_0x3d81d5), _0x1679c0 = await yh({
                        'peerId': _0x3d81d5,
                        'managers': _0x1db68b,
                        'plainText': true,
                        'limitSymbols': 20,
                        'useManagers': true
                    }), _0x5694f3 = new Notification(_0x1679c0, {
                        'body': ue.format('Call.StatusCalling', true),
                        'icon': await kh(_0x1db68b, _0x3d81d5, _0x1679c0),
                        'badge': vh
                    });
                _0x5694f3.onclick = () => {
                    const _0x1fbbb6 = _0x511e3b.id, _0x29b40a = In(_0x383300, {
                            'p': '' + _0x1fbbb6.toPeerId(),
                            'call': '' + _0x1cfd08.callId
                        });
                    window.open(_0x29b40a, '_blank');
                    _0x5694f3.close();
                    ;
                };
                setTimeout(() => {
                    ;
                    _0x5694f3.close();
                }, 5000);
                ;
            },
            'log': _0x4527d0 => {
            },
            'intervalCallback': _0x5dd318 => {
                const _0x30a0bf = this.intervals.get(_0x5dd318);
                _0x30a0bf && _0x30a0bf();
            },
            'saveEncryptionKey': _0x1fd112 => {
                ;
                ct.save(_0x1fd112);
            },
            'toggleLock': _0x5e44c4 => {
                ;
                _0x5e44c4 ? Xs.lock() : Xs.unlock();
            },
            'toggleCacheStorage': _0x3b6572 => {
                ;
                qf.temporarilyToggle(_0x3b6572);
            },
            'toggleUsingPasscode': _0x5488fe => {
                ;
                Me.resolveDeferred(_0x5488fe.isUsingPasscode);
                ct.save(_0x5488fe.isUsingPasscode ? _0x5488fe.encryptionKey : null);
                ;
            }
        });
        I.addEventListener('language_change', _0x1a4020 => {
            ;
            I.managers.networkerFactory.setLanguage(_0x1a4020);
            I.managers.appAttachMenuBotsManager.onLanguageChange();
            ;
        });
        window.addEventListener('online', () => {
            ;
            I.managers.networkerFactory.forceReconnectTimeout();
        });
        I.addEventListener('logging_out', ({
            accountNumber: _0x4b65f0,
            migrateTo: _0x1585a9
        }) => {
            ;
            Promise.all([
                $r(false, true),
                Promise.race([
                    Yi.setAuthorized(false),
                    ft(3000)
                ]),
                zf.forceUnsubscribe(),
                this.invokeVoid('terminate', void 0),
                this.serviceWorkerRegistration?.unregister().catch(ve)
            ]).finally(() => {
                ;
                let _0x229608 = new URL(location.href);
                const _0x13a252 = Ve();
                if (!_0x4b65f0) {
                    _0x229608.hash = '';
                    _0x229608.search = '';
                    ;
                } else {
                    if (_0x13a252 > _0x4b65f0) {
                        const _0x5aaaf6 = _0x13a252 - 1;
                        _0x229608 = In(_0x5aaaf6, void 0, true);
                    } else {
                        _0x13a252 === _0x4b65f0 && (_0x1585a9 ? _0x229608 = In(_0x1585a9) : (_0x229608.hash = '', _0x229608.search = ''));
                    }
                }
                history.replaceState(null, '', _0x229608);
                this.closeMTProtoWorker();
                go.reload();
                ;
            });
        });
        I.addEventListener('settings_updated', ({
            key: _0x14d5cf,
            settings: _0x18a991
        }) => {
            Sa(_0x18a991);
        });
        I.addEventListener('toggle_using_passcode', _0x2d6f1a => {
            ;
            Me.resolveDeferred(_0x2d6f1a);
        });
        as.addEventListener('change', _0x325dd5 => {
            ;
            this.updateTabStateIdle(_0x325dd5);
        });
        this.updateTabStateIdle(as.isIdle);
        ;
    }
    ['sendEnvironment']() {
        ;
        this.log('Passing environment:', hf);
        this.invoke('environment', hf);
        ;
    }
    ['pingServiceWorkerWithIframe']() {
        ;
        if (this.pingServiceWorkerPromise) {
            return this.pingServiceWorkerPromise;
        }
        const _0x39ec74 = this.pingServiceWorkerPromise = q(), _0x692373 = document.createElement('iframe');
        _0x692373.hidden = true;
        const _0x85a029 = () => {
                ;
                clearTimeout(_0x124cc0);
                setTimeout(() => {
                    ;
                    this.pingServiceWorkerPromise = void 0;
                }, 10000);
                _0x692373.removeEventListener('load', _0x4a072f);
                _0x692373.removeEventListener('error', _0x15614a);
                _0x692373.remove();
                ;
            }, _0x4a072f = () => {
                ;
                _0x85a029();
                _0x39ec74.resolve();
                ;
            }, _0x15614a = () => {
                _0x85a029();
                _0x39ec74.reject();
                ;
            };
        _0x692373.addEventListener('load', _0x4a072f);
        _0x692373.addEventListener('error', _0x15614a);
        _0x692373.src = 'ping/' + (Math.random() * 4294967295 | 0) + '.nocache';
        document.body.append(_0x692373);
        ;
        const _0x124cc0 = window.setTimeout(_0x15614a, 1500);
        return _0x39ec74;
    }
    ['attachServiceWorker'](_0x356e45) {
        ;
        if (this.lastServiceWorker === _0x356e45) {
            this.log.warn('trying to attach same service worker');
            return;
        }
        this.lastServiceWorker && this.serviceMessagePort.detachPort(this.lastServiceWorker);
        this.serviceMessagePort.attachSendPort(this.lastServiceWorker = _0x356e45);
        this.serviceMessagePort.invokeVoid('hello', void 0);
        this.serviceMessagePort.invokeVoid('environment', hf);
        Me.isUsingPasscode().then(_0x3696d5 => {
            const _0x2fcdce = { isUsingPasscode: false };
            ;
            _0x3696d5 || this.serviceMessagePort.invokeVoid('toggleUsingPasscode', _0x2fcdce);
            ;
        });
        ;
    }
    ['_registerServiceWorker']() {
        const _0x573081 = {
            type: 'module',
            scope: './'
        };
        ;
        ;
        navigator.serviceWorker.register(El, _0x573081).then(_0x3fef8f => {
            ;
            this.log('SW registered', _0x3fef8f);
            this.serviceWorkerRegistration = _0x3fef8f;
            ;
            const _0x4872d4 = new URL(window.location.href), _0x181dc8 = +_0x4872d4.searchParams.get('swfix') || 0;
            if (_0x3fef8f.active && !navigator.serviceWorker.controller) {
                if (_0x181dc8 >= 3) {
                    throw new Error('no controller');
                }
                return _0x3fef8f.unregister().then(() => {
                    ;
                    _0x4872d4.searchParams.set('swfix', '' + (_0x181dc8 + 1));
                    window.location.href = _0x4872d4.toString();
                    ;
                });
            }
            _0x181dc8 && (_0x4872d4.searchParams.delete('swfix'), history.pushState(void 0, '', _0x4872d4));
            (_0x3fef8f.installing || _0x3fef8f.waiting || _0x3fef8f.active).addEventListener('statechange', _0x4f2bb5 => {
                ;
                this.log('SW statechange', _0x4f2bb5);
            });
            ;
            const _0x39e205 = navigator.serviceWorker.controller || _0x3fef8f.installing || _0x3fef8f.waiting || _0x3fef8f.active;
            this.attachServiceWorker(_0x39e205);
        }).catch(_0x11390e => {
            ;
            this.log.error('SW registration failed!', _0x11390e);
            this.invokeVoid('serviceWorkerOnline', false);
            ;
        });
        ;
    }
    ['registerServiceWorker']() {
        ;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        this.serviceMessagePort = zf.serviceMessagePort = new vl();
        const _0x3dd3c0 = navigator.serviceWorker;
        this['_registerServiceWorker']();
        _0x3dd3c0.addEventListener('controllerchange', () => {
            ;
            this.log.warn('controllerchange');
            const _0x372d63 = _0x3dd3c0.controller;
            this.attachServiceWorker(_0x372d63);
            _0x372d63.addEventListener('error', _0xc79f5c => {
                ;
                this.log.error('controller error:', _0xc79f5c);
            });
            ;
        });
        this.serviceMessagePort.attachListenPort(_0x3dd3c0);
        this.serviceMessagePort.addMultipleEventsListeners({
            'port': (_0x3a6e16, _0x46acf5, _0x1fd4fe) => {
                ;
                this.log.warn('got service worker port');
                this.invokeVoid('serviceWorkerPort', void 0, void 0, [_0x1fd4fe.ports[0]]);
                ;
            },
            'serviceCryptoPort': (_0x380520, _0x1529b5, _0x5abee4) => {
                ;
                it.sendToOnePort(_0x5abee4.ports[0]);
            },
            'hello': (_0x15de1d, _0x521ddb) => {
                ;
                this.log('got hello from service worker');
                this.serviceMessagePort.resendLockTask(_0x521ddb);
                this.serviceMessagePort.invokeVoid('environment', hf);
                ;
            },
            'share': _0x775c18 => {
                ;
                this.log('will try to share something');
                this.share = _0x775c18;
                ;
            }
        });
        _0x3dd3c0.addEventListener('messageerror', _0xf42bc9 => {
            ;
            this.log.error('SW messageerror:', _0xf42bc9);
        });
        ;
    }
    async ['registerCryptoWorker']() {
        const _0x9da59b = _0x441e08 => fetch(_0x441e08).then(_0x10b9a1 => _0x10b9a1.text()).then(_0x504c => {
                const _0x275aa9 = location.pathname.split('/');
                _0x275aa9[_0x275aa9.length - 1] = '';
                const _0x487d07 = location.origin + _0x275aa9.join('/'), _0x51f433 = {};
                return _0x51f433.type = 'application/javascript', (_0x504c = _0x504c.replace(/(import (?:.+? from )?['"])\//g, '$1' + _0x487d07), new Blob([_0x504c], _0x51f433));
            }), _0x1ae62c = {
                'construct'(_0x5afa9d, _0x19492f) {
                    ;
                    return { 'url': Ga(_0x19492f[0]).toString() };
                }
            }, _0x1ae2e3 = [
                Worker,
                typeof SharedWorker < 'u' && SharedWorker
            ].filter(Boolean);
        _0x1ae2e3.forEach(_0x807fe1 => window[_0x807fe1.name] = new Proxy(_0x807fe1, _0x1ae62c));
        const _0x515d9f = { type: 'module' };
        ;
        const _0x4bfeaf = new Worker(new URL('' + new URL('xkniv2nzgf24.js', import.meta.url).href, import.meta.url), _0x515d9f);
        _0x1ae2e3.forEach(_0x413c84 => window[_0x413c84.name] = _0x413c84);
        const _0x22db8b = { type: 'module' };
        ;
        const _0x214e33 = _0x4bfeaf.url, _0x49eff9 = _0x30b633 => new _0x486c4a(_0x30b633, _0x22db8b), _0x44c62a = _0x54c432 => this.attachWorkerToPort(_0x54c432, it, 'crypto'), _0x486c4a = Vf ? SharedWorker : Worker;
        it.addEventListener('port', (_0xcdbb2f, _0x10bdea, _0x574e01) => {
            ;
            this.invokeVoid('cryptoPort', void 0, void 0, [_0x574e01.ports[0]]);
        });
        const _0x317ab5 = _0x49eff9(_0x214e33);
        _0x44c62a(_0x317ab5);
        const _0x43a5ac = await _0x9da59b(_0x214e33), _0x36fb59 = {
                originalUrl: _0x214e33,
                blob: _0x43a5ac
            };
        ;
        ;
        (await this.invoke('createProxyWorkerURLs', _0x36fb59)).slice(1).map(_0x49eff9).forEach(_0x44c62a);
        ;
    }
    ['registerWorker']() {
        ;
        let _0x195d4f;
        const _0x5d1e21 = { type: 'module' };
        ;
        const _0x254a6c = { type: 'module' };
        ;
        Vf ? (_0x195d4f = new SharedWorker(new URL('' + new URL('12amy0wzez63.js', import.meta.url).href, import.meta.url), _0x5d1e21), this.closeMTProtoWorker = () => _0x195d4f.port.close()) : (_0x195d4f = new Worker(new URL('' + new URL('12amy0wzez63.js', import.meta.url).href, import.meta.url), _0x254a6c), this.closeMTProtoWorker = () => _0x195d4f.terminate());
        this.onWorkerFirstMessage(_0x195d4f);
        ;
        ;
    }
    ['attachWorkerToPort'](_0x21fd62, _0x169c8e, _0x20fb87) {
        const _0x57ff33 = _0x21fd62.port || _0x21fd62;
        _0x169c8e.attachPort(_0x57ff33);
        _0x21fd62.addEventListener('error', _0x5cbde8 => {
            ;
            this.log.error(_0x20fb87, 'worker error', _0x5cbde8);
        });
        ;
    }
    ['onWorkerFirstMessage'](_0x215368) {
        ;
        this.log('set webWorker');
        this.attachWorkerToPort(_0x215368, this, 'mtproto');
        ;
    }
    async ['loadAllStates']() {
        const _0x2a65be = await hl();
        this.dispatchUserAuth();
        const _0x26f209 = _0x2a65be[Ve()];
        return I.settings = _0x26f209.common.settings, this.newVersion = _0x26f209.newVersion, this.oldVersion = _0x26f209.oldVersion, this.mirrors.state = _0x26f209.state, Jr(_0x26f209.state), Sa(_0x26f209.common.settings), Object.defineProperty(I, 'settings', { 'get': () => we(Ar) }), _0x2a65be;
    }
    async ['dispatchUserAuth']() {
        const _0x1897db = await os.get(Ve());
        _0x1897db?.userId && I.dispatchEvent('user_auth', {
            'dcID': _0x1897db.dcId || 0,
            'date': _0x1897db.date || Date.now() / 1000 | 0,
            'id': _0x1897db.userId.toPeerId(false)
        });
    }
    ['hasTabOpenFor'](_0x2304c1) {
        ;
        return !!this.allTabStates.find(_0x3f31cd => _0x3f31cd.accountNumber === _0x2304c1);
    }
    ['getOpenTabsCount']() {
        ;
        return this.allTabStates.length;
    }
    ['sendAllStates'](_0x1275e8) {
        const _0x4a88e2 = [];
        for (let _0x529778 = 1; _0x529778 <= 4; _0x529778++) {
            const _0x371e22 = _0x1275e8[_0x529778], _0x413712 = this.invoke('state', {
                    ..._0x371e22,
                    'accountNumber': _0x529778
                });
            _0x4a88e2.push(_0x413712);
        }
        return Promise.all(_0x4a88e2);
    }
    ['invokeCrypto'](_0x5d2a29, ..._0x3acc90) {
        ;
        return it.invokeCrypto(_0x5d2a29, ..._0x3acc90);
    }
    async ['toggleStorages'](_0x12e92f, _0x1e135a) {
        ;
        await $r(_0x12e92f, _0x1e135a);
        this.invoke('toggleStorages', {
            'enabled': _0x12e92f,
            'clearWrite': _0x1e135a
        });
        this.serviceMessagePort?.invokeVoid('toggleStorages', {
            'enabled': _0x12e92f,
            'clearWrite': _0x1e135a
        });
        ;
    }
    async ['getMirror'](_0x3aaebd) {
        ;
        return this.mirrors[_0x3aaebd];
    }
    ['getState']() {
        ;
        return this.getMirror('state');
    }
    ['getAllTabStates']() {
        ;
        return [...this.allTabStates];
    }
    ['getCacheContext'](_0x5aa4c9, _0x3fcf18 = jn, _0x339be0 = Sl(_0x5aa4c9)) {
        ;
        return this.mirrors.thumbs[_0x339be0]?.[_0x3fcf18] || Al(_0x3fcf18);
    }
    ['getStickerCachedThumb'](_0x11aa68, _0x8e200) {
        const _0x986a07 = ar(_0x11aa68, _0x8e200);
        return this.mirrors.stickerThumbs[_0x986a07];
    }
    ['getAvailableReactions']() {
        ;
        var _0x20b908;
        return (_0x20b908 = this.mirrors).availableReactions || (_0x20b908.availableReactions = I.managers.appReactionsManager.getAvailableReactions());
    }
    ['getReaction'](_0x3ddaae) {
        ;
        return at(this.getAvailableReactions(), _0x367c9e => _0x367c9e.find(_0x90e18 => _0x90e18.reaction === _0x3ddaae));
    }
    ['getMessageFromStorage'](_0x1d2472, _0x3bdc15) {
        ;
        return _0x1d2472.endsWith('history') && Yr(_0x3bdc15) && (_0x1d2472 = this.getGlobalHistoryMessagesStorage()), this.mirrors.messages[_0x1d2472]?.[_0x3bdc15];
    }
    ['getGroupsFirstMessage'](_0x4137d0) {
        ;
        if (!_0x4137d0?.grouped_id) {
            return _0x4137d0;
        }
        const _0x243254 = this.mirrors.groupedMessages[_0x4137d0.grouped_id];
        let _0x3e3e1d = Number.MAX_SAFE_INTEGER;
        for (const [_0x10dfae, _0x3fccba] of _0x243254)
            _0x3fccba.mid < _0x3e3e1d && (_0x3e3e1d = _0x3fccba.mid);
        return _0x243254.get(_0x3e3e1d);
    }
    ['getMidsByGroupedId'](_0x56aa30, _0xfbdae8 = 'asc') {
        ;
        return Ml(this.mirrors.groupedMessages[_0x56aa30], _0xfbdae8);
    }
    ['getMessagesByGroupedId'](_0x3240b4) {
        const _0x3e3c4c = this.getMidsByGroupedId(_0x3240b4, 'asc'), _0x5eab9f = this.mirrors.groupedMessages[_0x3240b4];
        return _0x3e3c4c.map(_0x9e55af => _0x5eab9f.get(_0x9e55af));
    }
    ['getHistoryMessagesStorage'](_0x1fe640) {
        ;
        return _0x1fe640 + '_history';
    }
    ['getGlobalHistoryMessagesStorage']() {
        return this.getHistoryMessagesStorage(Bi);
    }
    ['getMessageById'](_0x2d7317) {
        ;
        if (Yr(_0x2d7317)) {
            return this.getMessageFromStorage(this.getGlobalHistoryMessagesStorage(), _0x2d7317);
        }
    }
    ['getMessageByPeer'](_0x18f234, _0xed2a33) {
        ;
        return _0x18f234 ? this.getMessageFromStorage(this.getHistoryMessagesStorage(_0x18f234), _0xed2a33) : this.getMessageById(_0xed2a33);
    }
    ['getPeerForAccount'](_0x54d068, _0x4b07fb) {
        ;
        return Ps(_0x4b07fb).appPeersManager.getPeer(_0x54d068);
    }
    ['getPeer'](_0x4826b5) {
        ;
        return this.mirrors.peers[_0x4826b5];
    }
    ['getUser'](_0x39417b) {
        ;
        return this.mirrors.peers[_0x39417b.toPeerId(false)];
    }
    ['getChat'](_0x19bd76) {
        ;
        return this.mirrors.peers[_0x19bd76.toPeerId(true)];
    }
    ['isForum'](_0x4ce8a4) {
        ;
        return !!this.getPeer(_0x4ce8a4)?.pFlags?.forum;
    }
    ['isAvatarCached'](_0x2b87ed, _0x1306e3) {
        const _0x588bc1 = this.mirrors.avatars[_0x2b87ed];
        return _0x1306e3 === void 0 ? !!_0x588bc1 : !!(_0x588bc1 && _0x588bc1[_0x1306e3] && !(_0x588bc1[_0x1306e3] instanceof Promise));
    }
    ['loadAvatar'](_0x2647fc, _0x6901da, _0x2721e5, _0x75b770) {
        ;
        var _0x23a78d;
        if (_0x75b770 && _0x75b770 !== Ve()) {
            return Ps(_0x75b770).appAvatarsManager.loadAvatar(_0x2647fc, _0x6901da, _0x2721e5);
        }
        const _0x5e0053 = (_0x23a78d = this.mirrors.avatars)[_0x2647fc] ?? (_0x23a78d[_0x2647fc] = {});
        return _0x5e0053[_0x2721e5] ?? (_0x5e0053[_0x2721e5] = I.managers.appAvatarsManager.loadAvatar(_0x2647fc, _0x6901da, _0x2721e5));
    }
    ['getAppConfig'](_0x47ac1d) {
        ;
        if (_0x47ac1d && (this.appConfig = void 0), !this.appConfig) {
            const _0x1a961c = I.managers.apiManager.getAppConfig().then(_0x492172 => (this.appConfig === _0x1a961c && (this.appConfig = _0x492172), _0x492172));
            return this.appConfig = _0x1a961c;
        }
        return this.appConfig;
    }
    ['isPremiumFeaturesHidden']() {
        ;
        return at(this.isPremiumPurchaseBlocked(), _0x381d55 => _0x381d55 && !I.premium);
    }
    ['isPremiumPurchaseBlocked']() {
        ;
        return at(this.getAppConfig(), _0x293d28 => !!_0x293d28.premium_purchase_blocked);
    }
    async ['hasSomeonePremium']() {
        const _0xafc8af = await os.getTotalAccounts();
        let _0x126924 = false;
        for (let _0x485e93 = 1; _0x485e93 <= _0xafc8af; _0x485e93++) {
            const _0x35bc70 = Ps(_0x485e93);
            if (_0x126924 || (_0x126924 = await _0x35bc70.rootScope.getPremium()), _0x126924) {
                break;
            }
        }
        return _0x126924;
    }
    ['updateTabState'](_0x878670, _0x425a16) {
        ;
        this.tabState[_0x878670] = _0x425a16;
        this.invokeVoid('tabState', this.tabState);
        ;
    }
    ['updateTabStateIdle'](_0x5a0936) {
        ;
        this.updateTabState('idleStartTime', _0x5a0936 ? Date.now() : 0);
    }
    async ['setInterval'](_0x57f059, _0x1440c1) {
        const _0x4fee08 = await this.invoke('setInterval', _0x1440c1);
        return this.intervals.set(_0x4fee08, _0x57f059), _0x4fee08;
    }
    async ['clearInterval'](_0x7a07a4) {
        ;
        this.intervals.delete(_0x7a07a4);
        await this.invoke('clearInterval', _0x7a07a4);
        ;
    }
}
const Vc = new m2();
N.apiManagerProxy = Vc;
const re = Vc;
class g2 extends je {
    constructor() {
        ;
        super(...arguments);
        this.overlaysActive = 0;
        this.hasDarkOverlays = 0;
        ;
    }
    get ['isOverlayActive']() {
        ;
        return this.overlaysActive > 0;
    }
    set ['isOverlayActive'](_0x1671a8) {
        ;
        this.overlaysActive += _0x1671a8 ? 1 : -1;
        this.dispatchEvent('change', this.isOverlayActive);
        ;
    }
    get ['isDarkOverlayActive']() {
        ;
        return this.hasDarkOverlays > 0;
    }
    set ['isDarkOverlayActive'](_0x8b3712) {
        ;
        this.hasDarkOverlays += _0x8b3712 ? 1 : -1;
        this.isOverlayActive = _0x8b3712;
        ;
    }
}
const Hs = new g2();
N && (N.overlayCounter = Hs);
function U3(_0x1b2a2d, _0x333316 = _0x1b2a2d.split('?')) {
    ;
    try {
        const _0x25de8a = new URL(_0x1b2a2d), _0xb126eb = { _0x1a4968: _0x588063 };
        for (const [_0x1a4968, _0x588063] of _0x25de8a.searchParams.entries());
        return _0xb126eb;
    } catch {
        return p2(_0x333316?.[1]);
    }
}
function p2(_0x5b1b29) {
    const _0x1d5cda = { _0x1bcfba: decodeURIComponent(_0x2141a2) };
    return _0x5b1b29 && _0x5b1b29.split('&').forEach(_0x25d5a5 => {
        ;
        const [_0x1bcfba, _0x2141a2 = ''] = _0x25d5a5.split('=');
        ;
    }), _0x1d5cda;
}
const j3 = 'onbeforeinstallprompt' in window;
let Di;
function H3() {
    ;
    window.addEventListener('beforeinstallprompt', _0x47a281 => {
        Di = async () => {
            ;
            _0x47a281.prompt();
            const {outcome: _0xdd1170} = await _0x47a281.userChoice;
            _0xdd1170 === 'accepted' && (Di = void 0);
        };
    });
}
function W3() {
    return Di;
}
const zc = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ], b2 = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ], Qs = zc.slice(), Si = b2.slice(), ss = 86400, V3 = 1440, z3 = 10080;
function y2() {
    const _0x483157 = { weekday: 'long' };
    ;
    const _0xbc787d = ue.getDateTimeFormat(_0x483157), _0x49226e = new Date(Date.UTC(2017, 0, 2)), _0x262851 = [];
    for (let _0xf27ffa = 0; _0xf27ffa < 7; ++_0xf27ffa) {
        _0x262851.push(an(_0xbc787d.format(_0x49226e)));
        _0x49226e.setDate(_0x49226e.getDate() + 1);
        ;
    }
    return _0x262851;
}
function v2() {
    ;
    ;
    const _0x5eb72f = ue.getDateTimeFormat(_0x1c19fa), _0x8c46a5 = new Date(Date.UTC(2017, 0, 1)), _0x2033ac = [];
    for (let _0x1bf3ca = 0; _0x1bf3ca < 12; ++_0x1bf3ca) {
        _0x2033ac.push(an(_0x5eb72f.format(_0x8c46a5)));
        _0x8c46a5.setMonth(_0x8c46a5.getMonth() + 1);
        ;
    }
    return _0x2033ac;
}
function G3() {
    ;
    Qs.splice(0, Qs.length, ...v2());
    Si.splice(0, Si.length, ...y2());
    ;
}
const Na = _0x30bb20 => {
    const _0x51af0c = new Date(Date.UTC(_0x30bb20.getFullYear(), _0x30bb20.getMonth(), _0x30bb20.getDate())), _0x13163e = _0x51af0c.getUTCDay() || 7;
    _0x51af0c.setUTCDate(_0x51af0c.getUTCDate() + 4 - _0x13163e);
    const _0x1b2d68 = new Date(Date.UTC(_0x51af0c.getUTCFullYear(), 0, 1));
    return Math.ceil(((_0x51af0c.getTime() - _0x1b2d68.getTime()) / ss + 1) / 7);
};
function q3(_0xa7b8b2, _0x6e8265) {
    ;
    _0x6e8265 || (_0x6e8265 = new Date(), _0x6e8265.setHours(0, 0, 0, 0));
    const _0x4f3ed5 = {
        day: 'numeric',
        month: 'long'
    };
    ;
    ;
    ;
    const _0xdead74 = _0x4f3ed5;
    return _0xa7b8b2.getFullYear() !== _0x6e8265.getFullYear() && (_0xdead74.year = 'numeric'), new ue.IntlDateElement({
        'date': _0xa7b8b2,
        'options': _0xdead74
    }).element;
}
function E2(_0x3f258a) {
    const _0x406330 = new Date(), _0x382fd0 = _0x406330.getTime() / 1000 | 0, _0x53d2ee = _0x3f258a.getTime() / 1000 | 0, _0x23f332 = {};
    return _0x382fd0 - _0x53d2ee < ss && _0x406330.getDate() === _0x3f258a.getDate() ? _0x23f332.hour = _0x23f332.minute = '2-digit' : _0x406330.getFullYear() !== _0x3f258a.getFullYear() ? (_0x23f332.year = _0x23f332.day = 'numeric', _0x23f332.month = '2-digit') : _0x382fd0 - _0x53d2ee < ss * 7 && Na(_0x406330) === Na(_0x3f258a) ? _0x23f332.weekday = 'short' : (_0x23f332.month = 'short', _0x23f332.day = 'numeric'), new ue.IntlDateElement({
        'date': _0x3f258a,
        'options': _0x23f332
    }).element;
}
const a0_0x3286f4 = {};
a0_0x3286f4.hour = '2-digit';
a0_0x3286f4.minute = '2-digit';
;
const Ai = a0_0x3286f4;
function w2(_0x2cd3c4, _0x287b84 = {}) {
    ;
    _0x287b84.combined && (_0x287b84.noToday = true);
    const _0x5a1541 = new Date(), _0x478f6f = new Date(_0x2cd3c4 * 1000), _0x36c625 = (_0x5a1541.getTime() / 1000 | 0) - _0x2cd3c4, _0x28bc04 = _0x287b84.combined ? void 0 : D2(_0x478f6f);
    let _0x211d98;
    return !_0x287b84.noToday && _0x36c625 < ss && _0x5a1541.getDate() === _0x478f6f.getDate() ? _0x211d98 = X(_0x287b84.capitalize ? 'Date.Today' : 'Peer.Status.Today') : !_0x287b84.noToday && _0x36c625 > 0 && _0x36c625 < ss * 2 && new Date(_0x5a1541.getTime() - ss * 1000).getDate() === _0x478f6f.getDate() ? (_0x211d98 = X(_0x287b84.capitalize ? 'Yesterday' : 'Peer.Status.Yesterday'), _0x287b84.capitalize && (_0x211d98.style.textTransform = 'capitalize')) : _0x5a1541.getFullYear() !== _0x478f6f.getFullYear() ? _0x211d98 = new ue.IntlDateElement({
        'date': _0x478f6f,
        'options': {
            'month': 'short',
            'day': 'numeric',
            'year': 'numeric',
            ..._0x287b84.combined ? Ai : {}
        }
    }).element : _0x211d98 = new ue.IntlDateElement({
        'date': _0x478f6f,
        'options': {
            'month': 'short',
            'day': 'numeric',
            ..._0x287b84.combined ? Ai : {}
        }
    }).element, {
        'dateEl': _0x211d98,
        'timeEl': _0x28bc04
    };
}
function $3(_0x25e2e6, _0x3b5b00 = true, _0x1956e9 = false) {
    const _0x55e56b = {
        capitalize: _0x3b5b00,
        noToday: _0x1956e9
    };
    ;
    ;
    ;
    const {
            dateEl: _0x90421c,
            timeEl: _0x1643e1
        } = w2(_0x25e2e6, _0x55e56b), _0x362bb0 = document.createDocumentFragment();
    return _0x362bb0.append(_0x90421c, ' ', X('ScheduleController.at'), ' ', _0x1643e1), _0x362bb0;
}
function D2(_0x546bda) {
    const _0x2fa471 = {};
    return _0x2fa471.date = _0x546bda, _0x2fa471.options = Ai, new ue.IntlDateElement(_0x2fa471).element;
}
N && (N.formatDateAccordingToTodayNew = E2);
function Y3(_0x373895, _0x33d221) {
    const _0x5e8d73 = _0x373895 >= 12 && !(_0x373895 % 12);
    return X(_0x33d221 ? _0x5e8d73 ? 'BoldYears' : 'BoldMonths' : _0x5e8d73 ? 'Years' : 'Months', [_0x5e8d73 ? _0x373895 / 12 : _0x373895]);
}
const He = 2013, S2 = new RegExp('20[0-9]{1,2}'), kr = '\\p{L}', A2 = new RegExp('(' + kr + '{3,})', 'iu'), C2 = new RegExp('(' + kr + '{3,}) ([0-9]{0,4})', 'iu'), k2 = new RegExp('([0-9]{0,4}) (' + kr + '{2,})', 'iu'), F2 = new RegExp('^([0-9]{1,4})(\\.| |/|\\-)([0-9]{1,4})$', 'i'), P2 = new RegExp('^([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,4})$', 'i'), _2 = [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
function T2(_0xcb2a81, _0x14f61b) {
    const _0x4dfa1c = _0xcb2a81.trim().toLowerCase();
    if (_0x4dfa1c.length < 3) {
        return;
    }
    if ([
            'today',
            ue.format('Peer.Status.Today', true)
        ].some(_0x44e5ec => _0x44e5ec.indexOf(_0x4dfa1c) === 0)) {
        const _0x258304 = new Date(), _0x24bfa1 = _0x258304.getFullYear(), _0x142380 = _0x258304.getMonth(), _0x123ca5 = _0x258304.getDate();
        _0x258304.setFullYear(_0x24bfa1, _0x142380, _0x123ca5);
        _0x258304.setHours(0, 0, 0);
        ;
        const _0x54b3e6 = _0x258304.getTime();
        _0x258304.setFullYear(_0x24bfa1, _0x142380, _0x123ca5 + 1);
        _0x258304.setHours(0, 0, 0);
        ;
        const _0x41e0d5 = _0x258304.getTime() - 1;
        _0x14f61b.push({
            'title': ue.format('Date.Today', true),
            'minDate': _0x54b3e6,
            'maxDate': _0x41e0d5
        });
        return;
    }
    if ([
            'yesterday',
            ue.format('Peer.Status.Yesterday', true)
        ].some(_0x5a70f8 => _0x5a70f8.indexOf(_0x4dfa1c) === 0)) {
        const _0x2416cd = new Date(), _0x14097b = _0x2416cd.getFullYear(), _0x42ffb3 = _0x2416cd.getMonth(), _0x95bdf5 = _0x2416cd.getDate();
        _0x2416cd.setFullYear(_0x14097b, _0x42ffb3, _0x95bdf5);
        _0x2416cd.setHours(0, 0, 0);
        ;
        const _0x4aff7c = _0x2416cd.getTime() - 86400000;
        _0x2416cd.setFullYear(_0x14097b, _0x42ffb3, _0x95bdf5 + 1);
        _0x2416cd.setHours(0, 0, 0);
        ;
        const _0x48540e = _0x2416cd.getTime() - 86400001;
        _0x14f61b.push({
            'title': an(ue.format('Yesterday', true)),
            'minDate': _0x4aff7c,
            'maxDate': _0x48540e
        });
        return;
    }
    const _0x4ad209 = I2(_0x4dfa1c);
    if (_0x4ad209 >= 0) {
        const _0x337cb7 = new Date(), _0xc06f73 = _0x337cb7.getTime(), _0xf362d5 = _0x337cb7.getDay(), _0x42397f = _0x4ad209 - _0xf362d5;
        _0x337cb7.setDate(_0x337cb7.getDate() + _0x42397f);
        _0x337cb7.getTime() > _0xc06f73 && _0x337cb7.setTime(_0x337cb7.getTime() - 604800000);
        ;
        const _0x35f050 = _0x337cb7.getFullYear(), _0x4b8b72 = _0x337cb7.getMonth(), _0x837a58 = _0x337cb7.getDate();
        _0x337cb7.setFullYear(_0x35f050, _0x4b8b72, _0x837a58);
        _0x337cb7.setHours(0, 0, 0);
        ;
        const _0x301f95 = _0x337cb7.getTime();
        _0x337cb7.setFullYear(_0x35f050, _0x4b8b72, _0x837a58 + 1);
        _0x337cb7.setHours(0, 0, 0);
        ;
        const _0x415fa2 = _0x337cb7.getTime() - 1;
        _0x14f61b.push({
            'title': qc(_0x301f95),
            'minDate': _0x301f95,
            'maxDate': _0x415fa2
        });
        return;
    }
    let _0x48f0cf;
    if ((_0x48f0cf = F2.exec(_0x4dfa1c)) !== null) {
        const _0x517894 = _0x48f0cf[1], _0x31c177 = _0x48f0cf[3], _0x32a2fe = parseInt(_0x517894), _0x358853 = parseInt(_0x31c177);
        if (_0x32a2fe > 0 && _0x32a2fe <= 31) {
            if (_0x358853 >= He && _0x32a2fe <= 12) {
                const _0x4c5ac8 = _0x358853, _0x3f61ea = _0x32a2fe - 1;
                Cs(_0x14f61b, _0x3f61ea, _0x4c5ac8);
                return;
            } else {
                if (_0x358853 <= 12) {
                    const _0x46f9e2 = _0x32a2fe - 1, _0x5240f1 = _0x358853 - 1;
                    Bn(_0x14f61b, _0x46f9e2, _0x5240f1);
                }
            }
        } else {
            if (_0x32a2fe >= He && _0x358853 <= 12) {
                const _0x2b329a = _0x32a2fe, _0x544a82 = _0x358853 - 1;
                Cs(_0x14f61b, _0x544a82, _0x2b329a);
            }
        }
        return;
    }
    if ((_0x48f0cf = P2.exec(_0x4dfa1c)) !== null) {
        const _0x4f8d62 = _0x48f0cf[1], _0x575d9d = _0x48f0cf[3], _0x3dfcd0 = _0x48f0cf[5];
        if (!_0x48f0cf[2] === _0x48f0cf[4]) {
            return;
        }
        const _0x16c75d = parseInt(_0x4f8d62), _0x116cc6 = parseInt(_0x575d9d) - 1;
        let _0x3c00d1 = parseInt(_0x3dfcd0);
        _0x3c00d1 >= 10 && _0x3c00d1 <= 99 && (_0x3c00d1 += 2000);
        const _0x5a2ed0 = new Date().getFullYear();
        if ($c(_0x16c75d - 1, _0x116cc6) && _0x3c00d1 >= He && _0x3c00d1 <= _0x5a2ed0) {
            const _0x49db96 = new Date();
            _0x49db96.setFullYear(_0x3c00d1, _0x116cc6, _0x16c75d);
            _0x49db96.setHours(0, 0, 0);
            ;
            const _0x5ec946 = _0x49db96.getTime();
            _0x49db96.setFullYear(_0x3c00d1, _0x116cc6, _0x16c75d + 1);
            _0x49db96.setHours(0, 0, 0);
            ;
            const _0x3a124f = _0x49db96.getTime() - 1;
            _0x14f61b.push({
                'title': Gc(_0x5ec946),
                'minDate': _0x5ec946,
                'maxDate': _0x3a124f
            });
            return;
        }
        return;
    }
    if ((_0x48f0cf = C2.exec(_0x4dfa1c)) !== null) {
        const _0x4ee54e = _0x48f0cf[1], _0x2d676e = _0x48f0cf[2], _0x20fda4 = Un(_0x4ee54e);
        if (_0x20fda4 >= 0) {
            const _0x43c875 = +_0x2d676e || new Date().getUTCFullYear();
            if (_0x43c875 > 0 && _0x43c875 <= 31) {
                const _0x450f08 = _0x43c875 - 1;
                Bn(_0x14f61b, _0x450f08, _0x20fda4);
                return;
            } else {
                if (_0x43c875 >= He) {
                    Cs(_0x14f61b, _0x20fda4, _0x43c875);
                    return;
                }
            }
        }
    }
    if ((_0x48f0cf = k2.exec(_0x4dfa1c)) !== null) {
        const _0x168329 = _0x48f0cf[1], _0x2a0f1e = _0x48f0cf[2], _0xf08e3b = Un(_0x2a0f1e);
        if (_0xf08e3b >= 0) {
            const _0x1da677 = +_0x168329;
            if (_0x1da677 > 0 && _0x1da677 <= 31) {
                const _0x42bbf2 = _0x1da677 - 1;
                Bn(_0x14f61b, _0x42bbf2, _0xf08e3b);
                return;
            } else {
                _0x1da677 >= He && Cs(_0x14f61b, _0xf08e3b, _0x1da677);
            }
        }
    }
    if ((_0x48f0cf = A2.exec(_0x4dfa1c)) !== null) {
        const _0x3404b8 = _0x48f0cf[1], _0x2bc74c = Un(_0x3404b8);
        if (_0x2bc74c >= 0) {
            const _0x3e48bf = new Date().getFullYear();
            for (let _0x548c4c = _0x3e48bf; _0x548c4c >= He; --_0x548c4c) {
                Cs(_0x14f61b, _0x2bc74c, _0x548c4c);
            }
        }
    }
    if ((_0x48f0cf = S2.exec(_0x4dfa1c)) !== null) {
        let _0x2d7d8d = +_0x48f0cf[0];
        const _0x254f78 = new Date().getFullYear();
        if (_0x2d7d8d < He) {
            _0x2d7d8d = He;
            for (let _0x116930 = _0x254f78; _0x116930 >= _0x2d7d8d; _0x116930--) {
                const _0x1d4d9a = new Date();
                _0x1d4d9a.setFullYear(_0x116930, 0, 1);
                _0x1d4d9a.setHours(0, 0, 0);
                ;
                const _0xfdb516 = _0x1d4d9a.getTime();
                _0x1d4d9a.setFullYear(_0x116930 + 1, 0, 1);
                _0x1d4d9a.setHours(0, 0, 0);
                ;
                const _0x304910 = _0x1d4d9a.getTime() - 1, _0x11ee54 = {
                        title: '' + _0x116930,
                        minDate: _0xfdb516,
                        maxDate: _0x304910
                    };
                ;
                ;
                ;
                _0x14f61b.push(_0x11ee54);
                ;
            }
        } else {
            if (_0x2d7d8d <= _0x254f78) {
                const _0x2c21e1 = new Date();
                _0x2c21e1.setFullYear(_0x2d7d8d, 0, 1);
                _0x2c21e1.setHours(0, 0, 0);
                ;
                const _0x214c36 = _0x2c21e1.getTime();
                _0x2c21e1.setFullYear(_0x2d7d8d + 1, 0, 1);
                _0x2c21e1.setHours(0, 0, 0);
                ;
                const _0x565f7a = _0x2c21e1.getTime() - 1, _0x470d25 = {
                        title: '' + _0x2d7d8d,
                        minDate: _0x214c36,
                        maxDate: _0x565f7a
                    };
                ;
                ;
                ;
                _0x14f61b.push(_0x470d25);
                ;
            }
        }
        return;
    }
}
function Cs(_0x110fdd, _0x882a9b, _0x664784) {
    const _0x2654e1 = new Date().getFullYear(), _0x1203e1 = Date.now();
    if (_0x664784 >= He && _0x664784 <= _0x2654e1) {
        const _0x563caa = new Date();
        _0x563caa.setFullYear(_0x664784, _0x882a9b, 1);
        _0x563caa.setHours(0, 0, 0);
        ;
        const _0x5958e2 = _0x563caa.getTime();
        if (_0x5958e2 > _0x1203e1) {
            return;
        }
        _0x563caa.setMonth(_0x563caa.getMonth() + 1);
        const _0x24e29c = _0x563caa.getTime() - 1;
        _0x110fdd.push({
            'title': L2(_0x5958e2),
            'minDate': _0x5958e2,
            'maxDate': _0x24e29c
        });
    }
}
function Bn(_0x5c8e4a, _0x1ed769, _0x58e7c5) {
    ;
    if ($c(_0x1ed769, _0x58e7c5)) {
        const _0x3a89bf = new Date().getFullYear(), _0x5162c6 = Date.now();
        for (let _0x3be12d = _0x3a89bf; _0x3be12d >= He; _0x3be12d--) {
            if (_0x58e7c5 === 1 && _0x1ed769 === 28 && !M2(_0x3be12d)) {
                continue;
            }
            const _0x15e454 = new Date();
            _0x15e454.setFullYear(_0x3be12d, _0x58e7c5, _0x1ed769 + 1);
            _0x15e454.setHours(0, 0, 0);
            ;
            const _0x1a6bf7 = _0x15e454.getTime();
            if (_0x1a6bf7 > _0x5162c6) {
                continue;
            }
            _0x15e454.setFullYear(_0x3be12d, _0x58e7c5, _0x1ed769 + 2);
            _0x15e454.setHours(0, 0, 0);
            ;
            const _0x2c21b5 = _0x15e454.getTime() - 1;
            _0x3be12d === _0x3a89bf ? _0x5c8e4a.push({
                'title': x2(_0x1a6bf7),
                'minDate': _0x1a6bf7,
                'maxDate': _0x2c21b5
            }) : _0x5c8e4a.push({
                'title': Gc(_0x1a6bf7),
                'minDate': _0x1a6bf7,
                'maxDate': _0x2c21b5
            });
        }
    }
}
function L2(_0xf57f82) {
    const _0x46c0ee = new Date(_0xf57f82);
    return Qs[_0x46c0ee.getMonth()] + ' ' + _0x46c0ee.getFullYear();
}
function x2(_0x5a9df3) {
    const _0x1b4df6 = new Date(_0x5a9df3);
    return Qs[_0x1b4df6.getMonth()] + ' ' + _0x1b4df6.getDate();
}
function Gc(_0x411121) {
    const _0x4d22d2 = new Date(_0x411121);
    return ('0' + _0x4d22d2.getDate()).slice(-2) + '.' + ('0' + (_0x4d22d2.getMonth() + 1)).slice(-2) + '.' + _0x4d22d2.getFullYear();
}
function qc(_0x4b8f03) {
    const _0x4a38c4 = new Date(_0x4b8f03);
    return Si[_0x4a38c4.getDay()];
}
function $c(_0x5e41b6, _0x31fbb4) {
    return _0x31fbb4 >= 0 && _0x31fbb4 < 12 && _0x5e41b6 >= 0 && _0x5e41b6 < _2[_0x31fbb4];
}
function M2(_0x4bc79a) {
    return _0x4bc79a % 4 === 0 && _0x4bc79a % 100 !== 0 || _0x4bc79a % 400 === 0;
}
function Un(_0x32dec1) {
    ;
    _0x32dec1 = _0x32dec1.toLowerCase();
    for (let _0xcf3ee2 = 0; _0xcf3ee2 < 12; _0xcf3ee2++) {
        if ([
                zc[_0xcf3ee2],
                Qs[_0xcf3ee2]
            ].some(_0x2b2a7f => _0x2b2a7f.toLowerCase().indexOf(_0x32dec1) === 0)) {
            return _0xcf3ee2;
        }
    }
    return -1;
}
function I2(_0x19922c) {
    const _0x6fbc9f = new Date();
    if (_0x19922c.length <= 3) {
        return -1;
    }
    for (let _0x25d034 = 0; _0x25d034 < 7; _0x25d034++) {
        if (_0x6fbc9f.setDate(_0x6fbc9f.getDate() + 1), qc(_0x6fbc9f.getTime()).toLowerCase().indexOf(_0x19922c) === 0) {
            return _0x6fbc9f.getDay();
        }
    }
    return -1;
}
N.fillTipDates = T2;
const R2 = Re, Yc = Re || !Ri && (!be || bs) || Ha < 113, K3 = !R2 && !Yc;
function J3(_0x2dfbb7, _0x5206c0 = false) {
    const _0x46ba0f = new URL(location.href);
    _0x2dfbb7 === 1 ? _0x46ba0f.searchParams.delete(fs) : _0x46ba0f.searchParams.set(fs, _0x2dfbb7 + '');
    const _0x471c99 = _0x46ba0f.search ? _0x46ba0f.pathname + _0x46ba0f.search : _0x46ba0f.pathname;
    _0x5206c0 ? window.open(_0x471c99, '_blank') : (Ie.overrideHash(), history.replaceState(null, '', _0x471c99), location.reload());
}
function X3() {
    ;
    Node.prototype.replaceChildren === void 0 && (Node.prototype.replaceChildren = function (..._0x1dd770) {
        ;
        this.textContent = '';
        _0x1dd770 && this.append(..._0x1dd770);
        ;
    });
}
function O2() {
    const _0x32849b = document.querySelector('.chat.active');
    if (!_0x32849b) {
        return;
    }
    const _0xe8e831 = _0x32849b.cloneNode(true);
    _0xe8e831.querySelectorAll('.chat-input, .chat-background').forEach(_0x11cc07 => _0x11cc07.remove());
    const _0x5d9a7b = _0xe8e831.querySelector('.bubbles'), _0x4ac6f0 = _0x5d9a7b.querySelector('.bubbles-inner');
    _0x5d9a7b.replaceChildren(_0x4ac6f0);
    _0x5d9a7b.querySelectorAll('video').forEach(_0x156648 => _0x156648.muted = true);
    ;
    const _0x56d65d = document.createElement('div');
    _0x56d65d.setAttribute('id', 'printable');
    _0x56d65d.append(_0xe8e831);
    document.body.append(_0x56d65d);
    ;
}
function N2() {
    ;
    document.getElementById('printable')?.remove();
}
function Q3() {
    ;
    window.addEventListener('beforeprint', O2);
    window.addEventListener('afterprint', N2);
    ;
}
function Z3() {
    ;
    document.addEventListener('dragstart', _0x48c454 => {
        ;
        if (_0x48c454.target?.tagName === 'IMG') {
            return _0x48c454.preventDefault(), false;
        }
    });
    document.addEventListener('contextmenu', _0x4d20ee => {
        ;
        _0x4d20ee.target.tagName === 'IMG' && !window.appMediaViewer && se(_0x4d20ee);
    });
    ;
}
let B2 = 0;
function Kc(_0x49df9e, _0x5bb636 = () => Promise.resolve(), _0x46e7f3 = null, _0x4ba581 = false, _0x259e1d = _0x49df9e) {
    ;
    if (_0x49df9e.querySelector('.c-ripple')) {
        return;
    }
    _0x49df9e.classList.add('rp');
    const _0x255501 = document.createElement('div');
    _0x255501.classList.add('c-ripple');
    _0x49df9e.classList.contains('rp-square') && _0x255501.classList.add('is-square');
    _0x49df9e[_0x4ba581 ? 'prepend' : 'append'](_0x255501);
    ;
    let _0x23d8fb;
    const _0x3175eb = (_0x138dce, _0x30e779) => {
            const _0x5e23d3 = Date.now(), _0x321e37 = document.createElement('div'), _0x1aafaa = B2++, _0xd01baa = +window.getComputedStyle(_0x255501).getPropertyValue('--ripple-duration').replace('s', '') * 1000, _0x4e5b8b = _0x23d8fb = () => {
                    const _0x498a28 = Date.now() - _0x5e23d3, _0x468c3c = () => {
                            ;
                            ut.mutate(() => {
                                ;
                                _0x321e37.remove();
                            });
                            _0x46e7f3?.(_0x1aafaa);
                            ;
                        };
                    if (_0x498a28 < _0xd01baa) {
                        const _0x309a07 = Math.max(_0xd01baa - _0x498a28, _0xd01baa / 2);
                        setTimeout(() => _0x321e37.classList.add('hiding'), Math.max(_0x309a07 - _0xd01baa / 2, 0));
                        setTimeout(_0x468c3c, _0x309a07);
                        ;
                    } else {
                        _0x321e37.classList.add('hiding');
                        setTimeout(_0x468c3c, _0xd01baa / 2);
                        ;
                    }
                    Fe || (window.removeEventListener('contextmenu', _0x23d8fb), window.removeEventListener('mousemove', _0x23d8fb));
                    _0x23d8fb = null;
                    _0x375235 = false;
                    ;
                };
            _0x5bb636?.(_0x1aafaa);
            Oe(() => {
                ;
                if (_0x4e5b8b !== _0x23d8fb) {
                    return;
                }
                const _0x2e1bdc = _0x255501.getBoundingClientRect();
                _0x321e37.classList.add('c-ripple__circle');
                const _0x4cbdf4 = _0x138dce - _0x2e1bdc.left, _0x911e11 = _0x30e779 - _0x2e1bdc.top, _0x5967ce = Math.sqrt((Math.abs(_0x911e11 - _0x2e1bdc.height / 2) + _0x2e1bdc.height / 2) ** 2 + (Math.abs(_0x4cbdf4 - _0x2e1bdc.width / 2) + _0x2e1bdc.width / 2) ** 2), _0x2ea4ad = _0x4cbdf4 - _0x5967ce / 2, _0x14aa2a = _0x911e11 - _0x5967ce / 2;
                _0x321e37.style.width = _0x321e37.style.height = _0x5967ce + 'px';
                _0x321e37.style.left = _0x2ea4ad + 'px';
                _0x321e37.style.top = _0x14aa2a + 'px';
                _0x321e37.style.opacity = '0';
                _0x255501.append(_0x321e37);
                _0x321e37.offsetWidth;
                _0x321e37.style.opacity = '';
                ;
            });
            ;
        }, _0x5d7ada = _0xfd9539 => _0xfd9539.target !== _0x49df9e && ([
            'BUTTON',
            'A'
        ].includes(_0xfd9539.target.tagName) || yt(_0xfd9539.target, 'c-ripple') !== _0x255501) && (_0x259e1d === _0x49df9e || !Zf(_0xfd9539.target, _0x259e1d)) && !yt(_0xfd9539.target, 'checkbox-field');
    let _0x375235 = false;
    if (Fe) {
        const _0x2e4954 = () => {
                _0x23d8fb?.();
            }, _0x152b50 = _0x2b898d => {
                ;
                if (!ot.isAvailable('animations') || _0x2b898d.touches.length > 1 || _0x375235 || _0x5d7ada(_0x2b898d)) {
                    return;
                }
                _0x375235 = true;
                const {
                        clientX: _0x5ccf2d,
                        clientY: _0x2a56ec
                    } = _0x2b898d.touches[0], _0x39346c = { once: true };
                ;
                const _0x2f214d = { once: true };
                ;
                _0x3175eb(_0x5ccf2d, _0x2a56ec);
                _0x259e1d.addEventListener('touchend', _0x2e4954, _0x39346c);
                window.addEventListener('touchmove', _0x8bac5b => {
                    ;
                    _0x8bac5b.cancelBubble = true;
                    _0x8bac5b.stopPropagation();
                    _0x2e4954();
                    _0x259e1d.removeEventListener('touchend', _0x2e4954);
                    ;
                }, _0x2f214d);
                ;
                ;
            }, _0x46d1b4 = {};
        return _0x46d1b4.passive = true, (_0x259e1d.addEventListener('touchstart', _0x152b50, _0x46d1b4), {
            'dispose': () => _0x259e1d.removeEventListener('touchstart', _0x152b50),
            'element': _0x255501
        });
    } else {
        const _0x35891f = _0x4d543c => {
                ;
                if (![
                        0,
                        2
                    ].includes(_0x4d543c.button) || !ot.isAvailable('animations') || _0x259e1d.dataset.ripple === '0' || _0x5d7ada(_0x4d543c)) {
                    return;
                }
                if (_0x375235) {
                    _0x375235 = false;
                    return;
                }
                const {
                        clientX: _0x3dd22c,
                        clientY: _0x213229
                    } = _0x4d543c, _0x55673c = {
                        once: true,
                        passive: true
                    };
                ;
                ;
                ;
                const _0x2db047 = {
                    once: true,
                    passive: true
                };
                ;
                ;
                _0x3175eb(_0x3dd22c, _0x213229);
                window.addEventListener('mouseup', _0x23d8fb, _0x55673c);
                window.addEventListener('contextmenu', _0x23d8fb, _0x2db047);
                ;
                ;
            }, _0x30d8e8 = {};
        return _0x30d8e8.passive = true, (_0x259e1d.addEventListener('mousedown', _0x35891f, _0x30d8e8), {
            'dispose': () => _0x259e1d.removeEventListener('mousedown', _0x35891f),
            'element': _0x255501
        });
    }
}
function U2(_0x347844) {
    ;
    if (_0x347844.key === 'Enter' && !Re && !_0x347844.isComposing) {
        if (I.settings.sendShortcut === 'enter') {
            return _0x347844.shiftKey || _0x347844.ctrlKey || _0x347844.metaKey ? void 0 : true;
        }
        {
            const _0x4c7275 = Et ? _0x347844.metaKey : _0x347844.ctrlKey;
            if (_0x347844.shiftKey || (Et ? _0x347844.ctrlKey : _0x347844.metaKey)) {
                return;
            }
            if (_0x4c7275) {
                return true;
            }
        }
    }
    return false;
}
function e6(_0xff1f6d) {
    ;
    _0xff1f6d.requestFullscreen ? _0xff1f6d.requestFullscreen() : _0xff1f6d.mozRequestFullScreen ? _0xff1f6d.mozRequestFullScreen() : _0xff1f6d.webkitRequestFullscreen ? _0xff1f6d.webkitRequestFullscreen() : _0xff1f6d.msRequestFullscreen && _0xff1f6d.msRequestFullscreen();
}
function t6() {
    ;
    document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
}
function j2(_0x270487, _0x39f204, _0x4b6e24) {
    const _0x56e80d = _0x4b6e24 ? _0x4b6e24.add(_0x270487) : _0x270487.addEventListener.bind(_0x270487);
    'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange'.split(' ').forEach(_0x5e2034 => {
        ;
        _0x56e80d(_0x5e2034, _0x39f204, false);
    });
}
function Jc() {
    ;
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}
function s6() {
    return !!Jc();
}
const Ba = 250, H2 = 600, Xc = 1500, W2 = 500;
var V2 = (_0x506606 => (_0x506606[_0x506606.Up = 0] = 'Up', _0x506606[_0x506606.Down = 1] = 'Down', _0x506606[_0x506606.Static = 2] = 'Static', _0x506606))(V2 || {});
function f6(_0x5ba378, _0x49ce3b) {
    const _0x252357 = {};
    return _0x252357.container = _0x5ba378, _0x252357.element = _0x5ba378, _0x252357.getElementPosition = () => -_0x5ba378.scrollLeft, _0x252357.position = 'start', _0x252357.axis = 'x', Qc(_0x252357);
}
function Qc(_0x49b7ea) {
    ;
    if (_0x49b7ea.margin ?? (_0x49b7ea.margin = 0), _0x49b7ea.maxDistance ?? (_0x49b7ea.maxDistance = Xc), _0x49b7ea.axis ?? (_0x49b7ea.axis = 'y'), (!ot.isAvailable('animations') || _0x49b7ea.forceDuration === 0) && (_0x49b7ea.forceDirection = 2), _0x49b7ea.forceDirection === 2) {
        return _0x49b7ea.forceDuration = 0, Ci(_0x49b7ea);
    }
    const _0x46f474 = d1().then(() => Ci(_0x49b7ea));
    return _0x49b7ea.axis === 'y' ? Vo(_0x46f474) : _0x46f474;
}
function Ci(_0x174e4c) {
    const {
        element: _0x5f4556,
        container: _0x9c2909,
        getNormalSize: _0x2dd70c,
        getElementPosition: _0x547c1c,
        transitionFunction: _0x1edcaa,
        axis: _0x57ea1c,
        margin: _0x36d644,
        position: _0x207c93,
        forceDirection: _0x5b6c64,
        maxDistance: _0x14348c,
        forceDuration: _0xcab58d
    } = _0x174e4c;
    if (!Ys(_0x5f4556)) {
        return Tf(_0x9c2909), Promise.resolve();
    }
    const _0x2c9140 = _0x57ea1c === 'y' ? 'top' : 'left', _0x5db081 = _0x57ea1c === 'y' ? 'bottom' : 'right', _0x4f8819 = _0x57ea1c === 'y' ? 'height' : 'width', _0x214337 = _0x57ea1c === 'y' ? 'scrollHeight' : 'scrollWidth', _0x4234b1 = _0x57ea1c === 'y' ? 'scrollHeight' : 'offsetWidth', _0x5e3fce = _0x57ea1c === 'y' ? 'scrollTop' : 'scrollLeft', _0x3b6932 = _0x5f4556.getBoundingClientRect(), _0x542dbc = _0x9c2909.getBoundingClientRect ? _0x9c2909.getBoundingClientRect() : document.body.getBoundingClientRect(), _0x44bb34 = _0x3b6932[_0x2c9140] - _0x542dbc[_0x2c9140], _0xdb72db = _0x547c1c ? _0x547c1c({
            'elementRect': _0x3b6932,
            'containerRect': _0x542dbc,
            'elementPosition': _0x44bb34
        }) : _0x44bb34, _0xaa8f30 = _0x5f4556[_0x4234b1], _0x77093f = _0x2dd70c ? _0x2dd70c({ 'rect': _0x542dbc }) : _0x542dbc[_0x4f8819];
    let _0x265f4f = _0x9c2909[_0x5e3fce];
    const _0xbf107a = _0x9c2909[_0x214337];
    let _0x3d4f14;
    switch (_0x207c93) {
    case 'start':
        _0x3d4f14 = _0xdb72db - _0x36d644;
        break;
    case 'end':
        _0x3d4f14 = _0x3b6932[_0x5db081] - _0x542dbc[_0x5db081] + _0x36d644;
        break;
    case 'nearest':
    case 'center':
        if (_0xaa8f30 < _0x77093f) {
            _0x3d4f14 = _0xdb72db + _0xaa8f30 / 2 - _0x77093f / 2;
        } else {
            if (_0x174e4c.fallbackToElementStartWhenCentering && _0x174e4c.fallbackToElementStartWhenCentering !== _0x5f4556) {
                return _0x174e4c.element = _0x174e4c.fallbackToElementStartWhenCentering, _0x174e4c.position = 'start', Ci(_0x174e4c);
            }
            _0x3d4f14 = _0xdb72db - _0x36d644;
        }
        break;
    }
    if (Math.abs(_0x3d4f14 - (_0x36d644 || 0)) < 1) {
        return Tf(_0x9c2909), Promise.resolve();
    }
    let _0x495e00;
    if (_0x57ea1c === 'y' && _0x5b6c64 === void 0 && (_0x3d4f14 > _0x14348c ? (_0x495e00 = _0x265f4f += _0x3d4f14 - _0x14348c, _0x3d4f14 = _0x14348c) : _0x3d4f14 < -_0x14348c && (_0x495e00 = _0x265f4f += _0x3d4f14 + _0x14348c, _0x3d4f14 = -_0x14348c)), _0x3d4f14 < 0) {
        const _0x1ab9db = -_0x265f4f;
        _0x3d4f14 = Math.max(_0x3d4f14, _0x1ab9db);
    } else {
        if (_0x3d4f14 > 0) {
            const _0x32fc29 = _0xbf107a - (_0x265f4f + _0x77093f);
            _0x3d4f14 = Math.min(_0x3d4f14, _0x32fc29);
        }
    }
    const _0x421215 = _0x265f4f + _0x3d4f14, _0x2d98e0 = Math.abs(_0x3d4f14), _0x1a299a = _0xcab58d ?? Ba + _0x2d98e0 / Xc * (H2 - Ba), _0x47b920 = Date.now(), _0x52dc5b = _0x1edcaa ?? (_0x2d98e0 < W2 ? G2 : z2), _0x469d31 = () => _0x1a299a ? Math.min((Date.now() - _0x47b920) / _0x1a299a, 1) : 1, _0x340a73 = () => {
            ;
            if (_0x495e00 !== void 0) {
                _0x9c2909[_0x5e3fce] = _0x495e00;
                _0x495e00 = void 0;
            }
            const _0x11bf36 = _0x469d31(), _0x11f8da = _0x52dc5b(_0x11bf36), _0x1449c5 = _0x3d4f14 * (1 - _0x11f8da);
            return _0x9c2909[_0x5e3fce] = Math.round(_0x421215 - _0x1449c5), _0x11bf36 < 1;
        };
    if (!_0x1a299a || !_0x3d4f14) {
        return Tf(_0x9c2909), _0x340a73(), Promise.resolve();
    }
    if (_0x174e4c.startCallback) {
        const _0x5ef986 = _0xbf107a - Math.round(_0x421215 + _0x9c2909[_0x57ea1c === 'y' ? 'offsetHeight' : 'offsetWidth']), _0x3b54c9 = {
                scrollSize: _0xbf107a,
                scrollPosition: _0x265f4f,
                distanceToEnd: _0x5ef986,
                path: _0x3d4f14,
                duration: _0x1a299a,
                containerRect: _0x542dbc,
                elementRect: _0x3b6932,
                getProgress: _0x469d31
            };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        _0x174e4c.startCallback(_0x3b54c9);
        ;
    }
    return mc(_0x340a73, _0x9c2909);
}
function z2(_0x2eebd8) {
    return 1 - (1 - _0x2eebd8) ** 5;
}
function G2(_0x380a47) {
    return 1 - (1 - _0x380a47) ** 3.5;
}
const q2 = 24, sn = !Yc;
let ki, Fi;
sn ? (ki = _0x41cb8b => requestAnimationFrame(_0x41cb8b), Fi = _0x23debb => cancelAnimationFrame(_0x23debb)) : (ki = _0x403925 => window.setTimeout(_0x403925, q2), Fi = _0x15fef6 => window.clearTimeout(_0x15fef6));
class Zc {
    constructor(_0x1c8cfc, _0x40aab6 = '', _0x2b088d = document.createElement('div')) {
        ;
        this.el = _0x1c8cfc;
        this.container = _0x2b088d;
        this.onScrollMeasure = 0;
        this.lastScrollPosition = 0;
        this.lastScrollDirection = 0;
        this.isHeavyAnimationInProgress = false;
        this.needCheckAfterAnimation = false;
        this.onScroll = () => {
            ;
            if (this.isHeavyAnimationInProgress) {
                this.cancelMeasure();
                this.needCheckAfterAnimation = true;
                ;
                return;
            }
            !this.onScrolledTop && !this.onScrolledBottom && !this.splitUp && !this.onAdditionalScroll || this.onScrollMeasure || (this.onScrollMeasure = ki(() => {
                ;
                this.onScrollMeasure = 0;
                const _0x4db38c = this.scrollPosition;
                this.lastScrollDirection = this.lastScrollPosition === _0x4db38c ? 0 : this.lastScrollPosition < _0x4db38c ? 1 : -1;
                this.lastScrollPosition = _0x4db38c;
                this.updateThumb(_0x4db38c);
                this.onAdditionalScroll && this.onAdditionalScroll();
                this.checkForTriggers && this.checkForTriggers();
                ;
            }));
        };
        this.onMouseMove = _0x468add => {
            ;
            se(_0x468add);
            const _0x6bdf54 = this.scrollSize, _0xc2b4dc = this.clientSize, _0x3f2114 = this.thumb.offsetHeight, _0x302c7d = _0x6bdf54 - _0xc2b4dc, _0x1db425 = _0xc2b4dc - _0x3f2114, _0x20062d = (_0x468add[this.clientAxis] - this.startMousePosition) / _0x1db425 * _0x302c7d, _0x1af99a = this.startScrollPosition + _0x20062d;
            this.scrollPosition = _0x1af99a;
        };
        this.onMouseDown = _0x89da6 => {
            ;
            const _0x177128 = { once: true };
            ;
            se(_0x89da6);
            this.startMousePosition = _0x89da6[this.clientAxis];
            this.startScrollPosition = this.scrollPosition;
            this.thumb.classList.add('is-focused');
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp, _0x177128);
            ;
            ;
        };
        this.onMouseUp = _0x39cbd2 => {
            ;
            window.removeEventListener('mousemove', this.onMouseMove);
            this.thumb.classList.remove('is-focused');
            ;
        };
        this.container.classList.add('scrollable');
        this.log = Q('SCROLL' + (_0x40aab6 ? '-' + _0x40aab6 : ''), ef.Error);
        _0x1c8cfc && (Array.from(_0x1c8cfc.children).forEach(_0x5138b7 => this.container.append(_0x5138b7)), _0x1c8cfc.append(this.container));
        ;
    }
    ['addScrollListener']() {
        const _0x257232 = {
            passive: true,
            capture: true
        };
        ;
        ;
        this.addedScrollListener || (this.addedScrollListener = true, this.container.addEventListener('scroll', this.onScroll, _0x257232));
        ;
    }
    ['removeScrollListener']() {
        const _0x2aec9b = { capture: true };
        ;
        this.addedScrollListener && (this.addedScrollListener = false, this.container.removeEventListener('scroll', this.onScroll, _0x2aec9b));
        ;
    }
    ['setListeners']() {
        const _0x2e0da2 = { passive: true };
        ;
        this.removeHeavyAnimationListener || (window.addEventListener('resize', this.onScroll, _0x2e0da2), this.addScrollListener(), this.removeHeavyAnimationListener = qo(() => {
            ;
            this.isHeavyAnimationInProgress = true;
            this.onScrollMeasure && (this.cancelMeasure(), this.needCheckAfterAnimation = true);
            ;
        }, () => {
            ;
            this.isHeavyAnimationInProgress = false;
            this.needCheckAfterAnimation && (this.onScroll(), this.needCheckAfterAnimation = false);
            ;
        }));
        ;
    }
    ['removeListeners']() {
        ;
        this.removeHeavyAnimationListener && (window.removeEventListener('resize', this.onScroll), this.thumb && (this.thumb.removeEventListener('mousedown', this.onMouseMove), window.removeEventListener('mousemove', this.onMouseMove), window.removeEventListener('mouseup', this.onMouseUp)), this.removeScrollListener(), this.removeHeavyAnimationListener(), this.removeHeavyAnimationListener = void 0);
    }
    ['destroy']() {
        ;
        this.removeListeners();
        this.onAdditionalScroll = void 0;
        this.onScrolledTop = void 0;
        this.onScrolledBottom = void 0;
        ;
    }
    ['prepend'](..._0x4c3d89) {
        const _0x5c55fd = this.splitUp || this.padding || this.container;
        this.thumb && _0x4c3d89.unshift(this.thumbContainer);
        _0x5c55fd.prepend(..._0x4c3d89);
        this.onSizeChange();
        ;
    }
    ['append'](..._0x2f3a99) {
        ;
        (this.splitUp || this.padding || this.container).append(..._0x2f3a99);
        this.onSizeChange();
        ;
    }
    ['scrollIntoViewNew'](_0x2f2429) {
        const _0x48eb0b = { ..._0x2f2429 };
        return _0x48eb0b.container = this.container, Qc(_0x48eb0b);
    }
    ['updateThumb'](_0x459ee2 = this.scrollPosition) {
        ;
        if (!sn || !this.thumb) {
            return;
        }
        const _0x2d17b0 = this.container[this.scrollSizeProperty], _0x49406f = this.container[this.clientSizeProperty], _0x4c6aa7 = _0x2d17b0 / _0x49406f / 0.75, _0xda86c9 = Math.max(20, _0x49406f / _0x4c6aa7), _0x46a237 = _0x459ee2 / (_0x2d17b0 - _0x49406f) * _0x49406f, _0x2d99b5 = _0x459ee2 / (_0x2d17b0 - _0x49406f), _0xeaef4f = _0x49406f - _0xda86c9;
        _0x49406f < _0x2d17b0 ? (this.thumb.style.height = _0xda86c9 + 'px', this.thumb.style.transform = 'translateY(' + Math.min(_0xeaef4f, _0x46a237 - _0xda86c9 * _0x2d99b5) + 'px)') : this.thumb.style.height = '0px';
    }
    ['cancelMeasure']() {
        ;
        this.onScrollMeasure && (Fi(this.onScrollMeasure), this.onScrollMeasure = 0);
    }
    ['onSizeChange']() {
        ;
        sn && this.thumb && this.onScroll();
    }
    ['getDistanceToEnd']() {
        ;
        return this.scrollSize - Math.round(this.scrollPosition + this.offsetSize);
    }
    get ['isScrolledToEnd']() {
        ;
        return this.getDistanceToEnd() <= 1;
    }
    get ['scrollPosition']() {
        ;
        return this.container[this.scrollPositionProperty];
    }
    set ['scrollPosition'](_0x1c38a4) {
        ;
        this.container[this.scrollPositionProperty] = _0x1c38a4;
    }
    get ['scrollSize']() {
        ;
        return this.container[this.scrollSizeProperty];
    }
    get ['clientSize']() {
        ;
        return this.container[this.clientSizeProperty];
    }
    get ['offsetSize']() {
        ;
        return this.container[this.offsetSizeProperty];
    }
    get ['firstElementChild']() {
        ;
        return this.thumb ? this.thumbContainer.nextElementSibling : this.container.firstElementChild;
    }
    ['setScrollPositionSilently'](_0x57fabc) {
        ;
        this.lastScrollPosition = _0x57fabc;
        this.ignoreNextScrollEvent();
        this.scrollPosition = _0x57fabc;
        ;
    }
    ['ignoreNextScrollEvent']() {
        const _0x4cea62 = {
            capture: true,
            passive: false,
            once: true
        };
        ;
        ;
        ;
        this.removeHeavyAnimationListener && (this.removeScrollListener(), this.container.addEventListener('scroll', _0x2754da => {
            ;
            se(_0x2754da);
            this.addScrollListener();
            ;
        }, _0x4cea62));
        ;
    }
    ['replaceChildren'](..._0x2d50fd) {
        ;
        this.thumb && _0x2d50fd.unshift(this.thumbContainer);
        this.container.replaceChildren(..._0x2d50fd);
        ;
    }
}
class $2 extends Zc {
    constructor(_0x3640be, _0x36ff84 = '', _0x2be22f = 300, _0x13a0bc, _0x5966ca) {
        ;
        super(_0x3640be, _0x36ff84, _0x5966ca);
        this.onScrollOffset = _0x2be22f;
        this.loadedAll = {
            'top': true,
            'bottom': false
        };
        this.checkForTriggers = () => {
            ;
            if (!this.onScrolledTop && !this.onScrolledBottom) {
                return;
            }
            if (this.isHeavyAnimationInProgress) {
                this.onScroll();
                return;
            }
            const {
                scrollSize: _0x2aadd3,
                scrollPosition: _0x49dae9,
                clientSize: _0x20a752
            } = this;
            if (!_0x2aadd3) {
                return;
            }
            const _0x47aa9f = _0x2aadd3 - _0x20a752;
            this.onScrolledTop && _0x49dae9 <= this.onScrollOffset && this.lastScrollDirection <= 0 && this.onScrolledTop();
            this.onScrolledBottom && _0x47aa9f - _0x49dae9 <= this.onScrollOffset && this.lastScrollDirection >= 0 && this.onScrolledBottom();
            ;
        };
        this.scrollPositionProperty = 'scrollTop';
        this.scrollSizeProperty = 'scrollHeight';
        this.clientSizeProperty = 'clientHeight';
        this.offsetSizeProperty = 'offsetHeight';
        this.clientAxis = 'clientY';
        sn && (this.thumbContainer = document.createElement('div'), this.thumbContainer.classList.add('scrollable-thumb-container'), this.thumb = document.createElement('div'), this.thumb.classList.add('scrollable-thumb'), this.thumbContainer.append(this.thumb), this.container.prepend(this.thumbContainer), this.thumb.addEventListener('mousedown', this.onMouseDown));
        this.container.classList.add('scrollable-y');
        be && !bs && this.container.classList.add('no-scrollbar');
        this.setListeners();
        ;
    }
    ['attachBorderListeners'](_0x51bb8c = this.container) {
        const _0x5e4ca4 = this.onAdditionalScroll;
        this.onAdditionalScroll = () => {
            ;
            _0x5e4ca4?.();
            _0x51bb8c.classList.toggle('scrolled-start', !this.scrollPosition);
            _0x51bb8c.classList.toggle('scrolled-end', this.isScrolledToEnd);
            ;
        };
        _0x51bb8c.classList.add('scrolled-start', 'scrolled-end', 'scrollable-y-bordered');
        ;
    }
    ['setVirtualContainer'](_0x3b753e) {
        ;
        this.splitUp = _0x3b753e;
        this.log('setVirtualContainer:', _0x3b753e, this);
        ;
    }
}
class n6 extends Zc {
    constructor(_0x3271e1, _0x4a49c9 = '', _0x3ec3a9 = 300, _0x4d3708 = 15, _0x399fc0 = document.createElement('div')) {
        ;
        if (super(_0x3271e1, _0x4a49c9, _0x399fc0), this.onScrollOffset = _0x3ec3a9, this.splitCount = _0x4d3708, this.container = _0x399fc0, this.container.classList.add('scrollable-x'), !Fe) {
            const _0xba93c5 = _0x9e97 => {
                    ;
                    _0x9e97.stopPropagation();
                    !_0x9e97.deltaX && this.container.scrollWidth > this.container.clientWidth && (this.container.scrollLeft += _0x9e97.deltaY / 4, se(_0x9e97));
                    ;
                }, _0x4668df = { passive: false };
            ;
            this.container.addEventListener('wheel', _0xba93c5, _0x4668df);
            ;
        }
        this.scrollPositionProperty = 'scrollLeft';
        this.scrollSizeProperty = 'scrollWidth';
        this.clientSizeProperty = 'clientWidth';
        this.offsetSizeProperty = 'offsetWidth';
        ;
    }
}
function Y2(_0x65dc1, _0x3ddb62 = {}) {
    const _0x534028 = document.createElement(_0x3ddb62.asLink ? 'a' : _0x3ddb62.asDiv ? 'div' : 'button');
    return _0x534028.className = _0x65dc1, _0x3ddb62.noRipple || (_0x3ddb62.rippleSquare && _0x534028.classList.add('rp-square'), Kc(_0x534028)), _0x3ddb62.icon && K2(_0x534028, _0x3ddb62.icon, false), _0x3ddb62.onlyMobile && _0x534028.classList.add('only-handhelds'), _0x3ddb62.disabled && _0x534028.setAttribute('disabled', 'true'), _0x3ddb62.text && _0x534028.append(X(_0x3ddb62.text, _0x3ddb62.textArgs)), _0x534028;
}
function K2(_0x581a88, _0x47fc65, _0x120d46 = _0x581a88.querySelector('.button-icon')) {
    const _0x1727db = At(_0x47fc65, 'button-icon');
    return _0x120d46 ? _0x120d46.replaceWith(_0x1727db) : _0x581a88.append(_0x1727db), _0x1727db;
}
const xf = (_0x217192, _0x44425b = {}) => {
    const _0x38d97d = _0x217192?.split(' ');
    return Y2('btn-icon' + (_0x38d97d?.length > 1 ? ' ' + _0x38d97d.slice(1).join(' ') : ''), {
        'icon': _0x38d97d?.[0] || void 0,
        ..._0x44425b
    });
};
function e1(_0x3a104b, _0x1364ff) {
    ;
    return _0x3a104b = Lt(_0x3a104b), _0x1364ff ? _0x3a104b.forEach(_0x1c3854 => _0x1c3854.setAttribute('disabled', 'true')) : _0x3a104b.forEach(_0x37a8ef => _0x37a8ef.removeAttribute('disabled')), () => e1(_0x3a104b, !_0x1364ff);
}
function Pi(_0xa2d7ed = window.getSelection()) {
    ;
    if (!_0xa2d7ed?.rangeCount) {
        return true;
    }
    const _0x5d316a = _0xa2d7ed.getRangeAt(0);
    return !!(_0x5d316a.collapsed || !_0x5d316a.START_TO_END);
}
function Ua(_0xfe646b) {
    ;
    return _0xfe646b ? _0xfe646b.match(Qa) : null;
}
function _i(_0x49de37, _0x41268b) {
    const _0x2699cf = {}, _0x1cce2a = {
            elements: [],
            active: false
        };
    ;
    ;
    _0x49de37.forEach(_0x4e93a3 => _0x2699cf[_0x4e93a3] = _0x1cce2a);
    ;
    const _0xc0bb1c = window.getSelection();
    if (_0xc0bb1c.isCollapsed) {
        return _0x2699cf;
    }
    const _0x489106 = _0xc0bb1c.getRangeAt(0), _0x318ed6 = _0x489106.commonAncestorContainer, _0x166023 = (_0x318ed6.nodeType === _0x318ed6.ELEMENT_NODE ? _0x318ed6 : _0x318ed6.parentElement).closest('[contenteditable="true"]');
    if (!_0x166023) {
        return _0x2699cf;
    }
    const _0x2f3dc3 = document.createTreeWalker(_0x166023, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, { 'acceptNode': _0x79f2a9 => _0x489106.intersectsNode(_0x79f2a9) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
    let _0x2c5af0;
    for (; _0x2c5af0 = _0x2f3dc3.nextNode();) {
        for (const _0xc36022 of _0x49de37) {
            const _0x337a45 = en[_0xc36022], _0x296923 = _0x2c5af0.nodeType === _0x2c5af0.ELEMENT_NODE ? _0x2c5af0 : _0x2c5af0.parentElement;
            _0x296923.closest(_0x337a45.match) && _0x2699cf[_0xc36022].elements.push(_0x296923);
        }
    }
    for (const _0x1fa6ee of _0x49de37)
        _0x2699cf[_0x1fa6ee].active = _0x2699cf[_0x1fa6ee].elements.length >= 1;
    return _0x2699cf;
}
function J2(_0x5e2a80) {
    const _0x5494a4 = document.createRange();
    if (_0x5e2a80.endContainer.nodeType === Node.TEXT_NODE && _0x5e2a80.endOffset < _0x5e2a80.endContainer.nodeValue.length) {
        return _0x5494a4.setStart(_0x5e2a80.endContainer, _0x5e2a80.endOffset), _0x5494a4.setEnd(_0x5e2a80.endContainer, _0x5e2a80.endOffset + 1), _0x5494a4.toString();
    }
    const _0x824dc0 = X2(_0x5e2a80.endContainer);
    if (_0x824dc0) {
        return _0x5494a4.setStart(_0x824dc0, 0), _0x5494a4.setEnd(_0x824dc0, Math.min(_0x824dc0.nodeValue.length, 1)), _0x5494a4.toString();
    }
}
function X2(_0x22485b) {
    ;
    for (; _0x22485b && !_0x22485b.nextSibling;) {
        _0x22485b = _0x22485b.parentNode;
    }
    if (_0x22485b && _0x22485b.nextSibling) {
        return t1(_0x22485b.nextSibling);
    }
}
function t1(_0x5f0ced) {
    ;
    if (_0x5f0ced.nodeType === Node.TEXT_NODE) {
        return _0x5f0ced;
    }
    for (let _0x4de2aa = 0; _0x4de2aa < _0x5f0ced.childNodes.length; _0x4de2aa++) {
        const _0x3605f6 = _0x5f0ced.childNodes[_0x4de2aa], _0x285149 = t1(_0x3605f6);
        if (_0x285149) {
            return _0x285149;
        }
    }
}
const s1 = new WeakMap();
function i6(_0x420616) {
}
function r6(_0x170dc8) {
    const _0x624b1a = s1.get(_0x170dc8);
    _0x624b1a && (_0x624b1a.canRedoFromHTML = '', _0x624b1a.undoHistory.length = 0, _0x624b1a.executedHistory.length = 0, _0x624b1a.canUndoFromHTML = '');
}
function a6(_0x155cb6) {
    const _0x43bd71 = s1.get(_0x155cb6);
    _0x43bd71 && _0x43bd71.canRedoFromHTML && !_0x43bd71.lockRedo && _0x155cb6.innerHTML !== _0x43bd71.canRedoFromHTML && (_0x43bd71.canRedoFromHTML = '', _0x43bd71.undoHistory.length = 0);
}
function Ti(_0x89dfc7, _0x43f727, _0x150e64) {
    const _0x466a28 = { 'link': _0x150e64 ? () => document.execCommand('createLink', false, _0x150e64) : () => document.execCommand('unlink', false, null) }, _0x3027b5 = _0x41ae2e => {
            ;
            _0x466a28[_0x41ae2e] = () => {
                ;
                const _0x477d56 = (_0x27ff5b.includes(_0x41ae2e) ? _0x27ff5b : [_0x41ae2e]).filter(_0x155f3d => _0x464bef[_0x155f3d]?.active);
                if (xe(_0x477d56, _0x41ae2e) || _0x477d56.push(_0x41ae2e), _0x41ae2e === 'quote') {
                    const _0x3bbe1f = document.getSelection();
                    _0x3bbe1f.rangeCount && J2(_0x3bbe1f.getRangeAt(0)) === '\n' && _0x3bbe1f.modify(_0x3bbe1f.isCollapsed ? 'move' : 'extend', 'forward', 'character');
                }
                let _0x4432c6;
                return _0x477d56.length ? _0x4432c6 = document.execCommand('fontName', false, 'markup-' + _0x477d56.join('-')) : _0x4432c6 = em(), Q2(_0x89dfc7), _0x4432c6;
            };
        }, _0x27ff5b = [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'spoiler',
            'quote'
        ];
    if (_0x27ff5b.forEach(_0x5edc27 => {
            ;
            _0x3027b5(_0x5edc27);
        }), _0x3027b5('monospace'), !_0x466a28[_0x43f727]) {
        return false;
    }
    const _0x5a0b13 = {
        capture: true,
        passive: false
    };
    ;
    ;
    ;
    const _0x322122 = _0x466a28[_0x43f727], _0x237353 = [], _0xb2c59d = vn.getInstance().prepareApplyingMarkdown(), _0x50e7bb = _0x5a0b13;
    _0x89dfc7.addEventListener('input', se, _0x50e7bb);
    _0x237353.push(document.execCommand('styleWithCSS', false, 'true'));
    ;
    const _0x464bef = _i(Object.keys(_0x466a28));
    return _0x464bef.monospace?.active && _0x43f727 === 'link' && _0x237353.push(Z2()), _0x237353.push(typeof _0x322122 == 'function' ? _0x322122() : document.execCommand(_0x322122, false, null)), _0x237353.push(document.execCommand('styleWithCSS', false, 'false')), _0xb2c59d(), ff.getInstance().setActiveMarkupButton(), _0x89dfc7.removeEventListener('input', se, _0x50e7bb), hn(_0x89dfc7, 'input'), true;
}
function Q2(_0xcbbcbb) {
    ;
    _0xcbbcbb.querySelectorAll('[style*="font-family"]').forEach(_0x3da536 => {
        ;
        if (_0x3da536.style.caretColor) {
            _0x3da536.style.cssText = '';
            return;
        }
        const _0x1f70e7 = _0x3da536.style.fontFamily;
        if (_0x1f70e7 !== Vs) {
            _0x3da536.classList.add('is-markup');
            _0x3da536.dataset.markup = _0x1f70e7;
            tf(_0x3da536);
            _0x1f70e7.includes('quote') && _0x3da536.classList.add('quote-like', 'quote-like-icon', 'quote-like-border');
        }
    });
    _0xcbbcbb.querySelectorAll('.is-markup').forEach(_0x5635d3 => {
        const _0x2c3a10 = _0x5635d3.style.fontFamily;
        _0x2c3a10 && _0x2c3a10 !== Vs || (_0x2c3a10.includes('quote') || _0x5635d3.classList.remove('quote-like', 'quote-like-icon', 'quote-like-border'), _0x5635d3.classList.remove('is-markup'), delete _0x5635d3.dataset.markup);
    });
    ;
}
function Z2() {
    ;
    return document.execCommand('removeFormat', false, null);
}
function em() {
    ;
    return document.execCommand('fontName', false, Vs);
}
function o6(_0x20d391, _0x4ac253) {
    const _0x3f49a5 = {
        KeyB: 'bold',
        KeyI: 'italic',
        KeyU: 'underline',
        KeyS: 'strikethrough',
        KeyM: 'monospace',
        KeyP: 'spoiler'
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x478e6d = _0x3f49a5;
    _0x478e6d.KeyK = 'link';
    const _0x2fa2bb = _0x4ac253.code, _0x2e81f3 = _0x478e6d[_0x2fa2bb], _0x134019 = document.getSelection();
    !Pi(_0x134019) && _0x2e81f3 && (_0x2fa2bb === 'KeyK' ? ff.getInstance().showLinkEditor() : Ti(_0x20d391, _0x2e81f3), se(_0x4ac253));
}
class ff {
    constructor() {
        ;
        this.buttons = {};
        this.addedListener = false;
        this.waitingForMouseUp = false;
        this.mouseUpCounter = 0;
        this.onMouseUpSingle = _0x3804a1 => {
            ;
            if (this.waitingForMouseUp = false, Fe) {
                if (_0x3804a1 && se(_0x3804a1), this.mouseUpCounter++ === 0) {
                    this.resetSelection(this.savedRange);
                } else {
                    this.hide();
                    return;
                }
            }
            this.show();
        };
        ;
    }
    static ['getInstance']() {
        ;
        return this.INSTANCE || (this.INSTANCE = new ff());
    }
    ['init']() {
        ;
        this.container = document.createElement('div');
        this.container.classList.add('markup-tooltip', 'z-depth-1', 'hide');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('markup-tooltip-wrapper');
        ;
        const _0x2d8bae = document.createElement('div'), _0x598c11 = document.createElement('div'), _0x2b173f = { noRipple: true };
        ;
        const _0x11d83b = { noRipple: true };
        ;
        _0x2d8bae.classList.add('markup-tooltip-tools', 'markup-tooltip-tools-regular');
        _0x598c11.classList.add('markup-tooltip-tools', 'markup-tooltip-tools-link');
        [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'monospace',
            'spoiler',
            [
                'quote',
                'quote_outline'
            ],
            'link'
        ].forEach(_0x543a7b => {
            const _0x41bc89 = { noRipple: true };
            ;
            const _0x49a308 = typeof _0x543a7b == 'string' ? _0x543a7b : _0x543a7b[0], _0xb9198d = typeof _0x543a7b == 'string' ? _0x543a7b : _0x543a7b[1], _0x25d274 = xf(_0xb9198d, _0x41bc89);
            _0x2d8bae.append(this.buttons[_0x49a308] = _0x25d274);
            _0x543a7b !== 'link' ? _0x25d274.addEventListener('mousedown', _0x1d5293 => {
                ;
                se(_0x1d5293);
                Ti(this.input, _0x49a308);
                this.cancelClosening();
                ;
            }) : Ns(_0x25d274, _0x2cf445 => {
                ;
                se(_0x2cf445);
                this.showLinkEditor();
                this.cancelClosening();
                ;
            });
            ;
        });
        this.linkBackButton = xf('left', _0x2b173f);
        this.linkInput = document.createElement('input');
        Gi(this.linkInput, 'MarkupTooltip.LinkPlaceholder', void 0, 'placeholder');
        this.linkInput.classList.add('input-clear');
        this.linkInput.addEventListener('keydown', _0x18d949 => {
            const _0x3bbf9e = !this.linkInput.value.length || !!Ua(this.linkInput.value);
            _0x18d949.key === 'Enter' && (_0x3bbf9e ? this.applyLink(_0x18d949) : (this.linkInput.classList.contains('error') && (this.linkInput.classList.remove('error'), this.linkInput.offsetLeft), this.linkInput.classList.add('error')));
        });
        this.linkInput.addEventListener('input', _0x1924f0 => {
            const _0x2be058 = this.isLinkValid();
            this.linkInput.classList.toggle('is-valid', _0x2be058);
            this.linkInput.classList.remove('error');
            ;
        });
        this.linkBackButton.addEventListener('mousedown', _0x3ea6fe => {
            ;
            se(_0x3ea6fe);
            this.container.classList.remove('is-link');
            this.resetSelection();
            this.setTooltipPosition();
            this.cancelClosening();
            ;
        });
        this.linkApplyButton = xf('check markup-tooltip-link-apply', _0x11d83b);
        this.linkApplyButton.addEventListener('mousedown', _0x16ecba => {
            ;
            this.applyLink(_0x16ecba);
        });
        ;
        ;
        const _0x4683a1 = document.createElement('div');
        _0x4683a1.classList.add('markup-tooltip-link-apply-container');
        const _0x5cfaf4 = document.createElement('span'), _0x272f1b = document.createElement('span'), _0x15da62 = document.createElement('span');
        _0x5cfaf4.classList.add('markup-tooltip-delimiter');
        _0x272f1b.classList.add('markup-tooltip-delimiter');
        _0x15da62.classList.add('markup-tooltip-delimiter');
        _0x2d8bae.insertBefore(_0x5cfaf4, this.buttons.link);
        _0x4683a1.append(_0x15da62, this.linkApplyButton);
        _0x598c11.append(this.linkBackButton, _0x272f1b, this.linkInput, _0x4683a1);
        this.wrapper.append(_0x2d8bae, _0x598c11);
        this.container.append(this.wrapper);
        document.body.append(this.container);
        window.addEventListener('resize', () => {
            ;
            this.hide();
        });
        ;
    }
    ['showLinkEditor']() {
        ;
        (!this.container || !this.container.classList.contains('is-visible')) && this.show();
        const _0x548653 = this.buttons.link;
        this.container.classList.add('is-link');
        const _0x379482 = document.getSelection();
        this.savedRange = _0x379482.getRangeAt(0);
        const _0x3f14f0 = _i(['link']).link.elements.find(_0x366e2b => _0x366e2b.tagName === 'A');
        _0x548653.classList.contains('active') ? this.linkInput.value = _0x3f14f0.href : this.linkInput.value = '';
        this.setTooltipPosition(true);
        setTimeout(() => {
            ;
            this.linkInput.focus();
        }, 200);
        this.linkInput.classList.toggle('is-valid', this.isLinkValid());
        ;
    }
    ['applyLink'](_0x3f0e31) {
        ;
        se(_0x3f0e31);
        this.resetSelection();
        ;
        let _0x55f02b = this.linkInput.value;
        _0x55f02b && !ji(_0x55f02b) && (_0x55f02b = 'https://' + _0x55f02b);
        Ti(this.input, 'link', _0x55f02b);
        setTimeout(() => {
            ;
            this.hide();
        }, 0);
        ;
    }
    ['isLinkValid']() {
        ;
        return !this.linkInput.value.length || !!Ua(this.linkInput.value);
    }
    ['resetSelection'](_0x24398d = this.savedRange) {
        const _0x354c1f = window.getSelection();
        _0x354c1f.removeAllRanges();
        _0x354c1f.addRange(_0x24398d);
        this.input.focus();
        ;
    }
    ['hide']() {
        ;
        this.init || (this.input = void 0, this.container.classList.remove('is-visible'), document.removeEventListener('mouseup', this.onMouseUpSingle), this.waitingForMouseUp = false, Ie.removeByType('markup'), this.hideTimeout && clearTimeout(this.hideTimeout), this.hideTimeout = window.setTimeout(() => {
            ;
            this.hideTimeout = void 0;
            this.container.classList.add('hide');
            this.container.classList.remove('is-link');
            ;
        }, 200));
    }
    ['getActiveMarkupButton']() {
        const _0x4a78c1 = new Set(), _0x5a9b6f = Object.keys(this.buttons), _0xe9dc0a = _i(_0x5a9b6f);
        return _0x5a9b6f.forEach(_0x4453d3 => {
            ;
            _0xe9dc0a[_0x4453d3].active && _0x4a78c1.add(this.buttons[_0x4453d3]);
        }), [..._0x4a78c1];
    }
    ['setActiveMarkupButton']() {
        const _0x4134e0 = this.getActiveMarkupButton();
        for (const _0x2c8019 in this.buttons) {
            const _0x7d387d = this.buttons[_0x2c8019];
            _0x7d387d.classList.toggle('active', _0x4134e0.includes(_0x7d387d));
        }
    }
    ['setTooltipPosition'](_0x24e7ed = false) {
        const _0x5d1237 = document.getSelection().getRangeAt(0), _0x18eee1 = yt(this.input, 'rows-wrapper') || yt(this.input, 'input-message-container') || yt(this.input, 'input-field'), _0x464130 = this.container.classList.contains('is-link') ? this.wrapper.lastElementChild : this.wrapper.firstElementChild, _0x2d19ca = document.body.getBoundingClientRect(), _0x3f69d9 = _0x5d1237.getBoundingClientRect(), _0x549cb3 = _0x18eee1.getBoundingClientRect(), _0x5d4218 = _0x464130.getBoundingClientRect();
        this.container.style.maxWidth = _0x549cb3.width + 'px';
        const _0x58afff = yr(void 0, this.input, false, _0x3f69d9), {
                newHeight: _0xfa4737 = 0,
                oldHeight: _0x96e299 = _0xfa4737
            } = this.input;
        if (!_0x58afff) {
            return;
        }
        const _0x24c49f = (_0x58afff ? _0x58afff.rect.top : _0x549cb3.top) + _0x2d19ca.top * -1 - _0x5d4218.height - 8 + (_0x96e299 - _0xfa4737), _0x5155de = _0x549cb3.left, _0x511b66 = _0x549cb3.left + _0x549cb3.width - Math.min(_0x549cb3.width, _0x5d4218.width);
        let _0x462343;
        if (_0x24e7ed) {
            const _0x17e4f7 = this.container.getBoundingClientRect();
            _0x462343 = Dt(_0x17e4f7.left, _0x5155de, _0x511b66);
        } else {
            const _0xdc923e = _0x3f69d9.left + (_0x3f69d9.width - _0x5d4218.width) / 2;
            _0x462343 = Dt(_0xdc923e, _0x5155de, _0x511b66);
        }
        this.container.style.transform = 'translate3d(' + _0x462343 + 'px, ' + _0x24c49f + 'px, 0)';
    }
    ['show']() {
        ;
        if (this.init && (this.init(), this.init = null), Pi()) {
            this.hide();
            return;
        }
        if (this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout), this.container.classList.contains('is-visible')) {
            return;
        }
        this.container.classList.toggle('night', Hs.isDarkOverlayActive);
        this.setActiveMarkupButton();
        this.container.classList.remove('is-link');
        ;
        const _0x2f0fb2 = this.container.classList.contains('hide');
        _0x2f0fb2 && (this.container.classList.remove('hide'), this.container.classList.add('no-transition'));
        this.setTooltipPosition();
        _0x2f0fb2 && (this.container.offsetLeft, this.container.classList.remove('no-transition'));
        this.container.classList.add('is-visible');
        Re || Ie.pushItem({
            'type': 'markup',
            'onPop': () => {
                this.hide();
            }
        });
        ;
    }
    ['setMouseUpEvent']() {
        const _0x47c6b7 = { once: true };
        ;
        this.waitingForMouseUp || (this.waitingForMouseUp = true, document.addEventListener('mouseup', this.onMouseUpSingle, _0x47c6b7));
        ;
    }
    ['cancelClosening']() {
        const _0x173bfb = { once: true };
        ;
        Fe && !Et && (document.removeEventListener('mouseup', this.onMouseUpSingle), document.addEventListener('mouseup', _0x370f0b => {
            ;
            se(_0x370f0b);
            this.mouseUpCounter = 1;
            this.waitingForMouseUp = false;
            this.setMouseUpEvent();
            ;
        }, _0x173bfb));
        ;
    }
    ['canFormatInput'](_0x5aca84) {
        ;
        return _0x5aca84.classList.contains('input-message-input') || _0x5aca84.getAttribute('can-format');
    }
    ['handleSelection']() {
        ;
        this.addedListener || (this.addedListener = true, document.addEventListener('selectionchange', _0x57daa6 => {
            ;
            if (document.activeElement === this.linkInput) {
                return;
            }
            const _0x206759 = document.activeElement;
            if (this.input ? _0x206759 !== this.input : !this.canFormatInput(_0x206759)) {
                this.hide();
                return;
            }
            const _0x46e6f7 = document.getSelection();
            if (Pi(_0x46e6f7)) {
                this.hide();
                return;
            }
            if (this.input = _0x206759, Fe) {
                if (Et) {
                    this.show();
                    this.setTooltipPosition();
                    ;
                } else {
                    if (this.mouseUpCounter === 2) {
                        this.mouseUpCounter = 0;
                        return;
                    }
                    this.savedRange = _0x46e6f7.getRangeAt(0);
                    this.setMouseUpEvent();
                    ;
                }
            } else {
                this.container && this.container.classList.contains('is-visible') ? (this.setActiveMarkupButton(), this.setTooltipPosition()) : this.input.matches(':active') ? this.setMouseUpEvent() : this.show();
            }
        }), document.addEventListener('beforeinput', _0x2e7fcb => {
            const _0x2bf5bb = { once: true };
            ;
            (_0x2e7fcb.inputType === 'historyRedo' || _0x2e7fcb.inputType === 'historyUndo') && _0x2e7fcb.target.addEventListener('input', () => this.setActiveMarkupButton(), _0x2bf5bb);
            ;
        }));
    }
}
const Fr = document.body;
let xs = Fr;
const f1 = () => {
    ;
    xs = Jc() || Fr;
    Li.reAppend();
    ;
};
j2(Fr, f1);
const mt = class mt extends je {
    constructor(_0x351689, _0x35c9da = {}) {
        const _0x21e36c = { noRipple: true };
        ;
        if (super(false), this.element = document.createElement('div'), this.container = document.createElement('div'), this.header = document.createElement('div'), this.title = document.createElement('div'), this.hideWithCallback = _0x403bd1 => {
                ;
                this.addEventListener('closeAfterTimeout', _0x403bd1);
                this.hide();
                ;
            }, this.element.classList.add('popup'), this.element.className = 'popup' + (_0x351689 ? ' ' + _0x351689 : ''), this.container.classList.add('popup-container', 'z-depth-1'), Hs.isDarkOverlayActive && (this.night = true, this.element.classList.add('night')), this.header.classList.add('popup-header'), _0x35c9da.title && (this.title.classList.add('popup-title'), typeof _0x35c9da.title == 'string' ? Gi(this.title, _0x35c9da.title) : typeof _0x35c9da.title != 'boolean' && this.title.append(_0x35c9da.title), this.header.append(this.title)), this.isConfirmationNeededOnClose = _0x35c9da.isConfirmationNeededOnClose, this.middlewareHelper = us(), this.lateMiddlewareHelper = us(), this.listenerSetter = new Rc(), this.managers = mt.MANAGERS, this.confirmShortcutIsSendShortcut = _0x35c9da.confirmShortcutIsSendShortcut, _0x35c9da.closable && (this.btnClose = xf('', _0x21e36c), this.btnClose.classList.add('popup-close'), this.header.prepend(this.btnClose), _0x35c9da.onBackClick ? (this.btnCloseAnimatedIcon = document.createElement('div'), this.btnCloseAnimatedIcon.classList.add('animated-close-icon'), this.btnClose.append(this.btnCloseAnimatedIcon)) : this.btnClose.append(At('close')), Ns(this.btnClose, () => {
                ;
                _0x35c9da.onBackClick && this.btnCloseAnimatedIcon.classList.contains('state-back') ? _0x35c9da.onBackClick() !== false && this.btnCloseAnimatedIcon.classList.remove('state-back') : this.hide();
            }, { 'listenerSetter': this.listenerSetter })), this.withoutOverlay = _0x35c9da.withoutOverlay, this.withoutOverlay && this.element.classList.add('no-overlay'), _0x35c9da.overlayClosable && Ns(this.element, _0x47c8f0 => {
                ;
                yt(_0x47c8f0.target, 'popup-container') || !_0x47c8f0.target.isConnected || this.hide();
            }, { 'listenerSetter': this.listenerSetter }), _0x35c9da.withConfirm && (this.btnConfirm = document.createElement('button'), this.btnConfirm.classList.add('btn-primary', 'btn-color-primary'), _0x35c9da.withConfirm !== true && this.btnConfirm.append(X(_0x35c9da.withConfirm)), this.header.append(this.btnConfirm)), this.container.append(this.header), _0x35c9da.body && (this.body = document.createElement('div'), this.body.classList.add('popup-body'), this.container.append(this.body)), _0x35c9da.scrollable) {
            const _0xe6e2ad = this.scrollable = new $2(this.body);
            if (this.attachScrollableListeners(), _0x35c9da.floatingHeader) {
                this.attachScrollableListeners(this.header);
                const _0x2960b8 = document.createElement('div');
                _0x2960b8.classList.add('popup-header-background');
                this.header.prepend(_0x2960b8);
                this.header.classList.add('is-floating');
                ;
            }
            this.body || this.header.after(_0xe6e2ad.container);
        }
        _0x35c9da.footer && (this.footer = document.createElement('div'), this.footer.classList.add('popup-footer'), (this.body || this.container).append(this.footer), _0x35c9da.withFooterConfirm && this.footer.append(this.btnConfirm));
        this.btnConfirmOnEnter = this.btnConfirm;
        this.setButtons(_0x35c9da.buttons);
        this.element.append(this.container);
        mt.POPUPS.push(this);
        ;
    }
    ['setButtons'](_0x217d10) {
        ;
        if (this.buttons = _0x217d10, this.buttonsEl && (this.buttonsEl.remove(), this.buttonsEl = void 0), !_0x217d10?.length) {
            return;
        }
        const _0x11fdb7 = this.buttonsEl = document.createElement('div');
        _0x11fdb7.classList.add('popup-buttons');
        const _0x22b078 = _0x217d10.map(_0x49332b => {
            const _0x34fe64 = document.createElement('button');
            if (_0x34fe64.className = 'popup-button btn' + (_0x49332b.isDanger ? ' danger' : ' primary'), _0x49332b.noRipple || Kc(_0x34fe64), _0x49332b.text ? _0x34fe64.append(_0x49332b.text) : _0x49332b.langKey && _0x34fe64.append(X(_0x49332b.langKey, _0x49332b.langArgs)), _0x49332b.iconLeft || _0x49332b.iconRight) {
                const _0x3909d5 = At(_0x49332b.iconLeft || _0x49332b.iconRight, 'popup-button-icon', _0x49332b.iconLeft ? 'left' : 'right');
                _0x34fe64.classList.add('with-icon');
                _0x49332b.iconLeft ? _0x34fe64.prepend(_0x3909d5) : _0x34fe64.append(_0x3909d5);
                ;
            }
            return Ns(_0x34fe64, async _0x759a6 => {
                ;
                let _0x13f1c5 = _0x49332b.callback?.(_0x759a6);
                if (_0x13f1c5 !== void 0 && _0x13f1c5 instanceof Promise) {
                    const _0x2695c1 = e1([_0x49332b.element], true);
                    try {
                        _0x13f1c5 = await _0x13f1c5;
                    } catch {
                        _0x13f1c5 = false;
                    }
                    _0x13f1c5 === false && _0x2695c1();
                }
                _0x13f1c5 !== false && this.hide();
            }, { 'listenerSetter': this.listenerSetter }), _0x49332b.element = _0x34fe64;
        });
        if (!this.btnConfirmOnEnter && _0x217d10.length === 2) {
            const _0x4ea3ad = _0x217d10.find(_0xcbe52f => !_0xcbe52f.isCancel);
            _0x4ea3ad && (this.btnConfirmOnEnter = _0x4ea3ad.element);
        }
        _0x217d10.length >= 3 && _0x11fdb7.classList.add('is-vertical-layout');
        _0x11fdb7.append(..._0x22b078);
        this.container.append(_0x11fdb7);
        ;
    }
    ['attachScrollableListeners'](_0x4e9249) {
        ;
        return this.scrollable.attachBorderListeners(_0x4e9249);
    }
    ['onContentUpdate']() {
        ;
        this.scrollable?.onAdditionalScroll?.();
    }
    ['show']() {
        ;
        this.shown || this.destroyed || (this.shown = true, this.navigationItem = {
            'type': 'popup',
            'onPop': () => {
                ;
                if (this.isConfirmationNeededOnClose) {
                    const _0x1afcfc = this.isConfirmationNeededOnClose();
                    if (_0x1afcfc) {
                        return Promise.resolve(_0x1afcfc).then(() => {
                            ;
                            this.destroy();
                        }), false;
                    }
                }
                return this.destroy();
            }
        }, Ie.pushItem(this.navigationItem), ja(), xs.append(this.element), this.element.offsetWidth, this.element.classList.add('active'), this.onContentUpdate(), this.withoutOverlay || (Hs.isOverlayActive = true, pe.checkAnimations2(true)), setTimeout(() => {
            ;
            this.element.classList.contains('active') && this.listenerSetter.add(document.body)('keydown', _0x1e1669 => {
                ;
                !this.btnConfirmOnEnter || this.btnConfirmOnEnter.disabled || mt.POPUPS[mt.POPUPS.length - 1] !== this || (this.confirmShortcutIsSendShortcut ? U2(_0x1e1669) : _0x1e1669.key === 'Enter') && (t0(this.btnConfirmOnEnter), se(_0x1e1669));
            });
        }, 0));
    }
    ['hide']() {
        ;
        if (!this.destroyed) {
            if (!this.navigationItem) {
                this.destroy();
                return;
            }
            Ie.backByItem(this.navigationItem);
        }
    }
    ['forceHide']() {
        return this.destroy();
    }
    ['destroy']() {
        ;
        this.destroyed || (this.destroyed = true, this.dispatchEvent('close'), this.element.classList.add('hiding'), this.element.classList.remove('active'), this.listenerSetter.removeAll(), this.middlewareHelper.destroy(), ff.getInstance().hide(), this.withoutOverlay || (Hs.isOverlayActive = false), Ie.removeItem(this.navigationItem), this.navigationItem = void 0, xe(mt.POPUPS, this), f1(), setTimeout(() => {
            ;
            this.element.remove();
            this.dispatchEvent('closeAfterTimeout');
            this.cleanup();
            this.scrollable?.destroy();
            this.lateMiddlewareHelper.destroy();
            this.withoutOverlay || pe.checkAnimations2(false);
            ;
        }, 250));
    }
    ['appendSolid'](_0x27d7f9) {
        const _0x3bdc67 = document.createElement('div');
        (this.scrollable || this.body).prepend(_0x3bdc67);
        const _0x2edeb7 = gi(_0x27d7f9, _0x3bdc67);
        this.addEventListener('closeAfterTimeout', _0x2edeb7);
    }
    ['appendSolidBody'](_0x3d9304) {
        const _0x53ed54 = gi(_0x3d9304, this.body);
        this.addEventListener('closeAfterTimeout', _0x53ed54);
    }
    static ['reAppend']() {
        ;
        this.POPUPS.forEach(_0x1507cd => {
            const {
                    element: _0x2d2f2f,
                    container: _0xb4f685
                } = _0x1507cd, _0x20089f = _0x2d2f2f.parentElement;
            _0x20089f && _0x20089f !== xs && xs !== _0xb4f685 && xs.append(_0x2d2f2f);
        });
    }
    static ['getPopups'](_0x80e9b9) {
        ;
        return this.POPUPS.filter(_0x5e4f5c => _0x5e4f5c instanceof _0x80e9b9);
    }
    static ['createPopup'](_0x1832d3, ..._0x3e3f6e) {
        return new _0x1832d3(..._0x3e3f6e);
    }
};
mt.POPUPS = [];
let Li = mt;
const a0_0x35c73f = {};
a0_0x35c73f.langKey = 'Cancel';
a0_0x35c73f.isCancel = true;
;
const c6 = _0x500c58 => (_0x500c58.find(_0x57a5d7 => _0x57a5d7.isCancel) || _0x500c58.push(a0_0x35c73f), _0x500c58), d6 = 308, l6 = 420, u6 = 0.65, tm = vt(() => {
        const [_0x494770, _0x463c70] = ke(false);
        return rt(() => {
            ;
            document.body.classList.toggle('has-folders-sidebar', _0x494770());
        }), {
            'hasFoldersSidebar': _0x494770,
            'setHasFoldersSidebar': _0x463c70
        };
    });
function h6() {
    return tm;
}
let xi;
const m6 = _0x2d80e9 => {
        const _0x31fc6f = _0x2d80e9.target;
        _0x31fc6f.classList.contains('input-field-input') && xi !== _0x31fc6f && _0x31fc6f.focus();
        xi = _0x31fc6f;
        ;
    }, g6 = _0x3e469b => {
        const _0x2b6690 = _0x3e469b.target;
        _0x2b6690.classList.contains('input-field-input') && xi === _0x2b6690 && _0x2b6690.focus();
    };
export {
    wt as $,
    ne as A,
    ft as B,
    Fe as C,
    bs as D,
    om as E,
    Wa as F,
    Et as G,
    ps as H,
    $m as I,
    Va as J,
    Hs as K,
    Li as L,
    Od as M,
    X as N,
    h6 as O,
    Xs as P,
    m1 as Q,
    cm as R,
    ja as S,
    l6 as T,
    d6 as U,
    u6 as V,
    Ni as W,
    R2 as X,
    Yc as Y,
    K3 as Z,
    ze as _,
    Zi as a,
    zm as a$,
    Re as a0,
    be as a1,
    go as a2,
    ke as a3,
    Uh as a4,
    bi as a5,
    zn as a6,
    M3 as a7,
    ru as a8,
    gi as a9,
    Hh as aA,
    Nh as aB,
    Rm as aC,
    Be as aD,
    jh as aE,
    R3 as aF,
    O0 as aG,
    Kr as aH,
    Mm as aI,
    Wo as aJ,
    rt as aK,
    Qu as aL,
    Is as aM,
    lh as aN,
    xf as aO,
    Ol as aP,
    Xt as aQ,
    ot as aR,
    q as aS,
    Vo as aT,
    V2 as aU,
    Oe as aV,
    Zf as aW,
    Qc as aX,
    pn as aY,
    a3 as aZ,
    tr as a_,
    k3 as aa,
    Sf as ab,
    oc as ac,
    At as ad,
    Ns as ae,
    sf as af,
    ls as ag,
    Y2 as ah,
    le as ai,
    Oc as aj,
    e1 as ak,
    Gi as al,
    Kc as am,
    se as an,
    d2 as ao,
    l2 as ap,
    Sr as aq,
    jc as ar,
    Ke as as,
    N as at,
    Q1 as au,
    B3 as av,
    Tt as aw,
    is as ax,
    I3 as ay,
    Um as az,
    re as b,
    e0 as b$,
    Cm as b0,
    Ao as b1,
    Bi as b2,
    Ql as b3,
    Ch as b4,
    Ac as b5,
    vm as b6,
    gs as b7,
    on as b8,
    Kf as b9,
    Yo as bA,
    ut as bB,
    Ys as bC,
    jn as bD,
    I0 as bE,
    Y0 as bF,
    aa as bG,
    H as bH,
    hm as bI,
    rr as bJ,
    y0 as bK,
    _s as bL,
    ve as bM,
    M0 as bN,
    us as bO,
    pi as bP,
    yt as bQ,
    Vh as bR,
    Ar as bS,
    Sh as bT,
    lm as bU,
    St as bV,
    k0 as bW,
    at as bX,
    Pf as bY,
    c6 as bZ,
    je as b_,
    a2 as ba,
    cr as bb,
    dr as bc,
    he as bd,
    Zt as be,
    vt as bf,
    T3 as bg,
    gu as bh,
    q3 as bi,
    Ul as bj,
    Mc as bk,
    Wm as bl,
    gm as bm,
    um as bn,
    N1 as bo,
    Hm as bp,
    ss as bq,
    D2 as br,
    xe as bs,
    tf as bt,
    wm as bu,
    yh as bv,
    Hn as bw,
    mm as bx,
    wl as by,
    hn as bz,
    Ii as c,
    ui as c$,
    Os as c0,
    Ie as c1,
    Rc as c2,
    pm as c3,
    bo as c4,
    Dt as c5,
    mc as c6,
    f0 as c7,
    $2 as c8,
    Q as c9,
    hr as cA,
    dc as cB,
    uc as cC,
    E2 as cD,
    am as cE,
    $3 as cF,
    su as cG,
    K2 as cH,
    p0 as cI,
    j2 as cJ,
    Jc as cK,
    s6 as cL,
    e6 as cM,
    t6 as cN,
    xd as cO,
    w0 as cP,
    uu as cQ,
    ic as cR,
    yr as cS,
    xt as cT,
    bn as cU,
    pu as cV,
    l0 as cW,
    Gs as cX,
    Nm as cY,
    O3 as cZ,
    zc as c_,
    w2 as ca,
    Vm as cb,
    id as cc,
    Ee as cd,
    ef as ce,
    Go as cf,
    Mi as cg,
    Bc as ch,
    hd as ci,
    hs as cj,
    jl as ck,
    Ye as cl,
    gc as cm,
    x3 as cn,
    t0 as co,
    Kh as cp,
    r0 as cq,
    Rf as cr,
    Fa as cs,
    Lt as ct,
    cu,
    pe as cv,
    $o as cw,
    u1 as cx,
    l1 as cy,
    za as cz,
    g6 as d,
    s3 as d$,
    gn as d0,
    Ah as d1,
    nu as d2,
    Wh as d3,
    lo as d4,
    c2 as d5,
    M1 as d6,
    Bm as d7,
    Xm as d8,
    s0 as d9,
    Km as dA,
    _d as dB,
    O1 as dC,
    Jm as dD,
    m0 as dE,
    Lm as dF,
    Xu as dG,
    va as dH,
    N3 as dI,
    na as dJ,
    Nc as dK,
    n3 as dL,
    Am as dM,
    p3 as dN,
    mr as dO,
    sr as dP,
    ff as dQ,
    Qs as dR,
    F3 as dS,
    Fd as dT,
    Jh as dU,
    d1 as dV,
    qo as dW,
    as as dX,
    Sd as dY,
    Ml as dZ,
    Tf as d_,
    Ad as da,
    rm as db,
    xm as dc,
    we as dd,
    et as de,
    Tn as df,
    Sm as dg,
    V1 as dh,
    Y3 as di,
    e3 as dj,
    km as dk,
    pa as dl,
    _u as dm,
    Ec as dn,
    ms as dp,
    No as dq,
    ym as dr,
    K0 as ds,
    p1 as dt,
    U3 as du,
    d0 as dv,
    i0 as dw,
    i3 as dx,
    u2 as dy,
    tn as dz,
    I as e,
    Sc as e$,
    bm as e0,
    _c as e1,
    vu as e2,
    Hi as e3,
    Uf as e4,
    ci as e5,
    r3 as e6,
    $l as e7,
    ia as e8,
    Ud as e9,
    Ir as eA,
    r6 as eB,
    t3 as eC,
    no as eD,
    fo as eE,
    f6 as eF,
    Uo as eG,
    Xh as eH,
    v1 as eI,
    $f as eJ,
    y1 as eK,
    Hc as eL,
    V3 as eM,
    z3 as eN,
    y2 as eO,
    f3 as eP,
    Ym as eQ,
    tc as eR,
    c0 as eS,
    R0 as eT,
    Nd as eU,
    Dr as eV,
    Ua as eW,
    Im as eX,
    jr as eY,
    wc as eZ,
    Ls as e_,
    b1 as ea,
    o3 as eb,
    ca as ec,
    jm as ed,
    Eu as ee,
    Fm as ef,
    Pi as eg,
    Yh as eh,
    f2 as ei,
    n6 as ej,
    Ho as ek,
    Tm as el,
    Wn as em,
    Zh as en,
    r2 as eo,
    Em as ep,
    To as eq,
    a6 as er,
    Q2 as es,
    td as et,
    i6 as eu,
    im as ev,
    U2 as ew,
    o6 as ex,
    vn as ey,
    o2 as ez,
    Z3 as f,
    Qd as f0,
    Vr as f1,
    Pd as f2,
    Eo as f3,
    zf as f4,
    Ps as f5,
    In as f6,
    kh as f7,
    _3 as f8,
    vh as f9,
    pl as fA,
    ln as fB,
    nm as fC,
    g3 as fD,
    zu as fE,
    y3 as fF,
    m3 as fG,
    S3 as fH,
    Qf as fI,
    ya as fJ,
    Tl as fK,
    b3 as fL,
    w3 as fM,
    Ll as fN,
    Gu as fO,
    C3 as fP,
    E3 as fQ,
    v3 as fR,
    A3 as fS,
    Zu as fT,
    Df as fU,
    D3 as fV,
    h3 as fW,
    Yu as fX,
    Gm as fY,
    qm as fZ,
    ou as fa,
    Me as fb,
    ct as fc,
    T2 as fd,
    W3 as fe,
    Rr as ff,
    Pm as fg,
    Bd as fh,
    ho as fi,
    dd as fj,
    P3 as fk,
    u3 as fl,
    c3 as fm,
    h0 as fn,
    l3 as fo,
    d3 as fp,
    Qm as fq,
    qf as fr,
    Zd as fs,
    rc as ft,
    Ri as fu,
    xl as fv,
    Yi as fw,
    L3 as fx,
    Vf as fy,
    Dm as fz,
    Zm as g,
    j3 as h,
    H3 as i,
    rs as j,
    Cr as k,
    Q3 as l,
    ue as m,
    Ve as n,
    m6 as o,
    _m as p,
    ad as q,
    X3 as r,
    $n as s,
    dm as t,
    G3 as u,
    p2 as v,
    Mt as w,
    os as x,
    J3 as y,
    j as z
};