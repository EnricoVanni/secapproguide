document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-prompt]");
  if (!button) return;

  const prompt = document.getElementById(button.dataset.copyPrompt);
  const section = button.closest(".ai-prompt-card");
  const status = section?.querySelector(".ai-copy-status");
  if (!prompt || !status) return;

  try {
    await navigator.clipboard.writeText(prompt.textContent.trim());
    status.textContent = "Istruzioni copiate. Ora puoi incollarle nell’AI insieme ai file dello strumento.";
    button.textContent = "Copiato";
    window.setTimeout(() => {
      button.textContent = "Copia istruzioni";
      status.textContent = "";
    }, 4000);
  } catch {
    status.textContent = "Copia non disponibile. Apri le istruzioni complete e seleziona il testo manualmente.";
  }
});

const checklistItems = Array.from(document.querySelectorAll("[data-checklist-item]"));
const checklistCount = document.querySelector("[data-checklist-count]");
const checklistProgress = document.querySelector("[data-checklist-progress]");
const checklistMessage = document.querySelector("[data-checklist-message]");

function updateChecklist() {
  if (!checklistCount || !checklistProgress || !checklistMessage) return;
  const completed = checklistItems.filter((item) => item.checked).length;
  const total = checklistItems.length;
  const percentage = total ? (completed / total) * 100 : 0;

  checklistCount.textContent = `${completed} di ${total} completati`;
  checklistProgress.style.width = `${percentage}%`;
  checklistMessage.textContent = completed === total
    ? "Tutti i controlli sono completati. La cartella è pronta per la consegna."
    : `Completa ancora ${total - completed} ${total - completed === 1 ? "controllo" : "controlli"} prima della consegna.`;
  checklistMessage.classList.toggle("is-complete", completed === total);
}

checklistItems.forEach((item) => item.addEventListener("change", updateChecklist));

document.querySelector("[data-reset-checklist]")?.addEventListener("click", () => {
  checklistItems.forEach((item) => { item.checked = false; });
  updateChecklist();
});

document.querySelector("[data-print-checklist]")?.addEventListener("click", () => {
  document.body.classList.add("print-checklist");
  window.print();
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-checklist");
});

updateChecklist();
