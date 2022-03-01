;(function (e, V) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = V(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], V)
    : ((e = typeof globalThis != 'undefined' ? globalThis : e || self),
      (e['tiro-ui'] = V(e.Vue)))
})(this, function (e) {
  'use strict'
  const V = '',
    _ = (t, n) => {
      const o = t.__vccOpts || t
      for (const [a, c] of n) o[a] = c
      return o
    }
  const I = { class: 'ti-button--inner' }
  const b = _(
    e.defineComponent({
      props: {
        type: { type: String, default: 'default' },
        borderRadius: { type: Number },
        disabled: { type: Boolean, default: !1 },
        size: { type: String, default: 'default' }
      },
      setup(t) {
        return (n, o) => (
          e.openBlock(),
          e.createElementBlock(
            'button',
            {
              class: e.normalizeClass([
                'ti-button',
                `ti-button--${t.type}`,
                `${t.size}`,
                t.disabled ? 'is-disabled' : ''
              ]),
              style: e.normalizeStyle(`border-radius:${t.borderRadius}px`),
              type: 'button'
            },
            [
              e.createElementVNode('div', I, [
                e.createElementVNode('span', null, [
                  e.renderSlot(n.$slots, 'default', {}, void 0, !0)
                ])
              ])
            ],
            6
          )
        )
      }
    }),
    [['__scopeId', 'data-v-bf5600a2']]
  )
  b.install = function (t) {
    t.component('TiButton', b)
  }
  const z = b
  const fe = ''
  const D = (t) => (
      e.pushScopeId('data-v-f7884f90'), (t = t()), e.popScopeId(), t
    ),
    M = { class: 'ti-card--inner' },
    X = { key: 0, class: 'ti-card--header' },
    Y = D(() => e.createElementVNode('span', null, '\u6807\u9898', -1)),
    F = { class: 'el-card__body' }
  const k = _(
    e.defineComponent({
      props: {
        tiro: { type: Boolean, default: !1 },
        shadow: { type: String, default: 'always' }
      },
      setup(t) {
        return (n, o) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            {
              class: e.normalizeClass([
                'ti-card',
                t.tiro ? 'tiro' : '',
                `${t.shadow}-shadow`
              ])
            },
            [
              e.createElementVNode('div', M, [
                n.$slots.header
                  ? (e.openBlock(),
                    e.createElementBlock('div', X, [
                      e.renderSlot(n.$slots, 'header', {}, () => [Y], !0)
                    ]))
                  : e.createCommentVNode('', !0),
                e.createElementVNode('div', F, [
                  e.renderSlot(n.$slots, 'default', {}, void 0, !0)
                ])
              ])
            ],
            2
          )
        )
      }
    }),
    [['__scopeId', 'data-v-f7884f90']]
  )
  k.install = function (t) {
    t.component('TiCard', k)
  }
  const L = k
  const ye = '',
    m = _(
      e.defineComponent({
        props: {
          name: { type: String },
          size: { type: Number },
          color: { type: String }
        },
        setup(t) {
          return (n, o) => (
            e.openBlock(),
            e.createElementBlock(
              'span',
              {
                class: e.normalizeClass(['ti-icon', t.name]),
                style: e.normalizeStyle({
                  fontSize: `${t.size}px`,
                  color: t.color
                })
              },
              null,
              6
            )
          )
        }
      }),
      [['__scopeId', 'data-v-cf3d6e46']]
    )
  ;(m.install = function (t) {
    t.component('TiIcon', m)
  }),
    (m.install = function (t) {
      t.component('TiIcon', m)
    })
  const A = m
  const ge = ''
  const R = (t) => (
      e.pushScopeId('data-v-b15b64dc'), (t = t()), e.popScopeId(), t
    ),
    j = { class: 'ti-image' },
    O = { key: 0, class: 'ti-image-error' },
    v = { key: 0 },
    q = R(() =>
      e.createElementVNode('span', null, '\u52A0\u8F7D\u5931\u8D25', -1)
    ),
    W = ['src', 'alt']
  const w = _(
    e.defineComponent({
      props: {
        url: { type: String },
        alt: { type: String },
        fit: { type: String }
      },
      emits: ['error', 'load'],
      setup(t, { emit: n }) {
        const o = e.ref(!0),
          a = (l) => {
            n('error', l), (o.value = !1)
          },
          c = (l) => {
            n('load', l), (o.value = !0)
          }
        return (l, d) => (
          e.openBlock(),
          e.createElementBlock('div', j, [
            !o.value && l.$slots.placeholder
              ? (e.openBlock(),
                e.createElementBlock('div', O, [
                  e.renderSlot(
                    l.$slots,
                    'placeholder',
                    {},
                    () => [
                      t.alt
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'span',
                            v,
                            e.toDisplayString(t.alt),
                            1
                          ))
                        : e.createCommentVNode('', !0),
                      q
                    ],
                    !0
                  )
                ]))
              : e.createCommentVNode('', !0),
            e.createElementVNode(
              'img',
              {
                class: 'ti-image--inner',
                src: t.url,
                alt: t.alt,
                style: e.normalizeStyle(`object-fit:${t.fit}`),
                onError: a,
                onLoad: c
              },
              null,
              44,
              W
            )
          ])
        )
      }
    }),
    [['__scopeId', 'data-v-b15b64dc']]
  )
  w.install = function (t) {
    t.component('TiImage', w)
  }
  const G = w
  const Se = ''
  const H = { class: 'ti-input-box' },
    J = ['type', 'placeholder', 'disabled', 'maxlength', 'value', 'minlength'],
    K = { class: 'ti-input--icon' }
  const E = _(
    e.defineComponent({
      props: {
        type: { type: String, default: 'text' },
        width: { type: String, default: '100%' },
        disabled: { type: Boolean, default: !1 },
        placeholder: { type: String, default: '\u8BF7\u8F93\u5165' },
        clearable: { type: Boolean, default: !1 },
        modelValue: { type: [String, Number] },
        borderRadius: { type: Number },
        maxlength: { type: Number },
        minlength: { type: Number }
      },
      emits: ['input', 'change', 'focus', 'blur', 'clear', 'update:modelValue'],
      setup(t, { emit: n }) {
        const o = t,
          a = e.ref(!1),
          c = e.ref('text'),
          l = { text: 'text', password: 'password' }
        e.onMounted(() => {
          c.value = o.type
        })
        const d = (u) => {
            ;(a.value = !0), n('focus', u)
          },
          h = (u) => {
            ;(a.value = !1), n('blur', u)
          },
          y = (u) => {
            const r = u.target.value
            n('change', r)
          },
          S = (u) => {
            const r = u.target.value
            n('input', r), n('update:modelValue', r)
          },
          B = () => {
            n('clear', o.modelValue), n('update:modelValue', '')
          },
          g = () => {
            c.value = c.value === l.password ? l.text : l.password
          }
        return (u, r) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            {
              class: e.normalizeClass([
                'ti-input',
                t.disabled ? 'is-disabled' : null
              ]),
              style: e.normalizeStyle(`width:${t.width}`)
            },
            [
              e.createElementVNode('div', H, [
                e.createElementVNode(
                  'input',
                  {
                    class: e.normalizeClass([
                      'ti-input--inner',
                      t.clearable ? 'is-clearable' : null,
                      t.type === l.password ? 'is-password' : null
                    ]),
                    style: e.normalizeStyle({
                      borderRadius: `${t.borderRadius}px`
                    }),
                    type: c.value,
                    placeholder: t.placeholder,
                    disabled: t.disabled,
                    maxlength: t.maxlength,
                    value: t.modelValue,
                    minlength: t.minlength,
                    onFocus: d,
                    onBlur: h,
                    onChange: y,
                    onInput: S
                  },
                  null,
                  46,
                  J
                ),
                e.createElementVNode('div', K, [
                  t.modelValue && t.clearable
                    ? (e.openBlock(),
                      e.createBlock(
                        e.unref(m),
                        {
                          key: 0,
                          class: 'icon-delete',
                          onMousedown: e.withModifiers(B, ['prevent'])
                        },
                        null,
                        8,
                        ['onMousedown']
                      ))
                    : e.createCommentVNode('', !0),
                  t.type === l.password && t.modelValue
                    ? (e.openBlock(),
                      e.createBlock(
                        e.unref(m),
                        {
                          key: 1,
                          class: 'icon-eye',
                          onMousedown: e.withModifiers(g, ['prevent'])
                        },
                        null,
                        8,
                        ['onMousedown']
                      ))
                    : e.createCommentVNode('', !0)
                ])
              ])
            ],
            6
          )
        )
      }
    }),
    [['__scopeId', 'data-v-2b79aa8b']]
  )
  E.install = function (t) {
    t.component('TiInput', E)
  }
  const P = E
  const Q = {
    mounted(t, n) {
      const { isDrag: o } = n.value
      if (!o) return
      U(t)
      const a = t.parentNode,
        { parentLeft: c, parentTop: l } = N(a)
      let d = c,
        h = l
      t.addEventListener('mousedown', (y) => {
        y.preventDefault()
        const { borderX: S, borderY: B } = N(a),
          g = y.clientX - d,
          u = y.clientY - h
        ;(document.onmousemove = function (r) {
          const s = r.clientX - g - c,
            i = r.clientY - u - l,
            f = $(s, S),
            p = $(i, B)
          a.style.transform = `translate(${f}px,${p}px)`
        }),
          (document.onmouseup = function (r) {
            const { parBorderX: s, parBorderY: i } = N(a)
            ;(d = $(r.clientX - g, s)),
              (h = $(r.clientY - u, i)),
              (this.onmousemove = null),
              (this.onmouseup = null)
          })
      })
    }
  }
  function U(t) {
    ;(t.style.cursor = 'move'), (t.style.userSelect = 'none')
  }
  function N(t) {
    const n = t.offsetLeft,
      o = t.offsetTop,
      a = [0 - n, n],
      c = [0 - o, o],
      l = [0, 2 * n],
      d = [0, 2 * o]
    return {
      parentLeft: n,
      parentTop: o,
      borderX: a,
      borderY: c,
      parBorderX: l,
      parBorderY: d
    }
  }
  function $(t, n) {
    return t < n[0] ? n[0] : t > n[1] ? n[1] : t
  }
  const Ve = ''
  const Z = ((t) => (
      e.pushScopeId('data-v-750a84a6'), (t = t()), e.popScopeId(), t
    ))(() => e.createElementVNode('div', { class: 'ti-modal-mask' }, null, -1)),
    ee = { class: 'ti-modal-warp' },
    te = { class: 'ti-modal-title' },
    ne = { class: 'title--inner' },
    oe = { class: 'ti-modal-content' },
    le = { class: 'ti-modal-footer' },
    ae = { class: 'footer--inner' }
  const C = _(
    e.defineComponent({
      props: {
        width: { type: String, default: '400px' },
        title: { type: String, default: 'Title' },
        cancelText: { type: String, default: '\u53D6\u6D88' },
        confirmText: { type: String, default: '\u786E\u5B9A' },
        modelValue: { type: Boolean, default: !1 },
        isDrag: Boolean
      },
      emits: ['close', 'cancel', 'confirm', 'update:modelValue'],
      setup(t, { emit: n }) {
        const o = () => {
            n('cancel'), n('update:modelValue', !1)
          },
          a = () => {
            n('confirm'), n('update:modelValue', !1)
          },
          c = () => {
            n('close'), n('update:modelValue', !1)
          }
        return (l, d) =>
          t.modelValue
            ? (e.openBlock(),
              e.createElementBlock(
                'div',
                {
                  key: 0,
                  class: e.normalizeClass([
                    'ti-modal',
                    t.isDrag ? 'is-drag' : ''
                  ])
                },
                [
                  Z,
                  e.createElementVNode('div', ee, [
                    e.createVNode(
                      e.Transition,
                      { name: 'modal' },
                      {
                        default: e.withCtx(() => [
                          t.modelValue
                            ? (e.openBlock(),
                              e.createElementBlock(
                                'div',
                                {
                                  key: 0,
                                  class: 'ti-modal-inner',
                                  style: e.normalizeStyle({ width: t.width })
                                },
                                [
                                  e.withDirectives(
                                    (e.openBlock(),
                                    e.createElementBlock('div', te, [
                                      e.createElementVNode(
                                        'span',
                                        ne,
                                        e.toDisplayString(t.title),
                                        1
                                      ),
                                      e.createVNode(e.unref(m), {
                                        name: 'icon-delete',
                                        size: 20,
                                        color: '#8c8c8c',
                                        onClick: c
                                      })
                                    ])),
                                    [[e.unref(Q), { isDrag: t.isDrag }]]
                                  ),
                                  e.createElementVNode('div', oe, [
                                    e.renderSlot(
                                      l.$slots,
                                      'default',
                                      {},
                                      void 0,
                                      !0
                                    )
                                  ]),
                                  e.createElementVNode('div', le, [
                                    e.createElementVNode('div', ae, [
                                      e.createVNode(
                                        e.unref(b),
                                        { onClick: o },
                                        {
                                          default: e.withCtx(() => [
                                            e.createTextVNode(
                                              e.toDisplayString(t.cancelText),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      e.createVNode(
                                        e.unref(b),
                                        { type: 'fill', onClick: a },
                                        {
                                          default: e.withCtx(() => [
                                            e.createTextVNode(
                                              e.toDisplayString(t.confirmText),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ])
                                  ])
                                ],
                                4
                              ))
                            : e.createCommentVNode('', !0)
                        ]),
                        _: 3
                      }
                    )
                  ])
                ],
                2
              ))
            : e.createCommentVNode('', !0)
      }
    }),
    [['__scopeId', 'data-v-750a84a6']]
  )
  C.install = function (t) {
    t.component('TiModal', C)
  }
  const se = C
  const we = ''
  const ce = ['value', 'placeholder', 'disabled'],
    ie = { class: 'ti-select-dropdown' },
    re = { class: 'ti-select-options ti-scrollbar' },
    de = ['onMousedown']
  const x = _(
    e.defineComponent({
      props: {
        width: { type: String, default: '100%' },
        placeholder: { type: String, default: '\u8BF7\u9009\u62E9' },
        options: { type: Array, default: () => [] },
        disabled: { type: Boolean, default: !1 },
        multiple: { type: Boolean, default: !1 },
        modelValue: { type: [String, Boolean, Number, Array], default: '' }
      },
      emits: ['select', 'update:modelValue'],
      setup(t, { emit: n }) {
        const o = t,
          a = e.ref(!1),
          c = e.ref(-1),
          l = e.ref([]),
          d = e.ref([]),
          h = () => {
            o.disabled || (a.value = !a.value)
          },
          y = () => {
            a.value && (a.value = !1)
          },
          S = (s) => {
            o.multiple ? g(s) : B(s)
          },
          B = (s) => {
            c.value = s
            const i = o.options[s].value
            n('select', i), n('update:modelValue', i)
          },
          g = (s) => {
            let p
            const i = l.value.indexOf(s)
            i === -1
              ? (l.value.push(s),
                d.value.push((p = o.options[s]) == null ? void 0 : p.value))
              : (l.value.splice(i, 1), d.value.splice(i, 1)),
              n('select', d.value),
              n('update:modelValue', d.value)
          },
          u = (s) =>
            o.multiple
              ? l.value.includes(s)
                ? 'active'
                : ''
              : c.value === s
              ? 'active'
              : '',
          r = () => {
            let s
            return o.multiple
              ? l.value.reduce((i, f) => {
                  let p
                  return `${(p = o.options[f]) == null ? void 0 : p.label}${
                    i ? ',' : ''
                  }${i}`
                }, '')
              : (s = o.options[c.value]) == null
              ? void 0
              : s.label
          }
        return (s, i) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            {
              class: e.normalizeClass([
                'ti-select',
                t.disabled ? 'is-disabled' : ''
              ]),
              style: e.normalizeStyle({ width: t.width })
            },
            [
              e.createElementVNode(
                'div',
                { class: 'ti-select-box', onClick: h },
                [
                  e.createElementVNode(
                    'input',
                    {
                      class: 'ti-select--inner',
                      type: 'text',
                      readonly: '',
                      value: r(),
                      placeholder: t.placeholder,
                      disabled: t.disabled,
                      onBlur: y,
                      onInput: i[0] || (i[0] = (f) => r())
                    },
                    null,
                    40,
                    ce
                  ),
                  e.createVNode(
                    e.unref(m),
                    {
                      class: e.normalizeClass([
                        'icon-drop-down',
                        a.value ? 'is-reserve' : ''
                      ])
                    },
                    null,
                    8,
                    ['class']
                  )
                ]
              ),
              e.withDirectives(
                e.createElementVNode(
                  'div',
                  ie,
                  [
                    e.createElementVNode('div', re, [
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(
                          t.options,
                          (f, p) => (
                            e.openBlock(),
                            e.createElementBlock(
                              'div',
                              {
                                key: f.label + f.value,
                                class: e.normalizeClass([
                                  'ti-select-option-item',
                                  u(p)
                                ]),
                                onMousedown: (Ne) => S(p)
                              },
                              e.toDisplayString(f.label),
                              43,
                              de
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  ],
                  512
                ),
                [[e.vShow, a.value]]
              )
            ],
            6
          )
        )
      }
    }),
    [['__scopeId', 'data-v-5184e421']]
  )
  x.install = function (t) {
    t.component('TiSelect', x)
  }
  const ue = x
  const T = Object.freeze({
      __proto__: null,
      [Symbol.toStringTag]: 'Module',
      TiButton: z,
      TiCard: L,
      TiIcon: A,
      TiImage: G,
      TiInput: P,
      TiModal: se,
      TiSelect: ue
    }),
    pe = {
      install: (t) => {
        for (const n in T) t.component(n, T[n])
      }
    }
  return pe
})
