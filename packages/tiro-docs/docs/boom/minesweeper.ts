const blank = {
  name: "blank",
}

const area = {}
const tips = {}
let Mines = []

class Minesweeper {
  public row: number
  public column: number
  public squareWidth?: number
  public el: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  constructor(row, column, squareWidth = 32) {
    this.row = row
    this.column = column
    this.squareWidth = squareWidth
    this.el = document.getElementById("minesweeper") as HTMLCanvasElement
    this.ctx = this.el.getContext("2d")
    this.init()
  }

  private init() {
    this.el.width = this.row * this.squareWidth
    this.el.height = this.column * this.squareWidth
    this.el.style.border = '5px solid #476582'
    this.el.style.boxShadow = '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)'
  }

  public rect(mines: number) {
    this.setScenes()
    this.setMines(mines)
    this.bindClick()
  }

  private drawSquare(x, y) {
    this.ctx.fillStyle = '#ccc'
    this.ctx.fillRect(x * this.squareWidth + 1, y * this.squareWidth + 1, this.squareWidth-2, this.squareWidth-2)
  }

  //生成文字
  private drawText(text, x, y, fontSize = 18) {
    this.ctx.font = `${fontSize}px bold 黑体`
    this.ctx.fillStyle = "#476582"
    this.ctx.textAlign = "center"
    this.ctx.textBaseline = "middle"
    this.ctx.fillText(
      `${text}`,
      x * this.squareWidth + this.squareWidth / 2,
      y * this.squareWidth + this.squareWidth / 2
    )
  }

  //加载素材
  private setScenes() {
    const total = this.row * this.column

    for (let index = 0; index < total; index++) {
      //根据index获取每个方格的横向与纵向的序号
      const row = index < this.column ? 0 : Math.floor(index / this.column)
      const column = index % this.column
      //生成图片
      this.drawSquare(row, column)
    }
  }

  //加载地雷
  private setMines(mines: number) {
    while (Mines.length < mines) {
      const x = Math.round(Math.random() * (this.row - 1))
      const y = Math.round(Math.random() * (this.column - 1))
      const item = `${x}${y}`
      if (Mines.indexOf(item) === -1) {
        Mines.push(item)
      }
    }
  }

  private bindClick() {
    this.el.addEventListener("click", this.clearBoom.bind(this), false)
    this.el.addEventListener("contextmenu", this.clearBoom.bind(this), false)
  }

  private clearBoom(e) {
    e.preventDefault()
    const x = Math.floor(e.offsetX / this.squareWidth)
    const y = Math.floor(e.offsetY / this.squareWidth)

    if (area[`${x}${y}`] === blank.name) {
      return
    }

    if (e.type === "click") {
      this.clickBoom(x, y)
    } else if (e.type === "contextmenu") {
      this.tipBoom(x, y)
    }
  }

  private clickBoom = (x, y) => {
    //如果是雷
    if (Mines.includes(`${x}${y}`)) {
      this.ctx.clearRect(
        x * this.squareWidth,
        y * this.squareWidth,
        this.squareWidth,
        this.squareWidth
      )
      this.drawText('☠', x, y, 25)
      area[`${x}${y}`] = 'boom'
      console.log('GAME OVER!!!')
      return
    }
    //不是雷
    this.findBoom(x, y)
  }

  private findBoom = (x, y) => {
    if (x < 0 || x > this.row - 1) return
    if (y < 0 || y > this.column - 1) return
    if (area[`${x}${y}`] === blank.name) return

    //清除素材
    this.ctx.clearRect(
      x * this.squareWidth,
      y * this.squareWidth,
      this.squareWidth,
      this.squareWidth
    )
    area[`${x}${y}`] = blank.name //设置area当前位置已点击
    const aroundBoomNum = this.aroundBoom(x, y) //寻找周围有几颗雷
    this.drawText(aroundBoomNum, x, y) //显示周围雷数量

    if (!aroundBoomNum) {
      this.findBoom(x + 1, y)
      this.findBoom(x - 1, y)
      this.findBoom(x, y - 1)
      this.findBoom(x, y + 1)
    }
  }

  private tipBoom = (x, y) => {
    if (area[`${x}${y}`] === 'boom') return
    if (tips[`${x}${y}`]) {
      this.drawSquare(x, y)
      tips[`${x}${y}`] = null
    } else {
      this.drawText('★', x, y, 25)
      tips[`${x}${y}`] = 'tip'
    }
  }

  private aroundBoom = (x, y) => {
    return [
      `${x + 1}${y}`,
      `${x - 1}${y}`,
      `${x}${y + 1}`,
      `${x}${y - 1}`,
      `${x + 1}${y + 1}`,
      `${x - 1}${y - 1}`,
      `${x - 1}${y + 1}`,
      `${x + 1}${y - 1}`,
    ].reduce((total, item) => {
      if (Mines.includes(item)) {
        return total + 1
      }
      return total
    }, 0)
  }
}

export default Minesweeper
