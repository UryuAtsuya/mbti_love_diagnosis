import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MBTI_TYPES } from '@/app/constants';

const groups = [
  { name: '分析家', types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'], color: '#7969bb' },
  { name: '外交官', types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'], color: '#4f8a72' },
  { name: '番人', types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'], color: '#4d7d9b' },
  { name: '探検家', types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'], color: '#ad7640' },
];

export default function CharacterSection() {
  return (
    <section id="types" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading"><span>EXPLORE YOUR TYPE</span><h2>あなたのMBTIタイプを探す</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6a6573]">トップでは特徴を短く。詳しい性格・恋愛傾向は、それぞれのタイプ解説で読めます。</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.name} className="rounded-3xl border border-[#e9e4e8] bg-white p-5 sm:p-6">
              <h3 className="mb-4 text-sm font-bold" style={{ color: group.color }}>{group.name}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {group.types.map((code) => {
                  const type = MBTI_TYPES.find((item) => item.value === code);
                  const label = type?.label.split('(')[1]?.replace(')', '') ?? '';
                  return <Link key={code} href={`/articles/${code.toLowerCase()}`} className="group flex min-h-24 flex-col justify-center rounded-2xl border border-[#eee9ed] bg-[#fcfafb] p-3 text-center transition hover:-translate-y-0.5 hover:border-[#cfc4e9] hover:shadow-sm"><strong className="text-lg text-[#252342]">{code}</strong><span className="mt-1 text-xs text-[#7a7482]">{label}</span></Link>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 text-center"><Link href="/articles#types" className="inline-flex min-h-11 items-center gap-2 font-bold text-[#7969bb]">16タイプの解説を見る <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}
