# node-fir

```
npm i node-fir
fir -h
fir -p /path/to/APP.apk -v version -b build -c /path/to/.fir/config.json --changelog changelog

$HOME/.fir/config.json
config = {
  "token": "fir api token",
  "name": "APP Name",
  "bundle_id": "package name"
}

Options:
  -c, --config   config path, default is: $HOME/.fir/config.json
  -p, --apkPath  the absolute path of apk you want to publish to fir.im
  -n, --name     应用名称
  -v, --version  版本号                                         [default: "1.0"]
  -b, --build    Build 号                                         [default: "1"]
  -h, --help     Show help                                             [boolean]
```
