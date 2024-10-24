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
    instance = new PostPumaOpenApi30.AccountData();
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

  describe('AccountData', function() {
    it('should create an instance of AccountData', function() {
      // uncomment below and update the code to test AccountData
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be.a(PostPumaOpenApi30.AccountData);
    });

    it('should have the property unionId (base name: "union_id")', function() {
      // uncomment below and update the code to test the property unionId
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property isPrivate (base name: "is_private")', function() {
      // uncomment below and update the code to test the property isPrivate
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property duetDisabled (base name: "duet_disabled")', function() {
      // uncomment below and update the code to test the property duetDisabled
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property privacyLevels (base name: "privacy_levels")', function() {
      // uncomment below and update the code to test the property privacyLevels
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property stitchDisabled (base name: "stitch_disabled")', function() {
      // uncomment below and update the code to test the property stitchDisabled
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property commentDisabled (base name: "comment_disabled")', function() {
      // uncomment below and update the code to test the property commentDisabled
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

    it('should have the property maxVideoPostDurationSec (base name: "max_video_post_duration_sec")', function() {
      // uncomment below and update the code to test the property maxVideoPostDurationSec
      //var instance = new PostPumaOpenApi30.AccountData();
      //expect(instance).to.be();
    });

  });

}));
