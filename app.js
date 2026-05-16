document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".result-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 移除所有標籤的 active 狀態
      tabs.forEach((t) => t.classList.remove("active"));
      // 增加目前點擊標籤的 active 狀態
      tab.classList.add("active");

      // 隱藏所有內容區塊
      sections.forEach((sec) => (sec.style.display = "none"));
      // 顯示對應的內容區塊
      const targetId = tab.getAttribute("data-target");
      if (targetId) {
        document.getElementById(targetId).style.display = "block";
      }
    });
  });

  // 動態計算假罰單的日期
  const today = new Date();
  const violationDate = new Date(today);
  violationDate.setDate(today.getDate() - 14);

  const dueDate = new Date(violationDate);
  dueDate.setDate(violationDate.getDate() + 30);

  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  const vDateElem = document.getElementById("violation-date");
  const dDateElem = document.getElementById("due-date");

  if (vDateElem && dDateElem) {
    vDateElem.textContent = formatDate(violationDate);
    dDateElem.textContent = formatDate(dueDate);
  }
});
