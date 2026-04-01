function saveNote() {
  const note = document.getElementById('noteText').value;
  if (note) {
    alert('โน๊ตของคุณถูกบันทึกแล้ว!');
    // ที่นี่คุณสามารถเพิ่มการเชื่อมต่อกับฐานข้อมูลหรือการเก็บข้อมูลได้
  } else {
    alert('กรุณากรอกข้อความก่อนบันทึก!');
  }
}