import FakeAppoinmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDaysAvailabilityService from './ListProviderDaysAvailabilityService';

let fakeAppoinmentsRepository: FakeAppoinmentsRepository;
let listProviderDaysAvailabilityService: ListProviderDaysAvailabilityService;

describe('ListProviderDaysAvailability', () => {
  beforeEach(() => {
    fakeAppoinmentsRepository = new FakeAppoinmentsRepository();
    listProviderDaysAvailabilityService = new ListProviderDaysAvailabilityService(
      fakeAppoinmentsRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppoinmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 3, 20, 8, 0, 0),
    });

    await fakeAppoinmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 3, 20, 10, 0, 0),
    });

    const availability = await listProviderDaysAvailabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 4,
      day: 20,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    );
  });
});
