const successEvent = document.getElementById("successShow");
const errorEvent = document.getElementById("errorShow");

successEvent.onclick = function successShow() {
    toast({
        title: "Success",
        message: "anyone success can view your invite visitors trung",
        type: "success",
        duration: 1000,
    })
}

errorEvent.onclick = function errorShow() {
    toast({
        title: "Warning",
        message: "anyone success can view your invite visitors trung",
        type: "warning",
        duration: 3000,
    })

}


function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoRemoveID = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000);
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut ease 1s ${delay}s forwards`;
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
        }
        const icon = icons[type]
        toast.innerHTML = `
            <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__discription">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>

        `;
        main.appendChild(toast);



    }

}