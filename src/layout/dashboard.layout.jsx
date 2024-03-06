import Menu from "../components/menu/Menu";
import Profile from "../components/profile/profile";
import ReportCard from "../components/reportCard/ReportCard";

const Dashboard = () => {


return(
<div className="dashboard-container">
<div><Profile fullName="sajjad khodabiamorz" userName="sajjad1379" />
<Menu /><ReportCard amount={24} variable={"hour"}  />
</div>
<div>dsa</div>
<div>123</div>
</div>
)
}


export default Dashboard;