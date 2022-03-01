import {
  defineComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  normalizeStyle,
  createElementVNode,
  renderSlot,
  createCommentVNode,
  pushScopeId,
  popScopeId,
  ref,
  toDisplayString,
  onMounted,
  createBlock,
  unref,
  withModifiers,
  createVNode,
  Transition,
  withCtx,
  withDirectives,
  createTextVNode,
  Fragment,
  renderList,
  vShow
} from 'vue'
const Button_vue_vue_type_style_index_0_scoped_true_lang = ''
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc
  for (const [key, val] of props) {
    target[key] = val
  }
  return target
}
const _hoisted_1$5 = { class: 'ti-button--inner' }
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    borderRadius: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'button',
          {
            class: normalizeClass([
              'ti-button',
              `ti-button--${__props.type}`,
              `${__props.size}`,
              __props.disabled ? 'is-disabled' : ''
            ]),
            style: normalizeStyle(`border-radius:${__props.borderRadius}px`),
            type: 'button'
          },
          [
            createElementVNode('div', _hoisted_1$5, [
              createElementVNode('span', null, [
                renderSlot(_ctx.$slots, 'default', {}, void 0, true)
              ])
            ])
          ],
          6
        )
      )
    }
  }
})
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$6, [
  ['__scopeId', 'data-v-bf5600a2']
])
Button.install = function (app) {
  app.component('TiButton', Button)
}
const TiButton = Button
const Card_vue_vue_type_style_index_0_scoped_true_lang = ''
const _withScopeId$2 = (n) => (
  pushScopeId('data-v-f7884f90'), (n = n()), popScopeId(), n
)
const _hoisted_1$4 = { class: 'ti-card--inner' }
const _hoisted_2$4 = {
  key: 0,
  class: 'ti-card--header'
}
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$2(() =>
  /* @__PURE__ */ createElementVNode('span', null, '\u6807\u9898', -1)
)
const _hoisted_4$3 = { class: 'el-card__body' }
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    tiro: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: String,
      default: 'always'
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'div',
          {
            class: normalizeClass([
              'ti-card',
              __props.tiro ? 'tiro' : '',
              `${__props.shadow}-shadow`
            ])
          },
          [
            createElementVNode('div', _hoisted_1$4, [
              _ctx.$slots.header
                ? (openBlock(),
                  createElementBlock('div', _hoisted_2$4, [
                    renderSlot(
                      _ctx.$slots,
                      'header',
                      {},
                      () => [_hoisted_3$4],
                      true
                    )
                  ]))
                : createCommentVNode('', true),
              createElementVNode('div', _hoisted_4$3, [
                renderSlot(_ctx.$slots, 'default', {}, void 0, true)
              ])
            ])
          ],
          2
        )
      )
    }
  }
})
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$5, [
  ['__scopeId', 'data-v-f7884f90']
])
Card.install = function (app) {
  app.component('TiCard', Card)
}
const TiCard = Card
const index_vue_vue_type_style_index_0_scoped_true_lang = ''
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    name: {
      type: String
    },
    size: {
      type: Number
    },
    color: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'span',
          {
            class: normalizeClass(['ti-icon', __props.name]),
            style: normalizeStyle({
              fontSize: `${__props.size}px`,
              color: __props.color
            })
          },
          null,
          6
        )
      )
    }
  }
})
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [
  ['__scopeId', 'data-v-cf3d6e46']
])
Icon.install = function (app) {
  app.component('TiIcon', Icon)
}
Icon.install = function (app) {
  app.component('TiIcon', Icon)
}
const TiIcon = Icon
const Image_vue_vue_type_style_index_0_scoped_true_lang = ''
const _withScopeId$1 = (n) => (
  pushScopeId('data-v-b15b64dc'), (n = n()), popScopeId(), n
)
const _hoisted_1$3 = { class: 'ti-image' }
const _hoisted_2$3 = {
  key: 0,
  class: 'ti-image-error'
}
const _hoisted_3$3 = { key: 0 }
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() =>
  /* @__PURE__ */ createElementVNode(
    'span',
    null,
    '\u52A0\u8F7D\u5931\u8D25',
    -1
  )
)
const _hoisted_5$1 = ['src', 'alt']
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    url: {
      type: String
    },
    alt: {
      type: String
    },
    fit: {
      type: String
    }
  },
  emits: ['error', 'load'],
  setup(__props, { emit }) {
    const isLoading = ref(true)
    const imgError = (e) => {
      emit('error', e)
      isLoading.value = false
    }
    const imgLoad = (e) => {
      emit('load', e)
      isLoading.value = true
    }
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock('div', _hoisted_1$3, [
          !isLoading.value && _ctx.$slots.placeholder
            ? (openBlock(),
              createElementBlock('div', _hoisted_2$3, [
                renderSlot(
                  _ctx.$slots,
                  'placeholder',
                  {},
                  () => [
                    __props.alt
                      ? (openBlock(),
                        createElementBlock(
                          'span',
                          _hoisted_3$3,
                          toDisplayString(__props.alt),
                          1
                        ))
                      : createCommentVNode('', true),
                    _hoisted_4$2
                  ],
                  true
                )
              ]))
            : createCommentVNode('', true),
          createElementVNode(
            'img',
            {
              class: 'ti-image--inner',
              src: __props.url,
              alt: __props.alt,
              style: normalizeStyle(`object-fit:${__props.fit}`),
              onError: imgError,
              onLoad: imgLoad
            },
            null,
            44,
            _hoisted_5$1
          )
        ])
      )
    }
  }
})
const Image = /* @__PURE__ */ _export_sfc(_sfc_main$3, [
  ['__scopeId', 'data-v-b15b64dc']
])
Image.install = function (app) {
  app.component('TiImage', Image)
}
const TiImage = Image
const Input_vue_vue_type_style_index_0_scoped_true_lang = ''
const _hoisted_1$2 = { class: 'ti-input-box' }
const _hoisted_2$2 = [
  'type',
  'placeholder',
  'disabled',
  'maxlength',
  'value',
  'minlength'
]
const _hoisted_3$2 = { class: 'ti-input--icon' }
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    width: {
      type: String,
      default: '100%'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '\u8BF7\u8F93\u5165'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number]
    },
    borderRadius: {
      type: Number
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    }
  },
  emits: ['input', 'change', 'focus', 'blur', 'clear', 'update:modelValue'],
  setup(__props, { emit }) {
    const props = __props
    const clearIsShow = ref(false)
    const inputType = ref('text')
    const types = {
      text: 'text',
      password: 'password'
    }
    onMounted(() => {
      inputType.value = props.type
    })
    const inputFocus = (e) => {
      clearIsShow.value = true
      emit('focus', e)
    }
    const inputBlur = (e) => {
      clearIsShow.value = false
      emit('blur', e)
    }
    const inputChange = (e) => {
      const value = e.target.value
      emit('change', value)
    }
    const inputEnter = (e) => {
      const value = e.target.value
      emit('input', value)
      emit('update:modelValue', value)
    }
    const clearValue = () => {
      emit('clear', props.modelValue)
      emit('update:modelValue', '')
    }
    const showWord = () => {
      inputType.value =
        inputType.value === types.password ? types.text : types.password
    }
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'div',
          {
            class: normalizeClass([
              'ti-input',
              __props.disabled ? 'is-disabled' : null
            ]),
            style: normalizeStyle(`width:${__props.width}`)
          },
          [
            createElementVNode('div', _hoisted_1$2, [
              createElementVNode(
                'input',
                {
                  class: normalizeClass([
                    'ti-input--inner',
                    __props.clearable ? 'is-clearable' : null,
                    __props.type === types.password ? 'is-password' : null
                  ]),
                  style: normalizeStyle({
                    borderRadius: `${__props.borderRadius}px`
                  }),
                  type: inputType.value,
                  placeholder: __props.placeholder,
                  disabled: __props.disabled,
                  maxlength: __props.maxlength,
                  value: __props.modelValue,
                  minlength: __props.minlength,
                  onFocus: inputFocus,
                  onBlur: inputBlur,
                  onChange: inputChange,
                  onInput: inputEnter
                },
                null,
                46,
                _hoisted_2$2
              ),
              createElementVNode('div', _hoisted_3$2, [
                __props.modelValue && __props.clearable
                  ? (openBlock(),
                    createBlock(
                      unref(Icon),
                      {
                        key: 0,
                        class: 'icon-delete',
                        onMousedown: withModifiers(clearValue, ['prevent'])
                      },
                      null,
                      8,
                      ['onMousedown']
                    ))
                  : createCommentVNode('', true),
                __props.type === types.password && __props.modelValue
                  ? (openBlock(),
                    createBlock(
                      unref(Icon),
                      {
                        key: 1,
                        class: 'icon-eye',
                        onMousedown: withModifiers(showWord, ['prevent'])
                      },
                      null,
                      8,
                      ['onMousedown']
                    ))
                  : createCommentVNode('', true)
              ])
            ])
          ],
          6
        )
      )
    }
  }
})
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
  ['__scopeId', 'data-v-2b79aa8b']
])
Input.install = function (app) {
  app.component('TiInput', Input)
}
const TiInput = Input
const vDrag = {
  mounted(el, binding) {
    const { isDrag } = binding.value
    if (!isDrag) return
    changeStyle(el)
    const parentEl = el.parentNode
    const { parentLeft, parentTop } = getData(parentEl)
    let parentX = parentLeft
    let parentY = parentTop
    el.addEventListener('mousedown', (e) => {
      e.preventDefault()
      const { borderX, borderY } = getData(parentEl)
      const diffX = e.clientX - parentX
      const diffY = e.clientY - parentY
      document.onmousemove = function (event) {
        const x = event.clientX - diffX - parentLeft
        const y = event.clientY - diffY - parentTop
        const moveX = isBorder(x, borderX)
        const moveY = isBorder(y, borderY)
        parentEl.style.transform = `translate(${moveX}px,${moveY}px)`
      }
      document.onmouseup = function (event) {
        const { parBorderX, parBorderY } = getData(parentEl)
        parentX = isBorder(event.clientX - diffX, parBorderX)
        parentY = isBorder(event.clientY - diffY, parBorderY)
        this.onmousemove = null
        this.onmouseup = null
      }
    })
  }
}
function changeStyle(el) {
  el.style.cursor = 'move'
  el.style.userSelect = 'none'
}
function getData(parentEl) {
  const parentLeft = parentEl.offsetLeft
  const parentTop = parentEl.offsetTop
  const borderX = [0 - parentLeft, parentLeft]
  const borderY = [0 - parentTop, parentTop]
  const parBorderX = [0, 2 * parentLeft]
  const parBorderY = [0, 2 * parentTop]
  return { parentLeft, parentTop, borderX, borderY, parBorderX, parBorderY }
}
function isBorder(site, border) {
  if (site < border[0]) return border[0]
  else if (site > border[1]) return border[1]
  return site
}
const Modal_vue_vue_type_style_index_0_scoped_true_lang = ''
const _withScopeId = (n) => (
  pushScopeId('data-v-750a84a6'), (n = n()), popScopeId(), n
)
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() =>
  /* @__PURE__ */ createElementVNode(
    'div',
    { class: 'ti-modal-mask' },
    null,
    -1
  )
)
const _hoisted_2$1 = { class: 'ti-modal-warp' }
const _hoisted_3$1 = { class: 'ti-modal-title' }
const _hoisted_4$1 = { class: 'title--inner' }
const _hoisted_5 = { class: 'ti-modal-content' }
const _hoisted_6 = { class: 'ti-modal-footer' }
const _hoisted_7 = { class: 'footer--inner' }
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    width: {
      type: String,
      default: '400px'
    },
    title: {
      type: String,
      default: 'Title'
    },
    cancelText: {
      type: String,
      default: '\u53D6\u6D88'
    },
    confirmText: {
      type: String,
      default: '\u786E\u5B9A'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    isDrag: Boolean
  },
  emits: ['close', 'cancel', 'confirm', 'update:modelValue'],
  setup(__props, { emit }) {
    const bindCancel = () => {
      emit('cancel')
      emit('update:modelValue', false)
    }
    const bindConfirm = () => {
      emit('confirm')
      emit('update:modelValue', false)
    }
    const bindClose = () => {
      emit('close')
      emit('update:modelValue', false)
    }
    return (_ctx, _cache) => {
      return __props.modelValue
        ? (openBlock(),
          createElementBlock(
            'div',
            {
              key: 0,
              class: normalizeClass([
                'ti-modal',
                __props.isDrag ? 'is-drag' : ''
              ])
            },
            [
              _hoisted_1$1,
              createElementVNode('div', _hoisted_2$1, [
                createVNode(
                  Transition,
                  { name: 'modal' },
                  {
                    default: withCtx(() => [
                      __props.modelValue
                        ? (openBlock(),
                          createElementBlock(
                            'div',
                            {
                              key: 0,
                              class: 'ti-modal-inner',
                              style: normalizeStyle({ width: __props.width })
                            },
                            [
                              withDirectives(
                                (openBlock(),
                                createElementBlock('div', _hoisted_3$1, [
                                  createElementVNode(
                                    'span',
                                    _hoisted_4$1,
                                    toDisplayString(__props.title),
                                    1
                                  ),
                                  createVNode(unref(Icon), {
                                    name: 'icon-delete',
                                    size: 20,
                                    color: '#8c8c8c',
                                    onClick: bindClose
                                  })
                                ])),
                                [[unref(vDrag), { isDrag: __props.isDrag }]]
                              ),
                              createElementVNode('div', _hoisted_5, [
                                renderSlot(
                                  _ctx.$slots,
                                  'default',
                                  {},
                                  void 0,
                                  true
                                )
                              ]),
                              createElementVNode('div', _hoisted_6, [
                                createElementVNode('div', _hoisted_7, [
                                  createVNode(
                                    unref(Button),
                                    { onClick: bindCancel },
                                    {
                                      default: withCtx(() => [
                                        createTextVNode(
                                          toDisplayString(__props.cancelText),
                                          1
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  createVNode(
                                    unref(Button),
                                    {
                                      type: 'fill',
                                      onClick: bindConfirm
                                    },
                                    {
                                      default: withCtx(() => [
                                        createTextVNode(
                                          toDisplayString(__props.confirmText),
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
                        : createCommentVNode('', true)
                    ]),
                    _: 3
                  }
                )
              ])
            ],
            2
          ))
        : createCommentVNode('', true)
    }
  }
})
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ['__scopeId', 'data-v-750a84a6']
])
Modal.install = function (app) {
  app.component('TiModal', Modal)
}
const TiModal = Modal
const Select_vue_vue_type_style_index_0_scoped_true_lang = ''
const _hoisted_1 = ['value', 'placeholder', 'disabled']
const _hoisted_2 = { class: 'ti-select-dropdown' }
const _hoisted_3 = { class: 'ti-select-options ti-scrollbar' }
const _hoisted_4 = ['onMousedown']
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    placeholder: {
      type: String,
      default: '\u8BF7\u9009\u62E9'
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Boolean, Number, Array],
      default: ''
    }
  },
  emits: ['select', 'update:modelValue'],
  setup(__props, { emit }) {
    const props = __props
    const isFocus = ref(false)
    const isActive = ref(-1)
    const actives = ref([])
    const activesValue = ref([])
    const downArrowTurn = () => {
      if (props.disabled) return
      isFocus.value = !isFocus.value
    }
    const handleBlur = () => {
      if (isFocus.value) isFocus.value = false
    }
    const handleSelect = (index2) => {
      props.multiple ? multipleSelect(index2) : singleSelect(index2)
    }
    const singleSelect = (index2) => {
      isActive.value = index2
      const select = props.options[index2].value
      emit('select', select)
      emit('update:modelValue', select)
    }
    const multipleSelect = (index2) => {
      let _a
      const activeIndex = actives.value.indexOf(index2)
      const notExist = -1
      if (activeIndex === notExist) {
        actives.value.push(index2)
        activesValue.value.push(
          (_a = props.options[index2]) == null ? void 0 : _a.value
        )
      } else {
        actives.value.splice(activeIndex, 1)
        activesValue.value.splice(activeIndex, 1)
      }
      emit('select', activesValue.value)
      emit('update:modelValue', activesValue.value)
    }
    const handleActive = (index2) => {
      if (!props.multiple) return isActive.value === index2 ? 'active' : ''
      return actives.value.includes(index2) ? 'active' : ''
    }
    const inputValue = () => {
      let _a
      if (!props.multiple)
        return (_a = props.options[isActive.value]) == null ? void 0 : _a.label
      return actives.value.reduce((total, item) => {
        let _a2
        return `${(_a2 = props.options[item]) == null ? void 0 : _a2.label}${
          total ? ',' : ''
        }${total}`
      }, '')
    }
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          'div',
          {
            class: normalizeClass([
              'ti-select',
              __props.disabled ? 'is-disabled' : ''
            ]),
            style: normalizeStyle({ width: __props.width })
          },
          [
            createElementVNode(
              'div',
              {
                class: 'ti-select-box',
                onClick: downArrowTurn
              },
              [
                createElementVNode(
                  'input',
                  {
                    class: 'ti-select--inner',
                    type: 'text',
                    readonly: '',
                    value: inputValue(),
                    placeholder: __props.placeholder,
                    disabled: __props.disabled,
                    onBlur: handleBlur,
                    onInput: _cache[0] || (_cache[0] = ($event) => inputValue())
                  },
                  null,
                  40,
                  _hoisted_1
                ),
                createVNode(
                  unref(Icon),
                  {
                    class: normalizeClass([
                      'icon-drop-down',
                      isFocus.value ? 'is-reserve' : ''
                    ])
                  },
                  null,
                  8,
                  ['class']
                )
              ]
            ),
            withDirectives(
              createElementVNode(
                'div',
                _hoisted_2,
                [
                  createElementVNode('div', _hoisted_3, [
                    (openBlock(true),
                    createElementBlock(
                      Fragment,
                      null,
                      renderList(__props.options, (item, index2) => {
                        return (
                          openBlock(),
                          createElementBlock(
                            'div',
                            {
                              key: item.label + item.value,
                              class: normalizeClass([
                                'ti-select-option-item',
                                handleActive(index2)
                              ]),
                              onMousedown: ($event) => handleSelect(index2)
                            },
                            toDisplayString(item.label),
                            43,
                            _hoisted_4
                          )
                        )
                      }),
                      128
                    ))
                  ])
                ],
                512
              ),
              [[vShow, isFocus.value]]
            )
          ],
          6
        )
      )
    }
  }
})
const Select = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['__scopeId', 'data-v-5184e421']
])
Select.install = function (app) {
  app.component('TiSelect', Select)
}
const TiSelect = Select
const component = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  TiButton,
  TiCard,
  TiIcon,
  TiImage,
  TiInput,
  TiModal,
  TiSelect
})
const index = {
  install: (app) => {
    for (const key in component) {
      app.component(key, component[key])
    }
  }
}
export { index as default }
