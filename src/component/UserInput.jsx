
export default function UserInput({change,ip}){

    return(
        <section id="user-input">
            <div className="input-group">
            <p>
            <label htmlFor="initial_investment">Initial Investment</label>
           <input type="number" name="initial_investment" required value={ip.initialInvestment} onChange={(event)=> change('initialInvestment',event.target.value)}/> 
           </p>
           
           <p>
            <label htmlFor="annual_investment">Annual Investment</label>
           <input type="number" name="initial_investment" required value={ip.annualInvestment} onChange={(event)=> change('annualInvestment',event.target.value)}/> 
           </p>
           </div>

           <div className="input-group">
            <p>
            <label htmlFor="expected_return">Expected Return</label>
           <input type="number" name="expected_return" required value={ip.expectedReturn} onChange={(event)=> change('expectedReturn',event.target.value)}/> 
           </p>
           
           <p>
            <label htmlFor="duration">Duration</label>
           <input type="number" name="duration" required value={ip.duration} onChange={(event)=> change('duration',event.target.value)}/> 
           </p>
           </div>
        </section>
        
    )
}