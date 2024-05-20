---
order: 7
title: 'Service Monitoring'
head:
  - - meta
    - name: keywords
      content: prometheus, service monitoring, healthy, simple admin
---

## We use Prometheus to do the service monitoring

### Install Prometheus

[Install Steps](https://prometheus-operator.dev/docs/prologue/quick-start/)

> After installation, cd simple-admin-core/deploy/k8s/prometheus

```shell
# Run
sh setup.sh
```

### Browse <http://localhost:9090>

### View status - targets

![pic](/assets/prometheus.png)
