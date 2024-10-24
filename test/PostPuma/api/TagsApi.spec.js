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
    instance = new PostPumaOpenApi30.TagsApi();
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

  describe('TagsApi', function() {
    describe('createTag', function() {
      it('should call createTag successfully', function(done) {
        //uncomment below and update the code to test createTag
        //instance.createTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function(done) {
        //uncomment below and update the code to test deleteTag
        //instance.deleteTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTag', function() {
      it('should call getTag successfully', function(done) {
        //uncomment below and update the code to test getTag
        //instance.getTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTags', function() {
      it('should call listTags successfully', function(done) {
        //uncomment below and update the code to test listTags
        //instance.listTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTag', function() {
      it('should call updateTag successfully', function(done) {
        //uncomment below and update the code to test updateTag
        //instance.updateTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));