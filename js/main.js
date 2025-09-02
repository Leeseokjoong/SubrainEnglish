// 일관성: 모든 내비게이션은 data-target 사용
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const target = card.dataset.target; 
      window.location.href = `${target}/index.html`; 
    });
  });
  
  // 접근성: 키보드 Enter/Space 활성화
  document.querySelectorAll(".card").forEach(card => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
  