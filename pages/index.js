import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  const socialMedia = [
    {
      src: '/github.png',
      href: 'https://github.com/sofrosine',
    },
    {
      src: '/linkedin.png',
      href: 'https://www.linkedin.com/in/soultanma/',
    },
    {
      src: '/facebook.png',
      href: 'https://web.facebook.com/sofros1ne/',
    },
    {
      src: '/instagram.png',
      href: 'https://www.instagram.com/soultan.muh/',
    },
  ];
  return (
    <Layout title="soultanid" className="grid grid-flow-row place-items-center pt-4">
      <Image
        className="rounded-full shadow"
        src="/me.jpg"
        height={240}
        width={240}
        objectFit="cover"
      />
      <h1 className="text-5xl font-regular mt-8 mb-8 text-center">
        Soultan Muhammad Albar
      </h1>
      <p className="text-2xl flex font-regular mb-8 place-self-center">
        <span className="text-blue-500 animate-pulse">Mobile</span>
        {'\xa0and\xa0'}
        <span className="text-blue-500 animate-pulse">Web</span>
        {'\xa0Enthusiast'}
      </p>
      <span className="flex flex-row justify-center gap-2">
        {socialMedia.map((item, key) => (
          <a
            target="_blank"
            className="px-3 hover:shadow-xl rounded"
            key={key}
            href={item.href}
          >
            <Image className="shadow" src={item.src} height={32} width={32} />
          </a>
        ))}
      </span>
    </Layout>
  );
}
