export default async function handler(req, res) {
  const { slug } = req.query;
  const request = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.collection}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.test_token}`,
      },
    }
  );
  const data = await request.json();
  const link = data.items.filter((item) => item.title === slug[0]);
  if (link.length > 0) {
    res.redirect(link[0].link);
  } else {
    res.status(404);
  }
}
