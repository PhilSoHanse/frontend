// 로그인
import { instance } from './index';

function githubLogin(code) {
  return instance.post('/github/login', code);
}

export { githubLogin };
