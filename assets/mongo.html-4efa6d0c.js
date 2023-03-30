import{_ as t,W as o,X as i,Y as n,Z as s,$ as e,a0 as c,D as p}from"./framework-2d2f73c4.js";const l={},u={class:"hint-container info"},r=n("p",{class:"hint-container-title"},"Info",-1),d={href:"https://github.com/suyuan32/simple-admin-example-features/tree/main/mongo",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mongodb/mongo-go-driver",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="configuration-file" tabindex="-1"><a class="header-anchor" href="#configuration-file" aria-hidden="true">#</a> Configuration File</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">MongodbConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 192.168.50.216
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> school
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># set your password</span>
  <span class="token key atrule">AuthMechanism</span><span class="token punctuation">:</span> SCRAM<span class="token punctuation">-</span>SHA<span class="token punctuation">-</span><span class="token number">256</span>
  <span class="token key atrule">AuthSource</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">Option</span><span class="token punctuation">:</span> <span class="token punctuation">?</span>connect=direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> Init</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/casbin/casbin/v2&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
	<span class="token string">&quot;go.mongodb.org/mongo-driver/mongo&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-example-mongo/internal/config&quot;</span>
	i18n2 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-mongo/internal/i18n&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/i18n&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config        config<span class="token punctuation">.</span>Config
	Casbin        <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer
	Authority     rest<span class="token punctuation">.</span>Middleware
	Trans         <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
	Mongo         <span class="token operator">*</span>mongo<span class="token punctuation">.</span>Client
	MongoDatabase <span class="token operator">*</span>mongo<span class="token punctuation">.</span>Database
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>

	trans <span class="token operator">:=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span>i18n2<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>        c<span class="token punctuation">,</span>
		Trans<span class="token punctuation">:</span>         trans<span class="token punctuation">,</span>
		Mongo<span class="token punctuation">:</span>         c<span class="token punctuation">.</span>MongodbConf<span class="token punctuation">.</span><span class="token function">MustNewClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		MongoDatabase<span class="token punctuation">:</span> c<span class="token punctuation">.</span>MongodbConf<span class="token punctuation">.</span><span class="token function">MustNewDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,g){const a=p("ExternalLinkIcon");return o(),i("div",null,[n("div",u,[r,n("p",null,[n("a",d,[s("Example"),e(a)]),s(),n("a",m,[s("Offical Doc"),e(a)])])]),k])}const f=t(l,[["render",v],["__file","mongo.html.vue"]]);export{f as default};
