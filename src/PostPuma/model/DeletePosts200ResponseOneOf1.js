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
 * The DeletePosts200ResponseOneOf1 model module.
 * @module PostPuma/model/DeletePosts200ResponseOneOf1
 * @version 1.0.0
 */
class DeletePosts200ResponseOneOf1 {
    /**
     * Constructs a new <code>DeletePosts200ResponseOneOf1</code>.
     * @alias module:PostPuma/model/DeletePosts200ResponseOneOf1
     */
    constructor() { 
        
        DeletePosts200ResponseOneOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePosts200ResponseOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/DeletePosts200ResponseOneOf1} obj Optional instance to populate.
     * @return {module:PostPuma/model/DeletePosts200ResponseOneOf1} The populated <code>DeletePosts200ResponseOneOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePosts200ResponseOneOf1();

            if (data.hasOwnProperty('to_trash')) {
                obj['to_trash'] = ApiClient.convertToType(data['to_trash'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeletePosts200ResponseOneOf1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletePosts200ResponseOneOf1</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} to_trash
 */
DeletePosts200ResponseOneOf1.prototype['to_trash'] = undefined;






export default DeletePosts200ResponseOneOf1;
