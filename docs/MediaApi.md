# PostPumaOpenApi30.MediaApi

All URIs are relative to *https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMediaFiles**](MediaApi.md#deleteMediaFiles) | **DELETE** /media | Delete media files
[**getMediaFile**](MediaApi.md#getMediaFile) | **GET** /media/{mediaUuid} | Get media file
[**listMediaFiles**](MediaApi.md#listMediaFiles) | **GET** /media | List media files
[**uploadMediaFile**](MediaApi.md#uploadMediaFile) | **POST** /media | Upload media file



## deleteMediaFiles

> DeleteMediaFiles200Response deleteMediaFiles(opts)

Delete media files

Delete media files

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.MediaApi();
let opts = {
  'deleteMediaFilesRequest': new PostPumaOpenApi30.DeleteMediaFilesRequest() // DeleteMediaFilesRequest | 
};
apiInstance.deleteMediaFiles(opts, (error, data, response) => {
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
 **deleteMediaFilesRequest** | [**DeleteMediaFilesRequest**](DeleteMediaFilesRequest.md)|  | [optional] 

### Return type

[**DeleteMediaFiles200Response**](DeleteMediaFiles200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMediaFile

> MediaFile getMediaFile(mediaUuid)

Get media file

Get media file

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.MediaApi();
let mediaUuid = "mediaUuid_example"; // String | Media UUID
apiInstance.getMediaFile(mediaUuid, (error, data, response) => {
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
 **mediaUuid** | **String**| Media UUID | 

### Return type

[**MediaFile**](MediaFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMediaFiles

> ListMediaFiles200Response listMediaFiles(opts)

List media files

List media files

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.MediaApi();
let opts = {
  'page': 56 // Number | Page number
};
apiInstance.listMediaFiles(opts, (error, data, response) => {
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
 **page** | **Number**| Page number | [optional] 

### Return type

[**ListMediaFiles200Response**](ListMediaFiles200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadMediaFile

> MediaFile uploadMediaFile(opts)

Upload media file

Upload media file

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.MediaApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.uploadMediaFile(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**MediaFile**](MediaFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

