import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentsDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDaysFromProviderDTO from '../dtos/IFindAllInDaysFromProviderDTO';

export default interface IAppointmentsRepository {
  create(date: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDaysFromProvider(
    data: IFindAllInDaysFromProviderDTO,
  ): Promise<Appointment[]>;
}
