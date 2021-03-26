# Version me!

![CI pipeline](https://github.com/gevorg-martir/version-me/workflows/CI%20pipeline/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d537a378a0fef6ab1cc/maintainability)](https://codeclimate.com/github/gevorg-martir/version-me/maintainability)

## Github Action for automation release workflow.
It uses semantic release under the hood. And running on docker.

### Motivation
- To create action that could run on any repository for any language not only js.
  (That is why it is running on docker. That means action will have all dependencies)
- Action that will use .releaserc.yml provided in the repo
  (Many actions still ignoring .releaserc.yml they are forcing to provide configuration inside workflow)

### Usage
As simple as you think, just
- Add this block of code to your workflow file.
- Make sure you have **.releaserc** file in the root of the project
- Add GITHUB_TOKEN

``` yml
    - name: Create a release
    uses: gevorg-martir/version-me@v2.0.0
    env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### This action outputs two values
`version-changed: boolean` (in string format 'true' or 'false') \
`new-version: string` (example '1.4.5')

Add id to your action and you can use them for your purposes. \
See Example

```yml
    - name: Create a release
    uses: gevorg-martir/version-me@v2.0.0
    env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

    - name: Publish
    if: steps.release.outputs.version-changed == 'true'
    env:
        releaseVersion: ${{ steps.release.outputs.new-version }}
```