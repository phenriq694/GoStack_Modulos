import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover('key');

    console.log(cacheData);
    const appointments = await this.appointmentsRepository.findAllInDaysFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      },
    );

    // await this.cacheProvider.save('key', 'value');

    return appointments;
  }
}

export default ListProviderAppointmentsService;
