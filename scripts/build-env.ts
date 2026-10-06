import path from 'path'

const systemCoreBuildValue = process.env.CLASHSMETA_SYSTEM_CORE?.trim() || ''
const configuredSystemCorePath =
  systemCoreBuildValue === '1' ? '/usr/bin/mihomo' : systemCoreBuildValue
const systemServiceBuildValue = process.env.CLASHSMETA_SYSTEM_SERVICE?.trim() || ''
const configuredSystemServicePath =
  !systemServiceBuildValue || systemServiceBuildValue === '1'
    ? '/usr/bin/clashsmeta-service'
    : systemServiceBuildValue

if (
  process.platform === 'linux' &&
  configuredSystemCorePath &&
  !path.isAbsolute(configuredSystemCorePath)
) {
  throw new Error('CLASHSMETA_SYSTEM_CORE must be 1 or an absolute path')
}

if (
  process.platform === 'linux' &&
  systemCoreBuildValue &&
  !path.isAbsolute(configuredSystemServicePath)
) {
  throw new Error('CLASHSMETA_SYSTEM_SERVICE must be 1 or an absolute path')
}

export const systemCoreDefaultPath = process.platform === 'linux' ? configuredSystemCorePath : ''
export const systemCoreOnlyBuild = systemCoreDefaultPath !== ''
export const systemServicePath = systemCoreOnlyBuild ? configuredSystemServicePath : ''
