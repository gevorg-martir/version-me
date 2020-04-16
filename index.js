const semanticRelease = require('semantic-release')
const core = require('@actions/core')

const run = async () => {
  try {
    let nextVersion = null
    let versionChanged = false
    const result = await semanticRelease()

    if (result) {
      versionChanged = true
      nextVersion = result.nextRelease.version
    }

    core.setOutput('new-version', String(nextVersion))
    core.setOutput('version-changed', String(versionChanged))
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
