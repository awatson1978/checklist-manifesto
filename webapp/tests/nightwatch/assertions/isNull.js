exports.assertion = function(objectMethod, timeout, msg) {

  if (!timeout) {
      timeout = 5000;
  }

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */

  var util = require('util');
  this.message = msg || util.format('Testing if value is null.');

  /**
   * A value to perform the assertion on. If a function is
   * defined, its result will be used.
   * @type {function|*}
   */
  this.expected = 'null';

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function(value) {
    return value === null;
  };

  /**
   * The method which returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   * @type {function}
   */
  this.value = function(result) {
    return result.value;
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function(callback) {
    this.api
      .timeoutsAsyncScript(timeout)
      .executeAsync(objectMethod, callback)

    return this;
  };

};
