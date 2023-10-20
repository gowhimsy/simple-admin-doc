import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as i,a as e,b as n,d as t,e as s}from"./app-9db0473b.js";const c={},d=s(`<h2 id="generating-dockerfile" tabindex="-1"><a class="header-anchor" href="#generating-dockerfile" aria-hidden="true">#</a> Generating Dockerfile</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls <span class="token function">docker</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-u</span> yuansu.china.work@gmail.com <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">9104</span> <span class="token parameter variable">-s</span> mms <span class="token parameter variable">-t</span> rpc <span class="token parameter variable">-z</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="introduction-to-docker-parameters" tabindex="-1"><a class="header-anchor" href="#introduction-to-docker-parameters" aria-hidden="true">#</a> Introduction to <code>docker</code> Parameters</h3>`,3),p=e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Required"),e("th",null,"Default Value"),e("th",null,"Description")])],-1),u=e("tr",null,[e("td",null,"service_name"),e("td",null,"Yes"),e("td"),e("td",null,[n("The service name of the project, such as "),e("code",null,"core")])],-1),h=e("tr",null,[e("td",null,"service_type"),e("td",null,"No"),e("td",null,[e("code",null,"rpc")]),e("td",null,[n("The service type, such as "),e("code",null,"rpc"),n(" or "),e("code",null,"api")])],-1),m=e("tr",null,[e("td",null,"author"),e("td",null,"No"),e("td",null,[e("code",null,"example@example.com")]),e("td",null,"The author information")],-1),b=e("tr",null,[e("td",null,"base"),e("td",null,"No"),e("td",null,[e("code",null,"alpine:latest")]),e("td",null,"The base image to run the project")],-1),v=e("tr",null,[e("td",null,"branch"),e("td",null,"No"),e("td"),e("td",null,[n("The branch of the remote repository, it must be used with "),e("code",null,"--remote")])],-1),k=e("tr",null,[e("td",null,"china"),e("td",null,"No"),e("td"),e("td",null,[n("If your server is in China, set this to "),e("code",null,"true")])],-1),_=e("tr",null,[e("td",null,"home"),e("td",null,"No"),e("td"),e("td",null,[n("The goctl home path of the template, "),e("code",null,"--home"),n(" and "),e("code",null,"--remote"),n(" cannot be set at the same time, if they are, "),e("code",null,"--remote"),n(" has higher priority")])],-1),g=e("tr",null,[e("td",null,"image"),e("td",null,"No"),e("td",null,[e("code",null,"golang:1.20.3-alpine3.17")]),e("td",null,"The image for building the project")],-1),f=e("tr",null,[e("td",null,"port"),e("td",null,"No"),e("td"),e("td",null,"The port to expose, default none")],-1),y=e("td",null,"remote",-1),T=e("td",null,"No",-1),x=e("td",null,null,-1),N=e("code",null,"--home",-1),w=e("code",null,"--remote",-1),z=e("code",null,"--remote",-1),q={href:"https://github.com/zeromicro/go-zero-template",target:"_blank",rel:"noopener noreferrer"},E=e("tr",null,[e("td",null,"tz"),e("td",null,"No"),e("td"),e("td",null,[n("The timezone of the container, such as "),e("code",null,"Asia/Shanghai")])],-1),j=e("tr",null,[e("td",null,"local_build"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether to build the project locally, without using an intermediate image")],-1),D=s(`<blockquote><p>Run <code>goctls docker -h</code> to see more:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Generate Dockerfile

Usage:
  goctls <span class="token function">docker</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -u, <span class="token parameter variable">--author</span> string         The author information <span class="token punctuation">(</span>default <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">)</span>
  -a, <span class="token parameter variable">--base</span> string           The base image to run the project <span class="token punctuation">(</span>default <span class="token string">&quot;alpine:latest&quot;</span><span class="token punctuation">)</span>
  -b, <span class="token parameter variable">--branch</span> string         The branch of the remote repo, it does work with <span class="token parameter variable">--remote</span>
  -c, <span class="token parameter variable">--china</span>                 If your server <span class="token keyword">in</span> China, <span class="token builtin class-name">set</span> <span class="token boolean">true</span>
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token function">docker</span>
  -m, <span class="token parameter variable">--home</span> string           The goctl home path of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
  -i, <span class="token parameter variable">--image</span> string          The image <span class="token keyword">for</span> building project <span class="token punctuation">(</span>default <span class="token string">&quot;golang:1.20.5-alpine3.17&quot;</span><span class="token punctuation">)</span>
  -l, <span class="token parameter variable">--local_build</span>           Whether to build the project locally without using intermediate images
  -p, <span class="token parameter variable">--port</span> int              The port to expose, default none
  -r, <span class="token parameter variable">--remote</span> string         The remote <span class="token function">git</span> repo of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
                              The <span class="token function">git</span> repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, <span class="token parameter variable">--service_name</span> string   The <span class="token function">service</span> name of the project
  -t, <span class="token parameter variable">--service_type</span> string   The <span class="token function">service</span> type, such as rpc, api <span class="token punctuation">(</span>default <span class="token string">&quot;rpc&quot;</span><span class="token punctuation">)</span>
  -z, <span class="token parameter variable">--tz</span> string             The timezone of the container, such as Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2>`,3),R=e("thead",null,[e("tr",null,[e("th",null,"Environment Variables"),e("th",null,"Introduction")])],-1),S=e("tr",null,[e("td",null,"DOCKER_USERNAME"),e("td",null,"docker repository username")],-1),I=e("tr",null,[e("td",null,"DOCKER_PASSWORD"),e("td",null,"docker repository password")],-1),V=e("td",null,"REPO",-1),A={href:"http://docker.io",target:"_blank",rel:"noopener noreferrer"};function C(O,P){const a=o("ExternalLinkIcon");return r(),i("div",null,[d,e("table",null,[p,e("tbody",null,[u,h,m,b,v,k,_,g,f,e("tr",null,[y,T,x,e("td",null,[n("The remote git repository of the template, "),N,n(" and "),w,n(" cannot be set at the same time, if they are, "),z,n(" has higher priority. The git repository directory must be consistent with the "),e("a",q,[n("https://github.com/zeromicro/go-zero-template"),t(a)]),n(" directory structure")])]),E,j])]),D,e("table",null,[R,e("tbody",null,[S,I,e("tr",null,[V,e("td",null,[n("docker repository address， official hub: "),e("a",A,[n("docker.io"),t(a)])])])])])])}const G=l(c,[["render",C],["__file","4-docker.html.vue"]]);export{G as default};