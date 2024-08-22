import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'Your SDK Key',
  sdkSecret: 'Your Secret',
  webEndpoint: 'zoom.us',
  topic: 'test1234',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
  sessionKey: 'test1234',
  userIdentity: '',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 0
};
