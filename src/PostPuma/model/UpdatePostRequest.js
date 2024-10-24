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
 * The UpdatePostRequest model module.
 * @module PostPuma/model/UpdatePostRequest
 * @version 1.0.0
 */
class UpdatePostRequest {
    /**
     * Constructs a new <code>UpdatePostRequest</code>.
     * @alias module:PostPuma/model/UpdatePostRequest
     */
    constructor() { 
        
        UpdatePostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/UpdatePostRequest} obj Optional instance to populate.
     * @return {module:PostPuma/model/UpdatePostRequest} The populated <code>UpdatePostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePostRequest();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
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
     * Validates the JSON data with respect to <code>UpdatePostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePostRequest</code>.
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
UpdatePostRequest.prototype['date'] = undefined;

/**
 * @member {String} time
 */
UpdatePostRequest.prototype['time'] = undefined;

/**
 * @member {String} timezone
 */
UpdatePostRequest.prototype['timezone'] = undefined;

/**
 * @member {Array.<Number>} accounts
 */
UpdatePostRequest.prototype['accounts'] = undefined;

/**
 * @member {Array.<Number>} tags
 */
UpdatePostRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:PostPuma/model/Version>} versions
 */
UpdatePostRequest.prototype['versions'] = undefined;






export default UpdatePostRequest;

