import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppoinmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppoinmentsRepository: FakeAppoinmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();
    fakeAppoinmentsRepository = new FakeAppoinmentsRepository();
    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppoinmentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppoinmentsRepository.create({
      provider_id: 'user',
      user_id: 'user-id',
      date: new Date(2020, 3, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppoinmentsRepository.create({
      provider_id: 'user',
      user_id: 'user-id',
      date: new Date(2020, 3, 20, 15, 0, 0),
    });

    const appointments = await listProviderAppointmentsService.execute({
      provider_id: 'user',
      year: 2020,
      month: 4,
      day: 20,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
