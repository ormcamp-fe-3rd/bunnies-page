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
  plugins: [],
  safelist: [
    ...[...Array(100).keys()].flatMap(i => [`top-[${i}%]`]),
    ...[...Array(100).keys()].flatMap(i => [`left-[${i}%]`]),
    ...[...Array(100).keys()].flatMap(i => [`right-[${i}%]`]),
    ...[...Array(50).keys()].flatMap(i => [`opacity-[${(i+30)/100}%]`]),
    'bg-[#173f5f]', 'bg-[#20639b]', 'bg-[#3caea3]', 'bg-[#f6d55c]', 'bg-[#ed553b]',
    'bg-[#ef6c00]', 'bg-[#ffa726]', 'bg-[#cfd8dc]', 'bg-[#26a69a]', 'bg-[#2e7d32]',
    'bg-[#ede7f6]', 'bg-[#b39ddb]', 'bg-[#7e57c2]', 'bg-[#512da8]', 'bg-[#35f3ff]',
    'bg-[#00838f]', 'bg-[#26a69a]', 'bg-[#e1f5fe]', 'bg-[#42a5f5]', 'bg-[#1565c0]'
  ]
}
