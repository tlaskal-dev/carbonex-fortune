# 오늘의 초록운 — GitHub Pages 배포 안내

경산시 탄소중립 서포터즈 2기 카보넥스의 재미용 운세 웹사이트입니다. 실제 사주 풀이가 아닙니다.

## 1. 내 컴퓨터에서 열기
1. ZIP을 압축 해제한 뒤 VS Code에서 해당 폴더를 엽니다.
2. `index.html`을 더블클릭하면 운세 화면을 확인할 수 있습니다. 인터넷이 없어도 운세는 나오지만 글꼴과 데이터베이스 기능은 인터넷 연결이 필요합니다.
3. `content.js`를 수정하고 Ctrl+S를 누른 뒤 브라우저를 새로고침합니다. `style.css`는 디자인, `app.js`는 동작, `index.html`은 화면 구성을 담당합니다.
4. 화면을 보는 것만으로는 통계가 연결되지 않습니다. Supabase 설정을 완료하고 GitHub Pages 주소에서 테스트하세요. 로컬 파일(file://)에서는 브라우저에 따라 인증이나 공유가 제한될 수 있습니다.

## 2. Supabase 데이터베이스 연결
이 패키지는 실제 Supabase 프로젝트를 대신 생성하지 않습니다. 나미의 프로젝트에서 아래를 직접 설정해주세요.

1. Supabase 대시보드에서 프로젝트를 만들거나 사용할 프로젝트를 선택하세요.
2. Authentication에서 **Anonymous Sign-Ins**를 켭니다. 일반 방문자는 계정 입력 없이 자동으로 익명 인증됩니다.
3. SQL Editor를 열어 `database.sql` 전체를 복사해 실행합니다. 프로젝트에 같은 이름의 테이블이나 함수를 별도로 만들지 않았다면 한 번 실행하세요. 이 SQL은 `campaign_private` 스키마와 인증된 참가자용 기록 함수 2개를 만듭니다.
4. 프로젝트의 Connect 또는 API 설정에서 **Project URL**과 **publishable key**(또는 구형 anon public key)를 확인합니다. `config.js`의 두 따옴표 안에 입력하고 저장합니다. `service_role`/`sb_secret` 키, 비밀번호는 웹사이트 파일이나 GitHub에 절대 넣지 마세요. 공개 키도 권한 정책이 올바르게 적용돼야 안전합니다.
5. GitHub Pages에 배포한 뒤 결과를 조회하고 완료를 눌러 관리자 SQL Editor에서 기록을 확인합니다. 테스트 기록도 통계에 포함됩니다.

방문자 브라우저는 자신의 익명 인증으로만 제한된 기록 함수를 호출합니다. 테이블에는 방문자가 직접 접근할 수 없습니다. 관리자는 Supabase 대시보드 SQL Editor로 조회합니다. 별도 관리자 웹페이지는 없습니다. 익명 인증을 사용하는 만큼 악의적 다중 계정 생성을 완전히 차단하지 못하므로 Supabase의 CAPTCHA와 사용량 제한 설정도 검토하세요.

## 3. 관리자 통계 조회
Supabase의 SQL Editor에서 아래를 실행하면 한국 날짜별 익명 ID 수를 확인할 수 있습니다.

```sql
select event_date,
 count(distinct visitor_id) as viewers,
 count(distinct visitor_id) filter (where completed_at is not null) as completers,
 round(100.0 * count(distinct visitor_id) filter (where completed_at is not null)
   / nullif(count(distinct visitor_id), 0), 1) as completion_percent
from campaign_private.events
group by event_date order by event_date desc;
```

각 익명 ID의 조회·완료 기록과 미션 번호:

```sql
select event_date, visitor_id, mission_no, viewed_at, completed_at
from campaign_private.events order by viewed_at desc;
```

미션 번호는 `content.js` missions 배열 순서로 0부터 7까지입니다. 서로 다른 기기나 브라우저는 별개 ID일 수 있고, 인증 세션 삭제 후 다시 방문해도 새 ID가 될 수 있습니다. 조회 기록은 결과를 표시한 뒤 전송을 시도하며, 완료 기록은 사용자가 버튼을 누른 표시입니다. 인터넷 오류, 보안 차단, 인증 제한 등으로 실제 저장되지 않을 수 있고 허위 클릭도 가능합니다. 정확한 사람 수, 검증된 실천 횟수 또는 탄소 감축량으로 단정하지 마세요.

같은 익명 ID가 같은 날 같은 미션을 반복 조회하거나 버튼을 눌러도 하나의 기록으로 유지합니다. 같은 날 다른 미션을 보면 별도 행이 생기지만 일별 집계에서 ID는 한 번만 셉니다. 완료는 조회된 미션에만 기록됩니다.

## 4. GitHub Pages에 올리기
1. GitHub에서 새 저장소를 만들고, 이 폴더의 `index.html`, `style.css`, `content.js`, `app.js`, `config.js`, `database.js`와 `assets` 폴더를 저장소의 최상위에 업로드합니다. `database.sql`, README도 함께 올려도 됩니다. ZIP을 그대로 올리지 말고 압축을 푼 내용물을 올려야 합니다.
2. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch, `main`, `/ (root)`를 선택하여 저장합니다. GitHub가 표시하는 URL을 기다립니다.
3. URL에서 운세 표시와 완료 버튼을 눌러 위 SQL로 DB 기록을 확인합니다. 브라우저 개발자 도구 콘솔에 기록 오류가 나오면 익명 인증, SQL, 키와 URL을 확인하세요.
4. 이미 만든 공개 사이트라면 `config.js` 수정 후 GitHub에 업데이트해야 방문자에게 반영됩니다.

## 5. 문구 수정
- `content.js`의 fortunes: 총운 제목, 본문, 기운, 색상.
- missions: 행동 제목, 설명, 이모지, 행운 아이템, 아이템 설명.
- missionLinks: 각 총운에 연결되는 미션 번호. 첫 미션이 0번입니다.
- detailFortunes: 학업·성적, 직장, 대인관계, 금전, 건강, 한마디의 문구.
- 카보, 넥시, 리박사 이미지는 assets 폴더에 있습니다.
- 미션 개수를 변경할 때는 `database.sql`에서 허용 범위도 함께 변경해야 합니다. 이미 배포 중이라면 기존 데이터의 미션 번호와 의미가 바뀌지 않도록 주의하세요.

## 6. 개인정보 및 안내
성별과 양력 생년월일시·분은 브라우저에서 운세 선택에만 사용하고 DB에는 보내지 않습니다. DB에는 익명 인증 ID, 한국 기준 날짜, 미션 번호, 조회 및 완료 시각이 저장됩니다. Supabase 인증·서버 측 통신 기록은 해당 서비스 정책에 따라 처리될 수 있습니다. 사이트 입력 화면에 통계 기록 안내를 표시합니다. 문의처와 캠페인 측의 개인정보 처리 안내는 실제 운영 주체에 맞춰 추가하세요.

이 버전은 공개 웹사이트를 만들기 위한 파일이며, 기존 비공개 검토용 사이트를 자동으로 수정하지 않습니다.
