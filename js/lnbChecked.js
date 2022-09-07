let currentPage = "";
let currentLnb = null;

// 현재 주소 가져오기
const CURRENT_URL = document.location.href;

// 현재 어느 페이지인지 확인
switch (CURRENT_URL.charAt(CURRENT_URL.indexOf("sub_") + 4)) {
  case "s":
    // 현재 페이지 분류명 및 번호 검색용 index 전달
    pageChecked("sonar", "sonar".length + 1);
    break;
  case "u":
    // 현재 페이지 분류명 및 번호 검색용 index 전달
    pageChecked("unmanned", "unmanned".length + 1);
    break;
  case "t":
    // 현재 페이지 분류명 및 번호 검색용 index 전달
    pageChecked("tectical", "tectical".length + 1);
    break;
}

function pageChecked(page, len) {
  const pageNum = CURRENT_URL.substr(CURRENT_URL.indexOf(`${page}_`) + len, 2);
  const selected = `${page}Sub${pageNum}`;

  // 해당 소메뉴 체크 실행
  radioChecked(selected);
}

function radioChecked(selected) {
  currentLnb = document.getElementById(selected);
  currentLnb.checked = true;
}
