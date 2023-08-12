$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".mov-navbar").css("background", "#0C0C0C");
    } else {
      $(".mov-navbar").css("background", "transparent");
    }
  });
});


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Massage Sent', 'success')
  })
}