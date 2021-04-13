function modal (triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    triggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    close.addEventListener('click', closeModal);

    function openModal () {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
    }

    function closeModal () {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
    
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && modal.classList.contains("show")) {
          closeModal(modalSelector);
        }
      });
    
};

export default modal;