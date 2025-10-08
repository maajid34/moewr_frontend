
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/home";
import Ministry from "./component/about/ministry";
import Minister from "./component/about/ministers";
import Water from "./component/department/water";
import Energy from "./component/department/Energy";
import AdminFinace from "./component/department/adminFinanace";
import PlanningPolicy from "./component/department/policy&planning";
import EnergyProject from "./component/projects/energy";
import Home from "./component/home";
import AdminSidebar from "./component/Admin/Dashboard";
import EnergyProjectFormUI from "./component/Admin/energyProject/energyProjectForm";
import SingalProjectsEnergy from "./component/Admin/energyProject/energyProjectDetailts";
import ProjectAchievementForm from "./component/Admin/acheivments";
import TenderProgressCardUI from "./component/Admin/readAcheivments";
import AdminForm from "./component/Admin/AdminForm";
import AdminLogin from "./component/Admin/AdminLogin";
import ProtectedRouter from "./pages/protectedRouter";
import Header from "./pages/header";
import WaterProject from "./component/projects/waterProjects";
import WaterProjectFormUI from "./component/Admin/waterProject/waterProjectForm";
import SingalProjectsWater from "./component/Admin/waterProject/waterProjectDetails";
import WaterAchievementForm from "./component/Admin/waterProject/waterAchievments";

import SingalProjectsEvent from "./component/Event/EventProjectDetails";
import WaterAchievementsTable from "./component/Admin/waterProject/waterAchievmetTable";
import EnergyProjectTable from "./component/Admin/energyProject/EnergyprojectTable";
import EnergyProjectUpdate from "./component/Admin/energyProject/EnergyprojectUpdate";
import WaterProjectTable from "./component/Admin/waterProject/waterProjectTable";
import WaterProjectUpdate from "./component/Admin/waterProject/waterProjectUpdate";
import DashboardCards from "./component/Admin/home";
import WaterAchievementUpdate from "./component/Admin/waterProject/waterAcievUpdateForm";
import EnergyAchievementsTable from "./component/Admin/energyProject/EnergyAchievTable";
import EnergyAchievementForm from "./component/Admin/energyProject/EnergyAchievForm";
import EnergyAchievementUpdate from "./component/Admin/energyProject/EnergyAchievUpdateForm";
import Eventproject from "./component/Event/eventPost";
import EventCreateForm from "./component/Event/EventForm";
import EventTable from "./component/Event/EventTable";
import EventUpdateForm from "./component/Event/EventUpdateForm";
import AssessmentsPost from "./component/Assessments/assesmentPost";
import DocumentManagerForm from "./component/Assessments/assessmentForm";
import AssessmentDashsPost from "./component/Assessments/assessDashbaordPost";
import AssessmentUpdateForm from "./component/Assessments/assessmentUpdate";
import EnergyProjectPhotosForm from "./component/Admin/energyProject/projectPhoto/EnergyPhotoForm";
import EnergyProjectPhotosTable from "./component/Admin/energyProject/projectPhoto/EnergyPhotoTable";
import WaterProjectPhotosTable from "./component/Admin/waterProject/waterprojectPhotos/WaterPhotoTable";
import Warehosue from "./component/department/warehouse";
import WaterLabaratory from "./component/department/waterLabaratory";
import InventoryCreateForm from "./component/department/wareHouse/InventoryCreateForm";





// layout leh Dashboard (Energyproject form,achievments form,waterProject)

function DashboardLayout({children}){
  return (
    <div>
      <AdminSidebar />
      {children}
    </div>
  )
}


// layout leh header leh
function MainLayout({children}){
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout> } />
        <Route path="/Ministry" element={<MainLayout><Ministry /></MainLayout>} />
        <Route path="/minister" element={<MainLayout> <Minister /> </MainLayout>} />
        <Route path="/water" element={<MainLayout><Water /></MainLayout>} />
        <Route path="/Energy" element={<MainLayout><Energy /></MainLayout>} />
        <Route path="/Admin&finace" element={ <MainLayout><AdminFinace /> </MainLayout>} />
        <Route path="/PlanningPolicy" element={<MainLayout><PlanningPolicy /></MainLayout>} />
        <Route path="/EnergyProject" element={<MainLayout><EnergyProject /></MainLayout>} />
        <Route path="/WaterProject" element={<MainLayout><WaterProject /></MainLayout>} />
        <Route path="/EventPost" element={<MainLayout><Eventproject /></MainLayout>} />
        <Route path="/Dashboard" element={<ProtectedRouter><AdminSidebar /></ProtectedRouter>} />
        <Route path="/energyProjectForm" element={<ProtectedRouter><DashboardLayout><EnergyProjectFormUI /> </DashboardLayout></ProtectedRouter> } />
        <Route path="/WaterProjectForm" element={<ProtectedRouter><DashboardLayout><WaterProjectFormUI /> </DashboardLayout></ProtectedRouter> } />
        <Route path="/SingalProjectsEnergy/:id" element={<MainLayout><SingalProjectsEnergy /></MainLayout>} />
        <Route path="/SingalProjectsEvent/:id" element={<MainLayout><SingalProjectsEvent /></MainLayout>} />
        <Route path="/SingalProjectsWater/:id" element={<MainLayout><SingalProjectsWater /></MainLayout>} />
        <Route path="/ProjectAchievementForm" element={<ProtectedRouter><DashboardLayout><ProjectAchievementForm /></DashboardLayout></ProtectedRouter>} />
        <Route path="/WaterAchievementForm" element={<ProtectedRouter><DashboardLayout><WaterAchievementForm /></DashboardLayout></ProtectedRouter>} />
        <Route path="/project/:id/achievements" element={<MainLayout><TenderProgressCardUI /></MainLayout>} />
        <Route path="/AdminForm" element={<AdminForm />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/WaterAchievementsTable" element={<DashboardLayout><WaterAchievementsTable /></DashboardLayout>} />
        <Route path="/EnergyProjectTable" element={<DashboardLayout><EnergyProjectTable /></DashboardLayout>} />
        <Route path="/WaterProjectTable" element={<DashboardLayout><WaterProjectTable /></DashboardLayout>} />
        <Route path="/WaterProjectUpdate/:id" element={<DashboardLayout><WaterProjectUpdate /></DashboardLayout>} />
        <Route path="/DashboardCards" element={<DashboardLayout><DashboardCards /></DashboardLayout>} />
        <Route path="/EnergyProjectUpdate/:id" element={<ProtectedRouter><DashboardLayout><EnergyProjectUpdate /></DashboardLayout></ProtectedRouter>} />
        <Route path="/WaterAchievementUpdate/:id/:index" element={<DashboardLayout><WaterAchievementUpdate /></DashboardLayout>}/>
        <Route path="/EnergyAchievementUpdate/:id/:index" element={<DashboardLayout><EnergyAchievementUpdate /></DashboardLayout>}/>
        <Route path="/EnergyAchievementsTable" element={<DashboardLayout><EnergyAchievementsTable /></DashboardLayout>}/>
        <Route path="/EnergyAchievementForm" element={<DashboardLayout><EnergyAchievementForm /></DashboardLayout>}/>
        <Route path="/EventCreateForm" element={<DashboardLayout><EventCreateForm /></DashboardLayout>}/>
        <Route path="/EventTable" element={<DashboardLayout><EventTable /></DashboardLayout>}/>
        <Route path="/EventUpdateForm/:id" element={<DashboardLayout><EventUpdateForm /></DashboardLayout>}/>
        <Route path="/AssessmentsPost" element={<MainLayout><AssessmentsPost /></MainLayout>}/>
        <Route path="/Warehouse" element={<MainLayout><Warehosue /></MainLayout>}/>
        <Route path="/WaterLabaratory" element={<MainLayout><WaterLabaratory /></MainLayout>}/>
        <Route path="/DocumentManagerForm" element={<DashboardLayout><DocumentManagerForm /></DashboardLayout>}/>
        <Route path="/AssessmentDashsPost" element={<DashboardLayout><AssessmentDashsPost /></DashboardLayout>}/>
        <Route path="/AssessmentUpdateForm/:id" element={<DashboardLayout><AssessmentUpdateForm /></DashboardLayout>}/>
        
        


{/* energy project photo */}

<Route path="/EnergyProjectPhotosForm" element={<DashboardLayout><EnergyProjectPhotosForm/></DashboardLayout>}/>
<Route path="/EnergyProjectPhotosTable" element={<DashboardLayout><EnergyProjectPhotosTable/></DashboardLayout>}/>


{/* water project phote route */}
<Route path="/WaterProjectPhotosTable" element={<DashboardLayout><WaterProjectPhotosTable/></DashboardLayout>}/>


{/* ware house */}
<Route path="/InventoryCreateForm" element={<DashboardLayout><InventoryCreateForm/></DashboardLayout>}/>
 
      </Routes>
     

    </>
    
  );
}

export default App