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

import ApiClient from '../ApiClient';
import Account from './Account';
import PostUser from './PostUser';
import Tag from './Tag';
import Version from './Version';

/**
 * The Post model module.
 * @module PostPuma/model/Post
 * @version 1.0.0
 */
class Post {
    /**
     * Constructs a new <code>Post</code>.
     * @alias module:PostPuma/model/Post
     */
    constructor() { 
        
        Post.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/Post} obj Optional instance to populate.
     * @return {module:PostPuma/model/Post} The populated <code>Post</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Post();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [Account]);
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [Version]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = PostUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('scheduled_at')) {
                obj['scheduled_at'] = ApiClient.convertToType(data['scheduled_at'], 'String');
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('trashed')) {
                obj['trashed'] = ApiClient.convertToType(data['trashed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Post</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Post</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        if (data['accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accounts'])) {
                throw new Error("Expected the field `accounts` to be an array in the JSON data but got " + data['accounts']);
            }
            // validate the optional field `accounts` (array)
            for (const item of data['accounts']) {
                Account.validateJSON(item);
            };
        }
        if (data['versions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['versions'])) {
                throw new Error("Expected the field `versions` to be an array in the JSON data but got " + data['versions']);
            }
            // validate the optional field `versions` (array)
            for (const item of data['versions']) {
                Version.validateJSON(item);
            };
        }
        if (data['tags']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tags'])) {
                throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
            }
            // validate the optional field `tags` (array)
            for (const item of data['tags']) {
                Tag.validateJSON(item);
            };
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          PostUser.validateJSON(data['user']);
        }
        // ensure the json data is a string
        if (data['scheduled_at'] && !(typeof data['scheduled_at'] === 'string' || data['scheduled_at'] instanceof String)) {
            throw new Error("Expected the field `scheduled_at` to be a primitive type in the JSON string but got " + data['scheduled_at']);
        }
        // ensure the json data is a string
        if (data['published_at'] && !(typeof data['published_at'] === 'string' || data['published_at'] instanceof String)) {
            throw new Error("Expected the field `published_at` to be a primitive type in the JSON string but got " + data['published_at']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Post.prototype['id'] = undefined;

/**
 * @member {String} uuid
 */
Post.prototype['uuid'] = undefined;

/**
 * @member {String} status
 */
Post.prototype['status'] = undefined;

/**
 * @member {Array.<module:PostPuma/model/Account>} accounts
 */
Post.prototype['accounts'] = undefined;

/**
 * @member {Array.<module:PostPuma/model/Version>} versions
 */
Post.prototype['versions'] = undefined;

/**
 * @member {Array.<module:PostPuma/model/Tag>} tags
 */
Post.prototype['tags'] = undefined;

/**
 * @member {module:PostPuma/model/PostUser} user
 */
Post.prototype['user'] = undefined;

/**
 * @member {String} scheduled_at
 */
Post.prototype['scheduled_at'] = undefined;

/**
 * @member {String} published_at
 */
Post.prototype['published_at'] = undefined;

/**
 * @member {String} created_at
 */
Post.prototype['created_at'] = undefined;

/**
 * @member {Boolean} trashed
 */
Post.prototype['trashed'] = undefined;






export default Post;

