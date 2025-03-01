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
 * The UpdateTagRequest model module.
 * @module PostPuma/model/UpdateTagRequest
 * @version 1.0.0
 */
class UpdateTagRequest {
    /**
     * Constructs a new <code>UpdateTagRequest</code>.
     * @alias module:PostPuma/model/UpdateTagRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        UpdateTagRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateTagRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PostPuma/model/UpdateTagRequest} obj Optional instance to populate.
     * @return {module:PostPuma/model/UpdateTagRequest} The populated <code>UpdateTagRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hex_color')) {
                obj['hex_color'] = ApiClient.convertToType(data['hex_color'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTagRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTagRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateTagRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['hex_color'] && !(typeof data['hex_color'] === 'string' || data['hex_color'] instanceof String)) {
            throw new Error("Expected the field `hex_color` to be a primitive type in the JSON string but got " + data['hex_color']);
        }

        return true;
    }


}

UpdateTagRequest.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
UpdateTagRequest.prototype['name'] = undefined;

/**
 * @member {String} hex_color
 */
UpdateTagRequest.prototype['hex_color'] = undefined;






export default UpdateTagRequest;

