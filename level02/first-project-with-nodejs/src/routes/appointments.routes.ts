import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentRepository from '../respositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppoitmentService';

const appointmentRouter = Router();
const appointmentRepository = new AppointmentRepository();

appointmentRouter.get('/', (request, response) => {
  const appointments = appointmentRepository.all();

  return response.json(appointments);
});

appointmentRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentRouter;
