import fs from 'fs'
import path from 'path'

/** Transforma a imagem em um Buffer, a qual pode ser salva em uma coluna do banco de dados de tipo "BLOB, bytea, etc" 
 *  Para se reconstruir a imagem basta usar o método decodeImage(), que recebe o buffer e um nome para o arquivo.
 * 
 * const image = Buffer.from(dataImage, 'base64')
 * decodeImage(image, 'image.png')  // salva a imagem em um arquivo chamado "image.png" dentro da pasta "tmp"
 * 
 * Obs: as pastas "tmp" e "uploads" devem ser criadas manualmente
 * 
 * 
*/
export /**
    * @param {string} filename - Nome do arquivo que será encodado
    * */

    const encodeImage = (filename: string) => {
        const buffer = fs.readFileSync(path.resolve(__dirname, 'uploads', filename))
        return buffer
    }
export /**
    * @param {Buffer} imageBuffer - Buffer da imagem
    * @param {string} filename - Nome do arquivo que será salvo
    * 
    * */
    const decodeImage = (imageBuffer: Buffer, filename: string) => {
        fs.writeFileSync(path.resolve(__dirname, 'tmp', filename), imageBuffer)
    }




