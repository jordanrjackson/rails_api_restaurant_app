import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from './MenuForm'

class Dashboard extends React.Component {
  state = { menus: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( ({ data }) => this.setState({ menus: data }) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  submit = (menu) => {
    const { menus } = this.state
    axios.post('/api/menus', { menu })
      .then( res => {
        this.setState({
          menus: [res.data, ...menus],
          showForm: false
        })
      }).catch( e => { 
        // TODO handle better
        console.log(e.response.data.errors)
      })
  }

  form() {
    return <Form submit={this.submit} />
  }

  show() {
    const { menus } = this.state
    return (
      <ul>
        { menus.map( p =>
            <li key={p.id}>
              <Link to={`/menus/${p.id}`}>
                {p.item}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2>Menu</h2>
        <button onClick={this.toggleForm}>
          { showForm ? 'Hide' : 'Show' } form
        </button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}


export default Dashboard;