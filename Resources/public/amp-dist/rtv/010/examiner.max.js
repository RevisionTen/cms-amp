(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (isLongTaskApiSupported(self)) {
  detectLongTasks(self);
}
/**
 * @param {!Window} win
 */


function detectLongTasks(win) {
  var observer = new win.PerformanceObserver(function (entryList) {
    var entries = entryList.getEntries();

    for (var i = 0; i < entries.length; i++) {
      if (entries[i].entryType != 'longtask' || entries[i].name != 'cross-origin-descendant') {
        continue;
      }

      var attr = entries[i].attribution[0];

      if (!attr || !attr.containerSrc) {
        continue;
      }

      var duration = entries[i].duration;
      var culprit = attr.containerSrc;

      if (attr.containerName) {
        var match = attr.containerName.match(/"type":"([^\"]*)"/);

        if (match.length > 1) {
          culprit = "<amp-ad type=\"" + match[1] + "\">";
        }
      }

      console.
      /*OK*/
      log("%c LONG TASK %c " + duration + "ms from " + culprit, 'background: red; color: white', 'background: #fff; color: #000');
    }
  });
  observer.observe({
    entryTypes: ['longtask']
  });
}
/**
 * @param {!Window} win
 * @return {boolean}
 */


function isLongTaskApiSupported(win) {
  return !!win.PerformanceObserver && !!win.TaskAttributionTiming && 'containerName' in win.TaskAttributionTiming.prototype;
}

},{}]},{},[1])


//# sourceMappingURL=examiner.max.js.map
