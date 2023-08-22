const conta = {
  email: 'samuel@dio.bank',
  password: '123456',
  name: 'Samuel Nunes'
}

export const api = new Promise((resolve) =>{
  setTimeout(()=>{
    resolve(conta)
  }, 3000)
})