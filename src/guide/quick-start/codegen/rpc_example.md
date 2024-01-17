---
order: 2
title: "RPC Service"
---

::: warning
Make sure that you have been installed follow software:

- simple-admin-tool (goctls) v1.5.5 +

\
Must know go-zero's RPC command. [RPC Command](https://go-zero.dev/docs/goctl/zrpc/#%E6%96%B9%E5%BC%8F%E4%BA%8C%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9Aproto%E7%94%9F%E6%88%90rpc%E6%9C%8D%E5%8A%A1) [RPC Service](https://go-zero.dev/docs/advance/rpc-call) \
 \
Refer to the [Example](https://github.com/suyuan32/simple-admin-example-rpc) project to generate it again, confirm that the generated file is consistent with the Example project, and the Example project has complete commands.
:::

## RPC Responsibilities

In Simple Admin, RPC is mainly used to obtain data and provide extended functions. It mainly has the following responsibilities:

- Interact with the database to obtain the required data, such as PostgreSql
- Interact with data sources to obtain data, such as ES
- Provide additional functions for API layer calls, such as sending text messages and emails

Multiple different APIs can access the same RPC to call its functions.

::: info
[Video Tutorial](https://youtu.be/Yv7d2EKy9ZE)
:::

## Create RPC project

> Create example project

```shell
goctls rpc new example --ent=true --module_name=github.com/suyuan32/simple-admin-example-rpc --port=8080 --desc=true
```

> Simpler Command

```shell
goctls rpc new example -e -m github.com/suyuan32/simple-admin-example-rpc  -p 8080 -d
```

::: warning
The project name only supports lowercase and camelcase and must be not contains `rpc` words.
:::

### `rpc new` parameters

| Parameter   | Must | Default | Introduction                                         | Usage                                                                                                                                                             |
| ----------- | ---- | ------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ent         | No   | false   | Whether to use Ent                                   | true means use                                                                                                                                                    |
| i18n        | No   | false   | Whether to use i18n                                  | true means use                                                                                                                                                    |
| module_name | No   |         | Module name in go.mod                                | If your project will be used by other project, you should set as above which is a github repository. If it is empty, the module will be the same as project name. |
| port        | No   | 9100    | Port number                                          | The service port                                                                                                                                                  |
| desc        | No   | false   | Whether to split the proto file into the desc folder | true will generate the desc folder                                                                                                                                |
| style       | No   | go_zero | The format of the file name.                         | snake case format is go_zero.                                                                                                                                     |

** More parameters please check `goctls rpc new --help` **

```shell
$ goctls rpc new --help
Generate rpc demo service

Usage:
  goctl rpc new [flags]

Flags:
      --branch string            The branch of the remote repo, it does work with --remote
  -d, --desc                     Whether to create desc folder for splitting proto files
  -e, --ent                      Whether use Ent in project
  -h, --help                     help for new
      --home string              The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
  -i, --i18n                     Whether to use i18n
      --idea                     For idea plugin [optional]
  -m, --module_name string       The module name in go.mod. e.g. github.com/suyuan32/simple-admin-core
  -p, --port int                 The service port exposed (default 9110)
      --remote string            The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                                 The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --style string             The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -v, --verbose                  Enable log output
```

> You can see the project structure:

![Example](/assets/example_rpc_struct.png)

### File structure

```text
├── desc                               proto file directory
├── ent                                ent file directory
│ ├── enttest
│ ├── hook
│ ├── migrate
│ ├── predicate
│ ├── runtime
│ ├── schema                            ent schema declaration directory
│ ├── student
│ ├── teacher
│ └── template
├── etc                                 configuration file directory
├── example                             grpc and types directory
├── exampleclient                       client directory
└── internal
     ├──config
     ├── logic                          logic code directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├── server
     └── svc                            global service_context directory
     └── utils                          tools such as ent error handler and ent transaction function

```

And then edit etc/example.yaml

```yaml
Name: example.rpc
ListenOn: 0.0.0.0:8080

DatabaseConf:
  Type: mysql
  Host: 127.0.0.1
  Port: 3306
  DBName: simple_admin
  Username: root # set your username
  Password: "123456" # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

RedisConf:
  Host: 127.0.0.1:6379
  Type: node

Log:
  ServiceName: exampleRpcLogger
  Mode: file
  Path: /home/ryan/data/logs/example/rpc
  Encoding: json
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4001
  Path: /metrics
```

### Edit schema

Enter ent/schema, change example.go into student.go, adding mixins and the fields address, uuid

```go
package schema

import (
 "entgo.io/ent"
 "entgo.io/ent/schema/field"
 "github.com/suyuan32/simple-admin-common/orm/ent/mixins"
)

// Student holds the schema definition for the Student entity.
type Student struct {
 ent.Schema
}

// Fields of the Student.
func (Student) Fields() []ent.Field {
 return []ent.Field{
  field.String("name"),
  field.Int("age"),
 }
}

func (Student) Mixin() []ent.Mixin {
 return []ent.Mixin{
  mixins.IDMixin{},
 }
}

// Edges of the Student.
func (Student) Edges() []ent.Edge {
 return nil
}


```

### Generate Ent code

```shell
make gen-ent
```

### Generate Student CRUD logic codes

```shell
goctls rpc ent --schema=./ent/schema  --style=go_zero --multiple=false --service_name=Example --output=./ --model=Student --group=student --proto_out=./desc/student.proto

make gen-rpc
```

### `rpc ent` parameters

| Parameters        | Must | Default | Introduction                         | Usage                                                                                                                                                                                                                                                                                 |
| ----------------- | ---- | ------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| schema            | Yes  |         | Schema folder                        | Input the relative path of Ent schema                                                                                                                                                                                                                                                 |
| style             | No   | go_zero | File name format                     | The go_zero means snack format                                                                                                                                                                                                                                                        |
| service_name      | Yes  |         | service name                         | The same as the service name in the proto file                                                                                                                                                                                                                                        |
| project_name      | Yes  |         | project name                         | Same as the name you create project, same as main file name, needs to be set in multiple mode, single service is same as service name by default                                                                                                                                      |
| output            | Yes  |         | Output path                          | The output path，it can be relative path. It should target to the root path of project.                                                                                                                                                                                               |
| model             | Yes  |         | Model name                           | The model name for generating e.g. User, if it is  "all", generate codes for all models in schema directory                                                                                                                                                                           |
| group             | Yes  |         | Group Name                           | The group name is used to separate logic code                                                                                                                                                                                                                                         |
| multiple          | No   | false   | Multiple Service                     | If your proto file contains multiple service, you should set true                                                                                                                                                                                                                     |
| proto_out         | No   |         | Proto file output directory          | If it is empty, the data will be generated to the proto file in the root directory of the project, otherwise it will be generated in the specified path desc, such as ./desc/student.proto, note that the folder storing proto must be desc, and there can be sub-files inside folder |
| proto_field_style | no   | go_zero | proto field naming format            | default is underscore                                                                                                                                                                                                                                                                 |
| i18n              | No   | false   | Whether to use i18n                  | true means use                                                                                                                                                                                                                                                                        |
| import_prefix     | No   |         | The path prefix of import            | Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc                                                                                                                                                                                  |
| overwrite         | No   | false   | Whether it covers the generated file | `true` will cover all generated files                                                                                                                                                                                                                                                 |

::: info
Multiple Example, multiple is used to generate separate RPC client when there are several RPC service in one proto file.

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=school --output=./ --model=Teacher --rpc_name=School --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example --multiple=true
```

[Example Code](https://github.com/suyuan32/simple-admin-example-rpc/tree/multiple-example)
:::

**More parameters please check `goctls rpc ent --help`**

```shell
$ goctls rpc ent --help
Generate CRUD template codes by Ent

Usage:
  goctls rpc ent [flags]

Flags:
  -g, --group string               The group name for logic. e.g. user
  -h, --help                       help for ent
  -i, --i18n                       Whether to use i18n
  -x, --import_prefix string       Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc
  -m, --model string               The model name for generating e.g. user, if it is  "all", generate codes for all models in schema directory
      --multiple                   Generated in multiple rpc service mode
  -o, --output string              The output path
  -w, --overwrite                  Whether to overwrite the files, it will overwrite all generated files
  -p, --project_name string        The project name
  -f, --proto_field_style string   The proto field style (default "go_zero")
  -t, --proto_out string           The output proto file path
  -c, --schema string              The schema path of the Ent
  -k, --search_key_num int         The max number of search keys (default 3)
  -r, --service_name string        The service name
  -s, --style string               The file name format style (default "go_zero")
```

::: warning
The tool will automatically recognize the proto files in the `desc` folder, and subfolders can also be created inside the `desc`, `package` and `go_package` only need to be declared once in base.proto,
The tool will automatically merge all proto files into the proto file in the project root directory. To split proto files in old projects, you only need to split the proto in the root directory to the desc folder.
:::

::: info
The shortcut command `make gen-rpc-ent-logic model={modelName} group={groupName}` means to generate the code whose schema is `{modelName}`, and `{groupName}` is the group name. Note that the first letter of modelName needs to be capitalized. Be consistent with the struct name in the schema, use `make gen-rpc-ent-logic model=all group=all` to generate all CRUD codes.

```shell
# Generate the Student structure in the schema
make gen-rpc-ent-logic model=Student group=student

make gen-rpc

# You may need to run
go mod tidy
```

![logic](/assets/ent_gen_logic.png)

You can see CRUD code !
:::

> And then you can run the code !

> Proto File code

```protobuf
syntax = "proto3";

package example;
option go_package="./example";

message Empty {}

message IDReq {
  uint64 id = 1;
}

message IDsReq {
  repeated uint64 ids = 1;
}

message UUIDReq {
  string uuid = 1;
}

message BaseResp {
  string msg = 1;
}

message PageInfoReq {
  uint64 page = 1;
  uint64 page_size = 2;
}


// Student message

message StudentInfo {
  uint64 id = 1;
  int64 created_at = 2;
  int64 updated_at = 3;
  string name = 4;
  int64 age = 5;
}

message StudentListResp {
  uint64 total = 1;
  repeated StudentInfo data = 2;
}

message StudentPageReq {
  uint64 page = 1;
  uint64 page_size = 2;
  string name = 3;
}

service Example {
  // group: base
  rpc initDatabase (Empty) returns (BaseResp);

  // Student management
  // group: student
  rpc createOrUpdateStudent (StudentInfo) returns (BaseResp);
  // group: student
  rpc getStudentList (StudentPageReq) returns (StudentListResp);
  // group: student
  rpc deleteStudent (IDReq) returns (BaseResp);
  // group: student
  rpc batchDeleteStudent (IDsReq) returns (BaseResp);
}

```

Use group comment to separate rpc logic

```shell
go run example.go -f etc/example.yaml
```

> If you see information below:

```shell
Starting server at 127.0.0.1:8080...
```

That means the codes run successfully, you need to finish the database initialization like: [simple admin file](https://github.com/suyuan32/simple-admin-file/blob/master/api/internal/logic/file/init_database_logic.go)

> Project URL <https://github.com/suyuan32/simple-admin-example-rpc>

> How to call the RPC in simple admin example api

### Add config

```go
package config

import (
 "github.com/suyuan32/simple-admin-core/rpc/config"
 "github.com/zeromicro/go-zero/core/stores/redis"
 "github.com/zeromicro/go-zero/rest"
 "github.com/zeromicro/go-zero/zrpc"
)

type Config struct {
 rest.RestConf
 Auth         rest.AuthConf
 DatabaseConf config.DatabaseConf
 RedisConf    redis.RedisConf
 CasbinConf   config.CasbinConf
 ExampleRpc   zrpc.RpcClientConf
}

```

### Add example rpc in service context

> Edit service context

```go
package svc

import (
 "github.com/suyuan32/simple-admin-example-rpc/exampleclient"
 "github.com/zeromicro/go-zero/zrpc"

 "github.com/suyuan32/simple-admin-example-api/internal/config"
 i18n2 "github.com/suyuan32/simple-admin-example-api/internal/i18n"
 "github.com/suyuan32/simple-admin-example-api/internal/middleware"

 "github.com/suyuan32/simple-admin-core/api/internal/i18n"

 "github.com/casbin/casbin/v2"
 "github.com/zeromicro/go-zero/core/logx"
 "github.com/zeromicro/go-zero/rest"
)

type ServiceContext struct {
 Config     config.Config
 ExampleRpc exampleclient.Example
 Casbin     *casbin.Enforcer
 Authority  rest.Middleware
 Trans      *i18n.Translator
}

func NewServiceContext(c config.Config) *ServiceContext {

 rds := redis.MustNewRedis(c.RedisConf)

 cbn := c.CasbinConf.MustNewCasbinWithRedisWatcher(c.DatabaseConf.Type, c.DatabaseConf.GetDSN(), c.RedisConf)

 trans := i18n.NewTranslator(i18n2.LocaleFS)

 return &ServiceContext{
  Config:     c,
  Authority:  middleware.NewAuthorityMiddleware(cbn, rds).Handle,
  Trans:      trans,
  ExampleRpc: exampleclient.NewExample(zrpc.NewClientIfEnable(c.ExampleRpc)),
 }
}
```

> **And then you can call in via l.svcCtx.ExampleRpc in logic code.**

> simple admin example api <https://github.com/suyuan32/simple-admin-example-api>
