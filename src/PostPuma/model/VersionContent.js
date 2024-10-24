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

/**
 * The VersionContent model module.
 * @module PostPuma/model/VersionContent
 * @version 1.0.0
 */
class VersionContent {
    /**
     * Constructs a new <code>VersionContent</code>.
     * @alias module:PostPuma/model/VersionContent
     */
    constructor() { 
        
        VersionContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/VersionContent} obj Optional instance to populate.
     * @return {module:PostPuma/model/VersionContent} The populated <code>VersionContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionContent();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionContent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['media'])) {
            throw new Error("Expected the field `media` to be an array in the JSON data but got " + data['media']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} body
 */
VersionContent.prototype['body'] = undefined;

/**
 * @member {Array.<String>} media
 */
VersionContent.prototype['media'] = undefined;

/**
 * @member {String} url
 */
VersionContent.prototype['url'] = undefined;






export default VersionContent;

