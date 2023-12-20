const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div >
                        <label className="form-a" htmlFor="name">Place Name</label>
                        <input className="form-control form-a form-b" id="name" name="name" required />
                    </div>
                    <div >
                        <label className="form-a" htmlFor="pic">Place Picture</label>
                        <input className="form-control form-a form-b" type="url" id="pic" name="pic" />
                    </div>
                    <div >
                        <label className="form-a" htmlFor="city">City</label>
                        <input className="form-control form-a form-b" id="city" name="city" />
                    </div>
                    <div >
                        <label className="form-a" htmlFor="state">State</label>
                        {/* <input className="form-control" id="state" name="state" /> */}
                        <select className="form-control form-a form-b"name="state" size="1">
                            <option value="AK">AK</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VA">VA</option>
                            <option value="VT">VT</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
                    </div>
                    <div className="form-group form-a form-b" >
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                        <input className="btn btn-primary form-a" type="submit" value="Add Place" />
                </form>
		    </main>
	    </Def>
    )   
}

module.exports = new_form
