---
order: 4
title: "Swagger"
---

## 使用 swagger 生成 API 文档

::: info

> [官方文档](https://goswagger.io/use/spec/meta.html)

[示例项目](https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger) [Path 和 Query 请求例子](https://github.com/suyuan32/simple-admin-example-features/blob/main/swagger/desc/base.api)
:::

::: info
[视频教程](https://www.bilibili.com/video/BV1sg4y1L7ju)

<BiliBili bvid="BV1sg4y1L7ju" />
:::

::: warning
`goctls` 已支持根据 `go zero path` 直接生成 `swagger path`, `goctls` 需要 `v0.3.0+`
`goctls` 已支持根据 `validate` 直接生成 `swagger`校验规则, `goctls` 需要 `v0.3.1+`
:::

> 在项目根目录运行 simple-admin-core/

```shell
swagger generate spec --output=./core.yml --scan-models

swagger serve --no-open -F=swagger --port 36666 core.yml
```

![pic](/assets/swagger.png)

### 获取 Token

> 先登录系统，在任意请求中复制 authorization

![pic](/assets/get_token.png)

> 粘贴到 swagger

![pic](/assets/swagger_authority.png)

### 注解规范

通常对于请求参数我们使用 Req 即 Request 的缩写， 返回值 Resp 即 Response 的缩写

#### 如果你声明的类型后缀有 "Req" 和 "Info", 你可以忽略 swagger:model 的声明. 系统自动添加 swagger:model 注解

```go
type (
    // The response data of API information | API信息
    ApiInfo {
        BaseInfo

        // API path | API路径
        Path          string `json:"path"`

        // Api translation | API 多语言翻译
        Title         string `json:"title"`

        // API Description | API 描述
        Description   string `json:"description"`

        // API group | API分组
        Group         string `json:"group"`

        // API request method e.g. POST | API请求类型 如POST
        Method        string `json:"method"`
    }
}
```

生成

```go
// The response data of API information | API信息
// swagger:model ApiInfo
type ApiInfo struct {
 BaseInfo
 // API path | API路径
 Path string `json:"path"`
 // Api translation | API 多语言翻译
 Title string `json:"title"`
 // API Description | API 描述
 Description string `json:"description"`
 // API group | API分组
 Group string `json:"group"`
 // API request method e.g. POST | API请求类型 如POST
 Method string `json:"method"`
}

```

你也可以覆盖掉它, 添加自己的 swagger 类型，如下：

```go
type (
    // The response data of API information | API信息
    // swagger:response ApiInfo
    ApiInfo {
        BaseInfo

        // API path | API路径
        Path          string `json:"path"`

        // Api translation | API 多语言翻译
        Title         string `json:"title"`

        // API Description | API 描述
        Description   string `json:"description"`

        // API group | API分组
        Group         string `json:"group"`

        // API request method e.g. POST | API请求类型 如POST
        Method        string `json:"method"`
    }
}

```

生成

```go
// The response data of API information | API信息
// swagger:response ApiInfo
type ApiInfo struct {
 BaseInfo
 // API path | API路径
 Path string `json:"path"`
 // Api translation | API 多语言翻译
 Title string `json:"title"`
 // API Description | API 描述
 Description string `json:"description"`
 // API group | API分组
 Group string `json:"group"`
 // API request method e.g. POST | API请求类型 如POST
 Method string `json:"method"`
}
```

#### 如果类型后缀为"Resp"，你可以忽略 swagger 注解，系统自动添加 response 注解. 和 "Info" "Req" 类似

> 对于 route 来说，只需添加简单的一行介绍即可

api/desc/apis.api

```go
// Create or update API information | 创建或更新API
@handler createOrUpdateApi
post /api (CreateOrUpdateApiReq) returns (SimpleMsg)
```

将会生成 :

```go
package api

import (
 "net/http"

 "github.com/suyuan32/simple-admin-core/api/internal/logic/api"
 "github.com/suyuan32/simple-admin-core/api/internal/svc"
 "github.com/suyuan32/simple-admin-core/api/internal/types"
 "github.com/zeromicro/go-zero/rest/httpx"
)

// swagger:route post /api api CreateOrUpdateApi
//
// Create or update API information | 创建或更新API
//
// Create or update API information | 创建或更新API
//
// Parameters:
//  + name: body
//    require: true
//    in: body
//    type: CreateOrUpdateApiReq
//
// Responses:
//  200: SimpleMsg
//  401: SimpleMsg
//  500: SimpleMsg

func CreateOrUpdateApiHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
 return func(w http.ResponseWriter, r *http.Request) {
  var req types.CreateOrUpdateApiReq
  if err := httpx.Parse(r, &req); err != nil {
   httpx.Error(w, err)
   return
  }

  l := api.NewCreateOrUpdateApiLogic(r.Context(), svcCtx)
  resp, err := l.CreateOrUpdateApi(&req)
  if err != nil {
   err = svcCtx.Trans.TransError(r.Header.Get("Accept-Language"), err)
   httpx.Error(w, err)
  } else {
   httpx.OkJson(w, resp)
  }
 }
}

```

你可以修改不同的 response， 或者进行更复杂的配置， 它不会被覆盖，除非将文件删除。

::: warning
注意 goctls 的生成只会覆盖 internal/types/\* 和 internal/handler/routes.go， 如果 handler 需要重新生成需要手动删除再生成。
:::

## `prefix` 参数

```text
@server(
    jwt: Auth
    group: api
    middleware: Authority
    prefix: /v1
)
```

支持 prefix 设置路由前缀，只需设置 `prefix` ，并重新生成 `handler` 即可

## go swagger 报错

安装最新版 go-swagger

```shell
go install github.com/go-swagger/go-swagger/cmd/swagger@latest
```
