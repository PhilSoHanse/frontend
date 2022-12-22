import { instanceWithAuth } from '@/api/index';

// 질문을 생성하는 API
function createQuestion(questionData) {
  return instanceWithAuth.post(
    '/community/question',
    JSON.stringify(questionData),
  );
}

// 질문 리스트를 조회하는 API
function fetchQuestionList() {
  return instanceWithAuth.get('/community/question');
}

// 질문 리스트를 상태별로 조회하는 API
function fetchQuestionListByStatus(status) {
  return instanceWithAuth.get(`/community/question?completion=${status}`);
}

export { createQuestion, fetchQuestionList, fetchQuestionListByStatus };
