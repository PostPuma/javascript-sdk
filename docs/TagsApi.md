# PostPumaOpenApi30.TagsApi

All URIs are relative to *https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsApi.md#createTag) | **POST** /tags | Create tag
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /tags/{tagUuid} | Delete tag
[**getTag**](TagsApi.md#getTag) | **GET** /tags/{tagUuid} | Get tag
[**listTags**](TagsApi.md#listTags) | **GET** /tags | List tags
[**updateTag**](TagsApi.md#updateTag) | **PUT** /tags/{tagUuid} | Update tag



## createTag

> Tag createTag(opts)

Create tag

Create tag

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.TagsApi();
let opts = {
  'createTagRequest': new PostPumaOpenApi30.CreateTagRequest() // CreateTagRequest | 
};
apiInstance.createTag(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTagRequest** | [**CreateTagRequest**](CreateTagRequest.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTag

> DeleteMediaFiles200Response deleteTag(tagUuid)

Delete tag

Delete tag

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.TagsApi();
let tagUuid = "tagUuid_example"; // String | Tag UUID
apiInstance.deleteTag(tagUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagUuid** | **String**| Tag UUID | 

### Return type

[**DeleteMediaFiles200Response**](DeleteMediaFiles200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTag

> Tag getTag(tagUuid)

Get tag

Get tag

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.TagsApi();
let tagUuid = "tagUuid_example"; // String | Tag UUID
apiInstance.getTag(tagUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagUuid** | **String**| Tag UUID | 

### Return type

[**Tag**](Tag.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTags

> ListTags200Response listTags()

List tags

List tags

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.TagsApi();
apiInstance.listTags((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListTags200Response**](ListTags200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTag

> DeleteMediaFiles200Response updateTag(tagUuid, opts)

Update tag

Update tag

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.TagsApi();
let tagUuid = "tagUuid_example"; // String | Tag UUID
let opts = {
  'updateTagRequest': new PostPumaOpenApi30.UpdateTagRequest() // UpdateTagRequest | 
};
apiInstance.updateTag(tagUuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagUuid** | **String**| Tag UUID | 
 **updateTagRequest** | [**UpdateTagRequest**](UpdateTagRequest.md)|  | [optional] 

### Return type

[**DeleteMediaFiles200Response**](DeleteMediaFiles200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

