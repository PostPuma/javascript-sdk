# PostPumaOpenApi30.AccountsApi

All URIs are relative to *https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountsApi.md#getAccount) | **GET** /accounts/{accountUuid} | Get account
[**listAccounts**](AccountsApi.md#listAccounts) | **GET** /accounts | List accounts



## getAccount

> Account getAccount(accountUuid)

Get account

Get account

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.AccountsApi();
let accountUuid = "accountUuid_example"; // String | Account UUID
apiInstance.getAccount(accountUuid, (error, data, response) => {
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
 **accountUuid** | **String**| Account UUID | 

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccounts

> ListAccounts200Response listAccounts()

List accounts

List accounts

### Example

```javascript
import PostPumaOpenApi30 from 'post_puma_open_api_3_0';
let defaultClient = PostPumaOpenApi30.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PostPumaOpenApi30.AccountsApi();
apiInstance.listAccounts((error, data, response) => {
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

[**ListAccounts200Response**](ListAccounts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

