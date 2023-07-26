function addRow() {
  const table = document.getElementById('memoTable');
  const row = table.insertRow(-1);
  const checkBoxCell = row.insertCell(0);
  const taskCell = row.insertCell(1);
  const categoryCell = row.insertCell(2);
  const timeCell = row.insertCell(3);
  const editSaveCell = row.insertCell(4);
  const deleteCell = row.insertCell(5);
  const completeCell = row.insertCell(6);

  checkBoxCell.innerHTML = '<input type="checkbox">';
  taskCell.innerHTML = '<input type="text" class="editable">';
  categoryCell.innerHTML = '<input type="text" class="editable">';
  timeCell.innerHTML = '<input type="time" class="editable">';
  editSaveCell.innerHTML = '<button onclick="editSaveRow(this)">儲存</button>';
  deleteCell.innerHTML = '<button onclick="deleteRow(this)">刪除</button>';
  completeCell.innerHTML = '<button onclick="completeTask(this)">完成</button>';
}

function editSaveRow(button) {
  const row = button.parentNode.parentNode;
  const editableFields = row.getElementsByClassName('editable');
  const editSaveButton = button;

  if (editSaveButton.innerText === '編輯') {
    // 進入編輯模式
    for (let i = 0; i < editableFields.length; i++) {
      editableFields[i].disabled = false;
    }
    editSaveButton.innerText = '儲存';
  } else {
    // 儲存編輯結果
    for (let i = 0; i < editableFields.length; i++) {
      editableFields[i].disabled = true;
    }
    editSaveButton.innerText = '編輯';
  }
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

function completeTask(button) {
  const row = button.parentNode.parentNode;
  const checkBox = row.querySelector('input[type="checkbox"]');
  checkBox.checked = true;
}
