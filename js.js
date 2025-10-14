// Máscaras básicas: CPF, telefone, CEP
document.addEventListener('input', function(e){
  const el = e.target;
  if (!el) return;

  if (el.id === 'cpf'){
    let v = el.value.replace(/\D/g,'').slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    el.value = v;
  }

  if (el.id === 'telefone'){
    let v = el.value.replace(/\D/g,'').slice(0,11);
    // se tiver 11 dígitos, formato (00) 90000-0000
    v = v.replace(/^(\d{2})(\d)/,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    el.value = v;
  }

  if (el.id === 'cep'){
    let v = el.value.replace(/\D/g,'').slice(0,8);
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    el.value = v;
  }
});
