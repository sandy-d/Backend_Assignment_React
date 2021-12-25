import { React , Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      title : "Backend Assignment",
      bookData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit= (e) => {
    e.preventDefault();
    let bookData = this.state.bookData;
    let bname = this.refs.txtbName.value;
    let stock = this.refs.txtStock.value;

    if(this.state.act === 0)
    {
      let newBook = {
        "bname" : bname,
        "stock" : stock
      }

      bookData.push(newBook);
    }
    else{
      let index = this.state.index;
      bookData[index].bname = bname;
      bookData[index].stock = stock;
    }

    this.setState({
      bookData : bookData,
      act : 0
    })

    this.refs.myForm.reset();
  }

  handleEdit = (i) =>{
    let bookData = this.state.bookData[i];
    this.refs.txtbName.value = bookData.bname;
    this.refs.txtStock.value = bookData.stock;

    this.setState({
      act : 1,
      index : i
    })
  }

  handleDelete = (i) =>{
    let bookData = this.state.bookData;
    bookData.splice(i,1);
    this.setState({
      bookData : bookData
    });
  }
  

  render(){
    let bookData = this.state.bookData;
    return(
      <div>
        <h1>{this.state.title}</h1>
      <form ref="myForm">
        <h4>Add a new book</h4>
        <label>Book Name</label>
        <input type="text" ref="txtbName" placeholder="Book Name"/>
        <label>Book Stock</label>
        <input type="text" ref="txtStock" placeholder="Number of Stock"/>
        <button onClick={e=> this.handleSubmit(e)}>Submit</button>
      </form>
      <table>
        <tr>
          <th>Book Name</th>
          <th>Book Stock</th>
        </tr>
        {
          bookData.map( (data, i) =>
          <tr key={i}>
            <td>{data.bname}</td>
            <td>{data.stock}</td>
            <td>
              <button onClick={e =>this.handleEdit(i)}>Edit</button>
            </td>
            <td>
            <button onClick={e =>this.handleDelete(i)}>Delete</button>
            </td>
            <td>
              
            </td>
          </tr> )
        }
      </table>
      </div>
    )
  }
}

export default App;