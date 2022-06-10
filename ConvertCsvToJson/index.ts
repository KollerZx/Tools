import csvTojson from 'csvtojson';
import { writeFile } from 'fs/promises';
import path from 'path';

export /**
    * As pastas "uploads/csv" e "data" devem ser criadas manualmente
    * O arquivo csv deve estar na pasta "uploads/csv"
    * O arquivo json gerado será salvo na pasta "data"

    * @description Converte um arquivo csv para um arquivo json
    * @param {string} filename - Nome do arquivo que será convertido
    * @returns {Promise<void>} 
    * 
*/
    const convertCsvToJson = async (filename: string) => {
        const csv = path.resolve(__dirname, 'uploads', 'csv', filename)
        const json = await csvTojson().fromFile(csv)
        const newFilename = filename.split('.').slice(0, -1) + '.json'
        await writeFile(path.resolve(__dirname, 'data', newFilename), JSON.stringify(json));
    }
