function loginn() {
  const nama =document.getElementById('nama').value;
  const sandi =document.getElementById('sandi').value;

  if(nama == 'ilham' && sandi == 'umb'){
    window.location.href = 'navigasi.html'
  }else {
    alert('Maaf anda siapa 🗿🗿🗿')
  }
}

function tampilkantombol(){
  const containerLink = document.getElementById('container-link');
  containerLink.style.display = 'block';

}