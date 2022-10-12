import ChartBar from "./ChartBar"
import './Chart.css'

const Chart = props => {
    const valueDatas = props.datas.map(data => data.value)
    const totalMaximum = Math.max(...valueDatas)

    return (
        <div className="chart">
            {props.datas.map((data) => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={totalMaximum}
                    label={data.label}
                />
            ))}
        </div>
    )

}

export default Chart