import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import coachimg from '../assets/coachImg.webp';

const Portfolio = () => {
    // Example data for pie charts
    const data = [
        { name: 'Aikido', value: 5 },
        { name: 'Muay Thai', value: 70 },
        { name: 'TypeScript', value:  25},
        
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 text-white bg-zinc-900">
            <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
            
            <div className="w-full max-w-4xl p-4 bg-zinc-800 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Skills & Training Stats</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name }) => name} // Only use `name` to avoid error
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="w-full max-w-4xl p-4 bg-zinc-800 rounded-lg shadow-lg flex items-center justify-center">
                <img src={coachimg} alt="Coach" className="object-contain w-full h-64 rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default Portfolio;
