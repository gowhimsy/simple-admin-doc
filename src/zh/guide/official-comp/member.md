---
order: 2
title: "会员服务模块"
head:
  - - meta
    - name: keywords
      content: mms, member service module, 会员模块, 配置
---

### 介绍

Simple Admin 会员服务的Api服务。实现了会员管理，会员登录，第三方登录，手机和邮箱注册的登录等功能。支持微信小程序登录。

### 下载代码

```shell
# 获取 api 代码
git clone https://github.com/suyuan32/simple-admin-member-api.git

# 获取 rpc 代码
git clone https://github.com/suyuan32/simple-admin-member-rpc.git
```

### 修改配置文件 etc/mms.yaml

::: warning
注意配置时检查 member rpc 中的 CoreRpc 配置， member api 中的 MmsRpc 配置 \
 \
确保 AccessSecret 和 simple-admin-core 的 api 配置文件内一致
:::

::: info

- 配置方式参考 core
- 运行方式同理
- 初始化数据库 <http://localhost:3100/init>
- 在角色页面添加 API 接口权限，然后重启 RPC 的 API，v1.0.14 之后无需重启
  :::

### K8s 部署

> 和 core api 相似

你应该做如下工作:

- 通过 docker 部署服务
- 修改 simple-admin-backend-ui/deploy/default.conf ，解开 mms-api 注释
- 更新 ingress configmap
- 更新 ingress controller

### 配置文件

```yaml
Name: mms.api
Host: 0.0.0.0
Port: 9104
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # the same as core
  AccessExpire: 259200

CROSConf:
  Address: "*"

Log:
  ServiceName: mmsApiLogger
  Mode: file
  Path: /home/data/logs/mms/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4000
  Path: /metrics

DatabaseConf:
  Type: postgres
  Host: 10.5.0.2
  Port: 5432
  DBName: simple_admin
  Username: postgres # set your username
  Password: simple-admin. # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

CasbinConf:
  ModelText: |
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub && keyMatch2(r.obj,p.obj) && r.act == p.act

ProjectConf:
  UseCaptcha: false # 是否启用验证码，若为false, 则登录请求不需要 captcha, captchaId
  DefaultRankID: 1 # 默认会员注册后的等级 ID
  EmailCaptchaExpiredTime: 600 # 电子邮件验证码有效期（秒）
  SmsTemplateId: xxx # 短信服务模板ID
  SmsAppId: xxx # 短信服务 appId
  SmsSignName: xxx # 短信服务签名
  RegisterVerify: captcha # 注册验证方式，支持 captcha, email, sms, sms_or_email
  LoginVerify: captcha #  登录验证方式，支持 captcha, email, sms, sms_or_email, all
  ResetVerify: email # 重置验证方式，支持  email, sms, sms_or_email

MmsRpc:
  Target: k8s://default/mms-rpc-svc:9103
  Enabled: true

CoreRpc:
  Target: k8s://default/core-rpc-svc:9101
  Enabled: true

McmsRpc:
  Target: k8s://default/mcms-rpc-svc:9106
  Enabled: false
  Timeout: 5000
```
