# >wecode 27th 2팀 'Dr.Tart' FE

### 개발기간 
2021/11/29~2021/12/10

---
## About This Project

### 팀원
- **_FE_** : 길도연 홍유진 김상훈
- **_BE_** : 성주호 박정현 유민혁

### 서비스 소개
- 일상에 지친 당신을 위한 디저트 솔루션 ! 닥터타르트는 당신에게 딱 맞는 디저트를 처방해드립니다.

### 기술 스택
- Front-End : JavaScript, React.js, HTML/CSS(SASS), React-router-dom 
- Back-End : Django, Python, MySQL 

### 협업 툴
- Common : Git, Github, Slack, Trello, Notion

---

## 구현 기능

#### Navbar
- 메뉴 버튼 클릭시 확장 애니메이션 구현 및 스타일링
- 장바구니에 담기, 로그인, 로그아웃 버튼 구현

#### 제품 리스트 페이지 
- 제품 카테고리별, 제품 정렬, 비건여부, 
- 바로구매 버튼 클릭시 모달창 팝업, 장바구니 담기, 수량체크, 좋아요 기능
- useParams를 이용하여 url을 통한 제품 리스트 분류 구현

#### 제품 상세 페이지 
- 상품별 동적 라우팅을 통해 useParams()로 상품에 대한 아이디 값을 받아와 백엔드 데이터 요청
- 이미지 슬라이드 썸네일 클릭시 다른 이미지 출력
- 토큰 여부에 따른 구매, 장바구니 버튼 클릭 시 다른 로직
- 리뷰 추가 기능

#### 회원가입 페이지
- 정규식을 적용한 이메일, 패스워드 유효성 검사
- 일치하지 않을시 onBlur UI 조건부 렌더링
- 데이터 통신하여 이메일 중복 검사
- 필수 체크, 전체 체크박스 기능

#### 로그인
- 이메일, 비밀번호 유효성검사
- 일치하지 않을시 UI 변경

#### 장바구니/결제 페이지
- url에 기반한 서브라우팅을 통해 같은 페이지 내에서 장바구니와 결제 페이지를 조건부 렌더링으로 뷰를 보여줄 수 있도록 함
- 백엔드와의 `GET`, `POST` 통신을 통한 장바구니 수량 추가, 물품 삭제 및 결제 기능 구현
- 쿼리라우팅을 통해 결제 후 해당 결제 건에 대한 주문서를 백엔드에서 받아올 수 있도록 로직 구현

---

## DEMO

[![Dr.Tart](http://img.youtube.com/vi/ofcgg-3-B28/0.jpg)](https://youtu.be/ofcgg-3-B28)

---

## Resource

- 홈페이지 - 배포 전
- [Frontend Github](https://github.com/wecode-bootcamp-korea/27-1st-DrTart-frontend)
- [Backend Github](https://github.com/wecode-bootcamp-korea/27-1st-DrTart-backend/pulls)
- [백엔드 API 명세서](https://docs.google.com/spreadsheets/d/1n2_Wbt1LcQuaXMw_rSI5OrGETkpUJidcoyRMXQbgb3w/edit#gid=0)
- [Trello](https://trello.com/b/dFkizfeW)
- [Notion](https://www.notion.so/Dr-Tart-3b4e438bb0804ee3bfba830b111c2942)

---

_Reference 이 프로젝트는 닥터자르트 사이트를 참조하여 학습목적으로 만들었습니다. 
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 
이 프로젝트에서 사용하고 있는 사진 대부분은 직접 촬영한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다._
