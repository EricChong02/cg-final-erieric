(() => {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(() => {
    const shell = document.querySelector(".shell");
    if (!shell) return;
    document.body.classList.add("js-ready");

    /* 1. Wrap bare tables with .review-table-scroll */
    document.querySelectorAll("table").forEach((table) => {
      if (table.closest(".review-table-scroll, .table-wrap")) return;
      const wrapper = document.createElement("div");
      wrapper.className = "review-table-scroll";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.append(table);
    });

  });
})();
