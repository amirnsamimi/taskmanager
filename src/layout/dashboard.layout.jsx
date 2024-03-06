import Reportwidget from "../components/Reportwidgct/Reportwidget";
import Dailyprogress from "../components/dailyprogress/dailyprogress";
import Menu from "../components/menu/Menu";
import Profile from "../components/profile/profile";
import ReportCard from "../components/reportCard/ReportCard";
import TaskCard from "../components/task card/TaskCard";
import People from "../components/task card/micro components/people";
import Swipe from "../components/task card/micro components/swipe";
import Taskmanagments from "../components/taskmanagment/Taskmanagments";


const Dashboard = () => {

let date = new Intl.DateTimeFormat('fa-IR').format(new Date());


return(
<div className="dashboard-container">
<div><Profile fullName="sajjad khodabiamorz" userName="sajjad1379" />
<Menu /><Reportwidget />
</div>
<div><div className="dashboard-taskcard"><TaskCard todaydate={date} idbadge={"sajjad"} hours={24} input={<People />} /><TaskCard todaydate={date} idbadge={"sajjad"} hours={24} input={<Swipe  />} /></div><Taskmanagments /></div>
<div><Dailyprogress /></div>
</div>
)
}


export default Dashboard;