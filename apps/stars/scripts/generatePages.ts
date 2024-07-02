import fs from 'fs'
import path from 'path'

import { projectsList } from '../src/modules/Commons/projectsList'

const generatePages = () => {
  projectsList.forEach((project) => {
    const folderName = project.link.replace('/', '')
    const folderPath = path.join(__dirname, `../src/app/${folderName}`)
    const filePath = path.join(folderPath, 'page.tsx')

    // remove numerbrs before -
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

    fs.writeFileSync(filePath, fileContent.trim(), 'utf-8')
    console.log(`Generated page: ${folderPath}`)
  })

  console.log('Pages generation completed')
}

generatePages()
