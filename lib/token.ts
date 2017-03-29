import * as fs from 'fs'
import * as chalk from 'chalk'

export class Token {
  private firDir = `${process.env.HOME}/.fir`
  private configPath = `${this.firDir}/config.json`
  private _token: string

  get token() {
    return this._token
  }

  set token(t) {
    this.saveToken(t)
    this._token = t
  }

  readToken(): string {
    try {
      fs.accessSync(this.configPath, fs.constants.F_OK)
    } catch (error) {
      console.error(chalk.red(error))
    }

    const configStr = fs.readFileSync(this.configPath, 'utf-8')
    const config = JSON.parse(configStr)
    return config.token
  }

  saveToken(token: string): void {
    const configJSON = JSON.stringify({ token }, null, 2)
    try {
      fs.accessSync(this.firDir, fs.constants.F_OK)
    } catch (e) {
      try {
        fs.mkdirSync(this.firDir)
      } catch (error) {
        console.error(chalk.red('save token failed'), error)
      }
    }

    try {
      fs.writeFileSync(this.configPath, configJSON, 'utf-8')
    } catch (error) {
      console.error(chalk.red('save token failed'), error)
    }
  }

  init(token?: string) {
    this.token = token || this.readToken()
  }
}

export default new Token()
