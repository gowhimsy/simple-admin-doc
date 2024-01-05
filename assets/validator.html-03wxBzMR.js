import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as r,c as i,a as t,b as n,d as s,e as o}from"./app-Ds4gY2XE.js";const l={},c=t("h2",{id:"validator-使用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#validator-使用","aria-hidden":"true"},"#"),n(" Validator 使用")],-1),u={class:"hint-container info"},p=t("p",{class:"hint-container-title"},"相关信息",-1),h={href:"https://www.bilibili.com/video/BV19s4y1c7Br",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/go-playground/validator",target:"_blank",rel:"noopener noreferrer"},m=o(`<blockquote><p>只需要在 api 中结构声明中使用 validate tag 即可实现校验</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // login request | 登录参数
    // swagger:model LoginReq
    LoginReq {
        // User Name | 用户名
        Username   string \`json:&quot;username&quot; validate:&quot;alphanum,max=20&quot;\`

        // Password | 密码
        Password   string \`json:&quot;password&quot; validate:&quot;max=30,min=6&quot;\`

        // Captcha Id which store in redis | 验证码编号, 存在redis中
        CaptchaId  string \`json:&quot;captchaId&quot;  validate:&quot;len=20&quot;\`

        // The Captcha which users input | 用户输入的验证码
        Captcha    string \`json:&quot;captcha&quot; validate:&quot;len=5&quot;\`
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="额外扩展" tabindex="-1"><a class="header-anchor" href="#额外扩展" aria-hidden="true">#</a> 额外扩展</h3><p>以下提供三个接口用于扩展 validator, 只需要在 main 函数中调用即可</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 注册额外语言</span>
httpx<span class="token punctuation">.</span><span class="token function">RegisterValidationTranslation</span><span class="token punctuation">(</span>tag <span class="token builtin">string</span><span class="token punctuation">,</span> trans ut<span class="token punctuation">.</span>Translator<span class="token punctuation">,</span> registerFn validator<span class="token punctuation">.</span>RegisterTranslationsFunc<span class="token punctuation">,</span>
	translationFn validator<span class="token punctuation">.</span>TranslationFunc<span class="token punctuation">)</span>

<span class="token comment">// 注册自定义方法</span>
httpx<span class="token punctuation">.</span><span class="token function">RegisterValidation</span><span class="token punctuation">(</span>tag <span class="token builtin">string</span><span class="token punctuation">,</span> fn validator<span class="token punctuation">.</span>Func<span class="token punctuation">)</span>

<span class="token comment">// 设置自定义错误码</span>
httpx<span class="token punctuation">.</span><span class="token function">SetValidatorErrorCode</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/config&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/handler&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/svc&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/conf&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> configFile <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;etc/core.yaml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;the config file&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> c config<span class="token punctuation">.</span>Config
	conf<span class="token punctuation">.</span><span class="token function">MustLoad</span><span class="token punctuation">(</span><span class="token operator">*</span>configFile<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">,</span> conf<span class="token punctuation">.</span><span class="token function">UseEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	server <span class="token operator">:=</span> rest<span class="token punctuation">.</span><span class="token function">MustNewServer</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RestConf<span class="token punctuation">,</span> rest<span class="token punctuation">.</span><span class="token function">WithCors</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> server<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	ctx <span class="token operator">:=</span> svc<span class="token punctuation">.</span><span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	handler<span class="token punctuation">.</span><span class="token function">RegisterHandlers</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>

    <span class="token comment">// 设置自定义错误码</span>
	httpx<span class="token punctuation">.</span><span class="token function">SetValidatorErrorCode</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Starting server at %s:%d...\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Port<span class="token punctuation">)</span>
	server<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： 添加 validate 标签后默认不能为空，若需要允许为空需要添加 omitempty</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Get token list request params | token列表请求参数</span>
    <span class="token comment">// swagger:model TokenListReq</span>
    TokenListReq <span class="token punctuation">{</span>
        PageInfo
        <span class="token comment">// User&#39;s UUID | 用户的UUID</span>
        UUID      <span class="token builtin">string</span> <span class="token string">\`json:&quot;UUID&quot; validate:&quot;omitempty,len=36&quot;\`</span>

        <span class="token comment">// user&#39;s nickname | 用户的昵称</span>
        Nickname  <span class="token builtin">string</span>  <span class="token string">\`json:&quot;nickname&quot; validate:&quot;omitempty,alphanumunicode,max=10&quot;\`</span>

        <span class="token comment">// User Name | 用户名</span>
        Username   <span class="token builtin">string</span> <span class="token string">\`json:&quot;username&quot; validate:&quot;omitempty,alphanum,max=20&quot;\`</span>

        <span class="token comment">// The user&#39;s email address | 用户的邮箱</span>
        Email     <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot; validate:&quot;omitempty,email,max=100&quot;\`</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="校验全自动生成" tabindex="-1"><a class="header-anchor" href="#校验全自动生成" aria-hidden="true">#</a> 校验全自动生成</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 <code>goctls</code> v0.3.1 之后支持 <code>validate</code> 全端自动生成，只需在 api 文件中声明 <code>validate</code> tag 即可</p></div><p>对于 <code>string</code> 类型， 支持 <code>max, min, len, required</code> 校验自动生成至 <code>swagger, backend</code> 对于 <code>int - float</code> 类型， 支持 <code>lt,lte,gt,gte, required</code> 校验自动生成至 <code>swagger, backend</code></p><h2 id="取消校验" tabindex="-1"><a class="header-anchor" href="#取消校验" aria-hidden="true">#</a> 取消校验</h2><h3 id="若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false" tabindex="-1"><a class="header-anchor" href="#若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false" aria-hidden="true">#</a> 若不需要校验可以在 Handler 中将 Parse 中的 isValidate 设置为 false</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">:=</span> httpx<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    httpx<span class="token punctuation">.</span><span class="token function">ErrorCtx</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的校验类型" tabindex="-1"><a class="header-anchor" href="#支持的校验类型" aria-hidden="true">#</a> 支持的校验类型</h2><h3 id="fields" tabindex="-1"><a class="header-anchor" href="#fields" aria-hidden="true">#</a> Fields</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>eqcsfield</td><td>Field Equals Another Field (relative)</td></tr><tr><td>eqfield</td><td>Field Equals Another Field</td></tr><tr><td>fieldcontains</td><td>NOT DOCUMENTED IN doc.go</td></tr><tr><td>fieldexcludes</td><td>NOT DOCUMENTED IN doc.go</td></tr><tr><td>gtcsfield</td><td>Field Greater Than Another Relative Field</td></tr><tr><td>gtecsfield</td><td>Field Greater Than or Equal To Another Relative Field</td></tr><tr><td>gtefield</td><td>Field Greater Than or Equal To Another Field</td></tr><tr><td>gtfield</td><td>Field Greater Than Another Field</td></tr><tr><td>ltcsfield</td><td>Less Than Another Relative Field</td></tr><tr><td>ltecsfield</td><td>Less Than or Equal To Another Relative Field</td></tr><tr><td>ltefield</td><td>Less Than or Equal To Another Field</td></tr><tr><td>ltfield</td><td>Less Than Another Field</td></tr><tr><td>necsfield</td><td>Field Does Not Equal Another Field (relative)</td></tr><tr><td>nefield</td><td>Field Does Not Equal Another Field</td></tr></tbody></table><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> Network</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>cidr</td><td>Classless Inter-Domain Routing CIDR</td></tr><tr><td>cidrv4</td><td>Classless Inter-Domain Routing CIDRv4</td></tr><tr><td>cidrv6</td><td>Classless Inter-Domain Routing CIDRv6</td></tr><tr><td>datauri</td><td>Data URL</td></tr><tr><td>fqdn</td><td>Full Qualified Domain Name (FQDN)</td></tr><tr><td>hostname</td><td>Hostname RFC 952</td></tr><tr><td>hostname_port</td><td>HostPort</td></tr><tr><td>hostname_rfc1123</td><td>Hostname RFC 1123</td></tr><tr><td>ip</td><td>Internet Protocol Address IP</td></tr><tr><td>ip4_addr</td><td>Internet Protocol Address IPv4</td></tr><tr><td>ip6_addr</td><td>Internet Protocol Address IPv6</td></tr><tr><td>ip_addr</td><td>Internet Protocol Address IP</td></tr><tr><td>ipv4</td><td>Internet Protocol Address IPv4</td></tr><tr><td>ipv6</td><td>Internet Protocol Address IPv6</td></tr><tr><td>mac</td><td>Media Access Control Address MAC</td></tr><tr><td>tcp4_addr</td><td>Transmission Control Protocol Address TCPv4</td></tr><tr><td>tcp6_addr</td><td>Transmission Control Protocol Address TCPv6</td></tr><tr><td>tcp_addr</td><td>Transmission Control Protocol Address TCP</td></tr><tr><td>udp4_addr</td><td>User Datagram Protocol Address UDPv4</td></tr><tr><td>udp6_addr</td><td>User Datagram Protocol Address UDPv6</td></tr><tr><td>udp_addr</td><td>User Datagram Protocol Address UDP</td></tr><tr><td>unix_addr</td><td>Unix domain socket end point Address</td></tr><tr><td>uri</td><td>URI String</td></tr><tr><td>url</td><td>URL String</td></tr><tr><td>url_encoded</td><td>URL Encoded</td></tr><tr><td>urn_rfc2141</td><td>Urn RFC 2141 String</td></tr></tbody></table><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>alpha</td><td>Alpha Only</td></tr><tr><td>alphanum</td><td>Alphanumeric</td></tr><tr><td>alphanumunicode</td><td>Alphanumeric Unicode</td></tr><tr><td>alphaunicode</td><td>Alpha Unicode</td></tr><tr><td>ascii</td><td>ASCII</td></tr><tr><td>boolean</td><td>Boolean</td></tr><tr><td>contains</td><td>Contains</td></tr><tr><td>containsany</td><td>Contains Any</td></tr><tr><td>containsrune</td><td>Contains Rune</td></tr><tr><td>endsnotwith</td><td>Ends Not With</td></tr><tr><td>endswith</td><td>Ends With</td></tr><tr><td>excludes</td><td>Excludes</td></tr><tr><td>excludesall</td><td>Excludes All</td></tr><tr><td>excludesrune</td><td>Excludes Rune</td></tr><tr><td>lowercase</td><td>Lowercase</td></tr><tr><td>multibyte</td><td>Multi-Byte Characters</td></tr><tr><td>number</td><td>NOT DOCUMENTED IN doc.go</td></tr><tr><td>numeric</td><td>Numeric</td></tr><tr><td>printascii</td><td>Printable ASCII</td></tr><tr><td>startsnotwith</td><td>Starts Not With</td></tr><tr><td>startswith</td><td>Starts With</td></tr><tr><td>uppercase</td><td>Uppercase</td></tr></tbody></table><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>base64</td><td>Base64 String</td></tr><tr><td>base64url</td><td>Base64URL String</td></tr><tr><td>bic</td><td>Business Identifier Code (ISO 9362)</td></tr><tr><td>bcp47_language_tag</td><td>Language tag (BCP 47)</td></tr><tr><td>btc_addr</td><td>Bitcoin Address</td></tr><tr><td>btc_addr_bech32</td><td>Bitcoin Bech32 Address (segwit)</td></tr><tr><td>credit_card</td><td>Credit Card Number</td></tr><tr><td>datetime</td><td>Datetime</td></tr><tr><td>e164</td><td>e164 formatted phone number</td></tr><tr><td>email</td><td>E-mail String</td></tr><tr><td>eth_addr</td><td>Ethereum Address</td></tr><tr><td>hexadecimal</td><td>Hexadecimal String</td></tr><tr><td>hexcolor</td><td>Hexcolor String</td></tr><tr><td>hsl</td><td>HSL String</td></tr><tr><td>hsla</td><td>HSLA String</td></tr><tr><td>html</td><td>HTML Tags</td></tr><tr><td>html_encoded</td><td>HTML Encoded</td></tr><tr><td>isbn</td><td>International Standard Book Number</td></tr><tr><td>isbn10</td><td>International Standard Book Number 10</td></tr><tr><td>isbn13</td><td>International Standard Book Number 13</td></tr><tr><td>iso3166_1_alpha2</td><td>Two-letter country code (ISO 3166-1 alpha-2)</td></tr><tr><td>iso3166_1_alpha3</td><td>Three-letter country code (ISO 3166-1 alpha-3)</td></tr><tr><td>iso3166_1_alpha_numeric</td><td>Numeric country code (ISO 3166-1 numeric)</td></tr><tr><td>iso3166_2</td><td>Country subdivision code (ISO 3166-2)</td></tr><tr><td>iso4217</td><td>Currency code (ISO 4217)</td></tr><tr><td>json</td><td>JSON</td></tr><tr><td>jwt</td><td>JSON Web Token (JWT)</td></tr><tr><td>latitude</td><td>Latitude</td></tr><tr><td>longitude</td><td>Longitude</td></tr><tr><td>postcode_iso3166_alpha2</td><td>Postcode</td></tr><tr><td>postcode_iso3166_alpha2_field</td><td>Postcode</td></tr><tr><td>rgb</td><td>RGB String</td></tr><tr><td>rgba</td><td>RGBA String</td></tr><tr><td>ssn</td><td>Social Security Number SSN</td></tr><tr><td>timezone</td><td>Timezone</td></tr><tr><td>uuid</td><td>Universally Unique Identifier UUID</td></tr><tr><td>uuid3</td><td>Universally Unique Identifier UUID v3</td></tr><tr><td>uuid3_rfc4122</td><td>Universally Unique Identifier UUID v3 RFC4122</td></tr><tr><td>uuid4</td><td>Universally Unique Identifier UUID v4</td></tr><tr><td>uuid4_rfc4122</td><td>Universally Unique Identifier UUID v4 RFC4122</td></tr><tr><td>uuid5</td><td>Universally Unique Identifier UUID v5</td></tr><tr><td>uuid5_rfc4122</td><td>Universally Unique Identifier UUID v5 RFC4122</td></tr><tr><td>uuid_rfc4122</td><td>Universally Unique Identifier UUID RFC4122</td></tr><tr><td>md4</td><td>MD4 hash</td></tr><tr><td>md5</td><td>MD5 hash</td></tr><tr><td>sha256</td><td>SHA256 hash</td></tr><tr><td>sha384</td><td>SHA384 hash</td></tr><tr><td>sha512</td><td>SHA512 hash</td></tr><tr><td>ripemd128</td><td>RIPEMD-128 hash</td></tr><tr><td>ripemd128</td><td>RIPEMD-160 hash</td></tr><tr><td>tiger128</td><td>TIGER128 hash</td></tr><tr><td>tiger160</td><td>TIGER160 hash</td></tr><tr><td>tiger192</td><td>TIGER192 hash</td></tr><tr><td>semver</td><td>Semantic Versioning 2.0.0</td></tr><tr><td>ulid</td><td>Universally Unique Lexicographically Sortable Identifier ULID</td></tr></tbody></table><h3 id="comparisons" tabindex="-1"><a class="header-anchor" href="#comparisons" aria-hidden="true">#</a> Comparisons</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>eq</td><td>Equals</td></tr><tr><td>gt</td><td>Greater than</td></tr><tr><td>gte</td><td>Greater than or equal</td></tr><tr><td>lt</td><td>Less Than</td></tr><tr><td>lte</td><td>Less Than or Equal</td></tr><tr><td>ne</td><td>Not Equal</td></tr></tbody></table><h3 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h3><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>dir</td><td>Directory</td></tr><tr><td>file</td><td>File path</td></tr><tr><td>isdefault</td><td>Is Default</td></tr><tr><td>len</td><td>Length</td></tr><tr><td>max</td><td>Maximum</td></tr><tr><td>min</td><td>Minimum</td></tr><tr><td>oneof</td><td>One Of</td></tr><tr><td>required</td><td>Required</td></tr><tr><td>required_if</td><td>Required If</td></tr><tr><td>required_unless</td><td>Required Unless</td></tr><tr><td>required_with</td><td>Required With</td></tr><tr><td>required_with_all</td><td>Required With All</td></tr><tr><td>required_without</td><td>Required Without</td></tr><tr><td>required_without_all</td><td>Required Without All</td></tr><tr><td>excluded_if</td><td>Excluded If</td></tr><tr><td>excluded_unless</td><td>Excluded Unless</td></tr><tr><td>excluded_with</td><td>Excluded With</td></tr><tr><td>excluded_with_all</td><td>Excluded With All</td></tr><tr><td>excluded_without</td><td>Excluded Without</td></tr><tr><td>excluded_without_all</td><td>Excluded Without All</td></tr><tr><td>unique</td><td>Unique</td></tr></tbody></table><h4 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h4><table><thead><tr><th>Tag</th><th>Description</th></tr></thead><tbody><tr><td>iscolor</td><td>hexcolor|rgb|rgba|hsl|hsla</td></tr><tr><td>country_code</td><td>iso3166_1_alpha2|iso3166_1_alpha3|iso3166_1_alpha_numeric</td></tr></tbody></table>`,30);function k(b,g){const a=e("ExternalLinkIcon");return r(),i("div",null,[c,t("div",u,[p,t("p",null,[t("a",h,[n("视频教程"),s(a)])])]),t("p",null,[n("Simple Admin Tools 集成 "),t("a",v,[n("validator"),s(a)]),n(" 库")]),m])}const _=d(l,[["render",k],["__file","validator.html.vue"]]);export{_ as default};