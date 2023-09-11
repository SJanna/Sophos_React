import React, { Component } from 'react'
import './styles/UserForm.css'

export class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pais: '',
            email: '',
        }
    }

    handleChange = (e) => {
        this.setState({    
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onChange(this.state)
    }

  render() {
    const {name, pais, email} = this.props.user
    return (
<div>
<div className='title-form'>Nuevo Usuario</div>
      <form className='form' onSubmit={this.handleSubmit} >
        <div>
            <label htmlFor="">Nombre</label>
            <input type="text" name="name" onChange={this.props.onChange} value={name}/>
        </div>
        <div>
            <label htmlFor="">Pais</label>
            <input type="text" name="pais" onChange={this.props.onChange} value={pais}/>
        </div>
        <div>
            <label htmlFor="">Correo Electrónico </label>
            <input type="text" name="email" onChange={this.props.onChange} value={email}/>
        </div>
        <button>Agregar</button>
      </form>
</div>
    )
  }
}

export default UserForm