'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/button';

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="min-h-screen flex flex-col justify-center items-center p-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-serif mb-4 text-primary">{title}</h2>
    <div className="max-w-2xl text-center mb-4">{children}</div>
    <Link href={`/${id}`}>
      <Button>詳しく見る</Button>
    </Link>
  </motion.section>
);

export default function HomePage() {
  return (
    <main>
      <Section id="hero" title="モトキ建設株式会社">
        <p>山形県南陽市の建設会社です。</p>
      </Section>
      <Section id="about" title="会社紹介">
        <p>地域に根ざした建設サービスを提供しています。</p>
      </Section>
      <Section id="services" title="事業内容">
        <p>土木工事からリフォームまで幅広く対応。</p>
      </Section>
      <Section id="works" title="施工事例">
        <p>これまで手掛けた事例をご紹介。</p>
      </Section>
      <Section id="message" title="代表挨拶">
        <p>代表からのメッセージをお伝えします。</p>
      </Section>
      <Section id="access" title="アクセス">
        <p>弊社所在地へのアクセス方法。</p>
      </Section>
      <Section id="contact" title="お問い合わせ">
        <p>ご相談・ご質問はこちらから。</p>
      </Section>

      <footer className="p-4 text-center bg-gray-100 space-y-2">
        <p>© {new Date().getFullYear()} Motoki Kensetsu Co., Ltd.</p>
        <Link href="/admin">
          <Button className="h-8 px-3 text-sm">施工管理</Button>
        </Link>

      </footer>
    </main>
  );
}
