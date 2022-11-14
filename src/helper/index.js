export const orderID = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
}

export const newDate = date =>{
    const newDATE = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDATE.toLocaleDateString('en-US', options)
}

export const validation = (name, country, state, city, adress, postal, email, card1, card2, setAlert, setLoading) => {
    if([name, country, state, city, adress, postal, email, card1, card2].includes('')){
      setAlert ({
          msg: 'All fields are required',
          error: true
       })
      setLoading(false)
      return true
    }else if(name.length < 4){
      setAlert ({
        msg: 'Please enter a correct name',
        error: true
     })
     setLoading(false)
     return true
    }else if(country.length < 5){
      setAlert ({
        msg: 'The country entered is incorrect',
        error: true
     })
     setLoading(false)
     return true
    }else if(state.length < 5){
        setAlert ({
          msg: 'The state entered is incorrect',
          error: true
       })
    setLoading(false)
    return true
    }else if(city.length < 5){
    setAlert ({
      msg: 'The city entered is incorrect',
      error: true
    })
    setLoading(false)
    return true
    }else if(adress.length < 5){
        setAlert ({
          msg: 'The adress entered is incorrect',
          error: true
        })
    setLoading(false)
    return true
    }else if(postal.length < 4){
        setAlert ({
        msg: 'The postal entered is incorrect',
        error: true
        })
    setLoading(false)
    return true
    }else if(card1.length < 12){
      setAlert ({
        msg: 'Enter a valid card number',
        error: true
     })
     setLoading(false)
     return true
    }else if(card2.length <= 3){
        setAlert ({
          msg: 'Enter a valid card number',
          error: true
       })
       setLoading(false)
       return true
    }else if(email.length < 11){
      setAlert ({
        msg: 'Ingrese un Email valido',
        error: true
     })
     setLoading(false)
     return true
    }
    return false
  }




  
