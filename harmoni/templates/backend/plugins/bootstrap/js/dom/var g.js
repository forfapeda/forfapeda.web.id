var g;
if (!window.__idm_init__ && navigator.platform.startsWith("Win") && "html" == document.documentElement.localName) {
    window.__idm_init__ = !0;
    Array.prototype.includes || (Array.prototype.includes = function(b, a) {
        return 0 <= this.indexOf(b, a)
    }
    );
    Array.prototype.B || (Array.prototype.B = function(b) {
        0 > b && (b += this.length);
        return this[b]
    }
    );
    NodeList.prototype[Symbol.iterator] || (NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    HTMLCollection.prototype[Symbol.iterator] || (HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    "undefined" == typeof browser && (browser = chrome);
    navigator.userAgent.includes("Edge/");
    navigator.userAgent.includes("Firefox/");
    navigator.userAgent.includes("OPR/");
    var u = Array.from
      , D = Array.prototype.includes
      , E = Function.call.bind(Array.prototype.slice)
      , F = Function.apply.bind(Array.prototype.push)
      , H = Function.call.bind(Array.prototype.forEach)
      , I = {
        16: !0,
        17: !0,
        18: !0,
        45: !0,
        46: !0
    }
      , J = D.bind(["video", "audio", "object", "embed"])
      , K = /(?!)/
      , L = / *[$~]([<>&*+=@!#%:?^~])(\d*) */
      , P = window.self === window.top
      , Q = window.origin || document.origin || location.origin
      , R = location.hostname.toLowerCase().split(".").B(-2)
      , S = R ? RegExp("^(?:\\(\\d+\\)\\s+)?(.+?)\\s+[-|@]+\\s*" + R + "$", "i") : K;
    function M() {
        browser.runtime.Da ? this.Z = browser.runtime.Da(window) : P && (this.Z = 0);
        this.da = [];
        this.$ = [];
        this.m = {};
        this.Aa();
        window.__idm_connect__ = this.Aa.bind(this, !0);
        this.b(1, window, "resize", this.zb);
        this.b(1, window, "scroll", this.Ab);
        this.b(1, window, "blur", this.sb);
        this.b(1, window, "keydown", this.Ia, !0);
        this.b(1, window, "keyup", this.Ia, !0);
        this.b(1, window, "mousedown", this.ub, !0);
        this.b(1, window, "mouseup", this.wb, !0);
        this.b(1, window, "mousemove", this.vb, !0);
        this.b(1, window, "click", this.tb, !0);
        this.b(1, document, "beforeload", this.qb, !0);
        this.b(1, document, "DOMContentLoaded", this.Ha);
        "interactive" != document.readyState && "complete" != document.readyState || this.Ha()
    }
    g = M.prototype;
    g.f = 0;
    g.h = 0;
    g.fa = -1;
    g.ga = -1;
    g.Na = 1;
    g.L = 0;
    g.c = "";
    g.ta = "";
    g.A = "";
    g.va = K;
    g.za = K;
    g.P = K;
    g.l = {};
    g.wa = K;
    g.xa = K;
    g.ya = K;
    g.qa = K;
    g.la = ":root:empty";
    g.na = ":root:empty";
    g.N = ":root:empty";
    g.oa = ":root:empty";
    g.ka = ":root:empty";
    g.pa = ":root:empty";
    g.ja = ":root:empty";
    g.M = ":root:empty";
    g.ma = 0;
    g.O = K;
    g.sa = K;
    g.ua = K;
    g.Aa = function(b) {
        this.Ja(-1);
        this.a = b = browser.runtime.connect({
            name: (P ? "top" : "sub") + (b ? ":retry" : "") + ("file:" == location.protocol ? ":file" : "")
        });
        this.b(-1, b, "onMessage", this.yb);
        this.b(-1, b, "onDisconnect", this.xb)
    }
    ;
    g.xb = function() {
        browser.runtime.lastError;
        this.Ja();
        this.a = this.aa = null;
        window.__idm_init__ = !1;
        window.__idm_connect__ = null
    }
    ;
    g.yb = function(b) {
        switch (b.shift()) {
        case 11:
            this.ab.apply(this, b);
            break;
        case 17:
            this.bb.apply(this, b);
            break;
        case 12:
            this.cb.apply(this, b);
            break;
        case 13:
            this.Ua = b.shift();
            break;
        case 14:
            this.gb.apply(this, b);
            break;
        case 15:
            this.hb.apply(this, b);
            break;
        case 16:
            this.ib.apply(this, b);
            break;
        case 18:
            this.fb.apply(this, b)
        }
    }
    ;
    g.Cb = function(b, a) {
        switch (this.I = b) {
        case 1:
            this.Va = this.o = !0;
            this.c = a.shift() || "";
            this.va = RegExp(a.shift() || "(?!)");
            this.P = RegExp(a.shift() || "(?!)");
            this.l = (a.shift() || "").split(/[|:]/).reduce(U, {});
            this.wa = RegExp(a.shift() || "(?!)");
            this.xa = RegExp(a.shift() || "(?!)");
            this.ya = RegExp(a.shift() || "(?!)");
            this.za = RegExp(a.shift() || "(?!)");
            break;
        case 2:
            this.o = !0;
            this.c = a.shift() || "";
            this.A = a.shift() || "";
            this.qa = RegExp(a.shift() || "(?!)");
            this.la = a.shift() || ":root:empty";
            this.na = a.shift() || ":root:empty";
            a.shift();
            this.N = a.shift() || ":root:empty";
            this.oa = a.shift() || ":root:empty";
            this.ka = a.shift() || ":root:empty";
            this.pa = a.shift() || ":root:empty";
            this.ja = a.shift() || ":root:empty";
            this.M = a.shift() || ":root:empty";
            this.ma = a.shift() || 0;
            this.Oa = a.shift();
            this.O = RegExp(a.shift() || "(?!)");
            break;
        case 4:
            this.o = !0;
            this.c = a.shift() || "";
            this.ta = a.shift() || "";
            this.A = a.shift() || "";
            this.sa = RegExp(a.shift() || "(?!)");
            this.Sa = a.shift();
            this.Ma = a.shift();
            this.Qa = a.shift();
            a.shift();
            break;
        case 3:
            this.ua = RegExp(a.shift() || "(?!)");
            break;
        case 5:
            this.o = !0;
            this.c = a.shift() || "";
            this.A = a.shift() || "(?!)";
            this.Ta = a.shift();
            break;
        default:
            this.o = !0,
            this.c = a.shift() || "",
            this.ra = a.shift()
        }
        this.c.includes("^/") && ((b = this.ta) ? b = "https?://" + b.slice(+b.startsWith("^"), -b.endsWith("$") || void 0) : b = Q.replaceAll(".", "\\."),
        this.c = this.c.replaceAll("^/", "^(?:" + b + ")?/"))
    }
    ;
    g.X = function(b) {
        if (this.I && this.J(arguments))
            switch (this.I) {
            case 1:
                this.pb(b);
                break;
            case 2:
                this.lb(b);
                break;
            case 4:
                this.mb(b);
                break;
            case 3:
                this.ob(b);
                break;
            case 5:
                this.nb(b)
            }
    }
    ;
    g.T = function(b) {
        var a = this.a, c;
        for (c of document.getElementsByTagName("script"))
            !c.src && b.test(c.innerText) && a.postMessage([34, null, -1, c.outerHTML]);
        a.postMessage([34, this.u()])
    }
    ;
    g.Bb = function(b) {
        var a = b.data;
        if (Array.isArray(a) && b.origin == Q)
            switch (a[0]) {
            case 1229212977:
                window.postMessage([1229212978, this.aa, this.o, this.Va, this.c, this.A], "/");
                break;
            case 1229212979:
                this.a.postMessage([36, a[1], a[2]]);
                break;
            case 1229212981:
                this.Ya(a[1], a[2])
            }
    }
    ;
    g.U = function() {
        var b = window.devicePixelRatio
          , a = document.width
          , c = document.body.scrollWidth;
        a && c && (b = a == c ? 0 : a / c);
        return b
    }
    ;
    g.s = function(b) {
        var a = b.g;
        a || (a = b.g = this.aa << 13 | this.Na++,
        b.setAttribute("__idm_id__", a),
        this.m[a] = b);
        return a
    }
    ;
    g.D = function(b) {
        b.j && (window.clearTimeout(b.j),
        b.j = null);
        b.v && (b.v.disconnect(),
        b.v = null);
        this.i && this.i.unobserve(b);
        this.H && this.H.unobserve(b);
        delete this.m[b.g]
    }
    ;
    g.R = function(b, a, c, d) {
        if (!b.v) {
            var e = this.s(b);
            e && (a || c) && ((b.v = new MutationObserver(this.K.bind(this))).observe(b, {
                attributes: !0,
                attributeFilter: ["style"]
            }),
            this.i && this.i.observe(b),
            d && this.H && this.H.observe(b),
            d = this.G(b),
            this.a.postMessage([41, e, b.localName, b.src || b.data, a, c, d]))
        }
    }
    ;
    g.$a = function(b, a, c, d, e) {
        var h, k, m, p, l = window.getComputedStyle.bind(window);
        try {
            var f = 0;
            var q = document.activeElement;
            q && J(q.localName) || (q = document.elementFromPoint(this.fa, this.ga)) && !J(q.localName) && (q = null);
            for (var n of document.querySelectorAll("video,audio,object,embed")) {
                var r = n.localName, t, v = "object" == r || "embed" == r;
                if (v) {
                    var z = n.type.toLowerCase();
                    if (z.startsWith("text/") || z.startsWith("image/"))
                        continue;
                    if ("embed" == r && "application/x-shockwave-flash" != z)
                        continue
                }
                if (e && n.V == e && (h = n))
                    break;
                if (t = n.src || n.data)
                    t != b && t != a || (h = n);
                else if (!v)
                    for (var y of n.getElementsByTagName("source"))
                        if ((t = y.src) && (t == b || t == a) && (h = n))
                            break;
                if (h)
                    if ("cover" == l(n).objectFit) {
                        var A = n;
                        h = null
                    } else
                        break;
                if (!(A || q || k)) {
                    if (t) {
                        if ((t == c || t == d) && (k = n))
                            continue;
                        if ("video" == r && t.startsWith("data:audio/"))
                            continue
                    }
                    var w = n.clientWidth
                      , B = n.clientHeight;
                    if (w && B) {
                        var N = n.getBoundingClientRect();
                        if (!(0 >= N.right + window.scrollX || 0 >= N.bottom + window.scrollY))
                            if ("hidden" == l(n).visibility)
                                "video" == r && (p || (p = n));
                            else {
                                v = w * B;
                                if (f < v && 1.35 * w > B && w < 3 * B) {
                                    f = v;
                                    var V = n
                                }
                                m || (m = n)
                            }
                    }
                }
            }
        } catch (W) {}
        (n = h || A || q || k) ? "video" != n.localName && "hidden" == l(n).visibility && (n = null) : n = V || m || p;
        n && ("embed" != n.localName || n.clientWidth || n.clientHeight || (b = n.parentElement,
        "object" == b.localName && (n = b)),
        this.s(n) ? (b = n.v = new MutationObserver(this.K.bind(this)),
        b.observe(n, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        b.observe(n.parentNode, {
            childList: !0
        }),
        this.i && this.i.observe(n)) : n = null);
        return n
    }
    ;
    g.Za = function(b, a, c) {
        var d = null, e, h = browser.runtime.Da, k;
        for (k of document.getElementsByTagName("iframe")) {
            var m = k.Fa;
            null == m && h && (m = k.Fa = h(k));
            if (m == b) {
                d = k;
                break
            } else
                d || !(e = k.src) || e != a && e != c || (d = k)
        }
        return d && this.s(d)
    }
    ;
    g.G = function(b) {
        var a = null;
        try {
            var c = window.getComputedStyle(b)
              , d = b.getBoundingClientRect()
              , e = this.L
              , h = Math.round(d.width)
              , k = Math.round(d.height);
            if ("hidden" == c.visibility || 0 == c.opacity || b.jb)
                return h > 5 * k ? null : !1;
            if (1 == this.I && 0 == b.offsetTop + b.offsetHeight) {
                for (var m = b; m = m.parentElement; ) {
                    var p = window.getComputedStyle(m);
                    if ("block" != p.display)
                        break;
                    if (0 == p.opacity)
                        return !1
                }
                d = b.parentElement.parentElement.getBoundingClientRect();
                e = 0
            }
            var l = Math.round(d.left) + b.clientLeft
              , f = Math.round(d.top) + b.clientTop
              , q = d = 0;
            m = b;
            p = c;
            for (var n, r; e-- && "block" == p.display && (n = m.parentElement) && "div" == n.localName; m = n,
            p = r) {
                r = window.getComputedStyle(n);
                d -= m.offsetLeft;
                q -= m.offsetTop;
                if ("hidden" == r.overflowX) {
                    var t = h - n.offsetWidth - d;
                    0 < d && (h -= d,
                    l += d);
                    0 < t && (h -= t);
                    e = 0
                }
                if ("hidden" == r.overflowY) {
                    var v = k - n.offsetHeight - q;
                    0 < q && (k -= q,
                    f += q);
                    0 < v && (k -= v);
                    e = 0
                }
            }
            switch (b.localName) {
            case "video":
                document.contains(b) && (b.videoWidth || b.V || 1 > b.readyState && 2 == b.networkState) && (a = !1);
                if (15 > h || 10 > k)
                    return a;
                break;
            case "audio":
                if (1 > h && 1 > k)
                    return a;
                var z = !0
            }
            var y = document.documentElement
              , A = y.scrollWidth || y.clientWidth
              , w = y.scrollHeight || y.clientHeight;
            if (l >= A || f >= w || z && !l && !f)
                return a;
            0 == l && f == -w && h == A && k == w && (f = 0);
            a = [l, f, l + h, f + k, this.U()]
        } catch (B) {}
        return a
    }
    ;
    g.u = function() {
        var b = P ? 80 : 90;
        try {
            var a = window.top.document.title
        } catch (c) {}
        a || (a = (a = document.head.querySelector('meta[property="og:title"]')) && a.getAttribute("content"),
        b = 70);
        a && (a = a.replace(/^\(\d+\)/, "").replace(/[ \t\r\n\u25B6]+/g, " "),
        a = new String(a.trim()),
        a.src = b);
        return a
    }
    ;
    g.eb = function() {
        if (!document.elementsFromPoint)
            return 0;
        var b = document.documentElement
          , a = b.clientWidth || b.offsetWidth;
        b = (b.clientHeight || window.innerHeight) / 4;
        var c = document.elementsFromPoint(0, 0), d = 0, e = 0, h = 0, k;
        for (k of c)
            if (k.offsetWidth >= a) {
                var m = window.getComputedStyle(k);
                .95 <= m.opacity && (c = m.zIndex,
                "fixed" == m.position ? (m = k.offsetHeight + k.offsetTop,
                d < m && m < b && (d = m,
                e = c)) : h < c && (h = c))
            }
        e < h && (d = 0);
        return d
    }
    ;
    g.ab = function(b, a, c, d, e, h, k, m) {
        k && O("text/javascript", k);
        this.aa = b;
        if (c) {
            this.Z = c;
            try {
                window.frameElement && (window.frameElement.Fa = c)
            } catch (p) {}
        }
        this.Ea(e);
        d && this.Cb(d, E(arguments, 8));
        m && (this.b(2, window, "message", this.Bb),
        O("text/javascript", m));
        "loading" == document.readyState ? this.ea = !0 : this.X()
    }
    ;
    g.bb = function(b) {
        this.ha && this.f && (this.f = 0,
        this.ia = window.setTimeout(this.ba.bind(this, !1), 3E3));
        this.X(!0);
        b && this.Ea()
    }
    ;
    g.Ea = function(b) {
        if (this.J(arguments)) {
            var a = [21, this.Eb || location.href, document.referrer];
            b && a.push(document.getElementsByTagName("video").length, document.getElementsByTagName("audio").length);
            this.a.postMessage(a)
        }
    }
    ;
    g.gb = function(b) {
        var a = b ? this.J(arguments) : 1;
        if (0 < a || 0 > a && 1 != this.I) {
            a = this.u();
            var c = this.U()
              , d = this.eb();
            this.a.postMessage([24, a, a && a.src, c, d])
        }
    }
    ;
    g.ib = function(b, a, c, d, e) {
        c || (c = this.Za(a, d, e));
        d = (d = c && this.m[c]) && this.G(d);
        this.a.postMessage([22, b, a, c, d])
    }
    ;
    g.fb = function(b, a) {
        var c = document.getElementsByTagName("a"), d;
        for (d of c)
            try {
                if (d.href == a) {
                    var e = d.download || null;
                    var h = d.innerText.trim() || d.title || null;
                    break
                }
            } catch (k) {}
        this.a.postMessage([35, b, e, h])
    }
    ;
    g.hb = function(b, a, c, d, e, h, k) {
        if (this.J(arguments)) {
            var m = [23, b, a, !1], p, l, f;
            if (a)
                a && ((p = this.m[a]) || (m[3] = !0));
            else {
                if (p = this.$a(c, d, e, h, k)) {
                    if (this.ra && (l = x(p, this.ra)))
                        var q = 200;
                    else if (l = p.getAttribute("operadetachedviewtitle"))
                        q = 130;
                    m[2] = a = p.g;
                    m[5] = p.localName;
                    m[6] = p.src || p.data
                }
                !l && (l = this.u()) && (q = l.src,
                (f = S.exec(l)) && (l = f[1]));
                m[7] = l;
                m[8] = q
            }
            p && (l = this.G(p),
            null != l || document.contains(p) ? m[4] = l : (this.D(p),
            m[3] = !0));
            this.a.postMessage(m)
        }
    }
    ;
    g.cb = function(b, a, c, d) {
        var e = d ? RegExp(d, "i") : null;
        d = this.Ca(document, e, a);
        var h = document.getElementsByTagName("iframe"), k;
        for (k of h)
            try {
                var m = k.contentDocument;
                m && !k.src && F(d, this.Ca(m, e, a))
            } catch (p) {}
        b = [27, b, this.Z, d.length];
        c || (b[4] = d,
        b[5] = location.href,
        P && (b[6] = location.href,
        b[7] = document.title));
        this.a.postMessage(b)
    }
    ;
    g.Ca = function(b, a, c) {
        var d = []
          , e = {}
          , h = ""
          , k = ""
          , m = !c;
        if (c) {
            var p = b.getSelection();
            if (!p || p.isCollapsed && !p.toString().trim())
                return d
        }
        for (var l of b.getElementsByTagName("a"))
            if (m || p.containsNode(l, !0))
                try {
                    var f = l.href;
                    f && !e[f] && a.test(f) && (e[f] = d.push([f, 2, l.download || null, l.innerText.trim() || l.title]));
                    c && e[f] && (k += l.innerText,
                    k += "\n")
                } catch (n) {}
        for (l of b.getElementsByTagName("area"))
            if (m || p.containsNode(l, !0))
                try {
                    (f = l.href) && !e[f] && a.test(f) && (e[f] = d.push([f, 2, null, l.alt]))
                } catch (n) {}
        for (l of b.getElementsByTagName("img"))
            if (m || p.containsNode(l, !0))
                try {
                    (f = l.src) && !e[f] && a.test(f) && (e[f] = d.push([f, 3, null, "<<<=IDMTRANSMITIMGPREFIX=>>>" + l.alt])),
                    m && l.onclick && (h += l.onclick,
                    h += "\n")
                } catch (n) {}
        if (c) {
            if (h = p.toString()) {
                c = this.C(k);
                for (f of this.C(h))
                    f && !e[f] && a.test(f) && !c.includes(f) && (e[f] = d.push([f, 1]))
            }
            for (l of b.getElementsByTagName("textarea"))
                if (b = l.selectionStart,
                h = l.selectionEnd,
                (c = p.isCollapsed && b < h) || p.containsNode(l, !0))
                    try {
                        var q = c ? l.value.substring(b, h) : l.value;
                        for (f of this.C(q))
                            f && !e[f] && a.test(f) && (e[f] = d.push([f, 1]))
                    } catch (n) {}
        } else {
            for (l of b.getElementsByTagName("iframe"))
                try {
                    (f = l.src) && !e[f] && a.test(f) && (e[f] = d.push([f, 4]))
                } catch (n) {}
            for (l of b.getElementsByTagName("script"))
                h += l.innerText,
                h += "\n";
            if (h)
                for (f of this.C(h))
                    f && !e[f] && a.test(f) && (e[f] = d.push([f, 5]))
        }
        return d
    }
    ;
    g.C = function(b) {
        if (!this.ca) {
            var a = "\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g, function(d) {
                return this[d]
            }
            .bind({
                "%H": "\\w\\-\u00a0-\ufeff",
                "%T": "\\w\\-.+*()$!,%\u00a0-\ufeff",
                "%Q": "^\\s\\[\\]{}()"
            }));
            this.ca = RegExp(a, "gi")
        }
        for (var c = []; a = this.ca.exec(b); )
            c.push(a.shift());
        return c
    }
    ;
    g.J = function(b) {
        var a = this.f;
        a || (b = u(b && b.callee ? b : arguments),
        b.unshift(arguments.callee.caller),
        this.$.push(b));
        return a
    }
    ;
    g.Ha = function(b) {
        try {
            var a = window.top.document.getElementsByTagName("title")[0]
        } catch (c) {}
        this.f = b && a ? -1 : 1;
        a && (b = this.ha,
        b || (this.ha = b = new MutationObserver(this.ba.bind(this))),
        b.observe(a, {
            childList: !0
        }));
        try {
            this.i = new ResizeObserver(this.K.bind(this))
        } catch (c) {}
        try {
            this.H = new IntersectionObserver(this.K.bind(this),{
                threshold: .2
            })
        } catch (c) {}
        this.ea && (this.ea = !1,
        this.X());
        for (b = this.$; a = b.shift(); )
            a.shift().apply(this, a)
    }
    ;
    g.K = function(b) {
        if (this.a)
            for (var a of b)
                b = a.target,
                b.g && (document.contains(b) ? (null != a.isIntersecting && (b.jb = !a.isIntersecting),
                b.j && window.clearTimeout(b.j),
                b.j = window.setTimeout(this.rb.bind(this, b), 200)) : (this.a.postMessage([23, null, b.g, !0]),
                this.D(b)))
    }
    ;
    g.rb = function(b) {
        if (!this.a)
            return this.D(b);
        b.j = null;
        var a = document.contains(b), c;
        a ? c = this.G(b) : this.D(b);
        this.a.postMessage([23, null, b.g, !a, c])
    }
    ;
    g.ba = function(b) {
        if (b)
            window.clearTimeout(this.ia),
            this.ia = window.setTimeout(this.ba.bind(this, !1), 1E3);
        else {
            0 > this.f ? this.f = 1 : ++this.f;
            for (var a = this.$; b = a.shift(); )
                b.shift().apply(this, b)
        }
    }
    ;
    g.qb = function(b) {
        var a = b.target
          , c = a.localName;
        J(c) && b.url && (a = this.s(a),
        this.a.postMessage([25, a, c, b.url]))
    }
    ;
    g.Ia = function(b) {
        !b.repeat && I[b.keyCode] && this.a.postMessage([31, b.keyCode, "keydown" == b.type])
    }
    ;
    g.ub = function(b) {
        this.Ua && this.a.postMessage([28]);
        if (0 == b.button) {
            var a = b.view.getSelection();
            a && a.isCollapsed && !a.toString().trim() && (this.h = 1);
            this.a.postMessage([32, b.button, !0])
        }
    }
    ;
    g.wb = function(b) {
        if (0 == b.button) {
            this.fa = b.clientX;
            this.ga = b.clientY;
            this.a.postMessage([32, b.button, !1]);
            var a = b.view.getSelection();
            a && this.h && (this.h = a.isCollapsed && !a.toString().trim() ? 0 : 2) && this.a.postMessage([26, b.clientX, b.clientY, this.U()])
        }
    }
    ;
    g.vb = function() {
        2 == this.h && (this.h = 0)
    }
    ;
    g.tb = function(b) {
        b = b.target;
        "a" == b.localName && this.a.postMessage([39, b.hasAttribute("download"), b.href, b.download])
    }
    ;
    g.Ab = function() {
        this.a.postMessage([29])
    }
    ;
    g.zb = function(b) {
        b = b.target;
        this.a.postMessage([30, b.innerWidth, b.innerHeight])
    }
    ;
    g.sb = function() {
        this.h = 0;
        this.a.postMessage([33])
    }
    ;
    g.b = function(b, a, c, d, e) {
        var h = u(arguments);
        h[3] = d.bind(this);
        this.da.push(h);
        0 > b ? (a = a[c],
        a.addListener.apply(a, h.slice(3))) : a.addEventListener.apply(a, h.slice(2))
    }
    ;
    g.Ja = function(b) {
        for (var a = this.da, c = 0; c < a.length; c++) {
            var d = a[c][0];
            if (!b || b == d) {
                var e = a.splice(c--, 1).pop()
                  , h = e.splice(0, 2).pop();
                0 > d ? (h = h[e.shift()],
                h.removeListener.apply(h, e)) : h.removeEventListener.apply(h, e)
            }
        }
    }
    ;
    g.pb = function(b) {
        if (!b) {
            b = this.a;
            var a, c, d, e, h = 0;
            for (m of document.getElementsByTagName("script")) {
                if (m.src) {
                    if (e = this.P.exec(m.src))
                        h |= 1,
                        this.l[e[1]] ? c = e[1] : a = m.src
                } else if (e = this.za.exec(m.innerText))
                    h |= 2,
                    this.l[e[1]] && (d = parseInt(e[1], 10));
                else if (this.va.test(m.innerText)) {
                    h |= 4;
                    var k = m.outerHTML
                }
                if (7 == h)
                    break
            }
            if (d || c) {
                var m = {};
                m[118] = d;
                m[124] = c;
                b.postMessage([37, 1, 2, m])
            }
            b.postMessage([34, this.u(), null, k]);
            a && (k = new XMLHttpRequest,
            k.responseType = "text",
            k.timeout = 1E4,
            k.onreadystatechange = this.Db.bind(this, a, k),
            k.open("GET", a, !0),
            k.send());
            this.L = 2
        }
    }
    ;
    g.Db = function(b, a) {
        if (4 == a.readyState) {
            var c = this.P.exec(b);
            if ((b = (b = this.wa.exec(a.response)) && parseInt(b[1] || b[2], 10)) && (!this.l[b] || !this.l[c[1]])) {
                var d = this.xa.exec(a.response);
                a = this.ya.exec(a.response);
                if (d && a && d[2] == a[1]) {
                    c = c && c[1];
                    var e = {};
                    e[118] = b;
                    e[119] = d[0];
                    e[120] = a[0];
                    e[124] = c;
                    this.a.postMessage([37, 1, 1, e])
                }
            }
        }
    }
    ;
    g.lb = function d(a, c) {
        a ? (c && a.shift().disconnect(),
        this.Y.disconnect(),
        this.La.disconnect(),
        this.Ka.clear(),
        this.F.clear()) : (this.T(this.qa),
        this.Y = new MutationObserver(this.Xa.bind(this)),
        this.La = new MutationObserver(this.Wa.bind(this)),
        this.Ka = new Set,
        this.F = new Set,
        this.L = 3);
        if (c = this.Pa = document.querySelector(this.na)) {
            if (a = this.Y,
            a.observe(c, {
                childList: !0
            }),
            !this.Ba(c, !0) && (c = c.querySelector(this.oa))) {
                var e = C(c, this.N);
                e && a.observe(c, {
                    childList: !0
                });
                a.observe(e || c.parentNode, {
                    childList: !0
                })
            }
        } else
            !a && (c = document.querySelector(this.la)) && (e = new MutationObserver(d.bind(this, a = [])),
            a.push(e),
            e.observe(c, {
                childList: !0
            }))
    }
    ;
    g.Ba = function(a, c) {
        var d = this.Y, e = this.N, h = this.ka, k = this.La, m = this.Ka, p = 0, l;
        for (l of a.querySelectorAll(h))
            m.has(l) || l.querySelector(h) || (m.add(l),
            k.observe(l, {
                childList: !0,
                subtree: !0
            }),
            c && (a = C(l, e)) && (d.observe(a, {
                childList: !0
            }),
            p++),
            H(l.getElementsByTagName("video"), this.S.bind(this)));
        return p
    }
    ;
    g.Xa = function(a) {
        var c = this.Pa, d;
        for (d of a) {
            a = d.target.isSameNode(c);
            for (var e of d.addedNodes)
                1 == e.nodeType && this.Ba(e, a)
        }
    }
    ;
    g.Wa = function(a) {
        var c = this.F, d = this.M, e;
        for (e of a)
            for (var h of e.addedNodes)
                if (1 == h.nodeType)
                    if (a = h.getElementsByTagName("video"),
                    a.length)
                        H(a, this.S.bind(this));
                    else
                        for (var k of c)
                            (a = C(k, d)) && a.contains(h) && this.S(k)
    }
    ;
    g.S = function(a) {
        if (!a.g) {
            var c = this.ja, d = this.ma, e = this.F, h = D.bind(["div", "span", "a"]), k, m, p, l, f = C(a, this.M), q = f && f.querySelector(":scope >" + c);
            for (d = q ? 0 : d; d-- && f && h(f.localName); f = f.parentNode) {
                var n = f;
                if (q = C(f, c + ":scope:first-child:only-of-type"))
                    break;
                if ((m = f.previousSibling) && "div" == m.localName) {
                    k || (k = f.querySelector('div[role="slider"]'));
                    1 == (l = f.querySelectorAll(c)).length ? q = l[0] : (p = f.nextSibling) && 1 == (l = p.querySelectorAll("ul:scope " + c)).length ? q = l[0] : k && 1 < (l = m.querySelectorAll(c)).length && (q = l[l.length - 1]);
                    break
                }
            }
            q ? q = q.href : n && 1 == (l = n.querySelectorAll(this.pa)).length && (q = l[0].href);
            if (q) {
                if (c = this.O.exec(q))
                    q = null,
                    c = c[1];
                e.delete(a);
                a.V = q || c;
                this.R(a, c, q)
            } else
                e.add(a),
                a = this.s(a),
                e = this.Oa,
                a && e && window.postMessage([1229212980, a, e], "/")
        }
    }
    ;
    g.Ya = function(a, c) {
        if (a = this.m[a]) {
            if (null == c) {
                if (1 < document.getElementsByTagName("video").length || !(c = this.O.exec(location.href)))
                    return;
                c = c[1]
            }
            a.V = c;
            this.F.delete(a);
            this.R(a, c)
        }
    }
    ;
    g.mb = function(a) {
        if (!a && (this.T(this.sa),
        this.Ra = new MutationObserver(this.kb.bind(this)),
        this.Ma = '$+ article[role="presentation"]:scope $* :scope >article[role="presentation"] div:first-child:empty',
        a = x(document, this.Sa))) {
            for (var c of a.children)
                this.W(c);
            G(a, '$& div.xxzkxad $& main[role="main"] section >div >div:nth-child(3) >div >div $+ div >article <', this.W.bind(this));
            G(a, '$& span[id^="ssrb_top_nav"] ~ div:last-child >div:not([class]) $+ div[role="dialog"]:not(:only-child) >div', this.W.bind(this))
        }
    }
    ;
    g.W = function(a) {
        var c = this.Ra, d = this.Ma, e;
        for (e of x(a, d, []))
            d = a.getElementsByTagName("video"),
            d.length ? H(d, this.Ga.bind(this)) : c.observe(e, {
                childList: !0
            })
    }
    ;
    g.kb = function(a, c) {
        var d = this.Qa, e;
        for (e of a) {
            var h, k;
            for (k of e.addedNodes)
                1 == k.nodeType && ((h = x(k, d)) && c.observe(h, {
                    childList: !0
                }),
                H(k.getElementsByTagName("video"), this.Ga.bind(this)))
        }
    }
    ;
    g.Ga = function(a) {
        var c = a.getAttribute("poster");
        c && this.R(a, null, c, !0)
    }
    ;
    g.ob = function(a) {
        a || this.T(this.ua)
    }
    ;
    g.nb = function(a) {
        if (!a) {
            var c = x(document, this.Ta);
            c && (a = this.u(),
            c = c.outerHTML,
            this.a.postMessage([34, a, null, c.slice(0, c.indexOf(">") + 1)]))
        }
    }
    ;
    function O(a, c) {
        var d = a.startsWith("image/") ? "img" : "script";
        d = document.createElement(d);
        d.src = "data:" + a + ";base64," + c;
        d.onload = d.remove.bind(d);
        document.documentElement.appendChild(d)
    }
    function x(a, c, d) {
        function e(q, n, r) {
            for (; r && n--; )
                r = r.parentElement;
            r && (isNaN(q) || this.push(q),
            this.push(r))
        }
        if (!c)
            return d;
        var h, k, m = !0, p = d || [], l = c.split(L);
        1 == l.length ? (l[0].startsWith("<") && l.unshift(l.shift().slice(1) + "<"),
        l.unshift(">", NaN)) : l.shift();
        for (; a && (h = l.shift()); ) {
            c = parseInt(l.shift(), 10);
            var f = l.shift().trim();
            for (k = 1; "<" == f[f.length - k]; k++)
                ;
            --k && (f = f.slice(0, -k).trim());
            switch (h) {
            case "<":
                for (a = a.closest(f); a && k--; )
                    a = a.parentElement;
                break;
            case ">":
                for (a = a.querySelector(f); a && k--; )
                    a = a.parentElement;
                break;
            case "&":
                a = a.querySelector(f);
                e.call(p, c, k, a);
                m = !1;
                break;
            case "*":
                a.querySelectorAll(f).forEach(e.bind(p, c, k));
                m = !1;
                break;
            case "+":
                f = f.endsWith(":scope") ? a.closest(f) : a.querySelector(f);
                e.call(p, c, k, f);
                m = !1;
                break;
            case "=":
                if (f = a.getAttribute(f))
                    return f;
                m = !1;
                break;
            case "@":
                if (f = a.textContent.trim())
                    return f;
                m = !1
            }
        }
        return p.length ? p : m && a || d
    }
    function G(a, c, d, e, h, k) {
        if (null == e) {
            e = x(a, c, []);
            k = new MutationObserver(G.bind(null, a, c, d, e));
            k.observe(a, {
                childList: !0
            });
            for (var m of e)
                k.observe(m, {
                    childList: !0
                });
            e.length && d(e.B(-1))
        } else
            for (var p of h) {
                for (m of p.addedNodes)
                    if (1 == m.nodeType)
                        if (h = x(a, c, []).slice(e.length),
                        h.length) {
                            F(e, h);
                            for (var l of h)
                                k.observe(l, {
                                    childList: !0
                                });
                            for (var f of h.pop().children)
                                d(f)
                        } else
                            p.target.isSameNode(e.B(-1)) && d(m);
                for (m of p.removedNodes)
                    h = e.indexOf(m),
                    0 < h && e.splice(h)
            }
    }
    function C(a, c) {
        var d;
        for (d = 0; "<" == c[d]; d++)
            ;
        d && (c = c.slice(d));
        for (a = a.closest(c); a && d--; a = a.parentElement)
            ;
        return a
    }
    function U(a, c) {
        c && (a[c] = !0);
        return a
    }
    var T = Object.isExtensible;
    try {
        T(null)
    } catch (a) {
        T = function(c) {
            return c instanceof Object
        }
    }
    String.prototype.replaceAll || (String.prototype.replaceAll = function(a, c) {
        return this.split(a).join(c)
    }
    );
    new M
}
!0;
