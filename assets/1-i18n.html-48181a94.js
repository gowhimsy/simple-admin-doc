import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as a}from"./app-2520fadd.js";const s={},d=a(`<h2 id="i18n-文本生成" tabindex="-1"><a class="header-anchor" href="#i18n-文本生成" aria-hidden="true">#</a> i18n 文本生成</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-i18n" tabindex="-1"><a class="header-anchor" href="#goctls-extra-i18n" aria-hidden="true">#</a> <code>goctls extra i18n</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra i18n <span class="token parameter variable">--model_name</span><span class="token operator">=</span>StudentInfo <span class="token parameter variable">--model_name_zh</span><span class="token operator">=</span>学生信息 <span class="token parameter variable">--target</span><span class="token operator">=</span>api <span class="token parameter variable">--output</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>simple-workspace<span class="token punctuation">\\</span>simple-admin-core<span class="token punctuation">\\</span>api<span class="token punctuation">\\</span>internal<span class="token punctuation">\\</span>i18n<span class="token punctuation">\\</span>locale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>model_name</td><td>是</td><td></td><td>模型名称，schema 中内部 struct 名称，如 example 中的 StudentInfo</td></tr><tr><td>model_name_zh</td><td>是</td><td></td><td>模型中文名称</td></tr><tr><td>target</td><td>是</td><td></td><td>目前支持 api, 意思是生成 api 接口的国际化文本</td></tr><tr><td>output</td><td>否</td><td></td><td>若为空则会输出至命令行，自行复制，或者设置为 <code>locale</code> 文件夹的位置，将会自动添加到对应位置</td></tr></tbody></table><blockquote><p>运行 <code>goctls extra i18n -h</code> 查看更多</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>提供 i18n 的 JSON 文本生成

用法：
  goctl extra i18n <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>

选项：
  -h, <span class="token parameter variable">--help</span>                   显示帮助信息
  -m, <span class="token parameter variable">--model_name</span> string      模型名称，应该采用驼峰命名法，例如 StudentInfo
  -z, <span class="token parameter variable">--model_name_zh</span> string   模型名称的中文翻译，例如 学生信息
  -o, <span class="token parameter variable">--output</span> string          输出目录，例如 ./i18n/locale
  -t, <span class="token parameter variable">--target</span> string          目标类型，现在仅支持 api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-的效果" tabindex="-1"><a class="header-anchor" href="#console-的效果" aria-hidden="true">#</a> console 的效果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ goctls extra i18n --model_name=StudentInfo --model_name_zh=学生信息 --target=api
        &quot;createStudentInfo&quot;: &quot;创建学生信息&quot;,
        &quot;updateStudentInfo&quot;: &quot;更新学生信息&quot;,
        &quot;deleteStudentInfo&quot;: &quot;删除学生信息&quot;,
        &quot;getStudentInfoList&quot;: &quot;获取学生信息列表&quot;,
        &quot;getStudentInfoById&quot;: &quot;通过ID获取学生信息&quot;,

        &quot;createStudentInfo&quot;: &quot;Create a student info&quot;,
        &quot;updateStudentInfo&quot;: &quot;Update the student info&quot;,
        &quot;deleteStudentInfo&quot;: &quot;Delete student infos&quot;,
        &quot;getStudentInfoList&quot;: &quot;Get student info list&quot;,
        &quot;getStudentInfoById&quot;: &quot;Get student info by ID&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[d];function o(l,r){return e(),n("div",null,i)}const p=t(s,[["render",o],["__file","1-i18n.html.vue"]]);export{p as default};