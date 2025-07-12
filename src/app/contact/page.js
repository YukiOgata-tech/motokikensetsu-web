import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'お問い合わせ | 株式会社本木建設',
  description: '建築のご相談やお見積もり依頼はこちらのフォームからご連絡ください。',
  keywords: 'お問い合わせ, 建設会社, 見積もり, 山形県南陽市, 株式会社本木建設',
};

export default function Contact() {
  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h1>
      <ContactForm />
    </AnimatedSection>
  );
}
