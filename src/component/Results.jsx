import { calculateInvestmentResults,formatter } from "../util/investment"

export default function Results({input}){
    let results=calculateInvestmentResults(input)
    let initialInvestment=results[0].valueEndOfYear-results[0].interest-results[0].annualInvestment
    return(
        <table id="result">
         <thead>
           <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest (Year)</th>
            <th>Iotal Intrest</th>
            <th>Capital</th>
           </tr>
         </thead>
         <tbody>
           {results.map((val)=>{
              let totalintrest=val.valueEndOfYear-val.annualInvestment * val.year-initialInvestment
              let totalcapital=val.valueEndOfYear-totalintrest
            return <tr key={val.year}>
              
                    <td>
                        {val.year}
                    </td>
                    <td>
                        {formatter.format(val.valueEndOfYear)}
                    </td>
                    <td>
                        {formatter.format(val.interest)}
                    </td>
                    <td>
                        {formatter.format(totalintrest)}
                    </td>
                    <td>
                        {formatter.format(totalcapital)}
                    </td>
                </tr>
           })}
         </tbody>
         </table>
    )
}