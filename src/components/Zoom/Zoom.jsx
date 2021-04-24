import { ZoomMtg } from '@zoomus/websdk';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
ZoomMtg.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib', '/av');

const api_key = 'VOJeFrS6SXy6LP4INusiag';

const requestMeetingSignature = async (meetConfig) => {
  const response = await axios.post('https://zoom-app-backend.herokuapp.com/', {
    meetingData: meetConfig,
  });
  return response;
};

const meetConfig = {
  apiKey: api_key,
  meetingNumber: '123456789',
  leaveUrl: 'http://healovo.web.app/',
  userName: 'Mohamed Afify',
  userEmail: 'www@gmail.com',
  role: 1,
};

const Zoom = () => {
  const [signature, setSignaure] = useState('');

  useEffect(() => {
    const getSignature = async () => {
      const response = await requestMeetingSignature(meetConfig);
      console.log('Signature: ', response.data?.signature);

      ZoomMtg.init({
        leaveUrl: meetConfig.leaveUrl,
        isSupportAV: true,
        success: function () {
          ZoomMtg.join({
            signature: response.data?.signature,
            apiKey: meetConfig.apiKey,
            meetingNumber: '123456789',
            userName: meetConfig.userName,
            error(res) {
              console.log(res);
            },
          });
        },
      });
    };
    getSignature();
  }, []);

  requestMeetingSignature();
  return (
    <div>
      <h2>hi</h2>
    </div>
  );
};

export default Zoom;
