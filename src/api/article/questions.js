import { instanceWithAuth } from '@/api/index';

// 질문을 생성하는 API
function createQuestion(questionData) {
  return instanceWithAuth.post(
    '/community/question',
    JSON.stringify(questionData),
  );
}

export { createQuestion };
