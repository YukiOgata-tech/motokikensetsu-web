import WorksList from '@/components/WorksList';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: '施工実績 | 株式会社本木建設',
  description: 'これまでに手掛けた施工実績を写真付きでご紹介します。',
  keywords: '施工実績, 建設工事, 山形県南陽市, 株式会社本木建設',
};

export default function Works() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">施工実績</h1>
      <WorksList />
    </div>
  );
}
