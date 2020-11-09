import Vue from 'vue'

/// 存储
const globalConextMenu = {
  menu: null
}

const getMousePos = e => {
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop
  var x = e.pageX || e.clientX - scrollX
  var y = e.pageY || e.clientY - scrollY
  return { x: x, y: y }
}

// 关闭contextMenu
const closeContextMenu = e => {
  if (globalConextMenu.menu) {
    document.body.removeChild(globalConextMenu.menu)
    globalConextMenu.menu = null
  }
  document.body.removeEventListener('click', closeContextMenuEvent)
}

const closeContextMenuEvent = e => {
  if (e.path && e.path.findIndex(el => el === globalConextMenu.menu) <= 0) {
    closeContextMenu()
  }
}

const bindStyles = (styles, el) => {
  Object.keys(styles).forEach(key => {
    el.style[key] = styles[key]
  })
}

const contextMenu = options => {
  const { component, props, event, offsets } = {
    ...{
      offsets: {
        x: 10,
        y: 0
      }
    },
    ...options
  }
  const instance = new Vue(component)
  const { x, y } = getMousePos(event)
  if (props) {
    Object.keys(props).forEach(prop => {
      instance[prop] = props[prop]
    })
  }
  instance.$mount()
  const positionY = y + 10
  bindStyles(
    {
      left: `${x + offsets.x}px`,
      top: `${positionY + offsets.y}px`,
      position: 'fixed',
      zIndex: 1002,
      opacity: 0
    },
    instance.$el
  )
  // 删除已有的菜单
  if (globalConextMenu.menu) {
    document.body.removeChild(globalConextMenu.menu)
    globalConextMenu.menu = null
  }
  globalConextMenu.menu = instance.$el
  document.body.appendChild(instance.$el)
  const contextMenuHeight = instance.$el.offsetHeight
  const contextMenuWidth = instance.$el.offsetWidth
  const screenHeight = document.body.clientHeight
  const screenWidth = document.body.clientWidth
  // 鼠标上下都不够高度
  if (screenHeight - positionY < contextMenuHeight + offsets.y) {
    if (positionY < contextMenuHeight + offsets.y) {
      instance.$el.style.top = `${screenHeight -
        contextMenuHeight -
        offsets.y}px`
    } else {
      instance.$el.style.top = `${positionY - contextMenuHeight - offsets.y}px`
    }
  }
  if (screenWidth - x < contextMenuWidth) {
    instance.$el.style.left = `${x - contextMenuWidth - offsets.x}px`
  }
  instance.$el.style.opacity = 1
  instance.$on('onClose', () => {
    closeContextMenu()
  })
  document.body.addEventListener('click', closeContextMenuEvent)
}

Vue.prototype.$contextMenu = contextMenu
