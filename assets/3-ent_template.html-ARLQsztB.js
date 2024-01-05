import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as n}from"./app-Ds4gY2XE.js";const t={},i=n(`<h2 id="ent-template-generation" tabindex="-1"><a class="header-anchor" href="#ent-template-generation" aria-hidden="true">#</a> Ent Template Generation</h2><h3 id="extra-ent-template-template-generation" tabindex="-1"><a class="header-anchor" href="#extra-ent-template-template-generation" aria-hidden="true">#</a> <code>extra ent template</code> Template Generation</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent template <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>update</td><td>No</td><td>false</td><td>Whether to update all local templates and ent versions</td></tr><tr><td>list</td><td>No</td><td>false</td><td>List all supported templates</td></tr><tr><td>dir</td><td>No</td><td></td><td>Ent directory, if empty, it will try to find it automatically. It needs to be executed in the project root directory to find it automatically</td></tr><tr><td>add</td><td>No</td><td></td><td>Add a template, which needs to be in the list.</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  goctl extra ent template <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--add</span> string   Add template <span class="token keyword">for</span> ent
  -d, <span class="token parameter variable">--dir</span> string   The ent directory. If it is empty, goctls will try to <span class="token function">find</span> it automatically
  -h, <span class="token parameter variable">--help</span>         <span class="token builtin class-name">help</span> <span class="token keyword">for</span> template
  -l, <span class="token parameter variable">--list</span>         List all support templates
  -u, <span class="token parameter variable">--update</span>       Update all templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extra-ent-mixin-template-generation" tabindex="-1"><a class="header-anchor" href="#extra-ent-mixin-template-generation" aria-hidden="true">#</a> <code>extra ent mixin</code> Template Generation</h3><blockquote><p>goctls &gt;= 1.5.14</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent mixin <span class="token parameter variable">-a</span> soft_delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent mixin <span class="token parameter variable">-h</span>
Usage:
  goctls extra ent mixin <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--add</span> string   Add Mixin template <span class="token keyword">for</span> ent
  -d, <span class="token parameter variable">--dir</span> string   Directory of ent. If empty, goctls will <span class="token function">find</span> it automatically
  -h, <span class="token parameter variable">--help</span>         <span class="token builtin class-name">help</span> <span class="token keyword">for</span> mixin
  -l, <span class="token parameter variable">--list</span>         List all supported templates
  -u, <span class="token parameter variable">--update</span>       Update all templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Soft delete templates are currently supported.</p><h3 id="extra-ent-import-generates-schema-from-database" tabindex="-1"><a class="header-anchor" href="#extra-ent-import-generates-schema-from-database" aria-hidden="true">#</a> <code>extra ent import</code> generates schema from database</h3><blockquote><p>goctls &gt;= 1.6.12</p></blockquote><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>It is recommended to execute the command directly in the project&#39;s <strong>root directory</strong>, and the <code>-o</code> parameter does not need to be configured, for example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent <span class="token function">import</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;mysql://root:simple-admin.@tcp(localhost:3306)/simple_admin?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;sys_tokens&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent <span class="token function">import</span> <span class="token parameter variable">-h</span>
Generate Ent Schema from database

Usage:
  goctls extra ent <span class="token function">import</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -d, <span class="token parameter variable">--dsn</span> string              Database DSN address, supports mysql and postgres. e.g. <span class="token string">&quot;mysql://user:pass@tcp(localhost:3306)/dbname&quot;</span>
                                <span class="token string">&quot;postgres://user:pass@host:port/dbname?sslmode=disable&quot;</span>
  -e, <span class="token parameter variable">--exclude_tables</span> string   When excluding tables <span class="token keyword">for</span> exporting all tables, you need to specify all intermediate tables and tables without a primary key. For example: role_menu, user_roles
  -h, <span class="token parameter variable">--help</span>                    <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token function">import</span>
  -o, <span class="token parameter variable">--output</span> string           Output path, the project&#39;s root directory
  -t, <span class="token parameter variable">--tables</span> string           Specify data tables. e.g. sys_users,sys_tokens
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>goctls supports generating index indexes, but the suffix of the index name must be the field name, and only supports generating single indexes, not composite indexes</p></div><h3 id="extra-ent-schema-command-generates-an-empty-schema-file" tabindex="-1"><a class="header-anchor" href="#extra-ent-schema-command-generates-an-empty-schema-file" aria-hidden="true">#</a> <code>extra ent schema</code> command generates an empty schema file.</h3><blockquote><p>goctls &gt;= 1.5.20</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent schema <span class="token parameter variable">-h</span>

Generate an empty schema <span class="token function">file</span>

Usage:
  goctls extra ent schema <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
Flags:
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> schema
  -m, <span class="token parameter variable">--model_name</span> string   Model name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[i];function r(d,o){return a(),s("div",null,l)}const m=e(t,[["render",r],["__file","3-ent_template.html.vue"]]);export{m as default};