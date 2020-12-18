window.addEventListener(
  'nalytimk-up',
  () => {
    const storedConf = getStoredConf()
    
    const btnId = document.getElementById('imrok-nalytimk-id')
    btnId.innerHTML = buttonsLabel['id'][storedConf.id ? 'ok' : 'non']
    btnId.onclick = e => handleButtonClick(e.target, 'id')
    btnId.removeAttribute('disabled')
    
    const btnIP = document.getElementById('imrok-nalytimk-ip')
    btnIP.innerHTML = buttonsLabel['ip'][storedConf.ip ? 'ok' : 'non']
    btnIP.onclick = e => handleButtonClick(e.target, 'ip')
    btnIP.removeAttribute('disabled')
  })