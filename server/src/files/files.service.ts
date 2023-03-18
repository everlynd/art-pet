import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

	async createFile(file): Promise<string> {
		try {
			if (Array.isArray(file)) {
				const result: any[] = file.map(elem => {
					const fileName = uuid.v4() + elem.mimetype.split('/')[1];
					const filePath = path.resolve(__dirname, '..', 'static')
					if (!fs.existsSync(filePath)) {
						fs.mkdirSync(filePath, { recursive: true });
					}
					fs.writeFileSync(path.join(filePath, fileName), elem.buffer);
					return fileName
				})
				return result[0]
			} else {
				const fileName = uuid.v4() + file.mimetype.split('/')[1];
				const filePath = path.resolve(__dirname, '..', 'static')
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath, { recursive: true });
				}
				fs.writeFileSync(path.join(filePath, fileName), file.buffer);
				return fileName;
			}
		} catch (e) {
			throw new HttpException('Произошла ошибка при загрузке файла', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}

}
