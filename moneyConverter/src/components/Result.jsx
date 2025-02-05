
import { calculateInvestmentResults ,formatter} from "../util/investment";

export default function Result({input}){
    // console.log(input)
   const result= calculateInvestmentResults(input);
   const initaialInvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Insterest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(YearDate=>{
                const totalInsrest=YearDate.valueEndOfYear
                -YearDate.annualInvestment*YearDate.year-initaialInvestment;
                const totalAmountInvested=YearDate.valueEndOfYear-totalInsrest

                return <tr key={YearDate.year}>
                    <td>{YearDate.year}</td>
                    <td>{formatter.format(YearDate.valueEndOfYear)}</td>
                    <td>{formatter.format(YearDate.interest)}</td>
                    <td>{formatter.format(totalInsrest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table> 
}