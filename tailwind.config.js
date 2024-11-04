module.exports = {
  content: [
    // 컴포넌트 파일 경로
    './*.html'
  ],
  // tailwind 스타일 변수 사용자 정의
  theme: {
    // colors: {}, // 기존 변수의 값 재 정의
    extend: {
      // 추가 변수 설정
      // colors: {},
    },
    fontFamily: {
      cafe: ["'Cafe24Nyangi-W-v1.0'"],
      'cafe-fill': ["'Cafe24Nyangi-B-v1.0'"],
      lotte: ["'LOTTERIACHAB'"],
    },
  },
  plugins: []
}
