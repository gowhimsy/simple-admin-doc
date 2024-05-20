---
order: 7
title: '服务监控'
head:
  - - meta
    - name: keywords
      content: prometheus, service monitoring, healthy, simple admin
---

## 我们使用 Prometheus 进行服务监控

### 安装 Prometheus

[安装方法](https://prometheus-operator.dev/docs/prologue/quick-start/)

> 安装好后进入 simple-admin-core/deploy/k8s/prometheus

```shell
# 运行
sh setup.sh
```

### 访问 <http://localhost:9090>

### 查看 status - targets

![pic](/assets/prometheus.png)
