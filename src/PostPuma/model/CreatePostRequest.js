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
import Version from './Version';

/**
 * The CreatePostRequest model module.
 * @module PostPuma/model/CreatePostRequest
 * @version 1.0.0
 */
class CreatePostRequest {
    /**
     * Constructs a new <code>CreatePostRequest</code>.
     * @alias module:PostPuma/model/CreatePostRequest
     */
    constructor() { 
        
        CreatePostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/CreatePostRequest} obj Optional instance to populate.
     * @return {module:PostPuma/model/CreatePostRequest} The populated <code>CreatePostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePostRequest();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], 'Boolean');
            }
            if (data.hasOwnProperty('schedule_now')) {
                obj['schedule_now'] = ApiClient.convertToType(data['schedule_now'], 'Boolean');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'Boolean');
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], ['Number']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [Version]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePostRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // ensure the json data is a string
        if (data['time'] && !(typeof data['time'] === 'string' || data['time'] instanceof String)) {
            throw new Error("Expected the field `time` to be a primitive type in the JSON string but got " + data['time']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['accounts'])) {
            throw new Error("Expected the field `accounts` to be an array in the JSON data but got " + data['accounts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
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

        return true;
    }


}



/**
 * @member {String} date
 */
CreatePostRequest.prototype['date'] = undefined;

/**
 * @member {String} time
 */
CreatePostRequest.prototype['time'] = undefined;

/**
 * @member {String} timezone
 */
CreatePostRequest.prototype['timezone'] = undefined;

/**
 * @member {Boolean} schedule
 */
CreatePostRequest.prototype['schedule'] = undefined;

/**
 * @member {Boolean} schedule_now
 */
CreatePostRequest.prototype['schedule_now'] = undefined;

/**
 * @member {Boolean} queue
 */
CreatePostRequest.prototype['queue'] = undefined;

/**
 * @member {Array.<Number>} accounts
 */
CreatePostRequest.prototype['accounts'] = undefined;

/**
 * @member {Array.<Number>} tags
 */
CreatePostRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:PostPuma/model/Version>} versions
 */
CreatePostRequest.prototype['versions'] = undefined;






export default CreatePostRequest;
