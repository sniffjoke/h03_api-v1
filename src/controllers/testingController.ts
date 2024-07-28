import {Request, Response, NextFunction} from "express";
import {testingService} from "../services/testingService";


class TestingController {

    static deleteAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await testingService.deleteAll();
            res.status(204).send('Удалено')
        } catch (e) {
            next(e)
        }
    }
}

export default TestingController
