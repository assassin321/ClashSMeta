import yaml from 'yaml'
import { readFileSync, writeFileSync } from 'fs'

const pkg = readFileSync('package.json', 'utf-8')
let changelog = readFileSync('changelog.md', 'utf-8')
const { version } = JSON.parse(pkg)
const tag = process.env.RELEASE_TAG || version
const downloadUrl = `https://github.com/assassin321/ClashSMeta/releases/download/${tag}`
const latest = {
  version,
  tag,
  changelog
}

if (process.env.SKIP_CHANGELOG !== '1') {
  changelog += '\n>**注意：** 如果软件无法正常双击打开，请右键以管理员身份运行。\n\n'
  changelog += '\n### 下载地址：\n\n#### Windows10/11：\n\n'
  changelog += `- 安装版：[64 位](${downloadUrl}/ClashSMeta-windows-${version}-x64-setup.exe) | [ARM64](${downloadUrl}/ClashSMeta-windows-${version}-arm64-setup.exe)\n\n`
  changelog += '\n#### macOS 11+:\n\n'
  changelog += `- PKG：[Intel](${downloadUrl}/ClashSMeta-macos-${version}-x64.pkg) | [Apple Silicon](${downloadUrl}/ClashSMeta-macos-${version}-arm64.pkg)\n\n`
  changelog += '\n#### Linux:\n\n'
  changelog += `- DEB：[64 位](${downloadUrl}/ClashSMeta-linux-${version}-amd64.deb) | [ARM64](${downloadUrl}/ClashSMeta-linux-${version}-arm64.deb) | [loong64](${downloadUrl}/ClashSMeta-linux-${version}-loong64.deb)\n\n`
  changelog += `- RPM：[64 位](${downloadUrl}/ClashSMeta-linux-${version}-x86_64.rpm) | [ARM64](${downloadUrl}/ClashSMeta-linux-${version}-aarch64.rpm) | [loong64](${downloadUrl}/ClashSMeta-linux-${version}-loongarch64.rpm)\n\n`
  changelog += `- PACMAN：[64 位](${downloadUrl}/ClashSMeta-linux-${version}-x64.pkg.tar.zst) | [ARM64](${downloadUrl}/ClashSMeta-linux-${version}-aarch64.pkg.tar.zst) | [loong64](${downloadUrl}/ClashSMeta-linux-${version}-loong64.pkg.tar.zst)`
}
writeFileSync('latest.yml', yaml.stringify(latest))
writeFileSync('changelog.md', changelog)
