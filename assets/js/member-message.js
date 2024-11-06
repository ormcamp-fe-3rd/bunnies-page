// 다른 방법으로 시도해보기 appendchild, insertAdjacentHTML, createTextNode

//메세지 리스트를 배열로보관, 일정량을 유지하기 위함

//엔터 입력 검증, 텍스트 value 검증, (리스트에 저장-필요할까?)

//createElement로 li 생성
//setAttribute("class","container")(기존에 있다면 변경됨)
//createTextNode로 메세지 추가(appendchild)
//바디 요소에 추가

const messageBtn = document.querySelector('#message');

function messageInit(e){
  if(e.code == 'Enter'){
    if(messageBtn.value == ""){
      alert("메세지를 입력해주세요");
    }
    const newMessage = messageBtn.value;
    messageBtn.value = "";
    
    makeMessageDome(newMessage);
  }
}

function makeMessageDome(str){
  let newLi = document.createElement("li");
  let newText = document.createTextNode(str);
  newLi.appendChild(newText);

  console.log(newLi);
}
