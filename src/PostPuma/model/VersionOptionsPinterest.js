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
import VersionOptionsPinterestBoards from './VersionOptionsPinterestBoards';

/**
 * The VersionOptionsPinterest model module.
 * @module PostPuma/model/VersionOptionsPinterest
 * @version 1.0.0
 */
class VersionOptionsPinterest {
    /**
     * Constructs a new <code>VersionOptionsPinterest</code>.
     * @alias module:PostPuma/model/VersionOptionsPinterest
     */
    constructor() { 
        
        VersionOptionsPinterest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionOptionsPinterest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/VersionOptionsPinterest} obj Optional instance to populate.
     * @return {module:PostPuma/model/VersionOptionsPinterest} The populated <code>VersionOptionsPinterest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionOptionsPinterest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('boards')) {
                obj['boards'] = VersionOptionsPinterestBoards.constructFromObject(data['boards']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionOptionsPinterest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionOptionsPinterest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // validate the optional field `boards`
        if (data['boards']) { // data not null
          VersionOptionsPinterestBoards.validateJSON(data['boards']);
        }

        return true;
    }


}



/**
 * @member {String} title
 */
VersionOptionsPinterest.prototype['title'] = undefined;

/**
 * @member {String} link
 */
VersionOptionsPinterest.prototype['link'] = undefined;

/**
 * @member {module:PostPuma/model/VersionOptionsPinterestBoards} boards
 */
VersionOptionsPinterest.prototype['boards'] = undefined;






export default VersionOptionsPinterest;

