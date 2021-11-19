<template>
    <div class="markdown-body">
        <h3 id="默认">默认</h3>
        <Input />

        <pre><code class="language-vue"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ti-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;200px&quot;</span>&gt;</span><span
    class="hljs-tag"
>&lt;/<span class="hljs-name">ti-input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span
    class="language-javascript"
>
<span class="hljs-keyword">import</span> </span></span><span
    class="hljs-template-variable"
>{ ref }</span><span class="language-xml"><span class="language-javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>)
</span><span
    class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre>
        <h3 id="attributes">Attributes</h3>
        <table>
            <thead>
                <tr>
                    <th align="center">
                        <strong>属性Attribute</strong>
                    </th>
                    <th align="center">
                        <strong>描述Description</strong>
                    </th>
                    <th align="center">
                        <strong>类型Type</strong>
                    </th>
                    <th align="center">
                        <strong>值Accepted Values</strong>
                    </th>
                    <th align="center">
                        <strong>默认值</strong>Defaults
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center">placeholder</td>
                    <td align="center">占位内容</td>
                    <td align="center">string</td>
                    <td align="center">—</td>
                    <td align="center">—</td>
                </tr>
                <tr>
                    <td align="center">multiple</td>
                    <td align="center">是否多选</td>
                    <td align="center">boolean</td>
                    <td align="center">—</td>
                    <td align="center">false</td>
                </tr>
                <tr>
                    <td align="center">disabled</td>
                    <td align="center">是否禁用</td>
                    <td align="center">boolean</td>
                    <td align="center">—</td>
                    <td align="center">false</td>
                </tr>
                <tr>
                    <td align="center">width</td>
                    <td align="center">选择框宽度</td>
                    <td align="center">string</td>
                    <td align="center">&#39;100px&#39; or &#39;100%&#39;</td>
                    <td align="center">&#39;100%&#39;</td>
                </tr>
                <tr>
                    <td align="center">options</td>
                    <td align="center">选择框数据</td>
                    <td align="center">array</td>
                    <td align="center">[{value:1,label:&#39;猕猴桃&#39;}]</td>
                    <td align="center">[]</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import Input from '../examples/Input.vue'
</script>