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
    instance = new PostPumaOpenApi30.VersionOptions();
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

  describe('VersionOptions', function() {
    it('should create an instance of VersionOptions', function() {
      // uncomment below and update the code to test VersionOptions
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be.a(PostPumaOpenApi30.VersionOptions);
    });

    it('should have the property tiktok (base name: "tiktok")', function() {
      // uncomment below and update the code to test the property tiktok
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property youtube (base name: "youtube")', function() {
      // uncomment below and update the code to test the property youtube
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property linkedin (base name: "linkedin")', function() {
      // uncomment below and update the code to test the property linkedin
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property mastodon (base name: "mastodon")', function() {
      // uncomment below and update the code to test the property mastodon
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property instagram (base name: "instagram")', function() {
      // uncomment below and update the code to test the property instagram
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property pinterest (base name: "pinterest")', function() {
      // uncomment below and update the code to test the property pinterest
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

    it('should have the property facebookPage (base name: "facebook_page")', function() {
      // uncomment below and update the code to test the property facebookPage
      //var instance = new PostPumaOpenApi30.VersionOptions();
      //expect(instance).to.be();
    });

  });

}));
