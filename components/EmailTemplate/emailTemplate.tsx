import moment from 'moment';

interface EmailTemplateProps {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function EmailTemplate({
  fullName,
  company,
  email,
  phone,
  message,
}: EmailTemplateProps) {
  const now = new Date();

  const formatCustomDate = (date: Date): string => {
    return moment(date).format('HH:mm, dddd DD [de] MMMM, YYYY');
  };

  return (
    <div>
      <p>FullName: {fullName}</p>
      <p>Company: {company}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Message: {message}</p>
      <p>Date: {formatCustomDate(now)}</p>
    </div>
  );
}
