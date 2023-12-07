const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, './src/assets/icons')

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err)
    process.exit(1)
  }

  files.forEach((file) => {
    if (path.extname(file) === '.tsx') {
      const filePath = path.join(directoryPath, file)

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}`, err)
          return
        }

        // Remove the attributes
        let modifiedData = data.replace(
          /xmlns="http:\/\/www.w3.org\/2000\/svg"/g,
          ''
        )
        modifiedData = modifiedData.replace(
          /xmlnsXlink="http:\/\/www.w3.org\/1999\/xlink"/g,
          ''
        )

        // Write the modified data back to the file
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing to file ${file}`, err)
          } else {
            console.log(`Processed file ${file}`)
          }
        })
      })
    }
  })
})
