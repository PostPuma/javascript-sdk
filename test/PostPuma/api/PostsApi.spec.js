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
    instance = new PostPumaOpenApi30.PostsApi();
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

  describe('PostsApi', function() {
    describe('createPost', function() {
      it('should call createPost successfully', function(done) {
        //uncomment below and update the code to test createPost
        //instance.createPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePost', function() {
      it('should call deletePost successfully', function(done) {
        //uncomment below and update the code to test deletePost
        //instance.deletePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePosts', function() {
      it('should call deletePosts successfully', function(done) {
        //uncomment below and update the code to test deletePosts
        //instance.deletePosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPost', function() {
      it('should call getPost successfully', function(done) {
        //uncomment below and update the code to test getPost
        //instance.getPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPosts', function() {
      it('should call listPosts successfully', function(done) {
        //uncomment below and update the code to test listPosts
        //instance.listPosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queuePost', function() {
      it('should call queuePost successfully', function(done) {
        //uncomment below and update the code to test queuePost
        //instance.queuePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulePost', function() {
      it('should call schedulePost successfully', function(done) {
        //uncomment below and update the code to test schedulePost
        //instance.schedulePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePost', function() {
      it('should call updatePost successfully', function(done) {
        //uncomment below and update the code to test updatePost
        //instance.updatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
