import { Request, Response} from "express";
import { Users } from "../entity/Usuario";
import * as userService from "../service/ServiceUser";
import connection from "../database/postgres";

export class ControllerHost {
    public async schedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async getPrice(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async cancellSchedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async editSchedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async confirmSchedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async getHistory(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async finishHost(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }
}