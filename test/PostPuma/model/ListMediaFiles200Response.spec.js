/**
 * PostPuma - OpenAPI 3.0
 * PostPuma API specifications
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@postpuma.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/PostPuma/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/PostPuma/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PostPumaOpenApi30);
  }
}(this, function(expect, PostPumaOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PostPumaOpenApi30.ListMediaFiles200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ListMediaFiles200Response', function() {
    it('should create an instance of ListMediaFiles200Response', function() {
      // uncomment below and update the code to test ListMediaFiles200Response
      //var instance = new PostPumaOpenApi30.ListMediaFiles200Response();
      //expect(instance).to.be.a(PostPumaOpenApi30.ListMediaFiles200Response);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new PostPumaOpenApi30.ListMediaFiles200Response();
      //expect(instance).to.be();
    });

  });

}));
