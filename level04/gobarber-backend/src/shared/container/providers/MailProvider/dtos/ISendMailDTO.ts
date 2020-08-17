import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateDate: IParseMailTemplateDTO;
}
