import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        {"id": 1, "name": "John Doe", "math": 95, "physics": 87, "chemistry": 90},
        {"id": 2, "name": "Alice Smith", "math": 88, "physics": 78, "chemistry": 85},
        {"id": 3, "name": "Bob Johnson", "math": 76, "physics": 82, "chemistry": 79},
        {"id": 4, "name": "Emily Brown", "math": 92, "physics": 91, "chemistry": 88},
        {"id": 5, "name": "Michael Wilson", "math": 81, "physics": 84, "chemistry": 76},
        {"id": 6, "name": "Olivia Lee", "math": 89, "physics": 90, "chemistry": 92},
        {"id": 7, "name": "James Davis", "math": 70, "physics": 75, "chemistry": 72},
        {"id": 8, "name": "Sophia Harris", "math": 78, "physics": 79, "chemistry": 81},
        {"id": 9, "name": "William Clark", "math": 87, "physics": 88, "chemistry": 89},
        {"id": 10, "name": "Ava Turner", "math": 94, "physics": 93, "chemistry": 91}
      ];
      
    return (
        <div>
            <LChart width={1200} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" ></Line>
            </LChart>
        </div>
    );
};

export default LineChart;