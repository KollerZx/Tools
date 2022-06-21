import fs from "fs/promises"
import path from "path"
export const exportToCsv = (data: any[]) => {
    const csvRows = []
    const headers = Object.keys(data[0])
    csvRows.push(headers.join(','))

    for (const row of data) {
        const values = headers.map(header => {
            const escaped = String(row[header]).replace(/"/g, '\\"')
            return `"${escaped}"`
        })
        csvRows.push(values.join(','))
    }

    return csvRows.join('\n')
}

export const saveCsv = async (csv: string, filename: string) => {
    const filePath = path.resolve('/', 'tmp', `${filename}.csv`)
    await fs.writeFile(filePath, csv)
}