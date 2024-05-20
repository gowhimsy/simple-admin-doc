---
order: 14
title: '链路追踪'
head:
  - - meta
    - name: keywords
      content: tracing, go zero, jaeger, debug, 链路追踪, 本地部署
---

## Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可

```yaml
Telemetry:
  Name: core-api # 服务名称
  Endpoint: localhost:4317
  Sampler: 1.0
  Batcher: otlpgrpc # 使用 grpc
```

## Jaeger 本地环境部署
打开 `simple-admin-core/deploy/docker-compose/jaeger 文件夹, 执行

```shell
docker-compose up -d
```

即可配置本地环境，本地访问 `http://localhost:16686/` 即可

> 若要使用 ES, 请取消 `docker-compose.yaml` 中的 ES 注释， Jaeger 同时支持多种后端，详情查看 [Backend Storage](https://www.jaegertracing.io/docs/1.18/deployment/#storage-backends)

## 效果展示

![Jaeger UI](/assets/jaeger_ui.png)
