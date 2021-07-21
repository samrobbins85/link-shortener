import Head from "next/head";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Link Shortener</title>
      </Head>
      <h1 className="text-3xl text-center pt-4 font-semibold">
        Sam&apos;s Link Shortener
      </h1>
      <main className="max-w-md mx-auto py-4 pt-4">
        <ul className="grid gap-y-4">
          {data.items.map((item) => (
            <li key={item._id} className="border-2 px-4 py-2">
              <a href={item.link} className="font-semibold text-lg">
                /{item.title}
              </a>
              <p>{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const request = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.collection}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.test_token}`,
      },
    }
  );
  const data = await request.json();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
