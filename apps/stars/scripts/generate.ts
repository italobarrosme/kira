import fs from 'fs'
import path from 'path'

import { projectsList } from '../src/modules/Commons/projectsList'

const formatCapitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const generateModules = () => {
  projectsList.forEach((project) => {
    const folderName = project.link.replace('/', '')
    const folderPath = path.join(
      __dirname,
      `../src/modules/${folderName}-app/app`
    )

    const entrypointName =
      folderName.replace(/\d+-/, '').charAt(0).toUpperCase() +
      folderName.replace(/\d+-/, '').slice(1)

    const filePath = path.join(
      folderPath,
      `${formatCapitalize(entrypointName)}.tsx`
    )

    const fileContent = `export const ${formatCapitalize(entrypointName)} = () => {
      return (
        <div>
          <h1>${formatCapitalize(entrypointName)}</h1>
        </div>
      )
    }
    `

    const indexEntryPointFilePath = path.join(
      __dirname,
      `../src/modules/${folderName}-app/index.ts`
    )
    const indexEntryPointFileContent = `export { ${formatCapitalize(entrypointName)} } from './app/${formatCapitalize(entrypointName)}'`

    const indexFile = path.join(
      __dirname,
      `../src/modules/${folderName}-app/app/index.ts`
    )

    const indexFileContent = `export { ${formatCapitalize(entrypointName)} } from './${formatCapitalize(entrypointName)}'`

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, fileContent.trim(), 'utf-8')
    }

    if (!fs.existsSync(indexFile)) {
      fs.writeFileSync(indexFile, indexFileContent.trim(), 'utf-8')
    }

    if (!fs.existsSync(indexEntryPointFilePath)) {
      fs.writeFileSync(
        indexEntryPointFilePath,
        indexEntryPointFileContent.trim(),
        'utf-8'
      )
    }

    console.log(`Generated module: ${folderPath}`)
  })

  console.log('Modules generation completed')
}

const generatePages = () => {
  projectsList.forEach((project) => {
    const folderName = project.link.replace('/', '')
    const folderPath = path.join(__dirname, `../src/app/${folderName}`)
    const filePath = path.join(folderPath, 'page.tsx')

    const componentName =
      folderName.replace(/\d+-/, '').charAt(0).toUpperCase() +
      folderName.replace(/\d+-/, '').slice(1)
    const importPath = `../../modules/${folderName}-app`

    const fileContent = `import { ${componentName} } from '${importPath}';

    export default function ${componentName}Page() {
      return (
        <div className="sm:flex w-screen h-screen gap-4 p-9">
          <${componentName} />
        </div>
      );
    }
    `

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, fileContent.trim(), 'utf-8')
    }
  })

  console.log('Pages generation completed')
}

generatePages()
generateModules()
