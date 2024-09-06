import { Helmet } from 'react-helmet-async';
import { MonthDashboardCard } from './monthDashboardCard';
import { MonthAmountOrdersDashboardCard } from './monthAmountOrdersCard';
import { DayAmountOrdersDashboardCard } from './dayAmountOrdersCard';
import { MonthCancelCard } from './monthOrdersCancelCard';
import { RevenueCharts } from './revenusChart';
import { PopularProductsChart } from './popularProductsChart';

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthDashboardCard />
          <MonthAmountOrdersDashboardCard />
          <DayAmountOrdersDashboardCard />
          <MonthCancelCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueCharts />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
