import{_ as a,W as l,X as i,Y as n,Z as e,$ as c,a0 as t,F as o}from"./framework-2d290880.js";const d={},r=t(`<h1 id="快捷命令" tabindex="-1"><a class="header-anchor" href="#快捷命令" aria-hidden="true">#</a> 快捷命令</h1><p>我们提供了许多快捷命令在 makefile 中， 只需在根目录执行即可</p><h4 id="注意-需要系统支持make命令-建议linux" tabindex="-1"><a class="header-anchor" href="#注意-需要系统支持make命令-建议linux" aria-hidden="true">#</a> <strong>注意：需要系统支持make命令，建议linux</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译 docker image, 需要设置环境变量 DOCKER_USERNAME VERSION </span>
<span class="token function">make</span> <span class="token function">docker</span>  

<span class="token comment"># 发布 docker 需要设置环境变量 DOCKER_USERNAME VERSION DOCKER_PASSWORD</span>
<span class="token function">make</span> publish-docker

<span class="token comment"># 根据 api/desc 生成 api代码并更新 swagger</span>
<span class="token function">make</span> gen-api

<span class="token comment"># 根据 rpc/core.proto 生成代码</span>
<span class="token function">make</span> gen-rpc

<span class="token comment"># 生成 ent 代码</span>
<span class="token function">make</span> gen-ent

<span class="token comment"># 生成 swagger</span>
<span class="token function">make</span> gen-swagger

<span class="token comment"># 启动 swagger 服务</span>
<span class="token function">make</span> serve-swagger

<span class="token comment"># 本地查看 doc</span>
<span class="token function">make</span> doc

<span class="token comment"># 生成 CRUD 代码 ( 你需要设置model name 和 group name)</span>
<span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token assign-left variable">group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>`,5),u=n("thead",null,[n("tr",null,[n("th",null,"环境变量"),n("th",null,"介绍")])],-1),p=n("tr",null,[n("td",null,"VERSION"),n("td",null,"版本号")],-1),m=n("tr",null,[n("td",null,"DOCKER_USERNAME"),n("td",null,"docker 仓库用户名")],-1),v=n("tr",null,[n("td",null,"DOCKER_PASSWORD"),n("td",null,"docker 仓库密码")],-1),k=n("td",null,"REPO",-1),b={href:"http://docker.io",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,"若要发布镜像需要 export 上述环境变量")],-1);function _(g,f){const s=o("ExternalLinkIcon");return l(),i("div",null,[r,n("table",null,[u,n("tbody",null,[p,m,v,n("tr",null,[k,n("td",null,[e("docker 仓库地址， 官网为 "),n("a",b,[e("docker.io"),c(s)])])])])]),h])}const R=a(d,[["render",_],["__file","quickcmd.html.vue"]]);export{R as default};