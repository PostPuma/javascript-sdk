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
    instance = new PostPumaOpenApi30.VersionOptionsTiktok();
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

  describe('VersionOptionsTiktok', function() {
    it('should create an instance of VersionOptionsTiktok', function() {
      // uncomment below and update the code to test VersionOptionsTiktok
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be.a(PostPumaOpenApi30.VersionOptionsTiktok);
    });

    it('should have the property privacyLevel (base name: "privacy_level")', function() {
      // uncomment below and update the code to test the property privacyLevel
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property allowComments (base name: "allow_comments")', function() {
      // uncomment below and update the code to test the property allowComments
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property allowDuet (base name: "allow_duet")', function() {
      // uncomment below and update the code to test the property allowDuet
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property allowStitch (base name: "allow_stitch")', function() {
      // uncomment below and update the code to test the property allowStitch
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property contentDisclosure (base name: "content_disclosure")', function() {
      // uncomment below and update the code to test the property contentDisclosure
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property brandOrganicToggle (base name: "brand_organic_toggle")', function() {
      // uncomment below and update the code to test the property brandOrganicToggle
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

    it('should have the property brandContentToggle (base name: "brand_content_toggle")', function() {
      // uncomment below and update the code to test the property brandContentToggle
      //var instance = new PostPumaOpenApi30.VersionOptionsTiktok();
      //expect(instance).to.be();
    });

  });

}));
