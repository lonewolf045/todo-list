/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    const r = (e = "Home") => {
      document.querySelector("#projHeading").textContent = e;
    };
    var a = (e) => {
      (() => {
        const t = document.createElement("header"),
          n = document.createElement("div"),
          r = document.createElement("h1");
        (t.id = "headingContainer"),
          (n.id = "homeMenu"),
          (r.id = "heading"),
          (n.innerHTML = "&#9776;"),
          (r.textContent = "To Do List"),
          t.appendChild(n),
          t.appendChild(r),
          e.appendChild(t);
      })(),
        (() => {
          const t = document.createElement("div");
          (t.id = "sideMenu"),
            e.appendChild(t),
            (t.innerHTML =
              "<div  class = 'sideOptions' id = 'addProj'><span style = 'font-size: 30px'>&#43;</span> &nbsp; &nbsp;   Add New Project</div>\n                                <div  class = 'sideOptions' id = 'projContainer'></div>\n                                <div id = 'close' class = 'sideOptions closeBtn' >&times;</div>");
        })(),
        (() => {
          const t = document.createElement("div");
          (t.id = "projFormConatiner"), t.classList.add("form-popup");
          const n = document.createElement("form");
          (n.name = "projForm"),
            n.classList.add("projAddForm"),
            n.classList.add("formPage"),
            (n.action = "/action_page.php"),
            (n.innerHTML =
              '<h1>Add Project</h1>\n  \n                                <label for="projectName"><b>Project Name:</b></label>\n                                <input type="text" name="projectName">\n\n                                <button type="button" class="btnLogin" id = "btnSubmit">Submit</button>\n                                <div class="closeBtn" id = \'closeProjForm\'>&times;</div>'),
            t.appendChild(n),
            e.appendChild(t);
        })(),
        (() => {
          const t = document.createElement("button");
          t.classList.add("btn"),
            t.classList.add("btn-default"),
            (t.innerHTML = "&#43;"),
            (t.id = "addToDo"),
            e.appendChild(t);
        })(),
        (() => {
          const t = document.createElement("div");
          (t.id = "todoFormConatiner"), t.classList.add("form-popup");
          const n = document.createElement("form");
          (n.name = "todoForm"),
            n.classList.add("todoAddForm"),
            n.classList.add("formPage"),
            (n.action = "/action_page.php"),
            (n.innerHTML =
              '<h1>Add Todo</h1>\n  \n                                <label for="title">Title:</label>\n                                <input type="text" name="title">\n\n                                <label for="description">Description:</label>\n                                <textarea id="description" name="description" rows="4" cols="50"></textarea>\n\n                                <label for="dueDate">Due Date:</label>\n                                <input type="date" name="dueDate">\n\n                                <label for="priority">Priority:</label>\n                                <select name="priority" id="priority">\n                                    <option value="Low">Low</option>\n                                    <option value="Medium">Medium</option>\n                                    <option value="High">High</option>\n                                </select>\n                                \n                                <button type="button" class="btnLogin btn" id = "btnSubmitTodo">Submit</button>\n                                <div class="closeBtn" id = \'closeTodoForm\'>&times;</div>'),
            t.appendChild(n),
            e.appendChild(t);
        })(),
        (() => {
          const e = document.querySelector("#main-div"),
            t = document.createElement("h2");
          (t.id = "projHeading"), e.appendChild(t);
        })(),
        r(),
        (() => {
          const e = document.querySelector("#main-div"),
            t = document.createElement("div");
          (t.id = "todoContainer"), e.appendChild(t);
        })();
    };
    function o(e, t) {
      if (t.length < e)
        throw new TypeError(
          e +
            " argument" +
            (e > 1 ? "s" : "") +
            " required, but only " +
            t.length +
            " present"
        );
    }
    function i(e) {
      o(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date ||
        ("object" == typeof e && "[object Date]" === t)
        ? new Date(e.getTime())
        : "number" == typeof e || "[object Number]" === t
        ? new Date(e)
        : (("string" != typeof e && "[object String]" !== t) ||
            "undefined" == typeof console ||
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    function d(e) {
      o(1, arguments);
      var t = i(e);
      return !isNaN(t);
    }
    var c = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
    function s(e) {
      return function (t) {
        var n = t || {},
          r = n.width ? String(n.width) : e.defaultWidth;
        return e.formats[r] || e.formats[e.defaultWidth];
      };
    }
    var u = {
        date: s({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: s({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: s({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      },
      l = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
    function m(e) {
      return function (t, n) {
        var r,
          a = n || {};
        if (
          "formatting" === (a.context ? String(a.context) : "standalone") &&
          e.formattingValues
        ) {
          var o = e.defaultFormattingWidth || e.defaultWidth,
            i = a.width ? String(a.width) : o;
          r = e.formattingValues[i] || e.formattingValues[o];
        } else {
          var d = e.defaultWidth,
            c = a.width ? String(a.width) : e.defaultWidth;
          r = e.values[c] || e.values[d];
        }
        return r[e.argumentCallback ? e.argumentCallback(t) : t];
      };
    }
    function h(e) {
      return function (t, n) {
        var r = String(t),
          a = n || {},
          o = a.width,
          i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
          d = r.match(i);
        if (!d) return null;
        var c,
          s = d[0],
          u = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth];
        return (
          (c =
            "[object Array]" === Object.prototype.toString.call(u)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
                })(u, function (e) {
                  return e.test(s);
                })
              : (function (e, t) {
                  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
                })(u, function (e) {
                  return e.test(s);
                })),
          (c = e.valueCallback ? e.valueCallback(c) : c),
          {
            value: (c = a.valueCallback ? a.valueCallback(c) : c),
            rest: r.slice(s.length),
          }
        );
      };
    }
    var f,
      g = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          var r;
          return (
            (n = n || {}),
            (r =
              "string" == typeof c[e]
                ? c[e]
                : 1 === t
                ? c[e].one
                : c[e].other.replace("{{count}}", t)),
            n.addSuffix ? (n.comparison > 0 ? "in " + r : r + " ago") : r
          );
        },
        formatLong: u,
        formatRelative: function (e, t, n, r) {
          return l[e];
        },
        localize: {
          ordinalNumber: function (e, t) {
            var n = Number(e),
              r = n % 100;
            if (r > 20 || r < 10)
              switch (r % 10) {
                case 1:
                  return n + "st";
                case 2:
                  return n + "nd";
                case 3:
                  return n + "rd";
              }
            return n + "th";
          },
          era: m({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: m({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return Number(e) - 1;
            },
          }),
          month: m({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: m({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: m({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber:
            ((f = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e, t) {
              var n = String(e),
                r = t || {},
                a = n.match(f.matchPattern);
              if (!a) return null;
              var o = a[0],
                i = n.match(f.parsePattern);
              if (!i) return null;
              var d = f.valueCallback ? f.valueCallback(i[0]) : i[0];
              return {
                value: (d = r.valueCallback ? r.valueCallback(d) : d),
                rest: n.slice(o.length),
              };
            }),
          era: h({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: h({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: h({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: h({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: h({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
    function p(e) {
      if (null === e || !0 === e || !1 === e) return NaN;
      var t = Number(e);
      return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
    }
    function w(e, t) {
      o(2, arguments);
      var n = i(e).getTime(),
        r = p(t);
      return new Date(n + r);
    }
    function y(e, t) {
      o(2, arguments);
      var n = p(t);
      return w(e, -n);
    }
    function v(e, t) {
      for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
        r = "0" + r;
      return n + r;
    }
    var b = {
      y: function (e, t) {
        var n = e.getUTCFullYear(),
          r = n > 0 ? n : 1 - n;
        return v("yy" === t ? r % 100 : r, t.length);
      },
      M: function (e, t) {
        var n = e.getUTCMonth();
        return "M" === t ? String(n + 1) : v(n + 1, 2);
      },
      d: function (e, t) {
        return v(e.getUTCDate(), t.length);
      },
      a: function (e, t) {
        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
          case "a":
          case "aa":
          case "aaa":
            return n.toUpperCase();
          case "aaaaa":
            return n[0];
          case "aaaa":
          default:
            return "am" === n ? "a.m." : "p.m.";
        }
      },
      h: function (e, t) {
        return v(e.getUTCHours() % 12 || 12, t.length);
      },
      H: function (e, t) {
        return v(e.getUTCHours(), t.length);
      },
      m: function (e, t) {
        return v(e.getUTCMinutes(), t.length);
      },
      s: function (e, t) {
        return v(e.getUTCSeconds(), t.length);
      },
      S: function (e, t) {
        var n = t.length,
          r = e.getUTCMilliseconds();
        return v(Math.floor(r * Math.pow(10, n - 3)), t.length);
      },
    };
    function T(e) {
      o(1, arguments);
      var t = 1,
        n = i(e),
        r = n.getUTCDay(),
        a = (r < t ? 7 : 0) + r - t;
      return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
    }
    function C(e) {
      o(1, arguments);
      var t = i(e),
        n = t.getUTCFullYear(),
        r = new Date(0);
      r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
      var a = T(r),
        d = new Date(0);
      d.setUTCFullYear(n, 0, 4), d.setUTCHours(0, 0, 0, 0);
      var c = T(d);
      return t.getTime() >= a.getTime()
        ? n + 1
        : t.getTime() >= c.getTime()
        ? n
        : n - 1;
    }
    function S(e) {
      o(1, arguments);
      var t = C(e),
        n = new Date(0);
      n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
      var r = T(n);
      return r;
    }
    function M(e, t) {
      o(1, arguments);
      var n = t || {},
        r = n.locale,
        a = r && r.options && r.options.weekStartsOn,
        d = null == a ? 0 : p(a),
        c = null == n.weekStartsOn ? d : p(n.weekStartsOn);
      if (!(c >= 0 && c <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var s = i(e),
        u = s.getUTCDay(),
        l = (u < c ? 7 : 0) + u - c;
      return s.setUTCDate(s.getUTCDate() - l), s.setUTCHours(0, 0, 0, 0), s;
    }
    function x(e, t) {
      o(1, arguments);
      var n = i(e, t),
        r = n.getUTCFullYear(),
        a = t || {},
        d = a.locale,
        c = d && d.options && d.options.firstWeekContainsDate,
        s = null == c ? 1 : p(c),
        u = null == a.firstWeekContainsDate ? s : p(a.firstWeekContainsDate);
      if (!(u >= 1 && u <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var l = new Date(0);
      l.setUTCFullYear(r + 1, 0, u), l.setUTCHours(0, 0, 0, 0);
      var m = M(l, t),
        h = new Date(0);
      h.setUTCFullYear(r, 0, u), h.setUTCHours(0, 0, 0, 0);
      var f = M(h, t);
      return n.getTime() >= m.getTime()
        ? r + 1
        : n.getTime() >= f.getTime()
        ? r
        : r - 1;
    }
    function k(e, t) {
      o(1, arguments);
      var n = t || {},
        r = n.locale,
        a = r && r.options && r.options.firstWeekContainsDate,
        i = null == a ? 1 : p(a),
        d = null == n.firstWeekContainsDate ? i : p(n.firstWeekContainsDate),
        c = x(e, t),
        s = new Date(0);
      s.setUTCFullYear(c, 0, d), s.setUTCHours(0, 0, 0, 0);
      var u = M(s, t);
      return u;
    }
    var D = "midnight",
      P = "noon",
      j = "morning",
      E = "afternoon",
      L = "evening",
      q = "night";
    function N(e, t) {
      var n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = Math.floor(r / 60),
        o = r % 60;
      if (0 === o) return n + String(a);
      var i = t || "";
      return n + String(a) + i + v(o, 2);
    }
    function U(e, t) {
      return e % 60 == 0
        ? (e > 0 ? "-" : "+") + v(Math.abs(e) / 60, 2)
        : O(e, t);
    }
    function O(e, t) {
      var n = t || "",
        r = e > 0 ? "-" : "+",
        a = Math.abs(e);
      return r + v(Math.floor(a / 60), 2) + n + v(a % 60, 2);
    }
    var H = {
      G: function (e, t, n) {
        var r = e.getUTCFullYear() > 0 ? 1 : 0;
        switch (t) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(r, { width: "abbreviated" });
          case "GGGGG":
            return n.era(r, { width: "narrow" });
          case "GGGG":
          default:
            return n.era(r, { width: "wide" });
        }
      },
      y: function (e, t, n) {
        if ("yo" === t) {
          var r = e.getUTCFullYear(),
            a = r > 0 ? r : 1 - r;
          return n.ordinalNumber(a, { unit: "year" });
        }
        return b.y(e, t);
      },
      Y: function (e, t, n, r) {
        var a = x(e, r),
          o = a > 0 ? a : 1 - a;
        return "YY" === t
          ? v(o % 100, 2)
          : "Yo" === t
          ? n.ordinalNumber(o, { unit: "year" })
          : v(o, t.length);
      },
      R: function (e, t) {
        return v(C(e), t.length);
      },
      u: function (e, t) {
        return v(e.getUTCFullYear(), t.length);
      },
      Q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
          case "Q":
            return String(r);
          case "QQ":
            return v(r, 2);
          case "Qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "QQQ":
            return n.quarter(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return n.quarter(r, { width: "narrow", context: "formatting" });
          case "QQQQ":
          default:
            return n.quarter(r, { width: "wide", context: "formatting" });
        }
      },
      q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
          case "q":
            return String(r);
          case "qq":
            return v(r, 2);
          case "qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "qqq":
            return n.quarter(r, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return n.quarter(r, { width: "narrow", context: "standalone" });
          case "qqqq":
          default:
            return n.quarter(r, { width: "wide", context: "standalone" });
        }
      },
      M: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
          case "M":
          case "MM":
            return b.M(e, t);
          case "Mo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "MMM":
            return n.month(r, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return n.month(r, { width: "narrow", context: "formatting" });
          case "MMMM":
          default:
            return n.month(r, { width: "wide", context: "formatting" });
        }
      },
      L: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
          case "L":
            return String(r + 1);
          case "LL":
            return v(r + 1, 2);
          case "Lo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "LLL":
            return n.month(r, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return n.month(r, { width: "narrow", context: "standalone" });
          case "LLLL":
          default:
            return n.month(r, { width: "wide", context: "standalone" });
        }
      },
      w: function (e, t, n, r) {
        var a = (function (e, t) {
          o(1, arguments);
          var n = i(e),
            r = M(n, t).getTime() - k(n, t).getTime();
          return Math.round(r / 6048e5) + 1;
        })(e, r);
        return "wo" === t
          ? n.ordinalNumber(a, { unit: "week" })
          : v(a, t.length);
      },
      I: function (e, t, n) {
        var r = (function (e) {
          o(1, arguments);
          var t = i(e),
            n = T(t).getTime() - S(t).getTime();
          return Math.round(n / 6048e5) + 1;
        })(e);
        return "Io" === t
          ? n.ordinalNumber(r, { unit: "week" })
          : v(r, t.length);
      },
      d: function (e, t, n) {
        return "do" === t
          ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
          : b.d(e, t);
      },
      D: function (e, t, n) {
        var r = (function (e) {
          o(1, arguments);
          var t = i(e),
            n = t.getTime();
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          var r = t.getTime(),
            a = n - r;
          return Math.floor(a / 864e5) + 1;
        })(e);
        return "Do" === t
          ? n.ordinalNumber(r, { unit: "dayOfYear" })
          : v(r, t.length);
      },
      E: function (e, t, n) {
        var r = e.getUTCDay();
        switch (t) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return n.day(r, { width: "short", context: "formatting" });
          case "EEEE":
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      e: function (e, t, n, r) {
        var a = e.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
          case "e":
            return String(o);
          case "ee":
            return v(o, 2);
          case "eo":
            return n.ordinalNumber(o, { unit: "day" });
          case "eee":
            return n.day(a, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return n.day(a, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return n.day(a, { width: "short", context: "formatting" });
          case "eeee":
          default:
            return n.day(a, { width: "wide", context: "formatting" });
        }
      },
      c: function (e, t, n, r) {
        var a = e.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
          case "c":
            return String(o);
          case "cc":
            return v(o, t.length);
          case "co":
            return n.ordinalNumber(o, { unit: "day" });
          case "ccc":
            return n.day(a, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return n.day(a, { width: "narrow", context: "standalone" });
          case "cccccc":
            return n.day(a, { width: "short", context: "standalone" });
          case "cccc":
          default:
            return n.day(a, { width: "wide", context: "standalone" });
        }
      },
      i: function (e, t, n) {
        var r = e.getUTCDay(),
          a = 0 === r ? 7 : r;
        switch (t) {
          case "i":
            return String(a);
          case "ii":
            return v(a, t.length);
          case "io":
            return n.ordinalNumber(a, { unit: "day" });
          case "iii":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return n.day(r, { width: "short", context: "formatting" });
          case "iiii":
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      a: function (e, t, n) {
        var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
          case "a":
          case "aa":
          case "aaa":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaaaa":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "aaaa":
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      b: function (e, t, n) {
        var r,
          a = e.getUTCHours();
        switch (
          ((r = 12 === a ? P : 0 === a ? D : a / 12 >= 1 ? "pm" : "am"), t)
        ) {
          case "b":
          case "bb":
          case "bbb":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbbbb":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "bbbb":
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      B: function (e, t, n) {
        var r,
          a = e.getUTCHours();
        switch (((r = a >= 17 ? L : a >= 12 ? E : a >= 4 ? j : q), t)) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "BBBB":
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      h: function (e, t, n) {
        if ("ho" === t) {
          var r = e.getUTCHours() % 12;
          return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
        }
        return b.h(e, t);
      },
      H: function (e, t, n) {
        return "Ho" === t
          ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
          : b.H(e, t);
      },
      K: function (e, t, n) {
        var r = e.getUTCHours() % 12;
        return "Ko" === t
          ? n.ordinalNumber(r, { unit: "hour" })
          : v(r, t.length);
      },
      k: function (e, t, n) {
        var r = e.getUTCHours();
        return (
          0 === r && (r = 24),
          "ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : v(r, t.length)
        );
      },
      m: function (e, t, n) {
        return "mo" === t
          ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
          : b.m(e, t);
      },
      s: function (e, t, n) {
        return "so" === t
          ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
          : b.s(e, t);
      },
      S: function (e, t) {
        return b.S(e, t);
      },
      X: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        if (0 === a) return "Z";
        switch (t) {
          case "X":
            return U(a);
          case "XXXX":
          case "XX":
            return O(a);
          case "XXXXX":
          case "XXX":
          default:
            return O(a, ":");
        }
      },
      x: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "x":
            return U(a);
          case "xxxx":
          case "xx":
            return O(a);
          case "xxxxx":
          case "xxx":
          default:
            return O(a, ":");
        }
      },
      O: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + N(a, ":");
          case "OOOO":
          default:
            return "GMT" + O(a, ":");
        }
      },
      z: function (e, t, n, r) {
        var a = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + N(a, ":");
          case "zzzz":
          default:
            return "GMT" + O(a, ":");
        }
      },
      t: function (e, t, n, r) {
        var a = r._originalDate || e;
        return v(Math.floor(a.getTime() / 1e3), t.length);
      },
      T: function (e, t, n, r) {
        return v((r._originalDate || e).getTime(), t.length);
      },
    };
    function W(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        case "PPPP":
        default:
          return t.date({ width: "full" });
      }
    }
    function F(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        case "pppp":
        default:
          return t.time({ width: "full" });
      }
    }
    var Y = {
      p: F,
      P: function (e, t) {
        var n,
          r = e.match(/(P+)(p+)?/),
          a = r[1],
          o = r[2];
        if (!o) return W(e, t);
        switch (a) {
          case "P":
            n = t.dateTime({ width: "short" });
            break;
          case "PP":
            n = t.dateTime({ width: "medium" });
            break;
          case "PPP":
            n = t.dateTime({ width: "long" });
            break;
          case "PPPP":
          default:
            n = t.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", W(a, t)).replace("{{time}}", F(o, t));
      },
    };
    function z(e) {
      return e.getTime() % 6e4;
    }
    function A(e) {
      var t = new Date(e.getTime()),
        n = Math.ceil(t.getTimezoneOffset());
      return t.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + z(t)) % 6e4 : z(t));
    }
    var X = ["D", "DD"],
      B = ["YY", "YYYY"];
    function Q(e) {
      return -1 !== X.indexOf(e);
    }
    function G(e) {
      return -1 !== B.indexOf(e);
    }
    function J(e) {
      if ("YYYY" === e)
        throw new RangeError(
          "Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr"
        );
      if ("YY" === e)
        throw new RangeError(
          "Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr"
        );
      if ("D" === e)
        throw new RangeError(
          "Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr"
        );
      if ("DD" === e)
        throw new RangeError(
          "Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr"
        );
    }
    var _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      R = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      I = /^'([^]*?)'?$/,
      $ = /''/g,
      V = /[a-zA-Z]/;
    function K(e) {
      return e.match(I)[1].replace($, "'");
    }
    let Z = [],
      ee = [],
      te = [];
    const ne = () => {
        let e = JSON.stringify(ee),
          t = JSON.stringify(Z),
          n = JSON.stringify(te);
        localStorage.setItem("todos", e),
          localStorage.setItem("projects", t),
          localStorage.setItem("completeTodos", n);
      },
      re = (e) => {
        const t = ee.indexOf(e);
        se(e);
        let n = ee.splice(t, 1);
        return ne(), n;
      },
      ae = (e, t) => {
        const n = document.createElement("div"),
          r = document.createElement("div"),
          a = document.createElement("div");
        n.classList.add("todoContainer"),
          r.classList.add("todoMainContainer"),
          r.classList.add(e.priority),
          (n.todoStorage = e),
          (r.innerHTML = `<h3 class = 'titleTodo'>${e.title}</h3>\n                                \x3c!--<div>${e.description}</div>--\x3e\n                                <div class = 'dueDateTodo'>${e.dueDate}</div>\n                                \x3c!-- <div class = '${e.priority} priorityTodo'>${e.priority}</div>--\x3e`),
          e.project !== window.projectName &&
            ((r.innerHTML += `<div class = 'projectTodo'>${e.project}</div>`),
            r.classList.add("todoMainContainerModified")),
          (r.innerHTML +=
            "<button class = 'descriptionTodo glyphicon glyphicon-info-sign' title = 'Description'>\x3c!--<span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\">--\x3e</button>\n                                    <button class = 'deleteTodo glyphicon glyphicon-remove' title = 'Delete' >\x3c!--<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">--\x3e</button>\n                                    <button class = 'doneTodo glyphicon glyphicon-ok' title = 'Completed' >\x3c!--<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\">--\x3e</button>"),
          (a.innerHTML = "" + e.description),
          a.classList.add("todoSecondaryContainer"),
          n.appendChild(r),
          n.appendChild(a),
          t.appendChild(n);
      },
      oe = (e) => {
        if ("Home" === e.target.textContent) {
          const e = document.querySelector("#todoContainer");
          (e.innerHTML = ""),
            ee.forEach((t) => {
              ae(t, e);
            });
        } else {
          const t = document.querySelector("#todoContainer");
          (t.innerHTML = ""),
            ee.forEach((n) => {
              n.project === e.target.textContent && ae(n, t);
            });
        }
        (() => {
          const e = document.querySelector("#todoContainer");
          e.querySelectorAll(".deleteTodo").forEach((e) =>
            e.addEventListener("click", () => {
              re(e.parentNode.parentNode.todoStorage),
                e.parentNode.parentNode.remove();
            })
          );
          e.querySelectorAll(".doneTodo").forEach((e) =>
            e.addEventListener("click", () => {
              let t = re(e.parentNode.parentNode.todoStorage);
              e.parentNode.parentNode.remove(), te.push(t);
            })
          );
          e.querySelectorAll(".descriptionTodo").forEach((e) =>
            e.addEventListener("click", (e) => {
              let t = e.target.parentNode;
              !1 === t.classList.contains("change")
                ? t.classList.add("change")
                : t.classList.remove("change"),
                !1 === t.nextElementSibling.classList.contains("show")
                  ? t.nextElementSibling.classList.add("show")
                  : t.nextElementSibling.classList.remove("show");
            })
          );
        })();
      },
      ie = (e) => {
        const t = document.querySelector("#projContainer"),
          n = document.createElement("div"),
          a = document.createElement("div"),
          o = document.createElement("button");
        (a.id = e.name.split(" ").join("")),
          n.classList.add("project"),
          a.classList.add("projectName"),
          (a.textContent = e.name),
          (o.innerHTML = "&times;"),
          a.addEventListener("click", (t) => {
            (window.this = e.name.split(" ").join("")),
              (window.projectName = e.name),
              r(window.projectName),
              oe(t);
          }),
          (o.projectName = e.name),
          o.classList.add("deleteProject"),
          o.addEventListener("click", (e) => {
            ((e) => {
              let t = ee.filter((t) => t.project !== e);
              ee.splice(0, ee.length, ...t);
            })(e.target.projectName),
              ue(e.target.projectName),
              ne(),
              e.target.parentNode.remove(),
              window.projectName === e.target.projectName
                ? document.querySelector("#Home").click()
                : document.querySelector("#" + window.this).click();
          }),
          n.appendChild(a),
          "Home" !== e.name && n.appendChild(o),
          t.appendChild(n),
          a.click();
      },
      de = (e, t = []) => {
        let n = ((e, t = []) => ({ name: e, todos: t }))(e, t);
        return Z.push(n), ne(), ie(n), n;
      },
      ce = (e) => {
        Z.forEach((t) => {
          t.name == e.project && t.todos.push(e);
        });
      },
      se = (e) => {
        let t,
          n = 0;
        for (let t = 0; t < Z.length; t++) Z[t].name == e.project && (n = t);
        for (let r = 0; r < Z[n].todos.length; r++)
          if (JSON.stringify(Z[n].todos[r]) === JSON.stringify(e)) {
            t = r;
            break;
          }
        Z[n].todos.splice(t, 1);
      },
      ue = (e) => {
        let t = Z.filter((t) => t.name !== e);
        Z.splice(0, Z.length, ...t);
      };
    var le = () => {
      const e = document.querySelector("#main-div");
      a(e),
        console.log(Z),
        (0 != Z.length && null != Z) || ((window.this = "Home"), de("Home"));
      const t = document.querySelector("#homeMenu"),
        n = document.querySelector("#sideMenu");
      t.addEventListener("click", () => {
        (n.style.width = "280px"),
          (document.querySelector("#todoContainer").style.left = "280px");
      });
      document.querySelector("#close").addEventListener("click", () => {
        (n.style.width = "0px"),
          (document.querySelector("#todoContainer").style.left = "0px");
      });
      document.querySelector("#addProj").addEventListener("click", () => {
        document.querySelector("#projFormConatiner").style.display = "block";
      });
      document.querySelector("#closeProjForm").addEventListener("click", () => {
        document.querySelector("#projFormConatiner").style.display = "none";
      });
      document.querySelector("#addToDo").addEventListener("click", () => {
        (document.querySelector("#todoFormConatiner").style.display = "block"),
          document.querySelector("#addToDo").classList.add("addTodoActive");
      });
      document.querySelector("#closeTodoForm").addEventListener("click", () => {
        (document.querySelector("#todoFormConatiner").style.display = "none"),
          document.querySelector("#addToDo").classList.remove("addTodoActive");
      });
    };
    (() => {
      if (
        (void 0 === localStorage.projects && ne(),
        void 0 !== localStorage.todos || localStorage.todos !== [])
      ) {
        let e = localStorage.getItem("todos");
        ee = JSON.parse(e);
      } else ee = [];
      if (void 0 !== localStorage.completedTodos) {
        let e = localStorage.getItem("completedTodos");
        te = JSON.parse(e);
      } else te = [];
      if (void 0 !== localStorage.projects || localStorage.projects !== []) {
        let e = localStorage.getItem("projects");
        Z = JSON.parse(e);
      } else Z = [];
    })(),
      le(),
      document.querySelector("#btnSubmit").addEventListener("click", () => {
        let e = document.forms.projForm.projectName,
          t = de(e.value);
        document.forms.projForm.reset(),
          document.querySelector("#closeProjForm").click(),
          document.querySelector("#" + t.name.split(" ").join("")).click();
      }),
      document.querySelector("#btnSubmitTodo").addEventListener("click", () => {
        let e = document.forms.todoForm.title,
          t = document.forms.todoForm.description,
          n = document.forms.todoForm.dueDate,
          r = document.forms.todoForm.priority;
        (e = e.value),
          (t = t.value),
          (n = n.value.split("-")),
          (n = (function (e, t, n) {
            o(2, arguments);
            var r = String(t),
              a = n || {},
              c = a.locale || g,
              s = c.options && c.options.firstWeekContainsDate,
              u = null == s ? 1 : p(s),
              l =
                null == a.firstWeekContainsDate
                  ? u
                  : p(a.firstWeekContainsDate);
            if (!(l >= 1 && l <= 7))
              throw new RangeError(
                "firstWeekContainsDate must be between 1 and 7 inclusively"
              );
            var m = c.options && c.options.weekStartsOn,
              h = null == m ? 0 : p(m),
              f = null == a.weekStartsOn ? h : p(a.weekStartsOn);
            if (!(f >= 0 && f <= 6))
              throw new RangeError(
                "weekStartsOn must be between 0 and 6 inclusively"
              );
            if (!c.localize)
              throw new RangeError("locale must contain localize property");
            if (!c.formatLong)
              throw new RangeError("locale must contain formatLong property");
            var w = i(e);
            if (!d(w)) throw new RangeError("Invalid time value");
            var v = A(w),
              b = y(w, v),
              T = {
                firstWeekContainsDate: l,
                weekStartsOn: f,
                locale: c,
                _originalDate: w,
              },
              C = r
                .match(R)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? (0, Y[t])(e, c.formatLong, T)
                    : e;
                })
                .join("")
                .match(_)
                .map(function (e) {
                  if ("''" === e) return "'";
                  var t = e[0];
                  if ("'" === t) return K(e);
                  var n = H[t];
                  if (n)
                    return (
                      !a.useAdditionalWeekYearTokens && G(e) && J(e),
                      !a.useAdditionalDayOfYearTokens && Q(e) && J(e),
                      n(b, e, c.localize, T)
                    );
                  if (t.match(V))
                    throw new RangeError(
                      "Format string contains an unescaped latin alphabet character `" +
                        t +
                        "`"
                    );
                  return e;
                })
                .join("");
            return C;
          })(new Date(n[0], n[1] - 1, n[2]), "dd MMMM yyyy")),
          (r = r.value),
          ((e, t, n, r, a) => {
            let o = ((e, t, n, r, a) => ({
              title: e,
              description: t,
              dueDate: n,
              priority: r,
              project: a,
            }))(e, t, n, r, a);
            ee.push(o),
              ce(o),
              document.querySelector("#" + window.this).click(),
              ne();
          })(e, t, n, r, window.projectName),
          document.forms.todoForm.reset(),
          document.querySelector("#closeTodoForm").click();
      }),
      Z !== [] &&
        ((document.querySelector("#projContainer").innerHTML = ""),
        Z.forEach((e) => {
          ie(e);
        })),
      document.querySelector("#Home").click();
  },
]);
