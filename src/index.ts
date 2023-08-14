import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

const main = async () => {
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  const ext = await rc.restapi().account().extension().get();
  console.log(JSON.stringify(ext, null, 2));
};

main();
