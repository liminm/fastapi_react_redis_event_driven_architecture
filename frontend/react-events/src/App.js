import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import Delivery from "./Delivery"

function App() {

  const [id, setID] = useState('')

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const response = await fetch('https://localhost:8000/deliveries/create', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        type: "CREATE_DELIVERY",
        data
      })
    });
    const content = await response.json();
  }

  return (
    <div className="py-5">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        {id == ''? <div className="card">
          <div className="card-header">
            Create Delivery
          </div>
          <form className="card-body" onSumbut={submit}>
            <div className="mb-3">
              <input type="number" name="notes" className="form-control" placeholder="Budget"></input>
            </div>
            <div className="mb-3">
              <textarea name="notes" className="form-control" placeholder="Notes"></textarea>
            </div>
            <button className="btn btn-primary"></button>
          </form>
        </div> : <Delivery />}
      </div>

    </div>
  );
}

export default App;
