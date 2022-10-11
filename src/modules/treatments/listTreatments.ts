import { TreatmentsRepository } from "@src/entity/treatments/TreatmentsRepository";
import { Request, Response } from "express";

export class ListTreatments {
  async execute(request: Request, response: Response): Promise<Response> {
    const groupByMonth = request.query?.groupByMonth;
    const dateOfNewTreatment = request.query?.dateOfNewTreatment;

    const treatmentsRespository = new TreatmentsRepository();

    if (groupByMonth) {
      const treatments =
        await treatmentsRespository.listAllTreatmentsGroupedByMonth();

      return response.status(200).json(treatments);
    }

    if (typeof dateOfNewTreatment == "string") {
      const data = new Date(dateOfNewTreatment);
      if (data) {
        const treatments =
          await treatmentsRespository.listAllTreatmentsProductToBuy(data);

        return response.status(200).json(treatments);
      }
    }

    const resp = await treatmentsRespository.listTreatment();

    return response.status(200).json(resp);
  }
}
