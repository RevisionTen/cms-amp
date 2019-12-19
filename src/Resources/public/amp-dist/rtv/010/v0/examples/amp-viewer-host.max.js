(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.AmpViewerHost = void 0;

var _messaging = require("../messaging/messaging");

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

/**
 * @fileoverview This is an example of how the viewer host can be implemented
 * for communication with the AMP docs.
 */
var AmpViewerHost =
/*#__PURE__*/
function () {
  /**
   * @param {!Window} win
   * @param {!HTMLIFrameElement} ampIframe
   * @param {string} frameOrigin
   * @param {function(string, *, boolean):(!Promise<*>|undefined)} messageHandler
   * @param {string=} opt_logsId For dev logs so you know what ampdoc you're
   * @param {boolean=} opt_isWebview Should viewer initiate handshake w/ polling
   * @param {boolean=} opt_isHandshakePoll
   * looking at.
   */
  function AmpViewerHost(win, ampIframe, frameOrigin, messageHandler, opt_logsId, opt_isWebview, opt_isHandshakePoll) {
    var _this = this;

    /** @const {!Window} */
    this.win = win;
    /** @private {!HTMLIFrameElement} */

    this.ampIframe_ = ampIframe;
    /** @private {function(string, *, boolean):(!Promise<*>|undefined)} */

    this.messageHandler_ = messageHandler;
    /** @const {boolean} */

    this.isWebview_ = !!opt_isWebview;
    /** @const {string} */

    this.logsId = opt_logsId;
    var target = this.ampIframe_.contentWindow;

    if (this.isWebview_ || opt_isHandshakePoll) {
      _messaging.Messaging.initiateHandshakeWithDocument(target).then(function (messaging) {
        _this.messaging_ = messaging;

        _this.completeHandshake_();
      });
    } else {
      _messaging.Messaging.waitForHandshakeFromDocument(this.win, target, frameOrigin).then(function (messaging) {
        _this.messaging_ = messaging;

        _this.completeHandshake_();
      });
    }
  }
  /**
   * @private
   */


  var _proto = AmpViewerHost.prototype;

  _proto.completeHandshake_ = function completeHandshake_() {
    this.messaging_.setDefaultHandler(this.messageHandler_);
    this.sendRequest('visibilitychange', {
      state: this.visibilityState_,
      prerenderSize: this.prerenderSize
    }, true);
  }
  /**
   * @param {string} type
   * @param {*} data
   * @param {boolean} awaitResponse
   * @return {!Promise<*>|undefined}
   */
  ;

  _proto.sendRequest = function sendRequest(type, data, awaitResponse) {
    this.log('sendRequest');

    if (!this.messaging_) {
      return;
    }

    return this.messaging_.sendRequest(type, data, awaitResponse);
  }
  /**
   * Logs viewer arguments.
   *
   */
  ;

  _proto.log = function log() {
    var var_args = Array.prototype.slice.call(arguments, 0);
    var_args.unshift('[ViewerHost ' + this.logsId + ']');
    console
    /*OK*/
    .log.apply(console, var_args);
  };

  return AmpViewerHost;
}();

exports.AmpViewerHost = AmpViewerHost;
self.AmpViewerHost = AmpViewerHost;

},{"../messaging/messaging":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.parseMessage = parseMessage;
exports.Messaging = exports.WindowPortEmulator = void 0;

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
var TAG = 'amp-viewer-messaging';
var CHANNEL_OPEN_MSG = 'channelOpen';
var HANDSHAKE_POLL_MSG = 'handshake-poll';
var APP = '__AMPHTML__';
/**
 * @enum {string}
 */

var MessageType = {
  REQUEST: 'q',
  RESPONSE: 's'
};
/**
 * @typedef {function(string, *, boolean):(!Promise<*>|undefined)}
 */

var RequestHandler; // eslint-disable-line no-unused-vars

/**
 * @param {*} message
 * @return {?AmpViewerMessage}
 */

function parseMessage(message) {
  if (typeof message != 'string') {
    return (
      /** @type {AmpViewerMessage} */
      message
    );
  }

  if (message.charAt(0) != '{') {
    return null;
  }

  try {
    return (
      /** @type {?AmpViewerMessage} */
      JSON.parse(
      /** @type {string} */
      message)
    );
  } catch (e) {
    return null;
  }
}
/**
 * @fileoverview This class is a de-facto implementation of MessagePort
 * from Channel Messaging API:
 * https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API
 */


var WindowPortEmulator =
/*#__PURE__*/
function () {
  /**
   * @param {!Window} win
   * @param {string} origin
   * @param {!Window} target
   */
  function WindowPortEmulator(win, origin, target) {
    /** @const @private {!Window} */
    this.win_ = win;
    /** @const @private {string} */

    this.origin_ = origin;
    /** @const @private {!Window} */

    this.target_ = target;
  }
  /**
   * @param {string} eventType
   * @param {function(!Event):*} handler
   */


  var _proto = WindowPortEmulator.prototype;

  _proto.addEventListener = function addEventListener(eventType, handler) {
    var _this = this;

    this.win_.addEventListener('message', function (event) {
      if (event.origin == _this.origin_ && event.source == _this.target_) {
        handler(event);
      }
    });
  }
  /**
   * @param {JsonObject} data
   */
  ;

  _proto.postMessage = function postMessage(data) {
    // Opaque (null) origin can only receive messages sent to "*"
    var targetOrigin = this.origin_ === 'null' ? '*' : this.origin_;
    this.target_.
    /*OK*/
    postMessage(data, targetOrigin);
  }
  /**
   * Starts the sending of messages queued on the port.
   */
  ;

  _proto.start = function start() {};

  return WindowPortEmulator;
}();
/**
 * @fileoverview This is used in amp-viewer-integration.js for the
 * communication protocol between AMP and the viewer. In the comments, I will
 * refer to the communication as a conversation between me and Bob. The
 * messaging protocol should support both sides, but at this point I'm the
 * ampdoc and Bob is the viewer.
 */


exports.WindowPortEmulator = WindowPortEmulator;

var Messaging =
/*#__PURE__*/
function () {
  /**
   * Performs a handshake and initializes messaging.
   *
   * Requires the `handshakepoll` viewer capability and the `origin` viewer parameter to be specified.
   * @param {!Window} target - window containing AMP document to perform handshake with
   * @param {?string=} opt_token - message token to verify on incoming messages (must be provided as viewer parameter)
   * @return {!Promise<!Messaging>}
   */
  Messaging.initiateHandshakeWithDocument = function initiateHandshakeWithDocument(target, opt_token) {
    return new Promise(function (resolve) {
      var intervalRef = setInterval(function () {
        var channel = new MessageChannel();
        var pollMessage =
        /** @type {JsonObject} */
        {
          app: APP,
          name: HANDSHAKE_POLL_MSG
        };
        target.
        /*OK*/
        postMessage(pollMessage, '*', [channel.port2]);
        var port = channel.port1;

        var listener = function listener(event) {
          var message = parseMessage(event.data);

          if (!message) {
            return;
          }

          if (message.app === APP && message.name === CHANNEL_OPEN_MSG) {
            clearInterval(intervalRef);
            port.removeEventListener('message', listener);
            var messaging = new Messaging(null, port,
            /* opt_isWebview */
            false, opt_token,
            /* opt_verifyToken */
            true);
            messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
            resolve(messaging);
          }
        };

        port.addEventListener('message', listener);
        port.start();
      }, 1000);
    });
  }
  /**
   * Waits for handshake from iframe and initializes messaging.
   *
   * Requires the `origin` viewer parameter to be specified.
   * @param {!Window} source - the source window containing the viewer
   * @param {!Window} target - window containing AMP document to perform handshake with (usually contentWindow of iframe)
   * @param {string} origin - origin of target window (use "null" if opaque)
   * @param {?string=} opt_token - message token to verify on incoming messages (must be provided as viewer parameter)
   * @return {!Promise<!Messaging>}
   */
  ;

  Messaging.waitForHandshakeFromDocument = function waitForHandshakeFromDocument(source, target, origin, opt_token) {
    return new Promise(function (resolve) {
      var listener = function listener(event) {
        var message = parseMessage(event.data);

        if (!message) {
          return;
        }

        if (event.origin == origin && (!event.source || event.source == target) && message.app === APP && message.name === CHANNEL_OPEN_MSG) {
          source.removeEventListener('message', listener);
          var port = new WindowPortEmulator(source, origin, target);
          var messaging = new Messaging(null, port,
          /* opt_isWebview */
          false, opt_token,
          /* opt_verifyToken */
          true);
          messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
          resolve(messaging);
        }
      };

      source.addEventListener('message', listener);
    });
  }
  /**
   * Conversation (messaging protocol) between me and Bob.
   * @param {?Window} win
   * @param {!MessagePort|!WindowPortEmulator} port
   * @param {boolean=} opt_isWebview
   * @param {?string=} opt_token
   * @param {boolean=} opt_verifyToken
   */
  ;

  function Messaging(win, port, opt_isWebview, opt_token, opt_verifyToken) {
    /** @const @private {?Window} */
    this.win_ = win;
    /** @const @private {!MessagePort|!WindowPortEmulator} */

    this.port_ = port;
    /** @const @private {boolean} */

    this.isWebview_ = !!opt_isWebview;
    /**
     * A token that the viewer may include as an init parameter to enhance
     * security for communication to opaque origin (a.k.a. null origin) AMP
     * documents.
     *
     * For an AMP document embedded inside a sandbox iframe, the origin of the
     * document would be "null", which defeats the purpose of an origin check.
     * An attacker could simply create a sandboxed, malicious iframe (therefore
     * having null origin), walk on the DOM frame tree to find a reference to
     * the viewer iframe (this is not constrained by the same origin policy),
     * and then send postMessage() calls to the viewer frame and pass the
     * viewer's origin checks, if any.
     *
     * The viewer could also check the source of the message to be a legitimate
     * AMP iframe window, but the attacker could bypass that by navigating the
     * legitimate AMP iframe window away to a malicious document. Recent
     * browsers have banned this kind of attack, but it's tricky to rely on it.
     *
     * To prevent the above attack in a null origin AMP document, the viewer
     * should include this token in an init parameter, either in the `src` or
     * `name` attribute of the iframe, and then verify that this token is
     * included in all the messages sent from AMP to the viewer. The attacker
     * would not be able to steal this token under the same origin policy,
     * because the token is inside the viewer document at a different origin
     * and the attacker can't access it.
     * @const @private {?string}
     */

    this.token_ = opt_token || null;
    /**
     * If true, the token above is verified on incoming messages instead of
     * being attached to outgoing messages.
     * @const @private {boolean}
     */

    this.verifyToken_ = !!opt_verifyToken;
    /** @private {number} */

    this.requestIdCounter_ = 0;
    /** @private {!Object<number, {resolve: function(*), reject: function(!Error)}>} */

    this.waitingForResponse_ = {};
    /**
     * A map from message names to request handlers.
     * @private {!Object<string, !RequestHandler>}
     */

    this.messageHandlers_ = {};
    /** @private {?RequestHandler} */

    this.defaultHandler_ = null;
    this.port_.addEventListener('message', this.handleMessage_.bind(this));
    this.port_.start();
  }
  /**
   * Registers a method that will handle requests sent to the specified
   * message name.
   * @param {string} messageName The name of the message to handle.
   * @param {!RequestHandler} requestHandler
   */


  var _proto2 = Messaging.prototype;

  _proto2.registerHandler = function registerHandler(messageName, requestHandler) {
    this.messageHandlers_[messageName] = requestHandler;
  }
  /**
   * Unregisters the handler for the specified message name.
   * @param {string} messageName The name of the message to unregister.
   */
  ;

  _proto2.unregisterHandler = function unregisterHandler(messageName) {
    delete this.messageHandlers_[messageName];
  }
  /**
   * @param {?RequestHandler} requestHandler
   */
  ;

  _proto2.setDefaultHandler = function setDefaultHandler(requestHandler) {
    this.defaultHandler_ = requestHandler;
  }
  /**
   * Bob sent me a message. I need to decide if it's a new request or
   * a response to a previous 'conversation' we were having.
   * @param {!Event} event
   * @private
   */
  ;

  _proto2.handleMessage_ = function handleMessage_(event) {
    var message = parseMessage(event.data);

    if (!message || message.app !== APP) {
      return;
    }

    if (this.token_ && this.verifyToken_ && message.messagingToken !== this.token_) {
      // We received a message with an invalid token - dismiss it.
      this.logError_(TAG + ': handleMessage_ error: ', 'invalid token');
      return;
    }

    if (message.type === MessageType.REQUEST) {
      this.handleRequest_(message);
    } else if (message.type === MessageType.RESPONSE) {
      this.handleResponse_(message);
    }
  }
  /**
   * I'm sending Bob a new outgoing request.
   * @param {string} messageName
   * @param {?JsonObject|string|undefined} messageData
   * @param {boolean} awaitResponse
   * @return {!Promise<*>|undefined}
   */
  ;

  _proto2.sendRequest = function sendRequest(messageName, messageData, awaitResponse) {
    var _this2 = this;

    var requestId = ++this.requestIdCounter_;
    var promise = undefined;

    if (awaitResponse) {
      promise = new Promise(function (resolve, reject) {
        _this2.waitingForResponse_[requestId] = {
          resolve: resolve,
          reject: reject
        };
      });
    }

    this.sendMessage_(
    /** @type {!AmpViewerMessage} */
    {
      app: APP,
      requestid: requestId,
      type: MessageType.REQUEST,
      name: messageName,
      data: messageData,
      rsvp: awaitResponse
    });
    return promise;
  }
  /**
   * I'm responding to a request that Bob made earlier.
   * @param {number} requestId
   * @param {string} messageName
   * @param {*} messageData
   * @private
   */
  ;

  _proto2.sendResponse_ = function sendResponse_(requestId, messageName, messageData) {
    this.sendMessage_(
    /** @type {!AmpViewerMessage} */
    {
      app: APP,
      requestid: requestId,
      type: MessageType.RESPONSE,
      name: messageName,
      data: messageData
    });
  }
  /**
   * @param {number} requestId
   * @param {string} messageName
   * @param {*} reason !Error most of time, string sometimes, * rarely.
   * @private
   */
  ;

  _proto2.sendResponseError_ = function sendResponseError_(requestId, messageName, reason) {
    var errString = this.errorToString_(reason);
    this.logError_(TAG + ': sendResponseError_, message name: ' + messageName, errString);
    this.sendMessage_(
    /** @type {!AmpViewerMessage} */
    {
      app: APP,
      requestid: requestId,
      type: MessageType.RESPONSE,
      name: messageName,
      data: null,
      error: errString
    });
  }
  /**
   * @param {!AmpViewerMessage} message
   * @private
   */
  ;

  _proto2.sendMessage_ = function sendMessage_(message) {
    var
    /** Object<string, *> */
    finalMessage = Object.assign(message, {});

    if (this.token_ && !this.verifyToken_) {
      finalMessage.messagingToken = this.token_;
    }

    this.port_.
    /*OK*/
    postMessage(this.isWebview_ ? JSON.stringify(
    /** @type {!JsonObject} */
    finalMessage) : finalMessage);
  }
  /**
   * I'm handling an incoming request from Bob. I'll either respond normally
   * (ex: "got it Bob!") or with an error (ex: "I didn't get a word of what
   * you said!").
   * @param {!AmpViewerMessage} message
   * @private
   */
  ;

  _proto2.handleRequest_ = function handleRequest_(message) {
    var _this3 = this;

    var handler = this.messageHandlers_[message.name];

    if (!handler) {
      handler = this.defaultHandler_;
    }

    if (!handler) {
      var error = new Error('Cannot handle request because no default handler is set!');
      error.args = message.name;
      throw error;
    }

    var promise = handler(message.name, message.data, !!message.rsvp);

    if (message.rsvp) {
      var requestId = message.requestid;

      if (!promise) {
        this.sendResponseError_(requestId, message.name, new Error('no response'));
        throw new Error('expected response but none given: ' + message.name);
      }

      promise.then(function (data) {
        _this3.sendResponse_(requestId, message.name, data);
      }, function (reason) {
        _this3.sendResponseError_(requestId, message.name, reason);
      });
    }
  }
  /**
   * I sent out a request to Bob. He responded. And now I'm handling that
   * response.
   * @param {!AmpViewerMessage} message
   * @private
   */
  ;

  _proto2.handleResponse_ = function handleResponse_(message) {
    var requestId = message.requestid;
    var pending = this.waitingForResponse_[requestId];

    if (pending) {
      delete this.waitingForResponse_[requestId];

      if (message.error) {
        this.logError_(TAG + ': handleResponse_ error: ', message.error);
        pending.reject(new Error("Request " + message.name + " failed: " + message.error));
      } else {
        pending.resolve(message.data);
      }
    }
  }
  /**
   * @param {string} state
   * @param {!Error|string=} opt_data
   * @private
   */
  ;

  _proto2.logError_ = function logError_(state, opt_data) {
    if (!this.win_) {
      return;
    }

    var stateStr = 'amp-messaging-error-logger: ' + state;
    var dataStr = ' data: ' + this.errorToString_(opt_data);
    stateStr += dataStr;
    this.win_['viewerState'] = stateStr;
  }
  /**
   * @param {*} err !Error most of time, string sometimes, * rarely.
   * @return {string}
   * @private
   */
  ;

  _proto2.errorToString_ = function errorToString_(err) {
    return err ? err.message ? err.message : String(err) : 'unknown error';
  };

  return Messaging;
}();

exports.Messaging = Messaging;

},{}]},{},[1])


//# sourceMappingURL=amp-viewer-host.max.js.map
