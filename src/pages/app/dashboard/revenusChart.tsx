import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';
import colors from 'tailwindcss/colors';

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 1500 },
  { date: '13/12', revenue: 900 },
  { date: '14/12', revenue: 1000 },
  { date: '15/12', revenue: 700 },
  { date: '16/12', revenue: 2500 },
];

export function RevenueCharts() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-eow items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no Período</CardTitle>
          <CardDescription>Receita diária o período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 14 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors['yellow']['500']} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
