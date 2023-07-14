import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c0a808d6.js";const t={},l=e(`<h2 id="消息中心" tabindex="-1"><a class="header-anchor" href="#消息中心" aria-hidden="true">#</a> 消息中心</h2><p>主要负责邮件发送， sms 短信发送， 公告及内部 im 等</p><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码" aria-hidden="true">#</a> 下载代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-message-center.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> mcms.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9106</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> mcmsRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/data/logs/mcms/rpc
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4006</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">EmailConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">AuthType</span><span class="token punctuation">:</span> plain <span class="token comment"># 支持 plain, CRAMMD5</span>
  <span class="token key atrule">EmailAddr</span><span class="token punctuation">:</span> xxx@xxx.com <span class="token comment"># 发送的邮箱地址</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> xxx <span class="token comment"># 密码</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token comment"># 端口， 默认是 25</span>
  <span class="token key atrule">HostName</span><span class="token punctuation">:</span> smtp.xxxx.com <span class="token comment"># 服务器地址</span>
  <span class="token key atrule">TLS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否启用 tls</span>

<span class="token key atrule">SmsConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">SecretId</span><span class="token punctuation">:</span> xxxx
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">Provider</span><span class="token punctuation">:</span> tencent <span class="token comment"># 提供商，目前支持tencent</span>
  <span class="token key atrule">Region</span><span class="token punctuation">:</span> ap<span class="token punctuation">-</span>nanjing <span class="token comment"># 发消息的服务器区域</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><blockquote><p>QQ 邮箱</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">EmailConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">AuthType</span><span class="token punctuation">:</span> plain
  <span class="token key atrule">EmailAddr</span><span class="token punctuation">:</span> xx@qq.com
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> xxx <span class="token comment"># 注意是授权码</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">465</span>
  <span class="token key atrule">HostName</span><span class="token punctuation">:</span> smtp.qq.com
  <span class="token key atrule">TLS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>腾讯云短信</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">SmsConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">SecretId</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">Provider</span><span class="token punctuation">:</span> tencent
  <span class="token key atrule">Region</span><span class="token punctuation">:</span> ap<span class="token punctuation">-</span>nanjing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[l];function c(i,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","message_center.html.vue"]]);export{d as default};