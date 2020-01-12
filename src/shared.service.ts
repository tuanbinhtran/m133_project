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
}

export default new SharedService();