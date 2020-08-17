import ISendmailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendmailDTO): Promise<void>;
}
