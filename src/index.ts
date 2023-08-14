import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

const main = async () => {
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  // const ext = await rc.restapi().account().extension().get();
  // console.log(JSON.stringify(ext, null, 2));

  const r = await rc
    .restapi()
    .account()
    .extension()
    .messageStore()
    .list({
      messageType: ['SMS'],
      dateFrom: '2022-08-01T18:01:00.000Z',
    });
  console.log(JSON.stringify(r, null, 2));

  const r2 = await rc.get(
    'https://platform.ringcentral.com/restapi/v1.0/account/809646016/extension/62264425016/message-store/1798672344016/content/1798672344016',
  );
  console.log(r2.data);
};

main();
