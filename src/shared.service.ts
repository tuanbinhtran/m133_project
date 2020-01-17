import { Response } from 'express';

class SharedService {

	public badRequest(res: Response): void {
		res.status(400);
		res.send('Bad request');
	}


	public notFound(res: Response): void {
		res.status(404);
		res.send('Not Found');
	}


	public  isNumbersOnly(value: string): boolean {
		return value.match(/^\d+$/g) ? true : false;
	}
}

export default new SharedService();
