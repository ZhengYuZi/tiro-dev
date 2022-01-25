const blank = {
  name: "blank",
  url: "./images/blank.png",
}
const tip = {
  name: "tip",
  url: "./images/tip.png",
}
const boom = {
  name: "boom",
  url: "./images/boom.png",
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
  }

  public rect(images, mines: number) {
    this.setScenes(images)
    this.setMines(mines)
    this.bindClick()
  }

  private setScenes(images) {
    const total = this.row * this.column
    for (let index = 0; index < total; index++) {
      const randomPlant = Math.round(Math.random() * (images.length - 1))
      const img = new Image()
      img.src = images[randomPlant].url
      const row = index < this.column ? 0 : Math.floor(index / this.column)
      const column = index % this.column
      img.onload = () => {
        this.ctx.drawImage(
          img,
          row * this.squareWidth,
          column * this.squareWidth
        )
        area[`${row}${column}`] = images[randomPlant].url
      }
    }
  }

  private setMines(mines: number) {
    while (Mines.length < mines) {
      const x = Math.round(Math.random() * (this.row - 1))
      const y = Math.round(Math.random() * (this.column - 1))
      const item = `${x}${y}`
      if (Mines.indexOf(item) === -1) {
        Mines.push(item)
        area[item] = boom.url
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

    if (area[`${x}${y}`] === blank.url) {
      return
    }

    if (e.type === "click") {
      this.clickBoom(x, y)
    } else if (e.type === "contextmenu") {
      this.tipBoom(x, y)
    }
  }

  private clickBoom = (x, y) => {
    const img = new Image()
    if (Mines.includes(`${x}${y}`)) {
      img.src = boom.url
      img.onload = () => {
        this.ctx.drawImage(img, x * this.squareWidth, y * this.squareWidth)
        console.log("游戏结束")
      }
      return
    }
    const findBoom = (x, y) => {
      img.src = blank.url
      area[`${x}${y}`] = blank.url
      const aroundBoomNum = this.aroundBoom(x, y)
      // if (x < this.row && y < this.column) {
        
      // }
      img.onload = () => {
        this.ctx.drawImage(img, x * this.squareWidth, y * this.squareWidth)
        if(!aroundBoomNum) {
          console.log(1);
        }
      }
    }

    findBoom(x, y)
  }

  private tipBoom = (x, y) => {
    const img = new Image()
    if (tips[`${x}${y}`]) {
      img.src = area[`${x}${y}`]
      tips[`${x}${y}`] = null
    } else {
      img.src = tip.url
      tips[`${x}${y}`] = tip.url
    }
    img.onload = () => {
      this.ctx.drawImage(img, x * this.squareWidth, y * this.squareWidth)
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
