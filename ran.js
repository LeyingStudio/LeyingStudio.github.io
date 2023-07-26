// 取得相關元素
const displayValueElement = document.getElementById('displayValue');
const randomBtn = document.getElementById('randomBtn');

// 建立數值陣列
const values = ['Earl', '培心', '九孔', 'Jason', '阿和', '明遠', 'Kevin','阿嵐','靜宜','Angela','Jackie','Tim','小林','婷卉','James','Judy','Coco','Chelsea','Rosa','Ellie','Gary','巴頓','Fiona','Jenny','Vincent'];


// 隨機產生器函式
function startRandom() {
  let count = 0;
  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
    const randomColor = getRandomColor();
    displayValueElement.textContent = randomValue;
    displayValueElement.style.color = randomColor;
    count++;
    if (count === 20) {
      values.splice(values.indexOf(randomValue),1)
      clearInterval(interval);
    }
  }, 100);
}

// 產生隨機顏色函式
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 按下 Random 按鈕時觸發隨機產生器
randomBtn.addEventListener('click', startRandom);
