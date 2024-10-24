# PostPumaOpenApi30.PostsApi

All URIs are relative to *https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPost**](PostsApi.md#createPost) | **POST** /posts | Create post
[**deletePost**](PostsApi.md#deletePost) | **DELETE** /posts/{postUuid} | Delete post
[**deletePosts**](PostsApi.md#deletePosts) | **DELETE** /posts | Delete posts
[**getPost**](PostsApi.md#getPost) | **GET** /posts/{postUuid} | Get post
[**listPosts**](PostsApi.md#listPosts) | **GET** /posts | List posts
[**queuePost**](PostsApi.md#queuePost) | **POST** /posts/add-to-queue/{postUuid} | Queue post
[**schedulePost**](PostsApi.md#schedulePost) | **POST** /posts/schedule/{postUuid} | Schedule post
[**updatePost**](PostsApi.md#updatePost) | **PUT** /posts/{postUuid} | Update post



## createPost

> Post createPost(opts)

Create post

Create post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let opts = {
  'createPostRequest': new PostPumaOpenApi30.CreatePostRequest() // CreatePostRequest | 
};
apiInstance.createPost(opts, (error, data, response) => {
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
 **createPostRequest** | [**CreatePostRequest**](CreatePostRequest.md)|  | [optional] 

### Return type

[**Post**](Post.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePost

> DeletePosts200Response deletePost(postUuid, opts)

Delete post

Delete post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let postUuid = "postUuid_example"; // String | Post UUID
let opts = {
  'deletePostRequest': new PostPumaOpenApi30.DeletePostRequest() // DeletePostRequest | 
};
apiInstance.deletePost(postUuid, opts, (error, data, response) => {
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
 **postUuid** | **String**| Post UUID | 
 **deletePostRequest** | [**DeletePostRequest**](DeletePostRequest.md)|  | [optional] 

### Return type

[**DeletePosts200Response**](DeletePosts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePosts

> DeletePosts200Response deletePosts(opts)

Delete posts

Delete posts

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let opts = {
  'deletePostsRequest': new PostPumaOpenApi30.DeletePostsRequest() // DeletePostsRequest | 
};
apiInstance.deletePosts(opts, (error, data, response) => {
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
 **deletePostsRequest** | [**DeletePostsRequest**](DeletePostsRequest.md)|  | [optional] 

### Return type

[**DeletePosts200Response**](DeletePosts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPost

> Post getPost(postUuid)

Get post

Get post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let postUuid = "postUuid_example"; // String | Post UUID
apiInstance.getPost(postUuid, (error, data, response) => {
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
 **postUuid** | **String**| Post UUID | 

### Return type

[**Post**](Post.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPosts

> ListPosts200Response listPosts(opts)

List posts

List posts

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let opts = {
  'page': 56 // Number | Page
};
apiInstance.listPosts(opts, (error, data, response) => {
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
 **page** | **Number**| Page | [optional] 

### Return type

[**ListPosts200Response**](ListPosts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queuePost

> QueuePost200Response queuePost(postUuid)

Queue post

Queue post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let postUuid = "postUuid_example"; // String | Post UUID
apiInstance.queuePost(postUuid, (error, data, response) => {
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
 **postUuid** | **String**| Post UUID | 

### Return type

[**QueuePost200Response**](QueuePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## schedulePost

> QueuePost200Response schedulePost(postUuid, opts)

Schedule post

Schedule post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let postUuid = "postUuid_example"; // String | Post UUID
let opts = {
  'schedulePostRequest': new PostPumaOpenApi30.SchedulePostRequest() // SchedulePostRequest | 
};
apiInstance.schedulePost(postUuid, opts, (error, data, response) => {
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
 **postUuid** | **String**| Post UUID | 
 **schedulePostRequest** | [**SchedulePostRequest**](SchedulePostRequest.md)|  | [optional] 

### Return type

[**QueuePost200Response**](QueuePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePost

> DeleteMediaFiles200Response updatePost(postUuid, opts)

Update post

Update post

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.PostsApi();
let postUuid = "postUuid_example"; // String | Post UUID
let opts = {
  'updatePostRequest': new PostPumaOpenApi30.UpdatePostRequest() // UpdatePostRequest | 
};
apiInstance.updatePost(postUuid, opts, (error, data, response) => {
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
 **postUuid** | **String**| Post UUID | 
 **updatePostRequest** | [**UpdatePostRequest**](UpdatePostRequest.md)|  | [optional] 

### Return type

[**DeleteMediaFiles200Response**](DeleteMediaFiles200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

